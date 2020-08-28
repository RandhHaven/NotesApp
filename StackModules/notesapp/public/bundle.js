/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\src\\\\app.js: Support for the experimental syntax 'jsx' isn't currently enabled (14:5):\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m\\u001b[36mfunction\\u001b[39m \\u001b[33mApp\\u001b[39m() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m  \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mNavbar\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"container\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mRoute\\u001b[39m path\\u001b[33m=\\u001b[39m\\u001b[32m'/'\\u001b[39m exact component \\u001b[33m=\\u001b[39m { \\u001b[33mNotesList\\u001b[39m }  \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\nAdd @babel/plugin-transform-react-jsx (https://git.io/vb4yd) to the 'plugins' section of your Babel config to enable transformation.\\n    at Parser._raise (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:764:17)\\n    at Parser.raiseWithData (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:757:17)\\n    at Parser.expectOnePlugin (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8942:18)\\n    at Parser.parseExprAtom (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10221:22)\\n    at Parser.parseExprSubscripts (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9789:23)\\n    at Parser.parseUpdate (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9769:21)\\n    at Parser.parseMaybeUnary (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9758:17)\\n    at Parser.parseExprOps (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9628:23)\\n    at Parser.parseMaybeConditional (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9602:23)\\n    at Parser.parseMaybeAssign (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9565:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10418:28)\\n    at Parser.parseExprAtom (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10122:21)\\n    at Parser.parseExprSubscripts (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9789:23)\\n    at Parser.parseUpdate (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9769:21)\\n    at Parser.parseMaybeUnary (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9758:17)\\n    at Parser.parseExprOps (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9628:23)\\n    at Parser.parseMaybeConditional (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9602:23)\\n    at Parser.parseMaybeAssign (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9565:21)\\n    at Parser.parseExpression (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9517:23)\\n    at Parser.parseReturnStatement (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11700:28)\\n    at Parser.parseStatementContent (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11379:21)\\n    at Parser.parseStatement (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11331:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11913:25)\\n    at Parser.parseBlockBody (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11899:10)\\n    at Parser.parseBlock (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11883:10)\\n    at Parser.parseFunctionBody (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10901:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10884:10)\\n    at C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12053:12\\n    at Parser.withTopicForbiddingContext (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11206:14)\\n    at Parser.parseFunction (C:\\\\Proyectos\\\\Notes\\\\NotesApp\\\\stackmodules\\\\notesapp\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12052:10)\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });