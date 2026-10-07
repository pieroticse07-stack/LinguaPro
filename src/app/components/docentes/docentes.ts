import { Component, inject } from '@angular/core';
import { DocenteService } from '../../services/docente';
import { Docente } from '../../interfaces/docente';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [],
  templateUrl: './docentes.html',
  styleUrl: './docentes.css'
})
export class Docentes {

  private docenteService = inject(DocenteService);

  docentes: Docente[] = this.docenteService.obtenerDocentes();

}