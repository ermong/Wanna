System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Medlem;
    return {
        setters:[],
        execute: function() {
            Medlem = (function () {
                function Medlem(medlem_id, navn, logoUrl, kategorier) {
                    this.medlem_id = medlem_id;
                    this.navn = navn;
                    this.logoUrl = logoUrl;
                    this.kategorier = kategorier;
                }
                Medlem.prototype.inKategori = function (verdi) {
                    return false;
                };
                return Medlem;
            }());
            exports_1("Medlem", Medlem);
        }
    }
});
//# sourceMappingURL=medlem.js.map