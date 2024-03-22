import * as THREE from "three";
 

export const setupLighting = (scene, paintings) => {
  
const ambientLight = new THREE.AmbientLight(0xbbbbbb, 1); // soft white light
scene.add(ambientLight);




const directionalLight = new THREE.DirectionalLight(0xffffbb, 0.5);
directionalLight.position.set(0, 1, 0);
directionalLight.target.position.set(10, 0, 0); // Set the target position
scene.add(directionalLight);
scene.add(directionalLight.target); // Add the target to the scene




// const pointlight = new THREE.PointLight(0xFFFFE6, 300);
// pointlight.position.set(0,5,0);
// scene.add(pointlight);


const sun = new THREE.PointLight(0xFFFFee, 500);
sun.position.set(-30,15,-4);
scene.add(sun);


const top = new THREE.PointLight(0xffffbb, 122);
top.position.set(0,11,-8);
scene.add(top);



const fireLight = new THREE.PointLight(0xFF4500, 500);
fireLight.position.set(0, 1.7, -24);
scene.add(fireLight);

// Animation to imitate fire
setInterval(() => {
    const randomColor = Math.random() * 0xffffff;
    const randomIntensity = Math.random() * 50+70;
    // fireLight.color.setHex(randomColor);
    fireLight.intensity = randomIntensity;
}, 100);



// // Create the point light
// const pointLight = new THREE.PointLight(0xffd07f, 1, 10);
// pointLight.position.set(0, 1, 0);
// scene.add(pointLight);

// // Create a sphere to represent the light source with a basic material
// const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
// const sphereMaterial = new THREE.MeshBasicMaterial({
//   color: 0xffd07f,
//   transparent: true,
//   opacity: 0.8
// });
// const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
// sphereMesh.position.copy(pointLight.position);
// scene.add(sphereMesh);






const sphereSize = 0.4;
const pointLightHelper = new THREE.PointLightHelper(  top, sphereSize );
scene.add( pointLightHelper );

};