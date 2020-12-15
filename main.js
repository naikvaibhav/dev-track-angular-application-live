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

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var optional = { optional: true };
var toTheRight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter, :leave", [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: "absolute",
            top: "0",
            right: 0,
            width: "100%",
        }),
    ], optional),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: "-100%" })]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: "100%" }))], optional),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("300ms ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: "0%" }))]),
    ]),
];
// Routable animations
var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("routeAnimations", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("isLogin => isUserDashboard", toTheRight),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("isLogin => isAdminDashboard", toTheRight),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => isLogin", toTheRight),
]);


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
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _home_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/page-not-found/page-not-found.component */ "./src/app/home/page-not-found/page-not-found.component.ts");








var routes = [
    {
        path: "home",
        component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        pathMatch: "full",
    },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "*", component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "**", component: _home_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <router-outlet></router-outlet> -->\n<div [@routeAnimations]=\"getAnimationData(routerOutlet)\">\n  <router-outlet #routerOutlet=\"outlet\"></router-outlet>\n</div>\n"

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
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./src/app/animation.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "dev-track";
    }
    AppComponent.prototype.getAnimationData = function (outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData["animation"]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");





//importing formsModule

//importing HttpClientModule



//importing toastr

//importing ngbootstrap

//importing ngx-datatable


//importing socila login


//local modules generated by the developer



//importing services


var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"]("19394797597-btfag72i88oidesh6aujhmr748i26qrb.apps.googleusercontent.com"),
    },
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastContainerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_16__["UserModule"],
            ],
            providers: [
                _app_service__WEBPACK_IMPORTED_MODULE_17__["AppService"],
                _socket_service__WEBPACK_IMPORTED_MODULE_18__["SocketService"],
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["AuthServiceConfig"],
                    useFactory: provideConfig,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


//http client




var AppService = /** @class */ (function () {
    function AppService(_http) {
        this._http = _http;
        // private url = "http://localhost:3000/api/v1";
        this.url = "http://apidevtrack.naikvaibhav.online/api/v1";
        this.showSpinner = false;
        this.hideSideNav = false;
        //common services
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem("userInfo", JSON.stringify(data));
        };
        this.getUserInfoFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem("userInfo"));
        };
        this.setAuthToken = function (data) {
            localStorage.setItem("authToken", JSON.stringify(data));
        };
        this.getAuthToken = function () {
            return JSON.parse(localStorage.getItem("authToken"));
        };
        this.removeUserInfoFromLocalStorage = function () {
            localStorage.removeItem("userInfo");
        };
        this.removeAuthTokenFromLocalStorage = function () {
            localStorage.removeItem("authToken");
        };
    }
    AppService.prototype.showLoadingSpinner = function () {
        this.showSpinner = true;
    };
    AppService.prototype.hideLoadingSpinner = function () {
        this.showSpinner = false;
    };
    AppService.prototype.toggleSideNav = function () {
        this.hideSideNav = !this.hideSideNav;
    };
    //user realted service
    //local signup
    AppService.prototype.signUpFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("firstName", data.firstName)
            .set("lastName", data.lastName)
            .set("email", data.email)
            .set("password", data.password)
            .set("avatar", data.avatar);
        return this._http.post(this.url + "/users/signup", params);
    };
    //local login or signin
    AppService.prototype.loginFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("email", data.email)
            .set("password", data.password);
        return this._http.post(this.url + "/users/login", params);
    };
    AppService.prototype.forgotPasswordFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("email", data.email);
        return this._http.post(this.url + "/users/forgotPassword", params);
    };
    AppService.prototype.verifyPasswordResetLink = function (id, token) {
        return this._http.get(this.url + "/users/resetPassword/" + id + "/" + token);
    };
    AppService.prototype.updatePassword = function (data) {
        return this._http.post(this.url + "/users/updatePassword", data);
    };
    //verify social id token sent by the frontend to authenticate the user
    AppService.prototype.verifySocialIdToken = function (data) {
        return this._http.post(this.url + "/users/socialId", data);
    };
    AppService.prototype.getSingleUser = function (userId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http
            .get(this.url + "/users/" + userId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // console.log("Get user details", data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AppService.prototype.getAllUsers = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.get(this.url + "/users", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // console.log("Get all the users", data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AppService.prototype.logout = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("userId", userId);
        return this._http.post(this.url + "/users/logout", params);
    };
    //user realted service
    AppService.prototype.createIssue = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.post(this.url + "/issues/create", data, {
            headers: headers,
        });
    };
    AppService.prototype.editIssue = function (issueId, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.put(this.url + "/issues/edit/" + issueId, data, {
            headers: headers,
        });
    };
    AppService.prototype.getAllIssues = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.get(this.url + "/issues", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // console.log("Get all the issues", data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AppService.prototype.getAllIssuesAssignedToMe = function (assigneedId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http
            .get(this.url + "/assignedIssues/" + assigneedId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // console.log("Get assigned issues", data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AppService.prototype.getCounts = function (assigneedId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http
            .get(this.url + "/count/" + assigneedId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // console.log("Get assigned issue counting", data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AppService.prototype.searchIssues = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append("searchTerm", data);
        // console.log("params", params);
        return this._http
            .get(this.url + "/issues/issue/searchIssue", { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // console.log("Get searched issues", data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AppService.prototype.getSingleIssue = function (issueId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http
            .get(this.url + "/issues/" + issueId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            // console.log("Get the issue", data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AppService.prototype.imageUpload = function (imageForm) {
        return this._http.post(this.url + "/upload", imageForm);
    };
    AppService.prototype.saveComment = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.post(this.url + "/comments", data, {
            headers: headers,
        });
    };
    AppService.prototype.getComment = function (issueId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.get(this.url + "/comments/" + issueId, {
            headers: headers,
        });
    };
    AppService.prototype.setWatcherForAnIssue = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.post(this.url + "/watchers", data, {
            headers: headers,
        });
    };
    AppService.prototype.removeWatcherForAnIssue = function (userId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.delete(this.url + "/watchers/remove/" + userId, {
            headers: headers,
        });
    };
    AppService.prototype.getWatchersOfIssue = function (issueId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.get(this.url + "/watchers/" + issueId, {
            headers: headers,
        });
    };
    AppService.prototype.deleteImageFromServer = function (image) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("image", image);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("authToken", this.getAuthToken());
        return this._http.put(this.url + "/deleteImage", params, {
            headers: headers,
        });
    };
    //exception handler
    AppService.prototype.handleError = function (err) {
        console.log("Handle error Http Calls");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.message);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/home/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/home/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: rgb(221, 221, 221);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.forgotPassword {\r\n  display: block;\r\n}\r\n\r\n.resetPasswordBtn {\r\n  margin-top: 2vh;\r\n  border-radius: 20px;\r\n}\r\n\r\n/*start of media queries*/\r\n\r\n@media screen and (min-width: 768px) {\r\n  .forgotPasswordForm {\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 360px) {\r\n  .forgotPasswordForm {\r\n    width: 300px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\ninput.ng-dirty.ng-valid {\r\n  border-color: #42a948;\r\n}\r\n\r\ninput.ng-dirty.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n\r\n/*custom color for bootstrap buttons*/\r\n\r\n.btn-outline-success {\r\n  color: #c03546;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  color: #fff;\r\n  font-weight: 500;\r\n  background: linear-gradient(57deg, #c03546, #f26d5b);\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:focus,\r\n.btn-outline-success.focus {\r\n  box-shadow: 0 0 0 0.1rem #c03546;\r\n}\r\n\r\n.btn-outline-success.disabled,\r\n.btn-outline-success:disabled {\r\n  color: #f26d5b;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active,\r\n.btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  background-color: transparent;\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.1rem #c03546;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0RBQW9EO0VBQ3BELHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBQ0E7OztFQUdFLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBQ0E7OztFQUdFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uZm9yZ290UGFzc3dvcmQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucmVzZXRQYXNzd29yZEJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi8qc3RhcnQgb2YgbWVkaWEgcXVlcmllcyovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcmdvdFBhc3N3b3JkRm9ybSB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gIC5mb3Jnb3RQYXNzd29yZEZvcm0ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDJhOTQ4O1xyXG59XHJcblxyXG5pbnB1dC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuLm5vdGlmeUVycm9yIHtcclxuICBjb2xvcjogI2E5NDQ0MjtcclxufVxyXG5cclxuLypjdXN0b20gY29sb3IgZm9yIGJvb3RzdHJhcCBidXR0b25zKi9cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjYzAzNTQ2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzAzNTQ2O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1N2RlZywgI2MwMzU0NiwgI2YyNmQ1Yik7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzAzNTQ2O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5mb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNjMDM1NDY7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZGlzYWJsZWQsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmRpc2FibGVkIHtcclxuICBjb2xvcjogI2YyNmQ1YjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzAzNTQ2O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNjMDM1NDY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\n    />\n  </head>\n  <body>\n    <!-- ======= Start header area=========== -->\n    <app-navbar></app-navbar>\n    <!-- ======= End header area=========== -->\n    <div class=\"section\">\n      <div class=\"container forgotPasswordForm\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <p style=\"font-weight: 400; font-size: 2em; text-align: center;\">\n              Forgot your password?\n            </p>\n            <p class=\"text-muted\">\n              That's okay, it happens. Please enter your registered email and\n              click on the button below to receive a password reset link on the\n              email\n            </p>\n            <form\n              name=\"form\"\n              #forgotPasswordForm=\"ngForm\"\n              (ngSubmit)=\"forgotPasswordFunction()\"\n            >\n              <div class=\"form-group\">\n                <label for=\"email\">Email address</label>\n                <div class=\"input-group\">\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"email\"\n                    placeholder=\"Enter email\"\n                    [(ngModel)]=\"email\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputEmail=\"ngModel\"\n                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n                    required\n                    autofocus\n                  />\n                </div>\n                <div\n                  *ngIf=\"\n                    inputEmail.invalid &&\n                    (inputEmail.dirty || inputEmail.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  <div *ngIf=\"inputEmail.errors.required\">\n                    Please enter the email\n                  </div>\n                  <!-- <div *ngIf=\"inputEmail.errors?.pattern\">\n                        Invalid email format\n                      </div> -->\n                  <!-- <div *ngIf=\"inputEmail.errors.minlength\">\n                        Email must be at least 4 characters long.\n                      </div> -->\n                </div>\n              </div>\n\n              <button\n                type=\"submit\"\n                class=\"btn btn-outline-success btn-block resetPasswordBtn\"\n              >\n                Reset Password\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/home/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.checkFormValidation = function () {
            if (!_this.email) {
                _this.toastr.warning("Email is missing");
            }
            else {
                return;
            }
        }; //end of checkFormValidation
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ForgotPasswordComponent.prototype.forgotPasswordFunction = function () {
        var _this = this;
        this.checkFormValidation();
        var data = {
            email: this.email,
        };
        this.appService.forgotPasswordFunction(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success(apiResponse.message);
            }
            else {
                _this.toastr.error(apiResponse.message);
            }
        }, function (err) {
            _this.toastr.error("Some error occured");
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-forgot-password",
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/home/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/home/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/home/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/home/reset-password/reset-password.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/home/forgot-password/forgot-password.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/home/navbar/navbar.component.ts");














var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: "login",
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                        pathMatch: "full",
                        data: { animation: "isLogin" },
                    },
                    {
                        path: "signup",
                        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                        pathMatch: "full",
                        data: { animation: "isLogin" },
                    },
                    { path: "forgotPassword", component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"] },
                    { path: "resetPassword/:id/:token", component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"] },
                ]),
            ],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*body background*/\r\nbody {\r\n  background: linear-gradient(57deg, #c03546, #f26d5b);\r\n  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 82%, 0% 100%);\r\n          clip-path: polygon(0% 0%, 100% 0%, 100% 82%, 0% 100%);\r\n  min-height: 100vh;\r\n}\r\n/*navbar*/\r\n.navbar-brand {\r\n  padding: 0 2rem 0 5rem;\r\n  color: #fff !important;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n.header_area .main-menu .nav-item .nav-link {\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  font-size: 1em;\r\n  padding: 1rem;\r\n}\r\n.navbar-toggler {\r\n  color: #fff;\r\n  border: none !important;\r\n  outline: none !important;\r\n}\r\n.navbar-toggler .fa {\r\n  color: #fff;\r\n  font-size: 1.4rem;\r\n}\r\n.header_area .main-menu .navbar-nav a.active {\r\n  color: #f6ea8c;\r\n}\r\n/*buttons*/\r\n.btn {\r\n  border-radius: 0px;\r\n  padding: 0.8rem 2.2rem;\r\n  text-transform: uppercase;\r\n  position: relative;\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n  background: #fdfdfd;\r\n  transition: all 0.2s;\r\n}\r\n.btn-animated:hover {\r\n  transform: translateY(-3px);\r\n}\r\n.btn-animated:active {\r\n  transform: translateY(-1px);\r\n}\r\n/*Banner area*/\r\n.site-main .site-banner .site-title h1 {\r\n  padding-top: 35%;\r\n  font-weight: 500;\r\n  color: #fff;\r\n}\r\n.site-main .site-banner .site-title p {\r\n  font-size: 1.2rem;\r\n  color: #fff;\r\n}\r\n.site-main .site-banner .banner-image > img {\r\n  padding: 7rem 0;\r\n  width: 90rem;\r\n}\r\n/*End Banner area*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7RUFDRSxvREFBb0Q7RUFDcEQsNkRBQXFEO1VBQXJELHFEQUFxRDtFQUNyRCxpQkFBaUI7QUFDbkI7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsVUFBVTtBQUNWO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBLGNBQWM7QUFDZDtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0Esa0JBQWtCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qYm9keSBiYWNrZ3JvdW5kKi9cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU3ZGVnLCAjYzAzNTQ2LCAjZjI2ZDViKTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDEwMCUgODIlLCAwJSAxMDAlKTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLypuYXZiYXIqL1xyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nOiAwIDJyZW0gMCA1cmVtO1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaGVhZGVyX2FyZWEgLm1haW4tbWVudSAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci10b2dnbGVyIC5mYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi5oZWFkZXJfYXJlYSAubWFpbi1tZW51IC5uYXZiYXItbmF2IGEuYWN0aXZlIHtcclxuICBjb2xvcjogI2Y2ZWE4YztcclxufVxyXG5cclxuLypidXR0b25zKi9cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAyLjJyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLmJ0bi1hbmltYXRlZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG59XHJcbi5idG4tYW5pbWF0ZWQ6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi8qQmFubmVyIGFyZWEqL1xyXG4uc2l0ZS1tYWluIC5zaXRlLWJhbm5lciAuc2l0ZS10aXRsZSBoMSB7XHJcbiAgcGFkZGluZy10b3A6IDM1JTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2l0ZS1tYWluIC5zaXRlLWJhbm5lciAuc2l0ZS10aXRsZSBwIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNpdGUtbWFpbiAuc2l0ZS1iYW5uZXIgLmJhbm5lci1pbWFnZSA+IGltZyB7XHJcbiAgcGFkZGluZzogN3JlbSAwO1xyXG4gIHdpZHRoOiA5MHJlbTtcclxufVxyXG4vKkVuZCBCYW5uZXIgYXJlYSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0, user-scalable=no\"\n    />\n    <title>Document</title>\n  </head>\n  <body>\n    <!-- ======= Start header area=========== -->\n    <header class=\"header_area\">\n      <div class=\"main-menu\">\n        <nav class=\"navbar navbar-expand-lg navbar-light\">\n          <a class=\"navbar-brand\">DEV TRACK</a>\n          <button\n            class=\"navbar-toggler\"\n            type=\"button\"\n            data-toggle=\"collapse\"\n            data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\"\n          >\n            <i class=\"fa fa-bars\"></i>\n          </button>\n\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                <a\n                  class=\"nav-link\"\n                  [routerLink]=\"['/home']\"\n                  routerLinkActive=\"active\"\n                  >Home</a\n                >\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/signup']\">Signup</a>\n              </li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n    </header>\n    <!-- ======= End header area=========== -->\n\n    <!--=======start main area============-->\n    <main class=\"site-main\">\n      <!--=======start banner area============-->\n      <section class=\"site-banner\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12 site-title\">\n              <h1 class=\"title-text\">Dev Track</h1>\n              <p>\n                An applicaton to keep track of issues encountered during testing\n                and development\n              </p>\n              <div class=\"site-buttons\">\n                <div class=\"d-flex flex-row flex-wrap\">\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-animated mr-4\"\n                    [routerLink]=\"['/login']\"\n                  >\n                    Login\n                  </button>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-animated\"\n                    [routerLink]=\"['/signup']\"\n                  >\n                    Signup\n                  </button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-md-12 banner-image\">\n              <img\n                src=\"../assets/images/undraw_bug_fixing_oc7a.svg\"\n                class=\"img-fluid\"\n                alt=\"issue-tracking\"\n              />\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!--=======end banner area============-->\n    </main>\n    <!--=======end main area============-->\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/home/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: rgb(221, 221, 221);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n  overflow-y: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #574b90;\r\n}\r\n\r\n/*custom color for bootstrap buttons*/\r\n\r\n.btn-outline-success {\r\n  color: #c03546;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  color: #fff;\r\n  font-weight: 500;\r\n  background: linear-gradient(57deg, #c03546, #f26d5b);\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:focus,\r\n.btn-outline-success.focus {\r\n  box-shadow: 0 0 0 0.1rem #c03546;\r\n}\r\n\r\n.btn-outline-success.disabled,\r\n.btn-outline-success:disabled {\r\n  color: #f26d5b;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active,\r\n.btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  background-color: transparent;\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.1rem #c03546;\r\n}\r\n\r\n/*end of bootstrap custom btn styling*/\r\n\r\n.card {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  background: #fff;\r\n}\r\n\r\n.card-heading {\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  padding: 6%;\r\n}\r\n\r\n.forgotPassword {\r\n  display: block;\r\n}\r\n\r\n.loginBtn {\r\n  margin-top: 2vh;\r\n  border-radius: 20px;\r\n}\r\n\r\n.signUpBtn {\r\n  margin-top: 2vh;\r\n}\r\n\r\n.bottom-border {\r\n  border-bottom: 1.3px groove #cdcdcd;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n/*start of media queries*/\r\n\r\n@media screen and (min-width: 768px) {\r\n  .loginForm {\r\n    width: 500px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 576px) {\r\n  .loginForm {\r\n    width: 500px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 320px) {\r\n  .loginForm {\r\n    width: 300px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .loginForm {\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n/*end of media queries*/\r\n\r\n/*invalid and valid feedback on form*/\r\n\r\ninput.ng-dirty.ng-valid {\r\n  border-color: #42a948;\r\n}\r\n\r\ninput.ng-dirty.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n\r\n/*end of invalid and valid feedback on form*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0RBQW9EO0VBQ3BELHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBQ0E7OztFQUdFLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBQ0E7OztFQUdFLGdDQUFnQztBQUNsQzs7QUFFQSxzQ0FBc0M7O0FBRXRDO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBQ0EsdUJBQXVCOztBQUV2QixxQ0FBcUM7O0FBQ3JDO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQSw0Q0FBNEMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzU3NGI5MDtcclxufVxyXG5cclxuLypjdXN0b20gY29sb3IgZm9yIGJvb3RzdHJhcCBidXR0b25zKi9cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjYzAzNTQ2O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzAzNTQ2O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1N2RlZywgI2MwMzU0NiwgI2YyNmQ1Yik7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzAzNTQ2O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5mb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNjMDM1NDY7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZGlzYWJsZWQsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOmRpc2FibGVkIHtcclxuICBjb2xvcjogI2YyNmQ1YjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzAzNTQ2O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxyXG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNjMDM1NDY7XHJcbn1cclxuXHJcbi8qZW5kIG9mIGJvb3RzdHJhcCBjdXN0b20gYnRuIHN0eWxpbmcqL1xyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uY2FyZC1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDYlO1xyXG59XHJcblxyXG4uZm9yZ290UGFzc3dvcmQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9naW5CdG4ge1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5zaWduVXBCdG4ge1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxufVxyXG4uYm90dG9tLWJvcmRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMS4zcHggZ3Jvb3ZlICNjZGNkY2Q7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKnN0YXJ0IG9mIG1lZGlhIHF1ZXJpZXMqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5sb2dpbkZvcm0ge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5sb2dpbkZvcm0ge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5sb2dpbkZvcm0ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmxvZ2luRm9ybSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuLyplbmQgb2YgbWVkaWEgcXVlcmllcyovXHJcblxyXG4vKmludmFsaWQgYW5kIHZhbGlkIGZlZWRiYWNrIG9uIGZvcm0qL1xyXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDJhOTQ4O1xyXG59XHJcblxyXG5pbnB1dC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuLm5vdGlmeUVycm9yIHtcclxuICBjb2xvcjogI2E5NDQ0MjtcclxufVxyXG4vKmVuZCBvZiBpbnZhbGlkIGFuZCB2YWxpZCBmZWVkYmFjayBvbiBmb3JtKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\n    />\n  </head>\n  <body>\n    <!-- ======= Start header area=========== -->\n    <app-navbar></app-navbar>\n    <!-- ======= End header area=========== -->\n\n    <!-- ======= Start main area=========== -->\n\n    <div class=\"section\">\n      <div class=\"container loginForm\">\n        <div class=\"card pb-4\">\n          <p class=\"card-heading\">\n            Login\n          </p>\n          <div class=\"card-body\">\n            <form name=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"loginFunction()\">\n              <div class=\"form-group\">\n                <label for=\"email\">Email address</label>\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"inputGroupPrepend2\"\n                      ><img src=\"./../../../assets/images/user.svg\" alt=\"\"\n                    /></span>\n                  </div>\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"email\"\n                    placeholder=\"Enter email\"\n                    [(ngModel)]=\"email\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputEmail=\"ngModel\"\n                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n                    required\n                    autofocus\n                  />\n                </div>\n                <div\n                  *ngIf=\"\n                    inputEmail.invalid &&\n                    (inputEmail.dirty || inputEmail.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  <div *ngIf=\"inputEmail.errors.required\">\n                    Please enter the email\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"inputGroupPrepend2\"\n                      ><img src=\"./../../../assets/images/lock.svg\" alt=\"\"\n                    /></span>\n                  </div>\n                  <input\n                    type=\"password\"\n                    name=\"password\"\n                    class=\"form-control\"\n                    id=\"password\"\n                    [(ngModel)]=\"password\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputPassword=\"ngModel\"\n                    placeholder=\"Password\"\n                    required\n                  />\n                </div>\n\n                <div\n                  *ngIf=\"\n                    inputPassword.invalid &&\n                    (inputPassword.dirty || inputPassword.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  Please enter the password\n                  <div *ngIf=\"loginForm.controls['password']?.errors?.required\">\n                    Please enter the password\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"forgotPassword\">\n                <a [routerLink]=\"['/forgotPassword']\">Forgot Password?</a>\n              </div>\n              <button\n                type=\"submit\"\n                class=\"btn btn-outline-success btn-block loginBtn\"\n              >\n                Login\n              </button>\n              <div class=\"signUpBtn\">\n                <a [routerLink]=\"['/signup']\">Not a member? Signup</a>\n              </div>\n            </form>\n\n            <span class=\"bottom-border pt-2\">OR</span>\n            <button\n              class=\"btn btn-md btn-block mt-3\"\n              role=\"button\"\n              style=\"text-transform: none;\"\n              (click)=\"signInWithGoogle()\"\n            >\n              <img\n                width=\"20px\"\n                style=\"margin-bottom: 3px; margin-right: 5px;\"\n                alt=\"Google sign-in\"\n                src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png\"\n              />\n              Login with Google\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- ======= End main area=========== -->\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/home/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, _route, router, toastr, authService) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
        this.email = "";
        this.password = "";
        this.verifySocialIdToken = function (data) {
            _this.appService.verifySocialIdToken(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    if (apiResponse.data.userDetails.userRole == "admin") {
                        _this.router.navigate(["/admindashboard"]);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.appService.setAuthToken(apiResponse.data.authToken);
                        _this.toastr.success(apiResponse.message);
                    }
                    else {
                        _this.router.navigate([
                            "/userdashboard/" + apiResponse.data.userDetails.userId,
                        ]);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.appService.setAuthToken(apiResponse.data.authToken);
                        _this.toastr.success(apiResponse.message);
                    }
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                document.querySelector(".loginBtn").textContent = "Login";
                _this.toastr.error(err.error.message);
            });
        };
        //check if email and password are entered before login
        this.checkFormValidation = function () {
            if (!_this.email) {
                _this.toastr.warning("Email is missing");
            }
            else if (!_this.password) {
                _this.toastr.warning("Password is missing");
            }
            else {
                return;
            }
        }; //end of checkFormValidation
        this.loginFunction = function () {
            document.querySelector(".loginBtn").textContent = "Logging....";
            _this.checkFormValidation();
            var data = {
                email: _this.email,
                password: _this.password,
            };
            _this.appService.loginFunction(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    if (apiResponse.data.userDetails.userRole == "admin") {
                        _this.router.navigate(["/admindashboard"]);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.appService.setAuthToken(apiResponse.data.authToken);
                        _this.toastr.success(apiResponse.message);
                    }
                    else {
                        _this.router.navigate([
                            "/userdashboard/" + apiResponse.data.userDetails.userId,
                        ]);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.appService.setAuthToken(apiResponse.data.authToken);
                        _this.toastr.success(apiResponse.message);
                    }
                }
                else {
                    _this.toastr.error(apiResponse.message);
                    document.querySelector(".loginBtn").textContent = "Login";
                }
            }, function (err) {
                document.querySelector(".loginBtn").textContent = "Login";
                _this.toastr.error(err.error.message);
            });
        }; //end of loginFunction
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = user != null;
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService
            .signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID)
            .then(function (userData) {
            _this.verifySocialIdToken(_this.user);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/home/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/home/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/home/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*navbar*/\r\n.header_area {\r\n  background: linear-gradient(57deg, #f26d5b, #c03546);\r\n}\r\n.navbar-brand {\r\n  padding: 0 2rem 0 5rem;\r\n  color: #fff !important;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n.header_area .main-menu .nav-item .nav-link {\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  font-size: 1em;\r\n  padding: 1rem;\r\n}\r\n.navbar-toggler {\r\n  color: #fff;\r\n  border: none !important;\r\n  outline: none !important;\r\n}\r\n.navbar-toggler .fa {\r\n  color: #fff;\r\n  font-size: 1.4rem;\r\n}\r\n.header_area .main-menu .navbar-nav a.active {\r\n  color: #faee1c;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNUO0VBQ0Usb0RBQW9EO0FBQ3REO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKm5hdmJhciovXHJcbi5oZWFkZXJfYXJlYSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU3ZGVnLCAjZjI2ZDViLCAjYzAzNTQ2KTtcclxufVxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nOiAwIDJyZW0gMCA1cmVtO1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaGVhZGVyX2FyZWEgLm1haW4tbWVudSAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci10b2dnbGVyIC5mYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi5oZWFkZXJfYXJlYSAubWFpbi1tZW51IC5uYXZiYXItbmF2IGEuYWN0aXZlIHtcclxuICBjb2xvcjogI2ZhZWUxYztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header\n  class=\"header_area\"\n  style=\"position: absolute; top: 0; left: 0; width: 100%; z-index: 5;\"\n>\n  <div class=\"main-menu\">\n    <nav class=\"navbar navbar-expand-lg navbar-light\">\n      <a class=\"navbar-brand\">DEV TRACK</a>\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n      >\n        <i class=\"fa fa-bars\"></i>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              [routerLink]=\"['/home']\"\n              routerLinkActive=\"active\"\n              >Home</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              [routerLink]=\"['/login']\"\n              routerLinkActive=\"active\"\n              >Login</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              [routerLink]=\"['/signup']\"\n              routerLinkActive=\"active\"\n              >Signup</a\n            >\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/home/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/home/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/home/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/home/page-not-found/page-not-found.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/page-not-found/page-not-found.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: rgb(221, 221, 221);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n}\r\n\r\n/*start of media queries*/\r\n\r\n@media screen and (min-width: 768px) {\r\n  .pageNotFoundCard {\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 360px) {\r\n  .pageNotFoundCard {\r\n    width: 300px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n/*end of media queries*/\r\n\r\n/*custom color for bootstrap buttons*/\r\n\r\n.btn-success {\r\n  color: #fff;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #c03546;\r\n  background: linear-gradient(57deg, #c03546, #f26d5b);\r\n}\r\n\r\n.btn-success:focus,\r\n.btn-success.focus {\r\n  box-shadow: 0 0 0 0.1rem #c03546;\r\n}\r\n\r\n.btn-success.disabled,\r\n.btn-success:disabled {\r\n  color: #f26d5b;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-success:not(:disabled):not(.disabled):active,\r\n.btn-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-success.dropdown-toggle {\r\n  background-color: transparent;\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.1rem #c03546;\r\n}\r\n\r\n/*end of bootstrap custom btn styling*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtBQUNwQjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRjs7QUFDQSx1QkFBdUI7O0FBRXZCLHFDQUFxQzs7QUFDckM7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0RBQW9EO0FBQ3REOztBQUNBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFDQTs7O0VBR0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7O0VBR0UsZ0NBQWdDO0FBQ2xDOztBQUNBLHNDQUFzQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi8qc3RhcnQgb2YgbWVkaWEgcXVlcmllcyovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBhZ2VOb3RGb3VuZENhcmQge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAucGFnZU5vdEZvdW5kQ2FyZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuLyplbmQgb2YgbWVkaWEgcXVlcmllcyovXHJcblxyXG4vKmN1c3RvbSBjb2xvciBmb3IgYm9vdHN0cmFwIGJ1dHRvbnMqL1xyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzAzNTQ2O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1N2RlZywgI2MwMzU0NiwgI2YyNmQ1Yik7XHJcbn1cclxuLmJ0bi1zdWNjZXNzOmZvY3VzLFxyXG4uYnRuLXN1Y2Nlc3MuZm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjYzAzNTQ2O1xyXG59XHJcbi5idG4tc3VjY2Vzcy5kaXNhYmxlZCxcclxuLmJ0bi1zdWNjZXNzOmRpc2FibGVkIHtcclxuICBjb2xvcjogI2YyNmQ1YjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXHJcbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzAzNTQ2O1xyXG59XHJcbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXHJcbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNjMDM1NDY7XHJcbn1cclxuLyplbmQgb2YgYm9vdHN0cmFwIGN1c3RvbSBidG4gc3R5bGluZyovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/page-not-found/page-not-found.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/page-not-found/page-not-found.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\n    />\n  </head>\n  <body>\n    <!-- ======= Start header area=========== -->\n    <app-navbar></app-navbar>\n    <!-- ======= End header area=========== -->\n    <div class=\"section\">\n      <div class=\"container pageNotFoundCard\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <p style=\"font-weight: 400; font-size: 2em; text-align: center;\">\n              Oops!\n            </p>\n            <p style=\"font-weight: 400; font-size: 2em; text-align: center;\">\n              404 Not Found\n            </p>\n            <p style=\"font-weight: 300; font-size: 1em;\">\n              Sorry, an error has occured, Requested page not found!\n            </p>\n            <button class=\"btn btn-success btn-block\" [routerLink]=\"['/login']\">\n              Take me to Login\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/home/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/home/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/home/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/home/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: rgb(221, 221, 221);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.updatePasswordBtn {\r\n  margin-top: 2vh;\r\n  border-radius: 20px;\r\n}\r\n\r\n/*start of media queries*/\r\n\r\n@media screen and (min-width: 768px) {\r\n  .resetPasswordForm {\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .resetPasswordForm {\r\n    width: 300px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\ninput.ng-dirty.ng-valid {\r\n  border-color: #42a948;\r\n}\r\n\r\ninput.ng-dirty.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n\r\n/*custom color for bootstrap buttons*/\r\n\r\n.btn-outline-success {\r\n  color: #c03546;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  color: #fff;\r\n  font-weight: 500;\r\n  background: linear-gradient(57deg, #c03546, #f26d5b);\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:focus,\r\n.btn-outline-success.focus {\r\n  box-shadow: 0 0 0 0.1rem #c03546;\r\n}\r\n\r\n.btn-outline-success.disabled,\r\n.btn-outline-success:disabled {\r\n  color: #f26d5b;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active,\r\n.btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  background-color: transparent;\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.1rem #c03546;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0RBQW9EO0VBQ3BELHFCQUFxQjtBQUN2Qjs7QUFDQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBQ0E7OztFQUdFLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBQ0E7OztFQUdFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnVwZGF0ZVBhc3N3b3JkQnRuIHtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLypzdGFydCBvZiBtZWRpYSBxdWVyaWVzKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAucmVzZXRQYXNzd29yZEZvcm0ge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5yZXNldFBhc3N3b3JkRm9ybSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0Lm5nLWRpcnR5Lm5nLXZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICM0MmE5NDg7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2E5NDQ0MjtcclxufVxyXG4ubm90aWZ5RXJyb3Ige1xyXG4gIGNvbG9yOiAjYTk0NDQyO1xyXG59XHJcblxyXG4vKmN1c3RvbSBjb2xvciBmb3IgYm9vdHN0cmFwIGJ1dHRvbnMqL1xyXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNjMDM1NDY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICNjMDM1NDY7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU3ZGVnLCAjYzAzNTQ2LCAjZjI2ZDViKTtcclxuICBib3JkZXItY29sb3I6ICNjMDM1NDY7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzLmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gI2MwMzU0NjtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5kaXNhYmxlZCxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjZjI2ZDViO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6ICNjMDM1NDY7XHJcbn1cclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXHJcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gI2MwMzU0NjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\n    />\n  </head>\n  <body>\n    <!-- ======= Start header area=========== -->\n    <app-navbar></app-navbar>\n    <!-- ======= End header area=========== -->\n    <div class=\"section\" *ngIf=\"!isLink\">\n      <div class=\"container resetPasswordForm\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <p>\n              The Reset Password link has expired. Please click on the below\n              button to go back to the login page\n            </p>\n            <button\n              class=\"btn btn-outline-success btn-block\"\n              [routerLink]=\"['/login']\"\n            >\n              <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Go back to\n              Login\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"section\" *ngIf=\"isLink\">\n      <div class=\"container resetPasswordForm\">\n        <div class=\"row align-items-center\">\n          <div class=\"col\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <form\n                  name=\"form\"\n                  #resetPasswordForm=\"ngForm\"\n                  (ngSubmit)=\"updatePasswordFunction()\"\n                >\n                  <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input\n                      type=\"password\"\n                      class=\"form-control\"\n                      id=\"password1\"\n                      placeholder=\"Enter password\"\n                      [(ngModel)]=\"password\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                      #inputPassword=\"ngModel\"\n                      required\n                      autofocus\n                    />\n                    <div\n                      *ngIf=\"\n                        inputPassword.invalid &&\n                        (inputPassword.dirty || inputPassword.touched)\n                      \"\n                      class=\"notifyError\"\n                    >\n                      <div *ngIf=\"inputPassword.errors.required\">\n                        Please enter the password\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"password\">Confirm password</label>\n                    <input\n                      type=\"password\"\n                      class=\"form-control\"\n                      id=\"password2\"\n                      placeholder=\"Enter password\"\n                      [(ngModel)]=\"confirmPassword\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                      #inputConfirmPassword=\"ngModel\"\n                      required\n                      autofocus\n                    />\n\n                    <div\n                      *ngIf=\"\n                        inputConfirmPassword.invalid &&\n                        (inputConfirmPassword.dirty ||\n                          inputConfirmPassword.touched)\n                      \"\n                      class=\"notifyError\"\n                    >\n                      <div *ngIf=\"inputConfirmPassword.errors.required\">\n                        Please enter the confirm password\n                      </div>\n                      <!-- <div *ngIf=\"inputConfirmPassword.errors?.pattern\">\n                        Invalid email format\n                      </div> -->\n                      <!-- <div *ngIf=\"inputConfirmPassword.errors.minlength\">\n                        Email must be at least 4 characters long.\n                      </div> -->\n                    </div>\n                    <div\n                      *ngIf=\"\n                        password !== confirmPassword &&\n                        confirmPassword != undefined &&\n                        confirmPassword != ''\n                      \"\n                      class=\"notifyError\"\n                    >\n                      Not a matching password\n                    </div>\n                  </div>\n\n                  <button\n                    type=\"submit\"\n                    class=\"btn btn-outline-success btn-block updatePasswordBtn\"\n                  >\n                    Update Password\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/home/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(appService, _route, router, toastr, modal) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.modal = modal;
        this.isLink = false;
        this.updatePasswordFunction = function () {
            var data = {
                userId: _this.userId,
                token: _this.token,
                password: _this.password,
            };
            _this.appService.updatePassword(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success(apiResponse.message);
                    setTimeout(function () {
                        _this.router.navigate(["/login"]);
                    }, 1000);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                    setTimeout(function () {
                        _this.router.navigate(["/login"]);
                    }, 5000);
                }
            }, function (err) {
                console.log(err);
            });
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.paramMap.get("id");
        var token = this._route.snapshot.paramMap.get("token");
        this.appService.verifyPasswordResetLink(id, token).subscribe(function (apiResponse) {
            _this.isLink = true;
            _this.token = apiResponse.data.token;
            _this.userId = apiResponse.data.userId;
        }, function (err) {
            console.log(err);
            console.log("Link expired");
            _this.toastr.error("Link expired");
        });
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-reset-password",
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/home/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/home/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: rgb(221, 221, 221);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n}\r\n\r\n/*custom color for bootstrap buttons*/\r\n\r\n.btn-outline-success {\r\n  color: #c03546;\r\n  background-color: transparent;\r\n  background-image: none;\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  color: #fff;\r\n  font-weight: 500;\r\n  background: linear-gradient(57deg, #c03546, #f26d5b);\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:focus,\r\n.btn-outline-success.focus {\r\n  box-shadow: 0 0 0 0.1rem #c03546;\r\n}\r\n\r\n.btn-outline-success.disabled,\r\n.btn-outline-success:disabled {\r\n  color: #f26d5b;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active,\r\n.btn-outline-success:not(:disabled):not(.disabled).active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  background-color: transparent;\r\n  border-color: #c03546;\r\n}\r\n\r\n.btn-outline-success:not(:disabled):not(.disabled):active:focus,\r\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n.show > .btn-outline-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.1rem #c03546;\r\n}\r\n\r\n/*end of bootstrap custom btn styling*/\r\n\r\n.crop {\r\n  border-radius: 100%;\r\n  line-height: 1em;\r\n  padding: 1em;\r\n  width: 6em;\r\n  height: 6em;\r\n  margin: 0 auto;\r\n  float: none;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  background: #fff;\r\n}\r\n\r\n.card-heading {\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  padding: 6%;\r\n}\r\n\r\n/*start of media queries*/\r\n\r\n@media screen and (min-width: 768px) {\r\n  .signUpForm {\r\n    width: 500px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 320px) {\r\n  .signUpForm {\r\n    width: 300px;\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .signUpForm {\r\n    /* width: 300px; */\r\n    padding-top: 20%;\r\n    padding-bottom: 10%;\r\n  }\r\n}\r\n\r\n/*end of media queries*/\r\n\r\n/*invalid and valid feedback on form*/\r\n\r\ninput.ng-dirty.ng-valid {\r\n  border-color: #42a948;\r\n}\r\n\r\ninput.ng-dirty.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n\r\nselect.ng-invalid {\r\n  border-color: #a94442;\r\n}\r\n\r\nselect.ng-valid {\r\n  border-color: #42a948;\r\n}\r\n\r\n.notifyError {\r\n  color: #a94442;\r\n}\r\n\r\n/*end of invalid and valid feedback on form*/\r\n\r\n.active {\r\n  color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvREFBb0Q7RUFDcEQscUJBQXFCO0FBQ3ZCOztBQUNBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFDQTs7O0VBR0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFDQTs7O0VBR0UsZ0NBQWdDO0FBQ2xDOztBQUNBLHNDQUFzQzs7QUFFdEM7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUNBLHVCQUF1Qjs7QUFFdkIscUNBQXFDOztBQUNyQztFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0EsNENBQTRDOztBQUU1QztFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qY3VzdG9tIGNvbG9yIGZvciBib290c3RyYXAgYnV0dG9ucyovXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICBjb2xvcjogI2MwMzU0NjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogI2MwMzU0NjtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTdkZWcsICNjMDM1NDYsICNmMjZkNWIpO1xyXG4gIGJvcmRlci1jb2xvcjogI2MwMzU0NjtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpmb2N1cyxcclxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3MuZm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjYzAzNTQ2O1xyXG59XHJcbi5idG4tb3V0bGluZS1zdWNjZXNzLmRpc2FibGVkLFxyXG4uYnRuLW91dGxpbmUtc3VjY2VzczpkaXNhYmxlZCB7XHJcbiAgY29sb3I6ICNmMjZkNWI7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcclxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2MwMzU0NjtcclxufVxyXG4uYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcclxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjYzAzNTQ2O1xyXG59XHJcbi8qZW5kIG9mIGJvb3RzdHJhcCBjdXN0b20gYnRuIHN0eWxpbmcqL1xyXG5cclxuLmNyb3Age1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgd2lkdGg6IDZlbTtcclxuICBoZWlnaHQ6IDZlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmbG9hdDogbm9uZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uY2FyZC1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDYlO1xyXG59XHJcblxyXG4vKnN0YXJ0IG9mIG1lZGlhIHF1ZXJpZXMqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zaWduVXBGb3JtIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAuc2lnblVwRm9ybSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuc2lnblVwRm9ybSB7XHJcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICB9XHJcbn1cclxuLyplbmQgb2YgbWVkaWEgcXVlcmllcyovXHJcblxyXG4vKmludmFsaWQgYW5kIHZhbGlkIGZlZWRiYWNrIG9uIGZvcm0qL1xyXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDJhOTQ4O1xyXG59XHJcblxyXG5pbnB1dC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuc2VsZWN0Lm5nLWludmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogI2E5NDQ0MjtcclxufVxyXG5zZWxlY3QubmctdmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogIzQyYTk0ODtcclxufVxyXG4ubm90aWZ5RXJyb3Ige1xyXG4gIGNvbG9yOiAjYTk0NDQyO1xyXG59XHJcbi8qZW5kIG9mIGludmFsaWQgYW5kIHZhbGlkIGZlZWRiYWNrIG9uIGZvcm0qL1xyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, user-scalable=no\"\n    />\n  </head>\n  <body>\n    <!-- ======= Start header area=========== -->\n    <app-navbar></app-navbar>\n    <!-- ======= End header area=========== -->\n\n    <!-- ======= Start main area=========== -->\n    <div class=\"section\">\n      <div class=\"container signUpForm\">\n        <div class=\"card pb-4\">\n          <p class=\"card-heading\">\n            Sign Up\n          </p>\n          <div class=\"card-body\">\n            <form (ngSubmit)=\"signUpFunction()\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-6 col-sm-12\">\n                  <label for=\"firstName\">First Name</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"firstName\"\n                    [(ngModel)]=\"firstName\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputFirstName=\"ngModel\"\n                    required\n                    autofocus\n                  />\n                  <div\n                    *ngIf=\"\n                      inputFirstName.invalid &&\n                      (inputFirstName.dirty || inputFirstName.touched)\n                    \"\n                    class=\"notifyError\"\n                  >\n                    First Name is empty\n                  </div>\n                </div>\n                <div class=\"form-group col-md-6 col-sm-12\">\n                  <label for=\"lastName\">Last Name</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"lastName\"\n                    [(ngModel)]=\"lastName\"\n                    [ngModelOptions]=\"{ standalone: true }\"\n                    #inputLastName=\"ngModel\"\n                    required\n                  />\n                  <div\n                    *ngIf=\"\n                      inputLastName.invalid &&\n                      (inputLastName.dirty || inputLastName.touched)\n                    \"\n                    class=\"notifyError\"\n                  >\n                    Last Name is empty\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input\n                  type=\"email\"\n                  class=\"form-control\"\n                  id=\"email\"\n                  placeholder=\"Enter email\"\n                  [(ngModel)]=\"email\"\n                  [ngModelOptions]=\"{ standalone: true }\"\n                  #inputEmail=\"ngModel\"\n                  required\n                />\n                <div\n                  *ngIf=\"\n                    inputEmail.invalid &&\n                    (inputEmail.dirty || inputEmail.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  Email is empty\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Password</label>\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  id=\"password1\"\n                  placeholder=\"Enter password\"\n                  [(ngModel)]=\"password\"\n                  [ngModelOptions]=\"{ standalone: true }\"\n                  #inputPassword=\"ngModel\"\n                  required\n                />\n                <div\n                  *ngIf=\"\n                    inputPassword.invalid &&\n                    (inputPassword.dirty || inputPassword.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  Please enter password\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Confirm password</label>\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  id=\"password2\"\n                  placeholder=\"Enter password\"\n                  [(ngModel)]=\"confirmPassword\"\n                  [ngModelOptions]=\"{ standalone: true }\"\n                  #inputConfirmPassword=\"ngModel\"\n                  required\n                />\n                <div\n                  *ngIf=\"\n                    inputConfirmPassword.invalid &&\n                    (inputConfirmPassword.dirty || inputConfirmPassword.touched)\n                  \"\n                  class=\"notifyError\"\n                >\n                  Please enter confirm password\n                </div>\n                <div\n                  *ngIf=\"\n                    password !== confirmPassword &&\n                    confirmPassword != undefined &&\n                    confirmPassword != ''\n                  \"\n                  class=\"notifyError\"\n                >\n                  Not a matching password\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <label class=\"ml-1\">User Profile Pic</label>\n                <div class=\"row\">\n                  <div class=\"form-group col-md-9 col-sm-9\">\n                    <div class=\"custom-file\">\n                      <input\n                        type=\"file\"\n                        class=\"custom-file-input\"\n                        id=\"customFile\"\n                        (change)=\"onSelectFile($event)\"\n                      />\n                      <label class=\"custom-file-label\" for=\"customFile\"></label>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group col-md-3 col-sm-3\">\n                    <button\n                      type=\"button\"\n                      name=\"upload\"\n                      value=\"upload\"\n                      id=\"upload\"\n                      class=\"btn btn-block btn-dark\"\n                      (click)=\"onImageUpload()\"\n                    >\n                      <i class=\"fa fa-fw fa-upload\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div\n                class=\"form-row\"\n                class=\"text-center\"\n                id=\"imagePreview\"\n                *ngIf=\"url\"\n              >\n                <div class=\"col\">\n                  Image Preview:\n                  <img class=\"crop\" [src]=\"url\" /> <br />\n                </div>\n              </div>\n\n              <div\n                class=\"d-flex justify-content-center\"\n                *ngIf=\"appService.showSpinner\"\n              >\n                <div class=\"spinner-grow spinner-grow-sm\"></div>\n                Uploading\n              </div>\n\n              <button\n                type=\"submit\"\n                class=\"btn btn-outline-success btn-block signUpBtn\"\n              >\n                Sign Up\n              </button>\n              <button\n                class=\"btn btn-outline-secondary btn-block mt-3\"\n                (click)=\"cancelRegister()\"\n              >\n                Cancel Register\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- ======= End main area=========== -->\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/home/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_image_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/image-upload.service */ "./src/app/image-upload.service.ts");



//toaster

//import service


var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, _route, router, toastr, imageUploadService) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.imageUploadService = imageUploadService;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.goToLogIn = function () {
            _this.router.navigate(["/login"]);
        }; //end of goToLogIn
        this.signUpFunction = function () {
            var data = {
                firstName: _this.firstName,
                lastName: _this.lastName,
                email: _this.email,
                password: _this.password,
                avatar: _this.imageUrl,
            };
            document.querySelector(".signUpBtn").textContent = "Signing....";
            console.log("signup data", data);
            _this.appService.signUpFunction(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 201) {
                    _this.toastr.success("Signup successful");
                    setTimeout(function () {
                        _this.goToLogIn();
                    }, 200);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                console.log(err);
                document.querySelector(".signUpBtn").textContent = "Sign Up";
                _this.toastr.error(err.error.message);
            });
        }; //end of signUpFunction
        this.cancelRegister = function () {
            _this.firstName = "";
            _this.lastName = "";
            _this.email = "";
            _this.password = "";
            _this.imageUrl = "";
            _this.url = "";
        }; //end of cancelRegister
    }
    SignupComponent.prototype.ngOnInit = function () { };
    //selecting the profile photo
    SignupComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        document.querySelector(".custom-file-label").textContent =
            event.target.files[0].name;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            this.imageObj = event.target.files[0];
            reader.onload = function (event) {
                // called once readAsDataURL is completed
                _this.url = event.target["result"];
            };
        }
    }; //end of onSelectFile
    //uploading the image /profile photo to s3 abd getting its path to store the path in DB
    SignupComponent.prototype.onImageUpload = function () {
        var _this = this;
        this.appService.showLoadingSpinner();
        if (this.url != undefined) {
            document.getElementById("imagePreview").style.display = "none";
        }
        var imageForm = new FormData();
        imageForm.append("image", this.imageObj);
        this.imageUploadService.imageUpload(imageForm).subscribe(function (res) {
            _this.appService.hideLoadingSpinner();
            _this.imageUrl = res["image"];
            _this.imageUrl = "https://project-images-upload.s3.amazonaws.com/" + _this.imageUrl;
        });
    }; //end of onImageUpload
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/home/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/home/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_image_upload_service__WEBPACK_IMPORTED_MODULE_5__["ImageUploadService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/image-upload.service.ts":
/*!*****************************************!*\
  !*** ./src/app/image-upload.service.ts ***!
  \*****************************************/
/*! exports provided: ImageUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadService", function() { return ImageUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ImageUploadService = /** @class */ (function () {
    function ImageUploadService(_http) {
        this._http = _http;
        // private url = "http://localhost:3000/api/v1";
        this.url = "http://apidevtrack.naikvaibhav.online/api/v1";
    }
    ImageUploadService.prototype.imageUpload = function (imageForm) {
        return this._http.post(this.url + "/upload", imageForm);
    };
    ImageUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImageUploadService);
    return ImageUploadService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _topandsidenav_topandsidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topandsidenav/topandsidenav.component */ "./src/app/shared/topandsidenav/topandsidenav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_topandsidenav_topandsidenav_component__WEBPACK_IMPORTED_MODULE_3__["TopandsidenavComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            exports: [_topandsidenav_topandsidenav_component__WEBPACK_IMPORTED_MODULE_3__["TopandsidenavComponent"]],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/topandsidenav/topandsidenav.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/topandsidenav/topandsidenav.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar-wrapper {\r\n  z-index: 500;\r\n  position: fixed;\r\n  left: 250px;\r\n  width: 0;\r\n  height: 100%;\r\n  margin-left: -250px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  background: linear-gradient(57deg, #c03546, #f26d5b) !important;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.sidebar-brand {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 250px;\r\n  text-align: center;\r\n  padding: 20px 0;\r\n}\r\n\r\n.sidebar-brand h2 {\r\n  margin: 0;\r\n  font-weight: 400;\r\n  font-size: 19px;\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav {\r\n  position: absolute;\r\n  top: 75px;\r\n  width: 250px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav > li > a {\r\n  line-height: 48px;\r\n  padding: 10px 10px 10px 20px;\r\n}\r\n\r\n.sidebar-nav > li a {\r\n  display: block;\r\n  text-decoration: none;\r\n  color: #f5f5f5;\r\n  font-weight: 400;\r\n  font-size: 1em;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.sidebar-nav > li a.active {\r\n  border-left: 4px solid#fff;\r\n  padding: 10px 0px 10px 16px;\r\n  /* color: #23b4d4; */\r\n  background: #f26d5b;\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav > li > a:not(.active):hover {\r\n  transform: translateY(-1px);\r\n  background: #f26d5b;\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar-nav > li.active > a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav > li > a i {\r\n  font-size: 24px;\r\n  width: 60px;\r\n}\r\n\r\n#navbar-wrapper {\r\n  width: 100%;\r\n  position: absolute;\r\n  z-index: 2;\r\n}\r\n\r\n#navbar-wrapper .navbar {\r\n  border-width: 0 0 0 0;\r\n  background: linear-gradient(57deg, #f26d5b, #c03546) !important;\r\n  font-size: 24px;\r\n  margin-bottom: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n#sidebar-toggle {\r\n  color: #fff;\r\n  border: none !important;\r\n  outline: none !important;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  #sidebar-wrapper {\r\n    width: 250px;\r\n  }\r\n  #navbar-wrapper {\r\n    position: relative;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  #sidebar-wrapper {\r\n    width: 60px;\r\n  }\r\n  #navbar-wrapper {\r\n    position: relative;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  #sidebar-wrapper {\r\n    width: 0;\r\n  }\r\n  #navbar-wrapper {\r\n    position: relative;\r\n  }\r\n}\r\n\r\n/*giving custom color to svg*/\r\n\r\n.filter-white {\r\n  -webkit-filter: invert(97%) sepia(0%) saturate(2033%) hue-rotate(124deg)\r\n    brightness(102%) contrast(96%);\r\n          filter: invert(97%) sepia(0%) saturate(2033%) hue-rotate(124deg)\r\n    brightness(102%) contrast(96%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RvcGFuZHNpZGVuYXYvdG9wYW5kc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwrREFBK0Q7RUFDL0QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsK0RBQStEO0VBQy9ELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLDZCQUE2Qjs7QUFDN0I7RUFDRTtrQ0FDZ0M7VUFEaEM7a0NBQ2dDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RvcGFuZHNpZGVuYXYvdG9wYW5kc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGViYXItd3JhcHBlciB7XHJcbiAgei1pbmRleDogNTAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAyNTBweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTdkZWcsICNjMDM1NDYsICNmMjZkNWIpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLnNpZGViYXItYnJhbmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuLnNpZGViYXItYnJhbmQgaDIge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNpZGViYXItbmF2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3NXB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zaWRlYmFyLW5hdiA+IGxpID4gYSB7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcclxufVxyXG4uc2lkZWJhci1uYXYgPiBsaSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG4uc2lkZWJhci1uYXYgPiBsaSBhLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCNmZmY7XHJcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxNnB4O1xyXG4gIC8qIGNvbG9yOiAjMjNiNGQ0OyAqL1xyXG4gIGJhY2tncm91bmQ6ICNmMjZkNWI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zaWRlYmFyLW5hdiA+IGxpID4gYTpub3QoLmFjdGl2ZSk6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBiYWNrZ3JvdW5kOiAjZjI2ZDViO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uc2lkZWJhci1uYXYgPiBsaS5hY3RpdmUgPiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNpZGViYXItbmF2ID4gbGkgPiBhIGkge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuI25hdmJhci13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuI25hdmJhci13cmFwcGVyIC5uYXZiYXIge1xyXG4gIGJvcmRlci13aWR0aDogMCAwIDAgMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTdkZWcsICNmMjZkNWIsICNjMDM1NDYpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4jc2lkZWJhci10b2dnbGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gICNuYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG4gICNuYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICAjbmF2YmFyLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLypnaXZpbmcgY3VzdG9tIGNvbG9yIHRvIHN2ZyovXHJcbi5maWx0ZXItd2hpdGUge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDk3JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIwMzMlKSBodWUtcm90YXRlKDEyNGRlZylcclxuICAgIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoOTYlKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/topandsidenav/topandsidenav.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/topandsidenav/topandsidenav.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0,user-scalable=no\"\n    />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n  </head>\n  <body>\n    <aside id=\"sidebar-wrapper\">\n      <div class=\"sidebar-brand\">\n        <h2>Dev Track</h2>\n      </div>\n      <ul class=\"sidebar-nav\">\n        <li>\n          <a\n            [routerLink]=\"['/userdashboard/', userId]\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            ><i class=\"fa fa-home\"></i>Dashboard</a\n          >\n        </li>\n        <li>\n          <a\n            [routerLink]=\"['/user/', userId, 'allIssues']\"\n            routerLinkActive=\"active\"\n            ><i class=\"fa fa-table\"></i>All issues</a\n          >\n        </li>\n        <li>\n          <a\n            [routerLink]=\"['/user/user-profile', userId]\"\n            routerLinkActive=\"active\"\n            ><i class=\"fa fa-user-circle-o\"></i>User profile</a\n          >\n        </li>\n      </ul>\n    </aside>\n\n    <div id=\"navbar-wrapper\">\n      <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <a\n              class=\"navbar-brand\"\n              id=\"sidebar-toggle\"\n              (click)=\"appService.toggleSideNav()\"\n              ><i class=\"fa fa-navicon\" style=\"cursor: pointer;\"></i\n            ></a>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <img\n                [src]=\"avatar\"\n                alt=\"{{ avatar }}\"\n                width=\"50\"\n                class=\"rounded-circle mr-3\"\n              />\n              <img\n                src=\"/assets/images/power.svg\"\n                class=\"filter-white ml-2 pb-1\"\n                alt=\"logout\"\n                (click)=\"logout()\"\n                style=\"cursor: pointer;\"\n              />\n            </div>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/shared/topandsidenav/topandsidenav.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/topandsidenav/topandsidenav.component.ts ***!
  \*****************************************************************/
/*! exports provided: TopandsidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopandsidenavComponent", function() { return TopandsidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TopandsidenavComponent = /** @class */ (function () {
    function TopandsidenavComponent(appService, socketService, authService, toastr, router) {
        var _this = this;
        this.appService = appService;
        this.socketService = socketService;
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.logout = function () {
            _this.authService.signOut();
            _this.appService.logout(_this.userId).subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse.message);
                if (apiResponse.status == 200) {
                    _this.appService.removeUserInfoFromLocalStorage();
                    _this.appService.removeAuthTokenFromLocalStorage();
                    _this.socketService.exitSocket();
                    _this.socketService.disconnectedSocket();
                    console.log("disconnected socket from socket service is called");
                    _this.router.navigate(["/login"]);
                }
                else {
                    console.log(apiResponse.message);
                }
            }, function (err) {
                console.log(err.error);
                console.log("some error occured");
            });
        };
    }
    TopandsidenavComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TopandsidenavComponent.prototype, "avatar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TopandsidenavComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TopandsidenavComponent.prototype, "issueId", void 0);
    TopandsidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-topandsidenav",
            template: __webpack_require__(/*! ./topandsidenav.component.html */ "./src/app/shared/topandsidenav/topandsidenav.component.html"),
            styles: [__webpack_require__(/*! ./topandsidenav.component.css */ "./src/app/shared/topandsidenav/topandsidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], TopandsidenavComponent);
    return TopandsidenavComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var SocketService = /** @class */ (function () {
    function SocketService(_http) {
        var _this = this;
        this._http = _http;
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("verifyUser", function (data) {
                    observer.next(data);
                });
            });
        };
        this.getAllConnectedUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("broadcast", function (data) {
                    observer.next(data);
                });
            });
        };
        //events to be emitted
        this.setUser = function (token) {
            _this.socket.emit("set-user", token);
        }; //end setUser
        this.exitSocket = function () {
            _this.socket.disconnect();
        };
        this.informServer = function (data) {
            _this.socket.emit("inform-server", data);
        };
        this.informServerAboutWatchers = function (data) {
            _this.socket.emit("watcher-room", data);
        };
        this.informUser = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); //end Socket
            }); //end Observable
        };
        this.meetingNotification = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); //end Socket
            }); //end Observable
        }; //end of meetingNotification
        this.informReporteAboutIssueUpdate = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("inform-reporter", function (data) {
                    observer.next(data);
                });
            });
        };
        this.informWatcherAboutIssueUpdate = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("inform-watcher", function (data) {
                    observer.next(data);
                });
            });
        };
        this.disconnectedSocket = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.emit("disconnect", function () {
                    observer.next();
                });
            });
        };
        //connection is being created
        //that handshake
        // this.socket = io("http://localhost:3000");
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__("http://apidevtrack.naikvaibhav.online");
        this.authToken = JSON.parse(localStorage.getItem("authToken"));
    }
    //exception handler
    SocketService.prototype.handleError = function (err) {
        var errorMessage = "";
        if (err.error instanceof Error) {
            errorMessage = "An error occured: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.error.message;
        }
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/all-issues/all-issues.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/all-issues/all-issues.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*applying css for the main content inside the component*/\r\n#wrapper {\r\n  padding-left: 0;\r\n  transition: all 0.5s ease;\r\n  position: relative;\r\n}\r\n:host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n  width: 250px;\r\n}\r\n:host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n  position: absolute;\r\n  margin-right: -250px;\r\n}\r\n#content-wrapper {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background-color: #e4e9f5;\r\n  position: absolute;\r\n  padding: 15px;\r\n}\r\n#wrapper.toggled #content-wrapper {\r\n  position: absolute;\r\n  margin-right: -250px;\r\n}\r\n/*start of media queries*/\r\n@media (min-width: 992px) {\r\n  #wrapper {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n    width: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -190px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -190px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: relative;\r\n    margin-right: 60px;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  #wrapper {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: relative;\r\n    margin-right: 250px;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  #wrapper {\r\n    padding-left: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n    width: 250px;\r\n  }\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n    margin-top: 8%;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    left: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: fixed;\r\n    margin-right: 250px;\r\n  }\r\n}\r\n.card {\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  background: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hbGwtaXNzdWVzL2FsbC1pc3N1ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQ7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0VBQ1I7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07RUFDUjs7RUFFQTs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0VBQ1Q7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWxsLWlzc3Vlcy9hbGwtaXNzdWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmFwcGx5aW5nIGNzcyBmb3IgdGhlIG1haW4gY29udGVudCBpbnNpZGUgdGhlIGNvbXBvbmVudCovXHJcbiN3cmFwcGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1yaWdodDogLTI1MHB4O1xyXG59XHJcblxyXG4jY29udGVudC13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlOWY1O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbiN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1yaWdodDogLTI1MHB4O1xyXG59XHJcblxyXG4vKnN0YXJ0IG9mIG1lZGlhIHF1ZXJpZXMqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAjd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgI3dyYXBwZXIudG9nZ2xlZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogLTE5MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xOTBweDtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjbmF2YmFyLXdyYXBwZXIsXHJcbiAgI3dyYXBwZXIudG9nZ2xlZCAjY29udGVudC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgI3dyYXBwZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogLTI1MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICB9XHJcblxyXG4gICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyLFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgI3dyYXBwZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gIH1cclxuXHJcbiAgI3dyYXBwZXIudG9nZ2xlZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyLFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/all-issues/all-issues.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/all-issues/all-issues.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0,user-scalable=no\"\n    />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n  </head>\n  <body>\n    <div id=\"wrapper\" [ngClass]=\"{ toggled: appService.hideSideNav }\">\n      <app-topandsidenav\n        [avatar]=\"avatar\"\n        [userId]=\"userId\"\n      ></app-topandsidenav>\n      <section id=\"content-wrapper\">\n        <h2 class=\"content-title py-4\">\n          All issues\n        </h2>\n\n        <div class=\"form-group row\">\n          <div\n            class=\"input-group col-md-6 col-lg-6 col-sm-6 col-xs-4 col-xl-6\"\n            style=\"margin-bottom: 10px;\"\n          >\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroupPrepend\"\n                ><i class=\"fa fa-search\"></i\n              ></span>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"searchText\"\n              placeholder=\"Search by issue name or status\"\n              [(ngModel)]=\"searchText\"\n              #inputSearchText=\"ngModel\"\n            />\n          </div>\n          <div\n            class=\"btn btn-success ml-3\"\n            (click)=\"searchIssues()\"\n            style=\"margin-bottom: 10px;\"\n          >\n            Search\n          </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"allIssues?.length > 0\">\n          <div class=\"col-lg-12 col-xl-12\">\n            <div class=\"row\">\n              <div class=\"col\"></div>\n            </div>\n            <input\n              type=\"text\"\n              style=\"padding: 8px; margin: 15px auto; width: 30%;\"\n              placeholder=\"Type to filter the name column...\"\n              (keyup)=\"updateFilter($event)\"\n            />\n            <ngx-datatable\n              #myTable\n              class=\"material\"\n              [rows]=\"rows\"\n              [columnMode]=\"'force'\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"50\"\n              [rowHeight]=\"65\"\n              [scrollbarV]=\"false\"\n              [scrollbarH]=\"false\"\n              [sorts]=\"[{ prop: '[reporter, name, date]', dir: 'desc' }]\"\n              [limit]=\"2\"\n            >\n              <!-- <ngx-datatable-footer>\n                <ng-template\n                  ngx-datatable-footer-template\n                  let-rowCount=\"rowCount\"\n                  let-pageSize=\"pageSize\"\n                  let-selectedCount=\"selectedCount\"\n                  let-curPage=\"curPage\"\n                  let-offset=\"offset\"\n                  let-isVisible=\"isVisible\"\n                >\n                  <datatable-pager\n                    [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                    [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                    [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                    [pagerNextIcon]=\"'datatable-icon-skip'\"\n                    [page]=\"curPage\"\n                    [size]=\"pageSize\"\n                    [count]=\"rowCount\"\n                    [hidden]=\"!(rowCount / pageSize > 1)\"\n                    (change)=\"table.onFooterPage($event)\"\n                  >\n                  </datatable-pager>\n                </ng-template>\n              </ngx-datatable-footer> -->\n\n              <ngx-datatable-column name=\"Name\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  {{ row.issueName }}\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Status\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <span\n                    class=\"badge badge-warning\"\n                    *ngIf=\"row.status == 'inprogress'\"\n                    >{{ row.status }}</span\n                  >\n                  <span\n                    class=\"badge badge-success\"\n                    *ngIf=\"row.status == 'completed'\"\n                    >{{ row.status }}</span\n                  >\n                  <span\n                    class=\"badge badge-danger\"\n                    *ngIf=\"row.status == 'todo'\"\n                    >{{ row.status }}</span\n                  >\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Reporter\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  {{ row.reporter.firstName }}\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Date\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  {{ row.issueReportedOn | date }}\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Edit/View\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-primary\"\n                    (click)=\"viewIssue(row.issueId)\"\n                    style=\"border-radius: 18px;\"\n                  >\n                    View\n                  </button>\n                </ng-template>\n              </ngx-datatable-column>\n            </ngx-datatable>\n          </div>\n        </div>\n        <div class=\"card text-center\" *ngIf=\"dataPresent === false\">\n          <div class=\"card-body\">\n            <p>\n              No issue found with search term. Please use some other terms/words\n              to search\n            </p>\n          </div>\n        </div>\n      </section>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/user/all-issues/all-issues.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/all-issues/all-issues.component.ts ***!
  \*********************************************************/
/*! exports provided: AllIssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllIssuesComponent", function() { return AllIssuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var AllIssuesComponent = /** @class */ (function () {
    function AllIssuesComponent(appService, socketService, _route, router, toastr, location) {
        var _this = this;
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.location = location;
        this.userId = this._route.snapshot.paramMap.get("id");
        this.allIssues = "";
        this.rows = [];
        this.temp = [];
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (data) {
                _this.socketService.setUser(_this.authToken);
            });
        }; //end of verifyUserConfirmation
        this.getAllConnectedUsers = function () {
            _this.socketService.getAllConnectedUserList().subscribe(function (data) { });
        }; //end of getAllConnectedUsers
        this.getMessageFromAdmin = function () {
            _this.socketService.meetingNotification(_this.userId).subscribe(function (data) {
                _this.toastr.info("Informing assignee: " + data.message);
            }); //end of subscribe
        }; //end get message from a user
        this.informReporteAboutIssueUpdate = function () {
            _this.socketService.informReporteAboutIssueUpdate().subscribe(function (data) {
                if (data.changesMade.reporter.userId == _this.userId) {
                    _this.toastr
                        .info("Informing reporter: " + data.message)
                        .onTap.subscribe(function (action) {
                        _this.router.navigate(["user/" + _this.userId + "/issue/" + data.issueId]);
                    });
                }
            });
        }; //end of informReporteAboutIssueUpdate
        this.informWatcherAboutIssueUpdate = function () {
            _this.socketService.informWatcherAboutIssueUpdate().subscribe(function (data) {
                data.changesMade.watchers.forEach(function (element) {
                    if (element._id == _this.appService.getUserInfoFromLocalStorage()._id) {
                        _this.toastr
                            .info("Informing watcher: " + data.message, "", {
                            disableTimeOut: true,
                        })
                            .onTap.subscribe(function (action) {
                            _this.router.navigate([
                                "user/" + _this.userId + "/issue/" + data.issueId,
                            ]);
                        });
                    }
                });
            });
        }; //end of informWatcherAboutIssueUpdate
    }
    AllIssuesComponent.prototype.ngOnInit = function () {
        this.avatar = this.appService.getUserInfoFromLocalStorage().avatar;
        // this.authToken = this.appService.getAuthToken();
        // this.verifyUserConfirmation();
        // this.getMessageFromAdmin();
        // this.informReporteAboutIssueUpdate();
        // this.informWatcherAboutIssueUpdate();
    };
    AllIssuesComponent.prototype.getAllIssues = function () {
        var _this = this;
        this.appService.getAllIssues().subscribe(function (apiResponse) {
            _this.temp = apiResponse.data.slice();
            _this.allIssues = apiResponse.data;
            _this.rows = _this.allIssues;
        }, function (err) {
            console.log(err);
        });
    }; //end of getAllIssues
    AllIssuesComponent.prototype.viewIssue = function (issueId) {
        this.router.navigate(["user/" + this.userId + "/issue/" + issueId]);
    }; //end of viewIssue
    AllIssuesComponent.prototype.searchIssues = function () {
        var _this = this;
        this.appService.searchIssues(this.searchText).subscribe(function (apiResponse) {
            _this.temp = apiResponse.data.slice();
            _this.allIssues = apiResponse.data;
            _this.rows = _this.allIssues;
            if (_this.allIssues.length > 0) {
                _this.dataPresent = true;
            }
            else {
                _this.dataPresent = false;
            }
        }, function (err) {
            console.log(err);
        });
    }; //end of searchIssues
    AllIssuesComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.issueName.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }; //end of updateFilter
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myTable"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DatatableComponent"])
    ], AllIssuesComponent.prototype, "table", void 0);
    AllIssuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-all-issues",
            template: __webpack_require__(/*! ./all-issues.component.html */ "./src/app/user/all-issues/all-issues.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]],
            styles: [__webpack_require__(/*! ./all-issues.component.css */ "./src/app/user/all-issues/all-issues.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], AllIssuesComponent);
    return AllIssuesComponent;
}());



/***/ }),

/***/ "./src/app/user/create-issue/create-issue.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/create-issue/create-issue.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*applying css for the main content inside the component*/\r\n#wrapper {\r\n  padding-left: 0;\r\n  transition: all 0.5s ease;\r\n  position: relative;\r\n}\r\n:host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n  width: 250px;\r\n}\r\n:host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n  position: absolute;\r\n  margin-right: -250px;\r\n}\r\n#content-wrapper {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background-color: #e4e9f5;\r\n  position: absolute;\r\n  padding: 15px;\r\n}\r\n#wrapper.toggled #content-wrapper {\r\n  position: absolute;\r\n  margin-right: -250px;\r\n}\r\n/*start of media queries*/\r\n@media (min-width: 992px) {\r\n  #wrapper {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n    width: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -190px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -190px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: relative;\r\n    margin-right: 60px;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  #wrapper {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: relative;\r\n    margin-right: 250px;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  #wrapper {\r\n    padding-left: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n    width: 250px;\r\n  }\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n    margin-top: 8%;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    left: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: fixed;\r\n    margin-right: 250px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jcmVhdGUtaXNzdWUvY3JlYXRlLWlzc3VlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pEO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUVBLHlCQUF5QjtBQUN6QjtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtFQUNSOztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0VBQ1I7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztFQUNUOztFQUVBOztJQUVFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY3JlYXRlLWlzc3VlL2NyZWF0ZS1pc3N1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyphcHBseWluZyBjc3MgZm9yIHRoZSBtYWluIGNvbnRlbnQgaW5zaWRlIHRoZSBjb21wb25lbnQqL1xyXG4jd3JhcHBlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjbmF2YmFyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxufVxyXG5cclxuI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTlmNTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4jd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxufVxyXG5cclxuLypzdGFydCBvZiBtZWRpYSBxdWVyaWVzKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgI3dyYXBwZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xOTBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTkwcHg7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyLFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICN3cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAjY29udGVudC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlcixcclxuICAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICN3cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjbmF2YmFyLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICB9XHJcblxyXG4gICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlcixcclxuICAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNTBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/create-issue/create-issue.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/create-issue/create-issue.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0,user-scalable=no\"\n    />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n  </head>\n  <body>\n    <div id=\"wrapper\" [ngClass]=\"{ toggled: appService.hideSideNav }\">\n      <app-topandsidenav\n        [avatar]=\"avatar\"\n        [userId]=\"userId\"\n      ></app-topandsidenav>\n      <section id=\"content-wrapper\">\n        <div class=\"container py-3\">\n          <h2>Create</h2>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div\n                    style=\"\n                      display: flex;\n                      justify-content: space-between;\n                      font-size: 18px;\n                      cursor: pointer;\n                    \"\n                  >\n                    <span\n                      class=\"fa-stack fa-lg icon-background\"\n                      (click)=\"goBack()\"\n                    >\n                      <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\n                      <i class=\"fa fa-angle-left fa-stack-1x\"></i>\n                    </span>\n                  </div>\n                  <form\n                    name=\"form\"\n                    #issueForm=\"ngForm\"\n                    (ngSubmit)=\"onImageUpload()\"\n                  >\n                    <div class=\"form-group mt-2\">\n                      <label for=\"purpose\">Issue Name</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"issueName\"\n                        placeholder=\"Enter the issue name\"\n                        [(ngModel)]=\"issueName\"\n                        #inputIssueName=\"ngModel\"\n                        required\n                        autofocus\n                      />\n                      <div\n                        *ngIf=\"\n                          inputIssueName.invalid &&\n                          (inputIssueName.dirty || inputIssueName.touched)\n                        \"\n                        class=\"notifyError\"\n                      >\n                        <div *ngIf=\"inputIssueName.errors.required\">\n                          Please enter the issue name\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label for=\"location\">Description</label>\n                      <editor\n                        name=\"issueDesp\"\n                        [(ngModel)]=\"issueDescription\"\n                        #inputIssueDesp=\"ngModel\"\n                        required\n                      ></editor>\n\n                      <div\n                        *ngIf=\"\n                          inputIssueDesp.invalid &&\n                          (inputIssueDesp.dirty || inputIssueDesp.touched)\n                        \"\n                        class=\"notifyError\"\n                      >\n                        <div *ngIf=\"inputIssueDesp.errors.required\">\n                          Please enter the issue description\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-row\">\n                      <div class=\"form-group col-md-12 col-sm-12\">\n                        <label for=\"userRole\">Assign to</label>\n                        <select\n                          id=\"userRole\"\n                          class=\"form-control\"\n                          [(ngModel)]=\"selectedAssignee\"\n                          #country=\"ngModel\"\n                          name=\"selectedAssignee\"\n                          required\n                        >\n                          <option\n                            *ngFor=\"let user of allUsers\"\n                            [value]=\"user._id\"\n                            >{{ user.firstName }}</option\n                          >\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-row\">\n                      <label class=\"mr-3 mt-1\">Attachments</label>\n                      <div class=\"form-group\">\n                        <div class=\"custom-file\">\n                          <input\n                            type=\"file\"\n                            class=\"custom-file-input\"\n                            name=\"uploadedImages\"\n                            id=\"file\"\n                            multiple\n                            (change)=\"fileAdded($event)\"\n                          />\n                          <label\n                            class=\"custom-file-label\"\n                            for=\"customFile\"\n                          ></label>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"img-wrap\" *ngFor=\"let url of selectedFiles\">\n                      <span class=\"close\" (click)=\"closeImage(url)\"\n                        >&times;</span\n                      >\n                      <img\n                        [src]=\"url\"\n                        width=\"200\"\n                        data-id=\"123\"\n                        style=\"margin: 3px;\"\n                      />\n                    </div>\n\n                    <button\n                      type=\"submit\"\n                      [disabled]=\"!issueForm.valid\"\n                      class=\"btn btn-outline-success btn-block loginBtn\"\n                    >\n                      Add Issue\n                    </button>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/user/create-issue/create-issue.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/create-issue/create-issue.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIssueComponent", function() { return CreateIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var CreateIssueComponent = /** @class */ (function () {
    function CreateIssueComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.userId = this._route.snapshot.paramMap.get("id");
        this.reportedId = this.appService.getUserInfoFromLocalStorage()._id;
        this.selectedFiles = [];
        this.imageArray = [];
        this.attachments = [];
        this.allUsers = "";
    }
    CreateIssueComponent.prototype.ngOnInit = function () {
        this.avatar = this.appService.getUserInfoFromLocalStorage().avatar;
        this.getAllUsersFromDB();
    };
    CreateIssueComponent.prototype.goBack = function () {
        this.router.navigate(["userdashboard/" + this.userId]);
    };
    //uploading images
    CreateIssueComponent.prototype.fileAdded = function (event) {
        var _this = this;
        if (event.target.files.length) {
            for (var _i = 0, _a = event.target.files; _i < _a.length; _i++) {
                var file = _a[_i];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                this.imageArray.push(file);
                reader.onload = function (event) {
                    // called once readAsDataURL is completed
                    _this.selectedFiles.push(event.target["result"]);
                };
            }
        }
    }; //end of fileAdded
    CreateIssueComponent.prototype.onImageUpload = function () {
        var _this = this;
        var imageForm = new FormData();
        if (this.imageArray.length === 0) {
            this.createIssue(this.imageArray);
        }
        for (var _i = 0, _a = this.imageArray; _i < _a.length; _i++) {
            var image = _a[_i];
            imageForm.append("image", image);
            this.appService.imageUpload(imageForm).subscribe(function (res) {
                _this.attachments.push("https://project-images-upload.s3.amazonaws.com/" + res["image"]);
                if (_this.attachments.length == _this.imageArray.length) {
                    _this.createIssue(_this.attachments);
                }
            });
        }
    }; //end of onImageUpload
    CreateIssueComponent.prototype.closeImage = function (image) {
        this.selectedFiles = this.selectedFiles.filter(function (url) {
            return url !== image;
        });
    }; //end of closeImage
    CreateIssueComponent.prototype.getAllUsersFromDB = function () {
        var _this = this;
        this.appService.getAllUsers().subscribe(function (apiResponse) {
            _this.allUsers = apiResponse.data;
        }, function (err) {
            console.log(err);
        });
    }; //end of getAllUsersFromDB
    CreateIssueComponent.prototype.createIssue = function (attachments) {
        var _this = this;
        var images = attachments;
        var data = {
            issueName: this.issueName,
            issueDescription: this.issueDescription,
            assignee: this.selectedAssignee,
            attachments: images,
            reporter: this.reportedId,
        };
        this.appService.createIssue(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 201) {
                _this.toastr.success(apiResponse.message);
                _this.goBack();
            }
            else {
                _this.toastr.error(apiResponse.message);
            }
        }, function (err) {
            _this.toastr.error(err.error.message);
        });
    }; //end of createIssue
    CreateIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create-issue",
            template: __webpack_require__(/*! ./create-issue.component.html */ "./src/app/user/create-issue/create-issue.component.html"),
            styles: [__webpack_require__(/*! ./create-issue.component.css */ "./src/app/user/create-issue/create-issue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CreateIssueComponent);
    return CreateIssueComponent;
}());



/***/ }),

/***/ "./src/app/user/issue-description/issue-description.component.css":
/*!************************************************************************!*\
  !*** ./src/app/user/issue-description/issue-description.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*applying css for the main content inside the component*/\r\n#wrapper {\r\n  padding-left: 0;\r\n  transition: all 0.5s ease;\r\n  position: relative;\r\n}\r\n:host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n  width: 250px;\r\n}\r\n:host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n  position: absolute;\r\n  margin-right: -250px;\r\n}\r\n#content-wrapper {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background-color: #e4e9f5;\r\n  position: absolute;\r\n  padding: 15px;\r\n}\r\n#wrapper.toggled #content-wrapper {\r\n  position: absolute;\r\n  margin-right: -250px;\r\n}\r\n/*start of media queries*/\r\n@media (min-width: 992px) {\r\n  #wrapper {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n    width: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -190px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -190px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: relative;\r\n    margin-right: 60px;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  #wrapper {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: relative;\r\n    margin-right: 250px;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  #wrapper {\r\n    padding-left: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n    width: 250px;\r\n  }\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n    margin-top: 8%;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    left: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: fixed;\r\n    margin-right: 250px;\r\n  }\r\n}\r\n/*image preview*/\r\n.img-wrap {\r\n  position: relative;\r\n  display: inline-block;\r\n  font-size: 0;\r\n}\r\n.img-wrap .close {\r\n  position: absolute;\r\n  top: 2px;\r\n  right: 2px;\r\n  z-index: 100;\r\n  background-color: #fff;\r\n  padding: 5px 2px 2px;\r\n  color: #000;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  opacity: 0.2;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  line-height: 10px;\r\n  border-radius: 50%;\r\n}\r\n.img-wrap:hover .close {\r\n  opacity: 1;\r\n}\r\n.bottom-border {\r\n  border-bottom: 1.3px groove #f6ea8c;\r\n}\r\n/*chat message css*/\r\n.chat-history {\r\n  padding: 2em 2em 1.42em;\r\n  border-bottom: 0.15em solid white;\r\n  overflow-y: scroll;\r\n  height: 40vh;\r\n}\r\n.clearfix:after {\r\n  visibility: hidden;\r\n  display: block;\r\n  font-size: 0;\r\n  content: \" \";\r\n  clear: both;\r\n  height: 0;\r\n}\r\n.chat-history .message {\r\n  color: white;\r\n  padding: 0.5em 1.42em;\r\n  line-height: 1.9em;\r\n  font-size: 1.1em;\r\n  border-radius: 7px;\r\n  margin-bottom: 2em;\r\n  width: 90%;\r\n  position: relative;\r\n}\r\n.chat-history .message:after {\r\n  bottom: 100%;\r\n  left: 7%;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-width: 0.8em;\r\n  margin-left: -0.8em;\r\n  margin-bottom: 2em;\r\n}\r\n.chat-history .message-data {\r\n  margin-bottom: 1em;\r\n}\r\n.chat-history .message-data-time {\r\n  color: #a8aab1;\r\n  padding-left: 0.4em;\r\n}\r\n.chat-history .other-message {\r\n  background: #94c2ed;\r\n}\r\n.chat-history .other-message:after {\r\n  left: 90%;\r\n}\r\ntextarea {\r\n  width: 100%;\r\n  padding: 0.8em 1.42em;\r\n  margin-bottom: 0.8em;\r\n  border-radius: 5px;\r\n  resize: none;\r\n}\r\nli {\r\n  list-style: none;\r\n}\r\n.floatLeft {\r\n  float: left;\r\n}\r\n.float-right {\r\n  float: right;\r\n}\r\n.align-right {\r\n  text-align: right;\r\n}\r\n.align-left {\r\n  text-align: left;\r\n}\r\n.online,\r\n.offline,\r\n.me,\r\n.warning {\r\n  margin-right: 3px;\r\n  font-size: 0.8em;\r\n}\r\n.online {\r\n  color: #86bb71;\r\n}\r\n.offline {\r\n  color: #e38968;\r\n}\r\n.me {\r\n  color: #94c2ed;\r\n}\r\n.chat-history .my-message {\r\n  background: #86bb71;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9pc3N1ZS1kZXNjcmlwdGlvbi9pc3N1ZS1kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RDtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFFQSx5QkFBeUI7QUFDekI7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07RUFDUjs7RUFFQTs7SUFFRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtFQUNSOztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE9BQU87RUFDVDs7RUFFQTs7SUFFRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSx1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBOzs7O0VBSUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9pc3N1ZS1kZXNjcmlwdGlvbi9pc3N1ZS1kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyphcHBseWluZyBjc3MgZm9yIHRoZSBtYWluIGNvbnRlbnQgaW5zaWRlIHRoZSBjb21wb25lbnQqL1xyXG4jd3JhcHBlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjbmF2YmFyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxufVxyXG5cclxuI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTlmNTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4jd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxufVxyXG5cclxuLypzdGFydCBvZiBtZWRpYSBxdWVyaWVzKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgI3dyYXBwZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xOTBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTkwcHg7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyLFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICN3cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAjY29udGVudC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlcixcclxuICAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICN3cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjbmF2YmFyLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICB9XHJcblxyXG4gICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlcixcclxuICAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qaW1hZ2UgcHJldmlldyovXHJcbi5pbWctd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDA7XHJcbn1cclxuLmltZy13cmFwIC5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIHJpZ2h0OiAycHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogNXB4IDJweCAycHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaW1nLXdyYXA6aG92ZXIgLmNsb3NlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYm90dG9tLWJvcmRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMS4zcHggZ3Jvb3ZlICNmNmVhOGM7XHJcbn1cclxuXHJcbi8qY2hhdCBtZXNzYWdlIGNzcyovXHJcbi5jaGF0LWhpc3Rvcnkge1xyXG4gIHBhZGRpbmc6IDJlbSAyZW0gMS40MmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMTVlbSBzb2xpZCB3aGl0ZTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG59XHJcblxyXG4uY2xlYXJmaXg6YWZ0ZXIge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDA7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2hhdC1oaXN0b3J5IC5tZXNzYWdlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC41ZW0gMS40MmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjllbTtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jaGF0LWhpc3RvcnkgLm1lc3NhZ2U6YWZ0ZXIge1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICBsZWZ0OiA3JTtcclxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwLjhlbTtcclxuICBtYXJnaW4tbGVmdDogLTAuOGVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmNoYXQtaGlzdG9yeSAubWVzc2FnZS1kYXRhIHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5jaGF0LWhpc3RvcnkgLm1lc3NhZ2UtZGF0YS10aW1lIHtcclxuICBjb2xvcjogI2E4YWFiMTtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG59XHJcblxyXG4uY2hhdC1oaXN0b3J5IC5vdGhlci1tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiAjOTRjMmVkO1xyXG59XHJcblxyXG4uY2hhdC1oaXN0b3J5IC5vdGhlci1tZXNzYWdlOmFmdGVyIHtcclxuICBsZWZ0OiA5MCU7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjhlbSAxLjQyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxubGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5mbG9hdExlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZmxvYXQtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmFsaWduLXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFsaWduLWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5vbmxpbmUsXHJcbi5vZmZsaW5lLFxyXG4ubWUsXHJcbi53YXJuaW5nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4ub25saW5lIHtcclxuICBjb2xvcjogIzg2YmI3MTtcclxufVxyXG5cclxuLm9mZmxpbmUge1xyXG4gIGNvbG9yOiAjZTM4OTY4O1xyXG59XHJcblxyXG4ubWUge1xyXG4gIGNvbG9yOiAjOTRjMmVkO1xyXG59XHJcblxyXG4uY2hhdC1oaXN0b3J5IC5teS1tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiAjODZiYjcxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/issue-description/issue-description.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/issue-description/issue-description.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0,user-scalable=no\"\n    />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n  </head>\n  <body>\n    <div id=\"wrapper\" [ngClass]=\"{ toggled: appService.hideSideNav }\">\n      <app-topandsidenav\n        [avatar]=\"avatar\"\n        [userId]=\"userId\"\n        [issueId]=\"issueId\"\n      ></app-topandsidenav>\n      <section id=\"content-wrapper\">\n        <div class=\"container py-3\">\n          <h2>Issue</h2>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-xs-12\">\n              <div class=\"card\">\n                <ngx-spinner\n                  bdColor=\"rgba(51,51,51,0.8)\"\n                  size=\"medium\"\n                  color=\"#000\"\n                  type=\"ball-clip-rotate-multiple\"\n                  [fullScreen]=\"false\"\n                ></ngx-spinner>\n                <div class=\"card-body\">\n                  <div\n                    style=\"\n                      display: flex;\n                      justify-content: space-between;\n                      font-size: 18px;\n                      cursor: pointer;\n                    \"\n                  >\n                    <span\n                      class=\"fa-stack fa-lg icon-background\"\n                      (click)=\"goBack()\"\n                    >\n                      <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\n                      <i class=\"fa fa-angle-left fa-stack-1x\"></i>\n                    </span>\n                  </div>\n                  <form name=\"form\" #issueForm=\"ngForm\" *ngIf=\"currentIssue\">\n                    <div class=\"form-group mt-2\">\n                      <label for=\"purpose\">Issue Name</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"issueName\"\n                        [(ngModel)]=\"currentIssue.issueName\"\n                        #inputIssueName=\"ngModel\"\n                        required\n                        autofocus\n                      />\n                      <div\n                        *ngIf=\"\n                          inputIssueName.invalid &&\n                          (inputIssueName.dirty || inputIssueName.touched)\n                        \"\n                        class=\"notifyError\"\n                      >\n                        <div *ngIf=\"inputIssueName.errors.required\">\n                          Please enter the issue name\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label for=\"location\">Description</label>\n                      <editor\n                        name=\"issueDesp\"\n                        [(ngModel)]=\"currentIssue.issueDescription\"\n                        #inputIssueDesp=\"ngModel\"\n                        required\n                      ></editor>\n\n                      <div\n                        *ngIf=\"\n                          inputIssueDesp.invalid &&\n                          (inputIssueDesp.dirty || inputIssueDesp.touched)\n                        \"\n                        class=\"notifyError\"\n                      >\n                        <div *ngIf=\"inputIssueDesp.errors.required\">\n                          Please enter the issue description\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-row\">\n                      <div class=\"form-group col-md-6 col-sm-12\">\n                        <label\n                          >Assignee :\n                          <img\n                            [src]=\"currentIssue.assignee.avatar\"\n                            alt=\"profile pic\"\n                            width=\"25\"\n                            class=\"rounded-circle\"\n                          />\n                          {{ currentIssue.assignee.firstName }}</label\n                        >\n                      </div>\n\n                      <div class=\"form-group col-md-6 col-sm-12\">\n                        <a href=\"javascript:\" (click)=\"activateChangeAssign()\"\n                          >Change assignee</a\n                        >\n                      </div>\n                    </div>\n\n                    <div class=\"form-row\" *ngIf=\"changeAssignee\">\n                      <div class=\"form-group col-md-12 col-sm-12\">\n                        <label for=\"userRole\">Assign to</label>\n                        <select\n                          id=\"userRole\"\n                          class=\"form-control\"\n                          [(ngModel)]=\"selectAssignee\"\n                          #assignee=\"ngModel\"\n                          name=\"selectAssignee\"\n                          required\n                        >\n                          <option\n                            *ngFor=\"let user of allUsers\"\n                            [value]=\"user._id\"\n                            >{{ user.firstName }}</option\n                          >\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"form-row\">\n                      <div class=\"form-group col\">\n                        <label\n                          >Reporter :\n                          <img\n                            [src]=\"currentIssue.reporter.avatar\"\n                            alt=\"profile pic\"\n                            width=\"25\"\n                            class=\"rounded-circle\"\n                          />\n                          {{ currentIssue.reporter.firstName }}\n                        </label>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-1 col-md-12 col-form-label\"\n                        >Status</label\n                      >\n                      <div class=\"col-sm-11\">\n                        <select\n                          id=\"inputStatus\"\n                          class=\"form-control\"\n                          [(ngModel)]=\"currentIssue.status\"\n                          #category=\"ngModel\"\n                          name=\"selectedIssueStatus\"\n                        >\n                          <option\n                            *ngFor=\"let status of statusName\"\n                            [value]=\"status.name\"\n                            >{{ status.name }}</option\n                          >\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"row py-3\">\n                      <div class=\"col-sm-12 col-md-6 mb-2\">\n                        <button\n                          class=\"btn btn-outline-primary\"\n                          (click)=\"becomeWatcher()\"\n                          *ngIf=\"!isWatcher\"\n                        >\n                          <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                          Watch\n                        </button>\n                        <a\n                          href=\"javascript:\"\n                          *ngIf=\"isWatcher\"\n                          (click)=\"removeWatcher()\"\n                        >\n                          Stop watching\n                        </a>\n                      </div>\n                      <div class=\"col-sm-12 col-md-6 mb-2\">\n                        <button\n                          class=\"btn btn-primary\"\n                          type=\"button\"\n                          data-toggle=\"collapse\"\n                          data-target=\"#collapseExample\"\n                          aria-expanded=\"false\"\n                          aria-controls=\"collapseExample\"\n                        >\n                          <i class=\"fa fa-eye fa-1.2x\" aria-hidden=\"true\"></i>\n                          Watchers of issue\n                        </button>\n                        <div\n                          class=\"collapse\"\n                          id=\"collapseExample\"\n                          *ngIf=\"watcherList\"\n                        >\n                          <div\n                            class=\"card-body\"\n                            *ngFor=\"let watcher of watcherList\"\n                          >\n                            {{ watcher.watcher.firstName }}\n                          </div>\n                        </div>\n                        <div\n                          class=\"collapse\"\n                          id=\"collapseExample\"\n                          *ngIf=\"!watcherList\"\n                        >\n                          <div class=\"card-body\">\n                            No watcher is added yet\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-row\">\n                      <label class=\"mr-3 mt-1\">Attachments</label>\n                      <div class=\"form-group\">\n                        <div class=\"custom-file\">\n                          <input\n                            type=\"file\"\n                            class=\"custom-file-input\"\n                            id=\"file\"\n                            multiple\n                            (change)=\"fileAdded($event)\"\n                          />\n                          <label\n                            class=\"custom-file-label\"\n                            for=\"customFile\"\n                          ></label>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div *ngIf=\"currentIssue.attachments.length > 0\">\n                      <h6>Uploaded files</h6>\n                      <div class=\"scroll-container\" style=\"overflow: auto;\">\n                        <div\n                          class=\"img-wrap\"\n                          *ngFor=\"\n                            let url of currentIssue.attachments;\n                            let indexOfelement = index\n                          \"\n                        >\n                          <span\n                            class=\"close\"\n                            (click)=\"deleteImage(url, indexOfelement)\"\n                            >&times;</span\n                          >\n                          <img [src]=\"url\" width=\"200\" style=\"margin: 3px;\" />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"img-wrap\" *ngFor=\"let url of selectedFiles\">\n                      <h6>Attachements to be uploaded</h6>\n                      <span class=\"close\" (click)=\"closeImage(url)\"\n                        >&times;</span\n                      >\n                      <img\n                        [src]=\"url\"\n                        width=\"200\"\n                        data-id=\"123\"\n                        style=\"margin: 3px;\"\n                      />\n                    </div>\n\n                    <button\n                      type=\"submit\"\n                      (click)=\"onImageUpload()\"\n                      [disabled]=\"!issueForm.dirty\"\n                      class=\"btn btn-outline-success btn-block loginBtn mt-2\"\n                    >\n                      Edit Issue\n                    </button>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!--Comments section-->\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card my-4\">\n                <div class=\"card-body\">\n                  <p>Comments section</p>\n\n                  <div class=\"form-group\">\n                    <label for=\"location\">Add a comment</label>\n                    <textarea\n                      placeholder=\"Type here to post your comment.........\"\n                      class=\"form-control mb-2\"\n                      id=\"exampleFormControlTextarea1\"\n                      rows=\"3\"\n                      name=\"issueComments\"\n                      [(ngModel)]=\"issueComments\"\n                      #inputIssueComments=\"ngModel\"\n                    ></textarea>\n                    <button\n                      class=\"btn btn-primary mr-2\"\n                      (click)=\"saveComment()\"\n                    >\n                      <i class=\"fa fa-send\"></i> Post\n                    </button>\n                    <button\n                      class=\"btn btn-danger mr-2\"\n                      (click)=\"cancelComment()\"\n                    >\n                      <i class=\"fa fa-close\"></i> Cancel\n                    </button>\n                  </div>\n                </div>\n              </div>\n\n              <button\n                class=\"btn btn-primary\"\n                type=\"button\"\n                data-toggle=\"collapse\"\n                data-target=\"#collapseExample2\"\n                aria-expanded=\"false\"\n                aria-controls=\"collapseExample2\"\n              >\n                <i class=\"fa fa-comments-o fa-1x\" aria-hidden=\"true\"></i>\n                View posted comments\n              </button>\n              <div\n                class=\"collapse pt-2\"\n                id=\"collapseExample2\"\n                *ngIf=\"commentsArray\"\n              >\n                <div\n                  #scrollMe\n                  [scrollTop]=\"scrollToChatTop ? 0 : scrollMe.scrollHeight\"\n                  class=\"chat-history\"\n                  *ngIf=\"commentsArray\"\n                >\n                  <ul>\n                    <li class=\"clearfix\" *ngFor=\"let comment of commentsArray\">\n                      <div\n                        class=\"message-data\"\n                        [ngClass]=\"{\n                          'align-right': comment?.commentedBy.userId == userId\n                        }\"\n                      >\n                        <span class=\"message-data-time\"\n                          >{{ comment?.commentedOn | date: \"medium\" }}\n                        </span>\n\n                        <span\n                          class=\"message-data-name floatLeft\"\n                          *ngIf=\"comment?.commentedBy.userId != userId\"\n                        >\n                          <img\n                            *ngIf=\"comment?.commentedBy.userId != userId\"\n                            [src]=\"comment?.commentedBy.avatar\"\n                            alt=\"profile pic\"\n                            width=\"20\"\n                            class=\"rounded-circle\"\n                          />\n                          {{ comment?.commentedBy.firstName }}</span\n                        >\n\n                        <img\n                          [src]=\"comment?.commentedBy.avatar\"\n                          alt=\"profile pic\"\n                          width=\"20\"\n                          class=\"rounded-circle\"\n                          *ngIf=\"comment?.commentedBy.userId == userId\"\n                        />\n\n                        <span\n                          class=\"message-data-name\"\n                          *ngIf=\"comment?.commentedBy.userId == userId\"\n                          >{{ comment?.commentedBy.firstName }}</span\n                        >\n                      </div>\n                      <div\n                        class=\"message\"\n                        [ngClass]=\"{\n                          'float-right other-message':\n                            comment?.commentedBy.userId == userId,\n                          'my-message': comment?.commentedBy.userId != userId\n                        }\"\n                      >\n                        {{ comment?.comment }}\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n              <div\n                class=\"collapse\"\n                id=\"collapseExample2\"\n                *ngIf=\"!commentsArray\"\n              >\n                <div class=\"card-body\">\n                  No comments are posted yet\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--end Comments section-->\n        </div>\n      </section>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/user/issue-description/issue-description.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/issue-description/issue-description.component.ts ***!
  \***********************************************************************/
/*! exports provided: IssueDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueDescriptionComponent", function() { return IssueDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");




//importing service




var IssueDescriptionComponent = /** @class */ (function () {
    function IssueDescriptionComponent(appService, socketService, _route, router, toastr, location, spinner) {
        var _this = this;
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.location = location;
        this.spinner = spinner;
        this.scrollToChatTop = false;
        this.userId = this._route.snapshot.paramMap.get("id");
        this.issueId = this._route.snapshot.paramMap.get("issueId");
        this._id = this.appService.getUserInfoFromLocalStorage()._id;
        this.allUsers = "";
        this.isWatcher = false;
        this.attachments = [];
        this.newAddedAttachments = [];
        this.selectedFiles = [];
        this.imageArray = [];
        this.commentsArray = [];
        this.changeAssignee = false;
        this.statusList = {
            "0": "todo",
            "1": "inprogress",
            "2": "completed",
        };
        this.statusName = [];
        this.getStatusName = function () {
            var result = Object.keys(_this.statusList).map(function (data) {
                return { code: data, name: _this.statusList[data] };
            });
            return (_this.statusName = result);
        }; //end getStatusName
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (data) {
                _this.socketService.setUser(_this.authToken);
            });
        }; //end of verifyUserConfirmation
        this.getAllConnectedUsers = function () {
            _this.socketService.getAllConnectedUserList().subscribe(function (data) { });
        }; //end of getAllConnectedUsers
        this.getMessageFromAdmin = function () {
            _this.socketService.meetingNotification(_this.userId).subscribe(function (data) {
                _this.toastr.info("Informing assignee: " + data.message);
            }); //end of subscribe
        }; //end get message from a user
        this.informReporteAboutIssueUpdate = function () {
            _this.socketService.informReporteAboutIssueUpdate().subscribe(function (data) {
                if (data.changesMade.reporter.userId == _this.userId) {
                    _this.toastr
                        .info("Informing reporter: " + data.message)
                        .onTap.subscribe(function (action) {
                        _this.router.navigate(["user/" + _this.userId + "/issue/" + data.issueId]);
                    });
                }
            });
        }; //end of informReporteAboutIssueUpdate
        this.informWatcherAboutIssueUpdate = function () {
            _this.socketService.informWatcherAboutIssueUpdate().subscribe(function (data) {
                data.changesMade.watchers.forEach(function (element) {
                    if (element._id == _this.appService.getUserInfoFromLocalStorage()._id) {
                        _this.toastr
                            .info("Informing watcher: " + data.message, "", {
                            disableTimeOut: true,
                        })
                            .onTap.subscribe(function (action) {
                            _this.router.navigate([
                                "user/" + _this.userId + "/issue/" + data.issueId,
                            ]);
                        });
                    }
                });
            });
        }; //end of informWatcherAboutIssueUpdate
    }
    IssueDescriptionComponent.prototype.ngOnInit = function () {
        this.avatar = this.appService.getUserInfoFromLocalStorage().avatar;
        this.getAllUsersFromDB();
        this.getComment();
        this.getWatcherOfAIssue();
        this.getSingleIssue();
        this.getStatusName();
        // this.authToken = this.appService.getAuthToken();
        // this.verifyUserConfirmation();
        // this.getMessageFromAdmin();
        // this.informReporteAboutIssueUpdate();
        // this.informWatcherAboutIssueUpdate();
    };
    IssueDescriptionComponent.prototype.closeImage = function (image) {
        this.selectedFiles = this.selectedFiles.filter(function (url) {
            return url !== image;
        });
    }; //end closeImage
    IssueDescriptionComponent.prototype.deleteImage = function (image, i) {
        this.currentIssue.attachments.splice(i, 1);
        this.appService.deleteImageFromServer(image).subscribe(function (apiResponse) { }, function (err) {
            console.log(err);
        });
        this.editIssue(this.currentIssue.attachments);
    }; //end deleteImage
    IssueDescriptionComponent.prototype.goBack = function () {
        this.location.back();
    }; //end goBack
    //save comment
    IssueDescriptionComponent.prototype.saveComment = function () {
        var _this = this;
        var data = {
            issueId: this.issueId,
            comment: this.issueComments,
            commentedBy: this._id,
        };
        this.appService.saveComment(data).subscribe(function (apiResponse) {
            _this.getComment();
            _this.issueComments = "";
            setTimeout(function () {
                var message = _this.appService.getUserInfoFromLocalStorage().firstName + " commented on " + _this.currentIssue.issueName;
                var messageObj = {
                    issueId: _this.issueId,
                    changesMade: _this.currentIssue,
                    message: message,
                };
                _this.socketService.informServer(messageObj);
                // this.socketService.informServerAboutWatchers(this.watcherList);
            }, 5000);
            _this.goBack();
        }, function (err) {
            _this.toastr.error("Some error occured");
        });
    }; //end of saveComment
    IssueDescriptionComponent.prototype.cancelComment = function () {
        this.issueComments = "";
    };
    //public getComment
    IssueDescriptionComponent.prototype.getComment = function () {
        var _this = this;
        this.appService.getComment(this.issueId).subscribe(function (apiResponse) {
            _this.commentsArray = apiResponse.data;
            _this.scrollToChatTop = true;
        }, function (err) {
            console.log(err);
        });
    }; //end of getComment
    //add watcher
    IssueDescriptionComponent.prototype.becomeWatcher = function () {
        var _this = this;
        var data = {
            issueId: this.issueId,
            watcher: this._id,
            userId: this.userId,
        };
        this.appService.setWatcherForAnIssue(data).subscribe(function (apiResponse) {
            if (apiResponse.status == 201) {
                _this.toastr.success(apiResponse.message);
                _this.getWatcherOfAIssue();
            }
            else {
                _this.toastr.error(apiResponse.message);
                _this.getWatcherOfAIssue();
            }
        }, function (err) {
            console.log(err);
            _this.toastr.error(err);
        });
    }; //end becomeWatcher
    IssueDescriptionComponent.prototype.removeWatcher = function () {
        var _this = this;
        this.appService.removeWatcherForAnIssue(this.userId).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success(apiResponse.message);
                _this.watcherList = _this.getWatcherOfAIssue();
                _this.isWatcher = false;
            }
            else {
                _this.toastr.error(apiResponse.message);
                _this.getWatcherOfAIssue();
                _this.isWatcher = false;
            }
        }, function (err) {
            console.log(err);
            _this.toastr.error(err);
        });
    }; //end removeWatcher
    IssueDescriptionComponent.prototype.getWatcherOfAIssue = function () {
        var _this = this;
        this.appService.getWatchersOfIssue(this.issueId).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.watcherList = apiResponse.data;
                _this.watcherList.map(function (each) {
                    if (each.userId === _this.userId) {
                        _this.isWatcher = true;
                    }
                });
                return _this.watcherList;
            }
        }, function (err) {
            console.log(err);
            _this.toastr.error(err);
        });
    }; //end getWatcherOfAIssue
    IssueDescriptionComponent.prototype.getSingleIssue = function () {
        var _this = this;
        this.spinner.show();
        this.appService.getSingleIssue(this.issueId).subscribe(function (apiResponse) {
            _this.spinner.hide();
            _this.currentIssue = apiResponse.data;
        }, function (err) {
            console.log(err);
            _this.spinner.hide();
        });
    }; //end getSingleIssue
    IssueDescriptionComponent.prototype.activateChangeAssign = function () {
        this.changeAssignee = !this.changeAssignee;
    };
    //uploading images
    IssueDescriptionComponent.prototype.fileAdded = function (event) {
        var _this = this;
        if (event.target.files.length) {
            for (var _i = 0, _a = event.target.files; _i < _a.length; _i++) {
                var file = _a[_i];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                this.imageArray.push(file);
                reader.onload = function (event) {
                    _this.selectedFiles.push(event.target["result"]);
                };
            }
        }
    };
    IssueDescriptionComponent.prototype.onImageUpload = function () {
        var _this = this;
        var imageForm = new FormData();
        if (this.imageArray.length > 0) {
            for (var _i = 0, _a = this.imageArray; _i < _a.length; _i++) {
                var image = _a[_i];
                imageForm.append("image", image);
                this.appService.imageUpload(imageForm).subscribe(function (res) {
                    _this.newAddedAttachments.push("https://project-images-upload.s3.amazonaws.com/" + res["image"]);
                    if (_this.newAddedAttachments.length == _this.imageArray.length ||
                        _this.imageArray.length == 0) {
                        _this.currentIssue.attachments = _this.currentIssue.attachments.concat(_this.newAddedAttachments);
                        _this.selectedFiles = [];
                        _this.editIssue(_this.currentIssue.attachments);
                    }
                });
            }
        }
        else {
            this.editIssue(this.currentIssue.attachments);
        }
    }; //end of onImageUpload
    IssueDescriptionComponent.prototype.editIssue = function (attachments) {
        var _this = this;
        this.spinner.show();
        var images = attachments;
        if (this.selectAssignee == undefined) {
            this.selectAssignee = this.currentIssue.assignee._id;
        }
        var data = {
            issueName: this.currentIssue.issueName,
            issueDescription: this.currentIssue.issueDescription,
            assignee: this.selectAssignee,
            attachments: images,
            status: this.currentIssue.status,
            reporter: this.currentIssue.reporter._id,
        };
        this.getWatcherOfAIssue();
        var watcherUpdate = [];
        if (this.watcherList) {
            this.watcherList.forEach(function (element) {
                watcherUpdate.push(element.watcher);
            });
        }
        data["watchers"] = watcherUpdate;
        this.appService.editIssue(this.issueId, data).subscribe(function (apiResponse) {
            _this.spinner.hide();
            _this.activateChangeAssign();
            _this.toastr.success(apiResponse.message);
            _this.getSingleIssue();
            setTimeout(function () {
                var message = "A issue on " + data.issueName + " is been updated by " + _this.appService.getUserInfoFromLocalStorage().firstName;
                var messageObj = {
                    issueId: _this.issueId,
                    changesMade: _this.currentIssue,
                    message: message,
                };
                _this.socketService.informServer(messageObj);
            }, 5000);
            _this.goBack();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error(err.error.message);
        });
    }; //end of editIssue
    IssueDescriptionComponent.prototype.getAllUsersFromDB = function () {
        var _this = this;
        this.appService.getAllUsers().subscribe(function (apiResponse) {
            _this.allUsers = apiResponse.data;
        }, function (err) {
            console.log(err);
        });
    }; //end of getAllUsersFromDB
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("scrollMe", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IssueDescriptionComponent.prototype, "scrollMe", void 0);
    IssueDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-issue-description",
            template: __webpack_require__(/*! ./issue-description.component.html */ "./src/app/user/issue-description/issue-description.component.html"),
            styles: [__webpack_require__(/*! ./issue-description.component.css */ "./src/app/user/issue-description/issue-description.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], IssueDescriptionComponent);
    return IssueDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/user/personilized-dashboard/personilized-dashboard.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/user/personilized-dashboard/personilized-dashboard.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*applying css for the main content inside the component*/\r\n#wrapper {\r\n  padding-left: 0;\r\n  transition: all 0.5s ease;\r\n  position: relative;\r\n}\r\n:host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n  width: 250px;\r\n}\r\n:host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n  position: absolute;\r\n  margin-right: -250px;\r\n}\r\n#content-wrapper {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background-color: #e4e9f5;\r\n  position: absolute;\r\n  padding: 15px;\r\n}\r\n#wrapper.toggled #content-wrapper {\r\n  position: absolute;\r\n  margin-right: -250px;\r\n}\r\n/*start of media queries*/\r\n@media (min-width: 992px) {\r\n  #wrapper {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n    width: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -190px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -190px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: relative;\r\n    margin-right: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper datatable-scroller {\r\n    width: 100% !important;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  #wrapper {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: relative;\r\n    margin-right: 250px;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  #wrapper {\r\n    padding-left: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n    width: 250px;\r\n  }\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n    margin-top: 8%;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    left: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: fixed;\r\n    margin-right: 250px;\r\n  }\r\n}\r\n/*end of media queries*/\r\n/*modern css for dashboard cards*/\r\n.overviewCard {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 12px;\r\n  background-color: #fff;\r\n  transform: translateY(0);\r\n  transition: all 0.3s;\r\n  margin-bottom: 10px;\r\n}\r\n.overviewCard-icon {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 60px;\r\n  width: 60px;\r\n  border-radius: 50%;\r\n  font-size: 21px;\r\n  color: #fff;\r\n}\r\n.overviewCard-icon--completed {\r\n  background-color: #27ae60;\r\n}\r\n.overviewCard-icon--inprogress {\r\n  background-color: #e67e22;\r\n}\r\n.overviewCard-icon--totalIssues {\r\n  background-color: #e74c3c;\r\n}\r\n.overviewCard-icon--todo {\r\n  background-color: #af64cc;\r\n}\r\n.overviewCard-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.overviewCard-title {\r\n  font-size: 18px;\r\n  color: #000;\r\n  margin: 0;\r\n}\r\n.overviewCard-subtitle {\r\n  margin: 2px;\r\n  color: #777;\r\n}\r\n.overviewCard:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wZXJzb25pbGl6ZWQtZGFzaGJvYXJkL3BlcnNvbmlsaXplZC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQ7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0VBQ1I7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxzQkFBc0I7RUFDeEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0VBQ1I7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztFQUNUOztFQUVBOztJQUVFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7QUFDRjtBQUNBLHVCQUF1QjtBQUV2QixpQ0FBaUM7QUFDakM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wZXJzb25pbGl6ZWQtZGFzaGJvYXJkL3BlcnNvbmlsaXplZC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qYXBwbHlpbmcgY3NzIGZvciB0aGUgbWFpbiBjb250ZW50IGluc2lkZSB0aGUgY29tcG9uZW50Ki9cclxuI3dyYXBwZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbn1cclxuXHJcbiNjb250ZW50LXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU5ZjU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuI3dyYXBwZXIudG9nZ2xlZCAjY29udGVudC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbn1cclxuXHJcbi8qc3RhcnQgb2YgbWVkaWEgcXVlcmllcyovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICN3cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjbmF2YmFyLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTkwcHg7XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjY29udGVudC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogLTE5MHB4O1xyXG4gIH1cclxuXHJcbiAgI3dyYXBwZXIudG9nZ2xlZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAjY29udGVudC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlcixcclxuICAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyLFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciBkYXRhdGFibGUtc2Nyb2xsZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgI3dyYXBwZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogLTI1MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICB9XHJcblxyXG4gICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyLFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgI3dyYXBwZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gIH1cclxuXHJcbiAgI3dyYXBwZXIudG9nZ2xlZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyLFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1MHB4O1xyXG4gIH1cclxufVxyXG4vKmVuZCBvZiBtZWRpYSBxdWVyaWVzKi9cclxuXHJcbi8qbW9kZXJuIGNzcyBmb3IgZGFzaGJvYXJkIGNhcmRzKi9cclxuLm92ZXJ2aWV3Q2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLm92ZXJ2aWV3Q2FyZC1pY29uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm92ZXJ2aWV3Q2FyZC1pY29uLS1jb21wbGV0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2FlNjA7XHJcbn1cclxuLm92ZXJ2aWV3Q2FyZC1pY29uLS1pbnByb2dyZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyO1xyXG59XHJcbi5vdmVydmlld0NhcmQtaWNvbi0tdG90YWxJc3N1ZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XHJcbn1cclxuLm92ZXJ2aWV3Q2FyZC1pY29uLS10b2RvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY2NGNjO1xyXG59XHJcbi5vdmVydmlld0NhcmQtZGVzY3JpcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5vdmVydmlld0NhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLm92ZXJ2aWV3Q2FyZC1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuLm92ZXJ2aWV3Q2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/personilized-dashboard/personilized-dashboard.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/user/personilized-dashboard/personilized-dashboard.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0,user-scalable=no\"\n    />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n  </head>\n  <body>\n    <div id=\"wrapper\" [ngClass]=\"{ toggled: appService.hideSideNav }\">\n      <!-- ======= Start of Top and side nav component=========== -->\n      <app-topandsidenav\n        [avatar]=\"avatar\"\n        [userId]=\"userId\"\n      ></app-topandsidenav>\n      <!-- ======= End of Top and side nav component=========== -->\n\n      <section id=\"content-wrapper\">\n        <h2 class=\"content-title py-4\">\n          Dashboard <span class=\"text-muted\">(Issues assigned to me)</span>\n        </h2>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-xs-12\">\n            <ngx-spinner\n              bdColor=\"rgba(51,51,51,0.8)\"\n              size=\"medium\"\n              color=\"#000\"\n              type=\"ball-clip-rotate-multiple\"\n              [fullScreen]=\"false\"\n            ></ngx-spinner>\n            <div class=\"row\" *ngIf=\"(counts | keyvalue)?.length\">\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                <div class=\"overviewCard\">\n                  <div class=\"overviewCard-icon overviewCard-icon--completed\">\n                    <i class=\"fa fa-check\"></i>\n                  </div>\n                  <div class=\"overviewCard-description\">\n                    <h3 class=\"overviewCard-title\">\n                      <strong>Completed issues</strong>\n                    </h3>\n                    <p class=\"overviewCard-subtitle\">{{ counts?.completed }}</p>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                <div class=\"overviewCard\">\n                  <div class=\"overviewCard-icon overviewCard-icon--inprogress\">\n                    <i class=\"fa fa-spinner\"></i>\n                  </div>\n                  <div class=\"overviewCard-description\">\n                    <h3 class=\"overviewCard-title\">\n                      <strong>In progress issues</strong>\n                    </h3>\n                    <p class=\"overviewCard-subtitle\">\n                      {{ counts?.inprogress }}\n                    </p>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                <div class=\"overviewCard\">\n                  <div class=\"overviewCard-icon overviewCard-icon--todo\">\n                    <i class=\"fa fa-tasks\"></i>\n                  </div>\n                  <div class=\"overviewCard-description\">\n                    <h3 class=\"overviewCard-title\">\n                      <strong>To-Do issues</strong>\n                    </h3>\n                    <p class=\"overviewCard-subtitle\">{{ counts?.todo }}</p>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                <div class=\"overviewCard\">\n                  <div class=\"overviewCard-icon overviewCard-icon--totalIssues\">\n                    <i class=\"fa fa-bug\"></i>\n                  </div>\n                  <div class=\"overviewCard-description\">\n                    <h3 class=\"overviewCard-title\">\n                      <strong>Total issues</strong>\n                    </h3>\n                    <p class=\"overviewCard-subtitle\">\n                      {{ counts?.totalIssues }}\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <button class=\"btn btn-outline-primary\" (click)=\"createIssue()\">\n          Create\n        </button>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-lg-12 col-xl-12\">\n            <input\n              type=\"text\"\n              style=\"\n                padding: 8px;\n                margin: 15px auto;\n                margin-left: 2px;\n                width: 30%;\n              \"\n              placeholder=\"Type to filter the issue name/status\"\n              (keyup)=\"updateFilter($event)\"\n            />\n            <ngx-datatable\n              #myTable\n              class=\"material\"\n              [rows]=\"rows\"\n              [columnMode]=\"'force'\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"50\"\n              [rowHeight]=\"65\"\n              [scrollbarV]=\"false\"\n              [scrollbarH]=\"true\"\n              [sorts]=\"[{ prop: '[reporter, name, date]', dir: 'desc' }]\"\n              [limit]=\"5\"\n            >\n              <ngx-datatable-footer>\n                <ng-template\n                  ngx-datatable-footer-template\n                  let-rowCount=\"rowCount\"\n                  let-pageSize=\"pageSize\"\n                  let-selectedCount=\"selectedCount\"\n                  let-curPage=\"curPage\"\n                  let-offset=\"offset\"\n                  let-isVisible=\"isVisible\"\n                >\n                  <datatable-pager\n                    [pagerLeftArrowIcon]=\"'datatable-icon-left'\"\n                    [pagerRightArrowIcon]=\"'datatable-icon-right'\"\n                    [pagerPreviousIcon]=\"'datatable-icon-prev'\"\n                    [pagerNextIcon]=\"'datatable-icon-skip'\"\n                    [page]=\"curPage\"\n                    [size]=\"pageSize\"\n                    [count]=\"rowCount\"\n                    [hidden]=\"!(rowCount / pageSize > 1)\"\n                    (change)=\"table.onFooterPage($event)\"\n                  >\n                  </datatable-pager>\n                </ng-template>\n              </ngx-datatable-footer>\n\n              <ngx-datatable-column name=\"Name\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  {{ row?.issueName }}\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Status\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <span\n                    class=\"badge badge-warning\"\n                    *ngIf=\"row.status == 'inprogress'\"\n                    >{{ row?.status }}</span\n                  >\n                  <span\n                    class=\"badge badge-success\"\n                    *ngIf=\"row.status == 'completed'\"\n                    >{{ row?.status }}</span\n                  >\n                  <span\n                    class=\"badge badge-danger\"\n                    *ngIf=\"row.status == 'todo'\"\n                    >{{ row?.status }}</span\n                  >\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Reporter\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  {{ row?.reporter.firstName }}\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Date\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  {{ row?.issueReportedOn | date }}\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Edit/View\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-primary\"\n                    (click)=\"viewIssue(row.issueId)\"\n                    style=\"border-radius: 18px;\"\n                  >\n                    View\n                  </button>\n                </ng-template>\n              </ngx-datatable-column>\n            </ngx-datatable>\n          </div>\n        </div>\n      </section>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/user/personilized-dashboard/personilized-dashboard.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user/personilized-dashboard/personilized-dashboard.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PersonilizedDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonilizedDashboardComponent", function() { return PersonilizedDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");








var PersonilizedDashboardComponent = /** @class */ (function () {
    function PersonilizedDashboardComponent(appService, socketService, _route, router, toastr, spinner) {
        var _this = this;
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.localStorage = this.appService.getUserInfoFromLocalStorage();
        this.rows = [];
        this.temp = [];
        this.userId = this._route.snapshot.paramMap.get("id");
        //get the count of total issues, todo issues and completed issues
        this.getCounts = function () {
            _this.spinner.show();
            _this.appService.getCounts(_this.localStorage._id).subscribe(function (apiResponse) {
                _this.spinner.hide();
                _this.counts = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, apiResponse.data);
            }, function (err) {
                console.log(err);
                _this.spinner.hide();
            });
        };
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (data) {
                _this.socketService.setUser(_this.authToken);
            });
        };
        this.getAllConnectedUsers = function () {
            _this.socketService.getAllConnectedUserList().subscribe(function (data) { });
        };
        this.getMessageFromAdmin = function () {
            _this.subscription = _this.socketService
                .meetingNotification(_this.userId)
                .subscribe(function (data) {
                _this.toastr.info("Informing assignee: " + data.message);
            }); //end of subscribe
        }; //end get message from a user
        this.informReporteAboutIssueUpdate = function () {
            _this.subscription2 = _this.socketService
                .informReporteAboutIssueUpdate()
                .subscribe(function (data) {
                if (data.changesMade.reporter.userId == _this.userId) {
                    _this.toastr
                        .info("Informing reporter: " + data.message)
                        .onTap.subscribe(function (action) {
                        _this.router.navigate([
                            "user/" + _this.userId + "/issue/" + data.issueId,
                        ]);
                    });
                }
            });
        };
        this.informWatcherAboutIssueUpdate = function () {
            _this.subscription3 = _this.socketService
                .informWatcherAboutIssueUpdate()
                .subscribe(function (data) {
                data.changesMade.watchers.forEach(function (element) {
                    if (element._id == _this.appService.getUserInfoFromLocalStorage()._id) {
                        _this.toastr
                            .info("Informing watcher: " + data.message, "", {
                            disableTimeOut: true,
                        })
                            .onTap.subscribe(function (action) {
                            _this.router.navigate([
                                "user/" + _this.userId + "/issue/" + data.issueId,
                            ]);
                        });
                    }
                });
            });
        };
    }
    PersonilizedDashboardComponent.prototype.ngOnInit = function () {
        this.authToken = this.appService.getAuthToken();
        this.avatar = this.appService.getUserInfoFromLocalStorage().avatar;
        this.verifyUserConfirmation();
        this.getMessageFromAdmin();
        this.informReporteAboutIssueUpdate();
        this.informWatcherAboutIssueUpdate();
        this.getAllConnectedUsers();
        this.getCounts();
        this.getAllIssuesAssignedToMe();
    };
    PersonilizedDashboardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
    };
    PersonilizedDashboardComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.issueName.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    PersonilizedDashboardComponent.prototype.createIssue = function () {
        this.router.navigate(["user/" + this.userId + "/createIssue"]);
    };
    PersonilizedDashboardComponent.prototype.viewIssue = function (issueId) {
        this.router.navigate(["user/" + this.userId + "/issue/" + issueId]);
    };
    PersonilizedDashboardComponent.prototype.getAllIssuesAssignedToMe = function () {
        var _this = this;
        this.appService.getAllIssuesAssignedToMe(this.localStorage._id).subscribe(function (apiResponse) {
            if (apiResponse.data) {
                _this.assignedIssues = apiResponse.data;
                _this.temp = apiResponse.data.slice();
                if (_this.assignedIssues) {
                    _this.rows = _this.assignedIssues;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myTable"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DatatableComponent"])
    ], PersonilizedDashboardComponent.prototype, "table", void 0);
    PersonilizedDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-personilized-dashboard",
            template: __webpack_require__(/*! ./personilized-dashboard.component.html */ "./src/app/user/personilized-dashboard/personilized-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./personilized-dashboard.component.css */ "./src/app/user/personilized-dashboard/personilized-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], PersonilizedDashboardComponent);
    return PersonilizedDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*applying css for the main content inside the component*/\r\n#wrapper {\r\n  padding-left: 0;\r\n  transition: all 0.5s ease;\r\n  position: relative;\r\n}\r\n:host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n  width: 250px;\r\n}\r\n:host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n  position: absolute;\r\n  margin-right: -250px;\r\n}\r\n#content-wrapper {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  background-color: #e4e9f5;\r\n  position: absolute;\r\n  padding: 15px;\r\n}\r\n#wrapper.toggled #content-wrapper {\r\n  position: absolute;\r\n  margin-right: -250px;\r\n}\r\n/*start of media queries*/\r\n@media (min-width: 992px) {\r\n  #wrapper {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n    width: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -190px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -190px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: relative;\r\n    margin-right: 60px;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  #wrapper {\r\n    padding-left: 60px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    top: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: relative;\r\n    margin-right: 250px;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  #wrapper {\r\n    padding-left: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #sidebar-wrapper {\r\n    width: 250px;\r\n  }\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n\r\n  #wrapper.toggled #content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n    margin-top: 8%;\r\n  }\r\n\r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n\r\n  #content-wrapper {\r\n    position: relative;\r\n    left: 0;\r\n  }\r\n\r\n  :host ::ng-deep #wrapper.toggled #navbar-wrapper,\r\n  #wrapper.toggled #content-wrapper {\r\n    position: fixed;\r\n    margin-right: 250px;\r\n  }\r\n}\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  max-width: 325px;\r\n  margin: auto;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  align-items: center;\r\n}\r\n.title {\r\n  color: grey;\r\n  font-size: 18px;\r\n}\r\nbutton {\r\n  border: none;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 18px;\r\n}\r\na {\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: black;\r\n}\r\nbutton:hover,\r\na:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEO0FBQ3pEO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUVBLHlCQUF5QjtBQUN6QjtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtFQUNSOztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0VBQ1I7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztFQUNUOztFQUVBOztJQUVFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7QUFDRjtBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBOztFQUVFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyphcHBseWluZyBjc3MgZm9yIHRoZSBtYWluIGNvbnRlbnQgaW5zaWRlIHRoZSBjb21wb25lbnQqL1xyXG4jd3JhcHBlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjbmF2YmFyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxufVxyXG5cclxuI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTlmNTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4jd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxufVxyXG5cclxuLypzdGFydCBvZiBtZWRpYSBxdWVyaWVzKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgI3dyYXBwZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xOTBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTkwcHg7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwICN3cmFwcGVyLnRvZ2dsZWQgI25hdmJhci13cmFwcGVyLFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICN3cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNTBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAjY29udGVudC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlcixcclxuICAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICN3cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgI3dyYXBwZXIudG9nZ2xlZCAjbmF2YmFyLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbiAgfVxyXG5cclxuICAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcclxuICB9XHJcblxyXG4gICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAjd3JhcHBlci50b2dnbGVkICNuYXZiYXItd3JhcHBlcixcclxuICAjd3JhcHBlci50b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWF4LXdpZHRoOiAzMjVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcixcclxuYTpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0,user-scalable=no\"\n    />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n  </head>\n  <body>\n    <div id=\"wrapper\" [ngClass]=\"{ toggled: appService.hideSideNav }\">\n      <app-topandsidenav\n        [avatar]=\"avatar\"\n        [userId]=\"userId\"\n      ></app-topandsidenav>\n      <section id=\"content-wrapper\">\n        <h4>User Profile</h4>\n        <div class=\"card\" *ngIf=\"userDetails\">\n          <ngx-spinner\n            bdColor=\"rgba(51,51,51,0.8)\"\n            size=\"medium\"\n            color=\"#000\"\n            type=\"ball-clip-rotate-multiple\"\n            [fullScreen]=\"false\"\n          ></ngx-spinner>\n          <img\n            src=\"{{ userDetails?.avatar }}\"\n            alt=\"{{ userDetails?.firstName }}\"\n            style=\"width: 100%;\"\n          />\n          <h1>{{ userDetails?.firstName }} {{ userDetails?.lastName }}</h1>\n          <p class=\"title\">User ID {{ userDetails?.userId }}</p>\n          <p><strong class=\"pr-2\">Email</strong> {{ userDetails?.email }}</p>\n        </div>\n      </section>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");








var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(appService, _route, router, toastr, location, spinner, socketService) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.location = location;
        this.spinner = spinner;
        this.socketService = socketService;
        this.userId = this._route.snapshot.paramMap.get("id");
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (data) {
                _this.socketService.setUser(_this.authToken);
            });
        }; //end of verifyUserConfirmation
        this.getAllConnectedUsers = function () {
            _this.socketService.getAllConnectedUserList().subscribe(function (data) { });
        }; //end of getAllConnectedUsers
        this.getMessageFromAdmin = function () {
            _this.socketService.meetingNotification(_this.userId).subscribe(function (data) {
                _this.toastr.info("Informing assignee: " + data.message);
            }); //end of subscribe
        }; //end get message from a user
        this.informReporteAboutIssueUpdate = function () {
            _this.socketService.informReporteAboutIssueUpdate().subscribe(function (data) {
                if (data.changesMade.reporter.userId == _this.userId) {
                    _this.toastr
                        .info("Informing reporter: " + data.message)
                        .onTap.subscribe(function (action) {
                        _this.router.navigate(["user/" + _this.userId + "/issue/" + data.issueId]);
                    });
                }
            });
        }; //end of informReporteAboutIssueUpdate
        this.informWatcherAboutIssueUpdate = function () {
            _this.socketService.informWatcherAboutIssueUpdate().subscribe(function (data) {
                data.changesMade.watchers.forEach(function (element) {
                    if (element._id == _this.appService.getUserInfoFromLocalStorage()._id) {
                        _this.toastr
                            .info("Informing watcher: " + data.message, "", {
                            disableTimeOut: true,
                        })
                            .onTap.subscribe(function (action) {
                            _this.router.navigate([
                                "user/" + _this.userId + "/issue/" + data.issueId,
                            ]);
                        });
                    }
                });
            });
        }; //end of informWatcherAboutIssueUpdate
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.authToken = this.appService.getAuthToken();
        this.spinner.show();
        this.avatar = this.appService.getUserInfoFromLocalStorage().avatar;
        this.appService.getSingleUser(this.userId).subscribe(function (apiResponse) {
            _this.spinner.hide();
            _this.userDetails = apiResponse.data;
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
        // this.verifyUserConfirmation();
        // this.getMessageFromAdmin();
        // this.informReporteAboutIssueUpdate();
        // this.informWatcherAboutIssueUpdate();
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-profile",
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user/user-profile/user-profile.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]],
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/user-route-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/user/user-route-guard.service.ts ***!
  \**************************************************/
/*! exports provided: UserRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRouteGuardService", function() { return UserRouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var UserRouteGuardService = /** @class */ (function () {
    function UserRouteGuardService(router, appService, toastr) {
        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
    }
    UserRouteGuardService.prototype.canActivate = function (route) {
        var authToken = this.appService.getAuthToken();
        if (authToken === undefined || authToken === "" || authToken === null) {
            this.router.navigate(["/login"]);
            return false;
        }
        else {
            return true;
        }
    };
    UserRouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], UserRouteGuardService);
    return UserRouteGuardService;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js");
/* harmony import */ var _personilized_dashboard_personilized_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./personilized-dashboard/personilized-dashboard.component */ "./src/app/user/personilized-dashboard/personilized-dashboard.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _issue_description_issue_description_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./issue-description/issue-description.component */ "./src/app/user/issue-description/issue-description.component.ts");
/* harmony import */ var _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-issue/create-issue.component */ "./src/app/user/create-issue/create-issue.component.ts");
/* harmony import */ var _user_route_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-route-guard.service */ "./src/app/user/user-route-guard.service.ts");
/* harmony import */ var _all_issues_all_issues_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./all-issues/all-issues.component */ "./src/app/user/all-issues/all-issues.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







//importing ngx-datatable

//importing quill

//importing tiny cloud









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _personilized_dashboard_personilized_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["PersonilizedDashboardComponent"],
                _issue_description_issue_description_component__WEBPACK_IMPORTED_MODULE_12__["IssueDescriptionComponent"],
                _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_13__["CreateIssueComponent"],
                _all_issues_all_issues_component__WEBPACK_IMPORTED_MODULE_15__["AllIssuesComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__["EditorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: "userdashboard/:id",
                        component: _personilized_dashboard_personilized_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["PersonilizedDashboardComponent"],
                        pathMatch: "full",
                        data: { animation: "isUserDashboard" },
                        canActivate: [_user_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["UserRouteGuardService"]],
                    },
                    {
                        path: "user/:id/createIssue",
                        component: _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_13__["CreateIssueComponent"],
                        pathMatch: "full",
                        canActivate: [_user_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["UserRouteGuardService"]],
                    },
                    {
                        path: "user/:id/issue/:issueId",
                        component: _issue_description_issue_description_component__WEBPACK_IMPORTED_MODULE_12__["IssueDescriptionComponent"],
                        pathMatch: "full",
                        canActivate: [_user_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["UserRouteGuardService"]],
                    },
                    {
                        path: "user/:id/allIssues",
                        component: _all_issues_all_issues_component__WEBPACK_IMPORTED_MODULE_15__["AllIssuesComponent"],
                        pathMatch: "full",
                        canActivate: [_user_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["UserRouteGuardService"]],
                    },
                    {
                        path: "user/user-profile/:id",
                        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"],
                        pathMatch: "full",
                        canActivate: [_user_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["UserRouteGuardService"]],
                    },
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            ],
            providers: [_user_route_guard_service__WEBPACK_IMPORTED_MODULE_14__["UserRouteGuardService"]],
        })
    ], UserModule);
    return UserModule;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\mean stack development\Angular4\dev-track\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map