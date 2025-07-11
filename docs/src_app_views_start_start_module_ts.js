"use strict";
(self["webpackChunkteitingquest"] = self["webpackChunkteitingquest"] || []).push([["src_app_views_start_start_module_ts"],{

/***/ 9416:
/*!******************************************************!*\
  !*** ./src/app/components/boss-list/boss.factory.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBosses: () => (/* binding */ createBosses)
/* harmony export */ });
function createBosses() {
  return [{
    id: 'boss-mimic',
    name: 'Vermummter Fremder',
    title: 'Der Gestaltlose',
    description: 'Es ist schon seltsam wie beweglich er in dieser Kleidung ist.',
    image: 'ninja-head.svg',
    questId: 'mimikry-gogo',
    stats: {
      hp: 100,
      strength: 10,
      agility: 10,
      intelligence: 10,
      experience: 250,
      money: 50,
      level: 1
    },
    advantages: [{
      id: 'int-9',
      name: 'Regelverständnis',
      description: 'Questregeln werden erklärt',
      condition: [{
        stat: 'intelligence',
        operator: '>=',
        value: 9
      }]
    }, {
      id: 'mimic-fail-damage',
      name: 'Fehlerbestrafung',
      description: '10 HP Schaden bei Fehler',
      condition: [{
        stat: 'hp',
        operator: '>=',
        value: 0
      }] // rein symbolisch
    }, {
      id: 'stat-split',
      name: 'Kampfzeit-Bonus',
      description: 'Bossfighttime variiert je nach Stärke + Geschicklichkeit',
      condition: [
        /*{ stat: 'strength', operator: '>=', value: 15 },
        { stat: 'agility', operator: '>=', value: 15 }*/
      ]
    }],
    defeated: false
  }, {
    id: 'boss-memory',
    name: 'Krieger des Lichts',
    title: 'Das Licht vergangener Zeiten',
    description: 'Ein mythischer Krieger, der Patrick auf die Probe seiner geistigen und körperlichen Fähigkeiten stellt.',
    image: 'swordwoman.svg',
    questId: 'memory-warrior-light',
    stats: {
      hp: 120,
      strength: 22,
      agility: 12,
      intelligence: 11,
      experience: 300,
      money: 75,
      level: 2
    },
    advantages: [{
      id: 'int-7',
      name: 'Mechanikerklärung',
      description: 'Einmalige Erklärung der Mechaniken aus dem Extra-Deck',
      condition: [{
        stat: 'intelligence',
        operator: '>=',
        value: 7
      }]
    }, {
      id: 'int-11',
      name: 'Spickzettel',
      description: 'Erklärzettel mit Mechaniken werden bereitgelegt',
      condition: [{
        stat: 'intelligence',
        operator: '>=',
        value: 11
      }]
    }, {
      id: 'agi-9',
      name: 'Kettenmechanik (erweitert)',
      description: 'Aetherial Rift Event wird leichter',
      condition: [{
        stat: 'agility',
        operator: '>=',
        value: 9
      }]
    }, {
      id: 'agi-12',
      name: 'Kettenmechanik (max)',
      description: 'Aetherial Rift Event wird noch leichter',
      condition: [{
        stat: 'agility',
        operator: '>=',
        value: 12
      }]
    }, {
      id: 'str-21',
      name: 'Limit Break Überlebt',
      description: 'Schaden vom Ultimate Crossover-Event wird vermieden',
      condition: [{
        stat: 'strength',
        operator: '>=',
        value: 21
      }]
    }],
    defeated: false
  }, {
    id: 'boss-music',
    name: 'Siren',
    title: 'Die Tödliche Melodie',
    description: 'Ein verführerisches Wesen, das tödliche Musikrätsel stellt.',
    image: 'lyre.svg',
    questId: 'music-siren',
    stats: {
      hp: 100,
      strength: 13,
      agility: 10,
      intelligence: 7,
      experience: 280,
      money: 60,
      level: 2
    },
    advantages: [{
      id: 'int-7',
      name: 'Kategorie 1 Bonus',
      description: 'Nur noch 2 Lieder aus Kategorie 1',
      condition: [{
        stat: 'intelligence',
        operator: '>=',
        value: 7
      }]
    }, {
      id: 'agi-10',
      name: 'Kategorie 2 Bonus',
      description: 'Nur noch 2 Lieder aus Kategorie 2',
      condition: [{
        stat: 'agility',
        operator: '>=',
        value: 10
      }]
    }, {
      id: 'str-13',
      name: 'Kategorie 3 Bonus',
      description: 'Nur noch 2 Lieder aus Kategorie 3',
      condition: [{
        stat: 'strength',
        operator: '>=',
        value: 13
      }]
    }],
    defeated: false
  }, {
    id: 'boss-ffquiz',
    name: 'Kaktor',
    title: 'Der rasende Fragenwerfer',
    description: 'Ein hyperaktiver Kaktor stellt dir Fragen, die du besser beantworten solltest.',
    image: 'cactus.svg',
    questId: 'ff-quiz-kaktor',
    stats: {
      hp: 150,
      strength: 12,
      agility: 12,
      intelligence: 12,
      experience: 300,
      money: 50,
      level: 3
    },
    advantages: [{
      id: 'attr-check',
      name: 'Attributsprüfung',
      description: 'Vor dem Kampf erfolgt ein Check auf Stärke, Intelligenz und Geschicklichkeit',
      condition: [
        /*{ stat: 'strength', operator: '>=', value: 10 },
        { stat: 'agility', operator: '>=', value: 10 },
        { stat: 'intelligence', operator: '>=', value: 10 }*/
      ]
    }],
    defeated: false
  }, {
    id: 'boss-yojimbo',
    name: 'Yojimbo',
    title: 'Der Bestechliche Krieger',
    description: 'Ein legendärer Samurai, dessen Loyalität zweifelhaft ist.',
    image: 'samurai-helmet.svg',
    questId: 'yojimbo-bribe',
    stats: {
      hp: 200,
      strength: 16,
      agility: 10,
      intelligence: 8,
      experience: 350,
      money: 0,
      level: 4
    },
    advantages: [{
      id: 'has-lamp',
      name: 'Dinge',
      description: 'Dinge sind sein Wunsch.',
      condition: [{
        stat: 'hp',
        operator: '>=',
        value: 1
      }]
    }],
    defeated: false
  }, {
    id: 'boss-alchemie',
    name: 'Seymour',
    title: 'Der Flüssige Tod',
    description: 'Ein unberechenbarer Alchemist. Sei gewarnt, er ist nicht normal und sein Gebräu ist überall gefürchtet.',
    image: 'fizzing-flask.svg',
    questId: 'alchemy-seymour',
    stats: {
      hp: 180,
      strength: 12,
      agility: 9,
      intelligence: 11,
      experience: 320,
      money: 50,
      level: 4
    },
    advantages: [{
      id: 'trankkunde',
      name: 'koerperresistent',
      description: 'Du kannst der Versuchung von weiterer Flüssigkeit widerstehen.',
      condition: [{
        stat: 'intelligence',
        operator: '>',
        value: 9
      }]
    }, {
      id: 'koerperresistenz',
      name: 'Körperresistenz',
      description: 'Du hast Resistent gegen das Alchemiegebräu. Weniger Schaden.',
      condition: [{
        stat: 'strength',
        operator: '>',
        value: 10
      }, {
        stat: 'agility',
        operator: '>',
        value: 10
      }, {
        stat: 'intelligence',
        operator: '>',
        value: 10
      }]
    }, {
      id: 'mentalemeisterschaft',
      name: 'Mentale Meisterschaft',
      description: 'Du wirst fokussiert und kannst dein Gebräu besser zusammenstellen. Ein Plus auf Würfe.',
      condition: [{
        stat: 'strength',
        operator: '>',
        value: 13
      }, {
        stat: 'agility',
        operator: '>',
        value: 13
      }, {
        stat: 'intelligence',
        operator: '>',
        value: 13
      }]
    }, {
      id: 'derjan',
      name: 'Der Jan ist da',
      description: 'Der Jan ist da, wirklich? Solltest du den Jan im Inventar haben, dann wirken deine Vorteile alle eine Runde später.',
      condition: [{
        stat: 'hp',
        operator: '>=',
        value: 0
      }]
    }],
    defeated: false
  }];
}

/***/ }),

/***/ 326:
/*!*************************************************!*\
  !*** ./src/app/components/shop/shop.factory.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShopItems: () => (/* binding */ createShopItems)
/* harmony export */ });
function createShopItems() {
  const now = new Date();
  return [{
    id: 'abspotten',
    name: 'Abspotten',
    description: 'Jemand anderes muss saufen (gilt nicht für das Elixir des Lebens)',
    icon: 'screaming.svg',
    type: 'consumable',
    price: 3,
    acquiredAt: now,
    stock: 5
  }, {
    id: 'armreife',
    name: 'Armreife',
    description: 'Ausrüstungsgegenstand (nur im Shop erhältlich)',
    slot: 'wrist',
    icon: 'wrist.svg',
    type: 'equipment',
    bonusStats: {
      hp: 2,
      strength: 1
    },
    price: 40,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'verlorene-seelen',
    name: 'Das Erwachen der Verlorenen Seelen',
    description: 'Man erzählt sich, dass die verlorenen Seelen einen im Schlaf heimsuchen',
    icon: 'book-cover.svg',
    type: 'quest',
    price: 20,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'vier-kristalle',
    name: 'Die Legende der vier Kristalle',
    description: 'Legenden zufolge handelt es sich hierbei um eine Legende',
    icon: 'book-cover2.svg',
    type: 'quest',
    price: 20,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'paradigmenwechsel',
    name: 'Ein Paradigmenwechsel des Schicksals',
    description: 'Kannst du dir eine Welt vorstellen, wo alles umso schwieriger wird je stärker man ist?',
    icon: 'book-pile.svg',
    type: 'quest',
    price: 20,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'buff-agility',
    name: 'Geschicklichkeitstrank (Bufffood)',
    description: '5min +3 Geschicklichkeit aber -1 Stärke (shared Cooldown 5min mit anderem Bufffood)\n(1 Pinnchen Jägermeister)',
    icon: 'potion-of-madness.svg',
    type: 'buff',
    price: 10,
    bonusStats: {
      agility: 3,
      strength: -1
    },
    acquiredAt: now,
    stock: 99
  }, {
    id: 'haargel',
    name: 'Haargel',
    description: 'Für stattliche Abenteurer',
    icon: 'comb.svg',
    type: 'consumable',
    price: 10,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'buff-intelligence',
    name: 'Intelligenztrank (Bufffood)',
    description: '5min +3 Intelligenz aber -1 Geschicklichkeit (shared Cooldown 5min mit anderem Bufffood)\n(1 Pinnchen Rum)',
    icon: 'magic-potion.svg',
    type: 'buff',
    price: 10,
    bonusStats: {
      intelligence: 3,
      agility: -1
    },
    acquiredAt: now,
    stock: 99
  }, {
    id: 'lootbox-w6',
    name: 'Lootbox W6 (6-seitiger Würfel)',
    description: 'Solange verfügbar bis jede Augenzahl einmal gewürfelt wurde.\n(Bei bereits gewürfelter Augenzahl = 5 Gil zurück)\nBelohnung: 3 Gil pro Auge + ggf. Bonus bei 6',
    icon: 'open-treasure-chest.svg',
    type: 'consumable',
    price: 10,
    acquiredAt: now,
    stock: 99
  }, {
    id: 'jan',
    name: 'Der Jan',
    description: 'Manchmal benötigen Dinge einfach länger. Verzögerung ist auch eine Kunst.',
    icon: 'clockwork.svg',
    type: 'quest',
    price: 1,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'phoenixfeder',
    name: 'Phönixfeder',
    description: 'Man ist einmalig geschützt vor negativem Effekt wenn man KO geht',
    icon: 'condor-emblem.svg',
    type: 'consumable',
    price: 80,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'potion',
    name: 'Potion',
    description: 'Heilt 10 HP (Cooldown 5min)\n1 Glas Bier',
    icon: 'health-potion.svg',
    type: 'buff',
    price: 5,
    bonusStats: {
      hp: 10
    },
    acquiredAt: now,
    stock: 99
  }, {
    id: 'midgar-schatten',
    name: 'Schatten über Midgar',
    description: 'Dieser sogenannte Schatten soll angeblich nichts weiter sein als eine riesige Smogwolke',
    icon: 'bookmarklet.svg',
    type: 'quest',
    price: 20,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'rulebook-mtg',
    name: 'Spielanleitung: Magic the Gathering',
    description: 'Für magische Regelnerds',
    icon: 'card-2-hearts.svg',
    type: 'quest',
    price: 2,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'rulebook-tripletriad',
    name: 'Spielanleitung: Triple Triad',
    description: 'Für fantasievolle Regelnerds',
    icon: 'card-ace-diamonds.svg',
    type: 'quest',
    price: 2,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'buff-strength',
    name: 'Stärketrank (Bufffood)',
    description: '5min +3 Stärke aber -1 Intelligenz (shared Cooldown 5min mit anderem Bufffood)\n(1 Pinnchen Vodka)',
    icon: 'standing-potion.svg',
    type: 'buff',
    price: 10,
    bonusStats: {
      strength: 3,
      intelligence: -1
    },
    acquiredAt: now,
    stock: 99
  }, {
    id: 'tidus',
    name: 'Tidus und sein Abenteuer',
    description: 'Da gab es mal einen jungen Mann namens Tidus… oder sprach man seinen Namen "Taidus" aus?',
    icon: 'bookmark.svg',
    type: 'quest',
    price: 20,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'tt-card-common',
    name: 'Triple Triad Karte Common',
    description: '1 Zufallskarte Triple Triad Stufe 2–3',
    icon: 'card-random.svg',
    type: 'quest',
    price: 10,
    acquiredAt: now,
    stock: 5
  }, {
    id: 'tt-card-uncommon',
    name: 'Triple Triad Karte Uncommon',
    description: '1 Zufallskarte Triple Triad Stufe 4–6',
    icon: 'card-random.svg',
    type: 'quest',
    price: 20,
    acquiredAt: now,
    stock: 4
  }, {
    id: 'tt-card-rare',
    name: 'Triple Triad Karte Rare',
    description: '1 Zufallskarte Triple Triad Stufe 7–9',
    icon: 'card-random.svg',
    type: 'quest',
    price: 30,
    acquiredAt: now,
    stock: 3
  }, {
    id: 'wunderlampe',
    name: 'Wunderlampe',
    description: 'Eine schäbige alte Lampe',
    icon: 'magic-lamp.svg',
    type: 'quest',
    price: 80,
    acquiredAt: now,
    stock: 1
  }, {
    id: 'wunschlied',
    name: 'Wunschlied',
    description: 'Füge ein Lied deiner Wahl der allgemeinen Playlist hinzu',
    icon: 'love-song.svg',
    type: 'consumable',
    price: 1,
    acquiredAt: now,
    stock: 99
  }, {
    id: 'zidane',
    name: 'Zidane auf seiner Reise',
    description: 'Sein Kopfstoß während einer Weltmeisterschaft soll ohne gleichen sein',
    icon: 'white-book.svg',
    type: 'quest',
    price: 20,
    acquiredAt: now,
    stock: 1
  }];
}

/***/ }),

/***/ 3928:
/*!*********************************************!*\
  !*** ./src/app/views/start/game.factory.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewGameState: () => (/* binding */ createNewGameState)
/* harmony export */ });
function createNewGameState(name) {
  const now = new Date();
  if (name != "miloszistunbesiegbar123") {
    const player = {
      hp: 20,
      money: 0,
      level: 1,
      experience: 0,
      strength: 1,
      agility: 1,
      intelligence: 1
    };
    return {
      name,
      createdAt: now,
      updatedAt: now,
      player,
      inventory: [],
      quests: [],
      bosses: [],
      battles: [],
      shopItems: []
    };
  } else {
    const player = {
      hp: 20,
      money: 2000,
      level: 1,
      experience: 0,
      strength: 20,
      agility: 20,
      intelligence: 20
    };
    return {
      name,
      createdAt: now,
      updatedAt: now,
      player,
      inventory: [],
      quests: [],
      bosses: [],
      battles: [],
      shopItems: []
    };
  }
}

/***/ }),

/***/ 8645:
/*!************************************************!*\
  !*** ./src/app/views/start/start.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartComponent: () => (/* binding */ StartComponent)
/* harmony export */ });
/* harmony import */ var C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _core_services_game_save_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/game-save.service */ 2200);
/* harmony import */ var _core_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/player.service */ 3665);
/* harmony import */ var _core_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/inventory.service */ 1100);
/* harmony import */ var _core_services_battle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/battle.service */ 4406);
/* harmony import */ var _core_services_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/shop.service */ 3108);
/* harmony import */ var _game_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game.factory */ 3928);
/* harmony import */ var _core_services_boss_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/boss.service */ 7901);
/* harmony import */ var _core_services_quest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/quest.service */ 2926);
/* harmony import */ var _components_questlog_quest_pool_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/questlog/quest-pool.factory */ 7317);
/* harmony import */ var _components_shop_shop_factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/shop/shop.factory */ 326);
/* harmony import */ var _components_boss_list_boss_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/boss-list/boss.factory */ 9416);
/* harmony import */ var _components_inventory_inventory_factory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/inventory/inventory.factory */ 9232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 4456);

























function StartComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function StartComponent_div_3_div_5_Template_button_click_1_listener() {
      const save_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.loadGame(save_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const save_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", save_r2.name, " (", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](4, 2, save_r2.updatedAt, "short"), ") ");
  }
}
function StartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Spielst\u00E4nde: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, StartComponent_div_3_div_5_Template, 5, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.savegames);
  }
}
let StartComponent = /*#__PURE__*/(() => {
  class StartComponent {
    gameSave;
    playerService;
    inventoryService;
    bossService;
    battleService;
    questService;
    shopService;
    router;
    savegames = [];
    newGameName = '';
    constructor(gameSave, playerService, inventoryService, bossService, battleService, questService, shopService, router) {
      this.gameSave = gameSave;
      this.playerService = playerService;
      this.inventoryService = inventoryService;
      this.bossService = bossService;
      this.battleService = battleService;
      this.questService = questService;
      this.shopService = shopService;
      this.router = router;
    }
    ngOnInit() {
      var _this = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.savegames = yield _this.gameSave.listGames();
      })();
    }
    loadGame(id) {
      var _this2 = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const gameState = yield _this2.gameSave.loadGame(id);
        gameState.bosses = (0,_components_boss_list_boss_factory__WEBPACK_IMPORTED_MODULE_11__.createBosses)();
        _this2.applyGameState(gameState);
        _this2.router.navigate(['/game']);
      })();
    }
    newGame() {
      var _this3 = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const trimmedName = _this3.newGameName.trim();
        const name = trimmedName.length ? trimmedName : 'Teiting Quest';
        const state = (0,_game_factory__WEBPACK_IMPORTED_MODULE_6__.createNewGameState)(name);
        state.quests = (0,_components_questlog_quest_pool_factory__WEBPACK_IMPORTED_MODULE_9__.createQuestPool)();
        state.shopItems = (0,_components_shop_shop_factory__WEBPACK_IMPORTED_MODULE_10__.createShopItems)();
        state.bosses = (0,_components_boss_list_boss_factory__WEBPACK_IMPORTED_MODULE_11__.createBosses)();
        state.inventory = (0,_components_inventory_inventory_factory__WEBPACK_IMPORTED_MODULE_12__.createEquipmentItems)();
        const savedState = yield _this3.gameSave.saveNewGame(state);
        _this3.applyGameState(savedState);
        _this3.router.navigate(['/game']);
      })();
    }
    applyGameState(gameState) {
      this.playerService.setPlayer(gameState.player);
      this.inventoryService.setInventory(gameState.inventory);
      this.battleService.setGameState(gameState);
      this.bossService.setBosses(gameState.bosses);
      this.shopService.setShopItems(gameState.shopItems);
      this.questService.setFromSnapshot(gameState.quests);
      /*const initialQuests = createQuestPool().slice(0, 2);
      this.questService.setQuests(initialQuests);*/
      this.gameSave.registerSnapshotBuilder(() => ({
        id: gameState.id,
        name: gameState.name,
        createdAt: gameState.createdAt,
        updatedAt: new Date(),
        player: this.playerService.getSnapshot(),
        inventory: this.inventoryService.getSnapshot(),
        shopItems: this.shopService.getSnapshot(),
        bosses: this.bossService.getSnapshot(),
        battles: this.battleService.getSnapshot(),
        quests: this.questService.getSnapshot()
      }));
    }
    static ɵfac = function StartComponent_Factory(t) {
      return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_game_save_service__WEBPACK_IMPORTED_MODULE_1__.GameSaveService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_boss_service__WEBPACK_IMPORTED_MODULE_7__.BossService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_battle_service__WEBPACK_IMPORTED_MODULE_4__.BattleService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_quest_service__WEBPACK_IMPORTED_MODULE_8__.QuestService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_shop_service__WEBPACK_IMPORTED_MODULE_5__.ShopService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: StartComponent,
      selectors: [["app-start"]],
      decls: 9,
      vars: 2,
      consts: [[1, "rpg-panel", "outer-panel"], [4, "ngIf"], [1, "new-save-container"], ["placeholder", "Name f\u00FCr neuen Spielstand", 1, "rpg-input", 3, "ngModelChange", "ngModel"], [1, "rpg-button", 3, "click"], ["src", "assets/icons/falling-boulder.svg", 1, "icon"], ["src", "assets/icons/save.svg", 1, "icon"], [1, "savegame-list"], [4, "ngFor", "ngForOf"], ["src", "assets/icons/open-book.svg", 1, "icon"]],
      template: function StartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Teiting Quest");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, StartComponent_div_3_Template, 6, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 2)(5, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function StartComponent_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx.newGameName, $event) || (ctx.newGameName = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function StartComponent_Template_button_click_6_listener() {
            return ctx.newGame();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " Neues Spiel starten ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.savegames.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx.newGameName);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  box-sizing: border-box;\n  padding: 2vh;\n}\n\n.rpg-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  background-color: var(--rpg-panel);\n  border: 3px solid var(--rpg-border);\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.9);\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  text-align: center;\n  word-break: break-word;\n  margin: 0.5rem 0;\n}\n\n.save-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.3rem 0;\n}\n\n.rpg-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 0.75rem;\n  width: 100%;\n  text-align: left;\n  padding: 0.5rem 0.75rem;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 0.5rem;\n}\n\n.outer-panel[_ngcontent-%COMP%] {\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding: 2rem;\n  overflow: hidden;\n}\n\n.savegame-list[_ngcontent-%COMP%] {\n  max-height: 40vh;\n  overflow-y: auto;\n  margin-bottom: 1rem;\n  padding-right: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.new-save-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.new-save-container[_ngcontent-%COMP%]   input.rpg-input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.85rem;\n  border: 2px solid var(--rpg-border);\n  border-radius: 8px;\n  width: 100%;\n  background-color: #1c1c1c;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3Mvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFGO0FBRUU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDsgLy8gbnV0enQgMTAwJSBkZXIgSMODwrZoZVxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMnZoOyAvLyBldHdhcyBBYnN0YW5kIG9iZW4vdW50ZW5cclxufVxyXG5cclxuLnJwZy1wYW5lbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0ODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ycGctcGFuZWwpO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXJwZy1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaDEsIGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBtYXJnaW46IDAuNXJlbSAwO1xyXG59XHJcblxyXG4uc2F2ZS1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMC4zcmVtIDA7XHJcbn1cclxuXHJcbi5ycGctYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4ub3V0ZXItcGFuZWwge1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7IC8vIFZlcmhpbmRlcnQsIGRhc3MgZXMgZGVuIFZpZXcgc3ByZW5ndFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuOyAvLyB3aWNodGlnOiBudXIgZGFzIElubmVyZSBkYXJmIHNjcm9sbGVuXHJcbn1cclxuXHJcbi5zYXZlZ2FtZS1saXN0IHtcclxuICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07IC8vIFBsYXR6IGbDg8K8ciBTY3JvbGxiYXJcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4ubmV3LXNhdmUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuXHJcbiAgaW5wdXQucnBnLWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcnBnLWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return StartComponent;
})();

/***/ }),

/***/ 9720:
/*!*********************************************!*\
  !*** ./src/app/views/start/start.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartModule: () => (/* binding */ StartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _start_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.component */ 8645);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _start_component__WEBPACK_IMPORTED_MODULE_0__.StartComponent
}];
let StartModule = /*#__PURE__*/(() => {
  class StartModule {
    static ɵfac = function StartModule_Factory(t) {
      return new (t || StartModule)();
    };
    static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: StartModule
    });
    static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
    });
  }
  return StartModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StartModule, {
    declarations: [_start_component__WEBPACK_IMPORTED_MODULE_0__.StartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_start_start_module_ts.js.map