import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../services/idioma';
import { Idioma } from '../../interfaces/idioma';

@Component({
  selector: 'app-idiomas',
  standalone: true,
  imports: [],
  templateUrl: './idiomas.html',
  styleUrl: './idiomas.css'
})
export class Idiomas {

  private idiomaService = inject(IdiomaService);

  idiomas: Idioma[] = this.idiomaService.obtenerIdiomas();

}