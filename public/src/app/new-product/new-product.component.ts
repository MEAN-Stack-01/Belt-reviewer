import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newMovie : any;
  errs = [];
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router)
  {
    this.newMovie = {title:"",name:"",ratings:"",review:""}
  }

  ngOnInit() {
  }

  goHome() {
    this._router.navigate(['/products-list']);
  }

  onSubmit(){
    console.log("IN NEW COMPONENT ONSUBMIT");
    let observable = this._httpService.createNew(this.newMovie);
    observable.subscribe(info => {
      if (info['status'] == true){
        this.goHome();
      }else{
        console.log("ERROR WHEN CREATING NEW OBJECT",info);
        this.errs = info['messages']
        console.log("ERROR WHEN CREATING NEW OBJECT",this.errs);
      }
    })
  }

}
