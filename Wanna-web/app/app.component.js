System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './forside/forside.component', './medlem/medlem.component', './konfigurasjon/klubbkonfigurasjon'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, forside_component_1, medlem_component_1, klubbkonfigurasjon_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forside_component_1_1) {
                forside_component_1 = forside_component_1_1;
            },
            function (medlem_component_1_1) {
                medlem_component_1 = medlem_component_1_1;
            },
            function (klubbkonfigurasjon_1_1) {
                klubbkonfigurasjon_1 = klubbkonfigurasjon_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Vipers B2B nettverk';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'b2b-app',
                        template: "\n    <div class='panel panel-primary'>\n        <div class='panel-body'>\n        <ul class='nav navbar-nav'>\n            <li><a [routerLink]=\"['Forside']\">Forsiden</a></li>\n            <li><a [routerLink]=\"['Medlem']\">Medlemsside</a></li>\n        </ul>\n        </div>\n        <div class='panel-body'>\n        <router-outlet></router-outlet>\n        </div>\n    </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS,
                            klubbkonfigurasjon_1.Klubbkonfigurasjon]
                    }),
                    router_1.RouteConfig([
                        { path: '/forside', name: 'Forside', component: forside_component_1.ForsideComponent, useAsDefault: true },
                        { path: '/medlem', name: 'Medlem', component: medlem_component_1.MedlemComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map