import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { ProductDto } from '../dtos/productDto';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService {

  constructor(protected http: HttpClient) {
    super(http, 'product');
  }
  addProduct(product: ProductDto) {
    this.add(product).subscribe((result: ProductDto) => {
    if (result != null) { return true; } else {
    return false;
    }
    });
  }
}
