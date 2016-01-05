package com.topline.controller;

import java.io.File;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperRunManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.jasperreports.JasperReportsMultiFormatView;

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
			filePath = getServletContext().getRealPath(
					"/reports/Purchases.jasper");
			setFileReport(new File(filePath));
			fileReport = getFileReport();
			reportName = "Purchases";
			
			System.out.println("reportType --> " + reportType);
			bytes = generateReportData();
			ServletOutputStream servletOutputStream = response
					.getOutputStream();
			response.setHeader("Content-disposition", "attachment; filename="
					+ "Purchases.pdf");
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
	}
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
			filePath = getServletContext().getRealPath(
					"/reports/Products.jasper");
			setFileReport(new File(filePath));
			fileReport = getFileReport();
			reportName = "Products";
			
			System.out.println("reportType --> " + reportType);
			bytes = generateReportData();
			ServletOutputStream servletOutputStream = response
					.getOutputStream();
			response.setHeader("Content-disposition", "attachment; filename="
					+ "Products.pdf");
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
	}
	private byte[] generateReportData() throws JRException, SQLException {

		return JasperRunManager.runReportToPdf(fileReport.getPath(),
				parameters, conn);

	}
} 