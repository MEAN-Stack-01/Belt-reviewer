import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  all = [];


  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    let observable = this._httpService.getAllStuff();
    observable.subscribe(info => {
      if(info['status']){
        console.log("FULL INFO", info);
        this.all = info['items'];
      }
      else{
        console.log("PRODUCTS INFO ERRORS")
      }
    })

  }

  goHome() {
    this._router.navigate(['/products-list']);
  }

  onDelete(id){
    console.log("IN COMPONENT DELETE")
    let observable = this._httpService.deleteItem(id);
    observable.subscribe(info => {
      if (info['status'] == true){
        console.log("DELETED ITEM ", info);
        this.getAll();
        // this.goHome();
      }else{
        console.log("Cannot find item");
      }
    })

  }

}
