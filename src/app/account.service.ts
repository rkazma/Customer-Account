import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountCreate } from './account-create.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'https://localhost:7123/api/accounts'; // we can put the base url with out api/accounts in environment.ts to change it based on the env.

  constructor(private http: HttpClient) {}

  createAccount(
    customerId: number,
    accountCreate: AccountCreate
  ): Observable<HttpResponse<any>> {
    let url = `${this.apiUrl}/${customerId}`;
    return this.http.post<any>(url, accountCreate, { observe: 'response' });
  }

  getCustomerInfo(customerId: number): Observable<any> {
    let url = `${this.apiUrl}/${customerId}`;
    return this.http.get<any>(url);
  }
}
