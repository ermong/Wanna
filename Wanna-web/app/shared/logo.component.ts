import {Component, Input, OnChanges} from 'angular2/core'

@Component({
    selector: 'b2b-logo',
    templateUrl: 'app/shared/logo.component.html',
    styleUrls: ['app/shared/logo.component.css']
})
export class LogoComponent implements OnChanges{
    @Input() logoUrl:string;
    @Input() title:string;

    ngOnChanges(): void{
        console.log('in OnChanges');
    }
} 