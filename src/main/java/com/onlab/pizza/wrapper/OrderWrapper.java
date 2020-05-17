package com.onlab.pizza.wrapper;

import com.onlab.pizza.model.Order;

import java.util.List;

public class OrderWrapper {
    List<Order> orders;

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public List<Order> getOrders() {
        return orders;
    }
}
