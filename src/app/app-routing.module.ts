import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CreateComplaintComponent} from "./components/create-complaint/create-complaint.component";
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {Layouts} from "./app.component";

const routes: Routes = [
  {path: '', component: HomeComponent, data: {layout: Layouts.Default}},
  {path: 'dashboard', component: DashboardComponent, data: {layout: Layouts.Main, isCreate: false}},
  {path: 'create', component: CreateComplaintComponent, data: {layout: Layouts.Main, isCreate: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
