package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.Basket;
import com.onlab.pizza.repository.BasketRepository;
import com.onlab.pizza.repository.PizzaRepository;
import com.onlab.pizza.wrapper.BasketWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/basket", name = "Basket")
@Api(tags = "Basket")
public class BasketController {

    @Autowired
    private BasketRepository basketRepository;

    @Autowired
    private PizzaRepository pizzaRepository;

    @GetMapping("/baskets")
    @ApiOperation(value = "Get baskets", response = BasketWrapper.class, nickname = "getBaskets")
    public BasketWrapper getBaskets(){
        BasketWrapper basketWrapper = new BasketWrapper();
        basketWrapper.setBaskets(basketRepository.findAll());
        return basketWrapper;
    }

    @PostMapping("/baskets")
    @ApiOperation(value = "Add basket", response = Basket.class, nickname = "addBasket")
    public Basket addBox(@RequestParam(value = "pizzaID", required = true) Integer pizzaID, @Valid @RequestBody Basket basket){
        return pizzaRepository.findById(pizzaID).map(pizza -> {
            basket.setPizza(pizza);
            return basketRepository.save(basket);
        }).orElseThrow(() -> new NotFoundException("Pizzatype is not found with provided ID " + pizzaID));
    }

    @DeleteMapping("/baskets/{pizzaID}")
    @ApiOperation(value = "Delete basket", response = Integer.class, nickname = "deleteBasket")
    public ResponseEntity<?> deleteBasket(@PathVariable(value = "pizzaID", required = true) Integer pizzaID){
        if(basketRepository.findById(pizzaID).isPresent()) {
            basketRepository.delete(basketRepository.findById(pizzaID).get());
        }
        return ResponseEntity.ok(pizzaID);
    }
}
