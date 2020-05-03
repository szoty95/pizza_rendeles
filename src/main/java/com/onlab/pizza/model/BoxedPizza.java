package com.onlab.pizza.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class BoxedPizza {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pizzaID;
    private int size; //diameter size in cm
    private boolean isThick; //pasta thickness
    private int price;

    public BoxedPizza(){}

    public BoxedPizza(int size, boolean isThick, int price){
        this.size = size;
        this.isThick = isThick;
        this.price = price;
    }

    @ManyToOne
    private Pizza pizza;

    @ManyToOne
    private Sauce sauce;

    @ManyToOne
    private Order order;

    @ManyToMany
    private Collection<Topping> toppings;

    public int getPizzaID() {
        return pizzaID;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public boolean getThick(){ return isThick;}

    public void setThick(boolean thick) {
        isThick = thick;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Pizza getPizza() {
        return pizza;
    }

    public void setPizza(Pizza pizza) {
        this.pizza = pizza;
    }

    public Sauce getSauce() {
        return sauce;
    }

    public void setSauce(Sauce sauce) {
        this.sauce = sauce;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Collection<Topping> getToppings() {
        return toppings;
    }

    public void setToppings(Collection<Topping> toppings) {
        this.toppings = toppings;
    }
}
