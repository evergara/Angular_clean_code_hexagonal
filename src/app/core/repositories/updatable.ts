import { Observable } from 'rxjs/internal/Observable';
import { Id } from '../types/id.type';

export interface Updatable<Entity> {
    create(id:Id, entity: Entity): Observable<Entity>;
}
  