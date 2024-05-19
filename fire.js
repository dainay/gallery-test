import * as THREE from "three";
import * as TWEEN from '@tweenjs/tween.js';
 
 
import { scene, setupScene } from "./src/scenefire.js";
import { createPaintings } from "./src/paintings.js";
import { createWalls } from "./src/wallsfire.js";
import { setupLighting } from "./src/lightingfire.js";
import { setupFloor } from "./src/floorfire.js";
// import { createCeiling } from "./src/ceiling.js";
import { createBoundingBoxes } from "./src/boundingBox.js";
import { setupRendering } from "./src/rendering.js";
import { setupEventListeners } from "./src/eventListeners.js";
import { addObjectsToScene } from "./src/sceneHelpers.js";
import { setupPlayButton } from "./src/menu.js";
// import { setupAudio } from "./src/audioGuide.js";
import { clickHandling } from "./src/clickHandling.js";
// import { setupVR } from "./src/VRSupport.js";

import { loadDresserModel } from "./src/objects/dresser.js";

 

let { camera, controls, renderer } = setupScene();

// setupAudio(camera);

const textureLoader = new THREE.TextureLoader();

const walls = createWalls(scene, textureLoader);
 
const floor = setupFloor(scene);
// const ceiling = createCeiling(scene, textureLoader);
const paintings = createPaintings(scene, textureLoader);
const lighting = setupLighting(scene, paintings);

createBoundingBoxes(walls);
createBoundingBoxes(paintings);

addObjectsToScene(scene, paintings);

// lightingOn(scene, camera);

setupPlayButton(controls);

setupEventListeners(controls, camera);

clickHandling(renderer, camera,   scene);

setupRendering(scene, camera, renderer, paintings, controls, walls);
 
loadDresserModel(scene);
  


function animate() {
    requestAnimationFrame(animate);
  
   
  
    // Update any ongoing animations
    TWEEN.update();
  
    renderer.render(scene, camera);
  }
  
  // Start the animation loop
  animate();

 

  
 
 

// setupVR(renderer);
 
