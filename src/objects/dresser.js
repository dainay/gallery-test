
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadDresserModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/dresser/dresser.glb",
    function (glb) {
      const dresser = glb.scene;

      console.log("DRESSER", glb);

      // // Position the statue at the center of the floor
      dresser.position.set(-9, -3.2, 20);
dresser.rotation.y = Math.PI;
      // // Scale if necessary

      const scale = 5;
      dresser.scale.set(4, scale, scale);

      // // Iterate through all the meshes in the statue and update their materials
      // dresser.traverse((child) => {
      //   if (child.isMesh) {
      //     map: child.material.map,
      // //       // Modify child.material here to improve appearance
      //       // (child.material.metalness = 0.3),
      //       // (child.material.roughness = 0.1),
      //       // Cast shadow
      //       (child.castShadow = true);

      // //     // console.log("Statue Material:", child.material);
      //   }
      // });

      // Add the statue to the scene
      scene.add(dresser);
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
