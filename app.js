import * as THREE from "three";
import * as TWEEN from '@tweenjs/tween.js';


import { counter } from "./src/clickHandling.js";
 
import { scene, setupScene } from "./src/scene.js";
import { createPaintings } from "./src/paintings.js";
import { createWalls } from "./src/walls.js";
import { setupLighting } from "./src/lighting.js";
import { setupFloor } from "./src/floor.js";
import { createCeiling } from "./src/ceiling.js";
import { createBoundingBoxes } from "./src/boundingBox.js";
import { setupRendering } from "./src/rendering.js";
import { setupEventListeners, lightingOn } from "./src/eventListeners.js";
import { addObjectsToScene } from "./src/sceneHelpers.js";
import { setupPlayButton } from "./src/menu.js";
// import { setupAudio } from "./src/audioGuide.js";
import { clickHandling } from "./src/clickHandling.js";
import { setupVR } from "./src/VRSupport.js";



import { loadDresserModel } from "./src/objects/dresser.js";
 
import { loadWindowModel } from "./src/objects/window.js";
import { loadCurtainModel } from "./src/objects/curtain.js";
import { loadBookshelfModel } from "./src/objects/bookshelf.js";
import { loadBookshelf2Model } from "./src/objects/bookshelf2.js";
import { loadFireplaceModel } from "./src/objects/fireplace.js";
import { loadPainting1Model } from "./src/objects/painting1.js";
import { loadPainting2Model } from "./src/objects/painting2.js";
import { loadPtopModel } from "./src/objects/ptop.js";

import { loadWalllightModel } from "./src/objects/walllight.js";
import { loadStickModel } from "./src/objects/stick.js";

import { loadPaintingcowModel } from "./src/objects/painting-cow.js";
import { loadChandleModel } from "./src/objects/chandle.js";
import { loadCarpetModel } from "./src/objects/carpet.js";
import { loadChairModel } from "./src/objects/chair.js";
import { loadPdogModel } from "./src/objects/pdog.js";
import { loadPhorseModel } from "./src/objects/phorse.js";
import { loadDoorModel } from "./src/objects/door.js";
import { loadDoor2Model } from "./src/objects/door2.js";
import { loadDoor3Model } from "./src/objects/door3.js";
import { loadTableModel } from "./src/objects/table.js";
import { loadPianoModel } from "./src/objects/piano.js";
import { loadBirdModel } from "./src/objects/bird.js";
import { loadChair2Model } from "./src/objects/chair2.js";
import { loadWallModel } from "./src/objects/wall.js";
import { loadHorseheadModel } from "./src/objects/horsehead.js";
import { loadOrderModel } from "./src/objects/order.js";
import { loadCameraModel } from "./src/objects/camera.js";
import { loadPaperModel } from "./src/objects/paper.js";
import { loadStatueModel } from "./src/objects/statue.js";
import { loadPhoneModel } from "./src/objects/phone.js";
import { startAudio, stopAudio } from "./src/audioGuide.js";


let { camera, controls, renderer } = setupScene();

// setupAudio(camera);

const textureLoader = new THREE.TextureLoader();

const walls = createWalls(scene, textureLoader);
 
const floor = setupFloor(scene);
const ceiling = createCeiling(scene, textureLoader);
const paintings = createPaintings(scene, textureLoader);
const lighting = setupLighting(scene, paintings);

createBoundingBoxes(walls);
createBoundingBoxes(paintings);

addObjectsToScene(scene, paintings);

lightingOn(scene, camera);

setupPlayButton(controls);

setupEventListeners(controls, camera);

clickHandling(renderer, camera,   scene);

setupRendering(scene, camera, renderer, paintings, controls, walls);

//general
loadWindowModel(scene);
loadCurtainModel(scene);
loadChandleModel(scene);
loadCarpetModel(scene);

// //front room

 

loadFireplaceModel(scene, (FireplaceModel) => {
  clickHandling(renderer, camera,  [FireplaceModel]);
});
 
loadPaintingcowModel(scene, (PaintingcowModel) => {
  clickHandling(renderer, camera,  [PaintingcowModel]);
});

loadPdogModel(scene);
 
loadPhorseModel(scene, (PhorseModel) => {
  clickHandling(renderer, camera, [PhorseModel]);
});


//room right

loadBookshelfModel(scene);
loadBookshelf2Model(scene);
loadTableModel(scene); 
loadPianoModel(scene); 
loadBirdModel(scene); 
loadPainting1Model(scene); 
loadPainting2Model(scene); 
loadPtopModel(scene); 
loadWalllightModel(scene); 

 
 
//room left
loadChairModel(scene);
loadChair2Model(scene); 
 
loadPhoneModel(scene, (WallPhone) => {
  clickHandling(renderer, camera, [WallPhone]);
});

loadWallModel(scene, (WallModel) => {
  clickHandling(renderer, camera, [WallModel]);
});

loadCameraModel(scene, (loadCamera) => {
  clickHandling(renderer, camera, [loadCamera]);
});


loadOrderModel(scene, (loadedOrder) => {
  clickHandling(renderer, camera, [loadedOrder]);
});

loadHorseheadModel(scene, (loadedHorsehead) => {
  clickHandling(renderer, camera, [loadedHorsehead]);
});
 

loadDoorModel(scene, (loadedDoor) => {
  clickHandling(renderer, camera, [loadedDoor]);
});

loadPaperModel(scene, (loadedPaper) => {
  clickHandling(renderer, camera, [loadedPaper]);
});

loadStatueModel(scene, (loadedStatue) => {
  clickHandling(renderer, camera, [loadedStatue]);
});


 
 
loadDoor2Model(scene, (loadedDoor2) => {
  clickHandling(renderer, camera, [loadedDoor2]);
});

loadDoor3Model(scene, (loadedDoor3) => {
  clickHandling(renderer, camera, [loadedDoor3]);
});
 
loadDresserModel(scene);


function addLight(scene) {
  let count = document.getElementById('addNumber').size;
  console.log('counter', counter);

  if (counter.size === 9) {
       
      setTimeout(() => {
        scene.traverse((object) => {
          if (object instanceof THREE.Light) {
            object.visible = false;
          }
        });

        const fireLight1 = new THREE.PointLight(0x3b7a50, 500);
        fireLight1.position.set(0, 1.7, -25);
        scene.add(fireLight1);

        
const pointLightHelper = new THREE.PointLightHelper( fireLight1, 0.4 );
scene.add( pointLightHelper );

        document.querySelector("#gameopen").innerHTML =
          '<p>Félicitations ! Vous êtes maintenant prêt à commencer le jeu. Cliquez sur la cheminée.</p>';


          
      }, 7000);

 
       
  }
}



 
document.addEventListener('click', function(event) {
  addLight(scene);
});





function animate() {
    requestAnimationFrame(animate);
  
   
  
    // Update any ongoing animations
    TWEEN.update();
  
    renderer.render(scene, camera);
  }
  
  // Start the animation loop
  animate();

 

  
 
 

setupVR(renderer);
loadStickModel(scene); 
