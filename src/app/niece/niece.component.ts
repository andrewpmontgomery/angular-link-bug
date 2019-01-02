import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-niece',
  template: `
    <fieldset>
      <legend>niece.component.html</legend>
      <p>
        This is the niece component with :id = "{{ id$ | async }}"<br/>
        6. Parent link from niece to <a [routerLink]="['..']">['..']</a> (niece's parent = sister)
      </p>
    </fieldset>
  `
})
export class NieceComponent {

  id$: Observable<string>;
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.id$ = this.activatedRoute.paramMap.pipe(map(pm => pm.get('id')));
  }
}
