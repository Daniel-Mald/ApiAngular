import { Injectable } from '@angular/core';
import{responseModel} from "../models/response.interface";
import{HttpClient,HttpHeaders}from "@angular/common/http";
import{ListModel} from "../models/llist.interface";
import{ProductoModel} from "../models/producto.interface";

import{Observable} from "rxjs";
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url:string  = "https://api.escuelajs.co/api/v1/";
  defaultImageUrl: string = "../assets/notFound.png";
  constructor(private http:HttpClient) { }
  fuckingGeting():Observable<ListModel>{
    let _direccion = this.url + "products";
    let varr= this.http.get<ListModel>(_direccion);
    return varr;    
  }
  fuckingDeleting(idd:number){
    let _direccion = this.url +"products/" + idd;
    let response = this.http.delete<responseModel>(_direccion);
    return response;
  }

  fuckingPosting( data:any){
    let _direccion = this.url +"products/";
    let response = this.http.post<responseModel>(_direccion,data);
    return response;
  }
  fuckingPuting( data:any, id:number){
    let _direccion = this.url +"products/" + id;
    let response = this.http.put<responseModel>(_direccion,data);
    return response;
  }
  fuckingGettingById(idd:number):Observable<ProductoModel>{
    let _direccion = this.url +"products/" + idd;
    let response = this.http.get<ProductoModel>(_direccion);
    return response;
  }

}


