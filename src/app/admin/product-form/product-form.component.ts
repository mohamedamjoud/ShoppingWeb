import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryDto } from 'src/app/dtos/CategoryDto';
import { ProductDto } from 'src/app/dtos/ProductDto';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
    ) {
    }
    private categorys: [CategoryDto];
    private message: string;

  ngOnInit() {
    this.categoryService.getAll()
    .subscribe((response: [CategoryDto]) => {
      this.categorys = response;
    });


  }
  onSubmit(f: NgForm) {

    if (f.valid && this.categorys.some(c => c.id === f.value.category)) {
      this.productService.add(f.value)
      .subscribe((response: ProductDto) => {
        if (response != null) {
          f.reset();
          this.message = 'Product add with success';
          window.alert(this.message);
        } else {
          this.message = 'Problem ouccured';
          window.alert(this.message);

        }
      });
    } else {
      this.message = 'Form invalid';
      window.alert(this.message);

    }
  }

}
