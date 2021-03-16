import { AccountService } from './../account.service';
import { Account } from './../account.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  account: Account = {
    name:'',
    email:'',
    password:''
  }


  constructor(private accountService: AccountService,
              private router: Router) { }
  ngOnInit(): void {
  }
  createAccount(){
    this.accountService.create(this.account).subscribe(() => {
    this.accountService.showMessage('Account Created!')
    this.router.navigate(['/account']);
  });
  }
  cancel(){
    this.router.navigate(['/account']);
    this.accountService.showMessage('Operation canceled')
  }

}

