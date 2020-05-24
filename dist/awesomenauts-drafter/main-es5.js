function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _naut_picker_naut_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./naut-picker/naut-picker.component */
    "./src/app/naut-picker/naut-picker.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _user_preferences_user_preferences_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-preferences/user-preferences.component */
    "./src/app/user-preferences/user-preferences.component.ts");
    /* harmony import */


    var _naut_packs_naut_packs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./naut-packs/naut-packs.component */
    "./src/app/naut-packs/naut-packs.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'naut-picker',
      pathMatch: 'full'
    }, {
      path: 'naut-picker',
      component: _naut_picker_naut_picker_component__WEBPACK_IMPORTED_MODULE_2__["NautPickerComponent"]
    }, {
      path: 'naut-packs',
      component: _naut_packs_naut_packs_component__WEBPACK_IMPORTED_MODULE_5__["NautPacksComponent"]
    }, {
      path: 'user-pref',
      component: _user_preferences_user_preferences_component__WEBPACK_IMPORTED_MODULE_4__["UserPreferencesComponent"]
    }, {
      path: '**/*',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'awesomenauts-drafter';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["ad-root"]],
      decls: 9,
      vars: 0,
      consts: [[1, "awesomenauts-drafter-container", "docs-app-background"], ["color", "primary"], ["mat-button", "", "routerLink", "/", 1, "links"], ["mat-button", "", "routerLink", "/naut-packs", 1, "links"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Awesomenauts Drafter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Standard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Packs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".links[_ngcontent-%COMP%] {\r\n    margin-left: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ad-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _naut_picker_naut_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./naut-picker/naut-picker.component */
    "./src/app/naut-picker/naut-picker.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _naut_naut_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./naut/naut.component */
    "./src/app/naut/naut.component.ts");
    /* harmony import */


    var _user_preferences_user_preferences_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user-preferences/user-preferences.component */
    "./src/app/user-preferences/user-preferences.component.ts");
    /* harmony import */


    var _services_naut_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/naut-data.service */
    "./src/app/services/naut-data.service.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _naut_packs_naut_packs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./naut-packs/naut-packs.component */
    "./src/app/naut-packs/naut-packs.component.ts"); // import {MatBadgeModule} from '@angular/material/badge';
    // import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
    // import {MatButtonToggleModule} from '@angular/material/button-toggle';
    // import {MatCardModule} from '@angular/material/card';
    // import {MatCheckboxModule} from '@angular/material/checkbox';
    // import {MatChipsModule} from '@angular/material/chips';
    // import {MatStepperModule} from '@angular/material/stepper';
    // import {MatDatepickerModule} from '@angular/material/datepicker';
    // import {MatDialogModule} from '@angular/material/dialog';
    // import {MatDividerModule} from '@angular/material/divider';
    // import {MatExpansionModule} from '@angular/material/expansion';
    // import {MatInputModule} from '@angular/material/input';
    // import {MatListModule} from '@angular/material/list';
    // import {MatMenuModule} from '@angular/material/menu';
    // import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
    // import {MatPaginatorModule} from '@angular/material/paginator';
    // import {MatProgressBarModule} from '@angular/material/progress-bar';
    // import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
    // import {MatRadioModule} from '@angular/material/radio';
    // import {MatSelectModule} from '@angular/material/select';
    // import {MatSidenavModule} from '@angular/material/sidenav';
    // import {MatSliderModule} from '@angular/material/slider';
    // import {MatSlideToggleModule} from '@angular/material/slide-toggle';
    // import {MatSnackBarModule} from '@angular/material/snack-bar';
    // import {MatSortModule} from '@angular/material/sort';
    // import {MatTableModule} from '@angular/material/table';
    // import {MatTabsModule} from '@angular/material/tabs';
    // import {MatTooltipModule} from '@angular/material/tooltip';
    // import {MatTreeModule} from '@angular/material/tree';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_naut_data_service__WEBPACK_IMPORTED_MODULE_13__["NautDataService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _naut_picker_naut_picker_component__WEBPACK_IMPORTED_MODULE_5__["NautPickerComponent"], _naut_packs_naut_packs_component__WEBPACK_IMPORTED_MODULE_15__["NautPacksComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"], _naut_naut_component__WEBPACK_IMPORTED_MODULE_11__["NautComponent"], _user_preferences_user_preferences_component__WEBPACK_IMPORTED_MODULE_12__["UserPreferencesComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _naut_picker_naut_picker_component__WEBPACK_IMPORTED_MODULE_5__["NautPickerComponent"], _naut_packs_naut_packs_component__WEBPACK_IMPORTED_MODULE_15__["NautPacksComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"], _naut_naut_component__WEBPACK_IMPORTED_MODULE_11__["NautComponent"], _user_preferences_user_preferences_component__WEBPACK_IMPORTED_MODULE_12__["UserPreferencesComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]],
          providers: [_services_naut_data_service__WEBPACK_IMPORTED_MODULE_13__["NautDataService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["ad-login"]],
      decls: 2,
      vars: 0,
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ad-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/naut-packs/naut-packs.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/naut-packs/naut-packs.component.ts ***!
    \****************************************************/

  /*! exports provided: NautPacksComponent */

  /***/
  function srcAppNautPacksNautPacksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NautPacksComponent", function () {
      return NautPacksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_naut_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/naut-data.service */
    "./src/app/services/naut-data.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _naut_naut_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../naut/naut.component */
    "./src/app/naut/naut.component.ts");

    function NautPacksComponent_mat_grid_tile_10_ad_naut_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ad-naut", 7);
      }

      if (rf & 2) {
        var naut_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", naut_r4.name)("isGolden", naut_r4.isGolden)("rarity", naut_r4.tier)("src", "assets/nauts/" + naut_r4.id + ".png");
      }
    }

    function NautPacksComponent_mat_grid_tile_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NautPacksComponent_mat_grid_tile_10_ad_naut_1_Template, 1, 4, "ad-naut", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var naut_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", naut_r4);
      }
    }

    function NautPacksComponent_mat_grid_tile_17_ad_naut_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ad-naut", 7);
      }

      if (rf & 2) {
        var naut_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", naut_r7.name)("isGolden", naut_r7.isGolden)("rarity", naut_r7.tier)("src", "assets/nauts/" + naut_r7.id + ".png");
      }
    }

    function NautPacksComponent_mat_grid_tile_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NautPacksComponent_mat_grid_tile_17_ad_naut_1_Template, 1, 4, "ad-naut", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var naut_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", naut_r7);
      }
    }

    function NautPacksComponent_mat_grid_tile_24_ad_naut_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ad-naut", 7);
      }

      if (rf & 2) {
        var naut_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", naut_r10.name)("isGolden", naut_r10.isGolden)("rarity", naut_r10.tier)("src", "assets/nauts/" + naut_r10.id + ".png");
      }
    }

    function NautPacksComponent_mat_grid_tile_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NautPacksComponent_mat_grid_tile_24_ad_naut_1_Template, 1, 4, "ad-naut", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var naut_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", naut_r10);
      }
    }

    function NautPacksComponent_mat_grid_tile_31_ad_naut_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ad-naut", 7);
      }

      if (rf & 2) {
        var naut_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", naut_r13.name)("isGolden", naut_r13.isGolden)("rarity", naut_r13.tier)("src", "assets/nauts/" + naut_r13.id + ".png");
      }
    }

    function NautPacksComponent_mat_grid_tile_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NautPacksComponent_mat_grid_tile_31_ad_naut_1_Template, 1, 4, "ad-naut", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var naut_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", naut_r13);
      }
    }

    var NautPacksComponent = /*#__PURE__*/function () {
      function NautPacksComponent(nautDataService) {
        _classCallCheck(this, NautPacksComponent);

        this.nautDataService = nautDataService;
      }

      _createClass(NautPacksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.thynixNautPack = this.nautDataService.getRandomNautsPack('thynix');
          this.haspNautPack = this.nautDataService.getRandomNautsPack('hasp');
          this.mathmaticalNautPack = this.nautDataService.getRandomNautsPack('mathmatical');
          this.mlripperNautPack = this.nautDataService.getRandomNautsPack('mlripper');
        }
      }, {
        key: "newGame",
        value: function newGame() {
          this.thynixNautPack = this.nautDataService.getRandomNautsPack('thynix');
          this.haspNautPack = this.nautDataService.getRandomNautsPack('hasp');
          this.mathmaticalNautPack = this.nautDataService.getRandomNautsPack('mathmatical');
          this.mlripperNautPack = this.nautDataService.getRandomNautsPack('mlripper');
        }
      }, {
        key: "reroll",
        value: function reroll(player) {
          if (player === 'thynix') {
            this.thynixNautPack = this.nautDataService.getRandomNautsPack('thynix');
          }

          if (player === 'hasp') {
            this.haspNautPack = this.nautDataService.getRandomNautsPack('hasp');
          }

          if (player === 'mathmatical') {
            this.mathmaticalNautPack = this.nautDataService.getRandomNautsPack('mathmatical');
          }

          if (player === 'mlripper') {
            this.mlripperNautPack = this.nautDataService.getRandomNautsPack('mlripper');
          }
        }
      }]);

      return NautPacksComponent;
    }();

    NautPacksComponent.ɵfac = function NautPacksComponent_Factory(t) {
      return new (t || NautPacksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_naut_data_service__WEBPACK_IMPORTED_MODULE_1__["NautDataService"]));
    };

    NautPacksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NautPacksComponent,
      selectors: [["ad-naut-packs"]],
      decls: 32,
      vars: 4,
      consts: [[1, "naut-picker", "mat-body"], ["mat-button", "", 1, "naut-picker__new-game", 3, "click"], ["mat-h2", ""], ["mat-button", "", 1, "naut-picker__reroll", 3, "click"], ["cols", "5", "rowHeight", "1:1", 1, "naut-picker__grid"], [4, "ngFor", "ngForOf"], [3, "name", "isGolden", "rarity", "src", 4, "ngIf"], [3, "name", "isGolden", "rarity", "src"]],
      template: function NautPacksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NautPacksComponent_Template_button_click_2_listener() {
            return ctx.newGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Thynix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NautPacksComponent_Template_button_click_7_listener() {
            return ctx.reroll("thynix");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reroll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NautPacksComponent_mat_grid_tile_10_Template, 2, 1, "mat-grid-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hasp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NautPacksComponent_Template_button_click_14_listener() {
            return ctx.reroll("hasp");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reroll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-grid-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NautPacksComponent_mat_grid_tile_17_Template, 2, 1, "mat-grid-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mathmatical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NautPacksComponent_Template_button_click_21_listener() {
            return ctx.reroll("mathmatical");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reroll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-grid-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NautPacksComponent_mat_grid_tile_24_Template, 2, 1, "mat-grid-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mlripper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NautPacksComponent_Template_button_click_28_listener() {
            return ctx.reroll("mlripper");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reroll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-grid-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NautPacksComponent_mat_grid_tile_31_Template, 2, 1, "mat-grid-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thynixNautPack);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.haspNautPack);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mathmaticalNautPack);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mlripperNautPack);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _naut_naut_component__WEBPACK_IMPORTED_MODULE_5__["NautComponent"]],
      styles: [".naut-picker[_ngcontent-%COMP%] {\r\n    width: 700px;\r\n    margin: auto;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n\r\n.naut-picker__new-game[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    margin-left: 300px;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.naut-picker__reroll[_ngcontent-%COMP%] {\r\n    margin-left: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF1dC1wYWNrcy9uYXV0LXBhY2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmF1dC1wYWNrcy9uYXV0LXBhY2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF1dC1waWNrZXIge1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5uYXV0LXBpY2tlcl9fbmV3LWdhbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5uYXV0LXBpY2tlcl9fcmVyb2xsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NautPacksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ad-naut-packs',
          templateUrl: './naut-packs.component.html',
          styleUrls: ['./naut-packs.component.css']
        }]
      }], function () {
        return [{
          type: _services_naut_data_service__WEBPACK_IMPORTED_MODULE_1__["NautDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/naut-picker/naut-picker.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/naut-picker/naut-picker.component.ts ***!
    \******************************************************/

  /*! exports provided: NautPickerComponent */

  /***/
  function srcAppNautPickerNautPickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NautPickerComponent", function () {
      return NautPickerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_naut_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/naut-data.service */
    "./src/app/services/naut-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _naut_naut_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../naut/naut.component */
    "./src/app/naut/naut.component.ts");

    function NautPickerComponent_mat_grid_tile_2_ad_naut_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ad-naut", 4);
      }

      if (rf & 2) {
        var naut_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", naut_r1.name)("src", "assets/nauts/" + naut_r1.id + ".png");
      }
    }

    function NautPickerComponent_mat_grid_tile_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NautPickerComponent_mat_grid_tile_2_ad_naut_1_Template, 1, 2, "ad-naut", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var naut_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", naut_r1);
      }
    }

    var NautPickerComponent = /*#__PURE__*/function () {
      function NautPickerComponent(nautDataService, activatedRoute) {
        _classCallCheck(this, NautPickerComponent);

        this.nautDataService = nautDataService;
        this.activatedRoute = activatedRoute;
      }

      _createClass(NautPickerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (queryParams) {
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(queryParams.player)) {
              _this.displayNautList = _this.nautDataService.getRandomNautsPack(queryParams.player);
            } else {
              _this.displayNautList = _this.nautDataService.allNauts;
            }
          });
        }
      }]);

      return NautPickerComponent;
    }();

    NautPickerComponent.ɵfac = function NautPickerComponent_Factory(t) {
      return new (t || NautPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_naut_data_service__WEBPACK_IMPORTED_MODULE_2__["NautDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    NautPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NautPickerComponent,
      selectors: [["ad-naut-picker"]],
      decls: 3,
      vars: 1,
      consts: [[1, "naut-picker", "mat-body"], ["cols", "7", "rowHeight", "1:1", 1, "naut-picker__grid"], [4, "ngFor", "ngForOf"], [3, "name", "src", 4, "ngIf"], [3, "name", "src"]],
      template: function NautPickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NautPickerComponent_mat_grid_tile_2_Template, 2, 1, "mat-grid-tile", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayNautList);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _naut_naut_component__WEBPACK_IMPORTED_MODULE_6__["NautComponent"]],
      styles: [".naut-picker[_ngcontent-%COMP%] {\r\n    width: 700px;\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF1dC1waWNrZXIvbmF1dC1waWNrZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbmF1dC1waWNrZXIvbmF1dC1waWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXV0LXBpY2tlciB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NautPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ad-naut-picker',
          templateUrl: './naut-picker.component.html',
          styleUrls: ['./naut-picker.component.css']
        }]
      }], function () {
        return [{
          type: _services_naut_data_service__WEBPACK_IMPORTED_MODULE_2__["NautDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/naut/naut.component.ts":
  /*!****************************************!*\
    !*** ./src/app/naut/naut.component.ts ***!
    \****************************************/

  /*! exports provided: NautComponent */

  /***/
  function srcAppNautNautComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NautComponent", function () {
      return NautComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function NautComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
      }
    }

    function NautComponent_div_3_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NautComponent_div_3_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NautComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NautComponent_div_3_mat_icon_1_Template, 2, 0, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NautComponent_div_3_mat_icon_2_Template, 2, 0, "mat-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.redState === ctx_r1.NautState.Banned);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.redState === ctx_r1.NautState.Selected);
      }
    }

    function NautComponent_div_4_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NautComponent_div_4_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NautComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NautComponent_div_4_mat_icon_1_Template, 2, 0, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NautComponent_div_4_mat_icon_2_Template, 2, 0, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blueState === ctx_r2.NautState.Banned);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.blueState === ctx_r2.NautState.Selected);
      }
    }

    function NautComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "radio_button_unchecked");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NautComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NautState;

    (function (NautState) {
      NautState[NautState["Unselected"] = 0] = "Unselected";
      NautState[NautState["Selected"] = 1] = "Selected";
      NautState[NautState["Banned"] = 2] = "Banned";
    })(NautState || (NautState = {}));

    var NautComponent = /*#__PURE__*/function () {
      function NautComponent() {
        _classCallCheck(this, NautComponent);

        this.name = '';
        this.src = '';
        this.isGolden = false;
        this.rarity = 'rare';
        this.redState = NautState.Unselected;
        this.blueState = NautState.Unselected;
        this.NautState = NautState;
      }

      _createClass(NautComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleRedNaut",
        value: function toggleRedNaut() {
          console.log(this.redState);
          this.redState = (this.redState + 1) % (NautState.Banned + 1);
        }
        /** Return false to stop the propagation to context menu click */

      }, {
        key: "toggleBlueNaut",
        value: function toggleBlueNaut() {
          console.log(this.blueState);
          this.blueState = (this.blueState + 1) % (NautState.Banned + 1);
          return false;
        }
      }]);

      return NautComponent;
    }();

    NautComponent.ɵfac = function NautComponent_Factory(t) {
      return new (t || NautComponent)();
    };

    NautComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NautComponent,
      selectors: [["ad-naut"]],
      inputs: {
        name: "name",
        src: "src",
        isGolden: "isGolden",
        rarity: "rarity"
      },
      decls: 8,
      vars: 7,
      consts: [[1, "naut"], ["mat-button", "", 3, "click", "contextmenu"], ["class", "naut__golden", 4, "ngIf"], ["class", "naut__red", 4, "ngIf"], ["class", "naut__blue", 4, "ngIf"], ["class", "naut__epic", 4, "ngIf"], ["class", "naut__legendary", 4, "ngIf"], [1, "naut__img", 3, "src", "alt"], [1, "naut__golden"], [1, "naut__red"], ["class", "naut__red-banned", "aria-hidden", "false", "aria-label", "Banned", 4, "ngIf"], ["class", "naut__red-selected", "aria-hidden", "false", "aria-label", "Selected", 4, "ngIf"], ["aria-hidden", "false", "aria-label", "Banned", 1, "naut__red-banned"], ["aria-hidden", "false", "aria-label", "Selected", 1, "naut__red-selected"], [1, "naut__blue"], ["class", "naut__blue-banned", "aria-hidden", "false", "aria-label", "Banned", 4, "ngIf"], ["class", "naut__blue-selected", "aria-hidden", "false", "aria-label", "Selected", 4, "ngIf"], ["aria-hidden", "false", "aria-label", "Banned", 1, "naut__blue-banned"], ["aria-hidden", "false", "aria-label", "Selected", 1, "naut__blue-selected"], [1, "naut__epic"], ["aria-hidden", "false", "aria-label", "radio_button_unchecked", 1, "naut__epic-icon"], [1, "naut__legendary"], ["aria-hidden", "false", "aria-label", "star_outline", 1, "naut__legendary-icon"]],
      template: function NautComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NautComponent_Template_button_click_1_listener() {
            return ctx.toggleRedNaut();
          })("contextmenu", function NautComponent_Template_button_contextmenu_1_listener() {
            return ctx.toggleBlueNaut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NautComponent_div_2_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NautComponent_div_3_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NautComponent_div_4_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NautComponent_div_5_Template, 3, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NautComponent_div_6_Template, 3, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGolden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.redState === ctx.NautState.Banned || ctx.redState === ctx.NautState.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blueState === ctx.NautState.Banned || ctx.blueState === ctx.NautState.Selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rarity === "epic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rarity === "legendary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.name);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: ["img.naut__img[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n\r\n.naut[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.naut__red[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: red;\r\n    padding: 5px;\r\n    height: 25px;\r\n    border-radius: 25px;\r\n    top: 5px;\r\n    left: 20px;\r\n}\r\n\r\n.naut__blue[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: blue;\r\n    padding: 5px;\r\n    height: 25px;\r\n    border-radius: 25px;\r\n    top: 5px;\r\n    right: 20px;\r\n}\r\n\r\n.naut__golden[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    padding: 5px;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: .6;\r\n    border-radius: 0;\r\n    margin: 10px;\r\n    margin-left: 26px;\r\n    margin-right: 26px;\r\n    height: 70px;\r\n    background: #d29018;\r\n}\r\n\r\n.naut__epic[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: purple;\r\n    padding: 5px;\r\n    height: 25px;\r\n    border-radius: 25px;\r\n    bottom: 5px;\r\n    left: 20px;\r\n}\r\n\r\n.naut__legendary[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background: orangered;\r\n    padding: 5px;\r\n    height: 25px;\r\n    border-radius: 25px;\r\n    bottom: 5px;\r\n    left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF1dC9uYXV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbmF1dC9uYXV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcubmF1dF9faW1nIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5hdXRfX3JlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubmF1dF9fYmx1ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uYXV0X19nb2xkZW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI2cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDI5MDE4O1xyXG59XHJcblxyXG4ubmF1dF9fZXBpYyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubmF1dF9fbGVnZW5kYXJ5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NautComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ad-naut',
          templateUrl: './naut.component.html',
          styleUrls: ['./naut.component.css']
        }]
      }], function () {
        return [];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isGolden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rarity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["ad-page-not-found"]],
      decls: 3,
      vars: 0,
      consts: [[1, "page--center"], [1, "mat-h1"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page Not Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ad-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/hasp.json":
  /*!************************************!*\
    !*** ./src/app/services/hasp.json ***!
    \************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, default */

  /***/
  function srcAppServicesHaspJson(module) {
    module.exports = JSON.parse("[{\"id\":\"ayla\",\"name\":\"ayla\",\"tier\":\"epic\"},{\"id\":\"chucho\",\"name\":\"chucho\"},{\"id\":\"clunk\",\"name\":\"clunk\"},{\"id\":\"coco\",\"name\":\"coco\"},{\"id\":\"commander\",\"name\":\"commander\"},{\"id\":\"deadlift\",\"name\":\"deadlift\"},{\"id\":\"derpl\",\"name\":\"derpl\"},{\"id\":\"dizzy\",\"name\":\"dizzy\",\"tier\":\"epic\"},{\"id\":\"froggy\",\"name\":\"froggy\",\"tier\":\"legendary\"},{\"id\":\"genji\",\"name\":\"genji\"},{\"id\":\"gnaw\",\"name\":\"gnaw\"},{\"id\":\"ix\",\"name\":\"ix\"},{\"id\":\"jimmy\",\"name\":\"jimmy\"},{\"id\":\"ksenia\",\"name\":\"ksenia\",\"tier\":\"epic\"},{\"id\":\"leon\",\"name\":\"leon\",\"tier\":\"legendary\"},{\"id\":\"lonestar\",\"name\":\"lonestar\"},{\"id\":\"max\",\"name\":\"max\"},{\"id\":\"nibbs\",\"name\":\"nibbs\",\"tier\":\"legendary\"},{\"id\":\"penny\",\"name\":\"penny\"},{\"id\":\"qitara\",\"name\":\"qitara\"},{\"id\":\"raelynn\",\"name\":\"raelynn\",\"tier\":\"epic\"},{\"id\":\"rocco\",\"name\":\"rocco\",\"tier\":\"epic\"},{\"id\":\"scoop\",\"name\":\"scoop\"},{\"id\":\"sentry\",\"name\":\"sentry\"},{\"id\":\"skree\",\"name\":\"skree\"},{\"id\":\"skrollder\",\"name\":\"skrollder\"},{\"id\":\"smiles\",\"name\":\"smiles\"},{\"id\":\"snork\",\"name\":\"snork\"},{\"id\":\"ted\",\"name\":\"ted\"},{\"id\":\"vinnie\",\"name\":\"vinnie\"},{\"id\":\"voltar\",\"name\":\"voltar\"},{\"id\":\"yoolip\",\"name\":\"yoolip\"},{\"id\":\"yuri\",\"name\":\"yuri\"}]");
    /***/
  },

  /***/
  "./src/app/services/mathmatical.json":
  /*!*******************************************!*\
    !*** ./src/app/services/mathmatical.json ***!
    \*******************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */

  /***/
  function srcAppServicesMathmaticalJson(module) {
    module.exports = JSON.parse("[{\"id\":\"admiral\",\"name\":\"admiral\",\"tier\":\"legendary\"},{\"id\":\"ayla\",\"name\":\"ayla\"},{\"id\":\"chucho\",\"name\":\"chucho\"},{\"id\":\"clunk\",\"name\":\"clunk\"},{\"id\":\"coco\",\"name\":\"coco\",\"tier\":\"legendary\"},{\"id\":\"commander\",\"name\":\"commander\"},{\"id\":\"deadlift\",\"name\":\"deadlift\"},{\"id\":\"derpl\",\"name\":\"derpl\"},{\"id\":\"dizzy\",\"name\":\"dizzy\"},{\"id\":\"froggy\",\"name\":\"froggy\"},{\"id\":\"genji\",\"name\":\"genji\"},{\"id\":\"gnaw\",\"name\":\"gnaw\"},{\"id\":\"ix\",\"name\":\"ix\"},{\"id\":\"jimmy\",\"name\":\"jimmy\",\"tier\":\"epic\"},{\"id\":\"ksenia\",\"name\":\"ksenia\"},{\"id\":\"leon\",\"name\":\"leon\"},{\"id\":\"lonestar\",\"name\":\"lonestar\",\"tier\":\"epic\"},{\"id\":\"max\",\"name\":\"max\",\"tier\":\"epic\"},{\"id\":\"nibbs\",\"name\":\"nibbs\"},{\"id\":\"penny\",\"name\":\"penny\"},{\"id\":\"qitara\",\"name\":\"qitara\"},{\"id\":\"raelynn\",\"name\":\"raelynn\"},{\"id\":\"rocco\",\"name\":\"rocco\"},{\"id\":\"scoop\",\"name\":\"scoop\"},{\"id\":\"sentry\",\"name\":\"sentry\",\"tier\":\"epic\"},{\"id\":\"skree\",\"name\":\"skree\"},{\"id\":\"skrollder\",\"name\":\"skrollder\",\"tier\":\"epic\"},{\"id\":\"smiles\",\"name\":\"smiles\"},{\"id\":\"snork\",\"name\":\"snork\"},{\"id\":\"ted\",\"name\":\"ted\"},{\"id\":\"vinnie\",\"name\":\"vinnie\"},{\"id\":\"voltar\",\"name\":\"voltar\"},{\"id\":\"yoolip\",\"name\":\"yoolip\",\"tier\":\"legendary\"},{\"id\":\"yuri\",\"name\":\"yuri\"}]");
    /***/
  },

  /***/
  "./src/app/services/mlripper.json":
  /*!****************************************!*\
    !*** ./src/app/services/mlripper.json ***!
    \****************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */

  /***/
  function srcAppServicesMlripperJson(module) {
    module.exports = JSON.parse("[{\"id\":\"admiral\",\"name\":\"admiral\"},{\"id\":\"ayla\",\"name\":\"ayla\"},{\"id\":\"chucho\",\"name\":\"chucho\",\"tier\":\"epic\"},{\"id\":\"clunk\",\"name\":\"clunk\"},{\"id\":\"coco\",\"name\":\"coco\"},{\"id\":\"commander\",\"name\":\"commander\"},{\"id\":\"deadlift\",\"name\":\"deadlift\"},{\"id\":\"derpl\",\"name\":\"derpl\",\"tier\":\"epic\"},{\"id\":\"dizzy\",\"name\":\"dizzy\"},{\"id\":\"froggy\",\"name\":\"froggy\"},{\"id\":\"genji\",\"name\":\"genji\",\"tier\":\"epic\"},{\"id\":\"gnaw\",\"name\":\"gnaw\"},{\"id\":\"ix\",\"name\":\"ix\"},{\"id\":\"jimmy\",\"name\":\"jimmy\"},{\"id\":\"ksenia\",\"name\":\"ksenia\"},{\"id\":\"leon\",\"name\":\"leon\",\"tier\":\"epic\"},{\"id\":\"lonestar\",\"name\":\"lonestar\"},{\"id\":\"max\",\"name\":\"max\"},{\"id\":\"nibbs\",\"name\":\"nibbs\"},{\"id\":\"penny\",\"name\":\"penny\"},{\"id\":\"qitara\",\"name\":\"qitara\",\"tier\":\"epic\"},{\"id\":\"raelynn\",\"name\":\"raelynn\",\"tier\":\"legendary\"},{\"id\":\"rocco\",\"name\":\"rocco\"},{\"id\":\"scoop\",\"name\":\"scoop\"},{\"id\":\"sentry\",\"name\":\"sentry\"},{\"id\":\"skree\",\"name\":\"skree\",\"tier\":\"legendary\"},{\"id\":\"skrollder\",\"name\":\"skrollder\"},{\"id\":\"smiles\",\"name\":\"smiles\"},{\"id\":\"snork\",\"name\":\"snork\"},{\"id\":\"ted\",\"name\":\"ted\"},{\"id\":\"vinnie\",\"name\":\"vinnie\",\"tier\":\"legendary\"},{\"id\":\"voltar\",\"name\":\"voltar\"},{\"id\":\"yoolip\",\"name\":\"yoolip\"},{\"id\":\"yuri\",\"name\":\"yuri\"}]");
    /***/
  },

  /***/
  "./src/app/services/naut-data.json":
  /*!*****************************************!*\
    !*** ./src/app/services/naut-data.json ***!
    \*****************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */

  /***/
  function srcAppServicesNautDataJson(module) {
    module.exports = JSON.parse("[{\"id\":\"admiral\",\"name\":\"admiral\"},{\"id\":\"ayla\",\"name\":\"ayla\"},{\"id\":\"chucho\",\"name\":\"chucho\"},{\"id\":\"clunk\",\"name\":\"clunk\"},{\"id\":\"coco\",\"name\":\"coco\"},{\"id\":\"commander\",\"name\":\"commander\"},{\"id\":\"deadlift\",\"name\":\"deadlift\"},{\"id\":\"derpl\",\"name\":\"derpl\"},{\"id\":\"dizzy\",\"name\":\"dizzy\"},{\"id\":\"froggy\",\"name\":\"froggy\"},{\"id\":\"genji\",\"name\":\"genji\"},{\"id\":\"gnaw\",\"name\":\"gnaw\"},{\"id\":\"ix\",\"name\":\"ix\"},{\"id\":\"jimmy\",\"name\":\"jimmy\"},{\"id\":\"ksenia\",\"name\":\"ksenia\"},{\"id\":\"leon\",\"name\":\"leon\"},{\"id\":\"lonestar\",\"name\":\"lonestar\"},{\"id\":\"max\",\"name\":\"max\"},{\"id\":\"nibbs\",\"name\":\"nibbs\"},{\"id\":\"penny\",\"name\":\"penny\"},{\"id\":\"qitara\",\"name\":\"qitara\"},{\"id\":\"raelynn\",\"name\":\"raelynn\"},{\"id\":\"rocco\",\"name\":\"rocco\"},{\"id\":\"scoop\",\"name\":\"scoop\"},{\"id\":\"sentry\",\"name\":\"sentry\"},{\"id\":\"skree\",\"name\":\"skree\"},{\"id\":\"skrollder\",\"name\":\"skrollder\"},{\"id\":\"smiles\",\"name\":\"smiles\"},{\"id\":\"snork\",\"name\":\"snork\"},{\"id\":\"ted\",\"name\":\"ted\"},{\"id\":\"vinnie\",\"name\":\"vinnie\"},{\"id\":\"voltar\",\"name\":\"voltar\"},{\"id\":\"yoolip\",\"name\":\"yoolip\"},{\"id\":\"yuri\",\"name\":\"yuri\"}]");
    /***/
  },

  /***/
  "./src/app/services/naut-data.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/naut-data.service.ts ***!
    \***********************************************/

  /*! exports provided: NautDataService */

  /***/
  function srcAppServicesNautDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NautDataService", function () {
      return NautDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _naut_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./naut-data.json */
    "./src/app/services/naut-data.json");

    var _naut_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./naut-data.json */
    "./src/app/services/naut-data.json", 1);
    /* harmony import */


    var _hasp_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hasp.json */
    "./src/app/services/hasp.json");

    var _hasp_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./hasp.json */
    "./src/app/services/hasp.json", 1);
    /* harmony import */


    var _mathmatical_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mathmatical.json */
    "./src/app/services/mathmatical.json");

    var _mathmatical_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./mathmatical.json */
    "./src/app/services/mathmatical.json", 1);
    /* harmony import */


    var _mlripper_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mlripper.json */
    "./src/app/services/mlripper.json");

    var _mlripper_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./mlripper.json */
    "./src/app/services/mlripper.json", 1);
    /* harmony import */


    var _thynix_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./thynix.json */
    "./src/app/services/thynix.json");

    var _thynix_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./thynix.json */
    "./src/app/services/thynix.json", 1);

    var NautDataService = /*#__PURE__*/function () {
      function NautDataService() {
        _classCallCheck(this, NautDataService);

        this.allNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(_naut_data_json__WEBPACK_IMPORTED_MODULE_2___namespace, 'default', []);
        console.debug('nauts: ', this.allNauts);
      }

      _createClass(NautDataService, [{
        key: "getNautsForPlayer",
        value: function getNautsForPlayer(player) {
          var playerNauts = [];

          if (player === 'hasp') {
            playerNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(_hasp_json__WEBPACK_IMPORTED_MODULE_3___namespace, 'default', []);
          }

          if (player === 'mathmatical') {
            playerNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(_mathmatical_json__WEBPACK_IMPORTED_MODULE_4___namespace, 'default', []);
          }

          if (player === 'mlripper') {
            playerNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(_mlripper_json__WEBPACK_IMPORTED_MODULE_5___namespace, 'default', []);
          }

          if (player === 'thynix') {
            playerNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(_thynix_json__WEBPACK_IMPORTED_MODULE_6___namespace, 'default', []);
          } // Remove any golden flags


          playerNauts.forEach(function (naut) {
            naut.isGolden = false;
          });
          return playerNauts;
        }
      }, {
        key: "getRandomNautsPack",
        value: function getRandomNautsPack(player) {
          var nauts = this.getNautsForPlayer(player);
          var legendaryNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(nauts, function (naut) {
            return naut.tier === 'legendary';
          }) || [];
          var epicNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(nauts, function (naut) {
            return naut.tier === 'epic';
          }) || [];
          var rareNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(nauts, function (naut) {
            return naut.tier !== 'legendary' && naut.tier !== 'epic' && naut.tier !== 'common';
          }) || [];
          var shuffledLegendaryNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["shuffle"])(legendaryNauts);
          var shuffledEpicNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["shuffle"])(epicNauts);
          var shuffledRareNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["shuffle"])(rareNauts);
          var nautPoolRolls = [Object(lodash__WEBPACK_IMPORTED_MODULE_1__["random"])(20), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["random"])(20), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["random"])(20), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["random"])(20), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["random"])(20)];
          var nautPool = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(nautPoolRolls, function (roll) {
            if (roll === 19) {
              return shuffledLegendaryNauts.pop();
            } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["includes"])([15, 16, 17, 18], roll)) {
              return shuffledEpicNauts.pop();
            } else {
              return shuffledRareNauts.pop();
            }
          });
          var hasLegendaryOrEpicNauts = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["some"])(nautPool, function (naut) {
            return naut && (naut.tier === 'legendary' || naut.tier === 'epic');
          });

          if (!hasLegendaryOrEpicNauts) {
            nautPool[0] = shuffledEpicNauts.pop();
          } // Add golden plating


          var goldPlatingIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["random"])(15);

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(nautPool[goldPlatingIndex]) && nautPool[goldPlatingIndex].tier !== 'legendary') {
            nautPool[goldPlatingIndex].isGolden = true;
          }

          return nautPool;
        }
      }]);

      return NautDataService;
    }();

    NautDataService.ɵfac = function NautDataService_Factory(t) {
      return new (t || NautDataService)();
    };

    NautDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NautDataService,
      factory: NautDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NautDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/thynix.json":
  /*!**************************************!*\
    !*** ./src/app/services/thynix.json ***!
    \**************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, default */

  /***/
  function srcAppServicesThynixJson(module) {
    module.exports = JSON.parse("[{\"id\":\"admiral\",\"name\":\"admiral\"},{\"id\":\"ayla\",\"name\":\"ayla\",\"tier\":\"legendary\"},{\"id\":\"chucho\",\"name\":\"chucho\",\"tier\":\"epic\"},{\"id\":\"clunk\",\"name\":\"clunk\"},{\"id\":\"coco\",\"name\":\"coco\"},{\"id\":\"commander\",\"name\":\"commander\"},{\"id\":\"deadlift\",\"name\":\"deadlift\"},{\"id\":\"derpl\",\"name\":\"derpl\",\"tier\":\"epic\"},{\"id\":\"dizzy\",\"name\":\"dizzy\"},{\"id\":\"froggy\",\"name\":\"froggy\"},{\"id\":\"genji\",\"name\":\"genji\"},{\"id\":\"gnaw\",\"name\":\"gnaw\",\"tier\":\"epic\"},{\"id\":\"ix\",\"name\":\"ix\"},{\"id\":\"jimmy\",\"name\":\"jimmy\"},{\"id\":\"ksenia\",\"name\":\"ksenia\"},{\"id\":\"leon\",\"name\":\"leon\"},{\"id\":\"lonestar\",\"name\":\"lonestar\"},{\"id\":\"max\",\"name\":\"max\"},{\"id\":\"nibbs\",\"name\":\"nibbs\"},{\"id\":\"penny\",\"name\":\"penny\"},{\"id\":\"qitara\",\"name\":\"qitara\"},{\"id\":\"raelynn\",\"name\":\"raelynn\"},{\"id\":\"rocco\",\"name\":\"rocco\",\"tier\":\"legendary\"},{\"id\":\"scoop\",\"name\":\"scoop\"},{\"id\":\"sentry\",\"name\":\"sentry\"},{\"id\":\"skree\",\"name\":\"skree\"},{\"id\":\"skrollder\",\"name\":\"skrollder\"},{\"id\":\"smiles\",\"name\":\"smiles\",\"tier\":\"epic\"},{\"id\":\"snork\",\"name\":\"snork\",\"tier\":\"legendary\"},{\"id\":\"ted\",\"name\":\"ted\",\"tier\":\"epic\"},{\"id\":\"vinnie\",\"name\":\"vinnie\"},{\"id\":\"voltar\",\"name\":\"voltar\"},{\"id\":\"yoolip\",\"name\":\"yoolip\"},{\"id\":\"yuri\",\"name\":\"yuri\"}]");
    /***/
  },

  /***/
  "./src/app/user-preferences/user-preferences.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/user-preferences/user-preferences.component.ts ***!
    \****************************************************************/

  /*! exports provided: UserPreferencesComponent */

  /***/
  function srcAppUserPreferencesUserPreferencesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPreferencesComponent", function () {
      return UserPreferencesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_naut_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/naut-data.service */
    "./src/app/services/naut-data.service.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _naut_naut_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../naut/naut.component */
    "./src/app/naut/naut.component.ts");

    function UserPreferencesComponent_mat_grid_tile_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ad-naut", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var naut_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", naut_r1.name)("src", "assets/nauts/" + naut_r1.id + ".png");
      }
    }

    var UserPreferencesComponent = /*#__PURE__*/function () {
      function UserPreferencesComponent(nautDataService) {
        _classCallCheck(this, UserPreferencesComponent);

        this.nautDataService = nautDataService;
      }

      _createClass(UserPreferencesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.displayNautList = this.nautDataService.allNauts;
        }
      }]);

      return UserPreferencesComponent;
    }();

    UserPreferencesComponent.ɵfac = function UserPreferencesComponent_Factory(t) {
      return new (t || UserPreferencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_naut_data_service__WEBPACK_IMPORTED_MODULE_1__["NautDataService"]));
    };

    UserPreferencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserPreferencesComponent,
      selectors: [["ad-user-preferences"]],
      decls: 3,
      vars: 1,
      consts: [[1, "naut-picker", "mat-body"], ["cols", "7", "rowHeight", "1:1", 1, "naut-picker__grid"], [4, "ngFor", "ngForOf"], [3, "name", "src"]],
      template: function UserPreferencesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserPreferencesComponent_mat_grid_tile_2_Template, 2, 2, "mat-grid-tile", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayNautList);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _naut_naut_component__WEBPACK_IMPORTED_MODULE_4__["NautComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJlZmVyZW5jZXMvdXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPreferencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ad-user-preferences',
          templateUrl: './user-preferences.component.html',
          styleUrls: ['./user-preferences.component.css']
        }]
      }], function () {
        return [{
          type: _services_naut_data_service__WEBPACK_IMPORTED_MODULE_1__["NautDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Documents\Pure Thought Labs\awesomenauts-drafter\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map