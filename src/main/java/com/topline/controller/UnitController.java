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

import com.topline.model.Locations;
import com.topline.model.Units;
import com.topline.model.UnitsExample;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponse;

@Controller
@RequestMapping(value = "/units")
public class UnitController extends BaseController {
	//save units
			@RequestMapping(value="/saveUnit.action", method=RequestMethod.POST)
			private @ResponseBody String saveUnit(HttpServletRequest request){
				try{
					ObjectMapper mapper = new ObjectMapper();
					String data=GlobalCC.CheckNullValues(request.getParameter("data"));
					Units units=mapper.readValue(data, Units.class);
					
					if (units.getUntCode()==null){
						unitMapper.insert(units);
						jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
					}else{
						unitMapper.updateByPrimaryKey(units);
						jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
					}
					
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
			//fetch units
			@RequestMapping(value="/fetchUnits.action", method=RequestMethod.GET)
			private @ResponseBody
			String fetchUnits(HttpServletRequest request){
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
					UnitsExample unitExample=new UnitsExample();
					List<Units> list=unitMapper.selectByExample(unitExample);
					
					if (list != null) {
						int count = list.size();
						data.put("total", count);
					}
					
					data.put("results", list);
					jsonResponse.setData(data);
					
					return jsonObject(jsonResponse);
				}catch(Exception e){
					
					e.printStackTrace();
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", e.getLocalizedMessage());
					return jsonObject(jsonResponse);
				}
			}
			//delete unit
			@RequestMapping(value="/deleteUnit.action")
			private @ResponseBody
			String deleteUnit(HttpServletRequest request){
				try{
					
					ObjectMapper mapper = new ObjectMapper();
					String data=GlobalCC.CheckNullValues(request.getParameter("data"));
					Units units=mapper.readValue(data, Units.class);
					
					if(units.getUntCode()!=null){
						unitMapper.deleteByPrimaryKey(units.getUntCode());
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
							"The Unit has Dependencies it cannot be Deleted");
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
