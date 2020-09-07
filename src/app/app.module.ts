import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainTimetrackComponent } from './main-timetrack/main-timetrack.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { ReportsItemComponent } from './reports/reports-item/reports-item.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '',  redirectTo:'/homepage', pathMatch:'full'},
  { path: 'homepage', component: MainTimetrackComponent},
  {path: 'login', component:SignInComponent},
  {path:'reports', component:ReportsComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainTimetrackComponent,
    SignInComponent,
    ReportsComponent,
    ReportsItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
