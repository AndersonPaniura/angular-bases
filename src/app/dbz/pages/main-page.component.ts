import { Component, OnInit, input } from '@angular/core';
import { ListComponent2 } from '../componentes/list/list.component';
import { CharacterComponent } from '../componentes/character/character.component';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';
// import { Character } from '../interfaces/character.interface';


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html',
    standalone: true,
    imports: [ListComponent2, CharacterComponent]
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) {}

  get character(): Character[] {
    return [...this.dbzService.character]
  }

  onDeliteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter( character )
  }

}
