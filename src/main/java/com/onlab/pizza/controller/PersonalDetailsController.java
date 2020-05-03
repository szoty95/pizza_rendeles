package com.onlab.pizza.controller;

import com.onlab.pizza.exception.NotFoundException;
import com.onlab.pizza.model.PersonalDetails;
import com.onlab.pizza.repository.PersonalDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class PersonalDetailsController {

    @Autowired
    private PersonalDetailsRepository personalDetailsRepository;

    @GetMapping("/people")
    public Page<PersonalDetails> getPeople(Pageable pageable){
        return personalDetailsRepository.findAll(pageable);
    }

    @PostMapping("/people")
    public PersonalDetails createPerson(@Valid @RequestBody PersonalDetails personalDetails){
        return personalDetailsRepository.save(personalDetails);
    }

    @PutMapping("/people/{personID}")
    public PersonalDetails updatePerson(@PathVariable Integer personID, @Valid @RequestBody PersonalDetails personRequest){
        return personalDetailsRepository.findById(personID).map(person -> {
            person.setPersonalName(personRequest.getPersonalName());
            person.setAddress(personRequest.getAddress());
            person.setPhoneNumber(personRequest.getPhoneNumber());
            person.setEmailAddress(personRequest.getEmailAddress());

            return personalDetailsRepository.save(person);
        }).orElseThrow(()-> new NotFoundException("Person is not found with provided ID " + personID));
    }

    @DeleteMapping("people/{personID}")
    public ResponseEntity<?> deletePerson(@PathVariable Integer personID){
        return personalDetailsRepository.findById(personID).map(person -> {
            personalDetailsRepository.delete(person);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new NotFoundException("Person is not found with provided ID " + personID));
    }
}
