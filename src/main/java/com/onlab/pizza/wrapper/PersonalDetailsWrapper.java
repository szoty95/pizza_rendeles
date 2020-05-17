package com.onlab.pizza.wrapper;

import com.onlab.pizza.model.PersonalDetails;

import java.util.List;

public class PersonalDetailsWrapper {
    List<PersonalDetails> personalDetails;

    public void setPersonalDetails(List<PersonalDetails> personalDetails) {
        this.personalDetails = personalDetails;
    }

    public List<PersonalDetails> getPersonalDetails() {
        return personalDetails;
    }
}
