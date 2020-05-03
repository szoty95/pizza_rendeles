package com.onlab.pizza.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.Collection;

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

    @OneToOne
    private Pizza pizza;

    @OneToMany
    private Collection<BoxedPizza> boxedPizzas;


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

    public Pizza getPizza() {
        return pizza;
    }

    public void setPizza(Pizza pizza) {
        this.pizza = pizza;
    }

    public Collection<BoxedPizza> getBoxedPizzas() {
        return boxedPizzas;
    }

    public void setBoxedPizzas(Collection<BoxedPizza> boxedPizzas) {
        this.boxedPizzas = boxedPizzas;
    }
}
