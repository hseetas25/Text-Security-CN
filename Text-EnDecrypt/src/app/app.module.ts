import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, NavigationComponent } from './navigation-components';
import { TextSecurityModule } from './text-security/text-security.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextSecurityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
