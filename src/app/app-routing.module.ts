import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DonatedItemsComponent} from './donated-items/donated-items.component';
import {EcommerceComponent} from './ecommerce/ecommerce.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'donated', component: DonatedItemsComponent},
  {path: 'home', component: EcommerceComponent },
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
