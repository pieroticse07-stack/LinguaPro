import { Injectable } from '@angular/core';
import { Promocion } from '../interfaces/promocion';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  private promociones: Promocion[] = [
    {
      id: 1,
      titulo: 'Matrícula 2x1',
      descripcion: 'Inscríbete con un amigo y obtengan un beneficio especial.',
      descuento: 20,
      vigencia: '31 de octubre'
    },
    {
      id: 2,
      titulo: 'Descuento para estudiantes',
      descripcion: 'Obtén un descuento especial presentando tu carnet.',
      descuento: 15,
      vigencia: '30 de noviembre'
    },
    {
      id: 3,
      titulo: 'Curso intensivo',
      descripcion: 'Aprovecha nuestra promoción para cursos intensivos.',
      descuento: 25,
      vigencia: '15 de diciembre'
    }
  ];

  obtenerPromociones(): Promocion[] {
    return this.promociones;
  }
}
