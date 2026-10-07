import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Registro } from '../../interfaces/registro';
import { FormularioService } from '../../services/formulario';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  private formularioService = inject(FormularioService);

  nombre = signal('');
  correo = signal('');
  telefono = signal('');
  idioma = signal('');

  registros = signal<Registro[]>(
    this.formularioService.obtenerRegistros()
  );

  mensaje = signal('');

  mostrarAlerta = signal(false);

  registrar(): void {

    if (
      !this.nombre() ||
      !this.correo() ||
      !this.telefono() ||
      !this.idioma()
    ) {

      this.mensaje.set(
        'Complete todos los campos del formulario.'
      );

      this.mostrarAlerta.set(true);

      return;
    }

    const nuevoRegistro: Registro = {

      id: Date.now(),

      nombre: this.nombre(),

      correo: this.correo(),

      telefono: this.telefono(),

      idioma: this.idioma()

    };

    this.formularioService.agregarRegistro(
      nuevoRegistro
    );

    this.registros.set([
      ...this.formularioService.obtenerRegistros()
    ]);

    this.mensaje.set(
      '¡Registro realizado correctamente!'
    );

    this.mostrarAlerta.set(true);

    this.limpiarFormulario();
  }

  limpiarFormulario(): void {

    this.nombre.set('');
    this.correo.set('');
    this.telefono.set('');
    this.idioma.set('');

  }

  cerrarAlerta(): void {

    this.mostrarAlerta.set(false);

  }

}