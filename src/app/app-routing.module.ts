import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingeShopComponent } from './singe-shop/singe-shop.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop/:id',component:SingeShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
