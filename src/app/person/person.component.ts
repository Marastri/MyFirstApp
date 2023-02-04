import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  name:string = 'Mariel'
  surname:string = 'Veramendi'
  private age:number = 25

  getEdad():number {
    return this.age
  }

}
