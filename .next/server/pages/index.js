"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home() {\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    const onSubmit = (data)=>{\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 flex-1 w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(onSubmit),\n            className: \"w-full flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-4/5 sm:w-3/5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"tweet\", {\n                            required: true\n                        }),\n                        type: \"text\",\n                        id: \"search-dropdown\",\n                        placeholder: \"Write your mind\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"absolute top-0 right-0 px-2.5 py-[12px] text-xl font-medium text-white bg-sky-400 rounded-r-lg transition-colors hover:bg-sky-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            strokeWidth: 1.5,\n                            stroke: \"currentColor\",\n                            className: \"w-7 h-7\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDK0I7QUFNMUMsU0FBU0UsSUFBSSxHQUFHO0lBQzdCLE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxZQUFZLEdBQUUsR0FBR0gsd0RBQU8sRUFBWTtJQUN0RCxNQUFNSSxRQUFRLEdBQTRCQyxDQUFBQSxJQUFJLEdBQUk7UUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztLQUNuQjtJQUNELHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxxQkFBcUI7a0JBSWxDLDRFQUFDQyxNQUFJO1lBQ0hOLFFBQVEsRUFBRUQsWUFBWSxDQUFDQyxRQUFRLENBQUM7WUFDaENLLFNBQVMsRUFBQyw0QkFBNEI7c0JBRXRDLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMseUJBQXlCOztrQ0FDdEMsOERBQUNFLE9BQUs7d0JBQ0gsR0FBR1QsUUFBUSxDQUFDLE9BQU8sRUFBRTs0QkFBRVUsUUFBUSxFQUFFLElBQUk7eUJBQUUsQ0FBQzt3QkFDekNDLElBQUksRUFBQyxNQUFNO3dCQUNYQyxFQUFFLEVBQUMsaUJBQWlCO3dCQUNwQkMsV0FBVyxFQUFDLGlCQUFpQjt3QkFDN0JILFFBQVE7Ozs7OzRCQUNSO2tDQUNGLDhEQUFDSSxRQUFNO3dCQUNMSCxJQUFJLEVBQUMsUUFBUTt3QkFDYkosU0FBUyxFQUFDLHlNQUF5TTtrQ0FFbk4sNEVBQUNRLEtBQUc7NEJBQ0ZDLEtBQUssRUFBQyw0QkFBNEI7NEJBQ2xDQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEMsT0FBTyxFQUFDLFdBQVc7NEJBQ25CQyxXQUFXLEVBQUUsR0FBRzs0QkFDaEJDLE1BQU0sRUFBQyxjQUFjOzRCQUNyQmIsU0FBUyxFQUFDLFNBQVM7c0NBRW5CLDRFQUFDYyxNQUFJO2dDQUNIQyxhQUFhLEVBQUMsT0FBTztnQ0FDckJDLGNBQWMsRUFBQyxPQUFPO2dDQUN0QkMsQ0FBQyxFQUFDLDZGQUE2Rjs7Ozs7b0NBQy9GOzs7OztnQ0FDRTs7Ozs7NEJBQ0M7Ozs7OztvQkFDTDs7Ozs7Z0JBQ0Q7Ozs7O1lBQ0gsQ0FDTjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0sIFN1Ym1pdEhhbmRsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbnR5cGUgRm9ybURhdGEgPSB7XG4gIHR3ZWV0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm08Rm9ybURhdGE+KCk7XG4gIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPEZvcm1EYXRhPiA9IGRhdGEgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgZmxleC0xIHctZnVsbFwiPlxuICAgICAgey8qIGZldGNoIHR3ZWV0cyBmcm9tIGRiICovfVxuXG4gICAgICB7LyogYWRkIHR3ZWV0cyAqL31cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy00LzUgc206dy0zLzVcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInR3ZWV0XCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cInNlYXJjaC1kcm9wZG93blwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgbWluZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHB4LTIuNSBweS1bMTJweF0gdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLXNreS00MDAgcm91bmRlZC1yLWxnIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLXNreS0zMDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6YmctYmx1ZS02MDAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MS41fVxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgaC03XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNNiAxMkwzLjI2OSAzLjEyNkE1OS43NjggNTkuNzY4IDAgMDEyMS40ODUgMTIgNTkuNzcgNTkuNzcgMCAwMTMuMjcgMjAuODc2TDUuOTk5IDEyem0wIDBoNy41XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUZvcm0iLCJIb21lIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImlucHV0IiwicmVxdWlyZWQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();