import { Component } from '@angular/core';
import{Router,ActivatedRoute} from "@angular/router"
//import {ProductoModel} from '../../models/producto.interface';
import {ProductoDTO} from '../../models/productoDto.interface';

import{ ApiServiceService} from "../../services/api-service.service"
import{FormGroup, FormControl, Validators, FormsModule} from "@angular/forms"


@Component({
  selector: 'app-update-element',
  templateUrl: './update-element.component.html',
  styleUrl: './update-element.component.css'
})
export class UpdateElementComponent {
  constructor(private activatedRoute:ActivatedRoute,private router:Router , private api:ApiServiceService
  ){}

  datosProducto: ProductoDTO | null = null; 
  editarForm = new FormGroup({
    title: new FormControl(""),
    price: new FormControl(),
    description: new FormControl(""),
    id: new FormControl(),
    
})

  ngOnInit():void{
    let productId = this.activatedRoute.snapshot.paramMap.get("id");
    //console.log(productId + "hola")
    //let iddd = parseInt(productId,10)
    
    if(productId !== null){

      this.api.fuckingGettingById(parseInt(productId)).subscribe(x=>{
        this.datosProducto = x;
        //console.log(this.datosProducto);
        this.editarForm.setValue({
          "title": this.datosProducto.title,
          "price": this.datosProducto.price,
          "description": this.datosProducto.description,
          "id":this.datosProducto.id
        })
      })
    }
  }
  editar(){

    if (this.editarForm.valid) {
      this.api.fuckingPuting(this.editarForm.value, this.datosProducto?.id).subscribe(response => {

        console.log('Product updated successfully', response);
        this.router.navigate(['list']);
      }, error => {
        console.error('Error updating product', error);
      });
    }
  }


  eliminar(){

    
      this.api.fuckingDeleting(this.datosProducto?.id).subscribe(response => {

        console.log('Product deleted successfully', response);
        this.router.navigate(['list'])
      }
      );
    }
  

}
