import * as THREE from "three";
import { scene, setupScene } from "./modules/scene.js";
import { createPaintings } from "./modules/paintings.js";
import { createWalls } from "./modules/walls.js";
import { setupLighting } from "./modules/lighting.js";
import { setupFloor } from "./modules/floor.js";
import { createCeiling } from "./modules/ceiling.js";
import { createBoundingBoxes } from "./modules/boundingBox.js";
import { setupRendering } from "./modules/rendering.js";
import { setupEventListeners } from "./modules/eventListeners.js";
import { addObjectsToScene } from "./modules/sceneHelpers.js";
import { setupPlayButton } from "./modules/menu.js";

import { clickHandling } from "./modules/clickHandling.js";
import { setupVR } from "./modules/VRSupport.js";
import { loadDoorModel } from "./modules/door.js";
import { loadExitModel } from "./modules/exit.js";
import { loadLampModel } from "./modules/lamps.js";

import { chooseEn } from "./modules/language.js";
import { chooseFr } from "./modules/language.js";

import { startAudio, stopAudio } from "./modules/audioGuide.js";
 
  
let { camera, controls, renderer } = setupScene();

 

const textureLoader = new THREE.TextureLoader();

const walls = createWalls(scene, textureLoader);
const floor = setupFloor(scene);
const ceiling = createCeiling(scene, textureLoader);
const paintings = createPaintings(scene, textureLoader);
const lighting = setupLighting(scene, paintings);

createBoundingBoxes(walls);
createBoundingBoxes(paintings);

addObjectsToScene(scene, paintings);

setupPlayButton(controls);

setupEventListeners(controls);

clickHandling(renderer, camera, paintings);

setupRendering(scene, camera, renderer, paintings, controls, walls);

loadDoorModel(scene, (DoorModel) => {
    clickHandling(renderer, camera, [DoorModel]);
  });

  loadExitModel(scene); 
  loadLampModel(scene); 
 

   let currentLanguage = localStorage.getItem('currentLanguage') || 'fr'; 


  document.getElementById('show-eng').addEventListener('click', chooseEn);
document.getElementById('show-fr').addEventListener('click', chooseFr);







setupVR(renderer);
