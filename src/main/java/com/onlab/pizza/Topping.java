package com.onlab.pizza;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Topping {

    @Id
    private String toppingName;
    private String category;  //meat or vegetable or else
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
