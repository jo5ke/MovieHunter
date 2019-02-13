import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {DialogModule} from 'primeng/dialog';
import {ChartModule} from 'primeng/chart';

import {SelectButtonModule} from 'primeng/selectbutton';

import { CinemaService } from './services/cinema.service';

import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BasicLayoutComponentComponent } from './components/shared/basic-layout-component/basic-layout-component.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard-service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    NavbarComponent,
    BasicLayoutComponentComponent,
    LoginComponent,
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    //other 
    ToastrModule.forRoot({maxOpened: 1, preventDuplicates: true}),
    // primeNG
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    SelectButtonModule,
    SidebarModule,
    TooltipModule,
    InputTextModule,
    RatingModule,
    DialogModule,
    ChartModule,
  ],
  providers: [CinemaService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
