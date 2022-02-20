import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComplaintComponent } from './components/create-complaint/create-complaint.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { AddComplaintFormComponent } from './components/add-complaint-form/add-complaint-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComplaintComponent,
    DashboardComponent,
    HeaderComponent,
    FeaturesComponent,
    FooterComponent,
    AddComplaintFormComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
