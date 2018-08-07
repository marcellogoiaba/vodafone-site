import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PhoneInfoComponent } from './phone-info/phone-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ByManufacturerPipe } from './filters/by-manufacturer.pipe';
import { UniquePipe } from './filters/uniqueFilter';
import { OrderPlacedComponent } from './order-placed/order-placed.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PhoneInfoComponent,
    ByManufacturerPipe,
    UniquePipe,
    OrderPlacedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
