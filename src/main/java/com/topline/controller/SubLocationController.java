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

import com.topline.model.SubLocations;
import com.topline.model.wrappers.SubLocationWrapper;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponse;

@Controller
@RequestMapping(value = "/subLocations")
public class SubLocationController extends BaseController {
	//save SubLocation
			@RequestMapping(value="/saveSubLocation.action", method=RequestMethod.POST)
			private @ResponseBody StandardJsonResponse saveSubLocation(HttpServletRequest request){
				try{
					String slocCode=GlobalCC.CheckNullValues(request.getParameter("slocCode"));
					String slocLocCode=GlobalCC.CheckNullValues(request.getParameter("slocLocCode"));
					String slocShtDesc=GlobalCC.CheckNullValues(request.getParameter("slocShtDesc"));
					String slocDescription=GlobalCC.CheckNullValues(request.getParameter("slocDescription"));
					SubLocations subLocations=new SubLocations();
					subLocations.setSlocCode(slocCode==null?null:Integer.parseInt(slocCode));
					subLocations.setSlocLocCode(Integer.parseInt(slocLocCode));
					subLocations.setSlocShtDesc(slocShtDesc);
					subLocations.setSlocDescription(slocDescription);
					
					if(slocCode==null){
						subLocationMapper.insert(subLocations);
						jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
					}else{
						subLocationMapper.updateByPrimaryKey(subLocations);
						jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
					}
					jsonResponse.setSuccess(true);	
					
					ObjectMapper mapper = new ObjectMapper();
			        String json = mapper.writeValueAsString(jsonResponse);
			        System.out.println(json);
			        
					return jsonResponse;
				}catch(Exception e){
					e.printStackTrace();
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", e.getLocalizedMessage());
					return jsonResponse;
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
			StandardJsonResponse deleteSubLocation(HttpServletRequest request){
				try{
					String slocCode=GlobalCC.CheckNullValues(request.getParameter("slocCode"));
					if(slocCode!=null){
						categoryMapper.deleteByPrimaryKey(Integer.parseInt(slocCode));
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
							"The SubLocation has Dependencies it cannot be Deleted");
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
