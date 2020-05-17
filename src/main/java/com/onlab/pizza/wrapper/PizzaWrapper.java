package com.onlab.pizza.wrapper;

import com.onlab.pizza.model.Pizza;

import java.util.List;

public class PizzaWrapper {
    List<Pizza> pizzas;

    public void setPizzas(List<Pizza> pizzas) {
        this.pizzas = pizzas;
    }

    public List<Pizza> getPizzas() {
        return pizzas;
    }
}
