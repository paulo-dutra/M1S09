import { Component } from '@angular/core';

@Component({
  selector: 'app-card-personagem',
  templateUrl: './card-personagem.component.html',
  styleUrls: ['./card-personagem.component.css']
})
export class CardPersonagemComponent {

  personagem: any = {
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/6f/JonSnow_08.jpg/220px-JonSnow_08.jpg',
    nome: 'Jon Snow (Game of Thrones)',
    nomeAtor: 'Kit Harington',
    descricao:
      'Jon Snow é um personagem fictício da série de livros de fantasia A Song of Ice and Fire, escrita pelo autor norte-americano George R. R. Martin. Ele também é um dos personagens principais da adaptação televisiva da HBO, Game of Thrones, onde é interpretado pelo ator britânico Kit Harington.'
  };

}