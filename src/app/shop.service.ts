import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, Product, Shop } from './entities';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }
  fetchAll(){
    return this.http.get<Shop[]>(environment.serverUrl+'/api/shop');
  }
  fetchOne(id:any){
    return this.http.get<Shop>(environment.serverUrl+'/api/shop/'+id);
  }
  add(shop:Shop){
    return this.http.post<Shop>(environment.serverUrl+'/api/shop',shop);
  }
  delete(id:number){
    return this.http.delete<void>(environment.serverUrl+'/api/shop/'+id);
  }
  update(shop:Shop){
    return this.http.patch<Shop>(environment.serverUrl+'/api/shop/'+shop.id,shop)
  }
  recProd(id:number){
    return this.http.get<Product[]>(environment.serverUrl+'/api/shop/product/'+id)
  }
  recOrd(id:number){
    return this.http.get<Order[]>(environment.serverUrl+'/api/shop/order/'+id)
  }
}
