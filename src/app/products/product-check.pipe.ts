import {Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:"checkValue"
})

export class CheckValuePipe implements PipeTransform{
    transform(value:number):number{
        if(value<20){
            value= value+10
        }

        return value
    }
}