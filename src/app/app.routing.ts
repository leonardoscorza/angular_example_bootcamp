import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormDetailsComponent } from './forms/form-details/form-details.component';
import { FormListComponent } from './forms/form-list/form-list.component';

import { Angular2TokenService } from 'angular2-token';

// Cria nossas Rotas
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'forms', pathMatch: 'full', component: FormListComponent, canActivate: [Angular2TokenService]},
    { path: 'restricted', pathMatch: 'full', component: FormListComponent, canActivate: [Angular2TokenService]},
    { path: 'forms/:id', pathMatch: 'full', component: FormDetailsComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);