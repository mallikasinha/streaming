module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CAMERA_CONSTRAINTS = {
  audio: true,
  video: {
    width: 960,
    height: 540
  }
};
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: connected,
    1: setConnected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: cameraEnabled,
    1: setCameraEnabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: streaming,
    1: setStreaming
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: streamKey,
    1: setStreamKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: shoutOut,
    1: setShoutOut
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('you');
  const inputStreamRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const wsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const mediaRecorderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const requestAnimationRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const nameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  const enableCamera = async () => {
    inputStreamRef.current = await navigator.mediaDevices.getUserMedia(CAMERA_CONSTRAINTS);
    videoRef.current.srcObject = inputStreamRef.current;
    await videoRef.current.play(); // We need to set the canvas height/width to match the video element.

    canvasRef.current.height = videoRef.current.clientHeight;
    canvasRef.current.width = videoRef.current.clientWidth;
    requestAnimationRef.current = requestAnimationFrame(updateCanvas);
    setCameraEnabled(true);
  };

  const updateCanvas = () => {
    if (videoRef.current.ended || videoRef.current.paused) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, videoRef.current.clientWidth, videoRef.current.clientHeight);
    ctx.fillStyle = '#ff0000';
    ctx.font = '50px monospace'; // ctx.fillText(`Oh hi, ${nameRef.current}`, 5, 50);

    requestAnimationRef.current = requestAnimationFrame(updateCanvas);
  };

  const stopStreaming = () => {
    mediaRecorderRef.current.stop();
    setStreaming(false);
  };

  const startStreaming = () => {
    setStreaming(true); // const protocol = window.location.protocol.replace('http', 'ws');

    const protocol = "wss://34.216.185.3:3443";
    wsRef.current = new WebSocket(`${protocol}/rtmp?key=${streamKey}`);
    console.log(wsRef.current.url);
    wsRef.current.addEventListener('open', function open() {
      setConnected(true);
    });
    wsRef.current.addEventListener('close', () => {
      setConnected(false);
      stopStreaming();
    });
    const videoOutputStream = canvasRef.current.captureStream(15); // 15 FPS
    // Let's do some extra work to get audio to join the party.
    // https://hacks.mozilla.org/2016/04/record-almost-everything-in-the-browser-with-mediarecorder/

    const audioStream = new MediaStream();
    const audioTracks = inputStreamRef.current.getAudioTracks();
    audioTracks.forEach(function (track) {
      audioStream.addTrack(track);
    });
    const outputStream = new MediaStream();
    [audioStream, videoOutputStream].forEach(function (s) {
      s.getTracks().forEach(function (t) {
        outputStream.addTrack(t);
      });
    });
    mediaRecorderRef.current = new MediaRecorder(outputStream, {
      mimeType: 'video/webm',
      videoBitsPerSecond: 3000000
    });
    mediaRecorderRef.current.addEventListener('dataavailable', e => {
      wsRef.current.send(e.data);
      console.log(wsRef.current);
    });
    mediaRecorderRef.current.addEventListener('stop', () => {
      console.log("frontend");
      stopStreaming();
      wsRef.current.close();
    });
    mediaRecorderRef.current.start(1000);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    nameRef.current = shoutOut;
  }, [shoutOut]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      cancelAnimationFrame(requestAnimationRef.current);
    };
  }, []);
  return __jsx("div", {
    style: {
      maxWidth: '980px',
      margin: '0 auto'
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Streamer")), __jsx("h1", null, "Streaming server"), !cameraEnabled && __jsx("button", {
    className: "button button-outline",
    onClick: enableCamera
  }, "Enable Camera"), cameraEnabled && (streaming ? __jsx("div", null, __jsx("span", null, connected ? 'Connected' : 'Disconnected'), __jsx("button", {
    className: "button button-outline",
    onClick: stopStreaming
  }, "Stop Streaming")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    placeholder: "Stream Key",
    type: "text",
    onChange: e => setStreamKey(e.target.value)
  }), __jsx("button", {
    className: "button button-outline",
    disabled: !streamKey,
    onClick: startStreaming
  }, "Start Streaming"))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "column"
  }, __jsx("h2", null, "Input"), __jsx("video", {
    ref: videoRef,
    controls: true,
    width: "100%",
    height: "auto",
    muted: true
  })), __jsx("div", {
    className: "column"
  }, __jsx("h2", null, "Output"), __jsx("canvas", {
    ref: canvasRef
  }))));
});

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJDQU1FUkFfQ09OU1RSQUlOVFMiLCJhdWRpbyIsInZpZGVvIiwid2lkdGgiLCJoZWlnaHQiLCJjb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJ1c2VTdGF0ZSIsImNhbWVyYUVuYWJsZWQiLCJzZXRDYW1lcmFFbmFibGVkIiwic3RyZWFtaW5nIiwic2V0U3RyZWFtaW5nIiwic3RyZWFtS2V5Iiwic2V0U3RyZWFtS2V5Iiwic2hvdXRPdXQiLCJzZXRTaG91dE91dCIsImlucHV0U3RyZWFtUmVmIiwidXNlUmVmIiwidmlkZW9SZWYiLCJjYW52YXNSZWYiLCJ3c1JlZiIsIm1lZGlhUmVjb3JkZXJSZWYiLCJyZXF1ZXN0QW5pbWF0aW9uUmVmIiwibmFtZVJlZiIsImVuYWJsZUNhbWVyYSIsImN1cnJlbnQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJzcmNPYmplY3QiLCJwbGF5IiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGVDYW52YXMiLCJlbmRlZCIsInBhdXNlZCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJmaWxsU3R5bGUiLCJmb250Iiwic3RvcFN0cmVhbWluZyIsInN0b3AiLCJzdGFydFN0cmVhbWluZyIsInByb3RvY29sIiwiV2ViU29ja2V0IiwiY29uc29sZSIsImxvZyIsInVybCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuIiwidmlkZW9PdXRwdXRTdHJlYW0iLCJjYXB0dXJlU3RyZWFtIiwiYXVkaW9TdHJlYW0iLCJNZWRpYVN0cmVhbSIsImF1ZGlvVHJhY2tzIiwiZ2V0QXVkaW9UcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJhZGRUcmFjayIsIm91dHB1dFN0cmVhbSIsInMiLCJnZXRUcmFja3MiLCJ0IiwiTWVkaWFSZWNvcmRlciIsIm1pbWVUeXBlIiwidmlkZW9CaXRzUGVyU2Vjb25kIiwiZSIsInNlbmQiLCJkYXRhIiwiY2xvc2UiLCJzdGFydCIsInVzZUVmZmVjdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRUEsTUFBTUEsa0JBQWtCLEdBQUc7QUFDekJDLE9BQUssRUFBRSxJQURrQjtBQUV6QkMsT0FBSyxFQUFFO0FBQUVDLFNBQUssRUFBRSxHQUFUO0FBQWNDLFVBQU0sRUFBRTtBQUF0QjtBQUZrQixDQUEzQjtBQUtl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LFNBQVMsR0FBRyxXQUFILEdBQWlCLGNBQWpDLENBREYsRUFFRTtBQUFRLGFBQVMsRUFBQyx1QkFBbEI7QUFBMEMsV0FBTyxFQUFFcUM7QUFBbkQsc0JBRkYsQ0FEUSxHQVFSLG1FQUNFO0FBQ0UsZUFBVyxFQUFDLFlBRGQ7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFlBQVEsRUFBRTBCLENBQUMsSUFBSXZELFlBQVksQ0FBQ3VELENBQUMsQ0FBQ1MsTUFBRixDQUFTQyxLQUFWO0FBSDdCLElBREYsRUFNRTtBQUNFLGFBQVMsRUFBQyx1QkFEWjtBQUVFLFlBQVEsRUFBRSxDQUFDbEUsU0FGYjtBQUdFLFdBQU8sRUFBRWdDO0FBSFgsdUJBTkYsQ0FUVSxDQVpoQixFQW9DRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLDBCQURGLEVBRUU7QUFBTyxPQUFHLEVBQUUxQixRQUFaO0FBQXNCLFlBQVEsTUFBOUI7QUFBK0IsU0FBSyxFQUFDLE1BQXJDO0FBQTRDLFVBQU0sRUFBQyxNQUFuRDtBQUEwRCxTQUFLO0FBQS9ELElBRkYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSwyQkFERixFQUVFO0FBQVEsT0FBRyxFQUFFQztBQUFiLElBRkYsQ0FMRixDQXBDRixDQURGO0FBc0RELENBcExELEU7Ozs7Ozs7Ozs7O0FDUkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IENBTUVSQV9DT05TVFJBSU5UUyA9IHtcclxuICBhdWRpbzogdHJ1ZSxcclxuICB2aWRlbzogeyB3aWR0aDogOTYwLCBoZWlnaHQ6IDU0MCB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2FtZXJhRW5hYmxlZCwgc2V0Q2FtZXJhRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N0cmVhbWluZywgc2V0U3RyZWFtaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RyZWFtS2V5LCBzZXRTdHJlYW1LZXldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Nob3V0T3V0LCBzZXRTaG91dE91dF0gPSB1c2VTdGF0ZSgneW91Jyk7XHJcblxyXG4gIGNvbnN0IGlucHV0U3RyZWFtUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB3c1JlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG1lZGlhUmVjb3JkZXJSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCByZXF1ZXN0QW5pbWF0aW9uUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbmFtZVJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBlbmFibGVDYW1lcmEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpbnB1dFN0cmVhbVJlZi5jdXJyZW50ID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoXHJcbiAgICAgIENBTUVSQV9DT05TVFJBSU5UU1xyXG4gICAgKTtcclxuXHJcbiAgICB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IGlucHV0U3RyZWFtUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgYXdhaXQgdmlkZW9SZWYuY3VycmVudC5wbGF5KCk7XHJcblxyXG4gICAgLy8gV2UgbmVlZCB0byBzZXQgdGhlIGNhbnZhcyBoZWlnaHQvd2lkdGggdG8gbWF0Y2ggdGhlIHZpZGVvIGVsZW1lbnQuXHJcbiAgICBjYW52YXNSZWYuY3VycmVudC5oZWlnaHQgPSB2aWRlb1JlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcclxuICAgIGNhbnZhc1JlZi5jdXJyZW50LndpZHRoID0gdmlkZW9SZWYuY3VycmVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uUmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQ2FudmFzKTtcclxuXHJcbiAgICBzZXRDYW1lcmFFbmFibGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUNhbnZhcyA9ICgpID0+IHtcclxuICAgIGlmICh2aWRlb1JlZi5jdXJyZW50LmVuZGVkIHx8IHZpZGVvUmVmLmN1cnJlbnQucGF1c2VkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHZpZGVvUmVmLmN1cnJlbnQsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIHZpZGVvUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgsXHJcbiAgICAgIHZpZGVvUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmMDAwMCc7XHJcbiAgICBjdHguZm9udCA9ICc1MHB4IG1vbm9zcGFjZSc7XHJcbiAgICAvLyBjdHguZmlsbFRleHQoYE9oIGhpLCAke25hbWVSZWYuY3VycmVudH1gLCA1LCA1MCk7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvblJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUNhbnZhcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RvcFN0cmVhbWluZyA9ICgpID0+IHtcclxuICAgIG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudC5zdG9wKCk7XHJcbiAgICBzZXRTdHJlYW1pbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0U3RyZWFtaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0U3RyZWFtaW5nKHRydWUpO1xyXG5cclxuICAgIC8vIGNvbnN0IHByb3RvY29sID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sLnJlcGxhY2UoJ2h0dHAnLCAnd3MnKTtcclxuICAgIGNvbnN0IHByb3RvY29sID0gXCJ3c3M6Ly8zNC4yMTYuMTg1LjM6MzQ0M1wiO1xyXG4gICAgd3NSZWYuY3VycmVudCA9IG5ldyBXZWJTb2NrZXQoXHJcbiAgICAgIGAke3Byb3RvY29sfS9ydG1wP2tleT0ke3N0cmVhbUtleX1gXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2cod3NSZWYuY3VycmVudC51cmwpXHJcblxyXG4gICAgd3NSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgZnVuY3Rpb24gb3BlbigpIHtcclxuICAgICAgc2V0Q29ubmVjdGVkKHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd3NSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcclxuICAgICAgc2V0Q29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgc3RvcFN0cmVhbWluZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdmlkZW9PdXRwdXRTdHJlYW0gPSBjYW52YXNSZWYuY3VycmVudC5jYXB0dXJlU3RyZWFtKDE1KTsgLy8gMTUgRlBTXHJcblxyXG4gICAgLy8gTGV0J3MgZG8gc29tZSBleHRyYSB3b3JrIHRvIGdldCBhdWRpbyB0byBqb2luIHRoZSBwYXJ0eS5cclxuICAgIC8vIGh0dHBzOi8vaGFja3MubW96aWxsYS5vcmcvMjAxNi8wNC9yZWNvcmQtYWxtb3N0LWV2ZXJ5dGhpbmctaW4tdGhlLWJyb3dzZXItd2l0aC1tZWRpYXJlY29yZGVyL1xyXG4gICAgY29uc3QgYXVkaW9TdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcclxuICAgIGNvbnN0IGF1ZGlvVHJhY2tzID0gaW5wdXRTdHJlYW1SZWYuY3VycmVudC5nZXRBdWRpb1RyYWNrcygpO1xyXG4gICAgYXVkaW9UcmFja3MuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICBhdWRpb1N0cmVhbS5hZGRUcmFjayh0cmFjayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvdXRwdXRTdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcclxuICAgIFthdWRpb1N0cmVhbSwgdmlkZW9PdXRwdXRTdHJlYW1dLmZvckVhY2goZnVuY3Rpb24ocykge1xyXG4gICAgICAgIHMuZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgIG91dHB1dFN0cmVhbS5hZGRUcmFjayh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQgPSBuZXcgTWVkaWFSZWNvcmRlcihvdXRwdXRTdHJlYW0sIHtcclxuICAgICAgbWltZVR5cGU6ICd2aWRlby93ZWJtJyxcclxuICAgICAgdmlkZW9CaXRzUGVyU2Vjb25kOiAzMDAwMDAwXHJcbiAgICB9KTtcclxuXHJcbiAgICBtZWRpYVJlY29yZGVyUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGF0YWF2YWlsYWJsZScsIGUgPT4ge1xyXG4gICAgICB3c1JlZi5jdXJyZW50LnNlbmQoZS5kYXRhKTtcclxuICAgICAgY29uc29sZS5sb2cod3NSZWYuY3VycmVudClcclxuICAgIH0pO1xyXG5cclxuICAgIG1lZGlhUmVjb3JkZXJSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdzdG9wJywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZyb250ZW5kXCIpXHJcbiAgICAgIHN0b3BTdHJlYW1pbmcoKTtcclxuICAgICAgd3NSZWYuY3VycmVudC5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWVkaWFSZWNvcmRlclJlZi5jdXJyZW50LnN0YXJ0KDEwMDApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBuYW1lUmVmLmN1cnJlbnQgPSBzaG91dE91dDtcclxuICB9LCBbc2hvdXRPdXRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25SZWYuY3VycmVudCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogJzk4MHB4JywgbWFyZ2luOiAnMCBhdXRvJyB9fT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlN0cmVhbWVyPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aDE+U3RyZWFtaW5nIHNlcnZlcjwvaDE+XHJcblxyXG4gICAgICB7IWNhbWVyYUVuYWJsZWQgJiYgKFxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1vdXRsaW5lXCIgb25DbGljaz17ZW5hYmxlQ2FtZXJhfT5cclxuICAgICAgICAgIEVuYWJsZSBDYW1lcmFcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtjYW1lcmFFbmFibGVkICYmXHJcbiAgICAgICAgKHN0cmVhbWluZyA/IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPntjb25uZWN0ZWQgPyAnQ29ubmVjdGVkJyA6ICdEaXNjb25uZWN0ZWQnfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLW91dGxpbmVcIiBvbkNsaWNrPXtzdG9wU3RyZWFtaW5nfT5cclxuICAgICAgICAgICAgICBTdG9wIFN0cmVhbWluZ1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0cmVhbSBLZXlcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdHJlYW1LZXkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXN0cmVhbUtleX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydFN0cmVhbWluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN0YXJ0IFN0cmVhbWluZ1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICA8aDI+SW5wdXQ8L2gyPlxyXG4gICAgICAgICAgPHZpZGVvIHJlZj17dmlkZW9SZWZ9IGNvbnRyb2xzIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cImF1dG9cIiBtdXRlZD48L3ZpZGVvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICA8aDI+T3V0cHV0PC9oMj5cclxuICAgICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9PjwvY2FudmFzPlxyXG4gICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNob3V0IHNvbWVvbmUgb3V0IVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2hvdXRPdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=