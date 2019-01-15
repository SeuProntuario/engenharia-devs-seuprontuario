import { Component } from '@angular/core';

/**
 * Generated class for the WipComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wip',
  templateUrl: 'wip.html'
})
export class WipComponent {

  text: string;

  constructor() {
    console.log('Hello WipComponent Component');
    this.text = 'Hello World';
  }

}
