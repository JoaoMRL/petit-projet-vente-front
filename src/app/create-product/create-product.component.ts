import { Component, Input } from '@angular/core';
import { Product } from '../entities';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

@Input()
product:Product = {label:'', basePrice:0, description:'', id_shop:0};

constructor(private service:ProductService){}

handleSubmit() {
  this.service.add(this.product).subscribe();
}

}
