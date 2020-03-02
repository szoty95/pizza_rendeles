//TODO: az entitásokat egy com.onlab.pizza.model package-be tedd majd át
package com.onlab.pizza;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

//TODO Át kellene gondolni, pontosan mit akarsz az Archive entitással.
/*Ha az a cél, hogy kb. ugyanazok az adatok legyenek benne, mint a DailyOrder-ben,
akkor célszerű egy új embedded osztályt bevezetni. (pl. OrderData), és akkor az Archive meg a DailyOrder is
egy OrderData-t tartalmazna, így elkerülve a redundanciát
*/ 
@Entity
public class Archive {

    @Id
    private int orderID;
    private String pizzaName;
    private int size; //diameter size in cm
    private boolean isThick; //pasta thickness
    private String extraTopping;
    private int price;
    private String orderDate;
    private int customerID;

    public Archive(){}

    public Archive(int orderID, String pizzaName, int size, boolean isThick, String extraTopping, int price, String orderDate, int customerID){
        this.orderID = orderID;
        this.pizzaName = pizzaName;
        this.size = size;
        this.isThick = isThick;
        this.extraTopping = extraTopping;
        this.price = price;
        this.orderDate = orderDate;
        this.customerID = customerID;
    }

    @OneToOne
    private DailyOrder dailyOrder;

    public int getOrderID() {
        return orderID;
    }

    public String getPizzaName() {
        return pizzaName;
    }

    public int getSize() {
        return size;
    }

    public boolean getIsThick(){
        return isThick;
    }

    public String getExtraTopping() {
        return extraTopping;
    }

    public int getPrice() {
        return price;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public int getCustomerID() {
        return customerID;
    }
}
