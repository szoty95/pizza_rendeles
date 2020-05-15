package com.onlab.pizza.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "toppings")
public class Topping {

    @Id
    @Column(name = "Name")
    private String toppingName;

    @Column(name = "Category")
    private String category;  //meat or vegetable or else

    @Column(name = "Spicy")
    private boolean isSpicy;

    public Topping(){}

    public Topping(String name, String type, boolean isHot){
        toppingName = name;
        category = type;
        isSpicy = isHot;
    }

    public String getToppingName() {
        return toppingName;
    }

    public void setToppingName(String toppingName) {
        this.toppingName = toppingName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean getIsSpicy(){
        return isSpicy;
    }

    public void setSpicy(boolean spicy) {
        isSpicy = spicy;
    }
}
