"use strict";
(self["webpackChunkteitingquest"] = self["webpackChunkteitingquest"] || []).push([["src_app_views_scanner_scanner_module_ts"],{

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

/***/ 1100:
/*!****************************************************!*\
  !*** ./src/app/core/services/inventory.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryService: () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/toasts/toast.service */ 8258);
/* harmony import */ var _game_save_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-save.service */ 2200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






let InventoryService = /*#__PURE__*/(() => {
  class InventoryService {
    toast;
    gameSave;
    items$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    constructor(toast, gameSave) {
      this.toast = toast;
      this.gameSave = gameSave;
    }
    setInventory(items) {
      this.commit(items);
    }
    getInventory() {
      return this.items$.asObservable();
    }
    addItem(item) {
      const current = this.items$.value;
      const updated = [...current, item];
      this.commit(updated);
    }
    addItems(items) {
      const current = this.items$.value;
      const updated = [...current, ...items];
      this.commit(updated);
    }
    removeItem(id) {
      const current = this.items$.value;
      const updated = current.filter(item => item.id !== id);
      this.commit(updated);
    }
    updateEquippedStatus(id, equipped) {
      const current = this.items$.value;
      const updated = current.map(item => item.id === id ? {
        ...item,
        equipped
      } : item);
      this.commit(updated);
    }
    removeSingleItem(itemToRemove) {
      const current = this.items$.value;
      const index = current.findIndex(i => i.id === itemToRemove.id && i.acquiredAt === itemToRemove.acquiredAt);
      if (index !== -1) {
        current.splice(index, 1);
        this.commit([...current]);
      }
    }
    getSnapshot() {
      return this.items$.value;
    }
    commit(updated) {
      this.items$.next(updated);
      this.gameSave.updateCurrentGame();
    }
    static ɵfac = function InventoryService_Factory(t) {
      return new (t || InventoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_game_save_service__WEBPACK_IMPORTED_MODULE_1__.GameSaveService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: InventoryService,
      factory: InventoryService.ɵfac,
      providedIn: 'root'
    });
  }
  return InventoryService;
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

/***/ 4016:
/*!****************************************************!*\
  !*** ./src/app/core/services/qr-action.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrActionService: () => (/* binding */ QrActionService)
/* harmony export */ });
/* harmony import */ var _data_qr_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/qr-actions */ 3302);
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.service */ 1100);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ 3665);
/* harmony import */ var _sound_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound.service */ 3455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);








let QrActionService = /*#__PURE__*/(() => {
  class QrActionService {
    playerService;
    inventoryService;
    soundService;
    constructor(playerService, inventoryService, soundService) {
      this.playerService = playerService;
      this.inventoryService = inventoryService;
      this.soundService = soundService;
    }
    handleQrCode(code) {
      const action = _data_qr_actions__WEBPACK_IMPORTED_MODULE_0__.QrActionMap[code];
      if (!action) return 'Unbekannter Code.';
      switch (action.type) {
        case 'heal':
          this.playerService.heal(action.amount);
          this.soundService.playEffect('heal');
          return action.description ?? `+${action.amount} HP geheilt.`;
        case 'item':
          const item = {
            id: action.itemId,
            name: action.itemId,
            description: 'Ein mächtiges Item.',
            icon: 'placeholder.png',
            type: 'equipment',
            acquiredAt: new Date()
          };
          this.inventoryService.addItem(item);
          this.soundService.playEffect('item-kaufen');
          return `Item erhalten: ${action.itemId}`;
        case 'quest':
          // questService.addQuest(action.questId); // später
          this.soundService.playEffect('quest-annahme');
          return `Neue Quest erhalten: ${action.questId}`;
        case 'startBattle':
          // navigationService.navigateToBattle(action.bossId); → später
          return `Kampf gegen Boss gestartet: ${action.bossId}`;
        default:
          return 'Unbekannte Aktion.';
      }
    }
    static ɵfac = function QrActionService_Factory(t) {
      return new (t || QrActionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_inventory_service__WEBPACK_IMPORTED_MODULE_1__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_sound_service__WEBPACK_IMPORTED_MODULE_3__.SoundService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: QrActionService,
      factory: QrActionService.ɵfac,
      providedIn: 'root'
    });
  }
  return QrActionService;
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

/***/ }),

/***/ 3302:
/*!********************************!*\
  !*** ./src/data/qr-actions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QrActionMap: () => (/* binding */ QrActionMap)
/* harmony export */ });
const QrActionMap = {
  'heal-bier': {
    type: 'heal',
    amount: 10,
    description: 'Du trinkst ein Bier und fühlst dich besser.'
  },
  'item-schwert': {
    type: 'item',
    itemId: 'sword-of-glory'
  },
  'start-battle-max': {
    type: 'startBattle',
    bossId: 'max'
  },
  'quest-goldene-hose': {
    type: 'quest',
    questId: 'goldene-hose'
  }
};

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
//# sourceMappingURL=src_app_views_scanner_scanner_module_ts.js.map