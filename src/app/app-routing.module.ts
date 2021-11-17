import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './views/components/clients/client-form/client-form.component';
import { SearchFormComponent } from './views/components/search/search-form/search-form.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientFormComponent
  },
  {
    path: 'search',
    component: SearchFormComponent
  },
  {
    path: '',
    redirectTo: "/clients",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
