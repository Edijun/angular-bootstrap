import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Customer } from "../model/customer";
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class CustomerService {

    private baseUrl = environment.baseUrl + 'customer/'

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.baseUrl);
    }

    // postAPIGateway(value: any): Observable<APIModel> {
    //     return this.http.post<APIModel>(
    //         this.baseUrl + '/add/', value, httpOptions
    //     );
    // }

    // putAPIGateway(idAPI: string, value: any): Observable<number> {
    //     return this.http.put<number>(
    //         this.baseUrl + '/update/' + idAPI, value, httpOptions
    //     );
    // }

    // getAPIGateway(idAPI: string): Observable<APIModel> {
    //     return this.http.get<APIModel>(this.baseUrl + '/get/' + idAPI);
    // }

    // deleteAPIGateway(idAPI: string): Observable<number> {
    //     return this.http.delete<number>(this.baseUrl + '/remove/' + idAPI);
    // }
}