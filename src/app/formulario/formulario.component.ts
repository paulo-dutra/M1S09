import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  listaProfessores = [
    {
      nome: "Otávio",
      numero: 1
    },
    {
      nome: "Vivian",
      numero: 2
    },
    {
      nome: "Leandro",
      numero: 3
    },
    {
      nome: "Cláudia",
      numero: 4
    }
  ]
}
