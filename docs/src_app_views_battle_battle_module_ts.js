"use strict";
(self["webpackChunkteitingquest"] = self["webpackChunkteitingquest"] || []).push([["src_app_views_battle_battle_module_ts"],{

/***/ 4406:
/*!*************************************************!*\
  !*** ./src/app/core/services/battle.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BattleService: () => (/* binding */ BattleService)
/* harmony export */ });
/* harmony import */ var C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _utils_evaluate_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/evaluate-condition */ 9699);
/* harmony import */ var _game_save_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-save.service */ 2200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);








let BattleService = /*#__PURE__*/(() => {
  class BattleService {
    router;
    gameSave;
    currentBattle$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    gameState;
    constructor(router, gameSave) {
      this.router = router;
      this.gameSave = gameSave;
    }
    setGameState(state) {
      this.gameState = state;
    }
    startBattle(bossId) {
      const boss = this.gameState.bosses.find(b => b.id === bossId);
      if (!boss) return;
      const unlockedAdvantages = boss.advantages.filter(adv => (0,_utils_evaluate_condition__WEBPACK_IMPORTED_MODULE_1__.evaluateCondition)(adv.condition, this.gameState.player));
      const battle = {
        id: `${bossId}-${Date.now()}`,
        bossId: boss.id,
        advantagesUnlocked: unlockedAdvantages,
        startedAt: new Date()
      };
      this.currentBattle$.next(battle);
    }
    getCurrentBattle() {
      return this.currentBattle$.asObservable();
    }
    finishBattle(won) {
      var _this = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const battle = _this.currentBattle$.value;
        if (!battle) return;
        battle.outcome = won ? 'win' : 'loss';
        battle.finishedAt = new Date();
        const boss = _this.gameState.bosses.find(b => b.id === battle.bossId);
        if (boss) {
          if (won) {
            boss.defeated = true;
          } else {
            boss.attempts = (boss.attempts || 0) + 1;
          }
        }
        _this.gameState.battles.push(battle);
        _this.currentBattle$.next(null);
        yield _this.gameSave.updateCurrentGame();
        _this.router.navigate(['/game']);
      })();
    }
    getSnapshot() {
      return this.gameState.battles;
    }
    static ɵfac = function BattleService_Factory(t) {
      return new (t || BattleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_game_save_service__WEBPACK_IMPORTED_MODULE_2__.GameSaveService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: BattleService,
      factory: BattleService.ɵfac,
      providedIn: 'root'
    });
  }
  return BattleService;
})();

/***/ }),

/***/ 2200:
/*!****************************************************!*\
  !*** ./src/app/core/services/game-save.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameSaveService: () => (/* binding */ GameSaveService)
/* harmony export */ });
/* harmony import */ var C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-indexed-db */ 465);





let GameSaveService = /*#__PURE__*/(() => {
  class GameSaveService {
    db;
    lastGameStateId;
    currentSnapshotBuilder;
    constructor(db) {
      this.db = db;
    }
    registerSnapshotBuilder(builder) {
      this.currentSnapshotBuilder = builder;
    }
    saveNewGame(state) {
      var _this = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        state.updatedAt = new Date();
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this.db.add('gameStates', state));
        const id = typeof result === 'number' ? result : result.id;
        _this.lastGameStateId = id;
        return {
          ...state,
          id
        };
      })();
    }
    updateCurrentGame() {
      var _this2 = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this2.currentSnapshotBuilder) throw new Error('No snapshot builder registered.');
        const snapshot = _this2.currentSnapshotBuilder();
        snapshot.updatedAt = new Date();
        return _this2.updateGame(snapshot);
      })();
    }
    updateGame(state) {
      var _this3 = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this3.db.update('gameStates', state));
        return state;
      })();
    }
    loadGame(id) {
      var _this4 = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.lastGameStateId = id;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this4.db.getByKey('gameStates', id));
      })();
    }
    listGames() {
      var _this5 = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this5.db.getAll('gameStates'));
      })();
    }
    static ɵfac = function GameSaveService_Factory(t) {
      return new (t || GameSaveService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_3__.NgxIndexedDBService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: GameSaveService,
      factory: GameSaveService.ɵfac,
      providedIn: 'root'
    });
  }
  return GameSaveService;
})();

/***/ }),

/***/ 3665:
/*!*************************************************!*\
  !*** ./src/app/core/services/player.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerService: () => (/* binding */ PlayerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let PlayerService = /*#__PURE__*/(() => {
  class PlayerService {
    player$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    setPlayer(stats) {
      this.player$.next({
        ...stats
      });
    }
    getPlayer() {
      return this.player$.asObservable();
    }
    updatePlayer(stats) {
      this.player$.next({
        ...stats
      });
    }
    heal(amount) {
      const stats = this.player$.value;
      if (!stats) return;
      stats.hp += amount;
      this.player$.next({
        ...stats
      });
    }
    pay(amount) {
      const stats = this.player$.value;
      if (!stats || stats.money < amount) return false;
      stats.money -= amount;
      this.player$.next({
        ...stats
      });
      return true;
    }
    addMoney(amount) {
      const stats = this.player$.value;
      if (!stats) return;
      stats.money += amount;
      this.player$.next({
        ...stats
      });
    }
    addXp(amount) {
      const stats = this.player$.value;
      if (!stats) return;
      stats.experience += amount;
      this.player$.next({
        ...stats
      });
    }
    updateStats(partial) {
      const current = this.player$.value;
      this.player$.next({
        ...current,
        ...partial
      });
    }
    getSnapshot() {
      return this.player$.value;
    }
    static ɵfac = function PlayerService_Factory(t) {
      return new (t || PlayerService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PlayerService,
      factory: PlayerService.ɵfac,
      providedIn: 'root'
    });
  }
  return PlayerService;
})();

/***/ }),

/***/ 9699:
/*!**************************************************!*\
  !*** ./src/app/core/utils/evaluate-condition.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateCondition: () => (/* binding */ evaluateCondition)
/* harmony export */ });
function evaluateCondition(conditions, stats) {
  return conditions.every(cond => {
    const statVal = stats[cond.stat] ?? 0;
    switch (cond.operator) {
      case '>=':
        return statVal >= cond.value;
      case '<=':
        return statVal <= cond.value;
      case '>':
        return statVal > cond.value;
      case '<':
        return statVal < cond.value;
      case '==':
        return statVal === cond.value;
      case '!=':
        return statVal !== cond.value;
      default:
        return false;
    }
  });
}

/***/ }),

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

/***/ }),

/***/ 6196:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 3335);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 9285);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_views_battle_battle_module_ts.js.map