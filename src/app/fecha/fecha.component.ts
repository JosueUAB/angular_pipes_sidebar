import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha',
  standalone: true,
  imports: [CommonModule,


  ],
  templateUrl: './fecha.component.html',
  styleUrl: './fecha.component.scss'
})
export class FechaComponent {
  fecha: Date = new Date();
}
