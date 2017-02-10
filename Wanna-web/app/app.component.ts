import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //Laster all funksjonalitet
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { ForsideComponent } from './forside/forside.component';
import { MedlemComponent } from './medlem/medlem.component';
import { Klubbkonfigurasjon } from './konfigurasjon/klubbkonfigurasjon'


@Component({
    selector: 'b2b-app',
    template: `
    <div class='panel panel-primary'>
        <div class='panel-body'>
        <ul class='nav navbar-nav'>
            <li><a [routerLink]="['Forside']">Forsiden</a></li>
            <li><a [routerLink]="['Medlem']">Medlemsside</a></li>
        </ul>
        </div>
        <div class='panel-body'>
        <router-outlet></router-outlet>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers:  [HTTP_PROVIDERS,
                ROUTER_PROVIDERS,
                Klubbkonfigurasjon]
})
@RouteConfig([
    { path: '/forside', name: 'Forside', component: ForsideComponent, useAsDefault: true},
    { path: '/medlem', name: 'Medlem', component: MedlemComponent}
])
export class AppComponent{
    pageTitle: string = 'Vipers B2B nettverk'

}