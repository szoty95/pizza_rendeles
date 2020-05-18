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
    private boolean isBig; //big or average

    @Column(name = "Thick")
    private boolean isThick; //pasta thickness

    @Column(name = "Price")
    private int price;

    public BoxedPizza(){}

    public BoxedPizza(boolean isBig, boolean isThick, int price){
        this.isBig = isBig;
        this.isThick = isThick;
        this.price = price;
    }

    @ManyToOne
    private Pizza pizza;

    public int getPizzaID() {
        return pizzaID;
    }

    public boolean getSize() {
        return isBig;
    }

    public void setSize(boolean size) {
        this.isBig = size;
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
