import { AmbientLight } from 'three';

function getAmbientLight(intensity){
  var light = new THREE.AmbientLight('rgb(10, 30, 50)', intensity);
  // Doesn't cast any shadows
  return light;
}

function getSpotLight(intensity){
  var light = new THREE.SpotLight(0xffffff, intensity);
  light.castShadow = true;

  // Highly dependent of scale of scene
  light.shadow.bias = 0.001;
  // Shadow resolution: be careful because of performance reasons
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;

  return light;
}

export { getAmbientLight, getSpotLight };