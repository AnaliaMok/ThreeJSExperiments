import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

function init() {
  var scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
	camera.position.x = 0;
	camera.position.y = 20;
  camera.position.z = 30;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

  // Renderer
  var renderer = new THREE.WebGLRenderer();
  //renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor('rgb(120, 120, 120)'); // Background color

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

  requestAnimationFrame(function() {
		update(renderer, scene, camera, controls);
	});
}

var scene = init();