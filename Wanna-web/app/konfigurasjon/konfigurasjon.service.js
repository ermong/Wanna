System.register(["angular2/core", "./rekrutteringstekst", "./klubbkonfigurasjon"], function(exports_1, context_1) {
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
    var core_1, rekrutteringstekst_1, klubbkonfigurasjon_1;
    var KonfigurasjonService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rekrutteringstekst_1_1) {
                rekrutteringstekst_1 = rekrutteringstekst_1_1;
            },
            function (klubbkonfigurasjon_1_1) {
                klubbkonfigurasjon_1 = klubbkonfigurasjon_1_1;
            }],
        execute: function() {
            KonfigurasjonService = (function () {
                function KonfigurasjonService() {
                    this._klubbkonfigurasjon = new klubbkonfigurasjon_1.Klubbkonfigurasjon(new rekrutteringstekst_1.Rekrutteringstekst("Er du med på laget?", "Det \u00E5 kunne levere idrettsprestasjoner p\u00E5 h\u00F8yt niv\u00E5 er bare mulig n\u00E5r \n                man har med seg gode samarbeidspartnere. Vipers har et godt og velfungerende nettverk\n                av partnere som st\u00F8tter opp om Vipers sin sportslige satsning og samtidig nyter partnerene\n                godt av \u00E5 v\u00E6re en del av et b2b-nettverk. Vil du v\u00E6re med p\u00E5 et av Norges mest vellykkede \n                partnersamarbeid? Meld deg p\u00E5 her! "));
                }
                KonfigurasjonService.prototype.getRekrutteringstekst = function () {
                    return this._klubbkonfigurasjon.rekrutteringstekst;
                };
                KonfigurasjonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], KonfigurasjonService);
                return KonfigurasjonService;
            }());
            exports_1("KonfigurasjonService", KonfigurasjonService);
        }
    }
});
//# sourceMappingURL=konfigurasjon.service.js.map