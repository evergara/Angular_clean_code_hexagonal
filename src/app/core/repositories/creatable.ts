import { Observable } from 'rxjs';

export interface Creatable<Entity> {
  create(entity: Entity): Observable<Entity>;
}
