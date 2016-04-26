System.register(['angular2/core', './mock-mensajes'], function(exports_1, context_1) {
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
    var core_1, mock_mensajes_1, mock_mensajes_2;
    var MensajesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_mensajes_1_1) {
                mock_mensajes_1 = mock_mensajes_1_1;
                mock_mensajes_2 = mock_mensajes_1_1;
            }],
        execute: function() {
            MensajesService = (function () {
                function MensajesService() {
                }
                MensajesService.prototype.getMensaje = function () {
                    return Promise.resolve(mock_mensajes_1.MENSAJES);
                };
                MensajesService.prototype.getMeId = function (id) {
                    return Promise.resolve(mock_mensajes_1.MENSAJES).then(function (list) { return list.filter(function (mensa) { return mensa.id == id; }); });
                };
                MensajesService.prototype.getMeId2 = function (id2) {
                    return Promise.resolve(mock_mensajes_1.MENSAJES).then(function (list) { return list.filter(function (mensa) { return mensa.id2 == id2; }); });
                };
                MensajesService.prototype.getMeId3 = function (id3) {
                    return Promise.resolve(mock_mensajes_2.MENSAJESPRIV).then(function (list) { return list.filter(function (mensa) { return mensa.id3 == id3; }); });
                };
                MensajesService.prototype.getMeFilt = function (id, id2) {
                    return Promise.resolve(mock_mensajes_1.MENSAJES).then(function (mensa) { return mensa.filter(function (mensa) { return mensa.id == id || mensa.id2 == id2; }); });
                };
                MensajesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MensajesService);
                return MensajesService;
            }());
            exports_1("MensajesService", MensajesService);
        }
    }
});
//# sourceMappingURL=chats.service.js.map