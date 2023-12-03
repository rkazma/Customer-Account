import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.sass'],
})
export class TransactionsTableComponent {
  @Input() transactions: any[] = [];
  @Input() showFooter: boolean = false;
}
