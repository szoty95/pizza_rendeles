package com.onlab.pizza.model;


import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "pizzas")
public class Pizza {

    @Id
    private String pizzaName;
    private boolean isSpicy;

    public Pizza(){}

    public Pizza(String pizzaName, boolean isSpicy){
        this.pizzaName = pizzaName;
        this.isSpicy = isSpicy;
    }

    @OneToOne
    private Sauce sauce;

    @OneToMany
    private Collection<Topping> toppings;

    public String getPizzaName() {
        return pizzaName;
    }

    public void setPizzaName(String pizzaName) {
        this.pizzaName = pizzaName;
    }

    public boolean getSpicy(){ return isSpicy; }

    public void setSpicy(boolean spicy) {
        isSpicy = spicy;
    }

    public Sauce getSauce() {
        return sauce;
    }

    public void setSauce(Sauce sauce) {
        this.sauce = sauce;
    }

    public Collection<Topping> getToppings() {
        return toppings;
    }

    public void setToppings(Collection<Topping> toppings) {
        this.toppings = toppings;
    }
}
