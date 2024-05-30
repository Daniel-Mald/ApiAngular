import { Component } from '@angular/core';
import{Router,ActivatedRoute} from "@angular/router"
import {ProductoModel} from '../../models/producto.interface';
import {ProductoDTO} from '../../models/productoDto.interface';

import{ ApiServiceService} from "../../services/api-service.service"
import{FormGroup, FormControl, Validators, FormsModule} from "@angular/forms"
import { error } from 'console';

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrl: './new-element.component.css'
})
export class NewElementComponent {
  constructor(private activatedRoute:ActivatedRoute,private router:Router , private api:ApiServiceService
  ){}

  datosProducto: ProductoDTO | null = null;
  agregarForm = new FormGroup({
    title: new FormControl(""),
    price: new FormControl(),
    description: new FormControl(""),
    id: new FormControl(),
    categoryId: new FormControl(),
    images: new FormControl(),
    imagenn:new FormControl("")
})

  ngOnInit():void{
    let productId = this.activatedRoute.snapshot.paramMap.get("id");
    //console.log(productId + "hola")
    //let iddd = parseInt(productId,10)
    
    if(productId !== null){

      
        //console.log(this.datosProducto);
        this.agregarForm.setValue({
          "title":"",
          "price": 0,
          "description": "",
          "categoryId":1,
          "id":null,
        "images":[],
      "imagenn":""        });
      }
    }
  
  agregar(){

    if (this.agregarForm.valid) {
      const l = this.agregarForm.value.imagenn;
      const ls = [l,l,l];
      this.agregarForm.value.images = ls;
      this.api.fuckingPosting(this.agregarForm.value).subscribe(response => {

        console.log('Product added successfully', response);
        this.router.navigate(['list']);
      }, error => {
        console.error('Error adding product', error);
      });
    }
  }


  cancelar(){

    
      
        this.router.navigate(['list']);
      
    }
  
}
