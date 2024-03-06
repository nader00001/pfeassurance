import { Injectable } from '@angular/core';
import { envirennements } from '../envirennements';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/Utilisateur';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {
  private apiUrlUtilisateur = envirennements.apiUrlUtilisateur;
  constructor( private http : HttpClient , private router : Router) { }

  sendData(value : any): Observable<any>{
    return this.http.post<any>(this.apiUrlUtilisateur , value)
    .pipe(
      catchError((error) => {
        // Gérer l'erreur ici, par exemple :
        console.error('Une erreur s\'est produite:', error);
        return throwError('Une erreur s\'est produite lors de l\'envoi des données.');
      })
    );
  }

  getData(){
    return this.http.get(this.apiUrlUtilisateur );
  }



  getEmaiUtilisateur(Email : any){
    const  url= `${this.apiUrlUtilisateur}/${Email}` ;
    return this.http.get<any>(url)
          .pipe(
            catchError((error)=>{
              console.error("une erreur se produite :" , error);
              return throwError("erreur se produite lors de recupuration de donnees");
            })
          )
  }


  stroreToken(tokenValue : string){
    localStorage.setItem("token" , tokenValue);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  isLoggIn():boolean{
    return !!localStorage.getItem("token");
  }

  signOut()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
    
  }

  
}
