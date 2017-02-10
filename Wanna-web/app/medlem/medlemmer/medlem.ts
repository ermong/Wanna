import {IKategori} from '../bransjer/kategori';

export interface IMedlem {
    medlem_id: number;
    navn: string;
    logoUrl: string;
    kategorier: IKategori[];
    
    inKategori(verdi:string):boolean;
}
export class Medlem implements IMedlem{
    constructor(public medlem_id:number, public navn:string, public logoUrl:string, public kategorier:IKategori[]){

    }

    inKategori(verdi: string): boolean{
        return false; 
    }
}