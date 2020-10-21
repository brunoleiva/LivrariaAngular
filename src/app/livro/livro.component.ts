import { Component, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  @Output() livroAdicionado = new EventEmitter();

  id_livro: Int16Array;
  titulo_livro: string;
  autor_livro: string;
  numero_paginas: Int16Array;
  

    constructor()

  constructor() { }

  ngOnInit(): void {
  }

  onAdicionarLivro() {
    const livro = {
      id_livro: this.id_livro,
      titulo_livro: this.titulo_livro,
      autor_livro: this.autor_livro,
      numero_paginas: this.numero_paginas,
      };
      this.livroAdicionado.emit(livro);

    console.log('inserindo livro...');
    }

}
