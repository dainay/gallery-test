import * as THREE from "three"; 
 import { counter } from "./clickHandling";



export const setupLighting = (scene, counter) => {

    
// const ambientLight = new THREE.AmbientLight(0xbbbbbb, 1); // soft white light
// scene.add(ambientLight);


// const pointlight = new THREE.PointLight(0xFFFFE6, 300);
// pointlight.position.set(0,5,0);
// scene.add(pointlight);


const sun = new THREE.PointLight(0xFFFFee, 400);
sun.position.set(-30,15,-4);
scene.add(sun);


// const top = new THREE.PointLight(0xffffbb,80);
// top.position.set(0,15,-8);
// scene.add(top);



const fireLight = new THREE.PointLight(0xFF4500, 500);
fireLight.position.set(0, 1.7, -24);
fireLight.userData.id = 'lightingup';
scene.add(fireLight);







// Animation to imitate fire
setInterval(() => {
    const randomColor = Math.random() * 0xffffff;
    const randomIntensity = Math.random() * 50+70;
    // fireLight.color.setHex(randomColor);
    fireLight.intensity = randomIntensity;
}, 100);


// ( color : Integer, intensity : Float, distance : Number, decay : Float )


const wallLight = new THREE.PointLight(0xffffbb, 7);

wallLight.position.set(-8.7,3.32,18);
scene.add(wallLight);


const pianoLight = new THREE.PointLight(0xffffbb, 10,10,3);

pianoLight.position.set(14,4.2,11,3);
scene.add(pianoLight);


const tableLight = new THREE.PointLight(0xffffbb, 30);
tableLight.position.set(-19,11,13);
scene.add(tableLight);

// const table2Light = new THREE.PointLight(0xffffbb, 10, 10);
// table2Light.position.set(9,4,-4);
// scene.add(table2Light);

// const fireplaceLight = new THREE.PointLight(0xffffbb, 10, 10);
// fireplaceLight.position.set(-6,8,-19);
// scene.add(fireplaceLight);

const sphereSize = 0.07;
const pointLightHelper = new THREE.PointLightHelper( wallLight, sphereSize );
scene.add( pointLightHelper );

const pointLightHelper2 = new THREE.PointLightHelper( tableLight, sphereSize );
scene.add( pointLightHelper2 );
const pointLightHelper3 = new THREE.PointLightHelper( pianoLight, sphereSize );
scene.add( pointLightHelper3 );




// object instanceof THREE.Light;
//     object.visible = false;

const group = new THREE.Group();
const group2 = new THREE.Group();

const positions = [ 
    {x: -19, y: 2, z: 14},//wall id8
    {x: -9.5, y: 2, z: 1},//order id3
    {x: 9, y: 3, z: -5},//camera id1
    {x: 18, y: 13, z: 6.2},//head horse id2
    {x: -11, y: 3, z: -21},//cow portrait id5
    {x: -4, y: 1, z: -18},//police paper id9
    {x: -11, y: 3.7, z: 17},//statue id7
    {x: -7, y: 2.6, z: 17},//phone id6
    {x: 7, y: 4, z: -15},//horses painintg h4
    
 

  
]

 
  

for (let i = 0; i < positions.length; i++) {
    const pointLight = new THREE.PointLight(0x42f5e3, 20, 20, 3.4);
    pointLight.position.set(positions[i].x, positions[i].y, positions[i].z);
    group.add(pointLight);

    const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
  
   group2.add(pointLightHelper);

}
// scene.add(group, group2);

 


let lightsVisible = true;

document.addEventListener('keydown', (event) => {
    if (event.key === 'o') {
        if (lightsVisible) {
            scene.traverse((object) => {
                if (object instanceof THREE.Light) {
                    object.visible = false;
                }
            });
            scene.add(group, group2);
        } else {
            scene.traverse((object) => {
                if (object instanceof THREE.Light) {
                    object.visible = true;
                }
            });
            scene.remove(group, group2);
        }
        lightsVisible = !lightsVisible;
    }
});

 


};