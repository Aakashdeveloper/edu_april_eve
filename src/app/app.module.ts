import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./orders/order.component";
import { NotFoundComponent } from "./shared/notFound.component";
import { ProductModule } from "./products/product.module";

@NgModule({
    //Module declare here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        RouterModule.forRoot([
            {path:'order', component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:NotFoundComponent}
        ])
    ],
    //Component/pipe goes here
    declarations:[
        AppComponent,
        HomeComponent,
        OrderComponent,
        NotFoundComponent
    ],
    //only main component
    bootstrap:[ AppComponent ]
})

export class AppModule{

}