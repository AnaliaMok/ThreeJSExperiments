/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Helpers/geometries.js":
/*!***********************************!*\
  !*** ./src/Helpers/geometries.js ***!
  \***********************************/
/*! exports provided: getSphere, createParticleSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSphere\", function() { return getSphere; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createParticleSystem\", function() { return createParticleSystem; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction getSphere(size){\n  var geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereGeometry\"](size, 24, 24);\n\n  // Basic White Material\n  var material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({\n      color: 'rgb(255, 255, 255)' // HEX Value\n  });\n\n  // Each mesh requires a geometry and a material\n  var mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](\n      geometry,\n      material\n  );\n\n  return mesh;\n}\n\nfunction createParticleSystem(){\n  // Material\n  var particleMat = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointsMaterial\"]({\n\t\tcolor: 'rgb(255, 255, 255)',\n\t\tsize: 0.25,\n\t\tmap: new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]().load('../../assets/textures/particle.jpg'),\n\t\ttransparent: true,\n\t\tblending: three__WEBPACK_IMPORTED_MODULE_0__[\"AdditiveBlending\"],\n\t\tdepthWrite: false\n\t});\n\n  // Geometry\n  var particleGeo = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereGeometry\"](10, 50, 50);\n\n\t// Adding randomness to the location of the vertices\n\tparticleGeo.vertices.forEach(function(vertex){\n\t\tvertex.x += (Math.random() - 0.5);\n\t\tvertex.y += (Math.random() - 0.5);\n\t\tvertex.z += (Math.random() - 0.5);\n  });\n\n  var particleSystem = new three__WEBPACK_IMPORTED_MODULE_0__[\"Points\"](\n\t\tparticleGeo,\n\t\tparticleMat\n  );\n\n  particleSystem.name = 'particleSystem';\n\n  return particleSystem;\n}\n\n\n\n//# sourceURL=webpack:///./src/Helpers/geometries.js?");

/***/ }),

/***/ "./src/Helpers/helper.js":
/*!*******************************!*\
  !*** ./src/Helpers/helper.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/Helpers/helper.js?");

/***/ }),

/***/ "./src/Helpers/lighting.js":
/*!*********************************!*\
  !*** ./src/Helpers/lighting.js ***!
  \*********************************/
/*! exports provided: getAmbientLight, getSpotLight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAmbientLight\", function() { return getAmbientLight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSpotLight\", function() { return getSpotLight; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction getAmbientLight(intensity){\n  var light = new THREE.AmbientLight('rgb(10, 30, 50)', intensity);\n  // Doesn't cast any shadows\n  return light;\n}\n\nfunction getSpotLight(intensity){\n  var light = new THREE.SpotLight(0xffffff, intensity);\n  light.castShadow = true;\n\n  // Highly dependent of scale of scene\n  light.shadow.bias = 0.001;\n  // Shadow resolution: be careful because of performance reasons\n  light.shadow.mapSize.width = 2048;\n  light.shadow.mapSize.height = 2048;\n\n  return light;\n}\n\n\n\n//# sourceURL=webpack:///./src/Helpers/lighting.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-orbitcontrols */ \"./node_modules/three-orbitcontrols/OrbitControls.js\");\n/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Helpers_geometries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Helpers/geometries */ \"./src/Helpers/geometries.js\");\n/* harmony import */ var _Helpers_lighting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Helpers/lighting */ \"./src/Helpers/lighting.js\");\n\n\n\n\n\nfunction init() {\n  var scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n\n  // Creating Scene\n  setupScene(scene);\n\n  // Camera\n  const camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, window.innerWidth/window.innerHeight, 1, 1000);\n\tcamera.position.x = 0;\n\tcamera.position.y = 20;\n  camera.position.z = 30;\n\tcamera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 0));\n\n  // Renderer\n  var renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n  //renderer.shadowMap.enabled = true;\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  renderer.setClearColor('rgb(43, 49, 62)'); // Background color\n\n  // Binding renderer to div\n  document.getElementById('webgl').appendChild(renderer.domElement);\n\n  // Create OrbitControls\n  const controls = new three_orbitcontrols__WEBPACK_IMPORTED_MODULE_1___default.a(camera, renderer.domElement);\n\n  // Update Scene\n  update(renderer, scene, camera, controls);\n\n  return scene;\n}\n\nfunction update(renderer, scene, camera, controls){\n  renderer.render(scene, camera);\n\n  // ELement Updates\n  controls.update();\n\n  // Object Animations\n  var particleSystem = scene.getObjectByName('particleSystem');\n  particleSystem.rotation.y += 0.005;\n\n  requestAnimationFrame(function() {\n\t\tupdate(renderer, scene, camera, controls);\n\t});\n}\n\n/**\n * Creates & Adds objects to scene\n * @param {THREE.Scene} scene\n */\nfunction setupScene(scene){\n  const particleSystem = Object(_Helpers_geometries__WEBPACK_IMPORTED_MODULE_2__[\"createParticleSystem\"])();\n  scene.add(particleSystem);\n}\n\nvar scene = init();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************!*\
  !*** multi ./src/Helpers/helper.js ./src/Helpers/lighting.js ./src/Helpers/geometries.js ./src/main.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/Helpers/helper.js */\"./src/Helpers/helper.js\");\n__webpack_require__(/*! ./src/Helpers/lighting.js */\"./src/Helpers/lighting.js\");\n__webpack_require__(/*! ./src/Helpers/geometries.js */\"./src/Helpers/geometries.js\");\nmodule.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/Helpers/helper.js_./src/Helpers/lighting.js_./src/Helpers/geometries.js_./src/main.js?");

/***/ })

/******/ });