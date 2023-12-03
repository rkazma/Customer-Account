import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-info-table',
  templateUrl: './customer-info-table.component.html',
  styleUrls: ['./customer-info-table.component.sass'],
})
export class CustomerInfoTableComponent {
  @Input() customerInfo: any[] = [];
}
