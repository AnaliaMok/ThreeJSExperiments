import { SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

function getSphere(size){
  var geometry = new SphereGeometry(size, 24, 24);

  // Basic White Material
  var material = new MeshBasicMaterial({
      color: 'rgb(255, 255, 255)' // HEX Value
  });

  // Each mesh requires a geometry and a material
  var mesh = new Mesh(
      geometry,
      material
  );

  return mesh;
}