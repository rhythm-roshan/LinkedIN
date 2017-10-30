import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { FooterComponent } from './footer/footer.component';
import { FooterIComponent } from './footer-i/footer-i.component';
import { FooterIiComponent } from './footer-ii/footer-ii.component';
import { FooterIiiComponent } from './footer-iii/footer-iii.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainbodyComponent,
    FooterComponent,
    FooterIComponent,
    FooterIiComponent,
    FooterIiiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
