import * as THREE from "three"; 
 

export const setupLighting = (scene) => {
  
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
scene.add(fireLight);

// Animation to imitate fire
setInterval(() => {
    const randomColor = Math.random() * 0xffffff;
    const randomIntensity = Math.random() * 50+70;
    // fireLight.color.setHex(randomColor);
    fireLight.intensity = randomIntensity;
}, 100);


// ( color : Integer, intensity : Float, distance : Number, decay : Float )


const wallLight = new THREE.PointLight(0xffffbb, 18);

wallLight.position.set(-8.7,3.32,18);
scene.add(wallLight);

// const table1Light = new THREE.PointLight(0xffffbb, 10, 10);
// table1Light.position.set(-9,3,0);
// scene.add(table1Light);

// const table2Light = new THREE.PointLight(0xffffbb, 10, 10);
// table2Light.position.set(9,4,-4);
// scene.add(table2Light);

// const fireplaceLight = new THREE.PointLight(0xffffbb, 10, 10);
// fireplaceLight.position.set(-6,8,-19);
// scene.add(fireplaceLight);

const sphereSize = 0.07;
const pointLightHelper = new THREE.PointLightHelper( wallLight, sphereSize );
scene.add( pointLightHelper );






// object instanceof THREE.Light;
//     object.visible = false;

const group = new THREE.Group();
const group2 = new THREE.Group();

const positions = [ 
    {x: 10, y: 4, z: 14},
    {x: 1, y: 1, z: 23},
    {x: -2, y: 4, z: -3},
    {x: 0, y: 0, z: -2},
    {x: 0, y: 0, z: -2}
  
]

 
  

for (let i = 0; i < positions.length; i++) {
    const pointLight = new THREE.PointLight(0x42f5e3, 20, 200, 3);
    pointLight.position.set(positions[i].x, positions[i].y, positions[i].z);
    group.add(pointLight);

    const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.3);
  
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