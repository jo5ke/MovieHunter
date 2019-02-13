import { Route } from '@angular/router';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { BasicLayoutComponentComponent } from './components/shared/basic-layout-component/basic-layout-component.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard-service';


export const routes: Route[] = [
    {path: '', component: BasicLayoutComponentComponent, 
    children: [
       { path: '', component: MoviesListComponent,  canActivate: [AuthGuardService] },
       { path: 'login', component: LoginComponent }
    ]}
];

