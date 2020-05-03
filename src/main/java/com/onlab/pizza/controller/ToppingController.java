package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.Topping;
import com.onlab.pizza.repository.PizzaRepository;
import com.onlab.pizza.repository.ToppingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ToppingController {

    @Autowired
    private ToppingRepository toppingRepository;

    @Autowired
    private PizzaRepository pizzaRepository;

    @GetMapping("/pizzas/{pizzaID}/toppings")
    public List<Topping> getToppingsByPizzaID(@PathVariable Integer pizzaID){
        return toppingRepository.findByPizzaID(pizzaID);
    }

    @PostMapping("/pizzas/{pizzaID}/toppings")
    public Topping addTopping(@PathVariable Integer pizzaID, @Valid @RequestBody Topping topping){
        return pizzaRepository.findById(pizzaID).map(pizza -> {
            topping.setPizza(pizza);
            pizza.getToppings().add(topping);
            return toppingRepository.save(topping);
        }).orElseThrow(()-> new NotFoundException("Pizzatype is not found with provided ID " + pizzaID));
    }

    @PutMapping("/pizzas/{pizzaID}/toppings/{toppingID}")
    public Topping updateTopping(@PathVariable Integer pizzaID, @PathVariable Integer toppingID, @Valid @RequestBody Topping toppingRequest){
        if(!pizzaRepository.existsById(pizzaID)){
            throw new NotFoundException("Pizza is not found with provided ID " + pizzaID);
        }

        return toppingRepository.findById(toppingID).map(topping -> {
            topping.setToppingName(toppingRequest.getToppingName());
            topping.setCategory(toppingRequest.getCategory());
            topping.setSpicy(toppingRequest.getIsSpicy());

            return toppingRepository.save(topping);
        }).orElseThrow(() -> new NotFoundException("Topping is not found with provided ID " + toppingID));
    }

    @DeleteMapping("/toppings/{toppingID}")
    public ResponseEntity<?> deleteTopping(@PathVariable Integer pizzaID, @PathVariable Integer toppingID){

        if(!pizzaRepository.existsById(pizzaID)){
            throw new NotFoundException("Pizzatype is not found with provided ID " + pizzaID);
        }

        return toppingRepository.findById(toppingID).map(topping -> {
            toppingRepository.delete(topping);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Topping is not found with provided ID " + toppingID));
    }
}
