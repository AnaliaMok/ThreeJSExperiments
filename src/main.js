import * as THREE from 'three';

function init() {
  var scene = new THREE.Scene();

  // Renderer
  var renderer = new THREE.WebGLRenderer();
  //renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor('rgb(120, 120, 120)'); // Background color

  // Binding renderer to div
  document.getElementById('webgl').appendChild(renderer.domElement);

  return scene;
}

var scene = init();