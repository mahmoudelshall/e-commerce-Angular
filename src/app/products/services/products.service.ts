import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

  getAllProducts(){
    return this._http.get(environment.apiEndpoint+'products');
  }
  getProductsByCategory(keyword:string){
    return this._http.get(environment.apiEndpoint+'products/category/'+keyword);
  }
  getProductById(id:any){
    return this._http.get(environment.apiEndpoint+'products/'+id);
  }
}
