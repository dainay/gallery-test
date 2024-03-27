import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from "three";
 
import { models } from './paintings.js'; 
import { updateLanguage } from './../modules/language.js';

 
let currentVisibleModel = null; // На начальном этапе активной модели нет



export const displayPaintingInfo = (painting, camera) => {
console.log(painting, 'IMPORTANT ONE PASS INFO');
const cameraOld = camera.position.clone();
  const info = painting.userData; // Предполагаем, что информация хранится здесь
 
  const infoElement = document.getElementById('painting-info');

  infoElement.innerHTML = `
    <h3>${info.title}</h3>
    <p> ${info.size}</p>
   
      <p> ${info.place}</p>
      <br>
      <div class='global-wrapper'>
      <div class="desc-wrapper">
        <p id='fr'>${info.fr}</p>
        <p id='eng' style='display:none'> ${info.en}</p>
      </div>
       
    </div>
   
   
     
  `;
  infoElement.classList.add('show');

// const position = new THREE.Vector3(painting.userData.etudes.position.x  , painting.userData.etudes.position.y, painting.userData.etudes.position.z);

if (painting.userData.etudes.modelKey) {
  const model = models.get(painting.userData.etudes.modelKey);

  if (model) {
    if (currentVisibleModel) {
      // Скрываем предыдущую активную модель
      currentVisibleModel.visible = false;
    }
    // Показываем новую модель
    model.visible = true;
    // Обновляем ссылку на активную модель
    currentVisibleModel = model;
  }
}

updateLanguage();
  }

  // camera.lookAt(position);
  // camera.fov = 80;
  // camera.position.set(0, 6, -2);
  // camera.updateProjectionMatrix();





export const hidePaintingInfo = (camera) => {
  
  if (currentVisibleModel) {
    currentVisibleModel.visible = false; // Скрываем активную модель
    currentVisibleModel = null; // Сбрасываем ссылку на активную модель
  }
  // // camera.fov = 60;
  // // camera.updateProjectionMatrix();
  const infoElement = document.getElementById('painting-info');
  infoElement.classList.remove('show');
};
