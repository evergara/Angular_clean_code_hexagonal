import { Album } from '../domain/entities/album.model';
import { AlbumQueryRepository } from '../domain/repositories/album.qry.repository';
import { Observable } from 'rxjs';
import { Id } from '../../../core/types/id.type';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class FindByIdAlbumQRYUsesCase{

    constructor(private readonly albumQueryRepository: AlbumQueryRepository){}

    call(uuid:Id): Observable<Album>{
        return this.albumQueryRepository.findById(uuid);
    }
}
