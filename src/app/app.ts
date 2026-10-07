import { Component } from '@angular/core';

import { Inicio } from './components/inicio/inicio';
import { Idiomas } from './components/idiomas/idiomas';
import { Docentes } from './components/docentes/docentes';
import { Resenas } from './components/resenas/resenas';
import { Promociones } from './components/promociones/promociones';
import { Institucional } from './components/institucional/institucional';
import { Formulario } from './components/formulario/formulario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Inicio,
    Idiomas,
    Docentes,
    Resenas,
    Promociones,
    Institucional,
    Formulario
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}