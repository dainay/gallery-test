import * as THREE from "three";
import * as TWEEN from '@tweenjs/tween.js';


import { counter } from "./js/clickHandling.js";
 
import { scene, setupScene } from "./js/scene.js";
import { createPaintings } from "./js/paintings.js";
import { createWalls } from "./js/walls.js";
import { setupLighting } from "./js/lighting.js";
import { setupFloor } from "./js/floor.js";
import { createCeiling } from "./js/ceiling.js";
import { createBoundingBoxes } from "./js/boundingBox.js";
import { setupRendering } from "./js/rendering.js";
import { setupEventListeners, lightingOn } from "./js/eventListeners.js";
import { addObjectsToScene } from "./js/sceneHelpers.js";
import { setupPlayButton } from "./js/menu.js";
// import { setupAudio } from "./js/audioGuide.js";
import { clickHandling } from "./js/clickHandling.js";
import { setupVR } from "./js/VRSupport.js";



import { loadDresserModel } from "./js/objects/dresser.js";
 
import { loadWindowModel } from "./js/objects/window.js";
import { loadCurtainModel } from "./js/objects/curtain.js";
import { loadBookshelfModel } from "./js/objects/bookshelf.js";
import { loadBookshelf2Model } from "./js/objects/bookshelf2.js";
import { loadFireplaceModel } from "./js/objects/fireplace.js";
import { loadPainting1Model } from "./js/objects/painting1.js";
import { loadPainting2Model } from "./js/objects/painting2.js";
import { loadPtopModel } from "./js/objects/ptop.js";

import { loadWalllightModel } from "./js/objects/walllight.js";
import { loadStickModel } from "./js/objects/stick.js";

import { loadPaintingcowModel } from "./js/objects/painting-cow.js";
import { loadChandleModel } from "./js/objects/chandle.js";
import { loadCarpetModel } from "./js/objects/carpet.js";
import { loadChairModel } from "./js/objects/chair.js";
import { loadPdogModel } from "./js/objects/pdog.js";
import { loadPhorseModel } from "./js/objects/phorse.js";
import { loadDoorModel } from "./js/objects/door.js";
import { loadDoor2Model } from "./js/objects/door2.js";
import { loadDoor3Model } from "./js/objects/door3.js";
import { loadTableModel } from "./js/objects/table.js";
import { loadPianoModel } from "./js/objects/piano.js";
import { loadBirdModel } from "./js/objects/bird.js";
import { loadChair2Model } from "./js/objects/chair2.js";
import { loadWallModel } from "./js/objects/wall.js";
import { loadHorseheadModel } from "./js/objects/horsehead.js";
import { loadOrderModel } from "./js/objects/order.js";
import { loadCameraModel } from "./js/objects/camera.js";
import { loadPaperModel } from "./js/objects/paper.js";
import { loadStatueModel } from "./js/objects/statue.js";
import { loadPhoneModel } from "./js/objects/phone.js";
import { startAudio, stopAudio } from "./js/audioGuide.js";


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
