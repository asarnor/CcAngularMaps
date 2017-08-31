import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';

import {CustomizeService} from "./services/customize.service";
import { appRoutes } from '../routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import {AgmCoreModule} from '@agm/core';
import { DirectionsDirective } from './directions.directive';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DirectionsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_KEY,
      libraries: ["places"]
    })
  ],
  providers: [CustomizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
