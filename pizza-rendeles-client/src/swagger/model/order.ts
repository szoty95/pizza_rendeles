/**
 * REST API SPEC FOR MIX WEBAPP
 * REST API SPEC FOR MIX WEBAPP
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BoxedPizza } from './boxedPizza';
import { PersonalDetails } from './personalDetails';


export interface Order { 
    orderID?: number;
    orderPrice?: number;
    quantity?: number;
    orderDate?: string;
    personalDetails?: PersonalDetails;
    boxedPizzas?: Array<BoxedPizza>;
}
