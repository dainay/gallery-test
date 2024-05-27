import * as THREE from "three";
import * as TWEEN from '@tweenjs/tween.js';

import { scene, setupScene } from "./src/scenefire.js";
import { createPaintings } from "./src/paintingsFire.js";
import { createWalls } from "./src/wallsfire.js";
import { setupLighting } from "./src/lightingfire.js";
import { setupFloor } from "./src/floorfire.js";
// import { createCeiling } from "./src/ceiling.js";
import { createBoundingBoxes } from "./src/boundingBox.js";
import { setupRendering } from "./src/renderingFire.js";
import { setupEventListeners } from "./src/eventListenersFire.js";
import { addObjectsToScene } from "./src/sceneHelpers.js";
import { setupPlayButton } from "./src/menu.js";
// import { setupAudio } from "./src/audioGuide.js";
import { clickHandling } from "./src/clickHandlingFire.js";
// import { setupVR } from "./src/VRSupport.js";

import { loadDresserModel } from "./src/objects/dresser.js";
import { loadGalleryModel } from "./src/objects/gallery.js";
import { setupFlashlight } from "./src/flashLight.js";
 
 

let { camera, controls, renderer } = setupScene();

// setupAudio(camera);

const textureLoader = new THREE.TextureLoader();

const walls = createWalls(scene, textureLoader);

const floor = setupFloor(scene);
// const ceiling = createCeiling(scene, textureLoader);
const paintings = createPaintings(scene, textureLoader);
// const lighting = setupLighting(scene, paintings);

createBoundingBoxes(walls);


setupLighting(scene)

addObjectsToScene(scene, paintings);

// lightingOn(scene, camera);

setupPlayButton(controls);

setupEventListeners(controls, camera, scene);

clickHandling(renderer, camera, scene);

setupRendering(scene, camera, renderer, paintings, controls, walls);

loadDresserModel(scene);
const gallery = loadGalleryModel(scene);
createBoundingBoxes(paintings, gallery);



const { flashlight, updateFlashlightTarget, updateFlashlightTargetWithCursor } = setupFlashlight(camera, scene);

function animate() {
    if (controls.isLocked) {
        updateFlashlightTarget();
    }
    requestAnimationFrame(animate);

    // Update any ongoing animations
    TWEEN.update();

    renderer.render(scene, camera);
}

// Start the animation loop
animate();

document.addEventListener('mousemove', (event) => {
    if (!controls.isLocked) {
        updateFlashlightTargetWithCursor(event);
    }
}, false);

// setupVR(renderer);
