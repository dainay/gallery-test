
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadBirdModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/bird.glb",
    function (glb) {
      const bird = glb.scene;

      console.log("bird", glb);

      
      bird.userData = {
        id: 2,
        name: 'bird',
        interactive: true,
      };

      // // Position the statue at the center of the floor
      bird.position.set(18, 10, -8);
bird.rotation.y = Math.PI;
    
      const scale = 0.5;
      bird.scale.set(scale, scale, scale);

       const bird2 = bird.clone();
       bird2.position.set(17.5, 9, -10);
       bird2.scale.set(0.3, 0.3, 0.3);


      bird.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 1;
          child.material.roughness = 0.5;
        }
      });

      bird2.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 1;
          child.material.roughness = 0.5;
        }
      });

      scene.add(bird, bird2);

    },
function (xhr) {
  console.log((xhr.loaded/xhr.total * 100) + '% loaded')
}, function (error){
  console.log('Error loading bird model', error);
}
  );

};

//     undefined,
//     (error) => {
//       console.error("An error occurred while loading the model.", error);
//     }
//   );
// };
