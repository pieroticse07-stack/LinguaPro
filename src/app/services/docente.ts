import { Injectable } from '@angular/core';
import { Docente } from '../interfaces/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private docentes: Docente[] = [
    {
      id: 1,
      nombre: 'Ana García',
      especialidad: 'Inglés',
      experiencia: '8 años',
      idioma: 'Inglés',
      imagen: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      nombre: 'Carlos López',
      especialidad: 'Francés',
      experiencia: '6 años',
      idioma: 'Francés',
      imagen: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      nombre: 'María Torres',
      especialidad: 'Portugués',
      experiencia: '7 años',
      idioma: 'Portugués',
      imagen: 'https://randomuser.me/api/portraits/women/65.jpg'
    }
  ];

  obtenerDocentes(): Docente[] {
    return this.docentes;
  }
}