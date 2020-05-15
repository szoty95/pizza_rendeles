package com.onlab.pizza.model;

import javax.persistence.*;

@Entity
@Table(name = "BoxedPizzas")
public class BoxedPizza {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private int pizzaID;

    @Column(name = "Size")
    private int size; //diameter size in cm

    @Column(name = "Thick")
    private boolean isThick; //pasta thickness

    @Column(name = "Price")
    private int price;

    public BoxedPizza(){}

    public BoxedPizza(int size, boolean isThick, int price){
        this.size = size;
        this.isThick = isThick;
        this.price = price;
    }

    @ManyToOne
    private Pizza pizza;

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

}
