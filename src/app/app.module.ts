import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { BuilderComponent } from './builder/builder.component';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'builder', component: BuilderComponent}
];

@NgModule({
  imports:      [  NgbModule.forRoot() , BrowserModule , RouterModule.forRoot(appRoutes),
     ReactiveFormsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule,
    BrowserAnimationsModule ],
  declarations: [ AppComponent, HomeComponent, BuilderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
