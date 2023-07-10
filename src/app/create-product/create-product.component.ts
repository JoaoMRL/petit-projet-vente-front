import { Component, Input } from '@angular/core';
import { Product, Option } from '../entities';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

@Input()
product:Product = {label:'', basePrice:0, description:'',picture:'',id_shop:0};
option:Option = {label: '', price:0, idProduct:0};
visible:boolean=false;
constructor(private service:ProductService, private route:ActivatedRoute){}
ngOnInit(): void {
  this.route.params.subscribe(params=>this.product.id_shop=params['id']);
}


img(event:Event){
  const target = event.target as HTMLInputElement;
  if(target.files){
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.onload=()=>{
      this.product.picture = reader.result as string;
    };
  }
}

handleSubmit() {
  this.service.add(this.product).subscribe();
}

}
