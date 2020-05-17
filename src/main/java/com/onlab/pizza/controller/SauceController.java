package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.Sauce;
import com.onlab.pizza.repository.SauceRepository;
import com.onlab.pizza.wrapper.SauceWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/sauce", name = "Sauce")
@Api(tags = "Sauce")
public class SauceController {

    @Autowired
    private SauceRepository sauceRepository;

    @GetMapping("/sauces")
    @ApiOperation(value = "Get sauces", response = SauceWrapper.class, nickname = "getSauces")
    public List<Sauce> getSauces(){
        return sauceRepository.findAll();
    }

    @PostMapping("/sauces")
    @ApiOperation(value = "Add new sauce", response = Sauce.class, nickname = "addSauces")
    public Sauce createSauce(@Valid @RequestBody Sauce sauce){
        return sauceRepository.save(sauce);
    }

    @PutMapping("/sauces/{sauceID}")
    @ApiOperation(value = "Update sauce", response = Sauce.class, nickname = "updateSauces")
    public Sauce updateSauce(@RequestParam(value = "sauceID", required = true) Integer sauceID, @Valid @RequestBody Sauce sauceRequest){
        return sauceRepository.findById(sauceID).map(sauce -> {
            sauce.setSauceName(sauceRequest.getSauceName());
            sauce.setSpicy(sauceRequest.getSpicy());
            sauce.setColor(sauceRequest.getColor());
            return sauceRepository.save(sauce);
        }).orElseThrow(()-> new NotFoundException("Sauce is not found with provided ID " + sauceID));
    }

    @DeleteMapping("/sauces")
    @ApiOperation(value = "Get sauces", nickname = "deleteSauces")
    public ResponseEntity<?> deleteSauce(@RequestParam(value = "sauceID", required = true) Integer sauceID){
        return sauceRepository.findById(sauceID).map(sauce -> {
            sauceRepository.delete(sauce);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Sauce is not found with provided ID " + sauceID));
    }
}
