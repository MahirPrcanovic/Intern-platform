import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login-page/login.component';

import { HeroSectionComponent } from './components/landing-page/hero-section/hero-section/hero-section.component';
import { SelectionSectionComponent } from './components/landing-page/selection-section/selection-section.component';
import { SubscribeSectionComponent } from './components/landing-page/subscribe-section/subscribe-section.component';
import { FooterComponent } from './components/footer/footer/footer.component';
// import { DashboardHeaderComponent } from './components/applications-page/header/dashboard-header/dashboard-header.component';
import { DashboardHeaderComponent } from './components/applications-page/header/dashboard-header/dashboard-header.component';
import { ApplicationsPageComponent } from './pages/applications-page/applications-page/applications-page.component';
import { ApplicationHeroComponent } from './components/applications-page/hero-section/application-hero/application-hero.component';
import { ApplicationFormPageComponent } from './pages/application-form-page/application-form-page.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApplicationEditComponent } from './components/application-edit/application-edit/application-edit.component';
import { SelectionEditPageComponent } from './pages/selection-edit-page/selection-edit-page.component';
import { SelectionsPageComponent } from './components/selections-page/selections-page.component';
import { SelectionsAddPageComponent } from 'src/app/pages/selections-add-page/selections-add-page.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LandingPageComponent,
    HeroSectionComponent,
    SelectionSectionComponent,
    SubscribeSectionComponent,
    FooterComponent,
    ApplicationFormPageComponent,
    DashboardHeaderComponent,
    ApplicationsPageComponent,
    ApplicationHeroComponent,

    ApplicationEditComponent,

    SelectionEditPageComponent,
    SelectionsPageComponent,
    SelectionsAddPageComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
