package com.onlab.pizza.controller;

import com.onlab.pizza.model.Sauce;
import com.onlab.pizza.repository.SauceRepository;
import com.onlab.pizza.wrapper.SauceWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

}
