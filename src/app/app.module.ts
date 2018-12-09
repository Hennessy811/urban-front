import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { CompaniesComponent } from './companies/companies.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSlideToggleModule, MatSortModule, MatToolbarModule
} from "@angular/material";
import { MainComponent } from './main/main.component';
import {CommonModule} from "@angular/common";
import { SearchModuleComponent } from './shared/search-module/search-module.component';
import {SearchService} from "./search.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientJsonpModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CompaniesComponent,
    MainComponent,
    SearchModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSlideToggleModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
