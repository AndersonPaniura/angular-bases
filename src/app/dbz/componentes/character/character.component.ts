import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-character',
  standalone: true,
  imports: [
    CommonModule, FormsModule
  ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    if ( this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character)

    this.character = { name: '', power: 0 }
  }
}
