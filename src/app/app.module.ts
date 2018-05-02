import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {aakashComponent} from './car.component'
import { ProductComponent } from "./products/product.component";

@NgModule({
    //Module declare here
    imports:[
        BrowserModule
    ],
    //Component/pipe goes here
    declarations:[
        AppComponent,
        aakashComponent,
        ProductComponent
    ],
    //only main component
    bootstrap:[ AppComponent ]
})

export class AppModule{

}