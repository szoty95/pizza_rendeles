package com.onlab.pizza.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderID;

    private int orderPrice;
    private int quantity;
    private String orderDate;

    public Order(){}

    public Order(int orderPrice, String orderDate){
        this.orderPrice = orderPrice;
        this.orderDate = orderDate;
    }

    @ManyToOne
    private PersonalDetails personalDetails;

    @OneToMany
    private Set<BoxedPizza> boxedPizzas;

    public int getOrderID() {
        return orderID;
    }

    public int getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(int orderPrice) {
        this.orderPrice = orderPrice;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public PersonalDetails getPersonalDetails() {
        return personalDetails;
    }

    public void setPersonalDetails(PersonalDetails personalDetails) {
        this.personalDetails = personalDetails;
    }

    public Set<BoxedPizza> getBoxedPizzas() {
        return boxedPizzas;
    }

    public void setBoxedPizzas(Set<BoxedPizza> boxedPizzas) {
        this.boxedPizzas = boxedPizzas;
    }

    public int getQuantity() {
        return quantity;
    }

     public void setQuantity(int quantity){ this.quantity = quantity; }
}
