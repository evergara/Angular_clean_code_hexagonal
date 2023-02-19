import { Observable } from "rxjs";
import { Album } from "../entities/album.model";
import { FindableAll } from "src/app/core/repositories/findable-all";
import { FindableByID } from "src/app/core/repositories/findable-by-id";

export abstract class AlbumQueryRepository implements FindableAll<Album>, FindableByID<Album> {
    abstract findById(id: string): Observable<Album>;
    abstract findAll(): Observable<Album[]>;

}