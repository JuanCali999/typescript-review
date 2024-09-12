import {Customer} from "./crm/domain/model/customer";
import {SalesOrder} from "./sales/domain/model/sales-order";

let customer = new Customer('Juan Perez');

let salesOrder = new SalesOrder(customer.id)

salesOrder.addItem("P001", 3, 5);
salesOrder.addItem("P002", 1, 10);

customer.lastOrderPrice = salesOrder.calculateTotalPrice();

console.log(`Customer named ${customer.name}, and identified with ID "${customer.id}" 
have just completed an order "${salesOrder.id}" for a total of $. ${customer.lastOrderPrice}`);



