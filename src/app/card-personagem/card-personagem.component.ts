import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-personagem',
  templateUrl: './card-personagem.component.html',
  styleUrls: ['./card-personagem.component.css']
})
export class CardPersonagemComponent {

  @Input('infoCard') personagem: any 
  
}