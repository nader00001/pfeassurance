import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tableaux',
  standalone: true,
  imports: [CommonModule ,
    TableModule
   ],
  templateUrl: './tableaux.component.html',
  styleUrl: './tableaux.component.css',
})
export class TableauxComponent {


  @Input() tabs!: any ;
 


        
    } 

