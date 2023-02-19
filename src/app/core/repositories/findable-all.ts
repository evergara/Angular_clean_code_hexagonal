import { Observable } from 'rxjs';

export interface FindableAll<T>{
    findAll(): Observable<T[]>;
}