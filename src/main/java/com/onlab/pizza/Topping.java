package com.onlab.pizza;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.util.Collection;

@Entity
public class Topping {

    @Id
    private String toppingName;
    private String category;  //meat or vegetable or else
    private boolean isSpicy;

    public Topping(){}

    public Topping(String name, String type, boolean isHot){
        toppingName = name;
        category = type;
        isSpicy = isHot;
    }

    @ManyToOne
    private Pizza pizza;

    @ManyToMany
    private Collection<BoxedPizza> boxedPizzas;


    public String getToppingName() {
        return toppingName;
    }

    public void setToppingName(String toppingName) {
        this.toppingName = toppingName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean getIsSpicy(){
        return isSpicy;
    }

    public void setSpicy(boolean spicy) {
        isSpicy = spicy;
    }

    public Pizza getPizza() {
        return pizza;
    }

    public void setPizza(Pizza pizza) {
        this.pizza = pizza;
    }

    public Collection<BoxedPizza> getBoxedPizzas() {
        return boxedPizzas;
    }

    public void setBoxedPizzas(Collection<BoxedPizza> boxedPizzas) {
        this.boxedPizzas = boxedPizzas;
    }
}
