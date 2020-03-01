package com.onlab.pizza;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Archive {

    @Id
    private int orderID;
    private String nameOfCustomer;
    private String dayOfOrder;
    private int orderValue;






}
