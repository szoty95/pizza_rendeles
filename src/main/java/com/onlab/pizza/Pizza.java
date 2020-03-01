package com.onlab.pizza;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pizza {

    @Id
    private String pizzaName;
    private String baseSauce;
    private String firstTopping;
    private String secondTopping;
    private String thirdTopping;
    private String fourthTopping;
    private String fifthTopping;
    private String sixthTopping;

}
