import { Component, Input } from '@angular/core';
import { Shop } from '../entities';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent {
  @Input({required:true})
  shop:Shop;
}
