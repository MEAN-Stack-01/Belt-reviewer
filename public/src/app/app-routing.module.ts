import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductReviewComponent } from './product-review/product-review.component';



const routes: Routes = [
  { path: 'products-list', component: ProductsListComponent , children :[
    { path: 'new-product', component: NewProductComponent},
    { path: ':id/review', component: EditProductComponent},
    { path: ':id', component : ProductReviewComponent},
    { path: '', pathMatch: 'full', component: ProductHomeComponent}
  ]},
  { path: '', pathMatch: 'full', component: ProductHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
