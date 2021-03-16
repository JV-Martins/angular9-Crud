import { Observable } from 'rxjs';
import { Account } from './account.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'http://localhost:3000/accounts'

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg: string){
    this.snackBar.open(msg,'X',{
      duration:2000,
      horizontalPosition:"right",
      verticalPosition: "top"
    })
  }

  create(account: Account): Observable<Account>{
    return this.http.post<Account>(this.baseUrl, account)
  }
}
