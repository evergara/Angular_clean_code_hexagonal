import { Observable } from "rxjs";
import { Id } from "../types/id.type";

export interface Deletable<Entity>{
    delete(id:Id): Observable<void>;
}