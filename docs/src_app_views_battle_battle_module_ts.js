"use strict";
(self["webpackChunkteitingquest"] = self["webpackChunkteitingquest"] || []).push([["src_app_views_battle_battle_module_ts"],{

/***/ 215:
/*!**************************************************!*\
  !*** ./src/app/views/battle/battle.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BattleComponent: () => (/* binding */ BattleComponent)
/* harmony export */ });
/* harmony import */ var _core_services_battle_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/battle.service */ 4406);
/* harmony import */ var _core_services_sound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/sound.service */ 3455);
/* harmony import */ var _core_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/player.service */ 3665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);











function BattleComponent_div_0_div_6_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const adv_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](adv_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](adv_r2.description);
  }
}
function BattleComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Deine Vorteile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BattleComponent_div_0_div_6_li_4_Template, 6, 2, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.battle.advantagesUnlocked);
  }
}
function BattleComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label")(4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function BattleComponent_div_0_div_7_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.hpInput, $event) || (ctx_r2.hpInput = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14)(6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BattleComponent_div_0_div_7_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.adjustHp(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "HP abziehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BattleComponent_div_0_div_7_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.adjustHp(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "HP % abziehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("HP: ", ctx_r2.playerHp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.hpInput);
  }
}
function BattleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BattleComponent_div_0_div_6_Template, 5, 1, "div", 5)(7, BattleComponent_div_0_div_7_Template, 10, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BattleComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.finish(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sieg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BattleComponent_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.finish(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Niederlage");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Kampf gegen: ", ctx_r2.battle.bossId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Beginn: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 4, ctx_r2.battle.startedAt, "shortTime"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.battle.advantagesUnlocked.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.playerHp !== null);
  }
}
function BattleComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Kein aktiver Kampf.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
let BattleComponent = /*#__PURE__*/(() => {
  class BattleComponent {
    battleService;
    soundService;
    playerService;
    router;
    battle = null;
    playerHp = null;
    hpInput = 0;
    constructor(battleService, soundService, playerService, router) {
      this.battleService = battleService;
      this.soundService = soundService;
      this.playerService = playerService;
      this.router = router;
    }
    ngOnInit() {
      this.battleService.getCurrentBattle().subscribe(b => {
        this.battle = b;
        if (b) {
          this.soundService.playBossMusic(b.bossId);
          this.loadPlayerHp();
        }
      });
    }
    loadPlayerHp() {
      this.playerService.getPlayer().subscribe(player => {
        if (!player) return;
        this.playerHp = player.hp;
      });
    }
    adjustHp(isPercent) {
      if (!this.playerHp || this.hpInput <= 0) return;
      let amount = isPercent ? Math.floor(this.hpInput / 100 * this.playerHp) : this.hpInput;
      //const confirmed = window.confirm(`Wirklich ${amount} HP abziehen?`);
      //if (!confirmed) return;
      this.playerService.getPlayer().subscribe(player => {
        if (!player) return; // Absicherung
        const newHp = player.hp - amount;
        player.hp = newHp;
        this.playerService.updatePlayer(player);
        this.playerHp = player.hp;
      });
    }
    finish(won) {
      this.battleService.finishBattle(won).then(() => {
        this.router.navigate(['/game']);
      });
    }
    static ɵfac = function BattleComponent_Factory(t) {
      return new (t || BattleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_battle_service__WEBPACK_IMPORTED_MODULE_0__.BattleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_sound_service__WEBPACK_IMPORTED_MODULE_1__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BattleComponent,
      selectors: [["app-battle"]],
      decls: 2,
      vars: 2,
      consts: [["class", "battle-container", 4, "ngIf"], ["class", "no-battle", 4, "ngIf"], [1, "battle-container"], [1, "boss-name"], [1, "timestamp"], ["class", "advantages", 4, "ngIf"], ["class", "hp-manipulation", 4, "ngIf"], [1, "battle-actions"], [1, "rpg-button", "win", 3, "click"], [1, "rpg-button", "lose", 3, "click"], [1, "advantages"], [4, "ngFor", "ngForOf"], [1, "hp-manipulation"], ["type", "number", "placeholder", "z.\u202FB. 10 oder 25", 3, "ngModelChange", "ngModel"], [1, "buttons"], [1, "rpg-button", 3, "click"], [1, "no-battle"]],
      template: function BattleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BattleComponent_div_0_Template, 13, 7, "div", 0)(1, BattleComponent_div_1_Template, 3, 0, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.battle);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.battle);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
      styles: [".battle-container[_ngcontent-%COMP%] {\n  background: #1e1b18;\n  border: 2px solid #e3b873;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin: 1rem;\n  color: #fff;\n}\n.battle-container[_ngcontent-%COMP%]   .boss-name[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-bottom: 0.5rem;\n}\n.battle-container[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.8;\n  margin-bottom: 1rem;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%] {\n  background: #2a2520;\n  border: 1px solid #e3b873;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n  line-height: 1.2;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions[_ngcontent-%COMP%]   .rpg-button[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.2rem;\n  font-size: 1rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions[_ngcontent-%COMP%]   .rpg-button.win[_ngcontent-%COMP%] {\n  background: #4caf50;\n  color: #fff;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions[_ngcontent-%COMP%]   .rpg-button.lose[_ngcontent-%COMP%] {\n  background: #f44336;\n  color: #fff;\n}\n\n.no-battle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #aaa;\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYmF0dGxlL2JhdHRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFETjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBRk47QUFJTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlRO0VBQ0UsY0FBQTtBQUZWO0FBUUU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFOSjtBQVFJO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQU5OO0FBUU07RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFOUjtBQVNNO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBUFI7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBVkYiLCJzb3VyY2VzQ29udGVudCI6WyIuYmF0dGxlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogIzFlMWIxODtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTNiODczO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgLmJvc3MtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIC50aW1lc3RhbXAge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFkdmFudGFnZXMge1xyXG4gICAgYmFja2dyb3VuZDogIzJhMjUyMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2I4NzM7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuXHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZkNzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhdHRsZS1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAucnBnLWJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNnJlbSAxLjJyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICYud2luIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmxvc2Uge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uby1iYXR0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2FhYTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return BattleComponent;
})();

/***/ }),

/***/ 6630:
/*!***********************************************!*\
  !*** ./src/app/views/battle/battle.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BattleModule: () => (/* binding */ BattleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _battle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battle.component */ 215);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






let BattleModule = /*#__PURE__*/(() => {
  class BattleModule {
    static ɵfac = function BattleModule_Factory(t) {
      return new (t || BattleModule)();
    };
    static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BattleModule
    });
    static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
        path: '',
        component: _battle_component__WEBPACK_IMPORTED_MODULE_0__.BattleComponent
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
    });
  }
  return BattleModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BattleModule, {
    declarations: [_battle_component__WEBPACK_IMPORTED_MODULE_0__.BattleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_battle_battle_module_ts.js.map