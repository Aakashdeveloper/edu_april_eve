import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    templateUrl:'./product-detail.component.html'
})

export class ProductDetail implements OnInit{
    title="Product Detail"
    id;
    name;
    desc;
    img;

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit():void{
        this.id= +this._route.snapshot.params['id'];

        this._route
            .queryParams
            .subscribe((params)=>{
                this.name = params['name'];
                this.desc = params['desc'];
                this.img = params['image'];
            })
    }

    onBack():void{
        this._router.navigate(['/products'])
    }
}