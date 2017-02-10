System.register(['angular2/core', '../konfigurasjon/konfigurasjon.service'], function(exports_1, context_1) {
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
    var core_1, konfigurasjon_service_1;
    var RekrutteringstekstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (konfigurasjon_service_1_1) {
                konfigurasjon_service_1 = konfigurasjon_service_1_1;
            }],
        execute: function() {
            RekrutteringstekstComponent = (function () {
                function RekrutteringstekstComponent(_konfigurasjonService) {
                    this._konfigurasjonService = _konfigurasjonService;
                }
                RekrutteringstekstComponent.prototype.ngOnInit = function () {
                    this.rekrutteringstekst = this._konfigurasjonService.getRekrutteringstekst();
                    console.log('In OnInit(), rekrutteringstekst: ' + this.rekrutteringstekst);
                };
                RekrutteringstekstComponent = __decorate([
                    core_1.Component({
                        selector: 'b2b-rekrutteringstekst',
                        template: "<h2>{{ rekrutteringstekst.heading }}</h2>\n    <div class='tekstblokk'> {{ rekrutteringstekst.body}} </div>",
                        styleUrls: ['app/forside/forside.css'],
                        providers: [konfigurasjon_service_1.KonfigurasjonService]
                    }), 
                    __metadata('design:paramtypes', [konfigurasjon_service_1.KonfigurasjonService])
                ], RekrutteringstekstComponent);
                return RekrutteringstekstComponent;
            }());
            exports_1("RekrutteringstekstComponent", RekrutteringstekstComponent);
        }
    }
});
//# sourceMappingURL=rekrutteringstekst.component.js.map