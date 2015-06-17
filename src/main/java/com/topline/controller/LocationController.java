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

import com.topline.model.Categories;
import com.topline.model.Locations;
import com.topline.model.LocationsExample;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponse;

@Controller
@RequestMapping(value = "/locations")
public class LocationController extends BaseController {
	//save location
		@RequestMapping(value="/saveLocation.action", method=RequestMethod.POST)
		private @ResponseBody String saveLocation(HttpServletRequest request){
			try{
				ObjectMapper mapper = new ObjectMapper();
				String data=GlobalCC.CheckNullValues(request.getParameter("data"));
				Locations locations=mapper.readValue(data, Locations.class);
				
				
				if (locations.getLocCode()==null){
					locationMapper.insert(locations);
					jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
				}
				else{
					locationMapper.updateByPrimaryKey(locations);
					jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
				}
				jsonResponse.setData(null);
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
		
		//fetch locations
		@RequestMapping(value="/fetchLocations.action", method=RequestMethod.GET)
		private @ResponseBody
		String fetchLocations(HttpServletRequest request)	{
			try{
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
				
				LocationsExample locationsExample=new LocationsExample();
				List<Locations> list=locationMapper.selectByExample(locationsExample);
				
				if (list != null) {
					int count = list.size();
					data.put("count", count);
				}
				
				data.put("data", list);
				jsonResponse.setData(data);
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
		
		//delete location
		@RequestMapping(value="/deleteLocation.action")
		private @ResponseBody
		String deleteLocation(HttpServletRequest request){
			try{
				ObjectMapper mapper = new ObjectMapper();
				String data=GlobalCC.CheckNullValues(request.getParameter("data"));
				Locations locations=mapper.readValue(data, Locations.class);
				
				if(locations.getLocCode()!=null){
					locationMapper.deleteByPrimaryKey(locations.getLocCode());
					jsonResponse.setSuccess(true);
					jsonResponse.addMessage("message", DELETED_SUCCESSFULLY);
				}
				jsonResponse.setData(null);
				
				return jsonObject(jsonResponse);
			}
			catch (DataIntegrityViolationException ex) {
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				logger.error(ex);
				jsonResponse.addMessage("message",
						"The Location has Dependencies it cannot be Deleted");
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
