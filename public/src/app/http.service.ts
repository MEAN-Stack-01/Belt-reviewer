import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createNew(newMovie){
    console.log("IN CREATE METHOD - SERVICE");
    return this._http.post('/items/create',newMovie);
  }

  getAllStuff(){
    console.log("IN GET ALL METHOD - SERVICE");
    return this._http.get('/items/all');
  }

  findItem(id){
    console.log("IN SERVICE",id)
    return this._http.get('/items/show/'+ id);
  }

  createNewReview(newReview,id){
    console.log("IN SERVICE REVIEW CREATE",id)
    return this._http.post('/items/newRev/'+id,newReview);
  }

  updateItem(item){
    console.log("IN SERVICE EDIT")
    return this._http.put('/items/update/'+item._id,item);
  }

  deleteItem(id){
    console.log("IN SERVICE DELETE")
    return this._http.delete('/items/delete/'+id);
  }

  delReview(id){
    console.log("IN SERVICE DELETE REVIEW",id)
    return this._http.delete('/items/review/delete/'+id);
  }

}
