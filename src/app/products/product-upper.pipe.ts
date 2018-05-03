import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:"EduUpper"
})

export class PipeUpper implements PipeTransform{
    transform(value:string,sale:string):string{
        if(sale==="uppercase"){
            value = value.toUpperCase()
        }
        else{
            value = value.toLowerCase()
        }
        return value;
    }
}

/*
indexOf
filterBy

function add(a,b){
    return a+b
}

var add = (a,b) => {return a+b}
(function add(a,b){
    return a+b
})()

*/
