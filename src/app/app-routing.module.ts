import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAccountComponent } from './customer-account/customer-account.component'; // Import your component

const routes: Routes = [
  { path: '', component: CustomerAccountComponent }, // Set your default route to CustomerAccountComponent
  { path: 'customer-account', component: CustomerAccountComponent }, // Assuming 'customer-account' is the path for the component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
