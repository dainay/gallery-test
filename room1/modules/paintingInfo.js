import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from "three";
import { scene } from './scene.js';
import { models } from './paintings.js'; 

 



export const displayPaintingInfo = (painting, camera) => {
console.log(painting, 'IMPORTANT ONE PASS INFO');
const cameraOld = camera.position.clone();
  const info = painting.userData; // Предполагаем, что информация хранится здесь
  const infoElement = document.getElementById('painting-info');

  infoElement.innerHTML = `
    <h3>${info.title}</h3>
    <p>Artist: ${info.artist}</p>
    <p>Description: ${info.description}</p>
    <p>Year: ${info.year}</p>
  `;
  infoElement.classList.add('show');

// const position = new THREE.Vector3(painting.userData.etudes.position.x  , painting.userData.etudes.position.y, painting.userData.etudes.position.z);

 
  if (painting.userData.modelKey) {
    const model = models.get(painting.userData.modelKey);
    if (model) {
      model.visible = true; 
    }
  }

  // camera.lookAt(position);
  camera.fov = 80;
  // camera.position.set(0, 6, -2);
  camera.updateProjectionMatrix();

}







export const hidePaintingInfo = (camera) => {
  models.forEach((model) => {
    model.visible = false;  
  });
  camera.fov = 60;
  camera.updateProjectionMatrix();
  const infoElement = document.getElementById('painting-info');
  infoElement.classList.remove('show');
};
