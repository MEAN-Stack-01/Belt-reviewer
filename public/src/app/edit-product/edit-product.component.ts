import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editItem : any;
  errors = [];
  selectedId : any;

  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router)
  {
    this.editItem = {title:"",price:"",url:""}
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        console.log("SELECTED ID",params['id'])
        this.selectedId = params['id'];
        this.getSelected(this.selectedId);
    });

  }

  getSelected(id){
    console.log("SELECTED ID 2",id);
    let observable = this._httpService.findItem(id);
    observable.subscribe(info => {
      if (info['status'] == true){
        console.log("Found ITEM INFO", info);
        this.editItem = info['item'];
      }else{
        console.log("Cannot find item");
        this.errors = info['messages']
      }
    })
  }

  goHome() {
    this._router.navigate(['/products-list']);
  }

  onSubmit(){
    console.log("IN COMPONENT EDIT")
    let observable = this._httpService.updateItem(this.editItem);
    observable.subscribe(info => {
      if (info['status'] == true){
        console.log("updated ITEM INFO", info);
        this.editItem = info['item']
        this.goHome();
      }else{
        this.errors = info['messages']
        console.log("ERROR WHEN Updating ITEM",this.errors);
      }
    })
  }



}
