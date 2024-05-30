import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';


import{ReactiveFormsModule, FormsModule}from "@angular/forms"
import{HttpClientModule}from "@angular/common/http"
// import { ListComponent } from './views/list/list.component';
// import { NewElementComponent } from './views/new-element/new-element.component';
// import { UpdateElementComponent } from './views/update-element/update-element.component';
// import { SeeElementComponent } from './views/see-element/see-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
    // ListComponent,
    // NewElementComponent,
    // UpdateElementComponent,
    // SeeElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
