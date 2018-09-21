import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  selectedMovie : any;
  selectedId : any;
  errors = [];

  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router)
  {
    this.selectedMovie = {title:"",name:"",rating:"",review:""}
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        console.log("SELECTED ID",params['id'])
        this.selectedId = params['id'];
        this.getSelected(this.selectedId);
    });
  }

  goHome() {
    this._router.navigate(['/products-list']);
  }

  getSelected(id){
    console.log("SELECTED ID 2",id);
    let observable = this._httpService.findItem(id);
    observable.subscribe(info => {
      if (info['status'] == true){
        console.log("Found ITEM INFO", info);
        this.selectedMovie = info['item'];
      }else{
        console.log("Cannot find item");
        this.errors = info['messages']
      }
    })
  }

  onDelete(id){
    console.log("IN COMPONENT DELETE")
    let observable = this._httpService.deleteItem(id);
    observable.subscribe(info => {
      if (info['status'] == true){
        console.log("DELETED ITEM ", info);
        // this.getAll();
        this.goHome();
      }else{
        console.log("Cannot find item");
      }
    })

  }

  onReviewDelete(id){
    console.log("IN COMPONENT DELETE",id)
    let observable = this._httpService.delReview(id);
    observable.subscribe(info => {
      if (info['status'] == true){
        console.log("DELETED Review ", info);
        // this.getAll();
        this.goHome();
      }else{
        console.log("Cannot find item");
      }
    })

  }

}
