package com.onlab.pizza;


import javax.persistence.*;
import java.util.Collection;

@Entity
//TODO: el kell dönteni, hgy a Pizza entitásból egy példány, az egy konkrét bedobozolt pizza példányt reprezentál-e,
//vagy egy pizza típust. Ha pizza példányt, akkor nem jó a név id-nek. (Nem nevezik el a pizza példányokat)
//Ha pizza típus, akkor meg a nem jó a @ManyToOne dailyOrder, mert egy pizza típus nemcsak egy rendelésben szerepelhet.
//Hasonlóan a Topping és Sauce-nál is keveredik ez: szósz/feltét példány, vagy feltét típus?
//Lehet, hogy szükség van mindkettőre (típus, példány), attól függ, mit akarsz modellezni.
public class Pizza {

    @Id
    private String pizzaName;

    //TODO ha a sauce és toppings mint kapcsolat már jelen van, ezek az attribútumok nem kellenek
    private String baseSauce;
    private String firstTopping;
    private String secondTopping;
    private String thirdTopping;
    private String fourthTopping;
    private String fifthTopping;
    private String sixthTopping;

    public Pizza(){}

    public Pizza(String pizzaName, String baseSauce, String firstTopping, String secondTopping, String thirdTopping, String fourthTopping, String fifthTopping, String sixthTopping){
        this.pizzaName = pizzaName;
        this.baseSauce = baseSauce;
        this.firstTopping = firstTopping;
        this.secondTopping = secondTopping;
        this.thirdTopping = thirdTopping;
        this.fourthTopping = fourthTopping;
        this.fifthTopping = fifthTopping;
        this.sixthTopping = sixthTopping;
    }

    @OneToOne
    private Sauce sauce;

    @OneToMany
    private Collection<Topping> toppings;

    @ManyToOne
    private DailyOrder dailyOrder;

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
