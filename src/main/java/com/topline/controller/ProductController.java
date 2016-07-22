package com.topline.controller;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.mappers.ProductsMapper;
import com.topline.model.Categories;
import com.topline.model.Locations;
import com.topline.model.Payment;
import com.topline.model.ProductMovement;
import com.topline.model.Products;
import com.topline.model.Transfer;
import com.topline.model.wrappers.PaymentDtlWrapper;
import com.topline.model.wrappers.ProductWrapper;
import com.topline.model.wrappers.TransferDtlWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/product")
public class ProductController extends BaseController {
	@RequestMapping(value = "/saveProduct.action", method = RequestMethod.POST)
	private @ResponseBody String saveProduct(HttpServletRequest request) {
		try {
			ObjectMapper mapper = new ObjectMapper();
			String data = GlobalCC
					.CheckNullValues(request.getParameter("data"));
			Products product = mapper.readValue(data, Products.class);
			System.out.println("status== " + product.getPdtStatus());
			if (product.getPdtCode() == null) {
				productMapper.insert(product);
				jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
			} else {
				productMapper.updateByPrimaryKey(product);
				jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			}
			jsonResponse.setData(null);
			jsonResponse.setSuccess(true);

			return jsonObject(jsonResponse);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}
	}

	// fetch products
	@RequestMapping(value = "/fetchProducts.action", method = RequestMethod.GET)
	private @ResponseBody String fetchProducts(HttpServletRequest request) {
		try {
			HashMap<String, Object> data = new HashMap<String, Object>();

			Map<String, Object> map = new HashMap<String, Object>();

			String limit = GlobalCC.CheckNullValues(request
					.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request
					.getParameter("start"));
			String id = GlobalCC.CheckNullValues(request.getParameter("id"));
			String searchData = GlobalCC.CheckNullValues(request
					.getParameter("query"));
			if (limit == null) {
				limit = "50";
			}
			if (start == null) {
				start = "0";
			}
			if (!(id == null)) {
				map.put("id", new BigDecimal(id));
			}
			if (!(searchData == null)) {
				map.put("searchData", searchData.toString().trim());
				List<ProductsMapper> list = productMapper
						.fetchTransProduct(map);
				if (list != null) {
					int count = list.size();
					data.put("count", count);
				}
				data.put("data", list);
			} else {
				List<ProductWrapper> list = productMapper.fetchProducts(map);
				if (list != null) {
					int count = list.size();
					data.put("count", count);
				}
				data.put("data", list);
			}

			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			return jsonObject(jsonResponse);

		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}

	}

	// fetch trans product
	@RequestMapping(value = "/fetchTransProduct.action")
	private @ResponseBody String fetchTransProduct(HttpServletRequest request) {
		try {
			// initialize
			// jsonResponse.setData(null);
			// jsonResponse.setSuccess(false);
			// jsonResponse.addMessage("message", null);
			HashMap<String, Object> data = new HashMap<String, Object>();

			Map<String, Object> map = new HashMap<String, Object>();

			String limit = GlobalCC.CheckNullValues(request
					.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request
					.getParameter("start"));
			String searchData = GlobalCC.CheckNullValues(request
					.getParameter("searchData"));

			if (limit == null) {
				limit = "50";
			}
			if (start == null) {
				start = "0";
			}

			if (!(searchData == null)) {
				System.out.println("MY DATA==" + searchData);
				map.put("searchData", searchData.toString().trim());
			}
			List<ProductsMapper> list = productMapper.fetchTransProduct(map);
			if (list != null) {
				int count = list.size();
				data.put("count", count);
			}
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			System.out.println(jsonObject(jsonResponse));
			return jsonObject(jsonResponse);

		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}

	}

	// fetchStocks
	@RequestMapping(value = "/fetchStocks.action")
	private @ResponseBody String fetchStocks(HttpServletRequest request) {
		try {
			// initialize
			// jsonResponse.setData(null);
			// jsonResponse.setSuccess(false);
			// jsonResponse.addMessage("message", null);
			HashMap<String, Object> data = new HashMap<String, Object>();

			Map<String, Object> map = new HashMap<String, Object>();

			String limit = GlobalCC.CheckNullValues(request
					.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request
					.getParameter("start"));
			String searchData = GlobalCC.CheckNullValues(request
					.getParameter("query"));
			String location = GlobalCC.CheckNullValues(request
					.getParameter("location"));
			if (limit == null) {
				limit = "50";
			}
			if (start == null) {
				start = "0";
			}

			System.out.println("MY DATA==" + searchData);
			map.put("searchData", searchData);

			map.put("location", location == null ? null : new BigDecimal(
					location));
			List<ProductWrapper> list = productMapper.fetchStocks(map);

			// ProductWrapper mylist=list.get(1);
			// System.out.println("stockkkkkkkkkkkkk===== "+mylist.getStkId());
			if (list != null) {
				int count = list.size();
				data.put("count", count);
			}
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			System.out.println(jsonObject(jsonResponse));
			return jsonObject(jsonResponse);

		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}

	}

	// delete product
	@RequestMapping(value = "/deleteProduct.action")
	private @ResponseBody String deleteProduct(HttpServletRequest request) {

		try {
			ObjectMapper mapper = new ObjectMapper();
			String data = GlobalCC
					.CheckNullValues(request.getParameter("data"));
			ProductWrapper products = mapper.readValue(data, ProductWrapper.class);

			if (products.getPdtCode() != null) {
				productMapper.deleteByPrimaryKey(products.getPdtCode());
				jsonResponse.setSuccess(true);
				jsonResponse.addMessage("message", DELETED_SUCCESSFULLY);
			}
			jsonResponse.setData(null);

			return jsonObject(jsonResponse);
		} catch (DataIntegrityViolationException ex) {
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			logger.error(ex);
			jsonResponse.addMessage("message",
					"The Product has Dependencies it cannot be Deleted");

			return jsonObject(jsonResponse);

		} catch (Exception e) {
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			logger.error(e.getLocalizedMessage());
			jsonResponse
					.addMessage(
							"message",
							e.getLocalizedMessage() == null ? "OOPS ! ERROR:: Occured while deleting....."
									: e.getLocalizedMessage());

			return jsonObject(jsonResponse);
		}

	}
	// fetch transfer products
		@RequestMapping(value = "/fetchTransferProducts.action", method = RequestMethod.GET)
		private @ResponseBody String fetchTransferProducts(HttpServletRequest request) {
			try {
				HashMap<String, Object> data = new HashMap<String, Object>();

				Map<String, Object> map = new HashMap<String, Object>();

				String limit = GlobalCC.CheckNullValues(request
						.getParameter("limit"));
				String start = GlobalCC.CheckNullValues(request
						.getParameter("start"));
				String id = GlobalCC.CheckNullValues(request.getParameter("id"));
				String transferType = GlobalCC.CheckNullValues(request.getParameter("transferType"));
				String location = GlobalCC.CheckNullValues(request.getParameter("location"));
				String searchData = GlobalCC.CheckNullValues(request.getParameter("query"));
				if (limit == null) {
					limit = "50";
				}
				if (start == null) {
					start = "0";
				}
				// System.out.println("OUUUUUT  transferType=== "+transferType+" searchData==="+searchData);
			   if(transferType !=null){
				   
				   map.put("location", location == null ? null : new BigDecimal(location));
				   map.put("searchData", searchData);
				   if(transferType.equalsIgnoreCase("IN")){
					 //  System.out.println("transferType=== "+transferType+" searchData==="+searchData);
						List<ProductsMapper> list = productMapper.fetchTransProduct(map);
						if (list != null) {
							int count = list.size();
							data.put("count", count);
						}
						data.put("data", list);
						
				   }else if(transferType.equalsIgnoreCase("OUT")){	
					  // System.out.println("transferType2222=== "+transferType+" searchData==="+searchData);
					   List<ProductWrapper> list = productMapper.fetchStocks(map);
						if (list != null) {
							int count = list.size();
							data.put("count", count);
						}
						data.put("data", list);
				   }
				 
				   
			   }				

				jsonResponse.setData(data);
				jsonResponse.setSuccess(true);
				return jsonObject(jsonResponse);

			} catch (Exception e) {
				e.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", e.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}

		}
		@RequestMapping(value="/processTransfer.action")
		@Transactional
		private @ResponseBody String processTransfer(HttpServletRequest request){
			DefaultTransactionDefinition def = new DefaultTransactionDefinition();
			def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);

			TransactionStatus status = txnManager.getTransaction(def);
			try{
				HashMap<String, Object> data = new HashMap<String, Object>();			
				Map<String, Object> map = new HashMap<String, Object>();
				ObjectMapper mapper = new ObjectMapper();
				String dataDetail=GlobalCC.CheckNullValues(request.getParameter("dataDetail"));
				String transferType = GlobalCC.CheckNullValues(request.getParameter("transferType"));
				String sourceLoc = GlobalCC.CheckNullValues(request.getParameter("sourceLoc"));
				String date = GlobalCC.CheckNullValues(request.getParameter("date"));
				String destinationLoc = GlobalCC.CheckNullValues(request.getParameter("destinationLoc"));				
				String userName = GlobalCC.CheckNullValues(request.getParameter("userName"));
				
				Transfer transfer=new Transfer();
				List<TransferDtlWrapper> transferDtl = Arrays.asList(mapper.readValue(dataDetail, TransferDtlWrapper[].class));
				transfer.setTnsfType(transferType);
				transfer.setTnsfDate(GlobalCC.formatLongDateString(date));
				transfer.setTnsfFromLocCode(sourceLoc==null?null:Integer.parseInt(sourceLoc));
				transfer.setTnsfToLocCode(destinationLoc==null?null:Integer.parseInt(destinationLoc));
				transfer.setTnsfCapturedBy(userName);	
				transfer.setTnsfStatus("POSTED");
				transferMapper.save(transfer);
				
				
				for(int i=0;i<transferDtl.size();i++){
					map.clear();
					map.put("product", transferDtl.get(i).getTnsfdPdtCode());
					map.put("transferType", transferType);
					map.put("qty", transferDtl.get(i).getTnsfdQty());
					map.put("sourceLoc", sourceLoc);
					map.put("destinationLoc", destinationLoc);
					transferDtl.get(i).setTnsfdTnsfId(transfer.getTnsfId());
					transferDtlMapper.insert(transferDtl.get(i));
					transferMapper.postTransfer(map);
					Object rtnVal=map.get("v_rtnVal");
					if(!rtnVal.toString().equalsIgnoreCase("S")){
						txnManager.rollback(status);
				    	jsonResponse.setSuccess(false);	
						jsonResponse.setData(null);
						jsonResponse.addMessage("message", "Transfer not Posted..."+rtnVal);
						 return jsonObject(jsonResponse);
					}
				}
				
				txnManager.commit(status);
				jsonResponse.setSuccess(true);	
				jsonResponse.setData(null);
				jsonResponse.addMessage("message", "Transfer Posted successfully ...");
				return jsonObject(jsonResponse);
			}catch(Exception e){
				txnManager.rollback(status);			
				e.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", e.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}
			
		}	
		// fetchProductMovement
		@RequestMapping(value = "/fetchProductMovement.action")
		private @ResponseBody String fetchProductMovement(HttpServletRequest request) {
			try {
				
				HashMap<String, Object> data = new HashMap<String, Object>();

				Map<String, Object> map = new HashMap<String, Object>();

				String limit = GlobalCC.CheckNullValues(request
						.getParameter("limit"));
				String start = GlobalCC.CheckNullValues(request
						.getParameter("start"));
				String pdtCode = GlobalCC.CheckNullValues(request
						.getParameter("pdtCode"));				
				if (limit == null) {
					limit = "50";
				}
				if (start == null) {
					start = "0";
				}

				System.out.println("fetchProductMovement==== "+pdtCode);
				map.put("pdtCode", pdtCode);
				
				List<ProductMovement> list = productMapper.fetchProductMovement(map);				
				if (list != null) {
					int count = list.size();
					data.put("count", count);
				}
				data.put("data", list);
				jsonResponse.setData(data);
				jsonResponse.setSuccess(true);				
				return jsonObject(jsonResponse);

			} catch (Exception e) {
				e.printStackTrace();
				jsonResponse.setData(null);
				jsonResponse.setSuccess(false);
				jsonResponse.addMessage("message", e.getLocalizedMessage());
				return jsonObject(jsonResponse);
			}

		}		
}
