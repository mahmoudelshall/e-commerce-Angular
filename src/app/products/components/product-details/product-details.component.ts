import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id: number | null | undefined;
  data: any;
  loading:boolean = false;
  errorMassage: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.route.params.subscribe((params) => {
      if ((this.id = params['id'])) {
        console.log('Product Id : ', this.id);
      }
    });
  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.loading = true;
    this.productsService.getProductById(this.id).subscribe({
      next: (res: any) => {
        this.data = res;
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

}
