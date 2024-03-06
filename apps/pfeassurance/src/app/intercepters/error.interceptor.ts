import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(catchError((err)=>{
    if([401, 403 , 404].includes(err.status)) {
      console.log("Unothorized Request");
      console.log("Notfound");
      router.navigate(["login"]);
    }
    const e = err.error.message || err.statusText ;
    console.log(e);
    return throwError(()=>err);
  }))
};
