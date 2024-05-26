import * as THREE from "three"; 
 



export const setupLighting = (scene) => {
 
const sun = new THREE.PointLight(0xbbbbbb, 100);
sun.position.set (0,15,-15);
scene.add(sun);
 
const sphereSize = 2;
const pointLightHelper = new THREE.PointLightHelper( sun, sphereSize );
scene.add( pointLightHelper );

 
};
