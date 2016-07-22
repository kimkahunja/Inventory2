package com.topline.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.model.wrappers.TransferDtlWrapper;
import com.topline.model.wrappers.TransferWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/transfer")
public class TransferController extends BaseController {
	// fetch transfers
		@RequestMapping(value = "/fetchTransfers.action", method = RequestMethod.GET)
		private @ResponseBody String fetchTransfers(HttpServletRequest request) {
			try {
				HashMap<String, Object> data = new HashMap<String, Object>();
				
				Map<String, Object> map = new HashMap<String, Object>();		
				
				String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
				String start = GlobalCC.CheckNullValues(request.getParameter("start"));
				String status=GlobalCC.CheckNullValues(request.getParameter("status"));
				String dateFrom=GlobalCC.CheckNullValues(request.getParameter("dateFrom"));
				String dateTo=GlobalCC.CheckNullValues(request.getParameter("dateTo"));
				//System.out.println("status=="+status+" dateFrom=="+dateFrom+" dateTo=="+dateTo);
				if (limit == null) {
					limit = "50";
				}
				if (start == null) {
					start = "0";
				}
				map.put("status", status==null? "POSTED":status);				
				map.put("dateFrom", dateFrom==null?null:GlobalCC.parseSQLDate(dateFrom));
				map.put("dateTo", dateFrom==null?null:GlobalCC.parseSQLDate(dateTo));
				List<TransferWrapper>list=transferMapper.fetchTransfers(map);
				
				if (list != null) {
					int count = list.size();
					data.put("count", count);
				}
				
				data.put("data", list);
				jsonResponse.setData(data);
				jsonResponse.setSuccess(true);
				return jsonObject(jsonResponse);
			} catch (Exception e) {
				e.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", e.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
		}
		// fetchRptTransfers
				@RequestMapping(value = "/fetchRptTransfers.action", method = RequestMethod.GET)
				private @ResponseBody String fetchRptTransfers(HttpServletRequest request) {
					try {
						HashMap<String, Object> data = new HashMap<String, Object>();
						
						Map<String, Object> map = new HashMap<String, Object>();		
						
						String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
						String start = GlobalCC.CheckNullValues(request.getParameter("start"));
						String status=GlobalCC.CheckNullValues(request.getParameter("status"));
						String dateFrom=GlobalCC.CheckNullValues(request.getParameter("dateFrom"));
						String dateTo=GlobalCC.CheckNullValues(request.getParameter("dateTo"));
						String id=GlobalCC.CheckNullValues(request.getParameter("id"));
						String product=GlobalCC.CheckNullValues(request.getParameter("product"));
						//System.out.println("status=="+status+" dateFrom=="+dateFrom+" dateTo=="+dateTo);
						if (limit == null) {
							limit = "50";
						}
						if (start == null) {
							start = "0";
						}
						map.put("status", status==null? "POSTED":status);				
						map.put("dateFrom", dateFrom==null?null:GlobalCC.parseSQLDate(dateFrom));
						map.put("dateTo", dateFrom==null?null:GlobalCC.parseSQLDate(dateTo));
						map.put("id",id==null?null:new BigDecimal(id));
						map.put("product",product==null?null:new BigDecimal(product));
						List<TransferDtlWrapper>list=transferDtlMapper.fetchRptTransfers(map);
						
						if (list != null) {
							int count = list.size();
							data.put("count", count);
						}
						
						data.put("data", list);
						jsonResponse.setData(data);
						jsonResponse.setSuccess(true);
						return jsonObject(jsonResponse);
					} catch (Exception e) {
						e.printStackTrace();
						jsonResponse.setData(null);
						jsonResponse.setSuccess(false);
						jsonResponse.addMessage("message", e.getLocalizedMessage());
						return jsonObject(jsonResponse);
					}
				}		
}
