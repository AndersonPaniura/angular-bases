import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-herores-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = "iroman"
  public age: number = 45

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero():void {
    this.name ="Spiderman"
  }

  changeAge():void{
    this.age = 25
  }

  resetV():void{
    this.name = "iroman"
    this.age = 45
  }



}
