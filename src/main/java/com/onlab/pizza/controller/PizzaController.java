package com.onlab.pizza.controller;

import com.onlab.pizza.repository.PizzaRepository;
import com.onlab.pizza.wrapper.PizzaWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/pizza", name = "Pizza")
@Api(tags = "Pizza")
public class PizzaController {

    @Autowired
    private PizzaRepository pizzaRepository;

    @GetMapping("/pizzas")
    @ApiOperation(value = "Get Pizza types", response = PizzaWrapper.class, nickname = "getPizzaTypes")
    public PizzaWrapper getPizzas(){
        PizzaWrapper pizzaWrapper = new PizzaWrapper();
        pizzaWrapper.setPizzas(pizzaRepository.findAll());
        return pizzaWrapper;
    }
}
