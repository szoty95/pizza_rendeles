package com.onlab.pizza.repository;

import com.onlab.pizza.model.BoxedPizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoxedPizzaRepository extends JpaRepository<BoxedPizza, Integer> {
    List<BoxedPizza> findByPizza(Integer pizzaID);
}
