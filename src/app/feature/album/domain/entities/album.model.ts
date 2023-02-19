import { Id } from "src/app/core/types/id.type";

export interface Album {
    id: Id;
    userId:string;
    title:string;
    description: string;
}
