import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Shop } from '../entities';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})
export class CreateShopComponent {
  @Input()
  shop:Shop = {name: '', address:''};
 
  constructor(private service:ShopService){}
  handleSubmit() {
    this.service.add(this.shop).subscribe();
  }

}
