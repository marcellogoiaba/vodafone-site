import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PhoneInfoComponent } from './phone-info/phone-info.component'; 
import { OrderPlacedComponent } from './order-placed/order-placed.component'

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'details/:id', component: PhoneInfoComponent},
  { path: 'order-placed', component: OrderPlacedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
