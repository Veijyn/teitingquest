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
/* harmony import */ var _core_services_quest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/quest.service */ 2926);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/inventory.service */ 1100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz.component */ 7948);
















function BattleComponent_app_quiz_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-quiz", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("quizFinished", function BattleComponent_app_quiz_0_Template_app_quiz_quizFinished_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onQuizComplete($event));
    })("backToBattleRequested", function BattleComponent_app_quiz_0_Template_app_quiz_backToBattleRequested_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onBackToBattleRequested());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BattleComponent_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 20);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", ctx_r1.boss.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/icons/" + ctx_r1.boss.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function BattleComponent_div_1_div_8_li_4_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cond_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.formatCondition(cond_r4.stat, cond_r4.operator, cond_r4.value), " ");
  }
}
function BattleComponent_div_1_div_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BattleComponent_div_1_div_8_li_4_small_7_Template, 2, 1, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const adv_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](adv_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](adv_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", adv_r5.condition);
  }
}
function BattleComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Kampfeffekte");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, BattleComponent_div_1_div_8_li_4_Template, 8, 3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.battle.advantagesUnlocked);
  }
}
function BattleComponent_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Deine Werte");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul")(4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Level: ", ctx_r1.playerStats.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("HP: ", ctx_r1.playerStats.hp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("St\u00E4rke: ", ctx_r1.playerStats.strength, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Geschicklichkeit: ", ctx_r1.playerStats.agility, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Intelligenz: ", ctx_r1.playerStats.intelligence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Gil: ", ctx_r1.playerStats.money, "");
  }
}
function BattleComponent_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "HP anpassen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 27)(4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BattleComponent_div_1_div_10_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.hpInput, $event) || (ctx_r1.hpInput = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BattleComponent_div_1_div_10_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.adjustHp(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Abziehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.hpInput);
  }
}
function BattleComponent_div_1_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BattleComponent_div_1_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.quizActive = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Quiz starten ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BattleComponent_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Sieg wirklich best\u00E4tigen?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BattleComponent_div_1_div_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.finish(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Ja, sicher!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BattleComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BattleComponent_div_1_img_2_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BattleComponent_div_1_div_8_Template, 5, 1, "div", 9)(9, BattleComponent_div_1_div_9_Template, 16, 6, "div", 10)(10, BattleComponent_div_1_div_10_Template, 7, 1, "div", 11)(11, BattleComponent_div_1_button_11_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 13)(13, "div", 14)(14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BattleComponent_div_1_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleConfirmWin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Sieg");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, BattleComponent_div_1_div_16_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BattleComponent_div_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.finish(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Niederlage");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 18)(20, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BattleComponent_div_1_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Zur\u00FCck");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.boss.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Kampf gegen: ", ctx_r1.boss.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Beginn: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 8, ctx_r1.battle.startedAt, "shortTime"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.battle.advantagesUnlocked.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.playerStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.playerHp !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.boss == null ? null : ctx_r1.boss.id) === "boss-ffquiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.confirmWinVisible);
  }
}
function BattleComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Kein aktiver Kampf.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
let BattleComponent = /*#__PURE__*/(() => {
  class BattleComponent {
    battleService;
    soundService;
    playerService;
    questService;
    inventoryService;
    router;
    battle = null;
    boss = null;
    playerHp = null;
    playerStats = null;
    hpInput = 0;
    confirmWinVisible = false;
    constructor(battleService, soundService, playerService, questService, inventoryService, router) {
      this.battleService = battleService;
      this.soundService = soundService;
      this.playerService = playerService;
      this.questService = questService;
      this.inventoryService = inventoryService;
      this.router = router;
    }
    ngOnInit() {
      this.battleService.getCurrentBattle().subscribe(b => {
        this.battle = b;
        if (b) {
          this.soundService.playBossMusic(b.bossId);
          this.loadBoss(b.bossId);
          this.loadPlayerStats();
        }
      });
    }
    quizActive = false;
    onBackToBattleRequested() {
      this.quizActive = false;
    }
    startQuiz() {
      if (this.boss?.id === 'boss-ffquiz') {
        this.quizActive = true;
      }
    }
    onQuizComplete(passed) {
      this.quizActive = false;
      if (passed) {
        this.finish(true); // Quiz bestanden → Sieg
      } else {
        this.finish(false); // Quiz nicht bestanden → Niederlage
      }
    }
    loadBoss(bossId) {
      const bosses = this.battleService.getGameState().bosses;
      this.boss = bosses.find(b => b.id === bossId) || null;
      if (this.boss?.id === 'kaktor') {
        this.quizActive = true;
      }
    }
    loadPlayerStats() {
      this.playerService.getPlayer().subscribe(player => {
        if (!player) return;
        this.playerHp = player.hp;
        // Effektive Werte berechnen
        const effectiveStats = this.playerService.getEffectiveStats();
        this.playerStats = effectiveStats;
      });
    }
    formatCondition(stat, operator, value) {
      const statMap = {
        strength: 'Stärke',
        agility: 'Geschicklichkeit',
        intelligence: 'Intelligenz',
        hp: 'HP',
        money: 'Geld',
        level: 'Level',
        experience: 'EP',
        questsCompleted: 'Quests'
      };
      return `${statMap[stat] || stat} ${operator} ${value}`;
    }
    toggleConfirmWin() {
      this.confirmWinVisible = !this.confirmWinVisible;
    }
    adjustHp(isPercent) {
      const inputValue = parseInt(String(this.hpInput), 10);
      if (isNaN(inputValue) || inputValue <= 0) return;
      const player = this.playerService.getSnapshot();
      if (!player) return;
      const currentHp = player.hp;
      const amount = isPercent ? Math.floor(inputValue / 100 * currentHp) : inputValue;
      const newHp = Math.max(0, currentHp - amount);
      if (newHp === currentHp) return;
      const updated = {
        ...player,
        hp: newHp
      };
      this.playerService.updatePlayer(updated);
      this.playerHp = newHp;
    }
    finish(won) {
      const player = this.playerService.getSnapshot();
      if (!player) return;
      if (won && this.boss?.questId) {
        this.questService.markCompleted(this.boss.questId, this.inventoryService, this.playerService);
      }
      if (!won) {
        // Spieler wurde „besiegt“ – auf 0 HP setzen und dann sofort wiederbeleben
        const level = player.level ?? 1;
        const restoredHp = 20 + Math.max(0, level - 1) * 3;
        const updatedPlayer = {
          ...player,
          hp: restoredHp
        };
        this.playerService.updatePlayer(updatedPlayer);
      }
      this.battleService.finishBattle(won).then(() => {
        this.router.navigate(['/game']);
      });
    }
    goBack() {
      this.router.navigate(['/game']);
    }
    static ɵfac = function BattleComponent_Factory(t) {
      return new (t || BattleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_battle_service__WEBPACK_IMPORTED_MODULE_0__.BattleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_sound_service__WEBPACK_IMPORTED_MODULE_1__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_quest_service__WEBPACK_IMPORTED_MODULE_3__.QuestService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_inventory_service__WEBPACK_IMPORTED_MODULE_4__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: BattleComponent,
      selectors: [["app-battle"]],
      decls: 3,
      vars: 3,
      consts: [[3, "quizFinished", "backToBattleRequested", 4, "ngIf"], ["class", "battle-container", 4, "ngIf"], ["class", "no-battle", 4, "ngIf"], [3, "quizFinished", "backToBattleRequested"], [1, "battle-container"], [1, "boss-header"], ["class", "boss-icon", 3, "src", "alt", 4, "ngIf"], [1, "boss-name"], [1, "timestamp"], ["class", "advantages", 4, "ngIf"], ["class", "player-stats", 4, "ngIf"], ["class", "hp-manipulation", 4, "ngIf"], ["class", "rpg-button", 3, "click", 4, "ngIf"], [1, "battle-actions-row"], [1, "confirmable-button"], [1, "rpg-button", "win", 3, "click"], ["class", "confirm-collapse", 4, "ngIf"], [1, "rpg-button", "lose", 3, "click"], [1, "back-button"], [1, "rpg-button", "back", 3, "click"], [1, "boss-icon", 3, "src", "alt"], [1, "advantages"], [4, "ngFor", "ngForOf"], ["class", "condition-chip", 4, "ngFor", "ngForOf"], [1, "condition-chip"], [1, "player-stats"], [1, "hp-manipulation"], [1, "hp-input-row"], ["type", "number", "placeholder", "10", "min", "1", 3, "ngModelChange", "ngModel"], [1, "rpg-button", "action", 3, "click"], [1, "rpg-button", 3, "click"], [1, "confirm-collapse"], [1, "rpg-button", "confirm", 3, "click"], [1, "no-battle"]],
      template: function BattleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BattleComponent_app_quiz_0_Template, 1, 0, "app-quiz", 0)(1, BattleComponent_div_1_Template, 22, 11, "div", 1)(2, BattleComponent_div_2_Template, 3, 0, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.quizActive);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.quizActive && ctx.battle && ctx.boss);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.battle && !ctx.quizActive);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _quiz_component__WEBPACK_IMPORTED_MODULE_5__.QuizComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n.battle-container[_ngcontent-%COMP%] {\n  background: #1e1b18;\n  border: 2px solid #e3b873;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin: 1rem;\n  margin-bottom: 9rem;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  min-height: 100%;\n}\n.battle-container[_ngcontent-%COMP%]   .boss-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.battle-container[_ngcontent-%COMP%]   .boss-header[_ngcontent-%COMP%]   .boss-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.battle-container[_ngcontent-%COMP%]   .boss-header[_ngcontent-%COMP%]   .boss-name[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: bold;\n  margin: 0;\n}\n.battle-container[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%] {\n  background: #2a2520;\n  border: 1px solid #e3b873;\n  padding: 1rem;\n  border-radius: 8px;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n  line-height: 1.4;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.2rem;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   .condition-chip[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   .condition-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #3c332b;\n  border: 1px solid #e3b873;\n  color: #e3b873;\n  padding: 0.2rem 0.5rem;\n  margin: 0.3rem 0.3rem 0 0;\n  border-radius: 6px;\n  font-size: 0.75rem;\n}\n.battle-container[_ngcontent-%COMP%]   .hp-manipulation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.3rem;\n}\n.battle-container[_ngcontent-%COMP%]   .hp-manipulation[_ngcontent-%COMP%]   .hp-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.battle-container[_ngcontent-%COMP%]   .hp-manipulation[_ngcontent-%COMP%]   .hp-input-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 4rem;\n  padding: 0.3rem;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: 1px solid #aaa;\n  text-align: center;\n  background: #f0f0f0;\n  color: #000;\n}\n.battle-container[_ngcontent-%COMP%]   .hp-manipulation[_ngcontent-%COMP%]   .hp-input-row[_ngcontent-%COMP%]   .rpg-button.action[_ngcontent-%COMP%] {\n  background: #444;\n  color: #fff;\n  padding: 0.4rem 1rem;\n  font-size: 0.95rem;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .rpg-button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.2rem;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  background: #333;\n  color: #fff;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .rpg-button.win[_ngcontent-%COMP%] {\n  background: #3e6745;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .rpg-button.lose[_ngcontent-%COMP%] {\n  background: #803e3e;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .rpg-button.confirm[_ngcontent-%COMP%] {\n  background: #2a9d8f;\n  margin-top: 0.5rem;\n  width: 100%;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .confirmable-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .confirmable-button[_ngcontent-%COMP%]   .confirm-collapse[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  background: #2a2520;\n  border: 1px solid #e3b873;\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  color: #ffd;\n  text-align: center;\n}\n.battle-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem 0 0 0;\n}\n.battle-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .rpg-button.back[_ngcontent-%COMP%] {\n  background: #555;\n  color: #fff;\n  padding: 0.5rem 1.5rem;\n  font-size: 1rem;\n  border-radius: 6px;\n}\n\n.no-battle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #aaa;\n  padding: 2rem;\n}\n\n.start-quiz-button[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  text-align: center;\n}\n\n.rpg-button.action[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYmF0dGxlL2JhdHRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUFOO0FBSUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFITjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBSk47QUFNTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU1RO0VBQ0UsY0FBQTtBQUpWO0FBT1E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFMVjtBQVVJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFhSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQVhOO0FBY0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBWk47QUFjTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVpSO0FBZU07RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBYlI7QUFrQkU7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBaEJGO0FBa0JFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBaEJKO0FBa0JJO0VBQ0UsbUJBQUE7QUFoQk47QUFtQkk7RUFDRSxtQkFBQTtBQWpCTjtBQW9CSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbEJOO0FBc0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFwQko7QUFzQkk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFwQk47QUEwQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBeEJGO0FBMEJFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBOEJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQTNCRjs7QUE4QkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUEzQkY7O0FBOEJBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQTNCRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5iYXR0bGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMWUxYjE4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlM2I4NzM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDlyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5ib3NzLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICAuYm9zcy1pY29uIHtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIH1cclxuXHJcbiAgICAuYm9zcy1uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGltZXN0YW1wIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgLmFkdmFudGFnZXMsIC5wbGF5ZXItc3RhdHMge1xyXG4gICAgYmFja2dyb3VuZDogIzJhMjUyMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2I4NzM7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuXHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZkNzAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29uZGl0aW9uLWNoaXAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzYzMzMmI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2I4NzM7XHJcbiAgICAgIGNvbG9yOiAjZTNiODczO1xyXG4gICAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xyXG4gICAgICBtYXJnaW46IDAuM3JlbSAwLjNyZW0gMCAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ocC1tYW5pcHVsYXRpb24ge1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaHAtaW5wdXQtcm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC4zcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJwZy1idXR0b24uYWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhdHRsZS1hY3Rpb25zLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAucnBnLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgJi53aW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjM2U2NzQ1O1xyXG4gICAgfVxyXG5cclxuICAgICYubG9zZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM4MDNlM2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5jb25maXJtIHtcclxuICAgICAgYmFja2dyb3VuZDogIzJhOWQ4ZjtcclxuICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb25maXJtYWJsZS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5jb25maXJtLWNvbGxhcHNlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMmEyNTIwO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNiODczO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgY29sb3I6ICNmZmQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uYmFjay1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDFyZW0gMCAwIDA7XHJcblxyXG4gIC5ycGctYnV0dG9uLmJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbn1cclxuXHJcbi5uby1iYXR0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2FhYTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uc3RhcnQtcXVpei1idXR0b24ge1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJwZy1idXR0b24uYWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _battle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battle.component */ 215);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.component */ 7948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);







let BattleModule = /*#__PURE__*/(() => {
  class BattleModule {
    static ɵfac = function BattleModule_Factory(t) {
      return new (t || BattleModule)();
    };
    static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: BattleModule
    });
    static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
        path: '',
        component: _battle_component__WEBPACK_IMPORTED_MODULE_0__.BattleComponent
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
    });
  }
  return BattleModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BattleModule, {
    declarations: [_battle_component__WEBPACK_IMPORTED_MODULE_0__.BattleComponent, _quiz_component__WEBPACK_IMPORTED_MODULE_1__.QuizComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
  });
})();

/***/ }),

/***/ 7948:
/*!************************************************!*\
  !*** ./src/app/views/battle/quiz.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizComponent: () => (/* binding */ QuizComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _quiz_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz.data */ 1711);
/* harmony import */ var _core_services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/player.service */ 3665);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);






const _c0 = (a0, a1) => ({
  correct: a0,
  wrong: a1
});
function QuizComponent_div_3_div_4_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getResultFor(key_r2), "% ");
  }
}
function QuizComponent_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizComponent_div_3_div_4_Template_button_click_1_listener() {
      const key_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.selectQuiz(key_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuizComponent_div_3_div_4_p_3_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.quizzes[key_r2].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.getResultFor(key_r2) !== null);
  }
}
function QuizComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Quiz fehlgeschlagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function QuizComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizComponent_div_3_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.backToBattle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Zur\u00FCck zur Kampf-Ansicht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function QuizComponent_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizComponent_div_3_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.backToBattle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Alle bestanden \u2013 Zur\u00FCck zur Battle-Komponente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function QuizComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "W\u00E4hle ein Quiz:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QuizComponent_div_3_div_4_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, QuizComponent_div_3_div_5_Template, 3, 0, "div", 6)(6, QuizComponent_div_3_div_6_Template, 3, 0, "div", 2)(7, QuizComponent_div_3_div_7_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getQuizKeys());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.lastResult !== null && ctx_r2.lastResult < 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.lastResult !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.hasCompletedAllWithHighScore());
  }
}
function QuizComponent_div_4_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizComponent_div_4_button_7_Template_button_click_0_listener() {
      const answer_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.answerSelected(answer_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const answer_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.answerSubmitted)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx_r2.answerSubmitted && answer_r7 === ctx_r2.currentQuestion.correct, ctx_r2.answerSubmitted && answer_r7 === ctx_r2.selectedAnswer && answer_r7 !== ctx_r2.currentQuestion.correct));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", answer_r7, " ");
  }
}
function QuizComponent_div_4_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Richtige Antwort: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.currentQuestion.correct);
  }
}
function QuizComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuizComponent_div_4_div_8_div_1_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizComponent_div_4_div_8_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.nextQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Weiter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedAnswer !== ctx_r2.currentQuestion.correct);
  }
}
function QuizComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14)(4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, QuizComponent_div_4_button_7_Template, 2, 6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, QuizComponent_div_4_div_8_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.currentQuiz == null ? null : ctx_r2.currentQuiz.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.currentQuestion == null ? null : ctx_r2.currentQuestion.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.shuffledAnswers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.answerSubmitted);
  }
}
let QuizComponent = /*#__PURE__*/(() => {
  class QuizComponent {
    playerService;
    autoStartQuizKey = null;
    quizFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    backToBattleRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    quizzes = _quiz_data__WEBPACK_IMPORTED_MODULE_0__.QUIZZES;
    selectedQuizKey = null;
    currentQuiz = null;
    currentQuestionIndex = 0;
    currentQuestion;
    score = 0;
    finished = false;
    answerSubmitted = false;
    selectedAnswer = null;
    quizResults = {};
    lastResult = null;
    constructor(playerService) {
      this.playerService = playerService;
    }
    ngOnInit() {
      const stats = this.playerService.getSnapshot();
      if (stats?.quizResults) {
        this.quizResults = {
          ...stats.quizResults
        };
      }
    }
    ngOnChanges(changes) {
      if (changes['autoStartQuizKey'] && this.autoStartQuizKey && !this.selectedQuizKey) {
        this.selectQuiz(this.autoStartQuizKey);
      }
    }
    getQuizKeys() {
      return Object.keys(this.quizzes);
    }
    getPercent() {
      return Math.round(this.score / (this.currentQuiz?.questions.length || 1) * 100);
    }
    getResultFor(key) {
      return this.quizResults[key] ?? null;
    }
    hasCompletedAllWithHighScore() {
      const keys = this.getQuizKeys();
      return keys.every(key => this.quizResults[key] !== undefined && this.quizResults[key] >= 92);
    }
    selectQuiz(key) {
      this.selectedQuizKey = key;
      this.currentQuiz = this.quizzes[key];
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.finished = false;
      this.answerSubmitted = false;
      this.selectedAnswer = null;
      this.lastResult = null;
      this.loadQuestion();
    }
    shuffledAnswers = [];
    loadQuestion() {
      if (!this.currentQuiz) return;
      this.currentQuestion = this.currentQuiz.questions[this.currentQuestionIndex];
      this.shuffledAnswers = this.shuffleArray([...this.currentQuestion.answers]);
    }
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    answerSelected(answer) {
      this.answerSubmitted = true;
      this.selectedAnswer = answer;
      const isCorrect = answer === this.currentQuestion.correct;
      if (isCorrect) this.score++;
    }
    nextQuestion() {
      this.answerSubmitted = false;
      this.selectedAnswer = null;
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.currentQuiz.questions.length) {
        this.loadQuestion();
      } else {
        this.finished = true;
        const percent = this.getPercent();
        if (this.selectedQuizKey) {
          this.quizResults[this.selectedQuizKey] = percent;
          this.playerService.updateQuizResult(this.selectedQuizKey, percent); // 🔒 permanent speichern
          this.lastResult = percent;
        }
        setTimeout(() => {
          this.restart();
        }, 500);
      }
    }
    restart() {
      this.selectedQuizKey = null;
      this.currentQuiz = null;
      this.finished = false;
      this.answerSubmitted = false;
      this.selectedAnswer = null;
    }
    backToBattle() {
      this.backToBattleRequested.emit();
    }
    static ɵfac = function QuizComponent_Factory(t) {
      return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: QuizComponent,
      selectors: [["app-quiz"]],
      inputs: {
        autoStartQuizKey: "autoStartQuizKey"
      },
      outputs: {
        quizFinished: "quizFinished",
        backToBattleRequested: "backToBattleRequested"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 2,
      consts: [[1, "quiz-box"], [1, "quiz-title"], [4, "ngIf"], [1, "select-instruction"], [1, "quiz-selection"], ["class", "quiz-select-box", 4, "ngFor", "ngForOf"], ["class", "quiz-fail-text", 4, "ngIf"], [1, "quiz-select-box"], [1, "rpg-button", "action", 3, "click"], ["class", "quiz-progress", 4, "ngIf"], [1, "quiz-progress"], [1, "quiz-fail-text"], [1, "rpg-button", 3, "click"], [1, "quiz-subtitle"], [1, "quiz-question-block"], [1, "question"], [1, "answers"], ["class", "rpg-button", 3, "disabled", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "rpg-button", 3, "click", "disabled", "ngClass"], ["class", "feedback", 4, "ngIf"], [1, "rpg-button", "next", 3, "click"], [1, "feedback"]],
      template: function QuizComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Patricks ultimatives FF Quiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuizComponent_div_3_Template, 8, 4, "div", 2)(4, QuizComponent_div_4_Template, 9, 4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedQuizKey);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedQuizKey && !ctx.finished);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
      styles: [".quiz-box[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  border: 2px solid #444;\n  border-radius: 12px;\n  padding: 1.5rem;\n  color: #fff;\n  font-family: inherit;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.quiz-box[_ngcontent-%COMP%]   .quiz-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: #f0c674;\n}\n.quiz-box[_ngcontent-%COMP%]   .select-instruction[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 1rem;\n}\n.quiz-box[_ngcontent-%COMP%]   .quiz-selection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.quiz-box[_ngcontent-%COMP%]   .quiz-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #f0c674;\n  margin-bottom: 1rem;\n}\n.quiz-box[_ngcontent-%COMP%]   .quiz-question-block[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  text-align: center;\n}\n.quiz-box[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n}\n.quiz-box[_ngcontent-%COMP%]   .answers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.quiz-box[_ngcontent-%COMP%]   .answers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.quiz-box[_ngcontent-%COMP%]   .quiz-result[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n}\n.quiz-box[_ngcontent-%COMP%]   .quiz-result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n\n.quiz-select-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.quiz-select-box[_ngcontent-%COMP%]   .quiz-progress[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #ccc;\n  margin-left: 1rem;\n}\n\n.feedback[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #ff9999;\n  font-style: italic;\n}\n\nbutton.correct[_ngcontent-%COMP%] {\n  border: 2px solid #4caf50;\n}\n\nbutton.wrong[_ngcontent-%COMP%] {\n  border: 2px solid #e53935;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYmF0dGxlL3F1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBTEo7QUFNSTtFQUNFLGtCQUFBO0FBSk47QUFRRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVFJO0VBQ0UsZ0JBQUE7QUFOTjs7QUFXQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBUkY7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUko7O0FBWUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7QUFURjs7QUFXQTtFQUNFLHlCQUFBO0FBUkYiLCJzb3VyY2VzQ29udGVudCI6WyIucXVpei1ib3gge1xyXG4gIGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzQ0NDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAucXVpei10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogI2YwYzY3NDtcclxuICB9XHJcblxyXG4gIC5zZWxlY3QtaW5zdHJ1Y3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnF1aXotc2VsZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAucXVpei1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBjb2xvcjogI2YwYzY3NDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAucXVpei1xdWVzdGlvbi1ibG9jayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnF1ZXN0aW9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFuc3dlcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5xdWl6LXJlc3VsdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnF1aXotc2VsZWN0LWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLnF1aXotcHJvZ3Jlc3Mge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5mZWVkYmFjayB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBjb2xvcjogI2ZmOTk5OTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbmJ1dHRvbi5jb3JyZWN0IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNGNhZjUwO1xyXG59XHJcbmJ1dHRvbi53cm9uZyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U1MzkzNTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return QuizComponent;
})();

/***/ }),

/***/ 1711:
/*!*******************************************!*\
  !*** ./src/app/views/battle/quiz.data.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUIZZES: () => (/* binding */ QUIZZES)
/* harmony export */ });
const QUIZZES = {
  ff5: {
    title: "Final Fantasy V Quiz",
    questions: [{
      question: "Wie heißt der Protagonist von Final Fantasy V?",
      answers: ["Bartz Klauser", "Cloud Strife", "Squall Leonhart", "Tidus"],
      correct: "Bartz Klauser"
    }, {
      question: "Wie lautet der Name der Prinzessin von Tycoon?",
      answers: ["Lenna Charlotte Tycoon", "Aerith Gainsborough", "Tifa Lockhart", "Yuna"],
      correct: "Lenna Charlotte Tycoon"
    }, {
      question: "Welcher Charakter ist als Piratin bekannt?",
      answers: ["Faris Scherwiz", "Zidane Tribal", "Tidus", "Cloud Strife"],
      correct: "Faris Scherwiz"
    }, {
      question: "Welcher der folgenden Charaktere dient als alter Krieger und Mentor in Final Fantasy V?",
      answers: ["Galuf", "Bartz Klauser", "Lenna", "Faris Scherwiz"],
      correct: "Galuf"
    }, {
      question: "Welches zentrale System bildet einen wesentlichen Bestandteil von Final Fantasy V?",
      answers: ["Job-System", "Materia-System", "Limit Breaks", "Junction-System"],
      correct: "Job-System"
    }, {
      question: "Welcher Job in Final Fantasy V ist für schwere Rüstungen und hohe physische Stärke bekannt?",
      answers: ["Knight", "Ninja", "White Mage", "Thief"],
      correct: "Knight"
    }, {
      question: "Welcher Job ist spezialisiert auf den Einsatz von zerstörerischer Magie?",
      answers: ["Black Mage", "White Mage", "Red Mage", "Knight"],
      correct: "Black Mage"
    }, {
      question: "Welcher Job wird vornehmlich für Heilzauber eingesetzt?",
      answers: ["White Mage", "Black Mage", "Red Mage", "Thief"],
      correct: "White Mage"
    }, {
      question: "Welcher Job vereint offensive und heilende Fähigkeiten?",
      answers: ["Red Mage", "Blue Mage", "Knight", "Monk"],
      correct: "Red Mage"
    }, {
      question: "Welches Kleidungsstück ist zu Bartz' Markenzeichen geworden?",
      answers: ["Hut", "Mantel", "Stiefel", "Handschuhe"],
      correct: "Hut"
    }, {
      question: "Aus welchem Königreich stammt Prinzessin Lenna?",
      answers: ["Tycoon", "Alexandria", "Ivalice", "Eorzea"],
      correct: "Tycoon"
    }, {
      question: "Welcher der folgenden Charaktere gehört nicht zur Hauptgruppe von Final Fantasy V?",
      answers: ["Cloud Strife", "Bartz Klauser", "Lenna Charlotte Tycoon", "Faris Scherwiz"],
      correct: "Cloud Strife"
    }, {
      question: "Welche Rolle spielen die Kristalle in Final Fantasy V?",
      answers: ["Sie sind zentrale Kraftquellen", "Sie dienen als Tauschmittel", "Sie erscheinen nur als Dekoration", "Sie ermöglichen Zeitreisen"],
      correct: "Sie sind zentrale Kraftquellen"
    }, {
      question: "Welcher Aspekt von Final Fantasy V wird durch das flexible Job-System besonders betont?",
      answers: ["Individuelle Charakterentwicklung", "Offene Welt", "Multiplayer-Modus", "Benutzerdefinierte Steuerung"],
      correct: "Individuelle Charakterentwicklung"
    }, {
      question: "Wie nennt man einen Angriff, bei dem mehrere Gegner gleichzeitig getroffen werden?",
      answers: ["Flächenangriff", "Einzelzielangriff", "Kritischer Treffer", "Magischer Schlag"],
      correct: "Flächenangriff"
    }, {
      question: "Welcher Charakter wird in Final Fantasy V auch als Pirat getarnt dargestellt?",
      answers: ["Faris Scherwiz", "Lenna", "Bartz Klauser", "Galuf"],
      correct: "Faris Scherwiz"
    }, {
      question: "Welcher Gegenstand wird typischerweise verwendet, um HP wiederherzustellen?",
      answers: ["Potion", "Ether", "Phoenix Down", "Elixir"],
      correct: "Potion"
    }, {
      question: "Wie viele Kristalle spielen traditionell eine zentrale Rolle in der Handlung von Final Fantasy V?",
      answers: ["Vier", "Fünf", "Sechs", "Sieben"],
      correct: "Vier"
    }, {
      question: "Welcher wiederkehrende optionale Boss ist in Final Fantasy V zu finden?",
      answers: ["Gilgamesh", "Sephiroth", "Ifrit", "Bartz"],
      correct: "Gilgamesh"
    }, {
      question: "Wie verbessert ein Charakter seine Fähigkeiten im Job-System von Final Fantasy V?",
      answers: ["Durch das Sammeln von Erfahrungspunkten im jeweiligen Job", "Durch den Einsatz von Materia", "Durch das Wechseln der Ausrüstung", "Durch den Abschluss von Nebenquests"],
      correct: "Durch das Sammeln von Erfahrungspunkten im jeweiligen Job"
    }]
  },
  ff6: {
    title: "Final Fantasy VI Quiz",
    questions: [{
      question: "Wie heißt die Protagonistin von Final Fantasy VI, die aufgrund ihrer einzigartigen magischen Kräfte und verlorenen Erinnerungen zu Beginn im Mittelpunkt steht?",
      answers: ["Terra Branford", "Celes Chere", "Relm Arrowny", "Rinoa Heartilly"],
      correct: "Terra Branford"
    }, {
      question: "Welcher ehemalige Imperiums-General wechselt im Laufe des Spiels auf die Seite der Rebellen?",
      answers: ["Celes Chere", "Locke Cole", "Edgar Roni Figaro", "Sabin Rene Figaro"],
      correct: "Celes Chere"
    }, {
      question: "Wie heißt der geschickte Dieb, der sich als loyaler Gefährte erweist?",
      answers: ["Locke Cole", "Shadow", "Setzer Gabbiani", "Galuf"],
      correct: "Locke Cole"
    }, {
      question: "Welcher Charakter ist bekannt für seinen brutalen Kampfstil und den Einsatz wilder Fäuste?",
      answers: ["Sabin Rene Figaro", "Terra Branford", "Celes Chere", "Locke Cole"],
      correct: "Sabin Rene Figaro"
    }, {
      question: "Wie heißt der weise, etwas schrullige Magier, der als Erzähler und Gefährte fungiert?",
      answers: ["Strago Magus", "Cyan Garamonde", "Shadow", "Setzer Gabbiani"],
      correct: "Strago Magus"
    }, {
      question: "Welcher stoische Kämpfer mit markanter Augenklappe trägt das Gewicht eines tragischen Verlusts in sich?",
      answers: ["Cyan Garamonde", "Sabin Rene Figaro", "Terra Branford", "Locke Cole"],
      correct: "Cyan Garamonde"
    }, {
      question: "Wie heißt der wilde und unkonventionelle Charakter, der für seine animalische Natur und unberechenbare Angriffe bekannt ist?",
      answers: ["Gau", "Terra Branford", "Locke Cole", "Shadow"],
      correct: "Gau"
    }, {
      question: "Welcher charmante Abenteurer und Luftschiff-Pilot sorgt für humorvolle Momente im Spiel?",
      answers: ["Setzer Gabbiani", "Locke Cole", "Celes Chere", "Edgar Roni Figaro"],
      correct: "Setzer Gabbiani"
    }, {
      question: "Wie heißt der rätselhafte Assassine, dessen Vergangenheit in Dunkelheit gehüllt ist?",
      answers: ["Shadow", "Locke Cole", "Sabin Rene Figaro", "Terra Branford"],
      correct: "Shadow"
    }, {
      question: "Welcher kleine, flauschige Begleiter sorgt häufig für charmanten Humor?",
      answers: ["Mog", "Gau", "Edgar Roni Figaro", "Strago Magus"],
      correct: "Mog"
    }, {
      question: "Wie heißt das eisige Bergdorf, in dem das Abenteuer seinen Anfang nimmt?",
      answers: ["Narshe", "Vector", "Figaro", "Zanarkand"],
      correct: "Narshe"
    }, {
      question: "Wie nennt man die magischen Wesen, die den Helden ihre Zauberkräfte verleihen?",
      answers: ["Espers", "Eidolons", "Guardian Forces", "Aeons"],
      correct: "Espers"
    }, {
      question: "Welches zentrale Thema befasst sich in Final Fantasy VI mit der Suche nach Identität und Erlösung?",
      answers: ["Identität und Schicksal", "Liebe und Verrat", "Krieg und Frieden", "Rache und Vergeltung"],
      correct: "Identität und Schicksal"
    }, {
      question: "Welcher Charakter ist nicht nur ein tapferer Kämpfer, sondern auch ein talentierter Techniker und Erfinder?",
      answers: ["Edgar Roni Figaro", "Sabin Rene Figaro", "Locke Cole", "Setzer Gabbiani"],
      correct: "Edgar Roni Figaro"
    }, {
      question: "Wie erhalten die Charaktere im Laufe des Spiels neue magische Fähigkeiten?",
      answers: ["Durch den Einsatz von Espers", "Durch das Sammeln von Kristallen", "Durch das Erlernen alter Techniken", "Durch Training an speziellen Schulen"],
      correct: "Durch den Einsatz von Espers"
    }, {
      question: "Welches tragische Ereignis prägte das Schicksal von Cyan Garamonde?",
      answers: ["Der Verlust seiner Familie im Krieg", "Der Verrat durch einen Freund", "Ein magischer Fluch", "Ein gefährlicher Unfall"],
      correct: "Der Verlust seiner Familie im Krieg"
    }, {
      question: "Wer ist der grausame und sadistische Antagonist, der das Imperium in Final Fantasy VI anführt?",
      answers: ["Kefka Palazzo", "Ultimecia", "Sephiroth", "Kuja"],
      correct: "Kefka Palazzo"
    }, {
      question: "Wie viele spielbare Hauptcharaktere gibt es in Final Fantasy VI (ohne optionale Nebencharaktere)?",
      answers: ["14", "10", "12", "16"],
      correct: "14"
    }, {
      question: "Wer komponierte den epischen Soundtrack von Final Fantasy VI?",
      answers: ["Nobuo Uematsu", "Yoko Shimomura", "Hitoshi Sakimoto", "Yuzo Koshiro"],
      correct: "Nobuo Uematsu"
    }, {
      question: "Welcher der folgenden Charaktere ist kein spielbarer Held in Final Fantasy VI?",
      answers: ["Sephiroth", "Terra Branford", "Celes Chere", "Locke Cole"],
      correct: "Sephiroth"
    }]
  },
  ff7: {
    title: "Final Fantasy VII Quiz",
    questions: [{
      question: "Wie heißt der Hauptcharakter von Final Fantasy VII?",
      answers: ["Cloud Strife", "Sephiroth", "Zack Fair", "Vincent Valentine"],
      correct: "Cloud Strife"
    }, {
      question: "Welche Organisation nutzt Mako-Energie?",
      answers: ["Avalanche", "Shinra", "Turks", "Don Corneo's Firma"],
      correct: "Shinra"
    }, {
      question: "Wie lautet der Name von Clouds legendärem Schwert?",
      answers: ["Buster Sword", "Excalibur", "Masamune", "Dragonslayer"],
      correct: "Buster Sword"
    }, {
      question: "Wer ist der Hauptantagonist in FF7?",
      answers: ["Barret Wallace", "Cloud Strife", "Sephiroth", "Red XIII"],
      correct: "Sephiroth"
    }, {
      question: "In welcher Stadt beginnt das Spiel?",
      answers: ["Nibelheim", "Midgar", "Cosmo Canyon", "Rocket Town"],
      correct: "Midgar"
    }, {
      question: "Welche Widerstandsgruppe kämpft gegen Shinra?",
      answers: ["Turks", "Fenrir", "Avalanche", "AG Entourage"],
      correct: "Avalanche"
    }, {
      question: "Welcher Charakter ist bekannt für seinen markanten Waffenarm?",
      answers: ["Cloud Strife", "Tifa Lockhart", "Barret Wallace", "Yuffie Kisaragi"],
      correct: "Barret Wallace"
    }, {
      question: "Welcher Charakter hat eine geheimnisvolle Vergangenheit und ist als Vampir bekannt?",
      answers: ["Vincent Valentine", "Sephiroth", "Zack Fair", "Cid Highwind"],
      correct: "Vincent Valentine"
    }, {
      question: "Welche Person wird als Diebin und Ninja dargestellt?",
      answers: ["Yuffie Kisaragi", "Tifa Lockhart", "Aerith Gainsborough", "Cait Sith"],
      correct: "Yuffie Kisaragi"
    }, {
      question: "Was ist Materia in Final Fantasy VII?",
      answers: ["Eine Waffe", "Ein magisches Item", "Ein Kleidungsstück", "Ein Transportmittel"],
      correct: "Ein magisches Item"
    }, {
      question: "Wer besitzt eine besondere Verbindung zur Erde und wird oft mit Blumen assoziiert?",
      answers: ["Aerith Gainsborough", "Tifa Lockhart", "Yuffie Kisaragi", "Rufus Shinra"],
      correct: "Aerith Gainsborough"
    }, {
      question: "Welche Kampftechnik nutzt Tifa Lockhart hauptsächlich?",
      answers: ["Schwertkampf", "Schusswaffen", "Fäuste", "Magie"],
      correct: "Fäuste"
    }, {
      question: "Wie heißt der fahrende Mechaniker und Pilot in FF7?",
      answers: ["Cid Highwind", "Zack Fair", "Gogo", "Genesis Rhapsodos"],
      correct: "Cid Highwind"
    }, {
      question: "Wer ist der mysteriöse, katzenartige Begleiter im Spiel?",
      answers: ["Cait Sith", "Red XIII", "Sephiroth", "Zack Fair"],
      correct: "Cait Sith"
    }, {
      question: "Welche besondere Gabe besitzt Aerith Gainsborough?",
      answers: ["Magische Heilung", "Kenntnis der Zukunft", "Verbindung zum Leben", "Unsichtbarkeit"],
      correct: "Verbindung zum Leben"
    }, {
      question: "Welcher Charakter ist ein tierähnliches Wesen mit hoher Intelligenz?",
      answers: ["Red XIII", "Barret Wallace", "Cid Highwind", "Cloud Strife"],
      correct: "Red XIII"
    }, {
      question: "In welchem Jahr wurde Final Fantasy VII ursprünglich veröffentlicht?",
      answers: ["1997", "1995", "1994", "1998"],
      correct: "1997"
    }, {
      question: "Wie heißt Clouds Heimatstadt?",
      answers: ["Midgar", "Nibelheim", "Balamb", "Luca"],
      correct: "Nibelheim"
    }, {
      question: "Was ist das primäre Ziel der Gruppe Avalanche?",
      answers: ["Schatzsuche", "Kampf gegen Shinra", "Weltrettung", "Diebstahl von Materia"],
      correct: "Kampf gegen Shinra"
    }, {
      question: "Welcher Charakter wird von Schuldgefühlen geplagt und hat eine tragische Vergangenheit?",
      answers: ["Vincent Valentine", "Cid Highwind", "Zack Fair", "Sephiroth"],
      correct: "Vincent Valentine"
    }, {
      question: "Welcher Charakter träumt davon, Pilot zu werden und ist ein passionierter Mechaniker?",
      answers: ["Cid Highwind", "Cloud Strife", "Zack Fair", "Barret Wallace"],
      correct: "Cid Highwind"
    }, {
      question: "Welches Element wird durch Materia hauptsächlich repräsentiert?",
      answers: ["Feuer", "Wasser", "Magie", "Erde"],
      correct: "Magie"
    }, {
      question: "Welcher Gegenstand kann in spezielle Ausrüstungsslots eingesetzt werden, um magische Kräfte zu entfalten?",
      answers: ["Materia", "Kerne", "Energiebälle", "Städte"],
      correct: "Materia"
    }, {
      question: "Welcher Charakter ist auch als 'Nanaki' bekannt?",
      answers: ["Red XIII", "Zack Fair", "Cloud Strife", "Vincent Valentine"],
      correct: "Red XIII"
    }, {
      question: "Welcher Ort gilt als spirituelles Zentrum in FF7?",
      answers: ["Nibelheim", "Cosmo Canyon", "Midgar", "Wutai"],
      correct: "Cosmo Canyon"
    }, {
      question: "Wie viele verschiedene Materia-Arten gibt es ungefähr in FF7?",
      answers: ["10", "20", "30", "über 50"],
      correct: "über 50"
    }, {
      question: "Wie heißt der Vergnügungspark in Final Fantasy VII?",
      answers: ["Gold Saucer", "Silver Dome", "Platinum Carnival", "Emerald Park"],
      correct: "Gold Saucer"
    }, {
      question: "Welcher Charakter ist für seine tiefgründigen Einsichten in Lebensfragen bekannt?",
      answers: ["Aerith Gainsborough", "Cloud Strife", "Sephiroth", "Yuffie Kisaragi"],
      correct: "Aerith Gainsborough"
    }, {
      question: "Welcher Charakter war früher ein SOLDIER?",
      answers: ["Cloud Strife", "Cid Highwind", "Yuffie Kisaragi", "Tifa Lockhart"],
      correct: "Cloud Strife"
    }, {
      question: "Welcher Konflikt steht im Mittelpunkt von FF7?",
      answers: ["Umweltzerstörung vs. Natur", "Krieg zwischen Nationen", "Liebesgeschichte", "Technologie gegen Magie"],
      correct: "Umweltzerstörung vs. Natur"
    }, {
      question: "Welcher Charakter hat eine mystische Verbindung zu einer alten, verlorenen Zivilisation?",
      answers: ["Red XIII", "Barret Wallace", "Cid Highwind", "Cloud Strife"],
      correct: "Red XIII"
    }, {
      question: "Welcher Mechanismus erlaubt es den Charakteren, mächtige Angriffe durchzuführen, wenn sie angeschlagen sind?",
      answers: ["Limit Breaks", "Super Attacks", "Final Moves", "Overdrives"],
      correct: "Limit Breaks"
    }, {
      question: "Wer war Cloud Strifes engster Freund, dessen Schicksal tragisch endete?",
      answers: ["Zack Fair", "Sephiroth", "Barret Wallace", "Cid Highwind"],
      correct: "Zack Fair"
    }, {
      question: "Welcher Charakter ist für seinen Nahkampfstil und seine beeindruckenden Limit Breaks bekannt?",
      answers: ["Tifa Lockhart", "Yuffie Kisaragi", "Aerith Gainsborough", "Cloud Strife"],
      correct: "Tifa Lockhart"
    }, {
      question: "Welches außerirdische Wesen spielt eine zentrale Rolle in der Handlung von FF7?",
      answers: ["Jenova", "Bahamut", "Ifrit", "Leviathan"],
      correct: "Jenova"
    }, {
      question: "Wie viele Sektoren hat Midgar?",
      answers: ["6", "8", "10", "12"],
      correct: "8"
    }, {
      question: "Welcher Charakter ist bekannt für seine schnelle Reaktion und außergewöhnliche Geschicklichkeit?",
      answers: ["Cloud Strife", "Tifa Lockhart", "Yuffie Kisaragi", "Cid Highwind"],
      correct: "Yuffie Kisaragi"
    }, {
      question: "Welcher Ort in Midgar ist bekannt für seine dichten Slums und als Rückzugsort der Rebellen?",
      answers: ["Sector 7 Slums", "Cosmo Canyon", "Shinra Mansion", "Nibelheim"],
      correct: "Sector 7 Slums"
    }, {
      question: "Welches Element spielt eine bedeutende Rolle im thematischen Konflikt von FF7?",
      answers: ["Magie", "Maschinen", "Natur", "Wissenschaft"],
      correct: "Natur"
    }, {
      question: "Welcher Gegenstand symbolisiert Hoffnung und die Chance auf einen Neuanfang in FF7?",
      answers: ["Buster Sword", "Materia", "Ein altes Tagebuch", "Ein Medaillon"],
      correct: "Materia"
    }]
  },
  ff8: {
    title: "Final Fantasy VIII Quiz",
    questions: [{
      question: "Wie heißt der Protagonist von Final Fantasy VIII?",
      answers: ["Squall Leonhart", "Zidane Tribal", "Tidus", "Cloud Strife"],
      correct: "Squall Leonhart"
    }, {
      question: "Wie heißt die weibliche Hauptfigur von Final Fantasy VIII?",
      answers: ["Rinoa Heartilly", "Yuna", "Tifa Lockhart", "Aerith Gainsborough"],
      correct: "Rinoa Heartilly"
    }, {
      question: "Welche militärische Organisation bildet die Elitekrieger in Final Fantasy VIII?",
      answers: ["SeeD", "G-Force", "SOLDIER", "FFM"],
      correct: "SeeD"
    }, {
      question: "Wie heißt die militärische Basis, an der Squall ausgebildet wurde?",
      answers: ["Balamb Garden", "Galbadia Garden", "Trabia Garden", "Winhill Garden"],
      correct: "Balamb Garden"
    }, {
      question: "Welcher Charakter ist bekannt für seine coole und rebellische Art und dient als Squalls Rivale?",
      answers: ["Seifer Almasy", "Zell Dincht", "Irvine Kinneas", "Quistis Trepe"],
      correct: "Seifer Almasy"
    }, {
      question: "Welcher Charakter ist ein enger Freund und Teammitglied von Squall?",
      answers: ["Zell Dincht", "Laguna Loire", "Selphie Tilmitt", "Quistis Trepe"],
      correct: "Zell Dincht"
    }, {
      question: "Wer ist der Scharfschütze der Gruppe?",
      answers: ["Irvine Kinneas", "Seifer Almasy", "Zell Dincht", "Squall Leonhart"],
      correct: "Irvine Kinneas"
    }, {
      question: "Welcher Charakter träumt von einer besseren Zukunft und zeigt Idealismus?",
      answers: ["Edea Kramer", "Squall Leonhart", "Rinoa Heartilly", "Seifer Almasy"],
      correct: "Rinoa Heartilly"
    }, {
      question: "Wie heißt die erste mächtige Hexe, die in FF8 eine zentrale Rolle spielt?",
      answers: ["Edea Kramer", "Ultimecia", "Fujin", "Lunafreya"],
      correct: "Edea Kramer"
    }, {
      question: "Wie heißt die ultimative Gegenspielerin, die das Zeitgefüge manipuliert?",
      answers: ["Edea Kramer", "Rinoa Heartilly", "Seifer Almasy", "Ultimecia"],
      correct: "Ultimecia"
    }, {
      question: "Welches System war in FF8 neu und ermöglicht es, Magie mit Statuswerten zu verbinden?",
      answers: ["Limit Breaks", "Junction-System", "Materia", "Paradigm-System"],
      correct: "Junction-System"
    }, {
      question: "Wie nennt man das System, das es erlaubt, Magie in Statuswerte einzubinden?",
      answers: ["Skill Tree", "Level-Up", "Junction-System", "License Board"],
      correct: "Junction-System"
    }, {
      question: "Wie werden die mächtigen Kreaturen genannt, die den Charakteren im Kampf helfen?",
      answers: ["Espers", "Summons", "Guardian Forces", "Mognetes"],
      correct: "Guardian Forces"
    }, {
      question: "Welches dieser Themen ist zentral in der Handlung von FF8?",
      answers: ["Liebe und Schicksal", "Krieg und Zerstörung", "Gier und Macht", "Reichtum und Besitz"],
      correct: "Liebe und Schicksal"
    }, {
      question: "In welcher Einrichtung findet ein Großteil der militärischen Ausbildung statt?",
      answers: ["Esthar", "Del Sol Garden", "Trabia Garden", "Balamb Garden"],
      correct: "Balamb Garden"
    }, {
      question: "Welcher Charakter ist für seine fröhliche und unbeschwerte Art bekannt?",
      answers: ["Selphie Tilmitt", "Irvine Kinneas", "Seifer Almasy", "Rinoa Heartilly"],
      correct: "Selphie Tilmitt"
    }, {
      question: "Welche Figur fungiert als Ausbilderin für die neuen SeeD-Rekruten?",
      answers: ["Selphie Tilmitt", "Rinoa Heartilly", "Quistis Trepe", "Edea Kramer"],
      correct: "Quistis Trepe"
    }, {
      question: "Welcher der folgenden Charaktere ist kein Mitglied des SeeD-Teams?",
      answers: ["Zell Dincht", "Cloud Strife", "Squall Leonhart", "Rinoa Heartilly"],
      correct: "Cloud Strife"
    }, {
      question: "Welches Genre repräsentiert Final Fantasy VIII?",
      answers: ["Shooter", "Strategiespiel", "Rollenspiel", "Sportspiel"],
      correct: "Rollenspiel"
    }, {
      question: "Wer ist der Komponist der ikonischen Musik in FF8?",
      answers: ["Nobuo Uematsu", "Yoko Shimomura", "Hans Zimmer", "John Williams"],
      correct: "Nobuo Uematsu"
    }, {
      question: "Welche Arten von Magie können in FF8 eingesetzt werden?",
      answers: ["Wasser, Erde, Licht, Dunkelheit", "Nur Feuer und Eis", "Zufällige Zauber", "Feuer, Eis, Blitz, Wind"],
      correct: "Feuer, Eis, Blitz, Wind"
    }, {
      question: "Welches Element der Handlung beschäftigt sich mit Zeitmanipulation?",
      answers: ["Ultimecias Zeitkompression", "Balamb Garden Training", "Rinoas Aufstand", "Squalls Ausbildung"],
      correct: "Ultimecias Zeitkompression"
    }, {
      question: "Welche Figur leitet die militärische Ausbildung an Balamb Garden?",
      answers: ["Quistis Trepe", "General Cid", "Professor Kadowaki", "Headmaster Hohenheim"],
      correct: "Quistis Trepe"
    }, {
      question: "Welches Thema dominiert die Erzählung in Final Fantasy VIII?",
      answers: ["Schicksal und freier Wille", "Gut gegen Böse", "Revolution und Machtübernahme", "Zeitreise und Wiedergeburt"],
      correct: "Schicksal und freier Wille"
    }, {
      question: "Welche Beschreibung passt am besten zur Welt von Final Fantasy VIII?",
      answers: ["Ein rein mittelalterlicher Schauplatz", "Eine futuristische Cyber-Welt", "Eine Mischung aus moderner Technologie und Magie", "Eine postapokalyptische Landschaft"],
      correct: "Eine Mischung aus moderner Technologie und Magie"
    }, {
      question: "Welcher Charakter hat eine parallele Nebenhandlung, die häufig dargestellt wird?",
      answers: ["Squall Leonhart", "Laguna Loire", "Rinoa Heartilly", "Seifer Almasy"],
      correct: "Laguna Loire"
    }, {
      question: "Welche Rolle spielt Laguna Loire in FF8?",
      answers: ["Ist der Hauptantagonist", "Dient als Squalls Militärkommandant", "Leitet Balamb Garden", "Erlebt Abenteuer in parallelen Zeitebenen"],
      correct: "Erlebt Abenteuer in parallelen Zeitebenen"
    }, {
      question: "Welches Ereignis markiert einen Wendepunkt in der Handlung von FF8?",
      answers: ["Squalls Aufnahme in SeeD", "Rinoas Wiedergeburt", "Die Enthüllung von Ultimecia", "Zells Abschied"],
      correct: "Die Enthüllung von Ultimecia"
    }, {
      question: "Welches Machtmittel setzen die Charaktere im Kampf ein?",
      answers: ["Overdrive Moves", "Super Weapons", "Limit Breaks", "Guardian Forces"],
      correct: "Guardian Forces"
    }, {
      question: "Wie beeinflusst das Junction-System die Charakterentwicklung?",
      answers: ["Erhöht Statuswerte durch Magie-Einbindung", "Erhöht die Angriffskraft direkt", "Verbessert nur die Verteidigung", "Hat keinen Einfluss"],
      correct: "Erhöht Statuswerte durch Magie-Einbindung"
    }, {
      question: "Welches Spielelement sorgt für strategische Tiefe im Kampf?",
      answers: ["Paradigm-System", "Quick Time Events", "Rundenbasiertes Kampfsystem", "Minispiele"],
      correct: "Paradigm-System"
    }, {
      question: "Wie heißt die besondere Fähigkeit, die das Team strategisch einsetzen kann?",
      answers: ["Limit Break", "Overdrive", "Paradigmenwechsel", "Rapid Attack"],
      correct: "Paradigmenwechsel"
    }, {
      question: "Welches Element betont die emotionale Entwicklung der Charaktere?",
      answers: ["Hass", "Gier", "Liebe", "Eifersucht"],
      correct: "Liebe"
    }, {
      question: "Wie trägt Rinoa Heartilly zur Gruppendynamik bei?",
      answers: ["Inspiriert Squall und stärkt den Zusammenhalt", "Agiert als Antagonistin", "Zerstört das Paradigm-System", "Verlässt das Team frühzeitig"],
      correct: "Inspiriert Squall und stärkt den Zusammenhalt"
    }, {
      question: "Welches spezielle Instrument benutzt Squall im Kampf?",
      answers: ["Gunblade", "Katana", "Zwillingsschwerter", "Degen"],
      correct: "Gunblade"
    }, {
      question: "Welches Thema zieht sich durch Squalls persönliche Reise?",
      answers: ["Selbstfindung", "Reichtum", "Rache", "Flucht vor der Vergangenheit"],
      correct: "Selbstfindung"
    }, {
      question: "Wie wird der Konflikt zwischen persönlichen Beziehungen und Pflicht gezeigt?",
      answers: ["Durch reine Action-Szenen", "Durch Minispiele", "Durch eine lineare Storyline ohne Tiefe", "Durch innere Kämpfe der Charaktere"],
      correct: "Durch innere Kämpfe der Charaktere"
    }, {
      question: "Was symbolisiert das Zusammenspiel von Magie und Technologie in FF8?",
      answers: ["Nur den Fortschritt", "Nur den Traditionserhalt", "Fortschritt und der Konflikt zwischen Tradition und Moderne", "Ein zufälliges Spielelement"],
      correct: "Fortschritt und der Konflikt zwischen Tradition und Moderne"
    }]
  },
  ff9: {
    title: "Final Fantasy IX Quiz",
    questions: [{
      question: "Wie heißt der Protagonist von Final Fantasy IX?",
      answers: ["Zidane Tribal", "Cloud Strife", "Squall Leonhart", "Tidus"],
      correct: "Zidane Tribal"
    }, {
      question: "Welcher Charakter ist ein junger Zauberer, der oft an seiner Herkunft zweifelt?",
      answers: ["Vivi Ornitier", "Quina Quen", "Steiner", "Amarant Coral"],
      correct: "Vivi Ornitier"
    }, {
      question: "Wie lautet der richtige Name der Prinzessin in Final Fantasy IX?",
      answers: ["Garnet Til Alexandr", "Aerith Gainsborough", "Rinoa Heartilly", "Lunafreya"],
      correct: "Garnet Til Alexandr"
    }, {
      question: "Welcher Charakter fungiert als eiserner Beschützer von Garnet?",
      answers: ["Steiner", "Zidane Tribal", "Vivi Ornitier", "Amarant Coral"],
      correct: "Steiner"
    }, {
      question: "Welche Gruppe von Dieben und Schauspielern spielt eine wichtige Rolle in Final Fantasy IX?",
      answers: ["Tantalus", "SeeD", "Del Sol", "Balamb Garden"],
      correct: "Tantalus"
    }, {
      question: "Welcher Charakter ist bekannt für seine Vorliebe zum Essen und seine unglaublichen Esskünste?",
      answers: ["Quina Quen", "Vivi Ornitier", "Zidane Tribal", "Steiner"],
      correct: "Quina Quen"
    }, {
      question: "Wie nennt man die mächtigen Beschwörungswesen in Final Fantasy IX?",
      answers: ["Eidolons", "Espers", "Guardian Forces", "Aeons"],
      correct: "Eidolons"
    }, {
      question: "Welche besondere Fähigkeit besitzt Garnet Til Alexandr?",
      answers: ["Sie kann Eidolons beschwören", "Sie kann fliegen", "Sie beherrscht Schwarzmagie", "Sie kann die Zeit manipulieren"],
      correct: "Sie kann Eidolons beschwören"
    }, {
      question: "Wie heißt das versteckte Dorf, in dem Eiko Carol lebt?",
      answers: ["Madain Sari", "Balamb Garden", "Alexandria", "Lindblum"],
      correct: "Madain Sari"
    }, {
      question: "Welcher Eidolon wird mit dem Zauber 'Mega Flare' in Verbindung gebracht?",
      answers: ["Bahamut", "Shiva", "Ifrit", "Ramuh"],
      correct: "Bahamut"
    }, {
      question: "Welcher Eidolon repräsentiert das Element Eis in Final Fantasy IX?",
      answers: ["Shiva", "Ifrit", "Bahamut", "Ramuh"],
      correct: "Shiva"
    }, {
      question: "Welcher Eidolon steht für das Element Feuer in Final Fantasy IX?",
      answers: ["Ifrit", "Ramuh", "Leviathan", "Shiva"],
      correct: "Ifrit"
    }, {
      question: "Welches zentrale Thema behandelt Final Fantasy IX?",
      answers: ["Identität und Selbstfindung", "Krieg und Eroberung", "Zeitreisen", "Wirtschaftskrise"],
      correct: "Identität und Selbstfindung"
    }, {
      question: "In welchem Jahr wurde Final Fantasy IX erstmals veröffentlicht?",
      answers: ["2000", "1999", "2001", "1998"],
      correct: "2000"
    }, {
      question: "Für welche Konsole wurde Final Fantasy IX primär entwickelt?",
      answers: ["PlayStation", "Nintendo 64", "Sega Saturn", "Dreamcast"],
      correct: "PlayStation"
    }, {
      question: "Welcher Charakter in FF9, bekannt als mysteriöser Kämpfer, verlässt Tantalus, um eigenständig zu agieren?",
      answers: ["Amarant Coral", "Vivi Ornitier", "Zidane Tribal", "Steiner"],
      correct: "Amarant Coral"
    }, {
      question: "Welcher Eidolon wird in Final Fantasy IX als Symbol des Donners und Blitzes dargestellt?",
      answers: ["Ramuh", "Ifrit", "Bahamut", "Shiva"],
      correct: "Ramuh"
    }, {
      question: "Wer war der Regisseur von Final Fantasy IX?",
      answers: ["Hiroyuki Ito", "Yoshinori Kitase", "Hironobu Sakaguchi", "Motomu Toriyama"],
      correct: "Hiroyuki Ito"
    }, {
      question: "Welcher Song ist ein berühmter Bestandteil des Final Fantasy IX Soundtracks?",
      answers: ["Melodies of Life", "Eyes on Me", "Suteki Da Ne", "To Zanarkand"],
      correct: "Melodies of Life"
    }, {
      question: "Welcher Charakter kämpft im Spiel mit seiner eigenen Existenz und Identität?",
      answers: ["Vivi Ornitier", "Zidane Tribal", "Steiner", "Amarant Coral"],
      correct: "Vivi Ornitier"
    }]
  },
  ff10: {
    title: "Final Fantasy X Quiz",
    questions: [{
      question: "Wie heißt der Protagonist von Final Fantasy X?",
      answers: ["Tidus", "Auron", "Wakka", "Yuna"],
      correct: "Tidus"
    }, {
      question: "Wer übernimmt in Final Fantasy X die Rolle der Beschwörerin auf Pilgerreise?",
      answers: ["Yuna", "Lulu", "Rikku", "Kimahri"],
      correct: "Yuna"
    }, {
      question: "Wie heißt die Welt, in der Final Fantasy X stattfindet?",
      answers: ["Spira", "Ivalice", "Eorzea", "Vana'diel"],
      correct: "Spira"
    }, {
      question: "Welcher weise, erfahrene Krieger begleitet Yuna und fungiert als Mentor?",
      answers: ["Auron", "Wakka", "Tidus", "Seymour"],
      correct: "Auron"
    }, {
      question: "Welcher Eidolon, der feurige Beschwörer, gehört zu Yunas Aeons?",
      answers: ["Ifrit", "Shiva", "Valefor", "Anima"],
      correct: "Ifrit"
    }, {
      question: "Welcher Aeon verkörpert in Final Fantasy X das Element Eis?",
      answers: ["Shiva", "Ifrit", "Ramuh", "Bahamut"],
      correct: "Shiva"
    }, {
      question: "Welcher Sport hat in Spira einen hohen Stellenwert und prägt das Leben vieler Charaktere?",
      answers: ["Blitzball", "Fußball", "Basketball", "Rugby"],
      correct: "Blitzball"
    }, {
      question: "Welcher flitzende Charakter bringt mit seiner Lebhaftigkeit Humor in Final Fantasy X?",
      answers: ["Rikku", "Yuna", "Lulu", "Auron"],
      correct: "Rikku"
    }, {
      question: "Wie heißt das Fortschrittssystem in Final Fantasy X, über das die Charaktere ihre Fähigkeiten verbessern können?",
      answers: ["Sphere Grid", "Junction System", "License Board", "Paradigm System"],
      correct: "Sphere Grid"
    }, {
      question: "Welches monströse Phänomen ist der stetige Gegner, dessen Wiederkehr Spira heimsucht?",
      answers: ["Sin", "Seymour", "Jecht", "Yevon"],
      correct: "Sin"
    }, {
      question: "Wie entsteht Sin gemäß der Hintergrundgeschichte von Final Fantasy X?",
      answers: ["Durch die Verwandlung von Jecht in ein Monster", "Durch magischen Missbrauch", "Als natürliche Katastrophe", "Durch den Fluch der Kristalle"],
      correct: "Durch die Verwandlung von Jecht in ein Monster"
    }, {
      question: "Welcher Aeon wird als erster von Yuna beschworen?",
      answers: ["Valefor", "Ifrit", "Shiva", "Anima"],
      correct: "Valefor"
    }, {
      question: "Welches religiöse Dogma prägt den Glauben in Spira und führt zu einem endlosen Kreislauf der Zerstörung?",
      answers: ["Yevon", "Gaia", "Rikudou", "Spira"],
      correct: "Yevon"
    }, {
      question: "Welche grundlegende Thematik spiegelt sich in Final Fantasy X wider?",
      answers: ["Identität und Vergänglichkeit", "Krieg und Eroberung", "Technologischer Fortschritt", "Freundschaft und Verrat"],
      correct: "Identität und Vergänglichkeit"
    }, {
      question: "Welcher Sport treibt Tidus besonders an und prägt damit einen großen Teil seiner Persönlichkeit?",
      answers: ["Blitzball", "Fußball", "Baseball", "Basketball"],
      correct: "Blitzball"
    }, {
      question: "Was passiert am Ende von Final Fantasy X mit Tidus?",
      answers: ["Er verschwindet, da seine Existenz ein Traum war", "Er bleibt, um Spira zu beschützen", "Er wird zum Gott", "Er opfert sich im finalen Kampf"],
      correct: "Er verschwindet, da seine Existenz ein Traum war"
    }, {
      question: "Welcher Charakter, der selbst aus der Blitzball-Szene stammt, hinterfragt im Verlauf des Spiels die dogmatischen Lehren von Yevon?",
      answers: ["Wakka", "Auron", "Tidus", "Rikku"],
      correct: "Wakka"
    }, {
      question: "Welcher Aeon stellt im späteren Verlauf Final Fantasy X’ eine der gewaltigsten Beschwörungsfähigkeiten zur Verfügung?",
      answers: ["Anima", "Bahamut", "Ixion", "Valefor"],
      correct: "Anima"
    }, {
      question: "Wie nennt sich die ultimative Fähigkeit, die jeder Charakter einsetzen kann, sobald seine Overdrive-Leiste gefüllt ist?",
      answers: ["Overdrive", "Limit Break", "Final Attack", "Ether Burst"],
      correct: "Overdrive"
    }, {
      question: "Wie viele Spieler bilden in Final Fantasy X typischerweise eine Blitzball-Mannschaft?",
      answers: ["7", "5", "9", "11"],
      correct: "7"
    }]
  }
};

/***/ })

}]);
//# sourceMappingURL=src_app_views_battle_battle_module_ts.js.map