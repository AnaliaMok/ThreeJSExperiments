import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import { getSphere, createParticleSystem } from './Helpers/geometries';
import { getAmbientLight, getSpotLight } from './Helpers/lighting';
import * as datgui from 'dat.gui';

function init() {
  var scene = new THREE.Scene();
  var gui = new datgui.GUI();

  // Creating Scene
  setupScene(scene);

  // Camera
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
	camera.position.x = 0;
	camera.position.y = 17;
  camera.position.z = 0;
  camera.lookAt(new THREE.Vector3(0, 10, 0));

  // Camera Controls
  var cameraPosFolder = gui.addFolder('Camera Position');
  cameraPosFolder.add(camera.position, 'x', 0, 25);
  cameraPosFolder.add(camera.position, 'y', 0, 25);
  cameraPosFolder.add(camera.position, 'z', 0, 25);

  // Renderer
  var renderer = new THREE.WebGLRenderer();
  //renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor('rgb(23, 29, 42)'); // Background color

  // Binding renderer to div
  document.getElementById('webgl').appendChild(renderer.domElement);

  // Create OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);

  // Update Scene
  update(renderer, scene, camera, controls);

  return scene;
}

function update(renderer, scene, camera, controls){
  renderer.render(scene, camera);

  // ELement Updates
  controls.update();

  // Object Animations
  var particleSystem = scene.getObjectByName('particleSystem');
  // particleSystem.rotation.x += 0.002;
  particleSystem.rotation.y += 0.005;

  requestAnimationFrame(function() {
		update(renderer, scene, camera, controls);
	});
}

/**
 * Creates & Adds objects to scene
 * @param {THREE.Scene} scene
 */
function setupScene(scene){
  const particleSystem = createParticleSystem();
  scene.add(particleSystem);
}

var scene = init();