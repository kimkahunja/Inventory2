package com.topline.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.model.Student;
import com.topline.model.StudentExample;
import com.topline.utils.GlobalCC;
import com.topline.web.StandardJsonResponse;

@Controller
public class StudentController extends BaseController {
	
	@RequestMapping(value="/signup", method=RequestMethod.POST)
	private @ResponseBody StandardJsonResponse createStudent(
			HttpServletRequest request) {
		 System.out.println("33333333333333333333 abc.....");

		try {
			 String id=GlobalCC.CheckNullValues(request.getParameter("id"));
			 String firstName = GlobalCC.CheckNullValues(request.getParameter("firstname"));
			 String dateofbirth = GlobalCC.CheckNullValues(request.getParameter("dateofbirth"));
			 String emailaddress = GlobalCC.CheckNullValues(request.getParameter("emailaddress"));
			 String lastname = GlobalCC.CheckNullValues(request.getParameter("lastname"));
			 String password = GlobalCC.CheckNullValues(request.getParameter("password"));
			 String username = GlobalCC.CheckNullValues(request.getParameter("username"));			 
			Student student = new Student();
			student.setId(id==null?null:Long.parseLong(id));
			student.setFirstname(firstName);
			student.setDateofbirth(GlobalCC.parseSQLDate(dateofbirth));
			student.setEmailaddress(emailaddress);
			student.setLastname(lastname);
			student.setPassword(password);
			student.setUsername(username);
			studentMapper.insert(student);
			jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);

			jsonResponse.setSuccess(true);
			return jsonResponse;
		} catch (Exception e) {
			 System.out.println(e.getMessage());
			jsonResponse.setData(null);
			jsonResponse.setSuccess(true);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonResponse;
		}
	}
	@RequestMapping(value="/signup", method=RequestMethod.GET)
	private @ResponseBody
	StandardJsonResponse fetchList(HttpServletRequest request) {
		 System.out.println("testing abc.....");
		try {		

			String userid = null;
			
			HashMap<String, Object> data = new HashMap<String, Object>();
			Map<String, Object> map = new HashMap<String, Object>();
			String criteria = GlobalCC.CheckNullValues(request
					.getParameter("criteria"));
			String searchString = GlobalCC.CheckNullValues(request
					.getParameter("txtSearch"));
			String date = GlobalCC.CheckNullValues(request
					.getParameter("date"));
			
			String limit = GlobalCC.CheckNullValues(request
					.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request
					.getParameter("start"));
			if (limit == null) {
				limit = "50";
			}
			if (start == null) {
				start = "0";
			}
			StudentExample studentExample= new StudentExample();
			List<Student> list=studentMapper.selectByExample(studentExample);
			System.out.println("kimkahunja.... "+ list.size());
			System.out.println("kimkahunja22222.... "+ list.get(0));
			data.put("results", list);
			
			Student student=list.get(0);
			System.out.println("kimkahunja---data.... "+ student.getEmailaddress());
			System.out.println("kimkahunja---data.... "+ student.getFirstname());
			System.out.println("kimkahunja---data.... "+ student.getUsername());
			System.out.println("kimkahunja---data.... "+ student.getId());
			jsonResponse.setSuccess(true);
			return jsonResponse;
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse
					.addMessage(
							"message",
							e.getLocalizedMessage() == null ? "OOPS ! ERROR:: Occured while fetching ............."
									: e.getLocalizedMessage());
			return jsonResponse;
		}
	}
}
