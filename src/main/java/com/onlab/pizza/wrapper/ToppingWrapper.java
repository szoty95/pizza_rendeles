package com.onlab.pizza.wrapper;

import com.onlab.pizza.model.Topping;

import java.util.List;

public class ToppingWrapper {
    List<Topping> toppings;

    public void setToppings(List<Topping> toppings) {
        this.toppings = toppings;
    }

    public List<Topping> getToppings() {
        return toppings;
    }
}
