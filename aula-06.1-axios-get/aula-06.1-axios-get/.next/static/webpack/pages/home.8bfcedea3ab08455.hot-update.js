"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/components/HomeContent/index.js":
/*!*********************************************!*\
  !*** ./src/components/HomeContent/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/HomeContent/HomeContent.module.css */ \"./src/components/HomeContent/HomeContent.module.css\");\n/* harmony import */ var _components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loading */ \"./src/components/Loading/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst HomeContent = ()=>{\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGames = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:4000/games\");\n                setGames(response.data.games);\n            // console.log(response.data.games)\n            } catch (error) {\n                console.error(error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchGames();\n    }, []);\n    const deleteGames = async (gameId)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"http://localhost:4000/games/\".concat(gameId));\n            if (response.status == 204) {\n                alert(\"O jogo excluido com sucesso\");\n                setGames(games.filter((game)=>game._id !== gameId));\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().homeContent),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().listGamesCard),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Lista de jogos\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().games),\n                        id: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().games),\n                        children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().listGames),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().gameImg),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"images/game_cd_cover.png\",\n                                            alt: \"Jogo em estoque\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().gameInfo),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: game.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Plataforma: \",\n                                                    game.descriptions.platform\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"G\\xeanero: \",\n                                                    game.descriptions.genre\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Classifica\\xe7\\xe3o: \",\n                                                    game.descriptions.rating\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Ano: \",\n                                                    game.year\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: [\n                                                    \"Pre\\xe7o:\",\n                                                    game.price.toLocaleString(\"pt-br\", {\n                                                        style: \"currency\",\n                                                        currency: \"BRL\"\n                                                    })\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnDel),\n                                                onClick: ()=>{\n                                                    const confirmed = window.confirm(\"Deseja memso excluir o jogo?\");\n                                                    if (confirmed) {\n                                                        deleteGames(game._id);\n                                                        return;\n                                                    }\n                                                },\n                                                children: \"Deletar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, game._id, true, {\n                                fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fatec-dsm3\\\\Desktop\\\\dw3-node-react\\\\aula-06.1-axios-get\\\\aula-06.1-axios-get\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(HomeContent, \"2cQCX88OnxZyMMKuL3+dr4HJtB4=\");\n_c = HomeContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeContent);\nvar _c;\n$RefreshReg$(_c, \"HomeContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lQ29udGVudC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUNsQjtBQUMyQztBQUNwQztBQUVqQyxNQUFNSyxjQUFjOztJQUNsQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsYUFBYTtZQUNqQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVQsaURBQVMsQ0FBQztnQkFDakNLLFNBQVNJLFNBQVNFLElBQUksQ0FBQ1AsS0FBSztZQUM1QixtQ0FBbUM7WUFDckMsRUFBRSxPQUFPUSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2hCLFNBQVU7Z0JBQ1JMLFdBQVc7WUFDYjtRQUNGO1FBQ0FDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sY0FBYyxPQUFPQztRQUN6QixJQUFJO1lBQ0YsTUFBTU4sV0FBVyxNQUFNVCx1REFBWSxDQUFDLCtCQUFzQyxPQUFQZTtZQUNuRSxJQUFJTixTQUFTUSxNQUFNLElBQUksS0FBSTtnQkFDekJDLE1BQU07Z0JBQ05iLFNBQVNELE1BQU1lLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsR0FBRyxLQUFLTjtZQUM3QztRQUNGLEVBQUUsT0FBT0gsT0FBTztZQUNkQyxRQUFRUyxHQUFHLENBQUNWO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDVztZQUFJQyxXQUFXdkIsbUdBQWtCO3NCQUVoQyw0RUFBQ3NCO2dCQUFJQyxXQUFXdkIscUdBQW9COztrQ0FFbEMsOERBQUNzQjt3QkFBSUMsV0FBV3ZCLDZGQUFZO2tDQUMxQiw0RUFBQzJCO3NDQUFHOzs7Ozs7Ozs7OztrQ0FFTiw4REFBQzFCLGdEQUFPQTt3QkFBQ0ksU0FBU0E7Ozs7OztrQ0FDbEIsOERBQUNpQjt3QkFBSUMsV0FBV3ZCLDZGQUFZO3dCQUFFNEIsSUFBSTVCLDZGQUFZO2tDQUUzQ0csTUFBTTBCLEdBQUcsQ0FBQyxDQUFDVixxQkFDViw4REFBQ1c7Z0NBQWtCUCxXQUFXdkIsaUdBQWdCOztrREFDNUMsOERBQUNzQjt3Q0FBSUMsV0FBV3ZCLCtGQUFjO2tEQUM1Qiw0RUFBQ2lDOzRDQUFJQyxLQUFJOzRDQUEyQkMsS0FBSTs7Ozs7Ozs7Ozs7a0RBRTFDLDhEQUFDYjt3Q0FBSUMsV0FBV3ZCLGdHQUFlOzswREFDN0IsOERBQUNxQzswREFBSWxCLEtBQUtPLEtBQUs7Ozs7OzswREFDZiw4REFBQ1k7O29EQUFHO29EQUFhbkIsS0FBS29CLFlBQVksQ0FBQ0MsUUFBUTs7Ozs7OzswREFDM0MsOERBQUNGOztvREFBRztvREFBU25CLEtBQUtvQixZQUFZLENBQUNFLEtBQUs7Ozs7Ozs7MERBQ3BDLDhEQUFDSDs7b0RBQUc7b0RBQWdCbkIsS0FBS29CLFlBQVksQ0FBQ0csTUFBTTs7Ozs7OzswREFDNUMsOERBQUNKOztvREFBRztvREFBTW5CLEtBQUt3QixJQUFJOzs7Ozs7OzBEQUNuQiw4REFBQ0w7O29EQUFHO29EQUVEbkIsS0FBS3lCLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLFNBQVM7d0RBQ2xDQyxPQUFPO3dEQUNQQyxVQUFVO29EQUNaOzs7Ozs7OzBEQUdGLDhEQUFDQztnREFBT3pCLFdBQVd2Qiw4RkFBYTtnREFBRWtELFNBQVM7b0RBQ3pDLE1BQU1DLFlBQVlDLE9BQU9DLE9BQU8sQ0FBQztvREFDakMsSUFBR0YsV0FBVTt3REFDWHRDLFlBQVlNLEtBQUtDLEdBQUc7d0RBQ3BCO29EQUNGO2dEQUNGOzBEQUFHOzs7Ozs7Ozs7Ozs7OytCQXhCRUQsS0FBS0MsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDL0I7R0E3RU1sQjtLQUFBQTtBQStFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lQ29udGVudC9pbmRleC5qcz9lMzZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL2NvbXBvbmVudHMvSG9tZUNvbnRlbnQvSG9tZUNvbnRlbnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vTG9hZGluZ1wiO1xyXG5cclxuY29uc3QgSG9tZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoR2FtZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ2FtZXNcIik7XHJcbiAgICAgICAgc2V0R2FtZXMocmVzcG9uc2UuZGF0YS5nYW1lcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5nYW1lcylcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoR2FtZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUdhbWVzID0gYXN5bmMgKGdhbWVJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9nYW1lcy8ke2dhbWVJZH1gKVxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwNCl7XHJcbiAgICAgICAgYWxlcnQoXCJPIGpvZ28gZXhjbHVpZG8gY29tIHN1Y2Vzc29cIilcclxuICAgICAgICBzZXRHYW1lcyhnYW1lcy5maWx0ZXIoZ2FtZSA9PiBnYW1lLl9pZCAhPT0gZ2FtZUlkKSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQ29udGVudH0+XHJcbiAgICAgICAgey8qIENBUkQgTElTVEEgREUgSk9HT1MgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0R2FtZXNDYXJkfT5cclxuICAgICAgICAgIHsvKiBUSVRMRSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICA8aDI+TGlzdGEgZGUgam9nb3M8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TG9hZGluZyBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lc30gaWQ9e3N0eWxlcy5nYW1lc30+XHJcbiAgICAgICAgICAgIHsvKiBMaXN0YSBkZSBqb2dvcyBpcsOhIGFxdWkgKi99XHJcbiAgICAgICAgICAgIHtnYW1lcy5tYXAoKGdhbWUpID0+IChcclxuICAgICAgICAgICAgICA8dWwga2V5PXtnYW1lLl9pZH0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdEdhbWVzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZUltZ30+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2dhbWVfY2RfY292ZXIucG5nXCIgYWx0PVwiSm9nbyBlbSBlc3RvcXVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57Z2FtZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+UGxhdGFmb3JtYToge2dhbWUuZGVzY3JpcHRpb25zLnBsYXRmb3JtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5Hw6puZXJvOiB7Z2FtZS5kZXNjcmlwdGlvbnMuZ2VucmV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPkNsYXNzaWZpY2HDp8Ojbzoge2dhbWUuZGVzY3JpcHRpb25zLnJhdGluZ308L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+QW5vOiB7Z2FtZS55ZWFyfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBQcmXDp286XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbWUucHJpY2UudG9Mb2NhbGVTdHJpbmcoXCJwdC1iclwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiQlJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBCb3TDo28gcGFyYSBFeGNsdWlyICovfVxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkRlbH0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKFwiRGVzZWphIG1lbXNvIGV4Y2x1aXIgbyBqb2dvP1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm1lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGVHYW1lcyhnYW1lLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19PkRlbGV0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVDb250ZW50O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInN0eWxlcyIsIkxvYWRpbmciLCJIb21lQ29udGVudCIsImdhbWVzIiwic2V0R2FtZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoR2FtZXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkZWxldGVHYW1lcyIsImdhbWVJZCIsImRlbGV0ZSIsInN0YXR1cyIsImFsZXJ0IiwiZmlsdGVyIiwiZ2FtZSIsIl9pZCIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhvbWVDb250ZW50IiwibGlzdEdhbWVzQ2FyZCIsInRpdGxlIiwiaDIiLCJpZCIsIm1hcCIsInVsIiwibGlzdEdhbWVzIiwiZ2FtZUltZyIsImltZyIsInNyYyIsImFsdCIsImdhbWVJbmZvIiwiaDMiLCJsaSIsImRlc2NyaXB0aW9ucyIsInBsYXRmb3JtIiwiZ2VucmUiLCJyYXRpbmciLCJ5ZWFyIiwicHJpY2UiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwiY3VycmVuY3kiLCJidXR0b24iLCJidG5EZWwiLCJvbkNsaWNrIiwiY29uZmlybWVkIiwid2luZG93IiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/HomeContent/index.js\n"));

/***/ })

});