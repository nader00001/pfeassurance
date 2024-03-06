import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envirennements } from '../envirennements';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = envirennements.apiUrlUtilisateur;

  constructor(private  httpClient: HttpClient) { }
  getUsers(){
    return this.httpClient.get<any>(this.http);
  }
}
