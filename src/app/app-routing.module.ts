import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PhoneInfoComponent } from './phone-info/phone-info.component'; 

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'details/:id', component: PhoneInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
