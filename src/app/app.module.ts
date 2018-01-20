import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatToolbarModule, MatListModule } from '@angular/material';


import { AppComponent } from './app.component';
import { InfiniteScrollerDirective } from './directives/infinite-scroller.directive';
import { ProductListService } from './services/product-list.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';


@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollerDirective,
    ProductListComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
