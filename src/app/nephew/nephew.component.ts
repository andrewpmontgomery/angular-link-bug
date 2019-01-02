import { Component } from '@angular/core';

@Component({
  selector: 'app-nephew',
  template: `
    <fieldset>
      <legend>nephew.component.html</legend>
      <p>
        This is the nephew component.<br/>
        7. Parent link from nephew to <a [routerLink]="['..']">['..']</a> (nephew's parent = brother)
      </p>
    </fieldset>
  `
})
export class NephewComponent { }
