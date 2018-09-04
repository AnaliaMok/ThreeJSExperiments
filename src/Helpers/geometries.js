import { Points, SphereGeometry, MeshBasicMaterial, PointsMaterial, Mesh, TextureLoader, AdditiveBlending } from 'three';

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

function createParticleSystem(){
  // Material
  var particleMat = new PointsMaterial({
		color: 'rgb(255, 255, 255)',
		size: 0.25,
		map: new TextureLoader().load('../../assets/textures/particle.jpg'),
		transparent: true,
		blending: AdditiveBlending,
		depthWrite: false
	});

  // Geometry
  var particleGeo = new SphereGeometry(15, 50, 50);

	// Adding randomness to the location of the vertices
	particleGeo.vertices.forEach(function(vertex){
		vertex.x += (Math.random() - 0.5);
		vertex.y += (Math.random() - 0.5);
		vertex.z += (Math.random() - 0.5);
  });

  var particleSystem = new Points(
		particleGeo,
		particleMat
  );

  particleSystem.name = 'particleSystem';

  return particleSystem;
}

export { getSphere, createParticleSystem };