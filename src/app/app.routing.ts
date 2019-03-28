import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {FooterComponent} from "./includes/footer/footer.component";

export const appRoutes: Routes = [
  { path: '', component: MainpageComponent },
  { path : 'header' , component: HeaderComponent},
  { path : 'footer' , component : FooterComponent}



];
export const AppRoutingProvider: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
