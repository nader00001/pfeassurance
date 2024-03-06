import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateurServiceService } from '../services/utilisateur-service.service';
import { ApiService } from '../services/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { tokenInterceptor } from '../intercepters/token.interceptor';

@Component({
  selector: 'pfeassurance-dashbord-compagnie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashbordCompagnie.component.html',
  styleUrl: './dashbordCompagnie.component.css',
  providers:[
    ApiService,
    { 
      provide : HTTP_INTERCEPTORS,
      useExisting: tokenInterceptor,
      multi: true,
      
    }
  
  ]
})
export class DashbordCompagnieComponent {
public users : any =[];
  constructor(private utilisateurService : UtilisateurServiceService , private api : ApiService) {
  }

  logout(){
    this.utilisateurService.signOut();
  }
  ngOnInit(){
    this.api.getUsers().subscribe((data)=>{this.users=data});
  
  }
}
