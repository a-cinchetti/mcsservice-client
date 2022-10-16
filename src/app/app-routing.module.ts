import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { ContactsComponent } from './pages/contacts/contacts.component';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import { WorksComponent } from './pages/works/works.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule),
  },
  {
    path: 'works',
    component: WorksComponent,
    loadChildren: () => import('./pages/works/works.module').then(m => m.WorksModule)
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
