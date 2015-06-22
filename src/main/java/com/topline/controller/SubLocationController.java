package com.topline.controller;

import java.math.BigDecimal;
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

import com.topline.model.Categories;
import com.topline.model.SubLocations;
import com.topline.model.wrappers.SubLocationWrapper;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponse;

@Controller
@RequestMapping(value = "/subLocations")
public class SubLocationController extends BaseController {
	//save SubLocation
			@RequestMapping(value="/saveSubLocation.action", method=RequestMethod.POST)
			private @ResponseBody String saveSubLocation(HttpServletRequest request){
				
				try{
					ObjectMapper mapper = new ObjectMapper();
					String data=GlobalCC.CheckNullValues(request.getParameter("data"));
					SubLocations subLocations=mapper.readValue(data, SubLocations.class);
					if(subLocations.getSlocCode()==null){
						subLocationMapper.insert(subLocations);
						jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
					}else{
						subLocationMapper.updateByPrimaryKey(subLocations);
						jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
					}
					jsonResponse.setSuccess(true);
					System.out.println(jsonObject(jsonResponse));
					return jsonObject(jsonResponse);
				}catch(Exception e){
					e.printStackTrace();
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", e.getLocalizedMessage());
					return jsonObject(jsonResponse);
				}
			}
			//fetch sublocations
			@RequestMapping(value="/fetchSubLocations.action", method=RequestMethod.GET)
			private @ResponseBody
			String fetchSubLocations(HttpServletRequest request){
			
				try{
					HashMap<String, Object> data = new HashMap<String, Object>();
					
					Map<String, Object> map = new HashMap<String, Object>();		
					
					String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
					String start = GlobalCC.CheckNullValues(request.getParameter("start"));
					String id=GlobalCC.CheckNullValues(request.getParameter("id"));
					System.out.println("my id=== "+id);
					if (limit == null) {
						limit = "50";
					}
					if (start == null) {
						start = "0";
					}
					if(id==null){
						jsonResponse.setData(null);
						jsonResponse.setSuccess(false);
						jsonResponse.addMessage("message", "Location particulars  have not been provided...");
						return jsonObject(jsonResponse);
					}else{
						map.put("id", new BigDecimal(id));
					}
					List<SubLocationWrapper> list=subLocationMapper.fetchSubLocations(map);
					
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
			//delete subLocation
			@RequestMapping(value="/deleteSubLocation.action")
			private @ResponseBody
			String deleteSubLocation(HttpServletRequest request){
				try{
					ObjectMapper mapper = new ObjectMapper();
					String data=GlobalCC.CheckNullValues(request.getParameter("data"));
					SubLocations subLocations=mapper.readValue(data, SubLocations.class);					
					//System.out.println("my id for delete===== "+subLocations.getSlocCode());
					if(subLocations.getSlocCode()!=null){
						subLocationMapper.deleteByPrimaryKey(subLocations.getSlocCode());
						jsonResponse.setSuccess(true);
						jsonResponse.addMessage("message", DELETED_SUCCESSFULLY);
					}
					jsonResponse.setData(null);					

					return jsonObject(jsonResponse);
					
				}catch (DataIntegrityViolationException ex) {
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					logger.error(ex);
					jsonResponse.addMessage("message",
							"The SubLocation has Dependencies it cannot be Deleted");
					return jsonObject(jsonResponse);

				}
				catch(Exception e){
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					logger.error(e.getLocalizedMessage());
					jsonResponse.addMessage(
									"message",
									e.getLocalizedMessage() == null ? "OOPS ! ERROR:: Occured while deleting....."
											: e.getLocalizedMessage());
					return jsonObject(jsonResponse);
				}
			}
}
