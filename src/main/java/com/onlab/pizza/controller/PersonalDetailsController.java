package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.PersonalDetails;
import com.onlab.pizza.repository.PersonalDetailsRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/personalDetails", name = "PersonalDetails")
@Api(tags = "PersonalDetails")
public class PersonalDetailsController {

    @Autowired
    private PersonalDetailsRepository personalDetailsRepository;

    @GetMapping("/people")
    @ApiOperation(value = "Get all personal details", response = PersonalDetails.class, nickname = "getPersonalDetails")
    public Page<PersonalDetails> getPeople(Pageable pageable){
        return personalDetailsRepository.findAll(pageable);
    }

    @PostMapping("/people")
    @ApiOperation(value = "Add new personal details", response = PersonalDetails.class, nickname = "addPersonalDetails")
    public PersonalDetails createPerson(@Valid @RequestBody PersonalDetails personalDetails){
        return personalDetailsRepository.save(personalDetails);
    }

    @PutMapping("/people/{personID}")
    @ApiOperation(value = "Update personal details", response = PersonalDetails.class, nickname = "updatePersonalDetails")
    public PersonalDetails updatePerson(@PathVariable Integer personID, @Valid @RequestBody PersonalDetails personRequest){
        return personalDetailsRepository.findById(personID).map(person -> {
            person.setPersonalName(personRequest.getPersonalName());
            person.setAddress(personRequest.getAddress());
            person.setPhoneNumber(personRequest.getPhoneNumber());
            person.setEmailAddress(personRequest.getEmailAddress());

            return personalDetailsRepository.save(person);
        }).orElseThrow(()-> new NotFoundException("Person is not found with provided ID " + personID));
    }

    @DeleteMapping("people")
    @ApiOperation(value = "Delete personal details", nickname = "deletePersonalDetails")
    public ResponseEntity<?> deletePerson(@RequestBody Integer personID){
        return personalDetailsRepository.findById(personID).map(person -> {
            personalDetailsRepository.delete(person);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Person is not found with provided ID " + personID));
    }
}
