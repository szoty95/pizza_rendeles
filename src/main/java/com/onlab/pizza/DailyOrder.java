package com.onlab.pizza;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DailyOrder{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int orderID;
    private String pizzaName;
    private int size; //diameter size in cm
    private boolean isThick; //pasta thickness
    private String extraTopping;
    private int price;
    private String orderDate;
    private int customerID;

    public int getOrderID() {
        return orderID;
    }

    public String getPizzaName() {
        return pizzaName;
    }

    public void setPizzaName(String pizzaName) {
        this.pizzaName = pizzaName;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public boolean getThick(){
        return isThick;
    }

    public void setThick(boolean thick) {
        isThick = thick;
    }

    public String getExtraTopping() {
        return extraTopping;
    }

    public void setExtraTopping(String extraTopping) {
        this.extraTopping = extraTopping;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public int getCustomerID() {
        return customerID;
    }

    public void setCustomerID(int customerID) {
        this.customerID = customerID;
    }
}
