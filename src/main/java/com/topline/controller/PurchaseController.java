package com.topline.controller;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import com.topline.model.Purchase;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/purchase")
public class PurchaseController extends BaseController {
	@RequestMapping(value="/savePurchase.action")
	private @ResponseBody String savePurchase(HttpServletRequest request){
		try{
			ObjectMapper mapper = new ObjectMapper();
			String data=GlobalCC.CheckNullValues(request.getParameter("data"));
			Purchase purchase=mapper.readValue(data, Purchase.class);
			if(purchase.getPurId()==null){
				purchaseMapper.insert(purchase);
				jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
			}else{
				purchaseMapper.updateByPrimaryKey(purchase);
				jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			}
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(null);	        
	        return jsonObject(jsonResponse);
		}
		catch(Exception e){
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
		return null;
	}
}
