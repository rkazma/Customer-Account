import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { AccountService } from '../account.service';
import { AccountCreate } from '../account-create.model';
import { SnackbarService } from '../snackbar.service';
import { HttpResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.sass'],
})
export class CustomerAccountComponent {
  customerId: number = 0; // Initialize these variables as needed
  amount: number = 0;
  accountId: number = 0;
  transactions: any[] = []; // Declare a variable to hold retrieved transactions
  customerInfo: any[] = [];
  showFooter: boolean = false;

  constructor(
    private transactionService: TransactionService,
    private accountService: AccountService,
    private snackbarService: SnackbarService
  ) {}

  // Methods to interact with the service (as shown in the previous response)

  // Example:
  getInfoTransactions(): void {
    forkJoin([
      this.transactionService.getTransactions(
        this.customerId,
        this.accountId,
        0,
        10
      ),
      this.accountService.getCustomerInfo(this.customerId),
    ]).subscribe(
      ([transactions, customerInfo]) => {
        this.transactions = transactions.length === 0 ? [] : transactions; // Assign retrieved transactions to the variable for display
        this.showFooter = this.transactions.length === 0;
        this.customerInfo = [];
        this.customerInfo.push(customerInfo);
      },
      (error) => {
        // Handle errors here
      }
    );
  }

  createAccount(): void {
    const accountCreate = new AccountCreate(this.amount);
    this.accountService.createAccount(this.customerId, accountCreate).subscribe(
      (response: HttpResponse<any>) => {
        if (response.body.status && response.body.status === 'failed') {
          let accountIdHeader = response.headers.get('Accountid');
          if (!isNaN(Number(accountIdHeader))) {
            this.accountId = Number(accountIdHeader);
          }
          this.snackbarService.openWarningSnackBar(response.body.message);
        } else {
          this.accountId = response.body;
          this.snackbarService.openSnackBar('Account Created Successfully');
        }
      },
      (error) => {
        // Handle errors here
        this.snackbarService.openWarningSnackBar('Unknown Error Occurred');
      }
    );
  }
}
