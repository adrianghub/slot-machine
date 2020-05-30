/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Draw.js":
/*!************************!*\
  !*** ./src/js/Draw.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draw; });\nclass Draw {\r\n   constructor(images) {\r\n     this.images = images;\r\n     let _result = this.drawResult();\r\n     \r\n     this.getDrawResult = () => _result;\r\n   }\r\n   \r\n   drawResult() {\r\n     let cards = [];\r\n\r\n     for(let i=0; i < this.images.length; i++) {\r\n        let index = Math.floor(Math.random() * this.images.length);\r\n        const card = this.images[index];\r\n        cards.push(card);\r\n     }\r\n     return cards;\r\n   }\r\n }\r\n \n\n//# sourceURL=webpack:///./src/js/Draw.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statistics */ \"./src/js/Statistics.js\");\n/* harmony import */ var _Wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wallet */ \"./src/js/Wallet.js\");\n/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Draw */ \"./src/js/Draw.js\");\n/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Result */ \"./src/js/Result.js\");\n// Game \r\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n\r\n    constructor(start) {\r\n      this.stats = new _Statistics__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n      this.wallet = new _Wallet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](start);\r\n      \r\n      this.UISelectors =  {\r\n        buttonRed: '[data-red]', \r\n        buttonRepeat: '[data-repeat]',\r\n        button: '[data-button]',\r\n        spanWallet: '[data-wallet]',\r\n        boards: '[data-board]',\r\n        inputBid: '[data-bid]',\r\n        spanResult: '[data-result]',\r\n        spanGames: '[data-number]',\r\n        spanWins: '[data-wins]',\r\n        spanLosses: '[data-losses]',\r\n      }\r\n\r\n      this.initializeGame();\r\n      \r\n      this.render();\r\n\r\n      this.buttonRepeat.addEventListener('click', () => {\r\n        this.wallet = new _Wallet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](200);\r\n        this.render();\r\n      });\r\n\r\n      this.redButton.addEventListener('click', () => {\r\n        this.wallet = new _Wallet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](100);\r\n        this.render();\r\n      });\r\n    }\r\n      \r\n    render(boards = ['./assets/public/img/diamond.png', './assets/public/img/diamond.png', './assets/public/img/diamond.png'], money = this.wallet.getWalletValue(),result = \"\", stats = [0, 0, 0], bid = 0, wonMoney = 0) {\r\n      \r\n      this.boards.forEach((board, i) => {\r\n        board.style.backgroundImage  = `url(${boards[i]})`;\r\n        board.style.backgroundSize = 'contain';\r\n        board.style.backgroundRepeat = 'no-repeat';\r\n        board.style.backgroundPosition = 'center';\r\n      })\r\n      \r\n      this.spanWallet.textContent = money;\r\n      if(result) {\r\n        result = `You've smashed it! Reward ${wonMoney}$`;\r\n      } else if (!result && result !== \"\") {\r\n        result =`Ahh...Here we go again... Loss ${bid}$`;\r\n      }\r\n      this.spanResult.textContent = result;\r\n      this.spanGames.textContent = stats[0];\r\n      this.spanWins.textContent = stats[1];\r\n      this.spanLosses.textContent = stats[2];\r\n      this.inputBid.value = \"\";\r\n    };\r\n    \r\n    initializeGame() {\r\n      this.redButton = document.querySelector(this.UISelectors.buttonRed);\r\n      this.buttonRepeat = document.querySelector(this.UISelectors.buttonRepeat);\r\n      this.button = document.querySelector(this.UISelectors.button);\r\n      this.spanWallet = document.querySelector(this.UISelectors.spanWallet);\r\n      this.boards = [...document.querySelectorAll(this.UISelectors.boards)];\r\n     this.inputBid = document.querySelector(this.UISelectors.inputBid);\r\n    this.spanResult = document.querySelector(this.UISelectors.spanResult);\r\n      this.spanGames = document.querySelector(this.UISelectors.spanGames);\r\n     this.spanWins = document.querySelector(this.UISelectors.spanWins);\r\n    this.spanLosses = document.querySelector(this.UISelectors.spanLosses);\r\n      \r\n      this.button.addEventListener('click', () => this.startGame());\r\n      \r\n      this.render();\r\n  \r\n    };\r\n    \r\n    startGame() {\r\n    const cherry = './assets/public/img/cherry.png';\r\n    const grape = './assets/public/img/grape.png'; \r\n    const seven = './assets/public/img/seven.png';\r\n    const imageArray = [cherry, grape, seven];\r\n\r\n      if(this.inputBid.value < 1) return alert('Time to make some money brah...elsewhere');\r\n      const bid = Math.floor(this.inputBid.value);\r\n      \r\n      if(!this.wallet.checkCanPlay(bid)) {\r\n         return alert('Time to make some money brah...elsewhere');\r\n      }\r\n      \r\n      this.wallet.changeWallet(bid, '-');\r\n      \r\n      this.draw = new _Draw__WEBPACK_IMPORTED_MODULE_2__[\"default\"](imageArray);  \r\n      \r\n      const cards = this.draw.getDrawResult();\r\n      const win = _Result__WEBPACK_IMPORTED_MODULE_3__[\"default\"].checkWinner(cards);\r\n      const wonMoney = _Result__WEBPACK_IMPORTED_MODULE_3__[\"default\"].moneyWinInGame(win, bid);\r\n      this.wallet.changeWallet(wonMoney);\r\n      this.stats.attachGameToStatistics(win, bid);\r\n      \r\n      this.render(cards, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney)\r\n    }\r\n    \r\n  }\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/Result.js":
/*!**************************!*\
  !*** ./src/js/Result.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Result; });\n// Result \r\n\r\nclass Result {\r\n    static moneyWinInGame(result, bid) {\r\n      return result ? bid * 3 : 0;\r\n    }\r\n    \r\n    static checkWinner(draw) {\r\n      return (draw[0] === draw[1] && draw[1] === draw[2]) \r\n        ? true \r\n        : false;   \r\n    }\r\n  }\r\n\r\n\r\n/* Rules */\r\n\r\n// (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])\n\n//# sourceURL=webpack:///./src/js/Result.js?");

/***/ }),

/***/ "./src/js/Statistics.js":
/*!******************************!*\
  !*** ./src/js/Statistics.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Statistics; });\n// Statistics \r\n\r\n\r\nclass Statistics {\r\n    constructor() {\r\n      this.gameResults = [];\r\n    }\r\n    \r\n    attachGameToStatistics(win, bid) {\r\n      let gameResult = {\r\n        win,\r\n        bid\r\n      }\r\n      // console.log(gameResult);\r\n      this.gameResults.push(gameResult);\r\n    }\r\n    \r\n    showGameStatistics() {\r\n      let games = this.gameResults.length;\r\n      let wins = this.gameResults.filter(result => result.win).length;\r\n      let losses = this.gameResults.filter(result => !result.win).length;\r\n      return [games, wins, losses];\r\n    }\r\n    \r\n  }\n\n//# sourceURL=webpack:///./src/js/Statistics.js?");

/***/ }),

/***/ "./src/js/Wallet.js":
/*!**************************!*\
  !*** ./src/js/Wallet.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wallet; });\nclass Wallet {\r\n    constructor(money) {\r\n      let _money = money;\r\n      this.getWalletValue = () => _money;\r\n      this.checkCanPlay = value => _money >= value ? true : false;\r\n      \r\n      this.changeWallet = (value, type =\"+\") => {\r\n        if (typeof value === \"number\" && !isNaN(value)) {\r\n          switch(type) {\r\n            case \"+\":\r\n              _money += value;\r\n              break;\r\n            case \"-\":\r\n              _money -= value;\r\n              break;\r\n            default:\r\n              throw new Error(\"Invalid type of activity.\");\r\n              break;\r\n          } \r\n        } else {\r\n          console.log(typeof value);\r\n          throw new Error(\"Only number type values are valid\");\r\n        }\r\n      }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/Wallet.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n\r\n\r\n\r\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](200);\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });