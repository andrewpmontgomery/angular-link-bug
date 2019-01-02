import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrotherComponent } from './brother/brother.component';
import { SisterComponent } from './sister/sister.component';
import { NephewComponent } from './nephew/nephew.component';
import { NieceComponent } from './niece/niece.component';

import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrotherComponent,
    SisterComponent,
	NephewComponent,
	NieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
