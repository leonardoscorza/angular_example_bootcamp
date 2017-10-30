import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormDetailsComponent } from './forms/form-details/form-details.component';
import { FormListComponent } from './forms/form-list/form-list.component';

import { User } from './shared/user';
import { Form } from './shared/form';
import { Question } from './shared/question';

import { FormsService } from './shared/forms.service';
import { HttpModule } from '@angular/http';

import { Angular2TokenService, A2tUiModule } from 'angular2-token';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormDetailsComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    A2tUiModule
  ],
  providers: [FormsService, Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }