import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ConceptsComponent } from './pages/concepts/concepts.component';
import { SourcesInformationComponent } from './pages/sources-information/sources-information.component';
import { CharacterizationComponent } from './pages/characterization/characterization.component';
import { LaboratoryResultsComponent } from './pages/laboratory-results/laboratory-results.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'quienes-somos', component: AboutUsComponent},
  { path: 'conceptual', component: ConceptsComponent},
  { path: 'fuentes', component: SourcesInformationComponent},
  { path: 'caracterizacion', component: CharacterizationComponent},
  { path: 'resultados', component: LaboratoryResultsComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
