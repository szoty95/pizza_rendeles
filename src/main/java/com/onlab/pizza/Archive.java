package com.onlab.pizza;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Archive {

    @Id
    private int orderID;
    private String pizzaName;
    private int size; //diameter size in cm
    private boolean isThick; //pasta thickness
    private String extraTopping;
    private int price;
    private String orderDate;
    private int customerID;

    public Archive(){}

    public Archive(int orderID, String pizzaName, int size, boolean isThick, String extraTopping, int price, String orderDate, int customerID){
        this.orderID = orderID;
        this.pizzaName = pizzaName;
        this.size = size;
        this.isThick = isThick;
        this.extraTopping = extraTopping;
        this.price = price;
        this.orderDate = orderDate;
        this.customerID = customerID;
    }

    @OneToOne
    private DailyOrder dailyOrder;

    public int getOrderID() {
        return orderID;
    }

    public String getPizzaName() {
        return pizzaName;
    }

    public int getSize() {
        return size;
    }

    public boolean getIsThick(){
        return isThick;
    }

    public String getExtraTopping() {
        return extraTopping;
    }

    public int getPrice() {
        return price;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public int getCustomerID() {
        return customerID;
    }
}
