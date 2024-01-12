/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/firebase/firebase.config.js":
/*!*****************************************!*\
  !*** ./src/firebase/firebase.config.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firebaseConfig: () => (/* binding */ firebaseConfig)
/* harmony export */ });
const firebaseConfig = {
    apiKey: "AIzaSyB7Ug-3NYdEsMiv0F4zdY-0HotZx4Amne4",
    authDomain: "pinoki-95a3d.firebaseapp.com",
    projectId: "pinoki-95a3d",
    storageBucket: "pinoki-95a3d.appspot.com",
    messagingSenderId: "286704140766",
    appId: "1:286704140766:web:0c7b96f06004384b655d4f",
    measurementId: "G-9WGMBNDE3W"
  };

// Initialize Firebase


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/database'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase/firebase.config */ "./src/firebase/firebase.config.js");
// import { ExtensionMessage } from "../@types/bg-cs-types";
// const connections: { [key: string]: chrome.runtime.Port } = {};
// chrome.runtime.onConnect.addListener((externalPort) => {
//   const extensionListener = (msg: ExtensionMessage, port: chrome.runtime.Port) => {
//     if (msg.action === 'getSelectedText') {
//       const selectedText = window.getSelection()?.toString();
//       externalPort.postMessage({ selectedText: selectedText });
//     }
//   };
//   externalPort.onDisconnect.addListener(() => {
//     externalPort.onMessage.removeListener(extensionListener);
//   });
//   externalPort.onMessage.addListener(extensionListener);
//   // Assign a unique ID to each connection
//   const connectionId = `${externalPort.sender?.id}-${externalPort.sender?.tab?.id}`;
//   connections[connectionId] = externalPort;
// });
// chrome.action.onClicked.addListener(tab => {
// })



// Initialize Firebase
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_1__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQSxZQUFZLG1CQUFtQjtBQUMvQix3QkFBd0IscUNBQXFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDRCQUE0QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsNkJBQTZCLHdCQUF3QixHQUFHLDZCQUE2QjtBQUNyRjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDZ0M7QUFDVDtBQUM4QjtBQUN6RDtBQUNBLDJJQUFzQixDQUFDLGlFQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dC8uL3NyYy9maXJlYmFzZS9maXJlYmFzZS5jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHQvLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUI3VWctM05ZZEVzTWl2MEY0emRZLTBIb3RaeDRBbW5lNFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJwaW5va2ktOTVhM2QuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwicGlub2tpLTk1YTNkXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInBpbm9raS05NWEzZC5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjg2NzA0MTQwNzY2XCIsXHJcbiAgICBhcHBJZDogXCIxOjI4NjcwNDE0MDc2Njp3ZWI6MGM3Yjk2ZjA2MDA0Mzg0YjY1NWQ0ZlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTlXR01CTkRFM1dcIlxyXG4gIH07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmV4cG9ydCB7IGZpcmViYXNlQ29uZmlnIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCB7IEV4dGVuc2lvbk1lc3NhZ2UgfSBmcm9tIFwiLi4vQHR5cGVzL2JnLWNzLXR5cGVzXCI7XHJcbi8vIGNvbnN0IGNvbm5lY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IGNocm9tZS5ydW50aW1lLlBvcnQgfSA9IHt9O1xyXG4vLyBjaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoKGV4dGVybmFsUG9ydCkgPT4ge1xyXG4vLyAgIGNvbnN0IGV4dGVuc2lvbkxpc3RlbmVyID0gKG1zZzogRXh0ZW5zaW9uTWVzc2FnZSwgcG9ydDogY2hyb21lLnJ1bnRpbWUuUG9ydCkgPT4ge1xyXG4vLyAgICAgaWYgKG1zZy5hY3Rpb24gPT09ICdnZXRTZWxlY3RlZFRleHQnKSB7XHJcbi8vICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKT8udG9TdHJpbmcoKTtcclxuLy8gICAgICAgZXh0ZXJuYWxQb3J0LnBvc3RNZXNzYWdlKHsgc2VsZWN0ZWRUZXh0OiBzZWxlY3RlZFRleHQgfSk7XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuLy8gICBleHRlcm5hbFBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpID0+IHtcclxuLy8gICAgIGV4dGVybmFsUG9ydC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIoZXh0ZW5zaW9uTGlzdGVuZXIpO1xyXG4vLyAgIH0pO1xyXG4vLyAgIGV4dGVybmFsUG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZXh0ZW5zaW9uTGlzdGVuZXIpO1xyXG4vLyAgIC8vIEFzc2lnbiBhIHVuaXF1ZSBJRCB0byBlYWNoIGNvbm5lY3Rpb25cclxuLy8gICBjb25zdCBjb25uZWN0aW9uSWQgPSBgJHtleHRlcm5hbFBvcnQuc2VuZGVyPy5pZH0tJHtleHRlcm5hbFBvcnQuc2VuZGVyPy50YWI/LmlkfWA7XHJcbi8vICAgY29ubmVjdGlvbnNbY29ubmVjdGlvbklkXSA9IGV4dGVybmFsUG9ydDtcclxuLy8gfSk7XHJcbi8vIGNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHRhYiA9PiB7XHJcbi8vIH0pXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2RhdGFiYXNlJztcclxuaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZyc7XHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==