import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'https://localhost:7123/api/transactions'; // we can put the base url with out api/accounts in environment.ts to change it based on the env.

  constructor(private http: HttpClient) {}

  getTransactions(
    customerId: number,
    accountId: number,
    start: number,
    limit: number
  ): Observable<any> {
    let url = `${this.apiUrl}/customer/${customerId}/account/${accountId}?start=${start}&limit=${limit}`;
    return this.http.get<any>(url);
  }
}
