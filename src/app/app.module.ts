import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component';
import {aakashComponent} from './car.component'
import { ProductComponent } from "./products/product.component";
import { PipeUpper } from "./products/product-upper.pipe";
import { CheckValuePipe } from "./products/product-check.pipe";
import { ProductFilter } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";

@NgModule({
    //Module declare here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    //Component/pipe goes here
    declarations:[
        AppComponent,
        aakashComponent,
        ProductComponent,
        PipeUpper,
        CheckValuePipe,
        ProductFilter,
        StarComponent
    ],
    //only main component
    bootstrap:[ AppComponent ],
    //Service Come here
    providers:[ProductService]
})

export class AppModule{

}