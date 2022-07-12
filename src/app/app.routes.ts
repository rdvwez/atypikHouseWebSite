import { Routes } from "@angular/router";
import { UserGuard } from 'src/app/shared/guards/user.guard';
import { HomeComponent } from "./features/frontend/home/home.component";


export const APP_ROUTES: Routes = [
  
     { path : '', component : HomeComponent },
   
  ];