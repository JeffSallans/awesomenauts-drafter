import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NautPickerComponent } from './naut-picker/naut-picker.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'naut-picker',
    pathMatch: 'full',
  },
  {
    path: 'naut-picker',
    component: NautPickerComponent,
  },
  {
    path: 'user-pref',
    component: UserPreferencesComponent,
  },
  {
    path: '**/*',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
