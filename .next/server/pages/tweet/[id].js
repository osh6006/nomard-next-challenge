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
exports.id = "pages/tweet/[id]";
exports.ids = ["pages/tweet/[id]"];
exports.modules = {

/***/ "./lib/client/useMutation.tsx":
/*!************************************!*\
  !*** ./lib/client/useMutation.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useMutation)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useMutation(url) {\n    const { 0: state , 1: setSate  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        loading: false,\n        data: undefined,\n        error: undefined\n    });\n    function mutation(data1) {\n        setSate((prev)=>({\n                ...prev,\n                loading: true\n            })\n        );\n        fetch(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data1)\n        }).then((response)=>response.json().catch(()=>{})\n        ).then((data)=>setSate((prev)=>({\n                    ...prev,\n                    data\n                })\n            )\n        ).catch((error)=>setSate((prev)=>({\n                    ...prev,\n                    error\n                })\n            )\n        ).finally(()=>setSate((prev)=>({\n                    ...prev,\n                    loading: false\n                })\n            )\n        );\n    }\n    return [\n        mutation,\n        {\n            ...state\n        }\n    ];\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZU11dGF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFTbEIsU0FBU0MsV0FBVyxDQUFDQyxHQUFXLEVBQXFCO0lBQ2xFLE1BQU0sRUFWUixHQVVTQyxLQUFLLEdBVmQsR0FVZ0JDLE9BQU8sTUFBSUosK0NBQVEsQ0FBbUI7UUFDbERLLE9BQU8sRUFBRSxLQUFLO1FBQ2RDLElBQUksRUFBRUMsU0FBUztRQUNmQyxLQUFLLEVBQUVELFNBQVM7S0FDakIsQ0FBQztJQUNGLFNBQVNFLFFBQVEsQ0FBQ0gsS0FBUyxFQUFFO1FBQzNCRixPQUFPLENBQUNNLENBQUFBLElBQUksR0FBSSxDQUFDO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUVMLE9BQU8sRUFBRSxJQUFJO2FBQUUsQ0FBQztRQUFBLENBQUMsQ0FBQztRQUM5Q00sS0FBSyxDQUFDVCxHQUFHLEVBQUU7WUFDVFUsTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1YsS0FBSSxDQUFDO1NBQzNCLENBQUMsQ0FDQ1csSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLENBQUNDLEtBQUssQ0FBQyxJQUFNLEVBQUUsQ0FBQztRQUFBLENBQUMsQ0FDakRILElBQUksQ0FBQ1gsQ0FBQUEsSUFBSSxHQUFJRixPQUFPLENBQUNNLENBQUFBLElBQUksR0FBSSxDQUFDO29CQUFFLEdBQUdBLElBQUk7b0JBQUVKLElBQUk7aUJBQUUsQ0FBQztZQUFBLENBQUM7UUFBQSxDQUFDLENBQ2xEYyxLQUFLLENBQUNaLENBQUFBLEtBQUssR0FBSUosT0FBTyxDQUFDTSxDQUFBQSxJQUFJLEdBQUksQ0FBQztvQkFBRSxHQUFHQSxJQUFJO29CQUFFRixLQUFLO2lCQUFFLENBQUM7WUFBQSxDQUFDO1FBQUEsQ0FBQyxDQUNyRGEsT0FBTyxDQUFDLElBQU1qQixPQUFPLENBQUNNLENBQUFBLElBQUksR0FBSSxDQUFDO29CQUFFLEdBQUdBLElBQUk7b0JBQUVMLE9BQU8sRUFBRSxLQUFLO2lCQUFFLENBQUM7WUFBQSxDQUFDO1FBQUEsQ0FBQyxDQUFDO0tBQ2xFO0lBQ0QsT0FBTztRQUFDSSxRQUFRO1FBQUU7WUFBRSxHQUFHTixLQUFLO1NBQUU7S0FBQyxDQUFDO0NBQ2pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi9jbGllbnQvdXNlTXV0YXRpb24udHN4PzA2MWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBVc2VNdXRhdGlvblN0YXRlIHtcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIGRhdGE/OiBhbnk7XHJcbiAgZXJyb3I/OiBvYmplY3Q7XHJcbn1cclxudHlwZSBVc2VNdXRhdGlvblJlc3VsdCA9IFsoZGF0YTogYW55KSA9PiB2b2lkLCBVc2VNdXRhdGlvblN0YXRlXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU11dGF0aW9uKHVybDogc3RyaW5nKTogVXNlTXV0YXRpb25SZXN1bHQge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U2F0ZV0gPSB1c2VTdGF0ZTxVc2VNdXRhdGlvblN0YXRlPih7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IHVuZGVmaW5lZCxcclxuICAgIGVycm9yOiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gbXV0YXRpb24oZGF0YTogYW55KSB7XHJcbiAgICBzZXRTYXRlKHByZXYgPT4gKHsgLi4ucHJldiwgbG9hZGluZzogdHJ1ZSB9KSk7XHJcbiAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiB7fSkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4gc2V0U2F0ZShwcmV2ID0+ICh7IC4uLnByZXYsIGRhdGEgfSkpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gc2V0U2F0ZShwcmV2ID0+ICh7IC4uLnByZXYsIGVycm9yIH0pKSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0U2F0ZShwcmV2ID0+ICh7IC4uLnByZXYsIGxvYWRpbmc6IGZhbHNlIH0pKSk7XHJcbiAgfVxyXG4gIHJldHVybiBbbXV0YXRpb24sIHsgLi4uc3RhdGUgfV07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTXV0YXRpb24iLCJ1cmwiLCJzdGF0ZSIsInNldFNhdGUiLCJsb2FkaW5nIiwiZGF0YSIsInVuZGVmaW5lZCIsImVycm9yIiwibXV0YXRpb24iLCJwcmV2IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJmaW5hbGx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/client/useMutation.tsx\n");

/***/ }),

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TweetDetail)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/client/useMutation */ \"./lib/client/useMutation.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);\nswr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction TweetDetail() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(router.query.id ? `/api/tweets/${router.query.id}` : null);\n    const [toggleFav] = (0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(`/api/tweets/${router.query.id}/fav`);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-2xl uppercase text-center\",\n                children: \"Tweet contents\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 text-center text-xl\",\n                children: data?.tweet?.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    toggleFav({});\n                },\n                className: \"text=xl bg-sky-500 p-2.5 m-auto w-full mt-10 uppercase rounded-lg hover:bg-sky-300 transition-colors text-red-600 font-bold\",\n                children: [\n                    data?.isLiked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"liked\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 25,\n                        columnNumber: 27\n                    }, this),\n                    data?.isLiked || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"not liked\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                        lineNumber: 26,\n                        columnNumber: 27\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\tweet\\\\[id].tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNjO0FBQ2Y7QUFDOEI7QUFFeEMsU0FBU0ksV0FBVyxHQUFHO0lBQ3BDLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixNQUFNLEVBQUVLLElBQUksR0FBRSxHQUFHSiwrQ0FBTSxDQUNyQkcsTUFBTSxDQUFDRSxLQUFLLENBQUNDLEVBQUUsR0FBRyxDQUFDLFlBQVksRUFBRUgsTUFBTSxDQUFDRSxLQUFLLENBQUNDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUMxRDtJQUNELE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLEdBQUdOLG1FQUFXLENBQUMsQ0FBQyxZQUFZLEVBQUVFLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckVFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJLENBQUMsQ0FBQztJQUVsQixxQkFDRSw4REFBQ00sS0FBRzs7MEJBQ0YsOERBQUNBLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxnQ0FBZ0M7MEJBQUMsZ0JBQWM7Ozs7O29CQUFNOzBCQUNwRSw4REFBQ0MsR0FBQztnQkFBQ0QsU0FBUyxFQUFDLDJCQUEyQjswQkFBRVAsSUFBSSxFQUFFUyxLQUFLLEVBQUVDLE9BQU87Ozs7O29CQUFLOzBCQUNuRSw4REFBQ0MsUUFBTTtnQkFDTEMsT0FBTyxFQUFFLElBQU07b0JBQ2JULFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDZjtnQkFDREksU0FBUyxFQUFDLDZIQUE2SDs7b0JBRXRJUCxJQUFJLEVBQUVhLE9BQU8sa0JBQUksOERBQUNMLEdBQUM7a0NBQUMsT0FBSzs7Ozs7NEJBQUk7b0JBQzdCUixJQUFJLEVBQUVhLE9BQU8sa0JBQUksOERBQUNMLEdBQUM7a0NBQUMsV0FBUzs7Ozs7NEJBQUk7Ozs7OztvQkFDM0I7Ozs7OztZQUNMLENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgdXNlTXV0YXRpb24gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnQvdXNlTXV0YXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFR3ZWV0RGV0YWlsKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKFxyXG4gICAgcm91dGVyLnF1ZXJ5LmlkID8gYC9hcGkvdHdlZXRzLyR7cm91dGVyLnF1ZXJ5LmlkfWAgOiBudWxsXHJcbiAgKTtcclxuICBjb25zdCBbdG9nZ2xlRmF2XSA9IHVzZU11dGF0aW9uKGAvYXBpL3R3ZWV0cy8ke3JvdXRlci5xdWVyeS5pZH0vZmF2YCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB1cHBlcmNhc2UgdGV4dC1jZW50ZXJcIj5Ud2VldCBjb250ZW50czwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC0xMCB0ZXh0LWNlbnRlciB0ZXh0LXhsXCI+e2RhdGE/LnR3ZWV0Py5jb250ZW50fTwvcD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHRvZ2dsZUZhdih7fSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0PXhsIGJnLXNreS01MDAgcC0yLjUgbS1hdXRvIHctZnVsbCBtdC0xMCB1cHBlcmNhc2Ugcm91bmRlZC1sZyBob3ZlcjpiZy1za3ktMzAwIHRyYW5zaXRpb24tY29sb3JzIHRleHQtcmVkLTYwMCBmb250LWJvbGRcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2RhdGE/LmlzTGlrZWQgJiYgPHA+bGlrZWQ8L3A+fVxyXG4gICAgICAgIHtkYXRhPy5pc0xpa2VkIHx8IDxwPm5vdCBsaWtlZDwvcD59XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJ1c2VNdXRhdGlvbiIsIlR3ZWV0RGV0YWlsIiwicm91dGVyIiwiZGF0YSIsInF1ZXJ5IiwiaWQiLCJ0b2dnbGVGYXYiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInR3ZWV0IiwiY29udGVudCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpc0xpa2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/tweet/[id].tsx"));
module.exports = __webpack_exports__;

})();