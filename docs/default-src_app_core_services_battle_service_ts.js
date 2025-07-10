"use strict";
(self["webpackChunkteitingquest"] = self["webpackChunkteitingquest"] || []).push([["default-src_app_core_services_battle_service_ts"],{

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _utils_evaluate_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/evaluate-condition */ 9699);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ 3665);
/* harmony import */ var _game_save_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-save.service */ 2200);
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound.service */ 3455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);












let BattleService = /*#__PURE__*/(() => {
  class BattleService {
    router;
    playerService;
    gameSave;
    soundService;
    currentBattle$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    gameState;
    constructor(router, playerService, gameSave, soundService) {
      this.router = router;
      this.playerService = playerService;
      this.gameSave = gameSave;
      this.soundService = soundService;
    }
    setGameState(state) {
      this.gameState = state;
    }
    startBattle(bossId) {
      const boss = this.gameState.bosses.find(b => b.id === bossId);
      if (!boss) return;
      const effectivePlayerStats = this.playerService.getEffectiveStats();
      if (!effectivePlayerStats) return;
      const unlockedAdvantages = boss.advantages.filter(adv => (0,_utils_evaluate_condition__WEBPACK_IMPORTED_MODULE_1__.evaluateCondition)(adv.condition, effectivePlayerStats));
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
            _this.soundService.playEffect("boss-besiegt-quest-erfuellt");
          } else {
            boss.attempts = (boss.attempts || 0) + 1;
            _this.soundService.playEffect("hp-null");
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
      return new (t || BattleService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_game_save_service__WEBPACK_IMPORTED_MODULE_3__.GameSaveService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_sound_service__WEBPACK_IMPORTED_MODULE_4__.SoundService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _core_utils_calculate_effective_stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/calculate-effective-stats */ 2192);
/* harmony import */ var _game_save_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-save.service */ 2200);
/* harmony import */ var _utils_xp_curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/xp-curve */ 350);
/* harmony import */ var _views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @views/toasts/toast.service */ 8258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);








let PlayerService = /*#__PURE__*/(() => {
  class PlayerService {
    gameSave;
    toast;
    player$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    constructor(gameSave, toast) {
      this.gameSave = gameSave;
      this.toast = toast;
    }
    setPlayer(stats) {
      this.player$.next({
        ...stats
      });
    }
    getPlayer() {
      return this.player$.asObservable();
    }
    getSnapshot() {
      return this.player$.value;
    }
    updatePlayer(stats) {
      this.player$.next({
        ...stats
      });
      this.gameSave.updateCurrentGame();
    }
    pay(amount) {
      const stats = this.player$.value;
      if (!stats || stats.money < amount) return false;
      stats.money -= amount;
      this.commit(stats); // nutzt jetzt zentrale commit-Methode
      return true;
    }
    addXp(amount) {
      const stats = this.player$.value;
      if (!stats) return;
      const oldLevel = stats.level;
      const newXp = stats.experience + amount;
      const newLevel = (0,_utils_xp_curve__WEBPACK_IMPORTED_MODULE_2__.getLevelForXp)(newXp);
      const levelDiff = newLevel - oldLevel;
      if (levelDiff > 0) {
        this.toast.show(`Du bist jetzt Level ${newLevel}!`);
        // Dauerhafte Stat-Increases (Basiswerte!)
        stats.hp += 3 * levelDiff;
        stats.strength += 1 * levelDiff;
        stats.agility += 1 * levelDiff;
        stats.intelligence += 1 * levelDiff;
      }
      this.commit({
        ...stats,
        experience: newXp,
        level: newLevel
      });
    }
    addMoney(amount) {
      const stats = this.player$.value;
      if (!stats) return;
      stats.money += amount;
      this.commit(stats);
    }
    heal(amount) {
      const stats = this.player$.value;
      if (!stats) return;
      stats.hp += amount;
      this.commit(stats);
    }
    updateStats(partial) {
      const stats = this.player$.value;
      if (!stats) return;
      this.commit({
        ...stats,
        ...partial
      });
    }
    getEffectiveStats() {
      const player = this.player$.value;
      return player ? (0,_core_utils_calculate_effective_stats__WEBPACK_IMPORTED_MODULE_0__.calculateEffectiveStats)(player) : null;
    }
    removeExpiredBuffs() {
      const stats = this.player$.value;
      if (!stats || !stats.activeBuffs) return;
      const now = new Date();
      const stillValid = stats.activeBuffs.filter(buff => {
        const validUntil = buff.validUntil;
        return !validUntil || new Date(validUntil) > now;
      });
      if (stillValid.length !== stats.activeBuffs.length) {
        this.commit({
          ...stats,
          activeBuffs: stillValid
        });
      }
    }
    equipItem(item) {
      const stats = this.player$.value;
      if (!stats || !item.slot) return;
      const filtered = (stats.equippedItems ?? []).filter(i => i.slot !== item.slot);
      const updatedItem = {
        ...item,
        equipped: true
      };
      stats.equippedItems = [...filtered, updatedItem];
      this.commit(stats);
    }
    unequipItem(slot) {
      const stats = this.player$.value;
      if (!stats) return;
      stats.equippedItems = (stats.equippedItems ?? []).filter(i => i.slot !== slot);
      this.commit(stats);
    }
    addBuff(item, durationMs) {
      const stats = this.player$.value;
      if (!stats) return;
      const buffItem = {
        ...item,
        validUntil: new Date(Date.now() + durationMs)
      };
      stats.activeBuffs = [...(stats.activeBuffs ?? []), buffItem];
      this.commit(stats);
    }
    commit(updated) {
      this.player$.next({
        ...updated
      });
      this.gameSave.updateCurrentGame();
    }
    static ɵfac = function PlayerService_Factory(t) {
      return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_game_save_service__WEBPACK_IMPORTED_MODULE_1__.GameSaveService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: PlayerService,
      factory: PlayerService.ɵfac,
      providedIn: 'root'
    });
  }
  return PlayerService;
})();

/***/ }),

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

/***/ }),

/***/ 2192:
/*!*********************************************************!*\
  !*** ./src/app/core/utils/calculate-effective-stats.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateEffectiveStats: () => (/* binding */ calculateEffectiveStats)
/* harmony export */ });
function calculateEffectiveStats(player) {
  const now = new Date();
  const numericStats = ['strength', 'agility', 'intelligence', 'hp'];
  const bonuses = {
    strength: 0,
    agility: 0,
    intelligence: 0,
    hp: 0,
    money: 0,
    level: 0,
    experience: 0,
    questsCompleted: 0,
    equippedItems: 0,
    activeBuffs: 0,
    lastBuffFoodUsedAt: 0,
    lastPotionUsedAt: 0
  };
  // Ausrüstung
  for (const item of player.equippedItems ?? []) {
    if (!item.bonusStats) continue;
    for (const key in item.bonusStats) {
      const stat = key;
      const val = item.bonusStats[stat];
      if (numericStats.includes(stat) && typeof val === 'number') {
        bonuses[stat] += val; // ✅ berücksichtigt auch negative Werte
      }
    }
  }
  // Aktive Buffs
  for (const item of player.activeBuffs ?? []) {
    const validUntil = item.validUntil;
    if (validUntil && new Date() > new Date(validUntil)) continue;
    if (!item.bonusStats) continue;
    for (const key in item.bonusStats) {
      const stat = key;
      const val = item.bonusStats[stat];
      if (numericStats.includes(stat) && typeof val === 'number') {
        bonuses[stat] += val; // ✅ auch hier: negativ erlaubt
      }
    }
  }
  return {
    ...player,
    strength: player.strength + bonuses.strength,
    agility: player.agility + bonuses.agility,
    intelligence: player.intelligence + bonuses.intelligence,
    hp: player.hp + bonuses.hp
  };
}

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
    const statVal = stats[cond.stat];
    if (typeof statVal !== 'number') return false;
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

/***/ 350:
/*!****************************************!*\
  !*** ./src/app/core/utils/xp-curve.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XP_TABLE: () => (/* binding */ XP_TABLE),
/* harmony export */   getLevelForXp: () => (/* binding */ getLevelForXp)
/* harmony export */ });
const XP_TABLE = [0,
// Level 1
100,
// Level 2
350,
// Level 3
700,
// Level 4
1200,
// Level 5
1900,
// Level 6
2800,
// Level 7
3900,
// Level 8
5200,
// Level 9
7400 // Level 10
];
function getLevelForXp(xp) {
  for (let i = XP_TABLE.length - 1; i >= 0; i--) {
    if (xp >= XP_TABLE[i]) return i + 1;
  }
  return 1;
}

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
//# sourceMappingURL=default-src_app_core_services_battle_service_ts.js.map