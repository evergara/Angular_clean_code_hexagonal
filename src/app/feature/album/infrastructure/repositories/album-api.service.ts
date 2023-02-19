import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumQueryRepository } from '../../domain/repositories/album.qry.repository';
import { Album } from '../../domain/entities/album.model';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumApiService implements AlbumQueryRepository {

  private _url = 'https://jsonplaceholder.typicode.com/albums/';
  
  constructor(private http: HttpClient) {}

  findAll(): Observable<Album[]> {
    return this.http.get<Array<Album>>(this._url);
  }

  findById(id: string): Observable<Album> {
     return this.http.get<Album>(this._url+id).pipe(delay(2000));
  }
}
