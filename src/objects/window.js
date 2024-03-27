
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadWindowModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/window1.glb",
    function (glb) {
      const window = glb.scene;

      console.log("Window", glb);

      // // Position the statue at the center of the floor
      window.position.set(-10, 3.6, -15);

      // // Scale if necessary

      const scale = 0.54;
      window.scale.set (scale, 0.69, scale);
      // window.scale.set(3, 10, 9.5);

      // // Iterate through all the meshes in the statue and update their materials
      window.traverse((child) => {
        if (child.isMesh) {
          map: child.material.map,
      //       // Modify child.material here to improve appearance
            (child.material.metalness = 0),
            // (child.material.roughness = 0.1),
            // Cast shadow
            (child.castShadow = true);

      //     // console.log("Statue Material:", child.material);
        }
      });

      let windowL = window.clone();
      windowL.scale.set(0.21, 0.46, 0.26);
      windowL.position.set(-10.8, 21.1, -25.3);
      windowL.rotation.z = Math.PI/ 4;
      windowL.rotation.x = Math.PI / 2;
      // windowL.rotation.z = Math.PI /3  ;

      let windowR = window.clone();
      windowR.scale.set(0.35, 0.3, 0.35);
      windowR.position.set(26, 2.8, -6);
    

      
      scene.add(window);
      scene.add(windowL);
      scene.add(windowR);
    },
function (xhr) {
  console.log((xhr.loaded/xhr.total * 100) + '% loaded')
}, function (error){
  console.log('Error loading dresser model', error);
}
  );

};

//     undefined,
//     (error) => {
//       console.error("An error occurred while loading the model.", error);
//     }
//   );
// };
