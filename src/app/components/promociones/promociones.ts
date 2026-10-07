import { Component, inject } from '@angular/core';
import { PromocionService } from '../../services/promocion';
import { Promocion } from '../../interfaces/promocion';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [],
  templateUrl: './promociones.html',
  styleUrl: './promociones.css'
})
export class Promociones {

  private promocionService = inject(PromocionService);

  promociones: Promocion[] =
    this.promocionService.obtenerPromociones();

}