import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <fieldset>
      <legend>home.component.html</legend>
      <nav>
        <ul>
	      <li><a [routerLink]="['.']" routerLinkActive="active">Home</a> (redirects to ./brother)
	        <ul>
              <li><a [routerLink]="['brother']" routerLinkActive="active">Brother</a> (default)
			    <ul>
                  <li><a [routerLink]="['brother', 'nephew']" routerLinkActive="active">Nephew</a>
				</ul>
			  </li>
              <li><a [routerLink]="['sister']"  routerLinkActive="active">Sister</a>
			    <ul>
                  <li><a [routerLink]="['sister', 'niece1']" routerLinkActive="active">Niece #1</a>
                  <li><a [routerLink]="['sister', 'niece2']" routerLinkActive="active">Niece #2</a>
                  <li><a [routerLink]="['sister', 'niece3']" routerLinkActive="active">Niece #3</a>
				</ul>
			  </li>
	        </ul>
          </li>
	    </ul>
      </nav>
      <router-outlet></router-outlet>
    </fieldset>
  `
})
export class HomeComponent { }
