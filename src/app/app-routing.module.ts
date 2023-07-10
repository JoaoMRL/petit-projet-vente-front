import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingeShopComponent } from './singe-shop/singe-shop.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateShopComponent } from './create-shop/create-shop.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop/:id',component:SingeShopComponent},
  {path:'product', component:CreateProductComponent},
  {path:'shoppy', component:CreateShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
