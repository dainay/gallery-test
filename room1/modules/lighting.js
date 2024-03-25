import * as THREE from "three";
 

export const setupLighting = (scene, paintings) => {

// const ambientLight = new THREE.AmbientLight(0xbbbbbb, 3); // soft white light
// scene.add(ambientLight);


  
  const wallLight = new THREE.PointLight(0xffffff, 1500);

  wallLight.position.set(0,0,0);
  scene.add(wallLight);

  const pointLightHelper = new THREE.PointLightHelper(wallLight, 1);
  
 scene.add(pointLightHelper);
 
};
