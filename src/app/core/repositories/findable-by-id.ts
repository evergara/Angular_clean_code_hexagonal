import { Observable } from 'rxjs';
import { Id } from '../types/id.type';

export interface FindableByID<Result>{
    findById(id:Id): Observable<Result>;
}