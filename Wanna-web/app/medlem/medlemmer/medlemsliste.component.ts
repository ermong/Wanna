import {Component, OnInit} from 'angular2/core';
import {IMedlem, Medlem} from './medlem';
import {MedlemFilterPipe} from './medlem-filter.pipe';
import {MedlemSortingPipe} from './medlem-sorting.pipe';
import {MedlemService} from '../Medlem.service';
import {LogoComponent} from '../../shared/logo.component';

@Component({
    selector: 'b2b-medlemsliste',
    templateUrl: 'app/medlem/medlemmer/medlemsliste.component.html',
    styleUrls: ['app/medlem/medlemmer/medlemsliste.component.css'],
    pipes: [MedlemFilterPipe, MedlemSortingPipe],
    directives: [LogoComponent],
    providers: [MedlemService]
})
export class MedlemslisteComponent implements OnInit{
    iconPxWidth: number = 100;
    visLogoer: boolean = true;
    filter: string ="";
    retning: string ="asc";
    medlemslisteHeading: string = 'Medlemmer i nettverket';
    medlemmer: IMedlem[];
    errorMessage: string;

    constructor(private _medlemService: MedlemService) {

    }
    ngOnInit(): void {
        this._medlemService.getMedlemmer()
            .subscribe(
                medlemmer => this.medlemmer = medlemmer,
                error => this.errorMessage = <any>error);
    }

    toggleVisLogo(): void {
        this.visLogoer = !this.visLogoer;
    }
    toggleAscDesc(): void {
        this.retning = this.retning == 'asc' ? 'desc' : 'asc';
    }
    setFilter(nyttFilter:string) {
        this.filter = nyttFilter;
    }
}