package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.Order;
import com.onlab.pizza.repository.OrderRepository;
import com.onlab.pizza.repository.PersonalDetailsRepository;
import com.onlab.pizza.wrapper.OrderWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/order", name = "Order")
@Api(tags = "Order")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PersonalDetailsRepository personalDetailsRepository;

    @GetMapping("/orders")
    @ApiOperation(value = "Get orders", response = OrderWrapper.class, nickname = "getOrders")
    public OrderWrapper getOrders(){
        OrderWrapper orderWrapper = new OrderWrapper();
        orderWrapper.setOrders(orderRepository.findAll());
        return orderWrapper;
    }

    @PostMapping("/orders")
    @ApiOperation(value = "Add new order", response = Order.class, nickname = "addOrder")
    public Order addOrder(@RequestParam(value = "personID", required = true) Integer personID, @Valid @RequestBody Order order){
        return personalDetailsRepository.findById(personID).map(person -> {
            order.setPersonalDetails(person);
            return orderRepository.save(order);
        }).orElseThrow(() -> new NotFoundException("Person is not found wih provided ID " + personID));
    }

    @DeleteMapping("/orders")
    @ApiOperation(value = "Delete order", nickname = "deleteOrders")
    public ResponseEntity<?> deleteOrder(@RequestParam(value = "personID", required = true) Integer personID, @RequestParam(value = "orderID", required = true) Integer orderID){
        if(!personalDetailsRepository.existsById(personID)){
            throw new NotFoundException("Person is not found with provided ID " + personID);
        }

        return orderRepository.findById(orderID).map(order -> {
            orderRepository.delete(order);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Order is not found with provided ID " + orderID));
    }
}
