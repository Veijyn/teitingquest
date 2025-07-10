"use strict";
(self["webpackChunkteitingquest"] = self["webpackChunkteitingquest"] || []).push([["common"],{

/***/ 3455:
/*!************************************************!*\
  !*** ./src/app/core/services/sound.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoundService: () => (/* binding */ SoundService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

let SoundService = /*#__PURE__*/(() => {
  class SoundService {
    play(src) {
      const audio = new Audio(src);
      audio.volume = 0.8; // anpassbar
      audio.play().catch(err => console.error('Soundfehler:', err));
    }
    playEffect(name) {
      this.play(`/assets/sounds/${name}.mp3`);
    }
    playBossMusic(bossId) {
      this.play(`/assets/sounds/boss-${bossId}.mp3`);
    }
    static ɵfac = function SoundService_Factory(t) {
      return new (t || SoundService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SoundService,
      factory: SoundService.ɵfac,
      providedIn: 'root'
    });
  }
  return SoundService;
})();

/***/ })

}]);
//# sourceMappingURL=common.js.map