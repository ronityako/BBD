import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CartGridComponent } from './components/cart-grid/cart-grid.component';
import { UserAddProdComponent } from './components/user-add-prod/user-add-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    CartGridComponent,
    UserAddProdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
