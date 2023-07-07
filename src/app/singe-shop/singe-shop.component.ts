import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Shop } from '../entities';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-singe-shop',
  templateUrl: './singe-shop.component.html',
  styleUrls: ['./singe-shop.component.css']
})
export class SingeShopComponent implements OnInit {
  prod:Product;

  constructor(private route:ActivatedRoute,private service:ShopService){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>this.service.recProd(params['id'].subscribe((data: Product)=>this.prod =data)))
  }
}

