import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { CategoryDto } from '../dtos/CategoryDto';

@Injectable()
export class CategoryService extends DataService {

  constructor(protected http: HttpClient) {
                super(http, 'category');
               }

  getAllCategories(): JSON {
    let categorys: JSON;
    this.getAll().subscribe((response: JSON) => {
      categorys = response;
      console.log(categorys);

    });
    console.log(categorys);
    return categorys;
  }
}
