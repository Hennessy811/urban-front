import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompaniesComponent} from "./companies/companies.component";
import {MainComponent} from "./main/main.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
