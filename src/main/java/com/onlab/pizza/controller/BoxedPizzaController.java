package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.BoxedPizza;
import com.onlab.pizza.repository.BoxedPizzaRepository;
import com.onlab.pizza.repository.PizzaRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/boxedPizza", name = "BoxedPizza")
@Api(tags = "BoxedPizza")
public class BoxedPizzaController {

    @Autowired
    private BoxedPizzaRepository boxedPizzaRepository;

    @Autowired
    private PizzaRepository pizzaRepository;

    @GetMapping("pizzas/{pizzaID}/boxedpizzas")
    @ApiOperation(value = "Get boxed pizzas", response = BoxedPizza.class, nickname = "getBoxedPizzas")
    public List<BoxedPizza> getBoxedPizzaByPizzaType(@PathVariable Integer pizzaID){
        return boxedPizzaRepository.findByPizza(pizzaID);
    }

    @PostMapping("pizzas/{pizzaID}/boxedpizzas")
    @ApiOperation(value = "Add boxed pizza", response = BoxedPizza.class, nickname = "addBoxedPizza")
    public BoxedPizza addBox(@PathVariable Integer pizzaID, @Valid @RequestBody BoxedPizza boxedPizza){
        return pizzaRepository.findById(pizzaID).map(pizza -> {
            boxedPizza.setPizza(pizza);
            return boxedPizzaRepository.save(boxedPizza);
        }).orElseThrow(() -> new NotFoundException("Pizzatype is not found with provided ID " + pizzaID));
    }

    @PutMapping("pizzas/{pizzaID}/boxedpizzas/{boxID}")
    @ApiOperation(value = "Update boxed pizza", response = BoxedPizza.class, nickname = "updateBoxedPizza")
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

    @DeleteMapping("pizzas/{pizzaID}/boxedpizzas")
    @ApiOperation(value = "Delete boxed pizza", nickname = "deleteBoxedPizza")
    public ResponseEntity<?> deleteBox(@RequestBody Integer pizzaID, @RequestBody Integer boxID){
        if(!pizzaRepository.existsById(pizzaID)){
            throw new NotFoundException("Pizzatype is not found with provided ID " + pizzaID);
        }

        return boxedPizzaRepository.findById(boxID).map(box -> {
            boxedPizzaRepository.delete(box);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Box is not found with provided ID " + boxID));
    }
}
