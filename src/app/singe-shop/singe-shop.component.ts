import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Option, Product} from '../entities';
import { ShopService } from '../shop.service';
import { OptionService } from '../option.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-singe-shop',
  templateUrl: './singe-shop.component.html',
  styleUrls: ['./singe-shop.component.css']
})
export class SingeShopComponent implements OnInit {
  prod:Product[];
  option:Option[];
  idRoute:any;
  serverUrl=environment.serverUrl;
  constructor(private route:ActivatedRoute,private service:ShopService,private serv:OptionService){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>this.service.recProd(params['id']).subscribe(data=>this.prod =data));
    this.route.params.subscribe(params=>this.idRoute=params['id']);
  }

  options( id:any){
    this.serv.fetchAllByProd(id).subscribe(data=>this.option =data);
  }

  

}

