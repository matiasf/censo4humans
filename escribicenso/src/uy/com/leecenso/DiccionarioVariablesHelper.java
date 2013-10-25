package uy.com.leecenso;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.Iterator;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.util.StringUtil;

import com.google.common.base.Strings;

public class DiccionarioVariablesHelper {

	public static void main(String[] args) {
		try {
			FileInputStream xlsFile = new FileInputStream(new File("/home/guillermo/Documents/data-oktober-fest/DiccionarioDeVariablesRevisado.xls"));
			BufferedWriter writer = new BufferedWriter(new FileWriter("/home/guillermo/Documents/data-oktober-fest/diccionarioOutput.js", true));

			// Get the workbook instance for XLS file
			HSSFWorkbook workbook = new HSSFWorkbook(xlsFile);

			// Get first sheet from the workbook
			HSSFSheet sheet = workbook.getSheetAt(0);
			
			// Iterate through each rows from sheet
			Iterator<Row> rowIterator = sheet.iterator();
			while (rowIterator.hasNext()) 
			{
				Row row = rowIterator.next();
				
				String varCode = getStringValue(row.getCell(0));
				String varValue = getStringValue(row.getCell(1));	
				String varValueDesc = getStringValue(row.getCell(2));
				
				//if it's an empty line, escape it:
				if (!(Strings.isNullOrEmpty(varCode) && Strings.isNullOrEmpty(varValue) && Strings.isNullOrEmpty(varValueDesc))) 
				{
					//starts a new variable:
					if (!Strings.isNullOrEmpty(varCode)) {
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

			xlsFile.close();
			writer.close();

		} catch (IOException e) {
			e.printStackTrace();
		} 
	}

	protected static String getStringValue(Cell cell) 
	{
		String result = "";
		switch (cell.getCellType()) {
			case Cell.CELL_TYPE_NUMERIC:
				DecimalFormat df = new DecimalFormat("00");
				result = df.format(Double.valueOf(cell.getNumericCellValue()).intValue());
				break;
			case Cell.CELL_TYPE_STRING:
				result = cell.getStringCellValue();
			break;
		}
		return result;
	}
}
