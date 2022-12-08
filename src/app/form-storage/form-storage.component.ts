import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-form-storage',
  templateUrl: './form-storage.component.html',
  styleUrls: ['./form-storage.component.css']
})
export class FormStorageComponent {

  constructor(private general: GeneralService) { }

  dados: object[] = []

  formEnviado (evento: any){
    evento.preventDefault()
    const acesso = evento.target
    const dado: object = {
      email: acesso.email.value,
      senha: acesso.senha.value
    }
    evento.target.reset()
    this.dados.push(dado)
    this.general.salvarDados(this.dados)
  }
}
