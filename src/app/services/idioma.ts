import { Injectable } from '@angular/core';
import { Idioma } from '../interfaces/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  private idiomas: Idioma[] = [
    {
      id: 1,
      nombre: 'Inglés',
      nivel: 'Básico - Avanzado',
      duracion: '6 meses',
      modalidad: 'Presencial',
      precio: 180
    },
    {
      id: 2,
      nombre: 'Francés',
      nivel: 'Básico - Avanzado',
      duracion: '6 meses',
      modalidad: 'Virtual',
      precio: 160
    },
    {
      id: 3,
      nombre: 'Portugués',
      nivel: 'Básico - Intermedio',
      duracion: '4 meses',
      modalidad: 'Presencial',
      precio: 150
    }
  ];

  obtenerIdiomas(): Idioma[] {
    return this.idiomas;
  }
}