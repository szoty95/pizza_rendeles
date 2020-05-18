package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.Topping;
import com.onlab.pizza.repository.PizzaRepository;
import com.onlab.pizza.repository.ToppingRepository;
import com.onlab.pizza.wrapper.ToppingWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/topping", name = "Topping")
@Api(tags = "Topping")
public class ToppingController {

    @Autowired
    private ToppingRepository toppingRepository;

    @Autowired
    private PizzaRepository pizzaRepository;

    @GetMapping("/toppings")
    @ApiOperation(value = "Get all toppings", response= ToppingWrapper.class, nickname = "getToppings")
    public List<Topping> getToppingsByPizzaID(@RequestParam(value = "pizzaID", required = true) Integer pizzaID){
        if (pizzaRepository.findById(pizzaID).isPresent()) {
            return new ArrayList<>((pizzaRepository.findById(pizzaID).get().getToppings()));
        } else {
            throw new NotFoundException("Pizza not found with this ID");
        }
    }
}
