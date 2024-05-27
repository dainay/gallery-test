import * as THREE from "three"; 
 



export const setupLighting = (scene) => {
 
const sun = new THREE.PointLight(0xbbbbbb, 100);

const y = 20
sun.position.set (-10,y,-40);
scene.add(sun);

const sun2 = sun.clone();
sun2.position.set (-15,y,80);
scene.add(sun2);


const sun3 = sun.clone();
sun3.position.set (-25,y, 190);
scene.add(sun3);

const sphereSize = 2;
const pointLightHelper = new THREE.PointLightHelper( sun, sphereSize );
scene.add( pointLightHelper );
const help2 = new THREE.PointLightHelper( sun2, sphereSize );
scene.add( help2 );

const help3 = new THREE.PointLightHelper( sun3, sphereSize );
scene.add( help3 );
 
};
