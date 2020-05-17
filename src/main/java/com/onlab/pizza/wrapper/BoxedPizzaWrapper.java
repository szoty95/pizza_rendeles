package com.onlab.pizza.wrapper;

import com.onlab.pizza.model.BoxedPizza;

import java.util.List;

public class BoxedPizzaWrapper {
    private List<BoxedPizza> boxedPizzas;

    public void setBoxedPizzas(List<BoxedPizza> boxedPizzas) {
        this.boxedPizzas = boxedPizzas;
    }

    public List<BoxedPizza> getBoxedPizzas() {
        return boxedPizzas;
    }
}
