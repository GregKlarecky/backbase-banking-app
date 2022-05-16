import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/interfaces/api-response.interface';
import { TransactionFacade } from '../../helpers/transaction.facade';
import { map } from 'rxjs/operators';
import { Transaction } from 'src/app/interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  getTransactions(): Observable<TransactionFacade[]> {
    return this.http
      .get<ApiResponse<Transaction[]>>(`${environment.apiUrl}`)
      .pipe(
        map(response => {
          return response.data.map(
            transaction => new TransactionFacade(transaction)
          );
        })
      );
  }
}
