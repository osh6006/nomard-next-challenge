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
exports.id = "pages/api/tweets/[id]/fav";
exports.ids = ["pages/api/tweets/[id]/fav"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRTdCLElBQUlFLElBQXNDLEVBQUVDLE1BQU0sQ0FBQ0YsRUFBRSxHQUFHQSxFQUFFLENBQUM7QUFFM0QsaUVBQWVBLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuZGIgPSBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGIiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withSession.ts":
/*!***********************************!*\
  !*** ./lib/server/withSession.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApiSession\": () => (/* binding */ withApiSession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookieOpts = {\n    cookieName: \"session\",\n    password: \"asdfffffffffalsdfjaslkfjlkasdfjkasdjkfasdlkjfsljadflasdkflkjsflkjfljk\"\n};\nfunction withApiSession(fn) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(fn, cookieOpts);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhTZXNzaW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTREO0FBRTVELE1BQU1DLFVBQVUsR0FBRztJQUNqQkMsVUFBVSxFQUFFLFNBQVM7SUFDckJDLFFBQVEsRUFDTix1RUFBdUU7Q0FDMUU7QUFFTSxTQUFTQyxjQUFjLENBQUNDLEVBQU8sRUFBRTtJQUN0QyxPQUFPTCwwRUFBdUIsQ0FBQ0ssRUFBRSxFQUFFSixVQUFVLENBQUMsQ0FBQztDQUNoRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvc2VydmVyL3dpdGhTZXNzaW9uLnRzPzZmNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uQXBpUm91dGUgfSBmcm9tIFwiaXJvbi1zZXNzaW9uL25leHRcIjtcclxuXHJcbmNvbnN0IGNvb2tpZU9wdHMgPSB7XHJcbiAgY29va2llTmFtZTogXCJzZXNzaW9uXCIsXHJcbiAgcGFzc3dvcmQ6XHJcbiAgICBcImFzZGZmZmZmZmZmZmFsc2RmamFzbGtmamxrYXNkZmprYXNkamtmYXNkbGtqZnNsamFkZmxhc2RrZmxranNmbGtqZmxqa1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBcGlTZXNzaW9uKGZuOiBhbnkpIHtcclxuICByZXR1cm4gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoZm4sIGNvb2tpZU9wdHMpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSIsImNvb2tpZU9wdHMiLCJjb29raWVOYW1lIiwicGFzc3dvcmQiLCJ3aXRoQXBpU2Vzc2lvbiIsImZuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/server/withSession.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withhandler.ts":
/*!***********************************!*\
  !*** ./lib/server/withhandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler(methods, fn, isPrivate) {\n    return async function(req, res) {\n        if (req.method && !methods.includes(req.method)) {\n            return res.status(405).end();\n        }\n        if (isPrivate && !req.session.user) {\n            return res.status(401).json({\n                ok: false,\n                error: \"plz login\"\n            });\n        }\n        try {\n            fn(req, res);\n        } catch (error) {\n            console.log(error);\n            return res.status(500).json({\n                error\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhoYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFHZSxTQUFTQSxXQUFXLENBQ2pDQyxPQUFpQixFQUNqQkMsRUFBdUQsRUFDdkRDLFNBQWtCLEVBQ2xCO0lBQ0EsT0FBTyxlQUFnQkMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtRQUNoRSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sSUFBSSxDQUFDTCxPQUFPLENBQUNNLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDRSxNQUFNLENBQVEsRUFBRTtZQUN0RCxPQUFPRCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJTixTQUFTLElBQUksQ0FBQ0MsR0FBRyxDQUFDTSxPQUFPLENBQUNDLElBQUksRUFBRTtZQUNsQyxPQUFPTixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFQyxFQUFFLEVBQUUsS0FBSztnQkFBRUMsS0FBSyxFQUFFLFdBQVc7YUFBRSxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJO1lBQ0ZaLEVBQUUsQ0FBQ0UsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztTQUNkLENBQUMsT0FBT1MsS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPVCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFRSxLQUFLO2FBQUUsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0YsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi9zZXJ2ZXIvd2l0aGhhbmRsZXIudHM/NzBiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxudHlwZSBtZXRob2QgPSBcIkdFVFwiIHwgXCJQT1NUXCIgfCBcIkRFTEVURVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhhbmRsZXIoXHJcbiAgbWV0aG9kczogbWV0aG9kW10sXHJcbiAgZm46IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4gdm9pZCxcclxuICBpc1ByaXZhdGU6IGJvb2xlYW5cclxuKSB7XHJcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgJiYgIW1ldGhvZHMuaW5jbHVkZXMocmVxLm1ldGhvZCBhcyBhbnkpKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNQcml2YXRlICYmICFyZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG9rOiBmYWxzZSwgZXJyb3I6IFwicGx6IGxvZ2luXCIgfSk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBmbihyZXEsIHJlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwibWV0aG9kcyIsImZuIiwiaXNQcml2YXRlIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJlbmQiLCJzZXNzaW9uIiwidXNlciIsImpzb24iLCJvayIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/server/withhandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/tweets/[id]/fav.ts":
/*!**************************************!*\
  !*** ./pages/api/tweets/[id]/fav.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_withhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/server/withhandler */ \"(api)/./lib/server/withhandler.ts\");\n/* harmony import */ var _lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/server/withSession */ \"(api)/./lib/server/withSession.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/db */ \"(api)/./lib/db.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function handler(req, res) {\n    const { query: { id  } , session: { user  } ,  } = req;\n    const alreadyExists = await _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].like.findFirst({\n        where: {\n            tweetId: +id.toString(),\n            authorId: user?.id\n        }\n    });\n    if (alreadyExists) {\n        await _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].like[\"delete\"]({\n            where: {\n                id: alreadyExists.id\n            }\n        });\n    } else {\n        await _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].like.create({\n            data: {\n                author: {\n                    connect: {\n                        id: user?.id\n                    }\n                },\n                tweet: {\n                    connect: {\n                        id: +id.toString()\n                    }\n                }\n            }\n        });\n    }\n    res.json({\n        ok: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withSession__WEBPACK_IMPORTED_MODULE_1__.withApiSession)((0,_lib_server_withhandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n    \"POST\"\n], handler, true)));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHdlZXRzL1tpZF0vZmF2LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNkQ7QUFDTztBQUNoQztBQUdwQyxlQUFlRyxPQUFPLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDaEUsTUFBTSxFQUNKQyxLQUFLLEVBQUUsRUFBRUMsRUFBRSxHQUFFLEdBQ2JDLE9BQU8sRUFBRSxFQUFFQyxJQUFJLEdBQUUsS0FDbEIsR0FBR0wsR0FBRztJQUNQLE1BQU1NLGFBQWEsR0FBRyxNQUFNUiw4REFBaUIsQ0FBQztRQUM1Q1csS0FBSyxFQUFFO1lBQ0xDLE9BQU8sRUFBRSxDQUFDUCxFQUFFLENBQUNRLFFBQVEsRUFBRTtZQUN2QkMsUUFBUSxFQUFFUCxJQUFJLEVBQUVGLEVBQUU7U0FDbkI7S0FDRixDQUFDO0lBQ0YsSUFBSUcsYUFBYSxFQUFFO1FBQ2pCLE1BQU1SLDhEQUFjLENBQUM7WUFDbkJXLEtBQUssRUFBRTtnQkFDTE4sRUFBRSxFQUFFRyxhQUFhLENBQUNILEVBQUU7YUFDckI7U0FDRixDQUFDLENBQUM7S0FDSixNQUFNO1FBQ0wsTUFBTUwsMkRBQWMsQ0FBQztZQUNuQmlCLElBQUksRUFBRTtnQkFDSkMsTUFBTSxFQUFFO29CQUNOQyxPQUFPLEVBQUU7d0JBQ1BkLEVBQUUsRUFBRUUsSUFBSSxFQUFFRixFQUFFO3FCQUNiO2lCQUNGO2dCQUNEZSxLQUFLLEVBQUU7b0JBQ0xELE9BQU8sRUFBRTt3QkFDUGQsRUFBRSxFQUFFLENBQUNBLEVBQUUsQ0FBQ1EsUUFBUSxFQUFFO3FCQUNuQjtpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRFYsR0FBRyxDQUFDa0IsSUFBSSxDQUFDO1FBQUVDLEVBQUUsRUFBRSxJQUFJO0tBQUUsQ0FBQyxDQUFDO0NBQ3hCO0FBRUQsaUVBQWV2Qix1RUFBYyxDQUFDRCxtRUFBVyxDQUFDO0lBQUMsTUFBTTtDQUFDLEVBQUVHLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS90d2VldHMvW2lkXS9mYXYudHM/YjliMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHdpdGhIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvc2VydmVyL3dpdGhoYW5kbGVyXCI7XHJcbmltcG9ydCB7IHdpdGhBcGlTZXNzaW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9zZXJ2ZXIvd2l0aFNlc3Npb25cIjtcclxuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvZGJcIjtcclxuaW1wb3J0IHR3ZWV0cyBmcm9tIFwiLi5cIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgc2Vzc2lvbjogeyB1c2VyIH0sXHJcbiAgfSA9IHJlcTtcclxuICBjb25zdCBhbHJlYWR5RXhpc3RzID0gYXdhaXQgZGIubGlrZS5maW5kRmlyc3Qoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgdHdlZXRJZDogK2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIGF1dGhvcklkOiB1c2VyPy5pZCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgaWYgKGFscmVhZHlFeGlzdHMpIHtcclxuICAgIGF3YWl0IGRiLmxpa2UuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogYWxyZWFkeUV4aXN0cy5pZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhd2FpdCBkYi5saWtlLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhdXRob3I6IHtcclxuICAgICAgICAgIGNvbm5lY3Q6IHtcclxuICAgICAgICAgICAgaWQ6IHVzZXI/LmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR3ZWV0OiB7XHJcbiAgICAgICAgICBjb25uZWN0OiB7XHJcbiAgICAgICAgICAgIGlkOiAraWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzLmpzb24oeyBvazogdHJ1ZSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwaVNlc3Npb24od2l0aEhhbmRsZXIoW1wiUE9TVFwiXSwgaGFuZGxlciwgdHJ1ZSkpO1xyXG4iXSwibmFtZXMiOlsid2l0aEhhbmRsZXIiLCJ3aXRoQXBpU2Vzc2lvbiIsImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJzZXNzaW9uIiwidXNlciIsImFscmVhZHlFeGlzdHMiLCJsaWtlIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJ0d2VldElkIiwidG9TdHJpbmciLCJhdXRob3JJZCIsImRlbGV0ZSIsImNyZWF0ZSIsImRhdGEiLCJhdXRob3IiLCJjb25uZWN0IiwidHdlZXQiLCJqc29uIiwib2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/tweets/[id]/fav.ts\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(\n      req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(\n      context.req,\n      context.res,\n      sessionOptions\n    );\n    Object.defineProperty(\n      context.req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMEJBQTBCLDREQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0Ysa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vbm9kZV9tb2R1bGVzL2lyb24tc2Vzc2lvbi9uZXh0L2Rpc3QvaW5kZXgubWpzP2M4YjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC9pbmRleC50c1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIHNyYy9nZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uLnRzXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzZXNzaW9uKTtcbiAgICAgIGN1cnJlbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2Vzc2lvbltrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbmV4dC9pbmRleC50c1xuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEFwaUhhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKHJlcSwgcmVzKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhyZXEsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgcmVxLFxuICAgICAgXCJzZXNzaW9uXCIsXG4gICAgICBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pXG4gICAgKTtcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XG4gIH07XG59XG5mdW5jdGlvbiB3aXRoSXJvblNlc3Npb25Tc3IoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEdldFNlcnZlclNpZGVQcm9wc0hhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2Vzc2lvbk9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBhd2FpdCBvcHRpb25zKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKFxuICAgICAgY29udGV4dC5yZXEsXG4gICAgICBjb250ZXh0LnJlcyxcbiAgICAgIHNlc3Npb25PcHRpb25zXG4gICAgKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICBjb250ZXh0LnJlcSxcbiAgICAgIFwic2Vzc2lvblwiLFxuICAgICAgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKVxuICAgICk7XG4gICAgcmV0dXJuIGhhbmRsZXIoY29udGV4dCk7XG4gIH07XG59XG5leHBvcnQge1xuICB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSxcbiAgd2l0aElyb25TZXNzaW9uU3NyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tweets/[id]/fav.ts"));
module.exports = __webpack_exports__;

})();