import { Component, OnInit } from '@angular/core';

import { Filmes } from '../filmes';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  constructor(private _filmesService: FilmesService) { }
  public filmes: Filmes[] = [];

  ngOnInit() {
    this._filmesService.getFilmes()
    .subscribe(
      retorno => {
        this.filmes = retorno.map (item => 
          {
            return new Filmes(
              item.nome,
              item.ano,
              item.diretor,
              item.genero,
              item.descricao,
              item.poster
            )
          })
      }
    )
  }

}
