import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  salvarDados(objetos: object[]){
    localStorage.setItem("dadosForm",JSON.stringify(objetos))
  }
}
