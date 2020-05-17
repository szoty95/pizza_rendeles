package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.Pizza;
import com.onlab.pizza.repository.PizzaRepository;
import com.onlab.pizza.wrapper.PizzaWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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

    @PostMapping("/pizzas")
    @ApiOperation(value = "Add Pizza Type", response = Pizza.class, nickname = "addPizza")
    public Pizza createPizza(@Valid @RequestBody Pizza pizza){
        System.out.println(pizza);
        return pizzaRepository.save(pizza);
    }

    @PutMapping("/pizzas/{pizzaID}")
    @ApiOperation(value = "Update Type", response = Pizza.class, nickname = "updatePizza")
    public Pizza updatePizza(@RequestParam(value = "pizzaID", required = true) Integer pizzaID, @Valid @RequestBody Pizza pizzaRequest){
        return pizzaRepository.findById(pizzaID).map(pizza -> {
            pizza.setPizzaName(pizzaRequest.getPizzaName());
            pizza.setSpicy(pizzaRequest.getSpicy());
            return pizzaRepository.save(pizza);
        }).orElseThrow(() -> new NotFoundException("Pizzatype is not found with provided ID " + pizzaID));
    }

    @DeleteMapping("/pizzas")
    @ApiOperation(value = "Delete pizza", nickname = "deletePizza")
    public ResponseEntity<?> deletePizza(@RequestParam(value = "pizzaID", required = true) Integer pizzaID){
        return pizzaRepository.findById(pizzaID).map(pizza -> {
            pizzaRepository.delete(pizza);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Pizzatype is not found with provided ID" + pizzaID));
    }
}
