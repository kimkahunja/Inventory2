package com.topline.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.model.Locations;
import com.topline.model.Products;
import com.topline.model.wrappers.ProductWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/product")
public class ProductController extends BaseController {
	@RequestMapping(value="/saveProduct.action", method=RequestMethod.POST)
	private @ResponseBody String saveProduct(HttpServletRequest request){
		try{
			ObjectMapper mapper = new ObjectMapper();
			String data=GlobalCC.CheckNullValues(request.getParameter("data"));
			Products product=mapper.readValue(data, Products.class);
			if(product.getPdtCode()==null){
				productMapper.insert(product);
				jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
			}else{
				productMapper.updateByPrimaryKey(product);
				jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			}
			jsonResponse.setData(null);
			jsonResponse.setSuccess(true);
			
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
	//fetch products
	@RequestMapping(value="/fetchProducts.action", method=RequestMethod.GET)
	private @ResponseBody
	String fetchProducts(HttpServletRequest request){
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();
			
			Map<String, Object> map = new HashMap<String, Object>();		
			
			String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request.getParameter("start"));
			String id=GlobalCC.CheckNullValues(request.getParameter("id"));
			
			if (limit == null) {
				limit = "50";
			}
			if (start == null) {
				start = "0";
			}
			if(id.trim().length()!=0){
				map.put("id", new BigDecimal(id));
			}
			List<ProductWrapper>list=productMapper.fetchProducts(map);
			if (list != null) {
				int count = list.size();
				data.put("count", count);
			}
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			return jsonObject(jsonResponse);
			
		}catch(Exception e){
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
		
	}
}
