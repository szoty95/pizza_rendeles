package com.onlab.pizza;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class PersonalDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userID;
    private String personalName;
    private String address;
    private String phoneNumber;
    private String emailAddress;

    public PersonalDetails(){}

    public PersonalDetails(String name, String address, String phone, String email){
        this.personalName = name;
        this.address = address;
        this.phoneNumber = phone;
        this.emailAddress = email;
    }

    @OneToMany
    private Collection<DailyOrder> dailyOrders;

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
