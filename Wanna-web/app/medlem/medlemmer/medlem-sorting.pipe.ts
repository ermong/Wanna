import {Pipe, PipeTransform} from 'angular2/core';
import {Medlem} from './medlem';
import {IKategori} from '../bransjer/kategori';

@Pipe({
    name: 'medlemsSorting'
})
export class MedlemSortingPipe implements PipeTransform{
    transform(value: Medlem[], args: string[]): Medlem[] {
        if(value == null) {
            return value;
        }
        let direction: string = args[0] ? args[0].toLocaleLowerCase() =="desc" ? "desc" : "asc" : "asc";
        return value.sort((a: Medlem, b: Medlem) => 
            direction == "desc" ? 
            this.orderByComparator(b.navn, a.navn) : 
            this.orderByComparator(a.navn, b.navn));
    }
    orderByComparator(a:string, b:string):number{
        if(a.toLowerCase() < b.toLowerCase()) return -1;
        if(a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
    }

}
