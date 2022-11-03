import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeroSectionComponent } from './components/landing-page/hero-section/hero-section/hero-section.component';
import { SelectionSectionComponent } from './components/landing-page/selection-section/selection-section.component';
import { SubscribeSectionComponent } from './components/landing-page/subscribe-section/subscribe-section.component';
import { FooterComponent } from './components/footer/footer/footer.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, LandingPageComponent, HeroSectionComponent, SelectionSectionComponent, SubscribeSectionComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
