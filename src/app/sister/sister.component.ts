import { Component } from '@angular/core';

@Component({
  selector: 'app-sister',
  template: `
    <fieldset>
      <legend>sister.component.html</legend>
      <p>
        2. Sibling link from sister to <a [routerLink]="['..', '..', 'brother']">['..', '..', 'brother']</a> - NEVER WORKS<br/>
        3. Parent link from sister to <a [routerLink]="['..']">['..']</a> - nothing happens<br/>
        4. Double-parent link from sister to <a [routerLink]="['..', '..']">['..', '..']</a> - doesn't behave as expected!<br/>
        5. Child link from sister to <a [routerLink]="['niece1']">['niece1']</a> - works fine
      </p>
    </fieldset>
  `
})
export class SisterComponent { }
