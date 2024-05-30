  import { Component, OnInit } from '@angular/core';
  import{ FormGroup,FormControl,Validators}from "@angular/forms";
  import{ApiServiceService} from "../../services/api-service.service"
  import{ListModel} from "../../models/llist.interface";
  import {Router} from "@angular/router";
  @Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
  })
  export class ListComponent implements OnInit{
  objeto: any;

    constructor(private api:ApiServiceService , private _router:Router){}
    Elementos:ListModel[] = [];
    defaultImageUrl: string = "../assets/notFound.png"; 

      ngOnInit(): void {
        this.api.fuckingGeting().subscribe(data => {
          if (Array.isArray(data)) {
            this.Elementos = data;
          }
        });
        }


    seeProduct(id:number){
      this._router.navigate(["update",id])
    }
    newProduct(){
      this._router.navigate(["new"]);
    }

  }
