package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.BoxedPizza;
import com.onlab.pizza.repository.BoxedPizzaRepository;
import com.onlab.pizza.repository.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.Inet4Address;
import java.util.List;

@RestController
public class BoxedPizzaController {

    @Autowired
    private BoxedPizzaRepository boxedPizzaRepository;

    @Autowired
    private PizzaRepository pizzaRepository;

    @GetMapping("pizzas/{pizzaID}/boxedpizzas")
    public List<BoxedPizza> getBoxedPizzaByPizzaType(@PathVariable Integer pizzaID){
        return boxedPizzaRepository.findByPizzaType(pizzaID);
    }

    @PostMapping("pizzas/{pizzaID}/boxedpizzas")
    public BoxedPizza addBox(@PathVariable Integer pizzaID, @Valid @RequestBody BoxedPizza boxedPizza){
        return pizzaRepository.findById(pizzaID).map(pizza -> {
            boxedPizza.setPizza(pizza);
            pizza.getBoxedPizzas().add(boxedPizza);
            return boxedPizzaRepository.save(boxedPizza);
        }).orElseThrow(() -> new NotFoundException("Pizzatype is not found with provided ID " + pizzaID));
    }

    @PutMapping("pizzas/{pizzaID}/boxedpizzas/{boxID}")
    public BoxedPizza updateBox(@PathVariable Integer pizzaID, @PathVariable Integer boxID, @Valid @RequestBody BoxedPizza boxRequest){
        if(!pizzaRepository.existsById(pizzaID)){
            throw new NotFoundException("Pizzatype is not found with provided ID " + pizzaID);
        }

        return boxedPizzaRepository.findById(boxID).map(box -> {
            box.setSize(boxRequest.getSize());
            box.setThick(boxRequest.getThick());
            box.setPrice(boxRequest.getPrice());

            return boxedPizzaRepository.save(box);
        }).orElseThrow(() -> new NotFoundException("Pizzabox is not found with provided ID " + boxID));
    }

    @DeleteMapping("pizzas/{pizzaID}/boxedpizzas/{boxID}")
    public ResponseEntity<?> deleteBox(@PathVariable Integer pizzaID, @PathVariable Integer boxID){
        if(!pizzaRepository.existsById(pizzaID)){
            throw new NotFoundException("Pizzatype is not found with provided ID " + pizzaID);
        }

        return boxedPizzaRepository.findById(boxID).map(box -> {
            boxedPizzaRepository.delete(box);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Box is not found with provided ID " + boxID));
    }
}
