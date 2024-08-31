import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ConceptsComponent } from './pages/concepts/concepts.component';
import { SourcesInformationComponent } from './pages/sources-information/sources-information.component';
import { CharacterizationComponent } from './pages/characterization/characterization.component';
import { LaboratoryResultsComponent } from './pages/laboratory-results/laboratory-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    ConceptsComponent,
    SourcesInformationComponent,
    CharacterizationComponent,
    LaboratoryResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
