package com.onlab.pizza.model;

import javax.persistence.*;

@Entity
@Table(name = "sauces")
public class Sauce{

    @Id
    @Column(name = "Name")
    private String sauceName;

    @Column(name = "Spicy")
    private boolean isSpicy;

    @Column(name = "Color")
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
