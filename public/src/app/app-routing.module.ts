import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductHomeComponent } from './product-home/product-home.component';


const routes: Routes = [
  { path: 'products-list', component: ProductsListComponent , children :[
    { path: 'new-product', component: NewProductComponent},
    { path: 'edit/:id', component: EditProductComponent},
    { path: '', pathMatch: 'full', component: ProductHomeComponent}
  ]
  },
  { path: '', pathMatch: 'full',component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
