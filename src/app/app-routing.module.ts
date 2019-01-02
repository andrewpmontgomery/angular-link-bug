import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrotherComponent } from './brother/brother.component';
import { SisterComponent } from './sister/sister.component';
import { NephewComponent } from './nephew/nephew.component';
import { NieceComponent } from './niece/niece.component';

const routes: Routes = [
  { path: '', redirectTo: 'my-family', pathMatch: 'full' },
  { path: 'my-family', component: HomeComponent, children: [
    { path: '', redirectTo: 'brother', pathMatch: 'full' },
    { path: 'brother', children: [
      { path: '', component: BrotherComponent },
      { path: 'nephew', component: NephewComponent }
    ]},
    { path: 'sister', children: [
      { path: '', component: SisterComponent },
      { path: ':id', component: NieceComponent }
    ]}
  ]},
  // the routes under "my-family" are exactly the same as those under "other/animals"
  { path: 'other', children: [
    { path: 'animals', component: HomeComponent, children: [
      { path: '', redirectTo: 'brother', pathMatch: 'full' },
      { path: 'brother', children: [
        { path: '', component: BrotherComponent },
        { path: 'nephew', component: NephewComponent }
      ]},
      { path: 'sister', children: [
        { path: '', component: SisterComponent },
        { path: ':id', component: NieceComponent }
      ]}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
