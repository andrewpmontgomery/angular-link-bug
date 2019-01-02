import { Component } from '@angular/core';

@Component({
  selector: 'app-brother',
  template: `
    <fieldset>
      <legend>brother.component.html</legend>
      <p>
        1. Sibling link from brother to <a [routerLink]="['../../sister']">['../../sister']</a> - ONLY WORKS IN /my-family, NOT IN /other/animals
      </p>
    </fieldset>
  `
})
export class BrotherComponent { }
