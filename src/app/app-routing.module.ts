import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ConceptsComponent } from './pages/concepts/concepts.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'quienes-somos', component: AboutUsComponent},
  { path: 'conceptual', component: ConceptsComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
