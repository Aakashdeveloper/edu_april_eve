import {Component} from '@angular/core';

@Component({
    selector:'app-comp',
    template:`
        <div>
            <h1>THis is angular</h1>
            <prod-comp></prod-comp>
            <car-comp></car-comp>
        </div>`
})

export class AppComponent{
}
/*
string =""
number  = 89
boolean = true/false

One Way Binding
--Data Binding{{}}
--Event Binding()
--Property Binding[]
Two Way Binding[()]
*/
