import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ListComponent} from "./views/list/list.component";
import{NewElementComponent}from "./views/new-element/new-element.component";
import{SeeElementComponent}from "./views/see-element/see-element.component";
import{UpdateElementComponent}from "./views/update-element/update-element.component";


const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list',component:ListComponent},
  {path:'new',component:NewElementComponent},
  {path:'see',component:SeeElementComponent},
  {path:'update/:id',component:UpdateElementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ListComponent,
  NewElementComponent,
  SeeElementComponent,
  UpdateElementComponent
]