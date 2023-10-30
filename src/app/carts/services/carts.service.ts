import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _http:HttpClient) { }

  newCart(model:any){
    return this._http.post(environment.apiEndpoint+'carts', model);
  }
}
