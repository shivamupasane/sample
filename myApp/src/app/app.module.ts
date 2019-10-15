import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component'
import { RouterModule } from '@angular/router';
import { GetUserDetailsComponent } from './get-user-details/get-user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    ReactiveFormBuilderComponent,
    GetUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
