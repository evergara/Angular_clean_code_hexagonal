import { Album } from '../domain/entities/album.model';
import { AlbumQueryRepository } from '../domain/repositories/album.qry.repository';
import { Observable } from 'rxjs';


export class FindAllAlbumQRYUsesCase{

    constructor(private readonly albumQueryRepository: AlbumQueryRepository){}

    call(): Observable<Album[]>{
        return this.albumQueryRepository.findAll();
    }
}
