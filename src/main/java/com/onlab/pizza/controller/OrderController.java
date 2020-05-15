package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.Order;
import com.onlab.pizza.repository.OrderRepository;
import com.onlab.pizza.repository.PersonalDetailsRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/order", name = "Order")
@Api(tags = "Order")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PersonalDetailsRepository personalDetailsRepository;

    @GetMapping("/people/{personID}/orders")
    @ApiOperation(value = "Get orders", response = Order.class, nickname = "getOrders")
    public List<Order> getOrdersByPersonID(@PathVariable Integer personID){
        return orderRepository.findByPersonalDetails(personID);
    }

    @PostMapping("/people/{personID}/orders")
    @ApiOperation(value = "Add new order", response = Order.class, nickname = "addOrder")
    public Order addOrder(@PathVariable Integer personID, @Valid @RequestBody Order order){
        return personalDetailsRepository.findById(personID).map(person -> {
            order.setPersonalDetails(person);
            return orderRepository.save(order);
        }).orElseThrow(() -> new NotFoundException("Person is not found wih provided ID " + personID));
    }

    @PutMapping("people/{personID}/orders/{orderID}")
    @ApiOperation(value = "Update order", response = Order.class, nickname = "updateOrder")
    public Order updateOrder(@PathVariable Integer personID, @PathVariable Integer orderID, @Valid @RequestBody Order orderRequest){
        if(!personalDetailsRepository.existsById(personID)){
            throw new NotFoundException("Person is not found with provided ID " + personID);
        }

        return orderRepository.findById(orderID).map(order -> {
            order.setOrderPrice(orderRequest.getOrderPrice());
            order.setOrderDate(orderRequest.getOrderDate());

            return orderRepository.save(order);
        }).orElseThrow(() -> new NotFoundException("Order is not found with provided ID " + orderID));
    }

    @DeleteMapping("people/{personID}/orders")
    @ApiOperation(value = "Delete order", nickname = "deleteOrders")
    public ResponseEntity<?> deleteOrder(@RequestBody Integer personID, @RequestBody Integer orderID){
        if(!personalDetailsRepository.existsById(personID)){
            throw new NotFoundException("Person is not found with provided ID " + personID);
        }

        return orderRepository.findById(orderID).map(order -> {
            orderRepository.delete(order);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Order is not found with provided ID " + orderID));
    }
}
