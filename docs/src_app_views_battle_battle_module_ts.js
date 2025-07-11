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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);















function BattleComponent_div_0_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", ctx_r1.boss.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "assets/icons/" + ctx_r1.boss.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BattleComponent_div_0_div_8_li_4_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cond_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.formatCondition(cond_r3.stat, cond_r3.operator, cond_r3.value), " ");
  }
}
function BattleComponent_div_0_div_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BattleComponent_div_0_div_8_li_4_small_7_Template, 2, 1, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const adv_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](adv_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](adv_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", adv_r4.condition);
  }
}
function BattleComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Kampfeffekte");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BattleComponent_div_0_div_8_li_4_Template, 8, 3, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.battle.advantagesUnlocked);
  }
}
function BattleComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Deine Werte");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul")(4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Level: ", ctx_r1.playerStats.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("HP: ", ctx_r1.playerStats.hp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("St\u00E4rke: ", ctx_r1.playerStats.strength, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Geschicklichkeit: ", ctx_r1.playerStats.agility, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Intelligenz: ", ctx_r1.playerStats.intelligence, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Gil: ", ctx_r1.playerStats.money, "");
  }
}
function BattleComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "HP anpassen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 24)(4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BattleComponent_div_0_div_10_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.hpInput, $event) || (ctx_r1.hpInput = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BattleComponent_div_0_div_10_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.adjustHp(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Abziehen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.hpInput);
  }
}
function BattleComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Sieg wirklich best\u00E4tigen?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BattleComponent_div_0_div_15_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.finish(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Ja, sicher!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BattleComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Kein aktiver Kampf.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BattleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BattleComponent_div_0_img_2_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, BattleComponent_div_0_div_8_Template, 5, 1, "div", 6)(9, BattleComponent_div_0_div_9_Template, 16, 6, "div", 7)(10, BattleComponent_div_0_div_10_Template, 7, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BattleComponent_div_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleConfirmWin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Sieg");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, BattleComponent_div_0_div_15_Template, 5, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BattleComponent_div_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.finish(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Niederlage");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 14)(19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BattleComponent_div_0_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Zur\u00FCck");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, BattleComponent_div_0_div_21_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.boss.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Kampf gegen: ", ctx_r1.boss.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Beginn: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 8, ctx_r1.battle.startedAt, "shortTime"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.battle.advantagesUnlocked.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.playerStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.playerHp !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.confirmWinVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.battle);
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
    loadBoss(bossId) {
      const bosses = this.battleService.getGameState().bosses;
      this.boss = bosses.find(b => b.id === bossId) || null;
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
      return new (t || BattleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_battle_service__WEBPACK_IMPORTED_MODULE_0__.BattleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_sound_service__WEBPACK_IMPORTED_MODULE_1__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_quest_service__WEBPACK_IMPORTED_MODULE_3__.QuestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_inventory_service__WEBPACK_IMPORTED_MODULE_4__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: BattleComponent,
      selectors: [["app-battle"]],
      decls: 1,
      vars: 1,
      consts: [["class", "battle-container", 4, "ngIf"], [1, "battle-container"], [1, "boss-header"], ["class", "boss-icon", 3, "src", "alt", 4, "ngIf"], [1, "boss-name"], [1, "timestamp"], ["class", "advantages", 4, "ngIf"], ["class", "player-stats", 4, "ngIf"], ["class", "hp-manipulation", 4, "ngIf"], [1, "battle-actions-row"], [1, "confirmable-button"], [1, "rpg-button", "win", 3, "click"], ["class", "confirm-collapse", 4, "ngIf"], [1, "rpg-button", "lose", 3, "click"], [1, "back-button"], [1, "rpg-button", "back", 3, "click"], ["class", "no-battle", 4, "ngIf"], [1, "boss-icon", 3, "src", "alt"], [1, "advantages"], [4, "ngFor", "ngForOf"], ["class", "condition-chip", 4, "ngFor", "ngForOf"], [1, "condition-chip"], [1, "player-stats"], [1, "hp-manipulation"], [1, "hp-input-row"], ["type", "number", "placeholder", "10", "min", "1", 3, "ngModelChange", "ngModel"], [1, "rpg-button", "action", 3, "click"], [1, "confirm-collapse"], [1, "rpg-button", "confirm", 3, "click"], [1, "no-battle"]],
      template: function BattleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BattleComponent_div_0_Template, 22, 11, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.battle && ctx.boss);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n.battle-container[_ngcontent-%COMP%] {\n  background: #1e1b18;\n  border: 2px solid #e3b873;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin: 1rem;\n  margin-bottom: 9rem;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  min-height: 100%;\n}\n.battle-container[_ngcontent-%COMP%]   .boss-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.battle-container[_ngcontent-%COMP%]   .boss-header[_ngcontent-%COMP%]   .boss-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.battle-container[_ngcontent-%COMP%]   .boss-header[_ngcontent-%COMP%]   .boss-name[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: bold;\n  margin: 0;\n}\n.battle-container[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%] {\n  background: #2a2520;\n  border: 1px solid #e3b873;\n  padding: 1rem;\n  border-radius: 8px;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n  line-height: 1.4;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.2rem;\n}\n.battle-container[_ngcontent-%COMP%]   .advantages[_ngcontent-%COMP%]   .condition-chip[_ngcontent-%COMP%], .battle-container[_ngcontent-%COMP%]   .player-stats[_ngcontent-%COMP%]   .condition-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #3c332b;\n  border: 1px solid #e3b873;\n  color: #e3b873;\n  padding: 0.2rem 0.5rem;\n  margin: 0.3rem 0.3rem 0 0;\n  border-radius: 6px;\n  font-size: 0.75rem;\n}\n.battle-container[_ngcontent-%COMP%]   .hp-manipulation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.3rem;\n}\n.battle-container[_ngcontent-%COMP%]   .hp-manipulation[_ngcontent-%COMP%]   .hp-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.battle-container[_ngcontent-%COMP%]   .hp-manipulation[_ngcontent-%COMP%]   .hp-input-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 4rem;\n  padding: 0.3rem;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: 1px solid #aaa;\n  text-align: center;\n  background: #f0f0f0;\n  color: #000;\n}\n.battle-container[_ngcontent-%COMP%]   .hp-manipulation[_ngcontent-%COMP%]   .hp-input-row[_ngcontent-%COMP%]   .rpg-button.action[_ngcontent-%COMP%] {\n  background: #444;\n  color: #fff;\n  padding: 0.4rem 1rem;\n  font-size: 0.95rem;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .rpg-button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.2rem;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  background: #333;\n  color: #fff;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .rpg-button.win[_ngcontent-%COMP%] {\n  background: #3e6745;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .rpg-button.lose[_ngcontent-%COMP%] {\n  background: #803e3e;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .rpg-button.confirm[_ngcontent-%COMP%] {\n  background: #2a9d8f;\n  margin-top: 0.5rem;\n  width: 100%;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .confirmable-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.battle-container[_ngcontent-%COMP%]   .battle-actions-row[_ngcontent-%COMP%]   .confirmable-button[_ngcontent-%COMP%]   .confirm-collapse[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  background: #2a2520;\n  border: 1px solid #e3b873;\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  color: #ffd;\n  text-align: center;\n}\n.battle-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem 0 0 0;\n}\n.battle-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .rpg-button.back[_ngcontent-%COMP%] {\n  background: #555;\n  color: #fff;\n  padding: 0.5rem 1.5rem;\n  font-size: 1rem;\n  border-radius: 6px;\n}\n\n.no-battle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #aaa;\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYmF0dGxlL2JhdHRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNOO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUFOO0FBSUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFITjtBQU1JO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FBSk47QUFNTTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU1RO0VBQ0UsY0FBQTtBQUpWO0FBT1E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFMVjtBQVVJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFhSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQVhOO0FBY0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBWk47QUFjTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVpSO0FBZU07RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBYlI7QUFrQkU7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBaEJGO0FBa0JFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBaEJKO0FBa0JJO0VBQ0UsbUJBQUE7QUFoQk47QUFtQkk7RUFDRSxtQkFBQTtBQWpCTjtBQW9CSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbEJOO0FBc0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFwQko7QUFzQkk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFwQk47QUEwQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBeEJGO0FBMEJFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBOEJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQTNCRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5iYXR0bGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMWUxYjE4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlM2I4NzM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDlyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5ib3NzLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICAuYm9zcy1pY29uIHtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIH1cclxuXHJcbiAgICAuYm9zcy1uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGltZXN0YW1wIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgLmFkdmFudGFnZXMsIC5wbGF5ZXItc3RhdHMge1xyXG4gICAgYmFja2dyb3VuZDogIzJhMjUyMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2I4NzM7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuXHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZkNzAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29uZGl0aW9uLWNoaXAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzYzMzMmI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2I4NzM7XHJcbiAgICAgIGNvbG9yOiAjZTNiODczO1xyXG4gICAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xyXG4gICAgICBtYXJnaW46IDAuM3JlbSAwLjNyZW0gMCAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ocC1tYW5pcHVsYXRpb24ge1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaHAtaW5wdXQtcm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC4zcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJwZy1idXR0b24uYWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhdHRsZS1hY3Rpb25zLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAucnBnLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgJi53aW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjM2U2NzQ1O1xyXG4gICAgfVxyXG5cclxuICAgICYubG9zZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM4MDNlM2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5jb25maXJtIHtcclxuICAgICAgYmFja2dyb3VuZDogIzJhOWQ4ZjtcclxuICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb25maXJtYWJsZS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5jb25maXJtLWNvbGxhcHNlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMmEyNTIwO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNiODczO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgY29sb3I6ICNmZmQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uYmFjay1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDFyZW0gMCAwIDA7XHJcblxyXG4gIC5ycGctYnV0dG9uLmJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbn1cclxuXHJcbi5uby1iYXR0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2FhYTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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