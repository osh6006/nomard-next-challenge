"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-account",{

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateAccount; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nvar _s = $RefreshSig$();\nfunction CreateAccount() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit;\n    var onSubmit = function(data) {\n        return console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 flex-1 w-full flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-3xl\",\n                children: \"CREATE ACCOUNT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                className: \"mt-10 w-4/5 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"email\",\n                        id: \"email\"\n                    }, register(\"email\", {\n                        required: true,\n                        maxLength: 20\n                    })), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"password\",\n                        id: \"password\"\n                    }, register(\"password\", {\n                        pattern: /^[A-Za-z]+$/i\n                    })), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"passwordConfirm\",\n                        children: \"Password Confirm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"password\",\n                        id: \"passwordConfirm\"\n                    }, register(\"passwordConfirm\", {\n                        pattern: /^[A-Za-z]+$/i\n                    })), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-sky-500 rounded-lg py-3 hover:bg-sky-300 transition-colors font-bold\",\n                        children: \"REGISTER\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n};\n_s(CreateAccount, \"zkd3JmxRK/AmyiWtSfciHeYO5Zk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = CreateAccount;\nvar _c;\n$RefreshReg$(_c, \"CreateAccount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDs7QUFRMUMsU0FBU0MsYUFBYSxHQUFHOztJQUN0QyxJQUFtQ0QsR0FBbUIsR0FBbkJBLHdEQUFPLEVBQVksRUFBOUNFLFFBQVEsR0FBbUJGLEdBQW1CLENBQTlDRSxRQUFRLEVBQUVDLFlBQVksR0FBS0gsR0FBbUIsQ0FBcENHLFlBQVk7SUFDOUIsSUFBTUMsUUFBUSxHQUE0QkMsU0FBQUEsSUFBSTtlQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0tBQUE7SUFDbkUscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGdEQUFnRDs7MEJBQzdELDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsb0JBQW9COzBCQUFDLGdCQUFjOzs7OztvQkFBSzswQkFDdEQsOERBQUNFLE1BQUk7Z0JBQ0hQLFFBQVEsRUFBRUQsWUFBWSxDQUFDQyxRQUFRLENBQUM7Z0JBQ2hDSyxTQUFTLEVBQUMsaUNBQWlDOztrQ0FFM0MsOERBQUNHLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxPQUFPO2tDQUFDLE9BQUs7Ozs7OzRCQUFRO2tDQUNwQyw4REFBQ0MsT0FBSzt3QkFDSkMsSUFBSSxFQUFDLE9BQU87d0JBQ1pDLEVBQUUsRUFBQyxPQUFPO3VCQUNOZCxRQUFRLENBQUMsT0FBTyxFQUFFO3dCQUFFZSxRQUFRLEVBQUUsSUFBSTt3QkFBRUMsU0FBUyxFQUFFLEVBQUU7cUJBQUUsQ0FBQzs7Ozs0QkFDeEQ7a0NBRUYsOERBQUNOLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxVQUFVO2tDQUFDLFVBQVE7Ozs7OzRCQUFRO2tDQUMxQyw4REFBQ0MsT0FBSzt3QkFDSkMsSUFBSSxFQUFDLFVBQVU7d0JBQ2ZDLEVBQUUsRUFBQyxVQUFVO3VCQUNUZCxRQUFRLENBQUMsVUFBVSxFQUFFO3dCQUFFaUIsT0FBTyxnQkFBZ0I7cUJBQUUsQ0FBQzs7Ozs0QkFDckQ7a0NBRUYsOERBQUNQLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxpQkFBaUI7a0NBQUMsa0JBQWdCOzs7Ozs0QkFBUTtrQ0FDekQsOERBQUNDLE9BQUs7d0JBQ0pDLElBQUksRUFBQyxVQUFVO3dCQUNmQyxFQUFFLEVBQUMsaUJBQWlCO3VCQUNoQmQsUUFBUSxDQUFDLGlCQUFpQixFQUFFO3dCQUFFaUIsT0FBTyxnQkFBZ0I7cUJBQUUsQ0FBQzs7Ozs0QkFDNUQ7a0NBRUYsOERBQUNDLFFBQU07d0JBQ0xMLElBQUksRUFBQyxRQUFRO3dCQUNiTixTQUFTLEVBQUMseUVBQXlFO2tDQUNwRixVQUVEOzs7Ozs0QkFBUzs7Ozs7O29CQUNKOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0F4Q3VCUixhQUFhOztRQUNBRCxvREFBTzs7O0FBRHBCQyxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS1hY2NvdW50LnRzeD80NTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5pbnRlcmZhY2UgUmVnaXN0ZXIge1xyXG4gIGVtYWlsOiBTdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IFN0cmluZztcclxuICBwYXNzd29yZENvbmZpcm06IFN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlQWNjb3VudCgpIHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm08UmVnaXN0ZXI+KCk7XHJcbiAgY29uc3Qgb25TdWJtaXQ6IFN1Ym1pdEhhbmRsZXI8UmVnaXN0ZXI+ID0gZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBmbGV4LTEgdy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIj5DUkVBVEUgQUNDT1VOVDwvaDE+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXQtMTAgdy00LzUgZmxleCBmbGV4LWNvbCBnYXAtNFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiAyMCB9KX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwgeyBwYXR0ZXJuOiAvXltBLVphLXpdKyQvaSB9KX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkQ29uZmlybVwiPlBhc3N3b3JkIENvbmZpcm08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRDb25maXJtXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkQ29uZmlybVwiLCB7IHBhdHRlcm46IC9eW0EtWmEtel0rJC9pIH0pfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2t5LTUwMCByb3VuZGVkLWxnIHB5LTMgaG92ZXI6Ymctc2t5LTMwMCB0cmFuc2l0aW9uLWNvbG9ycyBmb250LWJvbGRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJFR0lTVEVSXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJDcmVhdGVBY2NvdW50IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsInBhdHRlcm4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ })

});