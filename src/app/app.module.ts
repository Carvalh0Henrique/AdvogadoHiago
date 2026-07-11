import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { AreaActivityComponent } from './Components/area-activity/area-activity.component';
import { BackgroundExperienceComponent } from './Components/background-experience/background-experience.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RevealOnScrollDirective } from './Directives/reveal-on-scroll.directive';
import { BadgeCheck, ChevronLeft, ChevronRight, Handshake, Instagram, LucideAngularModule, UserCheck } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    AreaActivityComponent,
    BackgroundExperienceComponent,
    HomeComponent,
    ContactComponent,
    RevealOnScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ BadgeCheck, ChevronLeft, ChevronRight, Handshake, Instagram, UserCheck })
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
