import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Option } from './entities';


@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(private http:HttpClient) { }
  fetchAll(){
    return this.http.get<Option[]>(environment.serverUrl+'/api/option');
  }
  fetchOne(id:any){
    return this.http.get<Option>(environment.serverUrl+'/api/option/'+id);
  }
  add(option:Option){
    return this.http.post<Option>(environment.serverUrl+'/api/option',option);
  }
  delete(id:number){
    return this.http.delete<void>(environment.serverUrl+'/api/option/'+id);
  }
  update(option:Option){
    return this.http.patch<Option>(environment.serverUrl+'/api/option/'+option.id,option)
  }
  fetchAllByProd(id:number){
    return this.http.get<Option[]>(environment.serverUrl+'/api/option/ofProd/'+id);
  }
}