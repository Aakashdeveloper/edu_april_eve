import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {aakashComponent} from './car.component'
import { ProductComponent } from "./products/product.component";
import { PipeUpper } from "./products/product-upper.pipe";
import { CheckValuePipe } from "./products/product-check.pipe";
import { ProductFilter } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { HomeComponent } from "./home/home.component";
import { ProductDetail } from "./products/product-details.component";
import { OrderComponent } from "./orders/order.component";
import { NotFoundComponent } from "./shared/notFound.component";

@NgModule({
    //Module declare here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            
            {path:'products', component:ProductComponent},
            {path:'products/:id',component:ProductDetail},
            {path:'order', component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:NotFoundComponent}
            
            
        ])
    ],
    //Component/pipe goes here
    declarations:[
        AppComponent,
        aakashComponent,
        ProductComponent,
        PipeUpper,
        CheckValuePipe,
        ProductFilter,
        StarComponent,
        HomeComponent,
        ProductDetail,
        OrderComponent,
        NotFoundComponent
    ],
    //only main component
    bootstrap:[ AppComponent ],
    //Service Come here
    providers:[ProductService]
})

export class AppModule{

}