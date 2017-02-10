import { Component } from 'angular2/core';
import { MedlemslisteComponent } from './medlemmer/medlemsliste.component';
import { MedlemService} from './medlem.service';

@Component({
    selector: 'b2b-innhold',
    templateUrl: 'app/medlem/medlem.component.html',
    directives:[MedlemslisteComponent],
    providers:  [MedlemService]
   
})
export class MedlemComponent {
    pageHeading: string = 'Medlemmer i B2B-nettverket';

}