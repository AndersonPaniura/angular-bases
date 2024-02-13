import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}} </h3>


  <BUtton (click)="increaseBy(+1)">+1</BUtton>
  <BUtton (click)="resetBy()">Reset</BUtton>
  <BUtton (click)="increaseBy(-1)">-1</BUtton>
  `,
  standalone: true
})


export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter:  number = 10;

  increaseBy(value: number):void {
    this.counter +=value;
  }

  resetBy():void{
    this.counter = 10;
  }
}
