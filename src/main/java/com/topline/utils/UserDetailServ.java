package com.topline.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.topline.mappers.UserMapper;
import com.topline.model.wrappers.SpringSecurityUser;

public class UserDetailServ implements UserDetailsService {
	@Autowired
	private UserMapper userMapper;
	
	public UserDetails loadUserByUsername(String userName)
			throws UsernameNotFoundException {
		System.out.println("LoadUserBy name ");
		if (userName.isEmpty()) {
			throw new UsernameNotFoundException("Unable to locate a user with empty username: ");
		}
		SpringSecurityUser springUser= userMapper.selectSpringSecurityUser(userName);
		if (springUser != null) {
			return springUser;
		} else {
			throw new UsernameNotFoundException("Unable to locate a user with username: " + userName);
		}
	}

}
