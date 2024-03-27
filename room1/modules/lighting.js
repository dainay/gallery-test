import * as THREE from "three";
 

export const setupLighting = (scene, paintings) => {

// const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.5); // soft white light
// scene.add(ambientLight);

const groupLight = new THREE.Group();
  
  const baltoLight = new THREE.PointLight(0xffffff, 195);
baltoLight.decay = 2.3;

  baltoLight.position.set(1,5,-25);

groupLight.add(baltoLight);



const donkeyLight = baltoLight.clone();
donkeyLight.position.set(-15,5,-11);
groupLight.add(donkeyLight);


const cerfLight = baltoLight.clone();
cerfLight.position.set(15,5,-11);
groupLight.add(cerfLight);





  scene.add(groupLight);



  const exit = new THREE.PointLight(0x2b5720, 150);
exit.position.set(0,13,5);
scene.add(exit);


  
const lamps = new THREE.Group();

const lamp1 = new THREE.PointLight(0xffffff, 200);
lamp1.position.set(6,8.5,4);
lamps.add(lamp1);


  const lamp2 = lamp1.clone();
  lamp2.position.set(-6,8.5,4);
  lamps.add(lamp2);

  scene.add(lamps);



//   const pointLightHelper = new THREE.PointLightHelper(baltoLight, 1);
  
//  scene.add(pointLightHelper);
 
};
