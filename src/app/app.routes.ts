import { Routes } from '@angular/router';
import { UniversiteComponent } from './universite/universite.component'; // Adjust the path as necessary

export const routes: Routes = [ { path: '', redirectTo: '/universite', pathMatch: 'full' }, // Redirects the root path to 'universite'
    { path: 'universite', component: UniversiteComponent }];
