"use strict";
(self["webpackChunkteitingquest"] = self["webpackChunkteitingquest"] || []).push([["src_app_views_scanner_scanner_module_ts"],{

/***/ 4016:
/*!****************************************************!*\
  !*** ./src/app/core/services/qr-action.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrActionService: () => (/* binding */ QrActionService)
/* harmony export */ });
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.service */ 1100);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.service */ 3665);
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound.service */ 3455);
/* harmony import */ var _components_inventory_inventory_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/inventory/inventory.factory */ 9232);
/* harmony import */ var _quest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quest.service */ 2926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);










let QrActionService = /*#__PURE__*/(() => {
  class QrActionService {
    playerService;
    inventoryService;
    soundService;
    questService;
    constructor(playerService, inventoryService, soundService, questService // 👈 hinzufügen
    ) {
      this.playerService = playerService;
      this.inventoryService = inventoryService;
      this.soundService = soundService;
      this.questService = questService;
    }
    handleQrCode(code) {
      let action;
      try {
        action = JSON.parse(code);
      } catch {
        return 'Ungültiger QR-Code.';
      }
      if (!action.type) return 'Unbekannter QR-Code.';
      switch (action.type) {
        case 'heal':
          if (!action.amount) return 'Heilwert fehlt.';
          this.playerService.heal(action.amount);
          this.soundService.playEffect('heal');
          return action.description ?? `+${action.amount} HP geheilt.`;
        case 'item':
          const unlockeditem = this.inventoryService.unlockItemById(action.itemId);
          const item = (0,_components_inventory_inventory_factory__WEBPACK_IMPORTED_MODULE_3__.createEquipmentItems)().find(i => i.id === action.itemId);
          const nameitem = item?.name ?? action.itemId;
          if (!unlockeditem) return `Item bereits freigeschaltet: ${nameitem}`;
          this.soundService.playEffect('item-kaufen');
          return `Item freigeschaltet: ${nameitem}`;
        case 'quest':
          const questId = action.questId ?? action.id; // ← fallback, falls im QR-Code nur "id" heißt
          const quest = this.questService.getSnapshot().find(q => q.id === questId);
          if (!quest) return 'Quest nicht gefunden.';
          const alreadyAcquired = quest.acquired;
          if (alreadyAcquired) return `Quest bereits erhalten: ${quest.title}`;
          this.questService.markQuestAcquired(questId);
          this.soundService.playEffect('quest-annahme');
          return `Neue Quest erhalten: ${quest.title}`;
        case 'startBattle':
          return `Kampf gegen Boss gestartet: ${action.bossId}`;
        default:
          return 'Unbekannte Aktion.';
      }
    }
    static ɵfac = function QrActionService_Factory(t) {
      return new (t || QrActionService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_sound_service__WEBPACK_IMPORTED_MODULE_2__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_quest_service__WEBPACK_IMPORTED_MODULE_4__.QuestService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: QrActionService,
      factory: QrActionService.ɵfac,
      providedIn: 'root'
    });
  }
  return QrActionService;
})();

/***/ }),

/***/ 9173:
/*!****************************************************!*\
  !*** ./src/app/views/scanner/scanner.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScannerComponent: () => (/* binding */ ScannerComponent)
/* harmony export */ });
/* harmony import */ var _core_services_qr_action_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/qr-action.service */ 4016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zxing/ngx-scanner */ 2739);







function ScannerComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
let ScannerComponent = /*#__PURE__*/(() => {
  class ScannerComponent {
    qrActionService;
    router;
    message = '';
    constructor(qrActionService, router) {
      this.qrActionService = qrActionService;
      this.router = router;
    }
    onScan(result) {
      this.message = this.qrActionService.handleQrCode(result);
      // Optional: Auto zurück nach 3 Sek.
      setTimeout(() => this.router.navigate(['/game']), 3000);
    }
    goBack() {
      this.router.navigate(['/game']);
    }
    static ɵfac = function ScannerComponent_Factory(t) {
      return new (t || ScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_qr_action_service__WEBPACK_IMPORTED_MODULE_0__.QrActionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ScannerComponent,
      selectors: [["app-scanner"]],
      decls: 6,
      vars: 1,
      consts: [[3, "scanSuccess"], [4, "ngIf"], [1, "rpg-button", 3, "click"]],
      template: function ScannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "QR-Code scannen");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "zxing-scanner", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scanSuccess", function ScannerComponent_Template_zxing_scanner_scanSuccess_2_listener($event) {
            return ctx.onScan($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ScannerComponent_p_3_Template, 2, 1, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScannerComponent_Template_button_click_4_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Zur\u00FCck");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__.ZXingScannerComponent],
      encapsulation: 2
    });
  }
  return ScannerComponent;
})();

/***/ }),

/***/ 8712:
/*!*************************************************!*\
  !*** ./src/app/views/scanner/scanner.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScannerModule: () => (/* binding */ ScannerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _scanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner.component */ 9173);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zxing/ngx-scanner */ 2739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _scanner_component__WEBPACK_IMPORTED_MODULE_0__.ScannerComponent
}];
let ScannerModule = /*#__PURE__*/(() => {
  class ScannerModule {
    static ɵfac = function ScannerModule_Factory(t) {
      return new (t || ScannerModule)();
    };
    static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ScannerModule
    });
    static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__.ZXingScannerModule]
    });
  }
  return ScannerModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScannerModule, {
    declarations: [_scanner_component__WEBPACK_IMPORTED_MODULE_0__.ScannerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_4__.ZXingScannerModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_scanner_scanner_module_ts.js.map