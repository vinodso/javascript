import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
  path:'home', component:HomeComponent
  },
  {
    path:'services', component:ServicesComponent
    },
    {
      path:'product', component:ProductComponent
      },
      {
        path:'calculator', component:CalculatorComponent
        },
        {
          path:'signup', component:SignupComponent
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
