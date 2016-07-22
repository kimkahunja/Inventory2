package com.topline.controller;


import java.io.IOException;
import java.text.SimpleDateFormat;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.topline.mappers.AccountMapper;
import com.topline.mappers.CategoriesMapper;
import com.topline.mappers.CustomizeAreaDtlMapper;
import com.topline.mappers.GroupsMapper;
import com.topline.mappers.InvoiceDtlsMapper;
import com.topline.mappers.InvoiceMapper;
import com.topline.mappers.LocationsMapper;
import com.topline.mappers.ManAdjustmentDtlMapper;
import com.topline.mappers.ManAdjustmentMapper;
import com.topline.mappers.MenuMapper;
import com.topline.mappers.PaymentDtlMapper;
import com.topline.mappers.PaymentMapper;
import com.topline.mappers.PermissionsMapper;
import com.topline.mappers.ProductsMapper;
import com.topline.mappers.PurchaseDetailMapper;
import com.topline.mappers.PurchaseMapper;
import com.topline.mappers.StoredProcMapper;
import com.topline.mappers.StudentMapper;
import com.topline.mappers.SubLocationsMapper;
import com.topline.mappers.TransferDtlMapper;
import com.topline.mappers.TransferMapper;
import com.topline.mappers.UnitsMapper;
import com.topline.mappers.UserMapper;
import com.topline.mappers.VatMapper;
import com.topline.model.wrappers.ProductWrapper;
import com.topline.model.wrappers.SubLocationWrapper;
import com.topline.web.StandardJsonResponse;

public class BaseController extends MultiActionController {
	@Autowired(required=true)
	protected StandardJsonResponse jsonResponse;
	protected final Log logger = LogFactory.getLog(getClass());
	
	public   final String  SAVED_SUCCESSFULLY ="Record Successfully Saved...";
	public   final String  UPDATED_SUCCESSFULLY ="Record Successfully Updated...";
	public   final String  DELETED_SUCCESSFULLY ="Record Successfully Deleted...";
	
	@Autowired(required=true)
	StudentMapper studentMapper;
	@Autowired(required=true)
	CategoriesMapper categoryMapper;
	@Autowired(required=true)
	LocationsMapper  locationMapper;
	@Autowired(required=true)
	ProductsMapper productMapper;
	@Autowired(required=true)
	SubLocationsMapper subLocationMapper;
	@Autowired(required=true)
	UnitsMapper unitMapper;
	@Autowired(required=true)
	VatMapper vatMapper;	
	@Autowired(required=true)
	UserMapper userMapper;
	@Autowired(required=true)
	GroupsMapper groupsMapper;
	@Autowired(required=true)
	MenuMapper menuMapper;
	@Autowired(required=true)
	PermissionsMapper permissionsMapper;
	@Autowired(required=true)
	AccountMapper accountMapper;
	@Autowired(required=true)
	PurchaseMapper purchaseMapper;
	@Autowired(required=true)
	PurchaseDetailMapper purchaseDetailMapper;
	@Autowired(required=true)
	StoredProcMapper storedProcMapper;
	@Autowired(required=true)
	InvoiceMapper invoiceMapper;
	@Autowired(required=true)
	InvoiceDtlsMapper invoiceDtlsMapper;
	@Autowired(required=true)
	DataSourceTransactionManager txnManager ;
	@Autowired(required=true)
	PaymentMapper paymentMapper;
	@Autowired(required=true)
	PaymentDtlMapper paymentDtlMapper;
	@Autowired(required=true)
	TransferMapper transferMapper;
	@Autowired(required=true)
	TransferDtlMapper transferDtlMapper;
	@Autowired(required=true)
	ManAdjustmentDtlMapper manAdjustmentDtlMapper;
	@Autowired(required=true)
	ManAdjustmentMapper manAdjustmentMapper;
	@Autowired(required=true)
	CustomizeAreaDtlMapper customizeAreaDtlMapper;
	public String jsonObject(StandardJsonResponse jsonResponse){
		String json=null;
		ObjectMapper mapper = new ObjectMapper();
		SimpleDateFormat ft = new SimpleDateFormat("dd/MM/YYYY");		
		mapper.setDateFormat(ft);
        try {
			json = mapper.writeValueAsString(jsonResponse);
		} catch (JsonGenerationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return json;
	}
}
