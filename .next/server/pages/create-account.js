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
exports.id = "pages/create-account";
exports.ids = ["pages/create-account"];
exports.modules = {

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateAccount)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction CreateAccount() {\n    const { register , handleSubmit , watch , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();\n    const onSubmit = (data)=>console.log(data)\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 flex-1 w-full flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-3xl\",\n                children: \"CREATE ACCOUNT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                className: \"mt-10 w-4/5 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        id: \"email\",\n                        ...register(\"email\", {\n                            required: {\n                                value: true,\n                                message: \"This field is required\"\n                            }\n                        }),\n                        autoComplete: \"off\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-400\",\n                        children: errors?.email?.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"password\",\n                        ...register(\"password\", {\n                            required: {\n                                value: true,\n                                message: \"This field is required\"\n                            }\n                        }),\n                        autoComplete: \"off\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    errors.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-400\",\n                        children: errors?.password?.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"passwordConfirm\",\n                        children: \"Password Confirm\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"passwordConfirm\",\n                        ...register(\"passwordConfirm\", {\n                            required: {\n                                value: true,\n                                message: \"This field is required\"\n                            },\n                            validate: {\n                                passwordConfirm: (value)=>{\n                                    if (value !== watch(\"password\")) return \"Your passwords do no match\";\n                                }\n                            }\n                        }),\n                        autoComplete: \"off\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    errors.passwordConfirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-400\",\n                        children: errors?.passwordConfirm?.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-sky-500 rounded-lg py-3 hover:bg-sky-300 transition-colors font-bold\",\n                        children: \"REGISTER\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tjsan\\\\Downloads\\\\nextjs-prisma-typescript-tailwind-blueprint\\\\pages\\\\create-account.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXNFO0FBUXZELFNBQVNDLGFBQWEsR0FBRztJQUN0QyxNQUFNLEVBQ0pDLFFBQVEsR0FDUkMsWUFBWSxHQUNaQyxLQUFLLEdBQ0xDLFNBQVMsRUFBRSxFQUFFQyxNQUFNLEdBQUUsS0FDdEIsR0FBR04sd0RBQU8sRUFBaUI7SUFDNUIsTUFBTU8sUUFBUSxHQUFpQ0MsQ0FBQUEsSUFBSSxHQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0lBQUM7SUFFekUscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGdEQUFnRDs7MEJBQzdELDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsb0JBQW9COzBCQUFDLGdCQUFjOzs7OztvQkFBSzswQkFDdEQsOERBQUNFLE1BQUk7Z0JBQ0hQLFFBQVEsRUFBRUosWUFBWSxDQUFDSSxRQUFRLENBQUM7Z0JBQ2hDSyxTQUFTLEVBQUMsaUNBQWlDOztrQ0FFM0MsOERBQUNHLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxPQUFPO2tDQUFDLE9BQUs7Ozs7OzRCQUFRO2tDQUNwQyw4REFBQ0MsT0FBSzt3QkFDSkMsSUFBSSxFQUFDLE9BQU87d0JBQ1pDLEVBQUUsRUFBQyxPQUFPO3dCQUNULEdBQUdqQixRQUFRLENBQUMsT0FBTyxFQUFFOzRCQUNwQmtCLFFBQVEsRUFBRTtnQ0FBRUMsS0FBSyxFQUFFLElBQUk7Z0NBQUVDLE9BQU8sRUFBRSx3QkFBd0I7NkJBQUU7eUJBQzdELENBQUM7d0JBQ0ZDLFlBQVksRUFBQyxLQUFLOzs7Ozs0QkFDbEI7b0JBQ0RqQixNQUFNLENBQUNrQixLQUFLLGtCQUNYLDhEQUFDQyxHQUFDO3dCQUFDYixTQUFTLEVBQUMsY0FBYztrQ0FBRU4sTUFBTSxFQUFFa0IsS0FBSyxFQUFFRixPQUFPOzs7Ozs0QkFBSztrQ0FHMUQsOERBQUNQLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxVQUFVO2tDQUFDLFVBQVE7Ozs7OzRCQUFRO2tDQUMxQyw4REFBQ0MsT0FBSzt3QkFDSkMsSUFBSSxFQUFDLFVBQVU7d0JBQ2ZDLEVBQUUsRUFBQyxVQUFVO3dCQUNaLEdBQUdqQixRQUFRLENBQUMsVUFBVSxFQUFFOzRCQUN2QmtCLFFBQVEsRUFBRTtnQ0FBRUMsS0FBSyxFQUFFLElBQUk7Z0NBQUVDLE9BQU8sRUFBRSx3QkFBd0I7NkJBQUU7eUJBQzdELENBQUM7d0JBQ0ZDLFlBQVksRUFBQyxLQUFLOzs7Ozs0QkFDbEI7b0JBQ0RqQixNQUFNLENBQUNvQixRQUFRLGtCQUNkLDhEQUFDRCxHQUFDO3dCQUFDYixTQUFTLEVBQUMsY0FBYztrQ0FBRU4sTUFBTSxFQUFFb0IsUUFBUSxFQUFFSixPQUFPOzs7Ozs0QkFBSztrQ0FHN0QsOERBQUNQLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxpQkFBaUI7a0NBQUMsa0JBQWdCOzs7Ozs0QkFBUTtrQ0FDekQsOERBQUNDLE9BQUs7d0JBQ0pDLElBQUksRUFBQyxVQUFVO3dCQUNmQyxFQUFFLEVBQUMsaUJBQWlCO3dCQUNuQixHQUFHakIsUUFBUSxDQUFDLGlCQUFpQixFQUFFOzRCQUM5QmtCLFFBQVEsRUFBRTtnQ0FBRUMsS0FBSyxFQUFFLElBQUk7Z0NBQUVDLE9BQU8sRUFBRSx3QkFBd0I7NkJBQUU7NEJBQzVESyxRQUFRLEVBQUU7Z0NBQ1JDLGVBQWUsRUFBRVAsQ0FBQUEsS0FBSyxHQUFJO29DQUN4QixJQUFJQSxLQUFLLEtBQUtqQixLQUFLLENBQUMsVUFBVSxDQUFDLEVBQzdCLE9BQU8sNEJBQTRCLENBQUM7aUNBQ3ZDOzZCQUNGO3lCQUNGLENBQUM7d0JBQ0ZtQixZQUFZLEVBQUMsS0FBSzs7Ozs7NEJBQ2xCO29CQUNEakIsTUFBTSxDQUFDc0IsZUFBZSxrQkFDckIsOERBQUNILEdBQUM7d0JBQUNiLFNBQVMsRUFBQyxjQUFjO2tDQUFFTixNQUFNLEVBQUVzQixlQUFlLEVBQUVOLE9BQU87Ozs7OzRCQUFLO2tDQUdwRSw4REFBQ08sUUFBTTt3QkFDTFgsSUFBSSxFQUFDLFFBQVE7d0JBQ2JOLFNBQVMsRUFBQyx5RUFBeUU7a0NBQ3BGLFVBRUQ7Ozs7OzRCQUFTOzs7Ozs7b0JBQ0o7Ozs7OztZQUNILENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3g/NDUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtLCBTdWJtaXRIYW5kbGVyLCBGaWVsZEVycm9ycyB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmludGVyZmFjZSBSZWdpc3RlclZhbHVlIHtcclxuICBlbWFpbDogU3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBTdHJpbmc7XHJcbiAgcGFzc3dvcmRDb25maXJtOiBTdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUFjY291bnQoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICB3YXRjaCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICB9ID0gdXNlRm9ybTxSZWdpc3RlclZhbHVlPigpO1xyXG4gIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPFJlZ2lzdGVyVmFsdWU+ID0gZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgZmxleC0xIHctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsXCI+Q1JFQVRFIEFDQ09VTlQ8L2gxPlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm10LTEwIHctNC81IGZsZXggZmxleC1jb2wgZ2FwLTRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiIH0sXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPntlcnJvcnM/LmVtYWlsPy5tZXNzYWdlfTwvcD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIgfSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCI+e2Vycm9ycz8ucGFzc3dvcmQ/Lm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRDb25maXJtXCI+UGFzc3dvcmQgQ29uZmlybTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZENvbmZpcm1cIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRDb25maXJtXCIsIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiIH0sXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtOiB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHdhdGNoKFwicGFzc3dvcmRcIikpXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcIllvdXIgcGFzc3dvcmRzIGRvIG5vIG1hdGNoXCI7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvcnMucGFzc3dvcmRDb25maXJtICYmIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPntlcnJvcnM/LnBhc3N3b3JkQ29uZmlybT8ubWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1za3ktNTAwIHJvdW5kZWQtbGcgcHktMyBob3ZlcjpiZy1za3ktMzAwIHRyYW5zaXRpb24tY29sb3JzIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUkVHSVNURVJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsIkNyZWF0ZUFjY291bnQiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJhdXRvQ29tcGxldGUiLCJlbWFpbCIsInAiLCJwYXNzd29yZCIsInZhbGlkYXRlIiwicGFzc3dvcmRDb25maXJtIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/create-account.tsx"));
module.exports = __webpack_exports__;

})();