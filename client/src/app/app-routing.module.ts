import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login-page/login.component';
import { AppComponent } from './app.component';
import { ApplicationsPageComponent } from './pages/applications-page/applications-page/applications-page.component';
import { ApplicationFormPageComponent } from './pages/application-form-page/application-form-page.component';
import { ApplicationEditComponent } from './components/application-edit/application-edit/application-edit.component';
import { SelectionsPageComponent } from './components/selections-page/selections-page.component';
import { SelectionsAddPageComponent } from './pages/selections-add-page/selections-add-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'applications', component: ApplicationsPageComponent },

  {
    path: 'applicationForm',
    component: ApplicationFormPageComponent,
  },
  {
    path: 'applications/edit/:id',
    component: ApplicationEditComponent,
  },

  { path: 'selections', component: SelectionsPageComponent },

  { path:'addNewSelection',
    component: SelectionsAddPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
