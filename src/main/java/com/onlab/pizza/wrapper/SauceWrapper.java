package com.onlab.pizza.wrapper;

import com.onlab.pizza.model.Sauce;

import java.util.List;

public class SauceWrapper {
    List<Sauce> sauces;

    public void setSauces(List<Sauce> sauces) {
        this.sauces = sauces;
    }

    public List<Sauce> getSauces() {
        return sauces;
    }
}
