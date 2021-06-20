import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import { AppError } from '../common/app-error';

export class DataService {
  // private headers = new HttpHeaders()
  //   .append("accept", "application/json")
  //   .append("content-Type", "application/json")
  //   .append('Access-Control-Allow-Origin', '*');

  protected httpOptions = {
    headers: new HttpHeaders()
    .append('accept', 'application/json')
    .append('content-Type', 'application/json')
  };
  protected  url = 'http://localhost:51045/api/';

  constructor(
    protected http: HttpClient,
    protected serviceName: string,
    ) {
      this.url = this.url.concat(serviceName);
    }

    getAllPagination(page: number, pageSize: number) {
      return this.http.get(
        this.url + '?page=' + page + '&pageSize=' + pageSize,
        this.httpOptions)
      .pipe(
         map(response => response),
         catchError(this.handleError)
      );
    }

    getAll() {
      return this.http.get(
        this.url, this.httpOptions)
      .pipe(
         map(response => response),
         catchError(this.handleError)
      );
    }

    add(body: any) {
      return this.http.post(this.url, body, this.httpOptions)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
    }

    update(body: any) {
      return this.http.put(this.url + '/' + body.id, body, this.httpOptions )
      .pipe(
        catchError(this.handleError)
      );
    }

    patch(body: any, header: HttpHeaders) {
      return this.http.patch(this.url + '/' + body.id, body, this.httpOptions )
      .pipe(
        catchError(this.handleError)
      );
    }

    delete(body: any) {
      return this.http.delete(this.url + '/' + body.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    }

    get(headers: HttpHeaders) {
      return this.http.get(this.url,{
        headers: headers
        .append('accept', 'application/json')
        .append('content-Type', 'application/json')
      })
      .pipe(
         map(response => response),
         catchError(this.handleError)
      );
    }

    protected handleError(error: Response) {
      if (error.status === 404) {
        return throwError(new NotFoundError(JSON.stringify(error).toString()));
      }
      if (error.status === 400) {
      return throwError(new BadRequestError(JSON.stringify(error).toString()));
      }
      return throwError(new AppError(JSON.stringify(error).toString()));
  }
}
