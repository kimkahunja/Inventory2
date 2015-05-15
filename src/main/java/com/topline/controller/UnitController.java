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

import com.topline.model.Units;
import com.topline.model.UnitsExample;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponse;

@Controller
@RequestMapping(value = "/units")
public class UnitController extends BaseController {
	//save units
			@RequestMapping(value="/saveUnit.action", method=RequestMethod.POST)
			private @ResponseBody StandardJsonResponse saveUnit(HttpServletRequest request){
				try{
					String untCode=GlobalCC.CheckNullValues(request.getParameter("untCode"));
					String untShtDesc=GlobalCC.CheckNullValues(request.getParameter("untShtDesc"));
					String untDescription=GlobalCC.CheckNullValues(request.getParameter("untDescription"));
					String untPrecision=GlobalCC.CheckNullValues(request.getParameter("untPrecision"));
					
					Units units=new Units();
					units.setUntCode(untCode==null?null:Integer.parseInt(untCode));
					units.setUntShtDesc(untShtDesc);
					units.setUntDescription(untDescription);
					units.setUntPrecision(untPrecision==null?null:Double.parseDouble(untPrecision));
					if (untCode==null){
						unitMapper.insert(units);
						jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
					}else{
						unitMapper.updateByPrimaryKey(units);
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
			//fetch units
			@RequestMapping(value="/fetchUnits.action", method=RequestMethod.GET)
			private @ResponseBody
			StandardJsonResponse fetchUnits(HttpServletRequest request){
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
			//delete unit
			@RequestMapping(value="/deleteUnit.action")
			private @ResponseBody
			StandardJsonResponse deleteUnit(HttpServletRequest request){
				try{
					
					String untCode=GlobalCC.CheckNullValues(request.getParameter("untCode"));
					if(untCode!=null){
						unitMapper.deleteByPrimaryKey(Integer.parseInt(untCode));
						jsonResponse.setSuccess(true);
						jsonResponse.addMessage("message", DELETED_SUCCESSFULLY);
					}
					jsonResponse.setData(null);
					
					ObjectMapper mapper = new ObjectMapper();
			        String json = mapper.writeValueAsString(jsonResponse);
			        System.out.println(json);
			        
					return jsonResponse;
				}
				catch (DataIntegrityViolationException ex) {
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					logger.error(ex);
					jsonResponse.addMessage("message",
							"The Unit has Dependencies it cannot be Deleted");
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
