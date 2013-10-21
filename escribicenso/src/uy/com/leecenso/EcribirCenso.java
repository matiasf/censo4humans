package uy.com.leecenso;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

import nl.knaw.dans.common.dbflib.CorruptedTableException;
import nl.knaw.dans.common.dbflib.Field;
import nl.knaw.dans.common.dbflib.IfNonExistent;
import nl.knaw.dans.common.dbflib.Record;
import nl.knaw.dans.common.dbflib.Table;

import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrServer;
import org.apache.solr.common.SolrInputDocument;

import com.google.common.base.Splitter;
import com.google.common.collect.Lists;

public class EcribirCenso {
	
	private static void addDocuments(final HttpSolrServer solrServer, final Collection<SolrInputDocument> docs) throws SolrServerException, IOException {
		if (!docs.isEmpty()) {
			solrServer.add(docs);
			solrServer.commit();
			docs.clear();
		}
	}

	public static void main(String[] args) throws FileNotFoundException, IOException, CorruptedTableException, SolrServerException {
		final Properties prop = new Properties();
		prop.load(new FileInputStream("config.properties"));
		
		final SimpleDateFormat dateFormater = new SimpleDateFormat("MM/yyyy");
		
		final Collection<SolrInputDocument> docs = new ArrayList<SolrInputDocument>();
		for (final String tableMap : Lists.newArrayList(Splitter.on(',').
				trimResults().omitEmptyStrings().split(prop.getProperty("table-loads")))) {
			final Table table = new Table(new File(prop.getProperty("dbf-files") + tableMap.split(";")[0] + ".dbf"));
			table.open(IfNonExistent.ERROR);
			
			final List<List<String>> concatFields = new ArrayList<>();
			for (final String concats : prop.getProperty("concat-fields").split(",")) {
				final List<String> concatField = new ArrayList<>();
				for (final String field : concats.split(";")) {
					for (final Field attr : table.getFields()) {
						if (attr.getName().equalsIgnoreCase(field)) {
							concatField.add(attr.getName());
							break;
						}
					}
					if (concatField.size() == concats.split(";").length) {
						concatFields.add(concatField);
						break;
					}
				}
			}	
			
			final HttpSolrServer solrServer = new HttpSolrServer(tableMap.split(";")[1]);
			solrServer.setMaxRetries(1);
			solrServer.setConnectionTimeout(5000);
			solrServer.deleteByQuery("*:*");
			solrServer.commit();
			
			System.out.println("Number of rows to import on table " + tableMap.split(";")[0] + 
					": " + table.getRecordCount());
			
			int i = 0;
			long id = 0;
			int addedCount = 0;
			for (final Iterator<Record> iterator = table.recordIterator(); iterator.hasNext();) {
				final Record record = iterator.next();
				final SolrInputDocument document = new SolrInputDocument();
				i++;
				document.addField("ID", id);
				for (final Field attr : table.getFields()) {
					switch (attr.getType()) {
					case NUMBER:
						try {
							document.addField(attr.getName(), record.getNumberValue(attr.getName()));
						}	
						catch (final NumberFormatException ex) {
							document.addField(attr.getName(), "NULL");
						}
						break;
					case CHARACTER:
						document.addField(attr.getName(), record.getStringValue(attr.getName()).trim().isEmpty() ?
								"NULL" : record.getStringValue(attr.getName()).trim());
						break;
					case DATE:
						try {
							document.addField(attr.getName(), dateFormater.format(record.getDateValue(attr.getName())));
							document.addField(attr.getName() + "MES", dateFormater.format(record.getDateValue(attr.getName())).split("/")[0]);
							document.addField(attr.getName() + "ANO", dateFormater.format(record.getDateValue(attr.getName())).split("/")[1]);
						}	
						catch (final NumberFormatException ex) {
							document.addField(attr.getName(), "NULL");
						}						
						break;
					default:
						System.out.println("Field not supported" + attr.getType().name());
						break;
					}
					id++;
				}
				
				for (final List<String> concatField : concatFields) {
					String concatFieldName = "";
					String concatFieldValue = "";
					for (final String field : concatField) {
						concatFieldName += field;
						for (final Field tableField : table.getFields()) {
							if (tableField.getName().equalsIgnoreCase(field)) {
								switch (tableField.getType()) {
								case NUMBER:
									try {
										concatFieldValue += record.getNumberValue(tableField.getName());
									}	
									catch (final NumberFormatException ex) {
										concatFieldValue += "NULL";
									}
									break;
								case CHARACTER:
									concatFieldValue += record.getStringValue(tableField.getName()).trim();
									break;
								case DATE:
									try {
										concatFieldValue += dateFormater.format(record.getDateValue(tableField.getName()));
									}	
									catch (final NumberFormatException ex) {
										concatFieldValue += "NULL";
									}						
									break;
								default:
									System.out.println("Field not supported" + tableField.getType().name());
									break;
								}
								break;
							}
						}
					}
					document.addField(concatFieldName, concatFieldValue);
				}
				
				docs.add(document);
				
				if (i == 10000) {
					addedCount += i;
					System.out.println("Adding - " + addedCount);
					i = 0;
					addDocuments(solrServer, docs);
				}
			}
			addedCount += i;
			System.out.println("Adding - " + addedCount);
			i = 0;
			addDocuments(solrServer, docs);
		}
	}

}