import { Injectable } from '@angular/core';
import { Registro } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private registros: Registro[] = [];

  obtenerRegistros(): Registro[] {
    return this.registros;
  }

  agregarRegistro(registro: Registro): void {
    this.registros.push(registro);
  }
}