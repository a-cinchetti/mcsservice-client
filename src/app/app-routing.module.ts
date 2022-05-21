import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./pages/homepage/homepage.component";


const routes: Routes = [
  { path: '',
    component: HomepageComponent,
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
