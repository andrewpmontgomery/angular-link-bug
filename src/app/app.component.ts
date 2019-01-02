import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <fieldset>
      <legend>app.component.html</legend>
      <nav>
        <ul>
          <li><a [routerLink]="['my-family'    ]" routerLinkActive="active">/my-family</a> (default)</li>
          <li>other
            <ul>
              <li><a [routerLink]="['other/animals']" routerLinkActive="active">/other/animals</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
    </fieldset>
  `
})
export class AppComponent { }
