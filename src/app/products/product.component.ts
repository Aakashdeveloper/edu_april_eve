import {Component} from '@angular/core';
import {IProduct} from './product.model';
import {ProductService} from './product.service'

@Component({
    selector:'prod-comp',
    templateUrl:'./product.component.html',
    //styles:['thead{color:red}','h3{color:green}']
    styleUrls:['./product.component.css']
})

export class ProductComponent{
    title:string="***Product List***";
    showTable:boolean=true;
    showImage=false;
    filterProduct;
    imageWidth=50;
    errorMessage;
    products:IProduct[]

    constructor(private productService:ProductService){

    }

    toggleImage():void{
        this.showImage = !this.showImage
    }

    ngOnInit():void{
        this.productService.getProducts()
            .subscribe((data)=>this.products = data,
                    (err) => this.errorMessage)
    }
    onDataRecive(message:string):void{
        this.title =  "****Product list***"+message
    }
}

/*
A coding patter in which class receives the instance of object it needs 
from extranl source rather than creating  itself*/