package com.onlab.pizza.repository;

import com.onlab.pizza.model.Basket;
import com.onlab.pizza.model.BoxedPizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BasketRepository extends JpaRepository<Basket, Integer> {
    List<BoxedPizza> findByPizza(Integer pizzaID);
}
