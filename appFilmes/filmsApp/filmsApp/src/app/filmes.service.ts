import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Filmes } from './filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/FILMES";

  getFilmes(): Observable<Filmes[]> {
    return this._httpClient.get<Filmes[]>(this.url)
  }
}
