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
    private int CustomerID;
}
