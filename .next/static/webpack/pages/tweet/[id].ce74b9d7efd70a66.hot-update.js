"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TweetDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useMutation */ \"./lib/client/useMutation.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction TweetDetail() {\n    var ref;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(router.query.id ? \"/api/tweets/\".concat(router.query.id) : null), data = ref1.data, mutate = ref1.mutate;\n    var ref2 = _slicedToArray((0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/tweets/\".concat(router.query.id, \"/fav\")), 1), toggleFav = ref2[0];\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-2xl uppercase text-center\",\n                children: \"Tweet contents\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-center text-xl\",\n                children: data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : ref.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    if (!data) return;\n                    mutate(_objectSpread({}, data, {\n                        isLiked: !data.isLiked\n                    }), false);\n                    toggleFav({});\n                },\n                className: \"text=xl bg-sky-500 p-2.5 m-auto w-full mt-10 uppercase rounded-lg hover:bg-sky-300 transition-colors text-red-600 font-bold\",\n                children: [\n                    (data === null || data === void 0 ? void 0 : data.isLiked) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"liked\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 27,\n                        columnNumber: 27\n                    }, this),\n                    (data === null || data === void 0 ? void 0 : data.isLiked) || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"not liked\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 28,\n                        columnNumber: 27\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n_s(TweetDetail, \"6Z7u+8f/Y3eaa5g+L/GqlY1FB5o=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = TweetDetail;\nvar _c;\n$RefreshReg$(_c, \"TweetDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2M7QUFDZjtBQUM4Qjs7QUFFeEMsU0FBU0ksV0FBVyxHQUFHO1FBWVVDLEdBQVc7O0lBWHpELElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixJQUF5QkMsSUFFeEIsR0FGd0JBLCtDQUFNLENBQzdCSSxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsRUFBRSxHQUFHLGNBQWEsQ0FBa0IsT0FBaEJGLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxFQUFFLENBQUUsR0FBRyxJQUFJLENBQzFELEVBRk9ILElBQUksR0FBYUgsSUFFeEIsQ0FGT0csSUFBSSxFQUFFSSxNQUFNLEdBQUtQLElBRXhCLENBRmFPLE1BQU07SUFHcEIsSUFBb0JOLElBQWlELGtCQUFqREEsbUVBQVcsQ0FBQyxjQUFhLENBQWtCLE1BQUksQ0FBcEJHLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxFQUFFLEVBQUMsTUFBSSxDQUFDLENBQUMsTUFBOURFLFNBQVMsR0FBSVAsSUFBaUQsR0FBckQ7SUFFaEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxJQUFJLENBQUMsQ0FBQztJQUVsQixxQkFDRSw4REFBQ1EsS0FBRzs7MEJBQ0YsOERBQUNBLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxnQ0FBZ0M7MEJBQUMsZ0JBQWM7Ozs7O29CQUFNOzBCQUNwRSw4REFBQ0MsR0FBQztnQkFBQ0QsU0FBUyxFQUFDLDJCQUEyQjswQkFBRVQsSUFBSSxhQUFKQSxJQUFJLFdBQU8sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxDQUFBQSxHQUFXLEdBQVhBLElBQUksQ0FBRVcsS0FBSyxjQUFYWCxHQUFXLGNBQVhBLEtBQUFBLENBQVcsR0FBWEEsR0FBVyxDQUFFWSxPQUFPOzs7OztvQkFBSzswQkFDbkUsOERBQUNDLFFBQU07Z0JBQ0xDLE9BQU8sRUFBRSxXQUFNO29CQUNiLElBQUksQ0FBQ2QsSUFBSSxFQUFFLE9BQU87b0JBQ2xCSSxNQUFNLENBQUMsa0JBQUtKLElBQUk7d0JBQUVlLE9BQU8sRUFBRSxDQUFDZixJQUFJLENBQUNlLE9BQU87c0JBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDbkRWLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDZjtnQkFDREksU0FBUyxFQUFDLDZIQUE2SDs7b0JBRXRJVCxDQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBUyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLElBQUksQ0FBRWUsT0FBTyxtQkFBSSw4REFBQ0wsR0FBQztrQ0FBQyxPQUFLOzs7Ozs0QkFBSTtvQkFDN0JWLENBQUFBLElBQUksYUFBSkEsSUFBSSxXQUFTLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsSUFBSSxDQUFFZSxPQUFPLG1CQUFJLDhEQUFDTCxHQUFDO2tDQUFDLFdBQVM7Ozs7OzRCQUFJOzs7Ozs7b0JBQzNCOzs7Ozs7WUFDTCxDQUNOO0NBQ0g7R0ExQnVCWCxXQUFXOztRQUNsQkgsa0RBQVM7UUFDQ0MsMkNBQU07UUFHWEMsK0RBQVc7OztBQUxUQyxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0L1tpZF0udHN4P2YzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB1c2VNdXRhdGlvbiBmcm9tIFwiLi4vLi4vbGliL2NsaWVudC91c2VNdXRhdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdlZXREZXRhaWwoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUgfSA9IHVzZVNXUihcclxuICAgIHJvdXRlci5xdWVyeS5pZCA/IGAvYXBpL3R3ZWV0cy8ke3JvdXRlci5xdWVyeS5pZH1gIDogbnVsbFxyXG4gICk7XHJcbiAgY29uc3QgW3RvZ2dsZUZhdl0gPSB1c2VNdXRhdGlvbihgL2FwaS90d2VldHMvJHtyb3V0ZXIucXVlcnkuaWR9L2ZhdmApO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdXBwZXJjYXNlIHRleHQtY2VudGVyXCI+VHdlZXQgY29udGVudHM8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMTAgdGV4dC1jZW50ZXIgdGV4dC14bFwiPntkYXRhPy50d2VldD8uY29udGVudH08L3A+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcclxuICAgICAgICAgIG11dGF0ZSh7IC4uLmRhdGEsIGlzTGlrZWQ6ICFkYXRhLmlzTGlrZWQgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgdG9nZ2xlRmF2KHt9KTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQ9eGwgYmctc2t5LTUwMCBwLTIuNSBtLWF1dG8gdy1mdWxsIG10LTEwIHVwcGVyY2FzZSByb3VuZGVkLWxnIGhvdmVyOmJnLXNreS0zMDAgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1yZWQtNjAwIGZvbnQtYm9sZFwiXHJcbiAgICAgID5cclxuICAgICAgICB7ZGF0YT8uaXNMaWtlZCAmJiA8cD5saWtlZDwvcD59XHJcbiAgICAgICAge2RhdGE/LmlzTGlrZWQgfHwgPHA+bm90IGxpa2VkPC9wPn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInVzZVNXUiIsInVzZU11dGF0aW9uIiwiVHdlZXREZXRhaWwiLCJkYXRhIiwicm91dGVyIiwicXVlcnkiLCJpZCIsIm11dGF0ZSIsInRvZ2dsZUZhdiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidHdlZXQiLCJjb250ZW50IiwiYnV0dG9uIiwib25DbGljayIsImlzTGlrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});