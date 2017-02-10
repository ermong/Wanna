import {Pipe, PipeTransform} from 'angular2/core';
import {Medlem} from './medlem';
import {IKategori} from '../bransjer/kategori';

@Pipe({
    name: 'medlemsFilter'
})
export class MedlemFilterPipe implements PipeTransform{
    transform(value: Medlem[], args: string[]): Medlem[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? 
            value.filter((medlem: Medlem) =>
                medlem.navn.toLocaleLowerCase().indexOf(filter) != -1 || 
                (medlem.kategorier && medlem.kategorier.filter((kategori: IKategori)=> kategori.navn.toLocaleLowerCase().indexOf(filter) != -1).length > 0)) : 
            value;
    }
}