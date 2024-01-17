import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { StateComponent } from './state/state.component';
import { CountryISOComponent } from './country-iso/country-iso.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'state', component: StateComponent },
  { path: 'CountryIso', component: CountryISOComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
