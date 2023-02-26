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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateAccount; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nvar _s = $RefreshSig$();\nfunction CreateAccount() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, watch = ref.watch, errors = ref.formState.errors;\n    var onSubmit = function(data) {\n        return console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 flex-1 w-full flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-3xl\",\n                children: \"CREATE ACCOUNT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                className: \"mt-10 w-4/5 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"email\",\n                        id: \"email\"\n                    }, register(\"email\", {\n                        required: {\n                            value: true,\n                            message: \"This field is required\"\n                        }\n                    })), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-400\",\n                        children: errors.email.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 26\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"password\",\n                        id: \"password\"\n                    }, register(\"password\", {\n                        required: {\n                            value: true,\n                            message: \"This field is required\"\n                        }\n                    })), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    errors.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-400\",\n                        children: errors.password.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"passwordConfirm\",\n                        children: \"Password Confirm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"password\",\n                        id: \"passwordConfirm\"\n                    }, register(\"passwordConfirm\", {\n                        required: {\n                            value: true,\n                            message: \"This field is required\"\n                        },\n                        validate: {\n                            passwordConfirm: function(value) {\n                                if (value !== watch(\"password\")) return \"Your passwords do no match\";\n                            }\n                        }\n                    })), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    errors.passwordConfirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-400\",\n                        children: errors.passwordConfirm.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-sky-500 rounded-lg py-3 hover:bg-sky-300 transition-colors font-bold\",\n                        children: \"REGISTER\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(CreateAccount, \"qF9J4eMAmxvPhPVVl3Nry7fjOzg=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = CreateAccount;\nvar _c;\n$RefreshReg$(_c, \"CreateAccount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBSztrQ0FHbEUsOERBQUNNLFFBQU07d0JBQ0xWLElBQUksRUFBQyxRQUFRO3dCQUNiTixTQUFTLEVBQUMseUVBQXlFO2tDQUNwRixVQUVEOzs7Ozs0QkFBUzs7Ozs7O29CQUNKOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0FqRXVCWCxhQUFhOztRQU0vQkQsb0RBQU87OztBQU5XQyxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS1hY2NvdW50LnRzeD80NTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5pbnRlcmZhY2UgUmVnaXN0ZXIge1xyXG4gIGVtYWlsOiBTdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IFN0cmluZztcclxuICBwYXNzd29yZENvbmZpcm06IFN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlQWNjb3VudCgpIHtcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIHdhdGNoLFxyXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxyXG4gIH0gPSB1c2VGb3JtPFJlZ2lzdGVyPigpO1xyXG4gIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPFJlZ2lzdGVyPiA9IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGZsZXgtMSB3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPkNSRUFURSBBQ0NPVU5UPC9oMT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtdC0xMCB3LTQvNSBmbGV4IGZsZXgtY29sIGdhcC00XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIiB9LFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPntlcnJvcnMuZW1haWwubWVzc2FnZX08L3A+fVxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIgfSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj57ZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRDb25maXJtXCI+UGFzc3dvcmQgQ29uZmlybTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZENvbmZpcm1cIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRDb25maXJtXCIsIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiIH0sXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtOiB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHdhdGNoKFwicGFzc3dvcmRcIikpXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIllvdXIgcGFzc3dvcmRzIGRvIG5vIG1hdGNoXCI7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5wYXNzd29yZENvbmZpcm0gJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCI+e2Vycm9ycy5wYXNzd29yZENvbmZpcm0ubWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1za3ktNTAwIHJvdW5kZWQtbGcgcHktMyBob3ZlcjpiZy1za3ktMzAwIHRyYW5zaXRpb24tY29sb3JzIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUkVHSVNURVJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsIkNyZWF0ZUFjY291bnQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJlbWFpbCIsInAiLCJwYXNzd29yZCIsInZhbGlkYXRlIiwicGFzc3dvcmRDb25maXJtIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ })

});