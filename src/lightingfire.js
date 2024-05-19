import * as THREE from "three"; 
 



export const setupLighting = (scene) => {
 
const sun = new THREE.PointLight(0xFFFFFF, 1000);
sun.position.set(-30,15,-4);
scene.add(sun);
 
const sphereSize = 2;
const pointLightHelper = new THREE.PointLightHelper( sun, sphereSize );
scene.add( pointLightHelper );

document.addEventListener('keydown', (event) => {
    if (event.key === 'j') {
        scene.add(sun);
    } 
})
};
