import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UtilisateurServiceService } from '../services/utilisateur-service.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const auth = inject(UtilisateurServiceService);
  const myToken = auth.getToken();
  const navigate = inject(Router);
  if(myToken){
    req = req.clone({
      setHeaders : {
        Authorization: `Bearer ${myToken}`
      }
    })
  }
  return next(req).pipe(
    catchError((err : any)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          alert("login again");
          navigate.navigate(["login"]);

        }
      }
      return throwError(()=> new Error("same othor error occurad"));
    })
  )
};
