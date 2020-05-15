package com.onlab.pizza.model;

import javax.persistence.*;

@Entity
@Table(name = "personal_details")
public class PersonalDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int userID;

    @Column(name = "Name")
    private String personalName;

    @Column(name = "Address")
    private String address;

    @Column(name = "Phone")
    private String phoneNumber;

    @Column(name = "Email")
    private String emailAddress;

    public PersonalDetails(){}

    public PersonalDetails(String name, String address, String phone, String email){
        this.personalName = name;
        this.address = address;
        this.phoneNumber = phone;
        this.emailAddress = email;
    }

    public int getUserID() {
        return userID;
    }

    public String getPersonalName() {
        return personalName;
    }

    public void setPersonalName(String personalName) {
        this.personalName = personalName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
}
