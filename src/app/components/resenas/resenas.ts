import { Component, inject } from '@angular/core';
import { ResenaService } from '../../services/resena';
import { Resena } from '../../interfaces/resena';

@Component({
  selector: 'app-resenas',
  standalone: true,
  imports: [],
  templateUrl: './resenas.html',
  styleUrl: './resenas.css'
})
export class Resenas {

  private resenaService = inject(ResenaService);

  resenas: Resena[] = this.resenaService.obtenerResenas();

}