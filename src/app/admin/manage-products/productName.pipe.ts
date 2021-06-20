import { Pipe, PipeTransform } from '@angular/core';
import { ProductDtoPagination } from 'src/app/dtos/ProductDto';

@Pipe({ name: 'productNameFilter' })
export class ProductNameFilterPipe implements PipeTransform {
  transform(productDto: ProductDtoPagination[], searchName : string) : ProductDtoPagination[] {
    return productDto.filter(product => product.title.includes(searchName));
  }
}