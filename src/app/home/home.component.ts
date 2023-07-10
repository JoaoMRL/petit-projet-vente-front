import { Component, OnInit } from '@angular/core';
import { Shop } from '../entities';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list:Shop[]=[];
  constructor(private service:ShopService){}
  
  ngOnInit(): void {
    this.service.fetchAll()
    .subscribe(data => this.list = data);
  }
  addToList(shop:Shop) {
    this.service.add(shop).subscribe(data=>this.list.push(data));
  }
  
}
