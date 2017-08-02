webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catagory_catagory__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorite_favorite__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__program_program__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_program_data_manager_program_data_manager__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, programsProvider, localData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.programsProvider = programsProvider;
        this.localData = localData;
        this.searchQuery = '';
        this.initializeItems();
    }
    HomePage.prototype.initializeItems = function () {
        this.categories = [
            'Tech',
            'Art',
            'Sports',
            'Music',
            'Camp',
        ];
        this.items = this.localData.db.map(function (obj) { return obj.title; });
        console.log(this.items);
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    HomePage.prototype.goToCatagory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__catagory_catagory__["a" /* CatagoryPage */]);
    };
    HomePage.prototype.goToFavorite = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__favorite_favorite__["a" /* FavoritePage */]);
    };
    HomePage.prototype.setFilteredItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //this.items = await this.programsProvider.filterItems(this.searchQuery);
                        _a = this;
                        return [4 /*yield*/, this.localData.filterItems(this.searchQuery)];
                    case 1:
                        //this.items = await this.programsProvider.filterItems(this.searchQuery);
                        _a.items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.viewItem = function (program) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__program_program__["a" /* ProgramPage */], {
            program: program
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/txt_02/Desktop/summer/src/pages/home/home.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=blue2>\n\n     \n    <ion-title class="water">Home</ion-title>\n    <img src="assets/img/star button.png" class="star" (click)="goToFavorite()" />\n  </ion-navbar> \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-searchbar [(ngModel)]="searchQuery" placeholder="search for programs" class="search" (ionInput)="setFilteredItems()"> </ion-searchbar>\n  <ion-list *ngIf="searchQuery">\n    <ion-item *ngFor="let item of items" (click)="viewItem(item)">\n      {{ item.title }}\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="!searchQuery">\n    <ion-item *ngFor="let category of categories" (click)="goToCatagory()">\n      <img src="assets/img/{{category}}.png" />\n      <p> {{ category }} </p>\n      <img src="assets/img/Arrow from home .png" class="Arrow" />\n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-list>\n    <ion-item class="item" *ngFor="let item of items" (click)="goToCatagory()">\n      <p> {{ item }} </p>\n      <img src="assets/img/Arrow from home .png" class="Arrow" /> \n    </ion-item>\n  </ion-list> -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/txt_02/Desktop/summer/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_program_data_manager_program_data_manager__["a" /* ProgramDataManagerProvider */], __WEBPACK_IMPORTED_MODULE_6__data__["a" /* dataProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_favorite__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProgramPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProgramPage = (function () {
    function ProgramPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.src1 = "assets/img/white Star.png";
        this.on1 = true;
    }
    ProgramPage.prototype.switch1 = function () {
        if (this.on1) {
            this.src1 = "assets/img/white Star.png";
            this.on1 = false;
        }
        else {
            this.src1 = "assets/img/white filed star.png";
            this.on1 = true;
        }
    };
    ProgramPage.prototype.favorite = function () {
        this.navCtrl.popToRoot(__WEBPACK_IMPORTED_MODULE_2__favorite_favorite__["a" /* FavoritePage */]);
    };
    ProgramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramPage');
    };
    return ProgramPage;
}());
ProgramPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-program',template:/*ion-inline-start:"/Users/txt_02/Desktop/summer/src/pages/program/program.html"*/'<!--\n  Generated template for the ProgramPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=blue2  >\n <!-- <img src="../../assets/img/white Star.png" class="white star outline"> -->\n <img src={{src1}} (click)= "switch1()" style= "float:right" >\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n \n\n\n  \n  \n\n    \n<!-- <img src= "assets/images/group.png" style= "width: 80px;" id="button1"> -->\n   <!-- <img src={{src2}} (click)= "switch2()" style= "width: 80px;" id="button2"> -->\n\n\n\n  <div padding> \n\n  <div>\n    <img src="assets/img/Basketball-Court.jpg" class="banner">\n  </div>\n\n<h1>IMG Academy 2017\n      Basketball Camp</h1>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col div class="blue" col-4>\n        Location:\n      </ion-col>\n      <ion-col div class="red" col-8>\n        5650 Bollettieri Blvd. Bradenton, FL 34210\n      </ion-col>\n\n<ion-col div class="green" col-4>\n       Website:\n      </ion-col>\n      <ion-col div class="yellow" col-8>\n       https://www.imgacadamy.com\n      </ion-col>\n\n<ion-col div class="brown" col-4>\n        Contact: \n      </ion-col>\n      <ion-col div class="black"col-8>\n       1-800-872-6425\n      </ion-col>\n\n<ion-col div class="white" col-4>\n        Description:\n      </ion-col>\n      <ion-col div class="grey" col-8>\n               We help you evolve your game.Work With elite coaches in a world class enviormnt. REGISTER NOW\n      </ion-col>\n\n\n\n\n\n  \n\n\n\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/txt_02/Desktop/summer/src/pages/program/program.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ProgramPage);

//# sourceMappingURL=program.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__program_program__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FavoritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FavoritePage = (function () {
    function FavoritePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritePage');
    };
    FavoritePage.prototype.goToProgram = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__program_program__["a" /* ProgramPage */]);
    };
    return FavoritePage;
}());
FavoritePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorite',template:/*ion-inline-start:"/Users/txt_02/Desktop/summer/src/pages/favorite/favorite.html"*/'<!--\n  Generated template for the FavoritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=blue2>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favorite</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n<!-- <div class="favorite">\n<div class="favoriteIcon">\n<img src="../../assets/img/IMG.jpg">\n</div>\n<div class="favoriteTitle">\nBasketball Camps- IMG Academy 2017\n</div>\n</div> \n\n<div class="favorite">\n<div class="favoriteIcon">\n<img src="../../assets/img/Nike-Logo.jpg">\n</div>\n<div class="favoriteTitle">\nNike Basketball Camps\n</div>\n</div> \n\n<div class="favorite">\n<div class="favoriteIcon">\n<img src="../../assets/img/logo-bball-camp.jpg">\n</div>\n<div class="favoriteTitle">\nNike Basketball Camps\n</div>\n</div>  -->\n\n\n <ion-card-content>\n\n\n\n\n  <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/IMG.jpg"(click)="goToProgram()">\n    </ion-avatar>\n    <h2>Basketball Camps- IMG Academy 2017</h2>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/Nike-Logo.jpg"(click)="goToProgram()">\n    </ion-avatar>\n    <h3>Nike Basketball camps</h3>\n  </ion-item>\n  \n\n<ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/logo-bball-camp.jpg"(click)="goToProgram()">\n    </ion-avatar>\n    <h3>Duke Basketball Camp</h3>\n  </ion-item>\n\n<ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/basket ball icon.png"(click)="goToProgram()">\n    </ion-avatar>\n    <h3>Bob\'s Basketball Program</h3>\n  </ion-item>\n\n\n\n\n\n</ion-list>\n\n</ion-card-content> \n\n</ion-content>\n'/*ion-inline-end:"/Users/txt_02/Desktop/summer/src/pages/favorite/favorite.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], FavoritePage);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favorite_favorite__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_program_program__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_catagory_catagory__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_program_data_manager_program_data_manager__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_data__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_favorite_favorite__["a" /* FavoritePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_program_program__["a" /* ProgramPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_catagory_catagory__["a" /* CatagoryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_favorite_favorite__["a" /* FavoritePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_program_program__["a" /* ProgramPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_catagory_catagory__["a" /* CatagoryPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_program_data_manager_program_data_manager__["a" /* ProgramDataManagerProvider */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_data__["a" /* dataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favorite_favorite__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_catagory_catagory__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// New Pages



var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Favorites', component: __WEBPACK_IMPORTED_MODULE_5__pages_favorite_favorite__["a" /* FavoritePage */] },
            { title: 'Catagory', component: __WEBPACK_IMPORTED_MODULE_6__pages_catagory_catagory__["a" /* CatagoryPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/txt_02/Desktop/summer/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="blue2">\n      <ion-title>Name</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/txt_02/Desktop/summer/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatagoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_program__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CatagoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CatagoryPage = (function () {
    function CatagoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CatagoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CatagoryPage');
    };
    CatagoryPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CatagoryPage.prototype.goToProgram = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__program_program__["a" /* ProgramPage */]);
    };
    return CatagoryPage;
}());
CatagoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-catagory',template:/*ion-inline-start:"/Users/txt_02/Desktop/summer/src/pages/catagory/catagory.html"*/'<!--\n  Generated template for the CatagoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=blue2>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Catagory</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card-content>\n\n\n\n\n  <ion-list>\n  <ion-item (click)="goToProgram()">\n    <ion-avatar item-start>\n      <img src="assets/img/IMG.jpg">\n    </ion-avatar>\n    <h2>Basketball Camps- IMG Academy 2017</h2>\n  </ion-item>\n\n  <ion-item (click)="goToProgram()">\n    <ion-avatar item-start>\n      <img src="assets/img/Nike-Logo.jpg">\n    </ion-avatar>\n    <h3>Nike Basketball camps</h3>\n  </ion-item>\n  \n\n<ion-item (click)="goToProgram()">\n    <ion-avatar item-start>\n      <img src="assets/img/logo-bball-camp.jpg">\n    </ion-avatar>\n    <h3>Duke Basketball Camp</h3>\n  </ion-item>\n\n<ion-item (click)="goToProgram()">\n    <ion-avatar item-start>\n      <img src="assets/img/basket ball icon.png">\n    </ion-avatar>\n    <h3>Bob\'s Basketball Program</h3>\n  </ion-item>\n\n\n\n\n\n</ion-list>\n\n</ion-card-content> \n\n</ion-content>\n'/*ion-inline-end:"/Users/txt_02/Desktop/summer/src/pages/catagory/catagory.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], CatagoryPage);

//# sourceMappingURL=catagory.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramDataManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/*
  Generated class for the ProgramDataManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ProgramDataManagerProvider = (function () {
    function ProgramDataManagerProvider(http) {
        var _this = this;
        this.http = http;
        this.categories = [
            "technology",
            "college",
            "art",
            "video games",
            "fashion",
            "math",
            "educational",
            "sports"
        ];
        this.allPrograms = this.getAllPrograms();
        this.allPrograms.then(function (value) {
            _this.allPrograms = value;
        });
    }
    ProgramDataManagerProvider.prototype.getPrograms = function (category) {
        var _this = this;
        this.category = category;
        var programs = new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/programs/' + category)
                .map(function (res) { return res.json(); })
                .subscribe(function (programs) {
                _this.categoryPrograms = programs;
                resolve(_this.categoryPrograms);
            });
        });
        return programs;
    };
    ProgramDataManagerProvider.prototype.getAllPrograms = function () {
        var _this = this;
        if (this.allPrograms) {
            return Promise.resolve(this.allPrograms);
        }
        var programs = new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/programs/')
                .map(function (res) { return res.json(); })
                .subscribe(function (programs) {
                _this.allPrograms = programs;
                resolve(_this.allPrograms);
            });
        });
        return programs;
    };
    ProgramDataManagerProvider.prototype.filterItems = function (searchTerm) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allPrograms];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.allPrograms.filter(function (program) {
                                return program.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                            })];
                }
            });
        });
    };
    return ProgramDataManagerProvider;
}());
ProgramDataManagerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProgramDataManagerProvider);

//# sourceMappingURL=program-data-manager.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataProvider; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var dataProvider = (function () {
    function dataProvider() {
        this.db = [
            {
                "title": "TXT",
                "description": "We inspire young at risk Black and Brown boys to become technology entrepreneurs. These boys are at the highest risk of dropping out of HS and being incarcerated.",
                "category": [
                    "technology",
                    "educational"
                ],
                "favorite": false
            },
            {
                "title": "A Place Called Home",
                "description": "A Place Called Home provides a safe, nurturing environment with proven programs in arts, education, and wellness for the young people in South Central Los Angeles to help them improve their economic conditions and develop healthy, fulfilling and purposeful lives.",
                "category": [
                    "educational",
                    "art"
                ],
                "favorite": false
            },
            {
                "title": "Project Fashion",
                "description": "Do you dream of being a designer, stylist, or the next Anna Wintour? Then join us at the Fashion Institute of Design and Merchandising (FiDM) to see what it takes to have a career in fashion. ",
                "category": [
                    "fashion"
                ],
                "favorite": false
            },
            {
                "title": "Otis College of Art and Design: Summer of Art, College Preparation Program",
                "description": "Four-week, pre-college art & design program designed to develop your artistic and creative skills. Serious young artists seeking to strengthen and enhance their art and design skills, as well as students with limited art training, are invited to participate.",
                "category": [
                    "educational",
                    "college",
                    "art"
                ],
                "favorite": false
            },
            {
                "title": "Model United Nations Institute at UCLA",
                "description": "At the MUN Institute, students improve their public speaking and communication skills, explore their interest in international affairs, and make friends from around the world.",
                "category": [
                    "educational"
                ],
                "favorite": false
            },
            {
                "title": "Teen Counselor in Training Program",
                "description": "The Teen Counselor in Training Program is a leadership program for teens interested in learning new skills and work experience.",
                "category": [
                    "educational"
                ],
                "favorite": false
            }
        ];
    }
    dataProvider.prototype.filterItems = function (searchTerm) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.db.filter(function (program) {
                                return program.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                            })];
                }
            });
        });
    };
    return dataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map