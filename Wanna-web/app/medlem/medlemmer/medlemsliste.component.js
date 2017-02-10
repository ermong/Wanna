System.register(['angular2/core', './medlem-filter.pipe', './medlem-sorting.pipe', '../Medlem.service', '../../shared/logo.component'], function(exports_1, context_1) {
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
    var core_1, medlem_filter_pipe_1, medlem_sorting_pipe_1, Medlem_service_1, logo_component_1;
    var MedlemslisteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (medlem_filter_pipe_1_1) {
                medlem_filter_pipe_1 = medlem_filter_pipe_1_1;
            },
            function (medlem_sorting_pipe_1_1) {
                medlem_sorting_pipe_1 = medlem_sorting_pipe_1_1;
            },
            function (Medlem_service_1_1) {
                Medlem_service_1 = Medlem_service_1_1;
            },
            function (logo_component_1_1) {
                logo_component_1 = logo_component_1_1;
            }],
        execute: function() {
            MedlemslisteComponent = (function () {
                function MedlemslisteComponent(_medlemService) {
                    this._medlemService = _medlemService;
                    this.iconPxWidth = 100;
                    this.visLogoer = true;
                    this.filter = "";
                    this.retning = "asc";
                    this.medlemslisteHeading = 'Medlemmer i nettverket';
                }
                MedlemslisteComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._medlemService.getMedlemmer()
                        .subscribe(function (medlemmer) { return _this.medlemmer = medlemmer; }, function (error) { return _this.errorMessage = error; });
                };
                MedlemslisteComponent.prototype.toggleVisLogo = function () {
                    this.visLogoer = !this.visLogoer;
                };
                MedlemslisteComponent.prototype.toggleAscDesc = function () {
                    this.retning = this.retning == 'asc' ? 'desc' : 'asc';
                };
                MedlemslisteComponent.prototype.setFilter = function (nyttFilter) {
                    this.filter = nyttFilter;
                };
                MedlemslisteComponent = __decorate([
                    core_1.Component({
                        selector: 'b2b-medlemsliste',
                        templateUrl: 'app/medlem/medlemmer/medlemsliste.component.html',
                        styleUrls: ['app/medlem/medlemmer/medlemsliste.component.css'],
                        pipes: [medlem_filter_pipe_1.MedlemFilterPipe, medlem_sorting_pipe_1.MedlemSortingPipe],
                        directives: [logo_component_1.LogoComponent],
                        providers: [Medlem_service_1.MedlemService]
                    }), 
                    __metadata('design:paramtypes', [Medlem_service_1.MedlemService])
                ], MedlemslisteComponent);
                return MedlemslisteComponent;
            }());
            exports_1("MedlemslisteComponent", MedlemslisteComponent);
        }
    }
});
//# sourceMappingURL=medlemsliste.component.js.map