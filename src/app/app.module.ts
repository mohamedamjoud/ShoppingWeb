import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanActivateTeamService, Permissions } from './Security/can-activate-team.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { AdminAuthGuardService } from './security/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { PaginationDto } from './dtos/PaginationDto';
import { ProductDto } from './dtos/ProductDto';
import { ProductNameFilterPipe } from './admin/manage-products/productName.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
    NavBarComponent,
    AuthenticationComponent,
    ProductFormComponent,
    ProductNameFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CanActivateTeamService,
    Permissions,
    AuthenticationService,
    AdminAuthGuardService,
    CategoryService,
    ProductService
    ],
  bootstrap: [
     AppComponent
  ]
})
export class AppModule { }
