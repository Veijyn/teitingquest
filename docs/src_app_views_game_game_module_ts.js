"use strict";
(self["webpackChunkteitingquest"] = self["webpackChunkteitingquest"] || []).push([["src_app_views_game_game_module_ts"],{

/***/ 3472:
/*!***************************************************!*\
  !*** ./src/app/components/boss-list/boss-list.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BossListComponent: () => (/* binding */ BossListComponent)
/* harmony export */ });
/* harmony import */ var _core_services_boss_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/boss.service */ 7901);
/* harmony import */ var _core_services_battle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/battle.service */ 4406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);








function BossListComponent_div_3_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 8);
  }
  if (rf & 2) {
    const boss_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", boss_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/icons/" + boss_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function BossListComponent_div_3_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boss_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Versuche: ", boss_r2.attempts, "");
  }
}
function BossListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BossListComponent_div_3_img_1_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BossListComponent_div_3_p_11_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BossListComponent_div_3_Template_button_click_12_listener() {
      const boss_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.startBattle(boss_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Kampf starten ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const boss_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("defeated", boss_r2.defeated);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", boss_r2.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](boss_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](boss_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](boss_r2.defeated ? "Besiegt" : "Bereit zum Kampf");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", boss_r2.attempts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", boss_r2.defeated);
  }
}
let BossListComponent = /*#__PURE__*/(() => {
  class BossListComponent {
    bossService;
    battleService;
    router;
    bosses = [];
    advantageVisibility = {};
    constructor(bossService, battleService, router) {
      this.bossService = bossService;
      this.battleService = battleService;
      this.router = router;
    }
    ngOnInit() {
      this.bossService.getBosses().subscribe(b => {
        this.bosses = b;
        this.bosses.forEach(boss => this.advantageVisibility[boss.id] = false);
      });
    }
    toggleAdvantages(bossId) {
      this.advantageVisibility[bossId] = !this.advantageVisibility[bossId];
    }
    showAdvantages(bossId) {
      return this.advantageVisibility[bossId];
    }
    startBattle(bossId) {
      this.battleService.startBattle(bossId);
      this.router.navigate(['/battle']);
    }
    statIcon(stat) {
      switch (stat) {
        case 'strength':
          return '🗡️';
        case 'agility':
          return '🎯';
        case 'intelligence':
          return '🧠';
        case 'hp':
          return '❤️';
        case 'level':
          return '⭐';
        case 'money':
          return '💰';
        case 'experience':
          return '📘';
        default:
          return '❔';
      }
    }
    static ɵfac = function BossListComponent_Factory(t) {
      return new (t || BossListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_boss_service__WEBPACK_IMPORTED_MODULE_0__.BossService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_battle_service__WEBPACK_IMPORTED_MODULE_1__.BattleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BossListComponent,
      selectors: [["app-boss-list"]],
      decls: 4,
      vars: 1,
      consts: [[1, "boss-list"], ["class", "boss-card", 3, "defeated", 4, "ngFor", "ngForOf"], [1, "boss-card"], [3, "src", "alt", 4, "ngIf"], [1, "boss-details"], [1, "description"], [4, "ngIf"], [1, "rpg-button", 3, "click", "disabled"], [3, "src", "alt"]],
      template: function BossListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Boss\u00FCbersicht");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BossListComponent_div_3_Template, 14, 8, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bosses);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".boss-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--rpg-highlight);\n  margin-bottom: 1rem;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background: #2a1d11;\n  border: 2px solid #f5c96f;\n  padding: 1rem;\n  border-radius: 10px;\n  margin-bottom: 1.5rem;\n  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6);\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card.defeated[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  filter: grayscale(0.6);\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-right: 1rem;\n  border: 2px solid #f5c96f;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0 0 0.4rem;\n  color: #f5c96f;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #ccc;\n  margin-bottom: 0.5rem;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .boss-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  font-size: 0.75rem;\n  color: #f5f5f5;\n  margin-bottom: 0.5rem;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .boss-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #1f140b;\n  padding: 0.3rem 0.5rem;\n  border-radius: 4px;\n  border: 1px solid #444;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  background: none;\n  border: none;\n  color: #f5c96f;\n  cursor: pointer;\n  padding: 0.2rem 0;\n  font-family: var(--rpg-font);\n  text-align: left;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   .advantages-list[_ngcontent-%COMP%] {\n  background: #1e140a;\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  border: 1px solid #3d2b15;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  color: #eee;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   .advantages-list[_ngcontent-%COMP%]   .advantage[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   .advantages-list[_ngcontent-%COMP%]   .advantage[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #e0cf89;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   .advantages-list[_ngcontent-%COMP%]   .advantage[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0 1rem;\n  padding: 0;\n  list-style: disc;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   .advantages-list[_ngcontent-%COMP%]   .advantage[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 0.1rem 0.3rem;\n  border-radius: 3px;\n}\n.boss-list[_ngcontent-%COMP%]   .boss-card[_ngcontent-%COMP%]   .boss-details[_ngcontent-%COMP%]   .rpg-button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-top: 0.8rem;\n}\n\n.advantages-list[_ngcontent-%COMP%] {\n  background: #201509;\n  padding: 0.8rem;\n  border: 1px solid #664b2d;\n  border-radius: 8px;\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  color: var(--rpg-text);\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);\n}\n.advantages-list[_ngcontent-%COMP%]   .advantage-entry[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.advantages-list[_ngcontent-%COMP%]   .advantage-entry[_ngcontent-%COMP%]   .advantage-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #f5c96f;\n  margin-bottom: 0.3rem;\n}\n.advantages-list[_ngcontent-%COMP%]   .advantage-entry[_ngcontent-%COMP%]   .advantage-header[_ngcontent-%COMP%]   .advantage-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.advantages-list[_ngcontent-%COMP%]   .advantage-entry[_ngcontent-%COMP%]   .advantage-header[_ngcontent-%COMP%]   .advantage-desc[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-weight: normal;\n  font-size: 0.75rem;\n}\n.advantages-list[_ngcontent-%COMP%]   .advantage-entry[_ngcontent-%COMP%]   .conditions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.advantages-list[_ngcontent-%COMP%]   .advantage-entry[_ngcontent-%COMP%]   .conditions[_ngcontent-%COMP%]   .condition-pill[_ngcontent-%COMP%] {\n  background: #342514;\n  border: 1px solid #614830;\n  border-radius: 12px;\n  padding: 0.2rem 0.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.7rem;\n  color: #e0e0e0;\n}\n.advantages-list[_ngcontent-%COMP%]   .advantage-entry[_ngcontent-%COMP%]   .conditions[_ngcontent-%COMP%]   .icon-stat[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ib3NzLWxpc3QvYm9zcy1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7QUFESjtBQUdJO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FBRE47QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFGTjtBQUtJO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUhOO0FBS007RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhSO0FBTU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUpSO0FBT007RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUxSO0FBT1E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUxWO0FBU007RUFDRSxrQkFBQTtBQVBSO0FBU1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFQVjtBQVNVO0VBQ0UsMEJBQUE7QUFQWjtBQVdRO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBVFY7QUFXVTtFQUNFLHFCQUFBO0FBVFo7QUFXWTtFQUNFLGNBQUE7QUFUZDtBQVlZO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFWZDtBQWFZO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFYZDtBQWlCTTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFmUjs7QUFvQkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7QUFqQkY7QUFtQkU7RUFDRSxtQkFBQTtBQWpCSjtBQW1CSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBakJOO0FBbUJNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBakJSO0FBb0JNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFsQlI7QUFzQkk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFwQk47QUFzQk07RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFwQlI7QUF1Qk07RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFyQlIiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9zcy1saXN0IHtcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tcnBnLWhpZ2hsaWdodCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmJvc3MtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQ6ICMyYTFkMTE7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjVjOTZmO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHJcbiAgICAmLmRlZmVhdGVkIHtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwLjYpO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y1Yzk2ZjtcclxuICAgIH1cclxuXHJcbiAgICAuYm9zcy1kZXRhaWxzIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBtYXJnaW46IDAgMCAwLjRyZW07XHJcbiAgICAgICAgY29sb3I6ICNmNWM5NmY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvc3Mtc3RhdHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzFmMTQwYjtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFudGFnZXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgLnRvZ2dsZS1idG4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjZjVjOTZmO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtIDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcnBnLWZvbnQpO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWR2YW50YWdlcy1saXN0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZTE0MGE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2QyYjE1O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNlZWU7XHJcblxyXG4gICAgICAgICAgLmFkdmFudGFnZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNlMGNmODk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAuM3JlbSAwIDAgMXJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGRpc2M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDMzO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuMXJlbSAwLjNyZW07XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucnBnLWJ1dHRvbiB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmFkdmFudGFnZXMtbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogIzIwMTUwOTtcclxuICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NGIyZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBjb2xvcjogdmFyKC0tcnBnLXRleHQpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiYSgwLDAsMCwwLjQpO1xyXG5cclxuICAuYWR2YW50YWdlLWVudHJ5IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgLmFkdmFudGFnZS1oZWFkZXIge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICNmNWM5NmY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuXHJcbiAgICAgIC5hZHZhbnRhZ2UtbmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW50YWdlLWRlc2Mge1xyXG4gICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbmRpdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGdhcDogMC40cmVtO1xyXG5cclxuICAgICAgLmNvbmRpdGlvbi1waWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzQyNTE0O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MTQ4MzA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC42cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDAuM3JlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmljb24tc3RhdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return BossListComponent;
})();

/***/ }),

/***/ 6044:
/*!***************************************************!*\
  !*** ./src/app/components/inventory/inventory.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryComponent: () => (/* binding */ InventoryComponent)
/* harmony export */ });
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/inventory.service */ 1100);
/* harmony import */ var _core_services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/player.service */ 3665);
/* harmony import */ var _core_services_game_save_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/game-save.service */ 2200);
/* harmony import */ var _views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @views/toasts/toast.service */ 8258);
/* harmony import */ var _core_services_sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/sound.service */ 3455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);












function InventoryComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Du besitzt keine Items. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InventoryComponent_div_5_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u2764\uFE0F HP +", item_r1.bonusStats.hp, "");
  }
}
function InventoryComponent_div_5_div_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\uD83D\uDDE1\uFE0F St\u00E4rke +", item_r1.bonusStats.strength, "");
  }
}
function InventoryComponent_div_5_div_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\uD83C\uDFAF Geschicklichkeit +", item_r1.bonusStats.agility, "");
  }
}
function InventoryComponent_div_5_div_10_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\uD83E\uDDE0 Intelligenz +", item_r1.bonusStats.intelligence, "");
  }
}
function InventoryComponent_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, InventoryComponent_div_5_div_10_span_1_Template, 2, 1, "span", 18)(2, InventoryComponent_div_5_div_10_span_2_Template, 2, 1, "span", 18)(3, InventoryComponent_div_5_div_10_span_3_Template, 2, 1, "span", 18)(4, InventoryComponent_div_5_div_10_span_4_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.bonusStats.hp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.bonusStats.strength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.bonusStats.agility);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.bonusStats.intelligence);
  }
}
function InventoryComponent_div_5_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InventoryComponent_div_5_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.useItem(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Anwenden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InventoryComponent_div_5_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InventoryComponent_div_5_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.useItem(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Verwenden ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function InventoryComponent_div_5_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InventoryComponent_div_5_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleEquip(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", item_r1.equipped ? "Ausr\u00FCstung entfernen" : "Ausr\u00FCstung anlegen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r1.equipped ? "Entfernen" : "Anlegen", " ");
  }
}
function InventoryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7)(3, "div", 8)(4, "strong", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, InventoryComponent_div_5_div_10_Template, 5, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, InventoryComponent_div_5_button_12_Template, 2, 0, "button", 14)(13, InventoryComponent_div_5_button_13_Template, 2, 0, "button", 15)(14, InventoryComponent_div_5_button_14_Template, 2, 2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "assets/icons/" + item_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", ctx_r2.getGermanItemType(item_r1.type), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.bonusStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.type === "buff");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.type === "consumable");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.type === "equipment");
  }
}
let InventoryComponent = /*#__PURE__*/(() => {
  class InventoryComponent {
    inventoryService;
    playerService;
    gameSave;
    toastService;
    soundService;
    items = [];
    statIcon(stat) {
      switch (stat) {
        case 'strength':
          return '🗡️';
        case 'agility':
          return '🎯';
        case 'intelligence':
          return '🧠';
        case 'hp':
          return '❤️';
        case 'money':
          return '💰';
        case 'level':
          return '⭐';
        case 'experience':
          return '📘';
        default:
          return '';
      }
    }
    constructor(inventoryService, playerService, gameSave, toastService, soundService) {
      this.inventoryService = inventoryService;
      this.playerService = playerService;
      this.gameSave = gameSave;
      this.toastService = toastService;
      this.soundService = soundService;
    }
    ngOnInit() {
      this.inventoryService.getInventory().subscribe(items => {
        this.items = items.filter(item => item.available !== false).sort((a, b) => {
          const order = ['equipment', 'consumable', 'buff', 'quest'];
          return order.indexOf(a.type) - order.indexOf(b.type);
        });
      });
    }
    getGermanItemType(type) {
      switch (type) {
        case 'equipment':
          return 'Ausrüstung';
        case 'consumable':
          return 'Verbrauchbar';
        case 'buff':
          return 'Buff';
        case 'quest':
          return 'Quest-Gegenstand';
        default:
          return type;
      }
    }
    useItem(item) {
      const now = Date.now();
      const durationMs = 1000 * 60 * 5;
      const stats = this.playerService.getSnapshot();
      const isBuffFood = item.name?.endsWith('(Bufffood)');
      const isPotion = item.id === 'potion';
      // Bufffood-Cooldown prüfen
      if (isBuffFood && stats?.lastBuffFoodUsedAt) {
        const last = new Date(stats.lastBuffFoodUsedAt).getTime();
        if (now - last < 1000 * 60 * 5) {
          this.toastService.show('Du musst 5 Minuten warten, bevor du weiteres Bufffood verwenden kannst.');
          return;
        }
      }
      // Potion-Cooldown prüfen
      if (isPotion && stats?.lastPotionUsedAt) {
        const last = new Date(stats.lastPotionUsedAt).getTime();
        if (now - last < 1000 * 60 * 5) {
          this.toastService.show('Du musst 5 Minuten warten, bevor du einen weiteren Trank trinken kannst.');
          return;
        }
      }
      // Bonuswerte für Tooltip sammeln
      const buffs = Object.entries(item.bonusStats ?? {}).map(([key, val]) => {
        const amount = typeof val === 'number' ? val : 0;
        return `${this.statIcon(key)} +${amount}`;
      });
      // Buff-Item mit Dauer
      if (item.type === 'buff' && !isPotion) {
        this.playerService.addBuff(item, durationMs);
        // Cooldown-Zeit setzen
        if (isBuffFood) {
          this.playerService.updateStats({
            lastBuffFoodUsedAt: new Date().toISOString()
          });
          setTimeout(() => {
            this.playerService.removeExpiredBuffs();
          }, durationMs);
        }
        if (isPotion) {
          this.playerService.updateStats({
            lastPotionUsedAt: new Date().toISOString()
          });
        }
        this.soundService.playEffect('trank-benutzen');
        this.inventoryService.removeSingleItem(item);
        this.toastService.show(`Buff aktiv: ${buffs.join(', ')}`);
      }
      // Consumable → direkte Stats-Änderung
      if (item.type === 'consumable' || isPotion) {
        const statsToApply = {};
        for (const [key, val] of Object.entries(item.bonusStats ?? {})) {
          if (typeof val === 'number' && key) {
            statsToApply[key] = val;
          }
        }
        this.soundService.playEffect('item-benutzen');
        this.playerService.updateStats(statsToApply);
        this.inventoryService.removeSingleItem(item); // 👈 nur EIN Item entfernen!
        this.toastService.show(`Verbraucht: ${buffs.join(', ')}`);
      }
      this.gameSave.updateCurrentGame();
    }
    checkForUnlockedEquipment() {
      const player = this.playerService.getSnapshot() ?? {
        questsCompleted: 0
      };
      const inventory = this.inventoryService.getSnapshot();
      const unlocked = [];
      const updated = inventory.map(item => {
        if (item.type === 'equipment' && item.questsRequired != null && item.questsRequired <= (player.questsCompleted ?? 0) && item.available !== true) {
          unlocked.push({
            ...item,
            available: true
          });
          return {
            ...item,
            available: true
          };
        }
        return item;
      });
      if (unlocked.length > 0) {
        this.inventoryService.setInventory(updated);
        // optional: notify the player
        //console.log('Neue Ausrüstung verfügbar:', unlocked.map(i => i.name).join(', '));
      }
    }
    toggleEquip(item) {
      const equipped = !item.equipped;
      // 1. Inventory aktualisieren
      this.inventoryService.updateEquippedStatus(item.id, equipped);
      // 2. Neuestes Item holen
      const latestItem = this.inventoryService.getSnapshot().find(i => i.id === item.id);
      if (!latestItem || !latestItem.slot) {
        console.warn('Kein gültiger Slot-Item gefunden für Equip:', latestItem);
        return;
      }
      // 3. Player aktualisieren
      if (equipped) {
        this.playerService.equipItem(latestItem);
      } else {
        this.playerService.unequipItem(latestItem.slot);
      }
      // 4. Spiel speichern
      this.gameSave.updateCurrentGame();
    }
    static ɵfac = function InventoryComponent_Factory(t) {
      return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_game_save_service__WEBPACK_IMPORTED_MODULE_2__.GameSaveService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_sound_service__WEBPACK_IMPORTED_MODULE_4__.SoundService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: InventoryComponent,
      selectors: [["app-inventory"]],
      decls: 6,
      vars: 2,
      consts: [[1, "inventory"], ["class", "empty-note", 4, "ngIf"], [1, "item-list"], ["class", "item-card", 4, "ngFor", "ngForOf"], [1, "empty-note"], [1, "item-card"], [1, "item-icon", 3, "src", "alt"], [1, "item-details"], [1, "item-header"], [1, "item-name"], [1, "item-type"], [1, "item-description"], ["class", "item-bonuses", 4, "ngIf"], [1, "item-actions"], ["class", "rpg-button small buff-button", "title", "Tempor\u00E4rer Effekt \u2013 h\u00E4lt 30 Minuten", 3, "click", 4, "ngIf"], ["class", "rpg-button small consumable-button", "title", "Einmaliger Soforteffekt", 3, "click", 4, "ngIf"], ["class", "rpg-button small equipment-button", 3, "title", "click", 4, "ngIf"], [1, "item-bonuses"], [4, "ngIf"], ["title", "Tempor\u00E4rer Effekt \u2013 h\u00E4lt 30 Minuten", 1, "rpg-button", "small", "buff-button", 3, "click"], ["title", "Einmaliger Soforteffekt", 1, "rpg-button", "small", "consumable-button", 3, "click"], [1, "rpg-button", "small", "equipment-button", 3, "click", "title"]],
      template: function InventoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Inventar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, InventoryComponent_div_3_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, InventoryComponent_div_5_Template, 15, 9, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.items.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
      styles: [".inventory[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--rpg-highlight);\n}\n.inventory[_ngcontent-%COMP%]   .empty-note[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9rem;\n  color: #aaa;\n  padding: 1rem 0;\n}\n.inventory[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  overflow-y: auto;\n  width: 100%;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  background: #2b1f13;\n  border: 2px solid #e3b873;\n  border-radius: 10px;\n  padding: 0.75rem;\n  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6);\n  align-items: flex-start;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 6px;\n  border: 1px solid #444;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #f5c96f;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   .item-type[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #aaa;\n  font-style: italic;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #ddd;\n  margin-bottom: 0.2rem;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-bonuses[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  font-size: 0.75rem;\n  color: #d3f5a0;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-bonuses[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #1f140b;\n  border: 1px solid #444;\n  padding: 0.2rem 0.4rem;\n  border-radius: 6px;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.inventory[_ngcontent-%COMP%]   .item-card[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%]   .rpg-button.small[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.3rem 0.75rem;\n}\n\n.item-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n.item-actions[_ngcontent-%COMP%]   .rpg-button.small[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.3rem 0.75rem;\n  border-radius: 6px;\n}\n.item-actions[_ngcontent-%COMP%]   .buff-button[_ngcontent-%COMP%] {\n  background-color: #4e8d63;\n  color: #fff;\n  border: 1px solid #2f5c3c;\n}\n.item-actions[_ngcontent-%COMP%]   .consumable-button[_ngcontent-%COMP%] {\n  background-color: #a9714b;\n  color: #fff;\n  border: 1px solid #774d2d;\n}\n.item-actions[_ngcontent-%COMP%]   .equipment-button[_ngcontent-%COMP%] {\n  background-color: #4a4a7f;\n  color: #fff;\n  border: 1px solid #2e2e59;\n}\n.item-actions[_ngcontent-%COMP%]   .buff-button[_ngcontent-%COMP%]:hover, .item-actions[_ngcontent-%COMP%]   .consumable-button[_ngcontent-%COMP%]:hover, .item-actions[_ngcontent-%COMP%]   .equipment-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtBQUhKO0FBS0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFITjtBQU1JO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFKTjtBQU1NO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFKUjtBQU1RO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFKVjtBQU9RO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFMVjtBQVNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFQUjtBQVVNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUlI7QUFVUTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBUlY7QUFZTTtFQUNFLGtCQUFBO0FBVlI7QUFZUTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUFWVjs7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBYkY7QUFlRTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQWJKO0FBZ0JFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFkSjtBQWlCRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBZko7QUFrQkU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQWhCSjtBQW1CRTs7O0VBR0UsYUFBQTtFQUNBLGVBQUE7QUFqQkoiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52ZW50b3J5IHtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tcnBnLWhpZ2hsaWdodCk7XHJcbiAgfVxyXG5cclxuICAuZW1wdHktbm90ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMS4yNXJlbTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5pdGVtLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICMyYjFmMTM7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTNiODczO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC5pdGVtLWljb24ge1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tZGV0YWlscyB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGdhcDogMC4zcmVtO1xyXG5cclxuICAgICAgLml0ZW0taGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgICAgIC5pdGVtLW5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNmNWM5NmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbS10eXBlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaXRlbS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW0tYm9udXNlcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZ2FwOiAwLjRyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZDNmNWEwO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZjE0MGI7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0O1xyXG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pdGVtLWFjdGlvbnMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgLnJwZy1idXR0b24uc21hbGwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC43NXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLml0ZW0tYWN0aW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVyZW07XHJcblxyXG4gIC5ycGctYnV0dG9uLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG5cclxuICAuYnVmZi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlOGQ2MztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJmNWMzYztcclxuICB9XHJcblxyXG4gIC5jb25zdW1hYmxlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTk3MTRiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc0ZDJkO1xyXG4gIH1cclxuXHJcbiAgLmVxdWlwbWVudC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE3ZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJlMmU1OTtcclxuICB9XHJcblxyXG4gIC5idWZmLWJ1dHRvbjpob3ZlcixcclxuICAuY29uc3VtYWJsZS1idXR0b246aG92ZXIsXHJcbiAgLmVxdWlwbWVudC1idXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return InventoryComponent;
})();

/***/ }),

/***/ 810:
/*!*************************************************!*\
  !*** ./src/app/components/questlog/questlog.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestlogComponent: () => (/* binding */ QuestlogComponent)
/* harmony export */ });
/* harmony import */ var _core_services_quest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/quest.service */ 2926);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/inventory.service */ 1100);
/* harmony import */ var _core_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/player.service */ 3665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);








function QuestlogComponent_li_11_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuestlogComponent_li_11_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const quest_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.cancelQuest(quest_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u2716 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function QuestlogComponent_li_11_div_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.name);
  }
}
function QuestlogComponent_li_11_div_8_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quest_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("XP: ", quest_r2.rewardXp, "");
  }
}
function QuestlogComponent_li_11_div_8_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quest_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\uD83D\uDCB0: ", quest_r2.rewardMoney, "");
  }
}
function QuestlogComponent_li_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Belohnung:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, QuestlogComponent_li_11_div_8_li_4_Template, 2, 1, "li", 12)(5, QuestlogComponent_li_11_div_8_li_5_Template, 2, 1, "li", 8)(6, QuestlogComponent_li_11_div_8_li_6_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const quest_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", quest_r2.rewardItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", quest_r2.rewardXp);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", quest_r2.rewardMoney);
  }
}
function QuestlogComponent_li_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quest_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Fehlversuche: ", quest_r2.failedAttempts, "");
  }
}
function QuestlogComponent_li_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuestlogComponent_li_11_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const quest_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.startQuest(quest_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Quest starten");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function QuestlogComponent_li_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuestlogComponent_li_11_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const quest_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.completeQuest(quest_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Erledigt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuestlogComponent_li_11_div_11_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const quest_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.failQuest(quest_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Fehlgeschlagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function QuestlogComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, QuestlogComponent_li_11_button_3_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, QuestlogComponent_li_11_div_8_Template, 7, 3, "div", 7)(9, QuestlogComponent_li_11_div_9_Template, 2, 1, "div", 8)(10, QuestlogComponent_li_11_div_10_Template, 3, 0, "div", 9)(11, QuestlogComponent_li_11_div_11_Template, 5, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quest_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("completed", quest_r2.status === "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", quest_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", quest_r2.type === "side" && quest_r2.status === "doing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](quest_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", quest_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Status: ", quest_r2.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (quest_r2.rewardItems == null ? null : quest_r2.rewardItems.length) || quest_r2.rewardXp || quest_r2.rewardMoney);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", quest_r2.failedAttempts);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isInteractiveQuest(quest_r2) && quest_r2.status === "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isInteractiveQuest(quest_r2) && quest_r2.status === "doing");
  }
}
let QuestlogComponent = /*#__PURE__*/(() => {
  class QuestlogComponent {
    questService;
    inventoryService;
    playerService;
    quests = [];
    filter = 'main';
    constructor(questService, inventoryService, playerService) {
      this.questService = questService;
      this.inventoryService = inventoryService;
      this.playerService = playerService;
    }
    ngOnInit() {
      this.questService.getQuests().subscribe(qs => this.quests = qs);
    }
    toggleFilter(type) {
      this.filter = type;
    }
    get filteredQuests() {
      return this.quests.filter(q => q.type === this.filter && q.acquired);
    }
    startQuest(id) {
      this.questService.startQuest(id);
    }
    failQuest(id) {
      this.questService.failQuest(id);
    }
    completeQuest(id) {
      this.questService.markCompleted(id, this.inventoryService, this.playerService);
    }
    // confirmingAction: { type: 'complete' | 'fail'; questId: string } | null = null;
    // openConfirm(type: 'complete' | 'fail', questId: string) {
    //   this.confirmingAction = { type, questId };
    // }
    // cancelConfirm() {
    //   this.confirmingAction = null;
    // }
    // confirmAction() {
    //   if (!this.confirmingAction) return;
    //   const { type, questId } = this.confirmingAction;
    //   if (type === 'complete') this.questService.markCompleted(questId, this.inventoryService, this.playerService);
    //   else this.questService.failQuest(questId);
    //   this.confirmingAction = null;
    // }
    get completedQuestsCount() {
      return this.quests.filter(q => q.status === 'completed').length;
    }
    isInteractiveQuest(quest) {
      const isSide = quest.type === 'side';
      const isTutorial = quest.id === 'tutorial';
      const isFinale = quest.id === 'finale-tracking';
      if (isSide || isTutorial) return true;
      if (isFinale) {
        const otherMainQuests = this.quests.filter(q => q.type === 'main' && q.id !== 'finale-tracking' && q.acquired && q.status !== 'completed' && q.status !== 'failed');
        // Nur interaktiv, wenn KEINE andere Hauptquest mehr aktiv ist
        return otherMainQuests.length === 0;
      }
      return false;
    }
    cancelQuest(id) {
      this.questService.cancelQuest(id);
    }
    static ɵfac = function QuestlogComponent_Factory(t) {
      return new (t || QuestlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_quest_service__WEBPACK_IMPORTED_MODULE_0__.QuestService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: QuestlogComponent,
      selectors: [["app-questlog"]],
      decls: 12,
      vars: 6,
      consts: [[1, "questlog"], [1, "quest-stats"], [1, "filters"], [3, "click"], [3, "completed", 4, "ngFor", "ngForOf"], ["class", "quest-cancel-btn", "title", "Quest abbrechen", 3, "click", 4, "ngIf"], [1, "status", 3, "ngClass"], ["class", "reward", 4, "ngIf"], [4, "ngIf"], ["class", "actions", 4, "ngIf"], ["title", "Quest abbrechen", 1, "quest-cancel-btn", 3, "click"], [1, "reward"], [4, "ngFor", "ngForOf"], [1, "actions"], [1, "rpg-button", 3, "click"]],
      template: function QuestlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Questlog");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuestlogComponent_Template_button_click_6_listener() {
            return ctx.toggleFilter("main");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Hauptquests");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuestlogComponent_Template_button_click_8_listener() {
            return ctx.toggleFilter("side");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Nebenquests");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, QuestlogComponent_li_11_Template, 12, 11, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Abgeschlossene Quests: ", ctx.completedQuestsCount, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.filter === "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.filter === "side");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredQuests);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: ["@charset \"UTF-8\";\n.questlog[_ngcontent-%COMP%] {\n  font-family: var(--rpg-font);\n}\n.questlog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--rpg-highlight);\n}\n.questlog[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n  gap: 0.5rem;\n}\n.questlog[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: var(--rpg-font);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  background-color: #3b2e1e;\n  border: 2px solid #f5c96f;\n  color: #f5c96f;\n  padding: 0.4rem 0.8rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 2px 2px 0 #000;\n}\n.questlog[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #f5c96f;\n  color: #1a1a1a;\n  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.4);\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: 2px solid #f5c96f;\n  background: #3b2e1e;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);\n  color: var(--rpg-text);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n  color: #f5c96f;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  text-decoration: line-through;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]::before {\n  content: \"\u25CF \";\n  margin-right: 0.2rem;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .status.open[_ngcontent-%COMP%] {\n  color: #f5c96f;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .status.doing[_ngcontent-%COMP%] {\n  color: #6ca0b8;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .status.completed[_ngcontent-%COMP%] {\n  color: #c4e38d;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .status.failed[_ngcontent-%COMP%] {\n  color: #888;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  background: #2a1f13;\n  padding: 0.5rem;\n  border-radius: 6px;\n  border: 1px solid #614830;\n  color: var(--rpg-text);\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f5c96f;\n  display: block;\n  margin-bottom: 0.2rem;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .reward[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.2rem 0;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.questlog[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.4rem 0.6rem;\n  flex: 1 1 45%;\n}\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-backdrop[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%] {\n  z-index: 9999;\n  position: relative;\n  background: var(--rpg-panel);\n  border: 2px solid var(--rpg-border);\n  padding: 1rem;\n  border-radius: 8px;\n  text-align: center;\n  max-width: 80%;\n  box-shadow: 0 0 10px #000;\n  color: var(--rpg-text);\n}\n.modal-backdrop[_ngcontent-%COMP%]   .modal-panel[_ngcontent-%COMP%]   .modal-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.quest-cancel-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #aaa;\n  font-size: 0.9rem;\n  float: right;\n  cursor: pointer;\n  padding: 0;\n  margin-left: 0.5rem;\n  font-family: var(--rpg-font);\n  line-height: 1;\n}\n.quest-cancel-btn[_ngcontent-%COMP%]:hover {\n  color: #f5c96f;\n}\n\n.quest-stats[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.75rem;\n  color: #ccc;\n  margin-top: -0.5rem;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9xdWVzdGxvZy9xdWVzdGxvZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDRCQUFBO0FBRUY7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBRUo7QUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUNOO0FBRUk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnREFBQTtBQUFOO0FBS0U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFISjtBQUtJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhOO0FBS007RUFDRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBSFI7QUFNTTtFQUNFLFNBQUE7QUFKUjtBQU9NO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBTFI7QUFRTTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQU5SO0FBUVE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUFOVjtBQVNRO0VBQ0UsY0FBQTtBQVBWO0FBVVE7RUFDRSxjQUFBO0FBUlY7QUFXUTtFQUNFLGNBQUE7QUFUVjtBQVlRO0VBQ0UsV0FBQTtBQVZWO0FBY007RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQVpSO0FBY1E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBWlY7QUFlUTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtBQWJWO0FBZVU7RUFDRSxnQkFBQTtBQWJaO0FBa0JNO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBaEJSO0FBa0JRO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFoQlY7O0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXBCRjtBQXNCRTtFQUNHLGFBQUE7RUFDRCxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBcEJKO0FBc0JJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBcEJOOztBQXdCQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBckJGO0FBdUJFO0VBQ0UsY0FBQTtBQXJCSjs7QUF3QkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFyQkYiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rsb2cge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ycGctZm9udCk7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1ycGctaGlnaGxpZ2h0KTsgLy8gYmxlaWJ0IGltIFRoZW1lXHJcbiAgfVxyXG5cclxuICAuZmlsdGVycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXJwZy1mb250KTtcclxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IyZTFlO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjVjOTZmO1xyXG4gICAgICBjb2xvcjogI2Y1Yzk2ZjtcclxuICAgICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMCAjMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjOTZmO1xyXG4gICAgICBjb2xvcjogIzFhMWExYTtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y1Yzk2ZjtcclxuICAgICAgYmFja2dyb3VuZDogIzNiMmUxZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgY29sb3I6IHZhcigtLXJwZy10ZXh0KTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICNmNWM5NmY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jb21wbGV0ZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnw6LCl8KPICc7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYub3BlbiB7XHJcbiAgICAgICAgICBjb2xvcjogI2Y1Yzk2ZjsgLy8gZ29sZGVuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmRvaW5nIHtcclxuICAgICAgICAgIGNvbG9yOiAjNmNhMGI4OyAvLyB3YXJtZXMgUmV0cm8tQmxhdVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5jb21wbGV0ZWQge1xyXG4gICAgICAgICAgY29sb3I6ICNjNGUzOGQ7IC8vIHNhbmZ0ZXMgR3LDg8K8blxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mYWlsZWQge1xyXG4gICAgICAgICAgY29sb3I6ICM4ODg7IC8vIGRlYWt0aXZpZXJ0IHN0YXR0IHJvdFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnJld2FyZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyYTFmMTM7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjE0ODMwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ycGctdGV4dCk7XHJcblxyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICBjb2xvcjogI2Y1Yzk2ZjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjJyZW07XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMC42cmVtO1xyXG4gICAgICAgICAgZmxleDogMSAxIDQ1JTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLm1vZGFsLXBhbmVsIHtcclxuICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcnBnLXBhbmVsKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXJwZy1ib3JkZXIpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzAwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1ycGctdGV4dCk7XHJcblxyXG4gICAgLm1vZGFsLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucXVlc3QtY2FuY2VsLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXJwZy1mb250KTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2Y1Yzk2ZjtcclxuICB9XHJcbn1cclxuLnF1ZXN0LXN0YXRzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIG1hcmdpbi10b3A6IC0wLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return QuestlogComponent;
})();

/***/ }),

/***/ 7350:
/*!*****************************************!*\
  !*** ./src/app/components/shop/shop.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopComponent: () => (/* binding */ ShopComponent)
/* harmony export */ });
/* harmony import */ var C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/inventory.service */ 1100);
/* harmony import */ var _core_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/player.service */ 3665);
/* harmony import */ var _core_services_sound_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/sound.service */ 3455);
/* harmony import */ var _core_services_game_save_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/game-save.service */ 2200);
/* harmony import */ var _core_services_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/shop.service */ 3108);
/* harmony import */ var _views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @views/toasts/toast.service */ 8258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);















function ShopComponent_div_4_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Verf\u00FCgbar: ", item_r2.stock, "");
  }
}
function ShopComponent_div_4_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Ausverkauft");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ShopComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 5)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ShopComponent_div_4_p_9_Template, 2, 1, "p", 6)(10, ShopComponent_div_4_p_10_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ShopComponent_div_4_Template_button_click_11_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.buy(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Kaufen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", "assets/icons/" + item_r2.icon, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Preis: ", item_r2.price, " Gil");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r2.stock > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r2.stock === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", item_r2.stock === 0);
  }
}
let ShopComponent = /*#__PURE__*/(() => {
  class ShopComponent {
    inventoryService;
    playerService;
    soundService;
    shopService;
    gameSave;
    toast;
    itemsForSale = [];
    constructor(inventoryService, playerService, soundService, shopService, gameSave, toast) {
      this.inventoryService = inventoryService;
      this.playerService = playerService;
      this.soundService = soundService;
      this.shopService = shopService;
      this.gameSave = gameSave;
      this.toast = toast;
    }
    ngOnInit() {
      this.shopService.getShopItems().subscribe(items => {
        this.itemsForSale = items;
      });
    }
    buy(item) {
      var _this = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (item.stock <= 0) return;
        if (_this.playerService.pay(item.price)) {
          const purchasedItem = {
            ...item,
            acquiredAt: new Date()
          };
          _this.inventoryService.addItem(purchasedItem);
          _this.shopService.updateStock(item.id, -1);
          try {
            yield _this.gameSave.updateCurrentGame();
            _this.soundService.playEffect('item-kaufen');
            _this.toast.show(`Gekauft: ${item.name}`);
          } catch (err) {
            console.error('Fehler beim Speichern:', err);
            //this.showMessage('Fehler beim Speichern!');
          }
        } else {
          _this.toast.show('Nicht genug Gil!');
        }
      })();
    }
    static ɵfac = function ShopComponent_Factory(t) {
      return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_sound_service__WEBPACK_IMPORTED_MODULE_3__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_shop_service__WEBPACK_IMPORTED_MODULE_5__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_game_save_service__WEBPACK_IMPORTED_MODULE_4__.GameSaveService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ShopComponent,
      selectors: [["app-shop"]],
      decls: 5,
      vars: 1,
      consts: [[1, "shop"], [1, "item-list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "item-icon", 3, "src"], [1, "item-info"], [4, "ngIf"], ["class", "sold-out", 4, "ngIf"], [1, "rpg-button", "small", 3, "click", "disabled"], [1, "sold-out"]],
      template: function ShopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Shop");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ShopComponent_div_4_Template, 13, 7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.itemsForSale);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
      styles: [".shop[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  color: var(--rpg-highlight);\n}\n.shop[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  overflow-y: auto;\n  width: 100%;\n}\n.shop[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  background: #2b1f13;\n  border: 2px solid #e3b873;\n  border-radius: 10px;\n  padding: 0.75rem;\n  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6);\n  align-items: flex-start;\n}\n.shop[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img.item-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 6px;\n  border: 1px solid #444;\n}\n.shop[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.shop[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #f5c96f;\n}\n.shop[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.1rem 0;\n  font-size: 0.85rem;\n  color: #ddd;\n}\n.shop[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   p.sold-out[_ngcontent-%COMP%] {\n  color: #c44;\n  font-weight: bold;\n}\n.shop[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .rpg-button.small[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.3rem 0.75rem;\n  align-self: flex-start;\n  background-color: #4a4a7f;\n  color: #fff;\n  border: 1px solid #2e2e59;\n}\n.shop[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .rpg-button.small[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.shop[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .rpg-button.small[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.shop[_ngcontent-%COMP%]   .shop-toast[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #2e8b57;\n  color: white;\n  padding: 0.6rem 1.2rem;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);\n  z-index: 10;\n  pointer-events: none;\n  text-align: center;\n  animation: toastFade 3s ease-out forwards;\n  max-width: 90%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3Auc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBRk47QUFLSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBSE47QUFLTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSFI7QUFNTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSlI7QUFNUTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUpWO0FBUU07RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQU5SO0FBUVE7RUFDRSxhQUFBO0FBTlY7QUFTUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQVBWO0FBYUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxjQUFBO0FBWEoiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvcCB7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLXJwZy1oaWdobGlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMS4yNXJlbTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmIxZjEzO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UzYjg3MztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICBpbWcuaXRlbS1pY29uIHtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWluZm8ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBnYXA6IDAuM3JlbTtcclxuXHJcbiAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjZjVjOTZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDAuMXJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICBjb2xvcjogI2RkZDtcclxuXHJcbiAgICAgICAgJi5zb2xkLW91dCB7XHJcbiAgICAgICAgICBjb2xvcjogI2M0NDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnJwZy1idXR0b24uc21hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjc1cmVtO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE3ZjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmUyZTU5O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2hvcC10b2FzdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmU4YjU3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC42cmVtIDEuMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYW5pbWF0aW9uOiB0b2FzdEZhZGUgM3MgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ShopComponent;
})();

/***/ }),

/***/ 1680:
/*!*******************************************!*\
  !*** ./src/app/components/stats/stats.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatsComponent: () => (/* binding */ StatsComponent)
/* harmony export */ });
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/inventory.service */ 1100);
/* harmony import */ var _core_services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/player.service */ 3665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);







const _c0 = (a0, a1) => ({
  positive: a0,
  negative: a1
});
function StatsComponent_div_11_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const key_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r2.getBonusSourcesTooltip(key_r2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx_r2.getBonus(key_r2) > 0, ctx_r2.getBonus(key_r2) < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.getBonusPrefix(key_r2), "", ctx_r2.getBonus(key_r2), " ");
  }
}
function StatsComponent_div_11_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "+0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function StatsComponent_div_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StatsComponent_div_11_div_15_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.gilAmount, $event) || (ctx_r2.gilAmount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatsComponent_div_11_div_15_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changeGil());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00C4ndern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.gilAmount);
  }
}
function StatsComponent_div_11_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StatsComponent_div_11_div_16_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.hpAmount, $event) || (ctx_r2.hpAmount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatsComponent_div_11_div_16_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changeHp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00C4ndern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.hpAmount);
  }
}
function StatsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StatsComponent_div_11_Template_span_click_3_listener() {
      const key_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](key_r2 === "money" ? ctx_r2.toggleGilEditing() : key_r2 === "hp" ? ctx_r2.toggleHpEditing() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 16)(6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, StatsComponent_div_11_ng_container_8_Template, 3, 7, "ng-container", 18)(9, StatsComponent_div_11_ng_template_9_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, StatsComponent_div_11_div_15_Template, 4, 1, "div", 21)(16, StatsComponent_div_11_div_16_Template, 4, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    const key_r2 = ctx.$implicit;
    const bonusPlaceholder_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.statIcon(key_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("cursor", key_r2 === "money" || key_r2 === "hp" ? "pointer" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getStatLabel(key_r2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_6_0 = ctx_r2.baseStats == null ? null : ctx_r2.baseStats[key_r2]) !== null && tmp_6_0 !== undefined ? tmp_6_0 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.getBonus(key_r2) !== 0)("ngIfElse", bonusPlaceholder_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getTotal(key_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", key_r2 === "money" && ctx_r2.gilEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", key_r2 === "hp" && ctx_r2.hpEditing);
  }
}
function StatsComponent_div_16_ng_container_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", stat_r7, " ");
  }
}
function StatsComponent_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 32)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StatsComponent_div_16_ng_container_1_span_6_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const slot_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/icons/" + ((tmp_4_0 = ctx_r2.getEquippedItem(slot_r8)) == null ? null : tmp_4_0.icon), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", (tmp_5_0 = ctx_r2.getEquippedItem(slot_r8)) == null ? null : tmp_5_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_6_0 = ctx_r2.getEquippedItem(slot_r8)) == null ? null : tmp_6_0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getStatBonuses(ctx_r2.getEquippedItem(slot_r8)));
  }
}
function StatsComponent_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const slot_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.slotLabels[slot_r8]);
  }
}
function StatsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StatsComponent_div_16_ng_container_1_Template, 7, 4, "ng-container", 18)(2, StatsComponent_div_16_ng_template_2_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slot_r8 = ctx.$implicit;
    const empty_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.getEquippedItem(slot_r8))("ngIfElse", empty_r9);
  }
}
let StatsComponent = /*#__PURE__*/(() => {
  class StatsComponent {
    playerService;
    inventoryService;
    baseStats = null;
    bonusStats = {};
    equippedItems = [];
    activeBuffs = [];
    XP_TABLE = [0, 100, 200, 350, 500, 700, 950, 1200, 1500, 1900];
    // Slots in gewünschter Reihenfolge
    equipmentSlots = ['head', 'chest', 'hands', 'legs', 'feet', 'weapon', 'back', 'shoulders', 'belt', 'wrist'];
    slotLabels = {
      head: 'Kopf',
      chest: 'Brust',
      hands: 'Hände',
      legs: 'Beine',
      feet: 'Füße',
      weapon: 'Waffe',
      back: 'Rücken',
      shoulders: 'Schultern',
      belt: 'Gürtel',
      wrist: 'Handgelenke'
    };
    statsKeys = ['hp', 'strength', 'agility', 'intelligence', 'money'];
    constructor(playerService, inventoryService) {
      this.playerService = playerService;
      this.inventoryService = inventoryService;
    }
    ngOnInit() {
      this.playerService.getPlayer().subscribe(p => {
        if (!p) return;
        this.playerService.removeExpiredBuffs();
        const effectiveStats = this.playerService.getEffectiveStats();
        if (!effectiveStats) return;
        this.baseStats = p;
        this.equippedItems = p.equippedItems ?? [];
        this.bonusStats = {
          strength: effectiveStats.strength - p.strength,
          agility: effectiveStats.agility - p.agility,
          intelligence: effectiveStats.intelligence - p.intelligence,
          hp: effectiveStats.hp - p.hp
        };
        this.activeBuffs = (p.activeBuffs ?? []).filter(buff => {
          const validUntil = buff.validUntil;
          return !validUntil || validUntil > new Date();
        });
      });
    }
    getBonus(key) {
      const value = this.bonusStats?.[key];
      return typeof value === 'number' ? value : 0;
    }
    getBonusPrefix(key) {
      const bonus = this.getBonus(key);
      return bonus > 0 ? '+' : '';
    }
    // Hilfsfunktion für Tooltip
    formatBuffTooltip(buff) {
      const untilRaw = buff.validUntil;
      const until = typeof untilRaw === 'string' ? new Date(untilRaw) : untilRaw;
      const timeLeft = until instanceof Date ? Math.ceil((until.getTime() - Date.now()) / 60000) : null;
      const bonuses = Object.entries(buff.bonusStats ?? {}).map(([key, val]) => `${this.getStatLabel(key)} +${val}`).join(', ');
      return `${bonuses}${timeLeft !== null ? `\n🕒 ${timeLeft} Min aktiv` : ''}`;
    }
    statIcon(stat) {
      switch (stat) {
        case 'strength':
          return '🗡️';
        case 'agility':
          return '🎯';
        case 'intelligence':
          return '🧠';
        case 'hp':
          return '❤️';
        case 'money':
          return '💰';
        case 'level':
          return '⭐';
        case 'experience':
          return '📘';
        default:
          return '';
      }
    }
    getEquippedItem(slot) {
      return this.equippedItems.find(i => i.slot === slot);
    }
    getXpPercent() {
      const currentXp = this.baseStats?.experience ?? 0;
      const xpForNext = 100; // Beispiel – oder dynamisch
      return Math.min(currentXp / xpForNext * 100, 100);
    }
    getXpProgress() {
      const stats = this.baseStats;
      if (!stats) return 0;
      const currentLevel = stats.level ?? 1;
      const totalXp = stats.experience ?? 0;
      if (currentLevel >= this.XP_TABLE.length) return 100; // Max-Level erreicht
      const xpAtCurrent = this.XP_TABLE[currentLevel - 1];
      const xpAtNext = this.XP_TABLE[currentLevel];
      const progress = (totalXp - xpAtCurrent) / (xpAtNext - xpAtCurrent) * 100;
      return Math.max(0, Math.min(100, Math.floor(progress)));
    }
    getStatBonuses(item) {
      if (!item?.bonusStats) return [];
      return Object.entries(item.bonusStats).map(([stat, val]) => {
        const icon = this.statIcon(stat);
        return `${icon} +${val}`;
      });
    }
    getBonusSourcesTooltip(stat) {
      const sources = [];
      const allItems = [...(this.baseStats?.equippedItems ?? []), ...(this.activeBuffs ?? [])];
      for (const item of allItems) {
        const bonus = item.bonusStats?.[stat];
        if (bonus && typeof bonus === 'number') {
          const label = item.type === 'buff' ? `Buff: ${item.name}` : item.name;
          sources.push(`+${bonus} durch ${label}`);
        }
      }
      return sources.length > 0 ? sources.join('\n') : 'Kein Bonus';
    }
    isNumericBonus(key) {
      const numericKeys = ['strength', 'agility', 'intelligence', 'hp'];
      return numericKeys.includes(key);
    }
    gilAmount = 0;
    changeGil() {
      if (this.gilAmount === 0) return;
      if (this.gilAmount > 0) {
        this.playerService.addMoney(this.gilAmount);
      } else {
        const success = this.playerService.pay(Math.abs(this.gilAmount));
        if (!success) {
          alert('Nicht genug Gil!');
        }
      }
      this.gilAmount = 0; // zurücksetzen
    }
    getStatLabel(stat) {
      const labels = {
        hp: 'HP',
        strength: 'Stärke',
        agility: 'Geschicklichkeit',
        intelligence: 'Intelligenz',
        money: 'Gil',
        level: 'Level',
        experience: 'Erfahrung'
      };
      return labels[stat] ?? stat;
    }
    isBonusPositive(stat) {
      return Number(this.bonusStats[stat] ?? 0) > 0;
    }
    getTotal(stat) {
      const base = this.baseStats?.[stat] ?? 0;
      const bonus = this.bonusStats[stat] ?? 0;
      return base + bonus;
    }
    hpEditing = false;
    hpAmount = 0;
    toggleHpEditing() {
      this.hpEditing = !this.hpEditing;
    }
    changeHp() {
      if (this.hpAmount === 0) return;
      this.playerService.heal(this.hpAmount); // negativ oder positiv erlaubt
      this.hpAmount = 0;
    }
    gilEditing = false;
    toggleGilEditing() {
      this.gilEditing = !this.gilEditing;
    }
    static ɵfac = function StatsComponent_Factory(t) {
      return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: StatsComponent,
      selectors: [["app-stats"]],
      decls: 17,
      vars: 6,
      consts: [["bonusPlaceholder", ""], ["empty", ""], [1, "stats-wrapper"], [1, "level-display"], [1, "level-label"], [1, "xp-bar"], [1, "xp-fill"], [1, "xp-label"], [1, "stats-card"], ["class", "stat-row", 4, "ngFor", "ngForOf"], [1, "equipment-section"], [1, "equipment-slots"], ["class", "slot-card", 4, "ngFor", "ngForOf"], [1, "stat-row"], [1, "stat-icon"], [1, "stat-label", 3, "click"], [1, "stat-block"], [1, "stat-base"], [4, "ngIf", "ngIfElse"], [1, "stat-equals"], [1, "stat-total"], ["class", "gil-edit-collapse", 4, "ngIf"], ["class", "hp-edit-collapse", 4, "ngIf"], [1, "stat-bonus", 3, "title", "ngClass"], [1, "stat-bonus", "invisible"], [1, "gil-edit-collapse"], ["type", "number", "placeholder", "Betrag", 3, "ngModelChange", "ngModel"], [3, "click"], [1, "hp-edit-collapse"], ["type", "number", "placeholder", "HP \u00E4ndern", 3, "ngModelChange", "ngModel"], [1, "slot-card"], [1, "slot-icon", 3, "src", "alt"], [1, "slot-info"], [1, "bonuses"], [4, "ngFor", "ngForOf"], ["src", "assets/icons/equipment-slot.svg", 1, "slot-icon"]],
      template: function StatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\uD83E\uDDFE Statuswerte");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, StatsComponent_div_11_Template, 17, 10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\uD83D\uDEE1\uFE0F Ausr\u00FCstung");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, StatsComponent_div_16_Template, 4, 2, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2B50 Level ", ctx.baseStats == null ? null : ctx.baseStats.level, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.getXpProgress(), "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.baseStats == null ? null : ctx.baseStats.experience, " XP");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.statsKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.equipmentSlots);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: [".stats-wrapper[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #1c1b2a;\n  border: 2px solid #ffc76a;\n  border-radius: 12px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  max-width: 480px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.level-display[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.level-display[_ngcontent-%COMP%]   .level-label[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #ff5b99;\n}\n.level-display[_ngcontent-%COMP%]   .xp-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12px;\n  background-color: #333;\n  border-radius: 6px;\n  overflow: hidden;\n  margin: 0.5rem 0;\n}\n.level-display[_ngcontent-%COMP%]   .xp-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #61dafb;\n  transition: width 0.3s ease-in-out;\n}\n.level-display[_ngcontent-%COMP%]   .xp-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #ccc;\n}\n\n.stats-card[_ngcontent-%COMP%] {\n  background-color: #25253a;\n  border: 1px solid #444;\n  border-radius: 8px;\n  padding: 1rem;\n}\n.stats-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffcb74;\n  margin-bottom: 1rem;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #111;\n  border-radius: 6px;\n  padding: 0.25rem 0.5rem;\n  margin-bottom: 0.3rem;\n  font-family: \"Press Start 2P\", monospace;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  text-align: center;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-left: 0.5rem;\n  font-weight: bold;\n  color: #fff;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  min-width: 140px;\n  gap: 0.4rem;\n  font-family: monospace;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-block[_ngcontent-%COMP%]   .stat-base[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  text-align: right;\n  color: #ddd;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-block[_ngcontent-%COMP%]   .stat-bonus[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  text-align: right;\n  font-weight: bold;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-block[_ngcontent-%COMP%]   .stat-bonus.positive[_ngcontent-%COMP%] {\n  color: #7ffb7f;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-block[_ngcontent-%COMP%]   .stat-bonus.negative[_ngcontent-%COMP%] {\n  color: #ff6b6b;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-block[_ngcontent-%COMP%]   .stat-bonus.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-block[_ngcontent-%COMP%]   .stat-bonus-placeholder[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-block[_ngcontent-%COMP%]   .stat-equals[_ngcontent-%COMP%] {\n  width: 1rem;\n  text-align: center;\n  color: #aaa;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-row[_ngcontent-%COMP%]   .stat-block[_ngcontent-%COMP%]   .stat-total[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  text-align: right;\n  font-weight: bold;\n  color: white;\n}\n\n.equipment-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.equipment-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n  color: #ff7a99;\n}\n\n.equipment-slots[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.equipment-slots[_ngcontent-%COMP%]   .slot-card[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  border: 2px solid #555;\n  border-radius: 8px;\n  padding: 0.5rem;\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.equipment-slots[_ngcontent-%COMP%]   .slot-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.equipment-slots[_ngcontent-%COMP%]   .slot-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.equipment-slots[_ngcontent-%COMP%]   .slot-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #fefefe;\n}\n.equipment-slots[_ngcontent-%COMP%]   .slot-info[_ngcontent-%COMP%]   .bonuses[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #d3f5a0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.3rem;\n}\n\n.buff-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n  transition: transform 0.3s ease;\n}\n\n.buff-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.gil-adjust[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.gil-adjust[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-size: 1rem;\n}\n.gil-adjust[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #333;\n  color: white;\n  padding: 0.5rem;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n}\n.gil-adjust[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #555;\n}\n\n.gil-edit-collapse[_ngcontent-%COMP%], .hp-edit-collapse[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  margin-left: 1.5rem;\n}\n.gil-edit-collapse[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .hp-edit-collapse[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n  font-size: 0.9rem;\n  padding: 0.25rem 0.5rem;\n}\n.gil-edit-collapse[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .hp-edit-collapse[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 0.25rem 0.5rem;\n  background: #444;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.gil-edit-collapse[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .hp-edit-collapse[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #666;\n}\n\n.hp-edit-collapse[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n  font-size: 0.9rem;\n  padding: 0.25rem 0.5rem;\n}\n.hp-edit-collapse[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 0.25rem 0.5rem;\n  background: #444;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.hp-edit-collapse[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #666;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0px var(--rpg-highlight);\n  }\n  50% {\n    box-shadow: 0 0 6px var(--rpg-highlight);\n  }\n  100% {\n    box-shadow: 0 0 0px var(--rpg-highlight);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdGF0cy9zdGF0cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFIRjtBQUtFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtBQUpKO0FBTUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFKTjtBQU9JO0VBQ0UsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBTE47QUFRSTtFQUNGLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFORjtBQVFFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQU5KO0FBU0U7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVBGO0FBU0U7RUFDRSxjQUFBO0FBUEo7QUFVRTtFQUNFLGNBQUE7QUFSSjtBQVdFO0VBQ0Usa0JBQUE7QUFUSjtBQWVFO0VBQ0UsYUFBQTtBQWJKO0FBZ0JFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWRKO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBZko7O0FBd0JBO0VBQ0UsZ0JBQUE7QUFyQkY7QUF1QkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXJCSjs7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBdEJGO0FBd0JFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUF0Qko7QUF5QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdkJKO0FBMEJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBeEJKO0FBMEJJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBeEJOO0FBMkJJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBekJOOztBQThCQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUEzQkY7O0FBOEJBO0VBQ0UscUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBM0JGO0FBNkJFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUEzQko7QUE4QkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTVCSjtBQStCRTtFQUNFLGdCQUFBO0FBN0JKOztBQWdDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUE3QkY7QUErQkU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQTdCSjtBQWdDRTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBOUJKO0FBaUNFO0VBQ0UsZ0JBQUE7QUEvQko7O0FBcUNFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQW5DSjtBQXNDRTtFQUNFLGdCQUFBO0FBcENKOztBQTBDQTtFQUNFO0lBQ0Usd0NBQUE7RUF2Q0Y7RUEwQ0E7SUFDRSx3Q0FBQTtFQXhDRjtFQTJDQTtJQUNFLHdDQUFBO0VBekNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHMtd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWIyYTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZjNzZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIG1heC13aWR0aDogNDgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubGV2ZWwtZGlzcGxheSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuXHJcbiAgLmxldmVsLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmNWI5OTtcclxuICB9XHJcblxyXG4gIC54cC1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgfVxyXG5cclxuICAueHAtZmlsbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFkYWZiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC54cC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBjb2xvcjogI2NjYztcclxuICB9XHJcbn1cclxuXHJcbi5zdGF0cy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTNhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiAjZmZjYjc0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5zdGF0LXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6ICMxMTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBtb25vc3BhY2U7XHJcblxyXG4gICAgLnN0YXQtaWNvbiB7XHJcbiAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdC1sYWJlbCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXQtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMTQwcHg7XHJcbiAgZ2FwOiAwLjRyZW07XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuXHJcbiAgLnN0YXQtYmFzZSB7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2RkZDtcclxuICB9XHJcblxyXG4gIC5zdGF0LWJvbnVzIHtcclxuICB3aWR0aDogMi41cmVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAmLnBvc2l0aXZlIHtcclxuICAgIGNvbG9yOiAjN2ZmYjdmO1xyXG4gIH1cclxuXHJcbiAgJi5uZWdhdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmNmI2YjtcclxuICB9XHJcblxyXG4gICYuaW52aXNpYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbiAgXHJcblxyXG4gIC5zdGF0LWJvbnVzLXBsYWNlaG9sZGVyIHtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAuc3RhdC1lcXVhbHMge1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICB9XHJcblxyXG4gIC5zdGF0LXRvdGFsIHtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLmVxdWlwbWVudC1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG5cclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgY29sb3I6ICNmZjdhOTk7XHJcbiAgfVxyXG59XHJcblxyXG4uZXF1aXBtZW50LXNsb3RzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDAuNzVyZW07XHJcblxyXG4gIC5zbG90LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogIzFhMWExYTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNsb3QtaWNvbiB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG5cclxuICAuc2xvdC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgY29sb3I6ICNmZWZlZmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvbnVzZXMge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIGNvbG9yOiAjZDNmNWEwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGdhcDogMC4zcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ1ZmYtbGlzdCBsaSBpbWcge1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMS41cyBpbmZpbml0ZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYnVmZi1saXN0IGxpIGltZzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4uZ2lsLWFkanVzdCB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjVyZW07XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgfVxyXG59XHJcbi5naWwtZWRpdC1jb2xsYXBzZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICM0NDQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjtcclxuICB9XHJcbn1cclxuLmhwLWVkaXQtY29sbGFwc2Uge1xyXG4gIEBleHRlbmQgLmdpbC1lZGl0LWNvbGxhcHNlO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM2NjY7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwcHggdmFyKC0tcnBnLWhpZ2hsaWdodCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCB2YXIoLS1ycGctaGlnaGxpZ2h0KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDBweCB2YXIoLS1ycGctaGlnaGxpZ2h0KTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return StatsComponent;
})();

/***/ }),

/***/ 2687:
/*!**********************************************!*\
  !*** ./src/app/views/game/game.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameComponent: () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_questlog_questlog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/questlog/questlog */ 810);
/* harmony import */ var _components_inventory_inventory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/inventory/inventory */ 6044);
/* harmony import */ var _components_stats_stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/stats/stats */ 1680);
/* harmony import */ var _components_boss_list_boss_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/boss-list/boss-list */ 3472);
/* harmony import */ var _components_shop_shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shop/shop */ 7350);









const _c0 = () => [0, 1, 2, 3, 4];
function GameComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GameComponent_button_1_Template_button_click_0_listener() {
      const idx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.currentIndex = idx_r2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const idx_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.currentIndex === idx_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r2.navLabels[idx_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "assets/icons/" + ctx_r2.navIcons[idx_r2], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
let GameComponent = /*#__PURE__*/(() => {
  class GameComponent {
    router;
    currentIndex = 0;
    maxIndex = 4;
    navIcons = ['skills.svg', 'backpack.svg', 'scroll-quill.svg', 'brute.svg', 'swap-bag.svg'];
    navLabels = ['Charakter', 'Inventar', 'Quests', 'Bosse', 'Shop'];
    constructor(router) {
      this.router = router;
    }
    // Optional: mit Touch-Events
    startX = 0;
    onTouchStart(event) {
      this.startX = event.touches[0].clientX;
    }
    onTouchEnd(event) {
      const endX = event.changedTouches[0].clientX;
      const diff = endX - this.startX;
      if (diff > 50 && this.currentIndex > 0) {
        this.currentIndex--;
      } else if (diff < -50 && this.currentIndex < this.maxIndex) {
        this.currentIndex++;
      }
    }
    openScanner() {
      this.router.navigate(['/scanner']);
    }
    static ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-game"]],
      hostBindings: function GameComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("touchstart", function GameComponent_touchstart_HostBindingHandler($event) {
            return ctx.onTouchStart($event);
          })("touchend", function GameComponent_touchend_HostBindingHandler($event) {
            return ctx.onTouchEnd($event);
          });
        }
      },
      decls: 29,
      vars: 4,
      consts: [[1, "top-nav"], [3, "active", "title", "click", 4, "ngFor", "ngForOf"], [1, "game-wrapper"], [1, "slider-viewport"], [1, "slider-container"], [1, "slide"], [1, "slide-inner"], [1, "footer-divider"], [1, "swipe-footer"], [1, "swipe-controls"], [3, "click"], ["title", "QR-Code scannen", 1, "qr-scan-button", 3, "click"], ["src", "assets/icons/eye-target.svg", "alt", "QR-Scanner", 1, "icon", "qr-icon"], [3, "click", "title"], [1, "nav-icon", 3, "src"]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, GameComponent_button_1_Template, 2, 4, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-stats");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-inventory");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-questlog");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "app-boss-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 5)(18, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "app-shop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 8)(22, "div", 9)(23, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GameComponent_Template_button_click_23_listener() {
            return ctx.currentIndex = (ctx.currentIndex - 1 + 5) % 5;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\u25C0");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GameComponent_Template_button_click_25_listener() {
            return ctx.currentIndex = (ctx.currentIndex + 1) % 5;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "\u25B6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GameComponent_Template_button_click_27_listener() {
            return ctx.openScanner();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("transform", "translateX(-" + ctx.currentIndex * 100 + "%)");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _components_questlog_questlog__WEBPACK_IMPORTED_MODULE_0__.QuestlogComponent, _components_inventory_inventory__WEBPACK_IMPORTED_MODULE_1__.InventoryComponent, _components_stats_stats__WEBPACK_IMPORTED_MODULE_2__.StatsComponent, _components_boss_list_boss_list__WEBPACK_IMPORTED_MODULE_3__.BossListComponent, _components_shop_shop__WEBPACK_IMPORTED_MODULE_4__.ShopComponent],
      styles: [".swipe-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: var(--rpg-panel);\n  border-top: 2px solid var(--rpg-border);\n  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.6);\n  padding: 0.75rem 0 1.5rem;\n  gap: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.swipe-footer[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 6px;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);\n  position: absolute;\n  top: -6px;\n  left: 0;\n}\n\n.slider-viewport[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  overflow: hidden;\n  position: relative;\n  padding-top: 3.5rem;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  transition: transform 0.3s ease-in-out;\n}\n\n.slide[_ngcontent-%COMP%] {\n  flex: 0 0 100vw;\n  min-height: 100vh;\n  box-sizing: border-box;\n  overflow-y: auto;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 1rem;\n  padding-top: 0rem;\n}\n\n.slide-inner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  height: 9rem;\n}\n\n.slide-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  padding: 1rem;\n  padding-bottom: 8rem;\n  padding-top: 0rem;\n  box-sizing: border-box;\n}\n@media (max-width: 480px) {\n  .slide-inner[_ngcontent-%COMP%] {\n    padding: 1.25rem 1.5rem;\n    padding-right: 3rem;\n    padding-left: 0rem;\n    padding-top: 0rem;\n  }\n}\n\n.game-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.slider-viewport[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 0.5rem;\n}\n\n.swipe-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.swipe-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #777;\n  transition: color 0.3s ease;\n}\n.swipe-indicator[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--rpg-highlight);\n}\n\n.qr-scan-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  z-index: 999;\n  background: var(--rpg-accent);\n  border: 2px solid var(--rpg-border);\n  border-radius: 50%;\n  padding: 0.6rem;\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  box-shadow: 2px 2px 0 #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.qr-scan-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  filter: brightness(1.2);\n}\n.qr-scan-button[_ngcontent-%COMP%]:hover {\n  background: var(--rpg-highlight);\n}\n\n.qr-icon[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.swipe-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  background: linear-gradient(to bottom, #37425b, #37425b);\n  border: 2px solid var(--rpg-border);\n  border-radius: 10px;\n  padding: 0.5rem 1rem;\n  box-shadow: 2px 2px 0 #000;\n  text-shadow: 0 0 2px #000;\n  transition: all 0.3s ease;\n}\n.swipe-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--rpg-highlight);\n  color: #fff;\n  box-shadow: 0 0 8px var(--rpg-highlight);\n}\n\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 999;\n  background: transparent;\n}\n.top-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--rpg-border);\n  border-right: none;\n  background-color: rgb(22, 33, 62);\n  padding: 0.4rem 0;\n  cursor: pointer;\n  transition: background 0.3s ease;\n  filter: grayscale(1) brightness(0.7);\n}\n.top-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid var(--rpg-border);\n}\n.top-nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: var(--rpg-accent);\n  box-shadow: inset 0 0 6px var(--rpg-highlight);\n  filter: none;\n}\n.top-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: grayscale(0.2) brightness(1.1);\n}\n.top-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvRUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFDSjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBQUY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUZGO0FBSUU7RUFSRjtJQVNJLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUlFO0VBQ0UsMkJBQUE7QUFGSjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpGO0FBTUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBSko7QUFPRTtFQUNFLGdDQUFBO0FBTEo7O0FBU0E7RUFDRSxrQ0FBQTtBQU5GOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSx3REFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQU5GO0FBUUU7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQU5KOztBQVVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBUEY7QUFTRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLGdDQUFBO0VBQ0Esb0NBQUE7QUFUSjtBQVdJO0VBQ0UseUNBQUE7QUFUTjtBQVlJO0VBQ0UsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLFlBQUE7QUFWTjtBQWFJO0VBQ0Usc0NBQUE7QUFYTjtBQWNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFaTiIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZS1mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ycGctcGFuZWwpO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ycGctYm9yZGVyKTtcclxuICBib3gtc2hhZG93OiAwIC01cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcGFkZGluZzogMC43NXJlbSAwIDEuNXJlbTsgLy8gPC0tLSBXZW5pZ2VyIG9iZW4gJiB1bnRlblxyXG4gIGdhcDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2cHg7IC8vIGV0d2FzIGRlemVudGVyZXIgR3JhZGllbnRcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC4zKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZXItdmlld3BvcnQge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMy41cmVtO1xyXG59XHJcblxyXG4uc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgLy8gRHluYW1pc2NoZSBCcmVpdGUgZHVyY2ggZmxleCwga2VpbmUgbWFudWVsbGUgd2lkdGhcclxufVxyXG5cclxuLnNsaWRlIHtcclxuICBmbGV4OiAwIDAgMTAwdnc7IC8vIDwtIFdpY2h0aWchIEplZGUgU2xpZGUgbmltbXQgZXhha3QgMTAwdncgZWluICBcclxuICBtaW4taGVpZ2h0OiAxMDB2aDs7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMHJlbTtcclxufVxyXG5cclxuLnNsaWRlLWlubmVyOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA5cmVtO1xyXG59XHJcblxyXG4uc2xpZGUtaW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDgwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcclxuICBwYWRkaW5nLXRvcDogMHJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogM3JlbTsgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5nYW1lLXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2xpZGVyLXZpZXdwb3J0IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zd2lwZS1pbmRpY2F0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVyZW07XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLXJwZy1oaWdobGlnaHQpOyAvLyB6LsOiwoDCr0IuIHJvdCBvZGVyIGdvbGRcclxuICB9XHJcbn1cclxuXHJcbi5xci1zY2FuLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMXJlbTtcclxuICByaWdodDogMXJlbTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcnBnLWFjY2VudCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcnBnLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDAuNnJlbTtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMCAjMDAwO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5pY29uIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXJwZy1oaWdobGlnaHQpO1xyXG4gIH1cclxufVxyXG5cclxuLnFyLWljb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAwMCwgJGFscGhhOiAwKTsgLy8gZWlucsODwrxja2VuIHVuZCBkdXJjaHNpY2h0aWcgbWFjaGVuIVxyXG59XHJcblxyXG4uc3dpcGUtY29udHJvbHMgYnV0dG9uIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzc0MjViLCAjMzc0MjViKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ycGctYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMCAjMDAwO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgMnB4ICMwMDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ycGctaGlnaGxpZ2h0KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCB2YXIoLS1ycGctaGlnaGxpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbi50b3AtbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnBnLWJvcmRlcik7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAzMywgNjIsIDEpO1xyXG4gICAgcGFkZGluZzogMC40cmVtIDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDAuNyk7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcnBnLWJvcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ycGctYWNjZW50KTtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCB2YXIoLS1ycGctaGlnaGxpZ2h0KTtcclxuICAgICAgZmlsdGVyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwLjIpIGJyaWdodG5lc3MoMS4xKTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWljb24ge1xyXG4gICAgICB3aWR0aDogMjZweDtcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return GameComponent;
})();

/***/ }),

/***/ 4622:
/*!*******************************************!*\
  !*** ./src/app/views/game/game.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameModule: () => (/* binding */ GameModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.component */ 2687);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_questlog_questlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/questlog/questlog */ 810);
/* harmony import */ var _components_inventory_inventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/inventory/inventory */ 6044);
/* harmony import */ var _components_stats_stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/stats/stats */ 1680);
/* harmony import */ var _components_boss_list_boss_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/boss-list/boss-list */ 3472);
/* harmony import */ var _components_shop_shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shop/shop */ 7350);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);











let GameModule = /*#__PURE__*/(() => {
  class GameModule {
    static ɵfac = function GameModule_Factory(t) {
      return new (t || GameModule)();
    };
    static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: GameModule
    });
    static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
        path: '',
        component: _game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]
    });
  }
  return GameModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](GameModule, {
    declarations: [_game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent, _components_questlog_questlog__WEBPACK_IMPORTED_MODULE_1__.QuestlogComponent, _components_inventory_inventory__WEBPACK_IMPORTED_MODULE_2__.InventoryComponent, _components_stats_stats__WEBPACK_IMPORTED_MODULE_3__.StatsComponent, _components_boss_list_boss_list__WEBPACK_IMPORTED_MODULE_4__.BossListComponent, _components_shop_shop__WEBPACK_IMPORTED_MODULE_5__.ShopComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_game_game_module_ts.js.map