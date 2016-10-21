package com.topline.controller;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.model.ItemDiscrepancy;
import com.topline.model.ItemDiscrepancyDtlExample;
import com.topline.model.ItemDiscrepancyExample;
import com.topline.model.ItemReturn;
import com.topline.model.ItemReturnDtlExample;
import com.topline.model.ItemReturnExample;
import com.topline.model.ItemSwap;
import com.topline.model.ItemSwapDtlExample;
import com.topline.model.ItemSwapExample;
import com.topline.model.wrappers.ItemDiscrepancyDtlWrapper;
import com.topline.model.wrappers.ItemReturnDtlWrapper;
import com.topline.model.wrappers.ItemSwapDtlWrapper;
import com.topline.model.wrappers.PaymentDtlWrapper;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponseImpl;

@Controller
@RequestMapping(value = "/item")
public class ItemReturnController extends BaseController {
	//fetch Swap Original items
	@RequestMapping(value="/fetchSwapOriginal.action", method=RequestMethod.GET)
	private @ResponseBody String fetchSwapOriginal(HttpServletRequest request){
		StandardJsonResponseImpl jsonResponse=new StandardJsonResponseImpl();
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request.getParameter("start"));
			String accCode=GlobalCC.CheckNullValues(request.getParameter("accCode"));
			map.put("status", "PENDING");
			map.put("accCode", accCode==null?null:new BigDecimal(accCode));
			map.put("origSwap", "ORIG");			
			 List<ItemSwapDtlWrapper> list=itemSwapDtlMapper.fetchSwapItems(map);
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
	//fetch Swap Original items
		@RequestMapping(value="/fetchSwap.action", method=RequestMethod.GET)
		private @ResponseBody String fetchSwap(HttpServletRequest request){
			StandardJsonResponseImpl jsonResponse=new StandardJsonResponseImpl();
			try{
				HashMap<String, Object> data = new HashMap<String, Object>();			
				Map<String, Object> map = new HashMap<String, Object>();
				String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
				String start = GlobalCC.CheckNullValues(request.getParameter("start"));
				String accCode=GlobalCC.CheckNullValues(request.getParameter("accCode"));
				map.put("status", "PENDING");
				map.put("accCode", accCode==null?null:new BigDecimal(accCode));
				map.put("origSwap", "SWAP");			
				 List<ItemSwapDtlWrapper> list=itemSwapDtlMapper.fetchSwapItems(map);
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
	@RequestMapping(value="/saveSwapItem.action")
	@Transactional
	private @ResponseBody String saveSwapItem(HttpServletRequest request){
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
		TransactionStatus status = txnManager.getTransaction(def);
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			ObjectMapper mapper = new ObjectMapper();
			int swapId;
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
			String date = GlobalCC.CheckNullValues(request.getParameter("date"));			
			String accCode = GlobalCC.CheckNullValues(request.getParameter("accCode"));
			String userName = GlobalCC.CheckNullValues(request.getParameter("userName"));
			String origSwap = GlobalCC.CheckNullValues(request.getParameter("origSwap"));
			ItemSwap swap=new ItemSwap();
			List<ItemSwapDtlWrapper>swapDtl=Arrays.asList(mapper.readValue(dataDetail, ItemSwapDtlWrapper[].class)); 
			swap.setSwpAccCode(accCode==null?null:Integer.parseInt(accCode));
			swap.setSwpDate(GlobalCC.formatLongDateString(date));
			swap.setSwpDoneBy(userName);
			swap.setSwpStatus("PENDING");
			//determine whether there is any pending record for the current customer with status PENDING  AND retrive the pk
			try{
				ItemSwapExample example=new ItemSwapExample();
				ItemSwapExample.Criteria creteria=example.createCriteria();
				creteria.andSwpAccCodeEqualTo(accCode==null?null:Integer.parseInt(accCode));
				creteria.andSwpStatusEqualTo("PENDING");
				List<ItemSwap> list=itemSwapMapper.selectByExample(example);
				System.out.println("list.size()=== "+list.size());
				if(list.size()>1){
					txnManager.rollback(status);
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", "There is more than one Transaction pending for the chosen Customer...");
					return jsonObject(jsonResponse);
				}else if(list.size()==1){
					swapId=list.get(0).getSwpId();
				}else{
					itemSwapMapper.save(swap);
					swapId=swap.getSwpId();
					System.out.println("swapId=== "+swapId);
				}
									
			}catch(Exception ie){
				txnManager.rollback(status);
				ie.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", "Getting Customer Master transaction "+ie.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			// delete pending swap details then insert 
			try{
				ItemSwapDtlExample example=new ItemSwapDtlExample();
				ItemSwapDtlExample.Criteria creteria=example.createCriteria();
				creteria.andSwpdSwpIdEqualTo(swapId);
				creteria.andSwpdOrigSwapEqualTo(origSwap);
				itemSwapDtlMapper.deleteByExample(example);
				for(int i=0;i<swapDtl.size();i++){
					swapDtl.get(i).setSwpdSwpId(swapId);
					swapDtl.get(i).setSwpdOrigSwap(origSwap);
					itemSwapDtlMapper.insert(swapDtl.get(i));
				}
			}catch(Exception ex){
				txnManager.rollback(status);
				ex.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", "Processing Customer detail transactions "+ex.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			txnManager.commit(status);
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(null);
			jsonResponse.addMessage("message", "Transaction Saved successfully ...");
			return jsonObject(jsonResponse);	
		}catch(Exception e){
			txnManager.rollback(status);
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", "save Swap Item "+e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}		
		
	}
	//fetch returned items
			@RequestMapping(value="/fetchReturns.action", method=RequestMethod.GET)
			private @ResponseBody String fetchReturns(HttpServletRequest request){
				StandardJsonResponseImpl jsonResponse=new StandardJsonResponseImpl();
				try{
					HashMap<String, Object> data = new HashMap<String, Object>();			
					Map<String, Object> map = new HashMap<String, Object>();
					String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
					String start = GlobalCC.CheckNullValues(request.getParameter("start"));
					String accCode=GlobalCC.CheckNullValues(request.getParameter("accCode"));
					map.put("status", "PENDING");
					map.put("accCode", accCode==null?null:new BigDecimal(accCode));
							
					 List<ItemReturnDtlWrapper> list=itemReturnDtlMapper.fetchReturnItems(map);
					 if (list != null) {
							int count = list.size();
							data.put("count", count);
						}					
					data.put("data", list);
					jsonResponse.setData(data);
					jsonResponse.setSuccess(true);
					//System.out.println(jsonObject(jsonResponse));
					return jsonObject(jsonResponse);
				}catch(Exception e){
					e.printStackTrace();
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", e.getLocalizedMessage());
					return jsonObject(jsonResponse);
				}
				
			}
			
	@RequestMapping(value="/saveReturn.action")
	@Transactional
	private @ResponseBody String saveReturn(HttpServletRequest request){
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
		TransactionStatus status = txnManager.getTransaction(def);
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			ObjectMapper mapper = new ObjectMapper();
			int rtnId;
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
			String date = GlobalCC.CheckNullValues(request.getParameter("date"));			
			String accCode = GlobalCC.CheckNullValues(request.getParameter("accCode"));
			String userName = GlobalCC.CheckNullValues(request.getParameter("userName"));
			
			ItemReturn rtn=new ItemReturn();
			List<ItemReturnDtlWrapper>rtnDtl=Arrays.asList(mapper.readValue(dataDetail, ItemReturnDtlWrapper[].class)); 
			rtn.setRtnAccCode(accCode==null?null:Integer.parseInt(accCode));
			rtn.setRtnDate(GlobalCC.formatLongDateString(date));
			rtn.setRtnCapturedBy(userName);
			rtn.setRtnStatus("PENDING");
			
			//determine whether there is any pending record for the current customer with status PENDING  AND retrive the pk
			try{
				
				ItemReturnExample example=new ItemReturnExample();
				ItemReturnExample.Criteria creteria=example.createCriteria();
				creteria.andRtnAccCodeEqualTo(accCode==null?null:Integer.parseInt(accCode));
				creteria.andRtnStatusEqualTo("PENDING");
				List<ItemReturn> list=itemReturnMapper.selectByExample(example);				
				System.out.println("Return list.size()=== "+list.size());
				if(list.size()>1){
					txnManager.rollback(status);
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", "There is more than one Transaction pending for the chosen Customer...");
					return jsonObject(jsonResponse);
				}else if(list.size()==1){
					rtnId=list.get(0).getRtnId();
				}else{
					itemReturnMapper.save(rtn);
					rtnId=rtn.getRtnId();
					System.out.println("rtnId=== "+rtnId);
				}
									
			}catch(Exception ie){
				txnManager.rollback(status);
				ie.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", "Getting Customer Master transaction "+ie.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			// delete pending swap details then insert 
			try{
				
				ItemReturnDtlExample example=new ItemReturnDtlExample();
				ItemReturnDtlExample.Criteria creteria=example.createCriteria();
				creteria.andRtndRtnIdEqualTo(rtnId);				
				itemReturnDtlMapper.deleteByExample(example);
				for(int i=0;i<rtnDtl.size();i++){
					rtnDtl.get(i).setRtndRtnId(rtnId);					
					itemReturnDtlMapper.insert(rtnDtl.get(i));
				}
			}catch(Exception ex){
				txnManager.rollback(status);
				ex.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", "Processing Customer detail transactions "+ex.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			txnManager.commit(status);
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(null);
			jsonResponse.addMessage("message", "Transaction Saved successfully ...");
			return jsonObject(jsonResponse);	
		}catch(Exception e){
			txnManager.rollback(status);
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", "save return Item "+e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}		
		
	}
	//fetch Item Discrepancies
	@RequestMapping(value="/fetchDiscrepancies.action", method=RequestMethod.GET)
	private @ResponseBody String fetchDiscrepancies(HttpServletRequest request){
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			String limit = GlobalCC.CheckNullValues(request.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request.getParameter("start"));			
			map.put("status", "PENDING");
					
			 List<ItemDiscrepancyDtlWrapper> list=itemDiscrepancyDtlMapper.fetchDiscrepancyItems(map);
			 if (list != null) {
					int count = list.size();
					data.put("count", count);
				}
			 
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			//System.out.println(jsonObject(jsonResponse));
			return jsonObject(jsonResponse);
		}catch(Exception e){
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
		
	}
	@RequestMapping(value="/saveDiscrepancy.action")
	@Transactional
	private @ResponseBody String saveDiscrepancy(HttpServletRequest request){
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
		TransactionStatus status = txnManager.getTransaction(def);
		try{
			HashMap<String, Object> data = new HashMap<String, Object>();			
			Map<String, Object> map = new HashMap<String, Object>();
			ObjectMapper mapper = new ObjectMapper();
			int dscId;
			String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
			String date = GlobalCC.CheckNullValues(request.getParameter("date"));
			String userName = GlobalCC.CheckNullValues(request.getParameter("userName"));
			
			ItemDiscrepancy disc=new ItemDiscrepancy();
			
			List<ItemDiscrepancyDtlWrapper>discDtl=Arrays.asList(mapper.readValue(dataDetail, ItemDiscrepancyDtlWrapper[].class)); 
			disc.setDscDate(GlobalCC.formatLongDateString(date));
			disc.setDscCapturedBy(userName);	
			disc.setDscStatus("PENDING");
			
			
			//determine whether there is any pending record for the current customer with status PENDING  AND retrive the pk
			try{
				ItemDiscrepancyExample example=new ItemDiscrepancyExample();				
				ItemDiscrepancyExample.Criteria creteria=example.createCriteria();
				creteria.andDscStatusEqualTo("PENDING");
				List<ItemDiscrepancy>list=itemDiscrepancyMapper.selectByExample(example);
							
				System.out.println("Discrepancy list.size()=== "+list.size());
				if(list.size()>1){
					txnManager.rollback(status);
					jsonResponse.setData(null);
					jsonResponse.setSuccess(false);
					jsonResponse.addMessage("message", "There is more than one Transaction not posted...");
					return jsonObject(jsonResponse);
				}else if(list.size()==1){
					dscId=list.get(0).getDscId();
					disc.setDscId(dscId);
					itemDiscrepancyMapper.updateByPrimaryKeySelective(disc);
				}else{
					itemDiscrepancyMapper.save(disc);
					dscId=disc.getDscId();
					System.out.println("discrepancyid=== "+dscId);
				}
									
			}catch(Exception ie){
				txnManager.rollback(status);
				ie.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", "Getting Discrepancy Master transaction "+ie.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			// delete pending swap details then insert 
			try{
				ItemDiscrepancyDtlExample example=new ItemDiscrepancyDtlExample();				
				ItemDiscrepancyDtlExample.Criteria creteria=example.createCriteria();
				creteria.andDscdDscIdEqualTo(dscId);				
				itemDiscrepancyDtlMapper.deleteByExample(example);
				for(int i=0;i<discDtl.size();i++){
					discDtl.get(i).setDscdDscId(dscId);;					
					itemDiscrepancyDtlMapper.insert(discDtl.get(i));
				}
			}catch(Exception ex){
				txnManager.rollback(status);
				ex.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", "Processing Discrepancy detail transactions "+ex.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			txnManager.commit(status);
			jsonResponse.setSuccess(true);	
			jsonResponse.setData(null);
			jsonResponse.addMessage("message", "Transaction Saved successfully ...");
			return jsonObject(jsonResponse);	
		}catch(Exception e){
			txnManager.rollback(status);
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", "save discrepancy Item "+e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}		
		
	}
}
