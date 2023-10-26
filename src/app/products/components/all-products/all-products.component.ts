import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from 'src/app/categories/services/categories.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  errorMassage: string | null = null;
  constructor(private productsPervice: ProductsService, private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsPervice.getAllProduct().subscribe({
      next: (res: any) => {
        console.log('Received res: %s', res);
        this.products = res;
      },
      error: (err: any) => {
        console.log('Error: %s', err);
        console.log(err.message);
        this.errorMassage = err.message;
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }

  // get all categories
  getCategories(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (data: any[]) => {
        console.log(`received data : ${JSON.stringify(data)}`);
      },
      error: (e: any) => {
       alert(e);
        },
        complete: ()=>{
          console.log("complete");
          }   
    })
  }


}
