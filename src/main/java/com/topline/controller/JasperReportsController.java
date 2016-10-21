package com.topline.controller;

import java.io.File;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import net.sf.jasperreports.engine.JRAbstractExporter;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperRunManager;
import net.sf.jasperreports.engine.export.JRCsvExporter;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.export.JRRtfExporter;
import net.sf.jasperreports.engine.export.JRXlsExporter;
import net.sf.jasperreports.engine.export.oasis.JROdsExporter;
import net.sf.jasperreports.engine.export.oasis.JROdtExporter;
import net.sf.jasperreports.engine.export.ooxml.JRDocxExporter;
import net.sf.jasperreports.engine.export.ooxml.JRPptxExporter;
import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;
import net.sf.jasperreports.export.Exporter;
import net.sf.jasperreports.export.ExporterInput;
import net.sf.jasperreports.export.ExporterOutput;
import net.sf.jasperreports.export.OutputStreamExporterOutput;
import net.sf.jasperreports.export.PdfExporterConfiguration;
import net.sf.jasperreports.export.PdfReportConfiguration;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.export.SimpleWriterExporterOutput;
import net.sf.json.JSONObject;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.jasperreports.JasperReportsMultiFormatView;

import com.topline.utils.GlobalCC;


@Controller
@RequestMapping(value = "/reports")
public class JasperReportsController extends BaseController{
	@Autowired(required = true)
	private DataSource ormDataSource;
	private Connection conn=null; 
	
	private byte[] bytes = new byte[0];
	private File fileReport = null;
	private JasperReportsMultiFormatView jMultiView;
	Map<String, Object> parameters = new HashMap<String, Object>();
	private static String EXPORT_DIR = "export/"; 
	public DataSource getOrmDataSource() {
		return ormDataSource;
	}
	public void setOrmDataSource(DataSource ormDataSource) {
		this.ormDataSource = ormDataSource;
	}
	public File getFileReport() {
		return fileReport;
	}
	public void setFileReport(File fileReport) {
		this.fileReport = fileReport;
	}
	/*@RequestMapping("/purchasesRpt.action")
	private void purchaseRpt(HttpServletRequest request,
			HttpServletResponse response) throws Exception{
		ModelAndView mv = null;
		try{
			parameters.clear();
			Map<String, Object> model = new HashMap<String, Object>();
			String reportType = null;
			 String reportName= request.getParameter("reportName");
			if (reportType == null) {
				reportType = "pdf";
			}
			conn=ormDataSource.getConnection(); 
			String filePath = null;
			filePath = getServletContext().getRealPath("/reports/Purchases.jasper");
			System.out.println("filePath=== "+filePath);
			setFileReport(new File(filePath));
			fileReport = getFileReport();
			reportName = "Purchases";			
			System.out.println("reportType --> " + reportType);
			/*JasperPrint jasperprint = JasperFillManager.fillReport(fileReport.getPath(),parameters, conn);
			String outfile=generateReport("PDF",jasperprint);
			System.out.println("output --> " + outfile);
			
		}catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception Occured  profileHandler-> ");
		}
		return;
	}*/
	/*@RequestMapping("/productRpt.action")
	private void productRpt(HttpServletRequest request,
			HttpServletResponse response) throws Exception{
		ModelAndView mv = null;
		try{
			parameters.clear();
			Map<String, Object> model = new HashMap<String, Object>();
			String reportType = null;
			 String reportName= request.getParameter("reportName");
			if (reportType == null) {
				reportType = "pdf";
			}
			conn=ormDataSource.getConnection(); 
			String filePath = null;
			filePath = getServletContext().getRealPath("/reports/Products.jasper");
			setFileReport(new File(filePath));
			fileReport = getFileReport();
			reportName = "Products";			
			System.out.println("reportType --> " + reportType);
			bytes = generateReportData();
			ServletOutputStream servletOutputStream = response.getOutputStream();
			response.setHeader("Content-disposition", "attachment; filename="+ "Products.pdf");
			response.setContentLength(bytes.length);
			servletOutputStream.write(bytes, 0, bytes.length);
			servletOutputStream.flush();
			servletOutputStream.close();
			ormDataSource.getConnection().close();
			model.put("reportType", reportType);
		}catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception Occured  profileHandler-> ");
		}
		return;
	}*/
	
	@RequestMapping("/productRpt.action")
	private void productRpt(HttpServletRequest request,
			HttpServletResponse response) throws Exception{
		ModelAndView mv = null;
		try{
			parameters.clear();
			Map<String, Object> model = new HashMap<String, Object>();
			String reportType = null;
			 String reportName= request.getParameter("reportName");
			if (reportType == null) {
				reportType = "pdf";
			}
			conn=ormDataSource.getConnection(); 
			String filePath = null;
			filePath = getServletContext().getRealPath("/reports/Products.jasper");
			setFileReport(new File(filePath));
			fileReport = getFileReport();
			reportName = "Products";			
			System.out.println("reportType --> " + reportType);
			String output = runToPdfFileData();
			System.out.println("output --> " + output);
		}catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception Occured  profileHandler-> ");
		}
		return;
	}
	private String runToPdfFileData() throws JRException{
		return JasperRunManager.runReportToPdfFile(fileReport.getPath(),
				parameters, conn);
	}
	private byte[] generateReportData() throws JRException, SQLException {

		return JasperRunManager.runReportToPdf(fileReport.getPath(),
				parameters, conn);

	}
	private String generateReport(String reportType, JasperPrint jasperPrint) throws JRException { 
        String destinationFileName = getDestinationFileName(reportType); 
        System.out.println("destinationFileName== "+destinationFileName);
        switch (reportType) { 
            case "PDF": 
                JasperExportManager.exportReportToPdfFile(jasperPrint, destinationFileName); 
                break; 
            case "XML": 
                JasperExportManager.exportReportToXmlFile(jasperPrint, destinationFileName, true); 
                break; 
            case "XML_EMBED": 
                JasperExportManager.exportReportToXmlFile(jasperPrint, destinationFileName, true); 
                break; 
            case "XHTML": 
            case "HTML": 
                JasperExportManager.exportReportToHtmlFile(jasperPrint, destinationFileName); 
                break; 
            case "CSV": 
                JRCsvExporter csvExporter = new JRCsvExporter(); 
                csvExporter.setExporterInput(new SimpleExporterInput(jasperPrint)); 
                csvExporter.setExporterOutput(new SimpleWriterExporterOutput(destinationFileName)); 
                csvExporter.exportReport(); 
                break; 
            case "RTF": 
            case "XLS": 
            case "ODT": 
            case "ODS": 
            case "DOCX": 
            case "XLSX": 
            case "PPTX": 
 
            case "JXL": 
                ExporterInput input = new SimpleExporterInput(jasperPrint); 
                ExporterOutput output = new SimpleOutputStreamExporterOutput(destinationFileName); 
 
               
				Exporter exporter = createExporter(reportType); 
                if (exporter == null) { 
                    break; 
                } 
                exporter.setExporterInput(input); 
                exporter.setExporterOutput(output); 
                exporter.exportReport(); 
                break; 
            default: 
                break; 
        } 
        return destinationFileName; 
    } 
	private  String getDestinationFileName(String reportType) { 
		 String exportPath=getServletContext().getRealPath("/export/");
        File exportFolder = new File(exportPath); 
        if (!exportFolder.exists() || !exportFolder.isDirectory()) { 
            exportFolder.mkdir(); 
        } 
 
        String output = exportPath  + "_" + getDateTime(); 
 
        return output + "." + reportType; 
 
    } 
	public static String getDateTime() { 
        Date createDate = new Date(System.currentTimeMillis()); 
        SimpleDateFormat formatDate = new SimpleDateFormat("dd-MM-yyyy hh-mm-ss"); 
        return formatDate.format(createDate); 
    } 
	
	
	private Exporter createExporter(String type) { 
        switch (type) { 
            case "CSV": 
                return new JRCsvExporter(); 
            case "RTF": 
                return new JRRtfExporter(); 
            case "XLS": 
                return new JRXlsExporter(); 
            case "ODT": 
                return new JROdtExporter(); 
            case "ODS": 
                return new JROdsExporter(); 
            case "DOCX": 
                return new JRDocxExporter(); 
            case "XLSX": 
                return new JRXlsxExporter(); 
            case "PPTX": 
                return new JRPptxExporter(); 
            default: 
                return null; 
        } 
    } 
	@RequestMapping("/purchasesRpt.action")
	private void purchaseRpt(HttpServletRequest request,
			HttpServletResponse response) throws Exception{
		ModelAndView mv = null;
		try{
			parameters.clear();
			Map<String, Object> model = new HashMap<String, Object>();
			String reportType = null;
			 String reportName= request.getParameter("reportName");
			 
			if (reportType == null) {
				reportType = "pdf";
			}
			conn=ormDataSource.getConnection(); 
			String filePath = null;
			filePath = getServletContext().getRealPath("/reports/Purchases.jasper");
			//System.out.println("filePath=== "+filePath);
			setFileReport(new File(filePath));
			fileReport = getFileReport();
			reportName = "Purchases";			
			//System.out.println("reportType --> " + reportType);
			
			
			JasperPrint print = JasperFillManager.fillReport(fileReport.getPath(),parameters, conn);	
			Exporter<ExporterInput, PdfReportConfiguration, PdfExporterConfiguration, OutputStreamExporterOutput> exportador = new JRPdfExporter();
				exportador.setExporterInput(new SimpleExporterInput(print));
				exportador.setExporterOutput(new SimpleOutputStreamExporterOutput(response.getOutputStream()));
				
				response.setContentType("application/pdf");
				response.setHeader("Content-Disposition", "attachment; filename="+ "purchases.pdf");
				
				exportador.exportReport();
			
			
		}catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception Occured  profileHandler-> ");
		}
		return;
	}
	@RequestMapping("/summarySales.action")
	private void summarySales(HttpServletRequest request,
			HttpServletResponse response) throws Exception{
		ModelAndView mv = null;
		try{
			parameters.clear();			
			String reportType = null;
			 String reportName= request.getParameter("reportName");
			 String dateFrom=GlobalCC.CheckNullValues(request.getParameter("dateFrom"));
			 String dateTo=GlobalCC.CheckNullValues(request.getParameter("dateTo"));
			 System.out.println("dateFrom=== "+dateFrom+" dateTo== "+dateTo);
			 parameters.put("FROM_DATE", dateFrom);
			 parameters.put("TO_DATE", dateTo);
			if (reportType == null) {
				reportType = "pdf";
			}
			conn=ormDataSource.getConnection(); 
			String filePath = null;
			filePath = getServletContext().getRealPath("/reports/SummarySales.jasper");
			//System.out.println("filePath=== "+filePath);
			setFileReport(new File(filePath));
			fileReport = getFileReport();
			reportName = "Summary Sales";			
			//System.out.println("reportType --> " + reportType);
			
			
			JasperPrint print = JasperFillManager.fillReport(fileReport.getPath(),parameters, conn);	
			Exporter<ExporterInput, PdfReportConfiguration, PdfExporterConfiguration, OutputStreamExporterOutput> exportador = new JRPdfExporter();
				exportador.setExporterInput(new SimpleExporterInput(print));
				exportador.setExporterOutput(new SimpleOutputStreamExporterOutput(response.getOutputStream()));
				
				response.setContentType("application/pdf");
				response.setHeader("Content-Disposition", "attachment; filename="+ "SummarySales.pdf");
				
				exportador.exportReport();
			
			
		}catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception Occured  profileHandler-> ");
		}
		return;
	}
	@RequestMapping("/main.action")
	private void SalesByItems(HttpServletRequest request,HttpServletResponse response) throws Exception{
		ModelAndView mv = null;
		try{
			parameters.clear();			
			String reportType = null;
			 String reportName= request.getParameter("reportName");
			 String dateFrom=GlobalCC.CheckNullValues(request.getParameter("dateFrom"));
			 String dateTo=GlobalCC.CheckNullValues(request.getParameter("dateTo"));
			 String asAt=GlobalCC.CheckNullValues(request.getParameter("asAt"));
			// System.out.println("dateFrom=== "+dateFrom+" dateTo== "+dateTo);
			 parameters.put("FROM_DATE", dateFrom);
			 parameters.put("TO_DATE", dateTo);
			 parameters.put("AS_AT", asAt);
			if (reportType == null) {
				reportType = "pdf";
			}
			conn=ormDataSource.getConnection(); 
			String filePath = null;
			filePath = getServletContext().getRealPath("/reports/"+reportName+".jasper");
			//System.out.println("filePath=== "+filePath);
			setFileReport(new File(filePath));
			fileReport = getFileReport();
			//reportName = "Sales By Items";			
			//System.out.println("reportType --> " + reportType);
			
			
			JasperPrint print = JasperFillManager.fillReport(fileReport.getPath(),parameters, conn);	
			Exporter<ExporterInput, PdfReportConfiguration, PdfExporterConfiguration, OutputStreamExporterOutput> exportador = new JRPdfExporter();
				exportador.setExporterInput(new SimpleExporterInput(print));
				exportador.setExporterOutput(new SimpleOutputStreamExporterOutput(response.getOutputStream()));
				
				response.setContentType("application/pdf");
				response.setHeader("Content-Disposition", "attachment; filename="+ reportName+"."+reportType);
				
				exportador.exportReport();
			
			
		}catch (Exception e) {
			e.printStackTrace();
			System.out.println("Exception Occured  profileHandler-> ");
		}
		return;
	}
} 