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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateAccount; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\nvar _s = $RefreshSig$();\nfunction CreateAccount() {\n    var ref, ref1, ref2;\n    _s();\n    var ref3 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)(), register = ref3.register, handleSubmit = ref3.handleSubmit, watch = ref3.watch, errors = ref3.formState.errors;\n    var onSubmit = function(data) {\n        return console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 flex-1 w-full flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-3xl\",\n                children: \"CREATE ACCOUNT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                className: \"mt-10 w-4/5 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"email\",\n                        id: \"email\"\n                    }, register(\"email\", {\n                        required: {\n                            value: true,\n                            message: \"This field is required\"\n                        }\n                    }), {\n                        autoComplete: \"off\"\n                    }), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    formErrors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-400\",\n                        children: formErrors === null || formErrors === void 0 ? void 0 : (ref = formErrors.email) === null || ref === void 0 ? void 0 : ref.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"password\",\n                        id: \"password\"\n                    }, register(\"password\", {\n                        required: {\n                            value: true,\n                            message: \"This field is required\"\n                        }\n                    }), {\n                        autoComplete: \"off\"\n                    }), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    formErrors.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-400\",\n                        children: formErrors === null || formErrors === void 0 ? void 0 : (ref1 = formErrors.password) === null || ref1 === void 0 ? void 0 : ref1.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"passwordConfirm\",\n                        children: \"Password Confirm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"password\",\n                        id: \"passwordConfirm\"\n                    }, register(\"passwordConfirm\", {\n                        required: {\n                            value: true,\n                            message: \"This field is required\"\n                        },\n                        validate: {\n                            passwordConfirm: function(value) {\n                                if (value !== watch(\"password\")) return \"Your passwords do no match\";\n                            }\n                        }\n                    }), {\n                        autoComplete: \"off\"\n                    }), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    formErrors.passwordConfirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-400\",\n                        children: formErrors === null || formErrors === void 0 ? void 0 : (ref2 = formErrors.passwordConfirm) === null || ref2 === void 0 ? void 0 : ref2.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-sky-500 rounded-lg py-3 hover:bg-sky-300 transition-colors font-bold\",\n                        children: \"REGISTER\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(CreateAccount, \"qF9J4eMAmxvPhPVVl3Nry7fjOzg=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = CreateAccount;\nvar _c;\n$RefreshReg$(_c, \"CreateAccount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxFQUFFOzRCQUFFQyxLQUFLLEVBQUUsSUFBSTs0QkFBRUMsT0FBTyxFQUFFLHdCQUF3Qjt5QkFBRTt3QkFDNURLLFFBQVEsRUFBRTs0QkFDUkMsZUFBZSxFQUFFUCxTQUFBQSxLQUFLLEVBQUk7Z0NBQ3hCLElBQUlBLEtBQUssS0FBS2pCLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFDN0IsT0FBTyw0QkFBNEIsQ0FBQzs2QkFDdkM7eUJBQ0Y7cUJBQ0YsQ0FBQzt3QkFDRm1CLFlBQVksRUFBQyxLQUFLOzs7Ozs0QkFDbEI7b0JBQ0R0QixVQUFVLENBQUMyQixlQUFlLGtCQUN6Qiw4REFBQ0gsR0FBQzt3QkFBQ2IsU0FBUyxFQUFDLGNBQWM7a0NBQUVYLFVBQVUsYUFBVkEsVUFBVSxXQUFpQixHQUEzQkEsS0FBQUEsQ0FBMkIsR0FBM0JBLENBQUFBLElBQTJCLEdBQTNCQSxVQUFVLENBQUUyQixlQUFlLGNBQTNCM0IsSUFBMkIsY0FBM0JBLEtBQUFBLENBQTJCLEdBQTNCQSxJQUEyQixDQUFFcUIsT0FBTzs7Ozs7NEJBQUs7a0NBR3hFLDhEQUFDTyxRQUFNO3dCQUNMWCxJQUFJLEVBQUMsUUFBUTt3QkFDYk4sU0FBUyxFQUFDLHlFQUF5RTtrQ0FDcEYsVUFFRDs7Ozs7NEJBQVM7Ozs7OztvQkFDSjs7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0dBdEV1QlosYUFBYTs7UUFNL0JELG9EQUFPOzs7QUFOV0MsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3g/NDUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtLCBTdWJtaXRIYW5kbGVyLCBGaWVsZEVycm9ycyB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmludGVyZmFjZSBSZWdpc3RlclZhbHVlIHtcclxuICBlbWFpbDogU3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBTdHJpbmc7XHJcbiAgcGFzc3dvcmRDb25maXJtOiBTdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUFjY291bnQoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICB3YXRjaCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybTxSZWdpc3RlclZhbHVlPigpO1xyXG4gIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPFJlZ2lzdGVyVmFsdWU+ID0gZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgZmxleC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsXCI+Q1JFQVRFIEFDQ09VTlQ8L2gxPlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm10LTEwIHctNC81IGZsZXggZmxleC1jb2wgZ2FwLTRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiIH0sXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Zm9ybUVycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj57Zm9ybUVycm9ycz8uZW1haWw/Lm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIiB9LFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Zvcm1FcnJvcnMucGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCI+e2Zvcm1FcnJvcnM/LnBhc3N3b3JkPy5tZXNzYWdlfTwvcD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkQ29uZmlybVwiPlBhc3N3b3JkIENvbmZpcm08L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRDb25maXJtXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkQ29uZmlybVwiLCB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIiB9LFxyXG4gICAgICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybTogdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB3YXRjaChcInBhc3N3b3JkXCIpKVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJZb3VyIHBhc3N3b3JkcyBkbyBubyBtYXRjaFwiO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Zm9ybUVycm9ycy5wYXNzd29yZENvbmZpcm0gJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCI+e2Zvcm1FcnJvcnM/LnBhc3N3b3JkQ29uZmlybT8ubWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1za3ktNTAwIHJvdW5kZWQtbGcgcHktMyBob3ZlcjpiZy1za3ktMzAwIHRyYW5zaXRpb24tY29sb3JzIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUkVHSVNURVJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsIkNyZWF0ZUFjY291bnQiLCJmb3JtRXJyb3JzIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImZvcm1TdGF0ZSIsImVycm9ycyIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInJlcXVpcmVkIiwidmFsdWUiLCJtZXNzYWdlIiwiYXV0b0NvbXBsZXRlIiwiZW1haWwiLCJwIiwicGFzc3dvcmQiLCJ2YWxpZGF0ZSIsInBhc3N3b3JkQ29uZmlybSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ })

});