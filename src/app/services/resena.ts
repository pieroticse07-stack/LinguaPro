import { Injectable } from '@angular/core';
import { Resena } from '../interfaces/resena';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {

  private resenas: Resena[] = [
    {
      id: 1,
      estudiante: 'Piero Almerco',
      comentario: 'Los profesores explican muy bien y las clases son dinámicas.',
      puntuacion: 5
    },
    {
      id: 2,
      estudiante: 'Lucía Fernández',
      comentario: 'Me gustó mucho la metodología utilizada.',
      puntuacion: 4
    },
    {
      id: 3,
      estudiante: 'Diego Ramírez',
      comentario: 'Las clases virtuales son muy cómodas y completas.',
      puntuacion: 5
    }
  ];

  obtenerResenas(): Resena[] {
    return this.resenas;
  }
}