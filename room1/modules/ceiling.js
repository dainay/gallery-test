import * as THREE from "three";

// create a function that takes a scene and a textureLoader as arguments that will be passed in from main.js where the createCeiling is called
export const createCeiling = (scene, textureLoader) => {
  
  textureLoader = new THREE.TextureLoader();
 
  
    const color = new THREE.MeshStandardMaterial({
      color: 0x251a2e,
      side: THREE.DoubleSide,
    });
  
 

  const ceilingGeometry = new THREE.PlaneGeometry(40, 60);
 
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, color);

  ceilingPlane.rotation.x = Math.PI / 2;

  ceilingPlane.position.y = 15;

  scene.add(ceilingPlane);
};
