import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ["Spiderman", "Iroman", "Hulk", "She Hulk", "Thor"]
  public deletedHero?: string

  removeLastHero():void
{
  this.deletedHero = this.heroNames.pop()
}

resetLH(): void {
  this.heroNames = ["Spiderman", "Iroman", "Hulk", "She Hulk", "Thor"]
}

}
