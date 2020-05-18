package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.PersonalDetails;
import com.onlab.pizza.repository.PersonalDetailsRepository;
import com.onlab.pizza.wrapper.PersonalDetailsWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/personalDetails", name = "PersonalDetails")
@Api(tags = "PersonalDetails")
public class PersonalDetailsController {

    @Autowired
    private PersonalDetailsRepository personalDetailsRepository;

    @GetMapping("/people")
    @ApiOperation(value = "Get all personal details", response = PersonalDetailsWrapper.class, nickname = "getPersonalDetails")
    public List<PersonalDetails> getPeople(){
        return personalDetailsRepository.findAll();
    }

    @PostMapping("/people")
    @ApiOperation(value = "Add new personal details", response = PersonalDetails.class, nickname = "addPersonalDetails")
    public PersonalDetails createPerson(@Valid @RequestBody PersonalDetails personalDetails){
        return personalDetailsRepository.save(personalDetails);
    }

    @PutMapping("/people")
    @ApiOperation(value = "Update personal details", response = PersonalDetails.class, nickname = "updatePersonalDetails")
    public PersonalDetails updatePerson(@RequestParam(value = "personID", required = true) Integer personID, @Valid @RequestBody PersonalDetails personRequest){
        return personalDetailsRepository.findById(personID).map(person -> {
            person.setPersonalName(personRequest.getPersonalName());
            person.setAddress(personRequest.getAddress());
            person.setPhoneNumber(personRequest.getPhoneNumber());
            person.setEmailAddress(personRequest.getEmailAddress());

            return personalDetailsRepository.save(person);
        }).orElseThrow(()-> new NotFoundException("Person is not found with provided ID " + personID));
    }

}
