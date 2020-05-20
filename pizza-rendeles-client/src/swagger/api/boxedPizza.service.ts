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

import { BoxedPizza } from '../model/boxedPizza';
import { BoxedPizzaWrapper } from '../model/boxedPizzaWrapper';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class BoxedPizzaService {

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
     * Add boxed pizza
     * 
     * @param pizzaID 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addBoxedPizza(pizzaID: number, body?: BoxedPizza, observe?: 'body', reportProgress?: boolean): Observable<BoxedPizza>;
    public addBoxedPizza(pizzaID: number, body?: BoxedPizza, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BoxedPizza>>;
    public addBoxedPizza(pizzaID: number, body?: BoxedPizza, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BoxedPizza>>;
    public addBoxedPizza(pizzaID: number, body?: BoxedPizza, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pizzaID === null || pizzaID === undefined) {
            throw new Error('Required parameter pizzaID was null or undefined when calling addBoxedPizza.');
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

        return this.httpClient.post<BoxedPizza>(`${this.basePath}/api/boxedPizza/boxedpizzas`,
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

    /**
     * Delete boxed pizza
     * 
     * @param pizzaID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteBoxedPizza(pizzaID: number, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public deleteBoxedPizza(pizzaID: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public deleteBoxedPizza(pizzaID: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public deleteBoxedPizza(pizzaID: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pizzaID === null || pizzaID === undefined) {
            throw new Error('Required parameter pizzaID was null or undefined when calling deleteBoxedPizza.');
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

        return this.httpClient.delete<number>(`${this.basePath}/api/boxedPizza/boxedpizzas/${encodeURIComponent(String(pizzaID))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get boxed pizzas
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBoxedPizzas(observe?: 'body', reportProgress?: boolean): Observable<BoxedPizzaWrapper>;
    public getBoxedPizzas(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BoxedPizzaWrapper>>;
    public getBoxedPizzas(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BoxedPizzaWrapper>>;
    public getBoxedPizzas(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<BoxedPizzaWrapper>(`${this.basePath}/api/boxedPizza/boxedpizzas`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update boxed pizza
     * 
     * @param pizzaID 
     * @param boxID 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateBoxedPizza(pizzaID: number, boxID: number, body?: BoxedPizza, observe?: 'body', reportProgress?: boolean): Observable<BoxedPizza>;
    public updateBoxedPizza(pizzaID: number, boxID: number, body?: BoxedPizza, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BoxedPizza>>;
    public updateBoxedPizza(pizzaID: number, boxID: number, body?: BoxedPizza, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BoxedPizza>>;
    public updateBoxedPizza(pizzaID: number, boxID: number, body?: BoxedPizza, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pizzaID === null || pizzaID === undefined) {
            throw new Error('Required parameter pizzaID was null or undefined when calling updateBoxedPizza.');
        }

        if (boxID === null || boxID === undefined) {
            throw new Error('Required parameter boxID was null or undefined when calling updateBoxedPizza.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pizzaID !== undefined && pizzaID !== null) {
            queryParameters = queryParameters.set('pizzaID', <any>pizzaID);
        }
        if (boxID !== undefined && boxID !== null) {
            queryParameters = queryParameters.set('boxID', <any>boxID);
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

        return this.httpClient.put<BoxedPizza>(`${this.basePath}/api/boxedPizza/boxedpizzas`,
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