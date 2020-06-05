import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfformsComponent } from './component/tdfforms/tdfforms.component';
import { ReactiveformsComponent } from './component/reactiveforms/reactiveforms.component';
import { ReformswithfbComponent } from './component/reformswithfb/reformswithfb.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import {CheckGuard} from './guard/check.guard';

@NgModule({
  declarations: [
    AppComponent,
    TdfformsComponent,
    ReactiveformsComponent,
    ReformswithfbComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CheckGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
