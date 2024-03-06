import { Route, Routes } from '@angular/router';
import { LoginComponent } from './admin/login.component';
import { SigupComponent } from './admin/sigup.component';
import { DashbordCompagnieComponent } from './dashboard/dashbordCompagnie.component';
import { authGuard } from './gards/auth.guard';

export const appRoutes: Routes = [
    
    {path : 'login' , component : LoginComponent},
    {path : 'signup' , component : SigupComponent},
   
    {path : 'dashboard' , component: DashbordCompagnieComponent , canActivate:[authGuard]} ,

   
    

   
    
];
