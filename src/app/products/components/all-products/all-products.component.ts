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
  categories: any[] = [];
  cartProducts: any[] = [];
loading:boolean = false;
  errorMassage: string | null = null;
  constructor(
    private productsPervice: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.productsPervice.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res;
      },
      error: (err: any) => {
        console.log('Error: %s', err);
        console.log(err.message);
        this.errorMassage = err.message;
        this.loading = false;
      },
      complete: () => {
        console.log('Completed');
        this.loading = false;
      },
    });
  }

  // get all categories
  getCategories(): void {
        this.loading = true;
        this.categoriesService.getAllCategories().subscribe({
      next: (data: any) => {
        this.categories = data;
      },
      error: (e: any) => {
        this.loading = false;
        alert(e.message);
      },
      complete: () => {
        this.loading = false;
        console.log('categories complete');
      },
    });
  }

  // get products by category
  getProductsByCategory(keyword: string) {
    this.loading = true;
    this.productsPervice.getProductsByCategory(keyword).subscribe({
      next: (res: any) => {
        this.products = res;
      },
      error: (err: any) => {
        console.log('Error: %s', err);
        console.log(err.message);
        this.errorMassage = err.message;
        this.loading = false;
      },
      complete: () => {
        console.log('Completed');
        this.loading = false;
      },
    });
  }

  // filter category
  filterCategory(e: any) {
    let selected = e.target.value;
    console.log(selected);
    (selected == 'all')? this.getProducts(): this.getProductsByCategory(selected);
  }

  addToCart(event:any){
    if("cart" in localStorage){
       this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
       let exist = this.cartProducts.find(item=>item.id == event.id);
       if(exist){
        alert("Product is already in your cart");
       } else{
        this.cartProducts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProducts));
       }
    }else{
      this.cartProducts.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
    }
  }
}
