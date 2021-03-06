package com.topline.model;

import java.util.Date;

public class Student {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column student.id
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    private Long id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column student.dateOfBirth
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    private Date dateofbirth;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column student.emailAddress
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    private String emailaddress;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column student.firstName
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    private String firstname;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column student.lastName
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    private String lastname;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column student.password
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    private String password;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column student.userName
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    private String username;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column student.id
     *
     * @return the value of student.id
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public Long getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column student.id
     *
     * @param id the value for student.id
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column student.dateOfBirth
     *
     * @return the value of student.dateOfBirth
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public Date getDateofbirth() {
        return dateofbirth;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column student.dateOfBirth
     *
     * @param dateofbirth the value for student.dateOfBirth
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public void setDateofbirth(Date dateofbirth) {
        this.dateofbirth = dateofbirth;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column student.emailAddress
     *
     * @return the value of student.emailAddress
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public String getEmailaddress() {
        return emailaddress;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column student.emailAddress
     *
     * @param emailaddress the value for student.emailAddress
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public void setEmailaddress(String emailaddress) {
        this.emailaddress = emailaddress == null ? null : emailaddress.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column student.firstName
     *
     * @return the value of student.firstName
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public String getFirstname() {
        return firstname;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column student.firstName
     *
     * @param firstname the value for student.firstName
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public void setFirstname(String firstname) {
        this.firstname = firstname == null ? null : firstname.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column student.lastName
     *
     * @return the value of student.lastName
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public String getLastname() {
        return lastname;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column student.lastName
     *
     * @param lastname the value for student.lastName
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public void setLastname(String lastname) {
        this.lastname = lastname == null ? null : lastname.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column student.password
     *
     * @return the value of student.password
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public String getPassword() {
        return password;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column student.password
     *
     * @param password the value for student.password
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column student.userName
     *
     * @return the value of student.userName
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public String getUsername() {
        return username;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column student.userName
     *
     * @param username the value for student.userName
     *
     * @mbggenerated Wed Apr 22 15:31:02 EAT 2015
     */
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }
}