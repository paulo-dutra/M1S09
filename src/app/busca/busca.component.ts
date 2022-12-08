import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {

  @Output("retornaTexto") textoBusca: EventEmitter<string> = new EventEmitter();

  texto: string = ""

  enviarTexto() {
    this.textoBusca.emit(this.texto)
  }
}
