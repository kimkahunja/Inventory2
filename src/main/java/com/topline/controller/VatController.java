package com.topline.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.model.Vat;
import com.topline.model.VatExample;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponse;

@Controller
@RequestMapping(value = "/vat")
public class VatController extends BaseController {
	// save vat
	@RequestMapping(value = "/saveVat.action", method = RequestMethod.POST)
	private @ResponseBody StandardJsonResponse saveVat(
			HttpServletRequest request) {
		try {
			String vatId=GlobalCC.CheckNullValues(request.getParameter("vatId"));
			String vatRate=GlobalCC.CheckNullValues(request.getParameter("vatRate"));
			String vatDate=GlobalCC.CheckNullValues(request.getParameter("vatDate"));
			Vat vat=new Vat();
			vat.setVatId(vatId);
			vat.setVatRate(vatRate==null?null:Double.parseDouble(vatRate));
			vat.setVatDate(GlobalCC.parseSQLDate(vatDate));
			if(vatId!=null){
				vatMapper.updateByPrimaryKey(vat);
				jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			}
			
			jsonResponse.setSuccess(true);	
			ObjectMapper mapper = new ObjectMapper();
	        String json = mapper.writeValueAsString(jsonResponse);
	        System.out.println(json);
	        
			return jsonResponse;
		} catch (Exception e) {
			
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonResponse;
		}
	}

	// fetch vat
	@RequestMapping(value = "/fetchVat.action", method = RequestMethod.GET)
	private @ResponseBody StandardJsonResponse fetchLocations(
			HttpServletRequest request) {
		try {
			HashMap<String, Object> data = new HashMap<String, Object>();
			
			Map<String, Object> map = new HashMap<String, Object>();		
			
			String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request.getParameter("start"));
			if (limit == null) {
				limit = "50";
			}
			if (start == null) {
				start = "0";
			}
			VatExample vatExample=new VatExample();
			List<Vat>list=vatMapper.selectByExample(vatExample);
			
			if (list != null) {
				int count = list.size();
				data.put("total", count);
			}
			
			data.put("results", list);
			jsonResponse.setData(data);
			
			ObjectMapper mapper = new ObjectMapper();
	        String json = mapper.writeValueAsString(jsonResponse);
	        System.out.println(json);
	        
			return jsonResponse;
		} catch (Exception e) {
			
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonResponse;
		}
	}

	// delete vat
	@RequestMapping(value = "/deleteVat.action")
	private @ResponseBody StandardJsonResponse deleteVat(
			HttpServletRequest request) {
		try {
			
			String vatId=GlobalCC.CheckNullValues(request.getParameter("vatId"));
			if(vatId!=null){
				vatMapper.deleteByPrimaryKey(vatId);
				jsonResponse.setSuccess(true);
				jsonResponse.addMessage("message", DELETED_SUCCESSFULLY);
			}
			jsonResponse.setData(null);
			
			ObjectMapper mapper = new ObjectMapper();
	        String json = mapper.writeValueAsString(jsonResponse);
	        System.out.println(json);
			return jsonResponse;
		}catch (DataIntegrityViolationException ex) {
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			logger.error(ex);
			jsonResponse.addMessage("message",
					"The Vat has Dependencies it cannot be Deleted");
			return jsonResponse;

		}
		catch(Exception e){
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			logger.error(e.getLocalizedMessage());
			jsonResponse.addMessage(
							"message",
							e.getLocalizedMessage() == null ? "OOPS ! ERROR:: Occured while deleting....."
									: e.getLocalizedMessage());
			return jsonResponse;
		}
	}
}
