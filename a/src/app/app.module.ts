import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChcolateComponent } from './comps/chcolate/chcolate.component';
import { IceCreamComponent } from './comps/ice-cream/ice-cream.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { JsonAppUserComponent } from './comps/json-app-user/json-app-user.component';
import { LoginComponent } from './comps/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ChcolateComponent,
    IceCreamComponent,
    DataTitleComponent,
    JsonAppUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
