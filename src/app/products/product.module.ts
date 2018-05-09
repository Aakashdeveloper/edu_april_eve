import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { ProductComponent } from "./product.component";
import { PipeUpper } from "./product-upper.pipe";
import { CheckValuePipe } from "./product-check.pipe";
import { ProductDetail } from "./product-details.component";
import { ProductFilter } from "./product-filter.pipe";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";
import { StarComponent } from "../shared/star.component";
import { RouteGaurds } from "./product.gaurds";

@NgModule({
    declarations:[
        ProductComponent,
        PipeUpper,
        CheckValuePipe,
        ProductFilter,
        ProductDetail
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products', component:ProductComponent},
            {path:'products/:id',canActivate:[RouteGaurds], component:ProductDetail},
        ])
    ],
    //Service Come here
    providers:[
        ProductService,
        RouteGaurds
    ]
})

export class ProductModule{}