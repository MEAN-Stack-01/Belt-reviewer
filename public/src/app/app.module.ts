import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductReviewComponent } from './product-review/product-review.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NewProductComponent,
    EditProductComponent,
    ProductHomeComponent,
    ProductReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
