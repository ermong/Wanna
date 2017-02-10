import { Component, OnInit } from 'angular2/core' ;
import { Rekrutteringstekst } from '../konfigurasjon/rekrutteringstekst';
import { KonfigurasjonService } from '../konfigurasjon/konfigurasjon.service';

@Component({
    selector: 'b2b-rekrutteringstekst',
    template: `<h2>{{ rekrutteringstekst.heading }}</h2>
    <div class='tekstblokk'> {{ rekrutteringstekst.body}} </div>`,
    styleUrls: ['app/forside/forside.css'],
    providers: [KonfigurasjonService]
})
export class RekrutteringstekstComponent implements OnInit {
    rekrutteringstekst: Rekrutteringstekst;
    constructor(private _konfigurasjonService : KonfigurasjonService){
    } 

    ngOnInit(): void {
        this.rekrutteringstekst = this._konfigurasjonService.getRekrutteringstekst();
        console.log('In OnInit(), rekrutteringstekst: ' + this.rekrutteringstekst);
    }
}