package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.Topping;
import com.onlab.pizza.repository.PizzaRepository;
import com.onlab.pizza.repository.ToppingRepository;
import com.onlab.pizza.wrapper.ToppingWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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

    @GetMapping("/pizzas/{pizzaID}/toppings")
    @ApiOperation(value = "Get all toppings", response= ToppingWrapper.class, nickname = "getToppings")
    public List<Topping> getToppingsByPizzaID(@RequestParam(value = "pizzaID", required = true) Integer pizzaID){
        if (pizzaRepository.findById(pizzaID).isPresent()) {
            return new ArrayList<>((pizzaRepository.findById(pizzaID).get().getToppings()));
        } else {
            throw new NotFoundException("Pizza not found with this ID");
        }
    }

    @PostMapping("/pizzas/{pizzaID}/toppings")
    @ApiOperation(value = "Add new topping", response=Topping.class, nickname = "addTopping")
    public Topping addTopping(@RequestParam(value = "pizzaID", required = true) Integer pizzaID, @Valid @RequestBody Topping topping){
        return pizzaRepository.findById(pizzaID).map(pizza -> {
            pizza.getToppings().add(topping);
            return toppingRepository.save(topping);
        }).orElseThrow(()-> new NotFoundException("Pizzatype is not found with provided ID " + pizzaID));
    }

    @PutMapping("/pizzas/{pizzaID}/toppings/{toppingID}")
    @ApiOperation(value = "Update topping", response=Topping.class, nickname = "updateTopping")
    public Topping updateTopping(@RequestParam(value = "pizzaID", required = true) Integer pizzaID, @RequestParam(value = "toppingID", required = true) Integer toppingID, @Valid @RequestBody Topping toppingRequest){
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

    @DeleteMapping("/pizzas/{pizzaID}/toppings")
    @ApiOperation(value = "Delete topping", nickname = "deleteTopping")
    public ResponseEntity<?> deleteTopping(@RequestParam(value = "pizzaID", required = true) Integer pizzaID, @RequestParam(value = "toppingID", required = true) Integer toppingID){

        if(!pizzaRepository.existsById(pizzaID)){
            throw new NotFoundException("Pizzatype is not found with provided ID " + pizzaID);
        }

        return toppingRepository.findById(toppingID).map(topping -> {
            toppingRepository.delete(topping);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Topping is not found with provided ID " + toppingID));
    }
}
