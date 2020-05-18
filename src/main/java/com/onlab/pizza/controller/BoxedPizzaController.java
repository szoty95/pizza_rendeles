package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.BoxedPizza;
import com.onlab.pizza.repository.BoxedPizzaRepository;
import com.onlab.pizza.repository.PizzaRepository;
import com.onlab.pizza.wrapper.BoxedPizzaWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/boxedPizza", name = "BoxedPizza")
@Api(tags = "BoxedPizza")
public class BoxedPizzaController {

    @Autowired
    private BoxedPizzaRepository boxedPizzaRepository;

    @Autowired
    private PizzaRepository pizzaRepository;

    @GetMapping("/boxedpizzas")
    @ApiOperation(value = "Get boxed pizzas", response = BoxedPizzaWrapper.class, nickname = "getBoxedPizzas")
    public BoxedPizzaWrapper getBoxedPizzas(){
        BoxedPizzaWrapper boxedPizzaWrapper = new BoxedPizzaWrapper();
        boxedPizzaWrapper.setBoxedPizzas(boxedPizzaRepository.findAll());
        return boxedPizzaWrapper;
    }

    @PostMapping("/boxedpizzas")
    @ApiOperation(value = "Add boxed pizza", response = BoxedPizza.class, nickname = "addBoxedPizza")
    public BoxedPizza addBox(@RequestParam(value = "pizzaID", required = true) Integer pizzaID, @Valid @RequestBody BoxedPizza boxedPizza){
        return pizzaRepository.findById(pizzaID).map(pizza -> {
            boxedPizza.setPizza(pizza);
            return boxedPizzaRepository.save(boxedPizza);
        }).orElseThrow(() -> new NotFoundException("Pizzatype is not found with provided ID " + pizzaID));
    }

    @PutMapping("/boxedpizzas")
    @ApiOperation(value = "Update boxed pizza", response = BoxedPizza.class, nickname = "updateBoxedPizza")
    public BoxedPizza updateBox(@RequestParam(value = "pizzaID", required = true) Integer pizzaID, @RequestParam(value = "boxID", required = true) Integer boxID, @Valid @RequestBody BoxedPizza boxRequest){
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

    @DeleteMapping("/boxedpizzas/{pizzaID}")
    @ApiOperation(value = "Delete boxed pizza", response = Integer.class, nickname = "deleteBoxedPizza")
    public ResponseEntity<?> deleteBox(@PathVariable(value = "pizzaID", required = true) Integer pizzaID){
        if(boxedPizzaRepository.findById(pizzaID).isPresent()) {
            boxedPizzaRepository.delete(boxedPizzaRepository.findById(pizzaID).get());
        }
        return ResponseEntity.ok(pizzaID);
    }
}
