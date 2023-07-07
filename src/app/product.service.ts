import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './entities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  fetchAll(){
    return this.http.get<Product[]>(environment.serverUrl+'/api/product');
  }
  fetchOne(id:any) {
    return this.http.get<Product>(environment.serverUrl+'/api/product/'+id);
  }
  add(prod:Product) {
    return this.http.post<Product>(environment.serverUrl+'/api/product', prod);
  }
  delete(id:number) {
    return this.http.delete<void>(environment.serverUrl+'/api/product/'+id);
  }
  update(prod:Product) {
    return this.http.patch<Product>('http://localhost:8000/api/product/'+prod.id, prod);
  }
  
}
