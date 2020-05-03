package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.Sauce;
import com.onlab.pizza.repository.SauceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.awt.print.Pageable;

@RestController
public class SauceController {

    @Autowired
    private SauceRepository sauceRepository;

    @GetMapping("/sauces")
    public Page<Sauce> getSauces(Pageable pageable){
        return sauceRepository.findAll((org.springframework.data.domain.Pageable) pageable);
    }

    @PostMapping("/sauces")
    public Sauce createSauce(@Valid @RequestBody Sauce sauce){
        return sauceRepository.save(sauce);
    }

    @PutMapping("/sauces/{sauceID}")
    public Sauce updateSauce(@PathVariable Integer sauceID, @Valid @RequestBody Sauce sauceRequest){
        return sauceRepository.findById(sauceID).map(sauce -> {
            sauce.setSauceName(sauceRequest.getSauceName());
            sauce.setSpicy(sauceRequest.getSpicy());
            sauce.setColor(sauceRequest.getColor());
            return sauceRepository.save(sauce);
        }).orElseThrow(()-> new NotFoundException("Sauce is not found with provided ID " + sauceID));
    }

    @DeleteMapping("/sauces/{sauceID}")
    public ResponseEntity<?> deleteSauce(@PathVariable Integer sauceID){
        return sauceRepository.findById(sauceID).map(sauce -> {
            sauceRepository.delete(sauce);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Sauce is not found with provided ID " + sauceID));
    }
}
