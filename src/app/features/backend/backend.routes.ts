import { Routes } from "@angular/router";
import { AccountComponent } from './account/account.component'; 
import { UserGuard } from 'src/app/shared/guards/user.guard';


export const BACKEND_ROUTES: Routes = [
  
    { path : 'account', component : AccountComponent, canActivate: [UserGuard] },
   
  ];