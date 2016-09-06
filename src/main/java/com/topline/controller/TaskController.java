package com.topline.controller;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topline.model.Categories;
import com.topline.model.CategoriesExample;
import com.topline.model.TaskAssignee;
import com.topline.model.TaskAssigneeExample;
import com.topline.model.TaskDelivery;
import com.topline.model.wrappers.TaskDeliveryWrapper;
import com.topline.utils.GlobalCC;

@Controller
@RequestMapping(value = "/task")
public class TaskController extends BaseController {
	// fetch Tasks
	@RequestMapping(value = "/fetchTasks.action", method = RequestMethod.GET)
	private @ResponseBody String fetchTasks(HttpServletRequest request) {

		try {
			HashMap<String, Object> data = new HashMap<String, Object>();

			Map<String, Object> map = new HashMap<String, Object>();

			String limit = GlobalCC.CheckNullValues(request
					.getParameter("limit"));
			String start = GlobalCC.CheckNullValues(request
					.getParameter("start"));
			String status = GlobalCC.CheckNullValues(request
					.getParameter("status"));
			if (limit == null) {
				limit = "50";
			}
			if (start == null) {
				start = "0";
			}
			map.put("status", status == null ? "PENDING" : status);

			List<TaskDeliveryWrapper> list = taskDeliveryMapper
					.fetchTaskDeliveries(map);

			if (list != null) {
				int count = list.size();
				data.put("count", count);
			}
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			// System.out.println(jsonObject(jsonResponse));
			return jsonObject(jsonResponse);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());

			return jsonObject(jsonResponse);
		}

	}

	// fetch tasks assignees
	@RequestMapping(value = "/fetchAssignees.action", method = RequestMethod.GET)
	private @ResponseBody String fetchAssignees(HttpServletRequest request) {

		try {
			HashMap<String, Object> data = new HashMap<String, Object>();

			Map<String, Object> map = new HashMap<String, Object>();

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
			TaskAssigneeExample example = new TaskAssigneeExample();
			List<TaskAssignee> list = taskAssigneeMapper
					.selectByExample(example);

			if (list != null) {
				int count = list.size();
				data.put("count", count);
			}
			data.put("data", list);
			jsonResponse.setData(data);
			jsonResponse.setSuccess(true);
			// System.out.println(jsonObject(jsonResponse));
			return jsonObject(jsonResponse);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());

			return jsonObject(jsonResponse);
		}

	}

	// save task
	@RequestMapping(value = "/saveTask.action")
	private @ResponseBody String saveTask(HttpServletRequest request) {

		try {
			ObjectMapper mapper = new ObjectMapper();
			SimpleDateFormat ft = new SimpleDateFormat("dd/MM/YYYY");
			mapper.setDateFormat(ft);
			String data = GlobalCC
					.CheckNullValues(request.getParameter("data"));
			String date = GlobalCC
					.CheckNullValues(request.getParameter("date"));
			String collectionDate = GlobalCC.CheckNullValues(request
					.getParameter("collectionDate"));
			TaskDelivery task = mapper.readValue(data, TaskDelivery.class);
			// System.out.println(" data "+data);

			task.setTskDate(GlobalCC.formatLongDateString(date));
			task.setTskCollectionDate(GlobalCC
					.formatLongDateString(collectionDate));
			if (task.getTskId() == null) {
				task.setTskStatus("PENDING");
				taskDeliveryMapper.insert(task);
				jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
			} else {
				taskDeliveryMapper.updateByPrimaryKey(task);
				jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			}
			jsonResponse.setSuccess(true);
			jsonResponse.setData(null);
			return jsonObject(jsonResponse);
		} catch (Exception e) {
			e.printStackTrace();
			jsonResponse.setData(null);
			jsonResponse.setSuccess(false);
			jsonResponse.addMessage("message", e.getLocalizedMessage());
			return jsonObject(jsonResponse);
		}

	}

	// save Assignee
	@RequestMapping(value = "/saveAssignee.action")
	private @ResponseBody String saveAssignee(HttpServletRequest request) {
		try {
			ObjectMapper mapper = new ObjectMapper();			
			String name = GlobalCC.CheckNullValues(request.getParameter("name"));
			TaskAssignee assignee=new TaskAssignee();
			assignee.setTssgName(name);
			if (assignee.getTssgId() == null) {				
				taskAssigneeMapper.insert(assignee);
				jsonResponse.addMessage("message", SAVED_SUCCESSFULLY);
			} else {
				taskAssigneeMapper.updateByPrimaryKey(assignee);
				jsonResponse.addMessage("message", UPDATED_SUCCESSFULLY);
			}
			jsonResponse.setSuccess(true);
			jsonResponse.setData(null);
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
