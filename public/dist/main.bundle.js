webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer-new/answer-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer-new/answer-new.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/browse']\">Home</button>\n<button [routerLink]=\"['/question', question._id]\">Go Back to Question</button>\n<button (click)=\"logout()\">Log off</button>\n\n<h1>{{ question.question }}</h1>\n\n<form (submit)=\"createAnswer()\">\n    Answer:\n    <input\n    type='text'\n    name='answer'\n    [(ngModel)]='newAnswer.answer'>\n\n    <br>\n    <br>\n\n    Supporting details for your answer (optional):\n    <input\n    type='text'\n    name='details'\n    [(ngModel)]='newAnswer.details'>\n\n    <br>\n    <br>\n\n    <input type='submit' value='Submit'>\n    <button [routerLink]=\"['/question', question._id]\">Cancel</button>\n</form>\n\n<p *ngFor=\"let error of answerErrors\">{{error}}</p>\n"

/***/ }),

/***/ "../../../../../src/app/answer-new/answer-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__answer__ = __webpack_require__("../../../../../src/app/answer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__answer_service__ = __webpack_require__("../../../../../src/app/answer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AnswerNewComponent = (function () {
    function AnswerNewComponent(_answerService, _questionService, _userService, _router, _route) {
        this._answerService = _answerService;
        this._questionService = _questionService;
        this._userService = _userService;
        this._router = _router;
        this._route = _route;
        this.newAnswer = new __WEBPACK_IMPORTED_MODULE_1__answer__["a" /* Answer */]();
        this.answerErrors = [];
        this.question = new __WEBPACK_IMPORTED_MODULE_4__question__["a" /* Question */];
        this.id = '';
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */];
    }
    AnswerNewComponent.prototype.ngOnInit = function () {
        this.getQuestion();
    };
    AnswerNewComponent.prototype.createAnswer = function () {
        var _this = this;
        this.answerErrors = [];
        this._answerService.create(this.id = this.question._id, this.newAnswer, function (data) {
            if (data.errors) {
                for (var _i = 0, _a = Object.keys(data.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = data.errors[key];
                    _this.answerErrors.push(error.message);
                }
            }
            else {
                console.log(_this.newAnswer);
                _this._router.navigateByUrl('/question/' + _this.question._id);
                _this.newAnswer = new __WEBPACK_IMPORTED_MODULE_1__answer__["a" /* Answer */]();
                _this.currentUser.name = _this.newAnswer.name;
            }
        });
    };
    AnswerNewComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            console.log(res);
            _this._router.navigateByUrl('/');
        });
    };
    AnswerNewComponent.prototype.getQuestion = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) { return _this._questionService.show(params.id, function (res) { return _this.question = res; }); });
    };
    return AnswerNewComponent;
}());
AnswerNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-answer-new',
        template: __webpack_require__("../../../../../src/app/answer-new/answer-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/answer-new/answer-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__answer_service__["a" /* AnswerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__answer_service__["a" /* AnswerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__question_service__["a" /* QuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], AnswerNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=answer-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/answer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerService = (function () {
    function AnswerService(_http) {
        this._http = _http;
    }
    AnswerService.prototype.index = function (callback) {
        this._http.get('/answers').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    AnswerService.prototype.create = function (id, newAnswer, callback) {
        this._http.post("/questions/" + id + "/answers", newAnswer).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    AnswerService.prototype.show = function (id, callback) {
        this._http.get("answers/" + id).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    return AnswerService;
}());
AnswerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AnswerService);

var _a;
//# sourceMappingURL=answer.service.js.map

/***/ }),

/***/ "../../../../../src/app/answer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = (function () {
    function Answer() {
        this.likes = 0;
    }
    return Answer;
}());

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_list_question_list_component__ = __webpack_require__("../../../../../src/app/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_new_question_new_component__ = __webpack_require__("../../../../../src/app/question-new/question-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_show_question_show_component__ = __webpack_require__("../../../../../src/app/question-show/question-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__answer_new_answer_new_component__ = __webpack_require__("../../../../../src/app/answer-new/answer-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
            { path: 'browse', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__question_list_question_list_component__["a" /* QuestionListComponent */] },
            { path: 'new_question', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__question_new_question_new_component__["a" /* QuestionNewComponent */] },
            { path: 'question/:id', component: __WEBPACK_IMPORTED_MODULE_6__question_show_question_show_component__["a" /* QuestionShowComponent */] },
            { path: 'question/:id/new_answer', component: __WEBPACK_IMPORTED_MODULE_7__answer_new_answer_new_component__["a" /* AnswerNewComponent */] },
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_list_question_list_component__ = __webpack_require__("../../../../../src/app/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_new_question_new_component__ = __webpack_require__("../../../../../src/app/question-new/question-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__answer_service__ = __webpack_require__("../../../../../src/app/answer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_show_question_show_component__ = __webpack_require__("../../../../../src/app/question-show/question-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__answer_new_answer_new_component__ = __webpack_require__("../../../../../src/app/answer-new/answer-new.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__question_list_question_list_component__["a" /* QuestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__question_new_question_new_component__["a" /* QuestionNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__question_show_question_show_component__["a" /* QuestionShowComponent */],
            __WEBPACK_IMPORTED_MODULE_14__answer_new_answer_new_component__["a" /* AnswerNewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_12__answer_service__["a" /* AnswerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n    display: inline-block;\n    width: 500px;\n}\n\np {\n    color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Q&A</h1>\n\n<div>\n    <form (submit)=\"createUser()\">\n        Name:\n        <input\n        type='text'\n        name='name'\n        [(ngModel)]=\"newUser.name\">\n\n        <br>\n        <br>\n\n        <input type='submit' value='Enter'>\n    </form>\n</div>\n\n<p *ngFor=\"let error of errors\">{{error}}</p>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createUser = function () {
        var _this = this;
        this.errors = [];
        this._userService.createUser(this.newUser, function (res) {
            if (res.errors) {
                for (var _i = 0, _a = Object.keys(res.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = res.errors[key];
                    _this.errors.push(error.message);
                }
            }
            else {
                console.log('success');
                _this._router.navigateByUrl('/browse');
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/question-list/question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-list/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Hi {{ currentUser.name }}</h2>\n\n<button [routerLink]=\"['/new_question']\">Add a Question</button>\n<button (click)=\"logout()\">Log off</button>\n\n<br>\n<br>\n\n<table>\n    <tr>\n        <th>Question</th>\n        <th>Answers</th>\n        <th>Action</th>\n    </tr>\n\n    <tr *ngFor=\"let question of questions\">\n        <td>{{ question.question }}</td>\n        <td>{{ question.answers.length }}</td>\n        <td>\n            <button [routerLink]=\"['/question', question._id]\">Show</button>\n            <button [routerLink]=\"['/question', question._id, 'new_answer']\">Answer</button>\n        </td>\n    </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/question-list/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionListComponent = (function () {
    function QuestionListComponent(_questionService, _userService, _router) {
        this._questionService = _questionService;
        this._userService = _userService;
        this._router = _router;
        this.questions = [];
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */];
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        this.getQuestions();
        this.getCurrentUser();
    };
    QuestionListComponent.prototype.getQuestions = function () {
        var _this = this;
        this._questionService.index(function (questions) { return _this.questions = questions; });
    };
    QuestionListComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            console.log(res);
            _this._router.navigateByUrl('/');
        });
    };
    QuestionListComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this._userService.session(function (res) {
            if (res.status == false) {
                _this._router.navigateByUrl('/');
            }
            else {
                _this.currentUser = res;
            }
        });
    };
    return QuestionListComponent;
}());
QuestionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-question-list',
        template: __webpack_require__("../../../../../src/app/question-list/question-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-list/question-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], QuestionListComponent);

var _a, _b, _c;
//# sourceMappingURL=question-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/question-new/question-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-new/question-new.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/browse']\">Home</button>\n<button (click)=\"logout()\">Log off</button>\n\n<h1>New Question</h1>\n\n<form (submit)=\"createQuestion()\">\n    Question:\n    <input\n    type='text'\n    name='title'\n    [(ngModel)]='newQuestion.question'>\n\n    <br>\n    <br>\n\n    Description (optional):\n    <input\n    type='text'\n    name='description'\n    [(ngModel)]='newQuestion.description'>\n\n    <br>\n    <br>\n\n    <input type='submit' value='Submit'>\n    <button [routerLink]=\"['/browse']\">Cancel</button>\n</form>\n\n<p *ngFor=\"let error of errors\">{{error}}</p>\n"

/***/ }),

/***/ "../../../../../src/app/question-new/question-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionNewComponent = (function () {
    function QuestionNewComponent(_questionService, _userService, _router) {
        this._questionService = _questionService;
        this._userService = _userService;
        this._router = _router;
        this.newQuestion = new __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]();
        this.errors = [];
    }
    QuestionNewComponent.prototype.ngOnInit = function () {
    };
    QuestionNewComponent.prototype.createQuestion = function () {
        var _this = this;
        this.errors = [];
        this._questionService.create(this.newQuestion, function (data) {
            if (data.errors) {
                for (var _i = 0, _a = Object.keys(data.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = data.errors[key];
                    _this.errors.push(error.message);
                }
            }
            else {
                console.log(_this.newQuestion);
                _this.newQuestion = new __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]();
                _this._router.navigateByUrl('/browse');
            }
        });
    };
    QuestionNewComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            console.log(res);
            _this._router.navigateByUrl('/');
        });
    };
    return QuestionNewComponent;
}());
QuestionNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-question-new',
        template: __webpack_require__("../../../../../src/app/question-new/question-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-new/question-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], QuestionNewComponent);

var _a, _b, _c;
//# sourceMappingURL=question-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/question-show/question-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-show/question-show.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/browse']\">Home</button>\n<button [routerLink]=\"['/question', question._id, 'new_answer']\">Answer this Question</button>\n<button (click)=\"logout()\">Log off</button>\n\n<br>\n<br>\n\n<h1>{{ question.question }}</h1>\n<p>{{ question.description }}</p>\n\n<div *ngFor=\"let x of answers\">\n    <div *ngIf=\"x.question == question._id\">\n        <p>{{ x._id }} says:</p>\n        <p>{{ x.answer }}</p>\n        <p>{{ x.details }}</p>\n\n        <p>{{ answer.likes }} Likes!</p>\n        <button (click)=\"increaseLikes()\">Like</button>\n        <hr>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/question-show/question-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer__ = __webpack_require__("../../../../../src/app/answer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__answer_service__ = __webpack_require__("../../../../../src/app/answer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuestionShowComponent = (function () {
    function QuestionShowComponent(_questionService, _userService, _answerService, _route, _router) {
        this._questionService = _questionService;
        this._userService = _userService;
        this._answerService = _answerService;
        this._route = _route;
        this._router = _router;
        this.question = new __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */];
        this.answer = new __WEBPACK_IMPORTED_MODULE_2__answer__["a" /* Answer */];
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */];
        this.answers = [];
    }
    QuestionShowComponent.prototype.ngOnInit = function () {
        this.getQuestion();
        this.getCurrentUser();
        this.getAnswers();
    };
    QuestionShowComponent.prototype.getQuestion = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) { return _this._questionService.show(params.id, function (res) { return _this.question = res; }); });
    };
    QuestionShowComponent.prototype.getAnswers = function () {
        var _this = this;
        this._answerService.index(function (answers) { return _this.answers = answers; });
        this.currentUser.name = this.answer._id;
    };
    QuestionShowComponent.prototype.increaseLikes = function () {
        //   this.answers[answerId].likes = this.answers[answerId].likes + 1;
        this.answer.likes++;
        //I know its more than this but ran out of time//
    };
    QuestionShowComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this._userService.session(function (res) {
            if (res.status == false) {
                _this._router.navigateByUrl('/');
            }
            else {
                _this.currentUser = res;
            }
        });
    };
    QuestionShowComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            _this._router.navigateByUrl('/');
        });
    };
    return QuestionShowComponent;
}());
QuestionShowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-question-show',
        template: __webpack_require__("../../../../../src/app/question-show/question-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-show/question-show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__answer_service__["a" /* AnswerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__answer_service__["a" /* AnswerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _e || Object])
], QuestionShowComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=question-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.index = function (callback) {
        this._http.get('/questions').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    QuestionService.prototype.create = function (newQuestion, callback) {
        this._http.post('/questions', newQuestion).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    QuestionService.prototype.show = function (id, callback) {
        this._http.get("questions/" + id).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    return QuestionService;
}());
QuestionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], QuestionService);

var _a;
//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/app/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question() {
    }
    return Question;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.createUser = function (newUser, callback) {
        this._http.post('/users', newUser).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.authenticate = function (user, callback) {
        this._http.post('/login', user).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.session = function (callback) {
        this._http.get('/session').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.logout = function (callback) {
        this._http.delete('/users').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map