import { Langage } from "./langage";

export interface Project{
    id:number;
    description?: string;
    image: string;
    langage: Langage;
    lien: string;
    name: string;
}