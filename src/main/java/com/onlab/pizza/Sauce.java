package com.onlab.pizza;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Sauce{

    @Id
    private String sauceName;
    private boolean isSpicy;
    private String color;

    public Sauce(){
        sauceName = "paradicsomos";
        isSpicy = false;
        color = "red";
    }

    public Sauce(String name, boolean spicyness, String color){
        this.sauceName = name;
        this.isSpicy = spicyness;
        this.color = color;
    }

    public String getSauceName(){
        return sauceName;
    }

    public void setSauceName(String name){
        this.sauceName = name;
    }

    public boolean getSpicy(){
        return isSpicy;
    }

    public void setSpicy(boolean value){
        isSpicy = value;
    }

    public String getColor(){
        return color;
    }

    public void setColor(String value){
        this.color = value;
    }
}
