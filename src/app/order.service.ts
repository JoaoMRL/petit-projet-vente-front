import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, Product, Option } from './entities';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  fetchAll(){
    return this.http.get<Order[]>(environment.serverUrl+'/api/order')
  }

  fetchOne(id:any){
    return this.http.get<Order>(environment.serverUrl+'/api/order'+id)
  }

  Add(order:Order){
    return this.http.post<Order>(environment.serverUrl+'/api/order', order)
  }

  delete(id:number) {
    return this.http.delete<void>(environment.serverUrl+'/api/order'+id)
  }

  update(order:Order) {
    return this.http.patch<Order>(environment.serverUrl+'/api/order'+order.id, order)
  }

  recProduct(id:number){
    return this.http.get<Product>(environment.serverUrl+'/api/shop/product/'+id)
  }
  recOption(id:number){
    return this.http.get<Option>(environment.serverUrl+'/api/shop/option/'+id)
  }
}
