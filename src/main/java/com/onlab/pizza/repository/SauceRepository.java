package com.onlab.pizza.repository;

import com.onlab.pizza.model.Sauce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SauceRepository extends JpaRepository<Sauce, Integer> {
}
