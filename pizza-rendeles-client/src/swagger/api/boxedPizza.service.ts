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
     * @param  
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addBoxedPizza(: number, body?: BoxedPizza, observe?: 'body', reportProgress?: boolean): Observable<BoxedPizza>;
    public addBoxedPizza(: number, body?: BoxedPizza, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BoxedPizza>>;
    public addBoxedPizza(: number, body?: BoxedPizza, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BoxedPizza>>;
    public addBoxedPizza(: number, body?: BoxedPizza, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if ( === null ||  === undefined) {
            throw new Error('Required parameter  was null or undefined when calling addBoxedPizza.');
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

        return this.httpClient.post<BoxedPizza>(`${this.basePath}/api/boxedPizza/pizzas/${encodeURIComponent(String(pizzaID))}/boxedpizzas`,
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
     * Delete boxed pizza
     * 
     * @param body 
     * @param body2 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteBoxedPizza(body?: number, body2?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteBoxedPizza(body?: number, body2?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteBoxedPizza(body?: number, body2?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteBoxedPizza(body?: number, body2?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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

        return this.httpClient.delete<any>(`${this.basePath}/api/boxedPizza/pizzas/${encodeURIComponent(String(pizzaID))}/boxedpizzas`,
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
     * @param  
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBoxedPizzas(: number, observe?: 'body', reportProgress?: boolean): Observable<BoxedPizza>;
    public getBoxedPizzas(: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BoxedPizza>>;
    public getBoxedPizzas(: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BoxedPizza>>;
    public getBoxedPizzas(: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if ( === null ||  === undefined) {
            throw new Error('Required parameter  was null or undefined when calling getBoxedPizzas.');
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

        return this.httpClient.get<BoxedPizza>(`${this.basePath}/api/boxedPizza/pizzas/${encodeURIComponent(String(pizzaID))}/boxedpizzas`,
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
     * @param  
     * @param 2 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateBoxedPizza(: number, 2: number, body?: BoxedPizza, observe?: 'body', reportProgress?: boolean): Observable<BoxedPizza>;
    public updateBoxedPizza(: number, 2: number, body?: BoxedPizza, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BoxedPizza>>;
    public updateBoxedPizza(: number, 2: number, body?: BoxedPizza, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BoxedPizza>>;
    public updateBoxedPizza(: number, 2: number, body?: BoxedPizza, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if ( === null ||  === undefined) {
            throw new Error('Required parameter  was null or undefined when calling updateBoxedPizza.');
        }

        if (2 === null || 2 === undefined) {
            throw new Error('Required parameter 2 was null or undefined when calling updateBoxedPizza.');
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

        return this.httpClient.put<BoxedPizza>(`${this.basePath}/api/boxedPizza/pizzas/${encodeURIComponent(String(pizzaID))}/boxedpizzas/${encodeURIComponent(String(boxID))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
