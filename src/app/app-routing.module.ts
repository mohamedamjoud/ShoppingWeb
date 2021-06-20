import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CanActivateTeamService } from './Security/can-activate-team.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AdminAuthGuardService } from './security/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'orders',
    component: ManageOrdersComponent,
    canActivate: [CanActivateTeamService, AdminAuthGuardService],

  },
  {
    path: 'admin/products',
    component: ManageProductsComponent,
    // canActivate: [CanActivateTeamService, AdminAuthGuardService],

  },
  {
    path: 'admin/products/new',
    component: ProductFormComponent
  },
  {
    path: 'my',
    component: MyOrdersComponent,
    canActivate: [CanActivateTeamService],

  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
    canActivate: [CanActivateTeamService],
  },
  {
    path: 'login',
    component: AuthenticationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
