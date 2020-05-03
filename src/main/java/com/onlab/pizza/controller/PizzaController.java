package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.Pizza;
import com.onlab.pizza.repository.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class PizzaController {

    @Autowired
    private PizzaRepository pizzaRepository;

    @GetMapping("/pizzas")
    public Page<Pizza> getPizzas(Pageable pageable){
        return pizzaRepository.findAll(pageable);
    }

    @PostMapping("/pizzas")
    public Pizza createPizza(@Valid @RequestBody Pizza pizza){
        return pizzaRepository.save(pizza);
    }

    @PutMapping("pizzas/{pizzaID}")
    public Pizza updatePizza(@PathVariable Integer pizzaID, @Valid @RequestBody Pizza pizzaRequest){
        return pizzaRepository.findById(pizzaID).map(pizza -> {
            pizza.setPizzaName(pizzaRequest.getPizzaName());
            pizza.setSpicy(pizzaRequest.getSpicy());
            return pizzaRepository.save(pizza);
        }).orElseThrow(() -> new NotFoundException("Pizzatype is not found with provided ID " + pizzaID));
    }

    @DeleteMapping("pizzas/{pizzaID}")
    public ResponseEntity<?> deletePizza(@PathVariable Integer pizzaID){
        return pizzaRepository.findById(pizzaID).map(pizza -> {
            pizzaRepository.delete(pizza);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Pizzatype is not found with provided ID" + pizzaID));
    }
}
