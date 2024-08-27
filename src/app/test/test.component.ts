import { Component, Input } from '@angular/core';
import { IPokemon } from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  @Input() bulbasaur: IPokemon | undefined;
  constructor() {}

}
