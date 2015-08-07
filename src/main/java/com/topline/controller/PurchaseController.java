package com.topline.controller;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;






import com.topline.model.Purchase;
import com.topline.model.PurchaseDetail;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/purchase")
public class PurchaseController extends BaseController {
	@RequestMapping(value="/savePurchase.action")
	private @ResponseBody String savePurchase(HttpServletRequest request){
		try{
			ObjectMapper mapper = new ObjectMapper();
			String data=GlobalCC.CheckNullValues(request.getParameter("data"));
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
			Purchase purchase=mapper.readValue(data, Purchase.class);			
			List<PurchaseDetail> purchaseDetail = Arrays.asList(mapper.readValue(dataDetail, PurchaseDetail[].class));
			System.out.println("Supplier=== "+purchase.getPurAccCode());
			System.out.println("Invoice Number=== "+purchase.getPurInvono());
			System.out.println("Start of details......");
			for(int i=0;i<purchaseDetail.size();i++){
				System.out.println(purchaseDetail.get(i).getPurdPrice());
			}
			/*if(purchase.getPurId()==null){
				purchaseMapper.insert(purchase);
				jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
			}else{
				purchaseMapper.updateByPrimaryKey(purchase);
				jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			}*/
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
		
	}
}
