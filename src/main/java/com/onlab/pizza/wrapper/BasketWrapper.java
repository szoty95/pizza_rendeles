package com.onlab.pizza.wrapper;

import com.onlab.pizza.model.Basket;;

import java.util.List;

public class BasketWrapper {
    private List<Basket> baskets;

    public void setBaskets(List<Basket> baskets) {
        this.baskets = baskets;
    }

    public List<Basket> getBaskets() {
        return baskets;
    }
}
