import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from '../../../../../libs/forms/src/lib/forms/forms.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../models/Utilisateur';
import { ButtonModule } from 'primeng/button';
import { UtilisateurServiceService } from '../services/utilisateur-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    CommonModule,
    FormsComponent,
    ButtonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [UtilisateurServiceService],
})
export class LoginComponent {
  utilisateur = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      
    ]),
    motDePasse: new FormControl('', [
      
    ]),
  });

  listGetData?: Utilisateur;

  // textt: string | undefined;
  data: any[] = [];
  email = 'email';
  motDePasse = 'Mot de passe';
  Propriete = new FormControl();
  constructor(
    private serviceUtilisateur: UtilisateurServiceService,
    private router: Router
  ) {}

  login() {
    const email = this.utilisateur.get('email')?.value;
    const motDePasse = this.utilisateur.get('motDePasse')?.value;
    this.serviceUtilisateur.getEmaiUtilisateur(email).subscribe(
      (res) => {
        if (res) {
          this.data.push(res.utulisateur);
          if (this.data.length > 0 && motDePasse == this.data[0].motDePasse) {
            this.serviceUtilisateur.stroreToken(res.token);
            console.log(res.token);
            this.router.navigate(['/dashboard']);
          } else if (this.data.length == 0) {
            alert(
              "L'adresse e-mail fournie n'existe pas. Veuillez vérifier votre e-mail puis réessayer."
            );
          } else {
            alert('Veuillez vérifier votre mot de passe puis réessayer.');
          }
        } else {
          alert(
            "L'adresse e-mail fournie n'existe pas. Veuillez vérifier votre e-mail puis réessayer."
          );
        }
      },
      (error) => {
        alert('Erreur de connexion. Veuillez réessayer.');
      }
    );
  }

  giveData() {
    const val = this.serviceUtilisateur.getData();
    val.subscribe(
      (data: any) => {
        console.log(data);
      },
      (erreur) => {
        console.log(erreur);
      }
    );
  }

  navigate() {
    this.router.navigate(['/signup']);
  }
}
