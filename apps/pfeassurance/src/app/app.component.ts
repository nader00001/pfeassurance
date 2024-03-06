import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import {TableauxComponent} from "../../../../libs/src/lib/tableaux/tableaux.component"
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormsComponent} from "../../../../libs/forms/src/lib/forms/forms.component"
import { LoginComponent } from "./admin/login.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { tokenInterceptor } from './intercepters/token.interceptor';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
    standalone: true,
    selector: 'pfeassurance-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        NxWelcomeComponent,
        RouterModule,
        TableauxComponent,
        FormsComponent,
        ButtonModule,
        AutoCompleteModule,
        FormsModule,
        ReactiveFormsModule,
        LoginComponent ,
        RouterLink,
        RouterOutlet    
    ]
})


export class AppComponent {
  title = 'pfeassurance';


  items: any[] | undefined;

  selectedItem: any;

  suggestions: any | undefined;
  

  // tabs = [
  //   { id: 'one', status: 'complete', task: 'build'  },
  //   { id: 'two', status: 'working', task: 'test' },
  //   { id: 'three', status: 'failed', task: 'deploy' }
  // ]  


 
  

  
}
