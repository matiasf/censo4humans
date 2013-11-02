package uy.com.leecenso;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.util.StringUtil;

import com.google.common.base.Strings;

public class DiccionarioVariablesHelper {

	public static void main(String[] args) {
		try {
			FileInputStream xlsFile = new FileInputStream(new File("DiccionarioDeVariablesRevisado.xls"));
			BufferedWriter writer = new BufferedWriter(new FileWriter("diccionarioOutput.js", false));

			// Get the workbook instance for XLS file
			HSSFWorkbook workbook = new HSSFWorkbook(xlsFile);

			// Get first sheet from the workbook
			HSSFSheet sheet = workbook.getSheetAt(0);
			
			Map<String, String> varCodeNameMap = new HashMap<String, String>();
			DecimalFormat df = new DecimalFormat("0");
			
			System.out.println("Starting creation of content...");
			
			// Iterate through each rows from sheet
			Iterator<Row> rowIterator = sheet.iterator();
			while (rowIterator.hasNext()) 
			{
				Row row = rowIterator.next();
				
				String varCode = getStringValue(row.getCell(1), df);
				String varValue = getStringValue(row.getCell(2), df);	
				String varValueDesc = getStringValue(row.getCell(3), df);
				
				//if it's an empty line, escape it:
				if (!(Strings.isNullOrEmpty(varCode) && Strings.isNullOrEmpty(varValue) && Strings.isNullOrEmpty(varValueDesc))) 
				{
					//starts a new variable:
					if (!Strings.isNullOrEmpty(varCode)) {
						
						String varDesc = getStringValue(row.getCell(0), df);
						if (!Strings.isNullOrEmpty(varDesc))
							varCodeNameMap.put(varCode, varDesc);
						
						writer.append("}");
						writer.newLine();
						
						writer.append("var " + varCode + " = {");
						writer.newLine();
					}
					
					if (!Strings.isNullOrEmpty(varValue) && !Strings.isNullOrEmpty(varValueDesc)) {
						writer.append("\t\"" + varValue + "\":\"" + varValueDesc + "\","); 
						writer.newLine();
					}
				}
			}
			writer.append("}");
			writer.newLine();
			
			writer.append("var facetsForHogares = [");
			writer.newLine();
			for (String varCode : varCodeNameMap.keySet()) {
				writer.append("\t'" + varCode + "',");
				writer.newLine();
			}
			writer.append("];");
			writer.newLine();
			
			writer.append("var hogaresFacetValuesDescMap = {");
			writer.newLine();
			for (String varCode : varCodeNameMap.keySet()) {
				writer.append("\t'" + varCode + "': " + varCode + ",");
				writer.newLine();
			}
			writer.append("};");
			writer.newLine();
			
			writer.append("var hogaresFacetDesc = {");
			writer.newLine();
			for (String varCode : varCodeNameMap.keySet()) {
				writer.append("\t'" + varCode + "': '" + varCodeNameMap.get(varCode) + "',");
				writer.newLine();
			}
			writer.append("};");
			writer.newLine();
			
			xlsFile.close();
			writer.close();
			
			System.out.println("Ceation of content finished");

		} catch (IOException e) {
			e.printStackTrace();
		} 
	}

	protected static String getStringValue(Cell cell, DecimalFormat df) 
	{
		String result = "";
		
		switch (cell.getCellType()) {
			case Cell.CELL_TYPE_NUMERIC:
				if (df != null)
					result = df.format(Double.valueOf(cell.getNumericCellValue()).intValue());
				else
					result = String.valueOf(cell.getNumericCellValue());
				break;
			case Cell.CELL_TYPE_STRING:
				result = cell.getStringCellValue();
			break;
		}
		return result;
	}
}
