import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  products:any[]=[];
  items = [1,2,3,4]
  constructor( private service:ProductsService){
    
  }

  ngOnInit(){
    this.getProducts();
    console.log(this.products)
  }
  
  getProducts(){
    this.service.getAllProduct().subscribe((res:any)=>{
      console.log(res);
      this.products = res;
      })
      
  }
}
 