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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Pizza } from '../model/pizza';
import { PizzaWrapper } from '../model/pizzaWrapper';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PizzaService {

    protected basePath = 'https://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add Pizza Type
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPizza(body?: Pizza, observe?: 'body', reportProgress?: boolean): Observable<Pizza>;
    public addPizza(body?: Pizza, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Pizza>>;
    public addPizza(body?: Pizza, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Pizza>>;
    public addPizza(body?: Pizza, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Pizza>(`${this.basePath}/api/pizza/pizzas`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete pizza
     * 
     * @param pizzaID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePizza(pizzaID: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deletePizza(pizzaID: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deletePizza(pizzaID: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deletePizza(pizzaID: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pizzaID === null || pizzaID === undefined) {
            throw new Error('Required parameter pizzaID was null or undefined when calling deletePizza.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pizzaID !== undefined && pizzaID !== null) {
            queryParameters = queryParameters.set('pizzaID', <any>pizzaID);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/api/pizza/pizzas`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Pizza types
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPizzaTypes(observe?: 'body', reportProgress?: boolean): Observable<PizzaWrapper>;
    public getPizzaTypes(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PizzaWrapper>>;
    public getPizzaTypes(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PizzaWrapper>>;
    public getPizzaTypes(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<PizzaWrapper>(`${this.basePath}/api/pizza/pizzas`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update Type
     * 
     * @param pizzaID 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePizza(pizzaID: number, body?: Pizza, observe?: 'body', reportProgress?: boolean): Observable<Pizza>;
    public updatePizza(pizzaID: number, body?: Pizza, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Pizza>>;
    public updatePizza(pizzaID: number, body?: Pizza, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Pizza>>;
    public updatePizza(pizzaID: number, body?: Pizza, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pizzaID === null || pizzaID === undefined) {
            throw new Error('Required parameter pizzaID was null or undefined when calling updatePizza.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pizzaID !== undefined && pizzaID !== null) {
            queryParameters = queryParameters.set('pizzaID', <any>pizzaID);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Pizza>(`${this.basePath}/api/pizza/pizzas/${encodeURIComponent(String(pizzaID))}`,
            body,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
