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

    public String getPizzaName() {
        return pizzaName;
    }

    public void setPizzaName(String pizzaName) {
        this.pizzaName = pizzaName;
    }

    public String getBaseSauce() {
        return baseSauce;
    }

    public void setBaseSauce(String baseSauce) {
        this.baseSauce = baseSauce;
    }

    public String getFirstTopping() {
        return firstTopping;
    }

    public void setFirstTopping(String firstTopping) {
        this.firstTopping = firstTopping;
    }

    public String getSecondTopping() {
        return secondTopping;
    }

    public void setSecondTopping(String secondTopping) {
        this.secondTopping = secondTopping;
    }

    public String getThirdTopping() {
        return thirdTopping;
    }

    public void setThirdTopping(String thirdTopping) {
        this.thirdTopping = thirdTopping;
    }

    public String getFourthTopping() {
        return fourthTopping;
    }

    public void setFourthTopping(String fourthTopping) {
        this.fourthTopping = fourthTopping;
    }

    public String getFifthTopping() {
        return fifthTopping;
    }

    public void setFifthTopping(String fifthTopping) {
        this.fifthTopping = fifthTopping;
    }

    public String getSixthTopping() {
        return sixthTopping;
    }

    public void setSixthTopping(String sixthTopping) {
        this.sixthTopping = sixthTopping;
    }
}
