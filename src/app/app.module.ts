import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {AppComponent} from './app.component';
import {aakashComponent} from './car.component'
import { ProductComponent } from "./products/product.component";
import { PipeUpper } from "./products/product-upper.pipe";
import { CheckValuePipe } from "./products/product-check.pipe";
import { ProductFilter } from "./products/product-filter.pipe";

@NgModule({
    //Module declare here
    imports:[
        BrowserModule,
        FormsModule
    ],
    //Component/pipe goes here
    declarations:[
        AppComponent,
        aakashComponent,
        ProductComponent,
        PipeUpper,
        CheckValuePipe,
        ProductFilter
    ],
    //only main component
    bootstrap:[ AppComponent ]
})

export class AppModule{

}