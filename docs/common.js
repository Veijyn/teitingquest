"use strict";
(self["webpackChunkteitingquest"] = self["webpackChunkteitingquest"] || []).push([["common"],{

/***/ 9232:
/*!***********************************************************!*\
  !*** ./src/app/components/inventory/inventory.factory.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEquipmentItems: () => (/* binding */ createEquipmentItems)
/* harmony export */ });
function createEquipmentItems() {
  const now = new Date();
  return [{
    id: 'belt',
    slot: 'belt',
    name: 'Starker Gürtel',
    description: 'Ein stabiler Gürtel, der Haltung und Magie stärkt.',
    icon: 'belt.svg',
    type: 'equipment',
    bonusStats: {
      hp: 1,
      agility: 1,
      intelligence: 1
    },
    acquiredAt: now,
    questsRequired: 1,
    available: false
  }, {
    id: 'helmet',
    name: 'Mystischer Helm',
    slot: 'head',
    description: 'Eine verstärkte Kopfbedeckung für mutige Abenteurer.',
    icon: 'helm.svg',
    type: 'equipment',
    bonusStats: {
      hp: 1,
      intelligence: 2
    },
    acquiredAt: now,
    questsRequired: 5,
    available: false
  }, {
    id: 'backmount',
    slot: 'back',
    name: 'Waffenhalterung',
    description: 'Ermöglicht dir, deine Waffen noch schneller zu ziehen.',
    icon: 'scheide.svg',
    type: 'equipment',
    bonusStats: {
      hp: 2,
      intelligence: 1
    },
    acquiredAt: now,
    questsRequired: 10,
    available: false
  }, {
    id: 'gloves',
    slot: 'hands',
    name: 'Kampfhandschuhe',
    description: 'Stärken den Griff und den Schlag im Kampf.',
    icon: 'gloves.svg',
    type: 'equipment',
    bonusStats: {
      hp: 2,
      strength: 1
    },
    acquiredAt: now,
    questsRequired: 16,
    available: false
  }, {
    id: 'pants',
    slot: 'legs',
    name: 'Bequeme Hose',
    description: 'Bietet Beweglichkeit und etwas Schutz.',
    icon: 'beine.svg',
    type: 'equipment',
    bonusStats: {
      hp: 5,
      agility: 1
    },
    acquiredAt: now,
    questsRequired: 23,
    available: false
  }, {
    id: 'chest',
    slot: 'chest',
    name: 'Brustpanzer',
    description: 'Robuste Brustplatte gegen jegliche Gefahren.',
    icon: 'brust.svg',
    type: 'equipment',
    bonusStats: {
      hp: 5,
      strength: 1
    },
    acquiredAt: now,
    questsRequired: 31,
    available: false
  }, {
    id: 'wrist',
    slot: 'wrist',
    name: 'Gelenkschützer',
    description: 'Im Shop erhältlich – schützt und stärkt die Gelenke.',
    icon: 'wrist.svg',
    type: 'equipment',
    bonusStats: {
      hp: 2,
      strength: 1
    },
    price: 40,
    acquiredAt: now,
    available: false
  }, {
    id: 'shoulder',
    slot: 'shoulders',
    name: 'Schulterplatte',
    description: 'Kommt aus einer geheimnisvollen Lootbox.',
    icon: 'schultern.svg',
    type: 'equipment',
    bonusStats: {
      hp: 3,
      agility: 1,
      intelligence: 1
    },
    acquiredAt: now,
    available: false
  }, {
    id: 'boots',
    slot: 'feet',
    name: 'Verzauberte Stiefel',
    description: 'Ein Schatz aus einem alten Haus – macht dich schneller.',
    icon: 'boots.svg',
    type: 'equipment',
    bonusStats: {
      hp: 2,
      strength: 1,
      agility: 2
    },
    acquiredAt: now,
    available: false
  }, {
    id: 'bastardsword',
    slot: 'weapon',
    name: 'Bastardschwert',
    description: 'Erhalten durch Sieg gegen alle Triple-Triad-Spieler.',
    icon: 'schwert.svg',
    type: 'equipment',
    bonusStats: {
      strength: 3,
      agility: 2,
      intelligence: 2
    },
    acquiredAt: now,
    available: false
  }, {
    id: 'gunblade',
    slot: 'weapon',
    name: 'Gunblade',
    description: 'Ultimative Waffe – nur durch das Sammeln aller Rüstungsteile.',
    icon: 'schwert.svg',
    type: 'equipment',
    bonusStats: {
      strength: 7,
      agility: 5,
      intelligence: 5
    },
    acquiredAt: now,
    available: false
  }];
}

/***/ }),

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
    getGameState() {
      return this.gameState;
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
            //this.soundService.playEffect("boss-besiegt-quest-erfuellt");
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

/***/ 7901:
/*!***********************************************!*\
  !*** ./src/app/core/services/boss.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BossService: () => (/* binding */ BossService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let BossService = /*#__PURE__*/(() => {
  class BossService {
    bosses$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    setBosses(bosses) {
      this.bosses$.next([...bosses]);
    }
    getBosses() {
      return this.bosses$.asObservable();
    }
    getSnapshot() {
      return this.bosses$.value;
    }
    static ɵfac = function BossService_Factory(t) {
      return new (t || BossService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BossService,
      factory: BossService.ɵfac,
      providedIn: 'root'
    });
  }
  return BossService;
})();

/***/ }),

/***/ 3108:
/*!***********************************************!*\
  !*** ./src/app/core/services/shop.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopService: () => (/* binding */ ShopService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let ShopService = /*#__PURE__*/(() => {
  class ShopService {
    shopItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    setShopItems(items) {
      this.shopItems$.next([...items]);
    }
    getShopItems() {
      return this.shopItems$.asObservable();
    }
    updateStock(itemId, delta) {
      const current = this.shopItems$.value;
      const updated = current.map(item => item.id === itemId ? {
        ...item,
        stock: item.stock + delta
      } : item);
      this.shopItems$.next(updated);
    }
    getSnapshot() {
      return this.shopItems$.value;
    }
    static ɵfac = function ShopService_Factory(t) {
      return new (t || ShopService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ShopService,
      factory: ShopService.ɵfac,
      providedIn: 'root'
    });
  }
  return ShopService;
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

/***/ })

}]);
//# sourceMappingURL=common.js.map