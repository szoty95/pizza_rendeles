package com.onlab.pizza.repository;

import com.onlab.pizza.model.Topping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ToppingRepository extends JpaRepository<Topping, Integer> {
}
