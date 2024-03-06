import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilisateurServiceService } from '../services/utilisateur-service.service';
import { FormsComponent } from '../../../../../libs/forms/src/lib/forms/forms.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur';
@Component({
  selector: 'pfeassurance-sigup',
  standalone: true,
  templateUrl: './sigup.component.html',
  styleUrl: './sigup.component.css',
  imports: [
    CommonModule,
    FormsComponent,
    HttpClientModule,
    ButtonModule,
    RouterModule,
  ],
  providers: [UtilisateurServiceService],
})
export class SigupComponent {
  utilisateur: Utilisateur | any = new FormGroup({
    Nom: new FormControl('', [Validators.required]),
    Prenom: new FormControl('', [Validators.required]),
    Adresse: new FormControl('', [Validators.required]),
    Telephone: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.email]),
    MotDePasse: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  data: any[] = [];

  nom = 'nom';
  prenom = 'prenom';
  adresse = 'adresse';
  telephone = 'telephone';
  email = 'email';
  motDePasse = 'motDePasse';
  propriete = new FormControl();

  constructor(
    private serviceUtilisateur: UtilisateurServiceService,
    private router: Router
  ) {}
  /////////// envoyer data to data base ()
  envoyeData() {
    const userData = this.utilisateur.value;
    console.log(userData);
    this.serviceUtilisateur.sendData(userData).subscribe(
      (res) => {
        alert('donnes envoyer avec succes');
        window.location.reload();
      },
      (error) => {
        console.error(error);
        alert('Erreur de connexion ');
      }
    );
  }
  // signup if  the user already exist show a message else redirect to login page
  signUp() {
    let utili = this.utilisateur.get('Email')?.value;
    this.serviceUtilisateur.getEmaiUtilisateur(utili).subscribe(
      (res) => {
        if (res) {
          this.data.push(res);
          console.log(this.data);
          alert('le compte mail existe deja !');
        } else {
          this.envoyeData();
          this.router.navigate(['/login']);
          console.log('envoyee avec succes!');
        }
      },
      (error) => {
        console.error('Erreur :', error);
        alert('Erreur de connexion. Veuillez réessayer.');
      }
    );
  }
}
