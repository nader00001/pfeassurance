import { CanActivateFn, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UtilisateurServiceService } from '../services/utilisateur-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  
  
  // Injectez le service utilisateur dans la fonction canActivate
  const utilisateurService = inject(UtilisateurServiceService);
  const router = inject(Router);
  if (utilisateurService.isLoggIn()) {
    return true; 
  } else {
    router.navigate(['/login'])
    return false; 
  }
};
