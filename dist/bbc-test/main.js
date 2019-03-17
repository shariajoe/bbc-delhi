(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"header_bar\">\n  <div class=\"container row\">\n    <div class=\"col-6 no-padding\">\n      <img alt=\"BBC Logo\" src=\"assets/bbc.png\" class=\"logo\" />\n    </div>\n    <div class=\"col-6 text-right no-padding\">\n      <a\n        class=\"langToggle active\"\n        (click)=\"setLang('en')\"\n        [ngClass]=\"{\n          active: articleService.articleUrl === englishSource\n        }\"\n      >\n        en\n      </a>\n      <a\n        class=\"langToggle active\"\n        (click)=\"setLang('hi')\"\n        [ngClass]=\"{\n          active: articleService.articleUrl === hindiSource\n        }\"\n      >\n        hi\n      </a>\n    </div>\n  </div>\n</div>\n<div class=\"container content\">\n  <div class=\"row\" *ngIf=\"article\">\n    <div class=\"col-lg-8 col-md-8 col-sm-12 col-12\">\n      <h1 class=\"content-spacing article-title\">\n        {{ article['hero_1_title'] }}\n      </h1>\n      <p class=\"article_info\">\n        <a\n          href=\"https://www.linkedin.com/in/joseph-sharia-aa2470a6/\"\n          class=\"article_info\"\n        >\n          {{ article['article-info_1_byline'] }}</a\n        ><br />\n        {{ article['article-info_1_date'] }} |\n        <a\n          target=\"_blank\"\n          [href]=\"article['article-info_1_category_url']\"\n          class=\"country-tag\"\n        >\n          {{ article['article-info_1_category'] }}\n        </a>\n      </p>\n      <img\n        src=\"{{ article.hero_1_image }}\"\n        class=\"img-fluid hero-image\"\n        alt=\"Delhi smog\"\n      />\n      <div class=\"content-spacing\">\n        <p>{{ article['p_1_value'] }}</p>\n        <p>{{ article['p_2_value'] }}</p>\n        <p>{{ article['p_3_value'] }}</p>\n        <p>{{ article['p_4_value'] }}</p>\n        <p>{{ article['p_5_value'] }}</p>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-sm-12 col-12\">\n      <div class=\"row city-holder\">\n        <div class=\"col-12\">\n          <p>{{ article['compare-tabs_1_method'] }}</p>\n          <h5>{{ article['compare-tabs_1_title'] }}</h5>\n          <input\n            type=\"search\"\n            placeholder=\"Search\"\n            class=\"searchBox\"\n            id=\"search-box\"\n          />\n          <div class=\"city-list\" *ngIf=\"groupedCityData.length\">\n            <div *ngFor=\"let city of groupedCityData\">\n              <ng-template #popContent>\n                Ciggarettes smoked: {{ article[city[2]] }} <br />\n                Particulate matter: {{ article[city[1]] }} <br />\n                <hr *ngIf=\"getCigarettes(article[city[2]]).length\" />\n                <img\n                  *ngFor=\"let cigar of getCigarettes(article[city[2]])\"\n                  src=\"assets/ciggrette_icon.png\"\n                  class=\"cigar_icon\"\n                />\n              </ng-template>\n              <div\n                class=\"city-list-item\"\n                placement=\"top\"\n                [ngbPopover]=\"popContent\"\n                popoverTitle=\"{{ article[city[0]] }}\"\n              >\n                {{ article[city[0]] }}\n                <div class=\"city-list-item-progress-holder\">\n                  <div\n                    class=\"city-list-item-progress\"\n                    [style.width.%]=\"getProgressWidth(article[city[2]])\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"!groupedCityData.length\" class=\"text-center\">\n            City not listed\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-8 col-md-8 col-sm-12 col-12\">\n      <div class=\"content-spacing\">\n        <h5>{{ article['p_6_value'] }}</h5>\n        <p>{{ article['p_7_value'] }}</p>\n        <p>{{ article['p_8_value'] }}</p>\n        <p>{{ article['p_9_value'] }}</p>\n        <p>{{ article['p_10_value'] }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"page-footer custom-footer\">\n  <div class=\"footer-copyright text-center py-3\">\n    © 2019 Copyright:\n    <a\n      href=\"https://www.linkedin.com/in/joseph-sharia-aa2470a6/\"\n      class=\"custom-footer\"\n    >\n      {{ article['article-info_1_byline'] }}</a\n    >\n  </div>\n</footer>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header_bar {\n  height: 40px;\n  width: 100%;\n  background-color: black;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  z-index: 20; }\n\n.logo {\n  height: 30px;\n  width: auto; }\n\n.content {\n  margin-top: 40px; }\n\n.langToggle {\n  margin-left: 10px;\n  text-align: center;\n  opacity: 0.6;\n  cursor: pointer; }\n\n.active {\n  opacity: 1; }\n\n.no-padding {\n  padding: 0; }\n\n.content-spacing {\n  margin: 20px 0px; }\n\n.article-title {\n  line-height: normal;\n  font-weight: bold; }\n\n.hero-image {\n  max-width: 100%;\n  height: auto; }\n\n.country-tag {\n  color: #c21807;\n  cursor: pointer; }\n\n.city-holder {\n  margin: 20px 0px;\n  background: #ddd;\n  font-size: 12px;\n  padding: 20px; }\n\n.city-holder .city-list {\n    height: 400px;\n    overflow: scroll; }\n\n.city-holder .city-list .city-list-item {\n      margin-bottom: 10px;\n      cursor: pointer; }\n\n.city-holder .city-list .city-list-item .city-list-item-progress-holder {\n        width: 100%;\n        height: 20px;\n        background-color: black; }\n\n.city-holder .city-list .city-list-item .city-list-item-progress-holder .city-list-item-progress {\n          height: 20px;\n          background-color: #c21807; }\n\n.popover-header {\n  background-color: #ddd; }\n\n.searchBox {\n  width: 100%;\n  border: none;\n  height: 30px;\n  padding: 10px;\n  margin-bottom: 20px; }\n\ninput:focus {\n  outline: none; }\n\n.custom-footer {\n  background-color: #000;\n  color: #fff; }\n\n.cigar_icon {\n  height: 60px;\n  width: auto; }\n\n.article_info {\n  color: #808080;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhzaGFyaWEvRG9jdW1lbnRzL2JiYy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUpmO0lBT0ksYUFBYTtJQUNiLGdCQUFnQixFQUFBOztBQVJwQjtNQVdNLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7O0FBWnJCO1FBZVEsV0FBVztRQUNYLFlBQVk7UUFDWix1QkFBdUIsRUFBQTs7QUFqQi9CO1VBb0JVLFlBQVk7VUFDWix5QkFBeUIsRUFBQTs7QUFPbkM7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9iYXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjA7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubGFuZ1RvZ2dsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGVudC1zcGFjaW5nIHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLmFydGljbGUtdGl0bGUge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlcm8taW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvdW50cnktdGFnIHtcbiAgY29sb3I6ICNjMjE4MDc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNpdHktaG9sZGVyIHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIC5jaXR5LWxpc3Qge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgIC5jaXR5LWxpc3QtaXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAuY2l0eS1saXN0LWl0ZW0tcHJvZ3Jlc3MtaG9sZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbiAgICAgICAgLmNpdHktbGlzdC1pdGVtLXByb2dyZXNzIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMTgwNztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucG9wb3Zlci1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uc2VhcmNoQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jdXN0b20tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jaWdhcl9pY29uIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmFydGljbGVfaW5mbyB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_article_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/article/article.service */ "./src/services/article/article.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(articleService) {
        this.articleService = articleService;
        this.article = {};
        this.groupedCityData = [];
        this.englishSource = _app_config__WEBPACK_IMPORTED_MODULE_3__["englishSource"];
        this.hindiSource = _app_config__WEBPACK_IMPORTED_MODULE_3__["hindiSource"];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showArticle();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var searchBox = document.getElementById('search-box');
        var typeahead = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(searchBox, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (e) { return e.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (query) { return query.length > 2 || query.length === 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (query) { return _this.articleService.findArticle(query); }));
        typeahead.subscribe(function (data) {
            _this.groupedCityData = data;
        }, function (error) {
            _this.groupedCityData = error;
        });
    };
    //Fetch all required fields from JSON
    AppComponent.prototype.showArticle = function () {
        var _this = this;
        this.articleService.getArticle().then(function (data) {
            _this.article = data['article'];
            _this.groupedCityData = data['groupedCityData'];
        }, function (error) {
            _this.article = error['article'];
            _this.groupedCityData = error['groupedCityData'];
        });
    };
    //Set progress bar width 
    AppComponent.prototype.getProgressWidth = function (value) {
        var width = Number(value);
        return (width / 20) * 100;
    };
    //Set Language as selected
    AppComponent.prototype.setLang = function (lang) {
        var _this = this;
        this.articleService.setLang(lang).then(function (done) {
            if (done) {
                _this.showArticle();
            }
        });
    };
    //Set cigarette array for icon display 
    AppComponent.prototype.getCigarettes = function (count) {
        var cigarCount = Number(count);
        return new Array(cigarCount);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_article_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: englishSource, hindiSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "englishSource", function() { return englishSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hindiSource", function() { return hindiSource; });
var englishSource = 'assets/article_source/english.json';
var hindiSource = 'assets/article_source/hindi.json';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_article_article_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/article/article.service */ "./src/services/article/article.service.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPopoverModule"]
            ],
            providers: [_services_article_article_service__WEBPACK_IMPORTED_MODULE_7__["ArticleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/article/article.service.ts":
/*!*************************************************!*\
  !*** ./src/services/article/article.service.ts ***!
  \*************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/app.config */ "./src/app/app.config.ts");






var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
        this.articleUrl = _app_app_config__WEBPACK_IMPORTED_MODULE_5__["englishSource"];
    }
    ArticleService.prototype.fetchJSON = function () {
        return this.http.get(this.articleUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Fetch all data needed for article display
    ArticleService.prototype.getArticle = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fetchJSON().subscribe(function (data) {
                var allKeys = Object.keys(data);
                var allCityNameKeys = allKeys.filter(function (key) {
                    return (key.indexOf('compare-tabs_1_city') > -1 && key.indexOf('name') > -1);
                });
                var groupedCityData = [];
                allCityNameKeys.forEach(function (key) {
                    var cityNumber = key.split('_')[3];
                    var cityData = [
                        key,
                        "compare-tabs_1_city_" + cityNumber + "_aqi",
                        "compare-tabs_1_city_" + cityNumber + "_cigg"
                    ];
                    groupedCityData.push(cityData);
                });
                resolve({ article: data, groupedCityData: groupedCityData });
            }, function (error) { return reject({ article: {}, groupedCityData: [] }); });
        });
    };
    //Filter cities by query
    ArticleService.prototype.findArticle = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fetchJSON().subscribe(function (data) {
                var allKeys = Object.keys(data);
                var allCityNameKeys = allKeys.filter(function (key) {
                    return (key.indexOf('compare-tabs_1_city') > -1 && key.indexOf('name') > -1);
                });
                var foundKeys = [];
                if (query) {
                    for (var _i = 0, allCityNameKeys_1 = allCityNameKeys; _i < allCityNameKeys_1.length; _i++) {
                        var key = allCityNameKeys_1[_i];
                        if (data[key].toLowerCase().indexOf(query.toLowerCase()) > -1) {
                            foundKeys.push(key);
                        }
                    }
                }
                else {
                    foundKeys = allCityNameKeys;
                }
                var groupedCityData = [];
                foundKeys.forEach(function (key) {
                    var cityNumber = key.split('_')[3];
                    var cityData = [
                        key,
                        "compare-tabs_1_city_" + cityNumber + "_aqi",
                        "compare-tabs_1_city_" + cityNumber + "_cigg"
                    ];
                    groupedCityData.push(cityData);
                });
                resolve(groupedCityData);
            }, function (error) { return reject([]); });
        });
    };
    //Set language file
    ArticleService.prototype.setLang = function (lang) {
        var _this = this;
        return new Promise(function (resolve) {
            if (lang === 'en') {
                _this.articleUrl = _app_app_config__WEBPACK_IMPORTED_MODULE_5__["englishSource"];
            }
            else {
                _this.articleUrl = _app_app_config__WEBPACK_IMPORTED_MODULE_5__["hindiSource"];
            }
            resolve(true);
        });
    };
    ArticleService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/josephsharia/Documents/bbc-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map