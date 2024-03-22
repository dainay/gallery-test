
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadCurtainModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/curtain.glb",
    function (glb) {
      const curtain = glb.scene;

      console.log("curtain", glb);

     const scale = 5;
      curtain.scale.set(2, scale, 10);
      curtain.position.set(-14.8, 15.5, -25.3);
      curtain.rotation.y = -Math.PI/3.9;
      // curtain.rotation.y = Math.PI;
      // curtain.rotation.y = Math.PI / 2;
      // windowL.rotation.z = Math.PI /3  ;

       

      
      scene.add(curtain);
     
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
