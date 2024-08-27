import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

export interface IPokemon {
  id: number;
  name: string;
  type: string;
  sprite: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test';
  bulbasaur: IPokemon = {
    id: 1,
    name: 'Bulbasaur',
    type: 'grass',
    sprite:
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/323.png',
  };

  pokemons: IPokemon[] = [this.bulbasaur];
  count: number = 5;

  possibleNames = ['Bulbasaur', 'Pika', 'Goomy', 'Seviper', 'Rattata'];
  possibleTypes = ['grass', 'water', 'fire', 'electric', 'fighting'];
  possibleSprites = [
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/323.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/726.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
  ];

  ngOnInit(): void {
    this.pokemons = this.generator(this.count);
    setTimeout(() => {
      console.log(this.generator(this.count))
    }, 100)
    
  }
  generator(count: number): IPokemon[] {
    let res: IPokemon[] = [];
    Array.from({ length: count }).forEach((e, i) => {
      let namesRandomIndex = Math.floor(Math.random() * this.possibleNames.length);
      let typesRandomIndex = Math.floor(Math.random() * this.possibleTypes.length);
      let spritesRandomIndex = Math.floor(Math.random() * this.possibleSprites.length);
      let obj = {id: i, name: this.possibleNames[namesRandomIndex], type: this.possibleTypes[typesRandomIndex], sprite: this.possibleSprites[spritesRandomIndex]}
      res.push(...[], obj)
    })
    return res;
  }


}
