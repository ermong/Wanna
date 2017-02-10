import { Component, OnInit } from 'angular2/core';
import { RekrutteringstekstComponent } from './rekrutteringstekst.component';

@Component({
    templateUrl: 'app/forside/forside.component.html',
    directives: [RekrutteringstekstComponent]
})
export class ForsideComponent   implements OnInit {
    forsideHeading: string = 'Velkommen til Vipers B2B-nettverk!';

    ngOnInit(): void {
        console.log("In ForsideComponent");
    }
}