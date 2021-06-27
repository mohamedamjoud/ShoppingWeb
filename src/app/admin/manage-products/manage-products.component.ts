import { Component, OnInit } from '@angular/core';
import { PaginationDto } from 'src/app/dtos/PaginationDto';
import { ProductDtoPagination } from 'src/app/dtos/ProductDto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  private productsPagination: PaginationDto<ProductDtoPagination>;
  private searchName : string = "";
  constructor(private productService: ProductService) {
    this.productsPagination = new PaginationDto<ProductDtoPagination>();
  }
  ngOnInit() {
    this.getProducts(this.productsPagination.currentPage, this.productsPagination.pageSize);
  }

  getNextPage() {
    if (this.productsPagination.currentPage < this.productsPagination.lastPage) {
      this.productsPagination.currentPage++
      this.getProducts(this.productsPagination.currentPage, this.productsPagination.pageSize);
    }
  }
  getPreviousPage() {
    if (this.productsPagination.currentPage > 1) {
      this.productsPagination.currentPage--
      this.getProducts(this.productsPagination.currentPage, this.productsPagination.pageSize);
    }
  }
  getFirstPage() {
    if (this.productsPagination.currentPage !== 1) {
      this.getProducts(1, this.productsPagination.pageSize);
    }
  }
  getLastPage() {
    if (this.productsPagination.currentPage !== this.productsPagination.lastPage) {
      this.getProducts(this.productsPagination.lastPage, this.productsPagination.pageSize);
    }
  }
  getProducts(page: number, pageSize: number) {
    this.productService.getAllPagination(page, pageSize)
      .subscribe((response: PaginationDto<ProductDtoPagination>) => {
      this.productsPagination = response;
    });
  }

  delete(id : number) {
    this.productService.delete(id).subscribe((response : any) => {
      console.log(response);
      
      this.getProducts(this.productsPagination.currentPage, this.productsPagination.pageSize);
    });

  }


}
