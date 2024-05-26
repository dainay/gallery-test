
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadGalleryModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/gallery.glb",
    function (glb) {
      const gallery = glb.scene;

      console.log("gallery", glb);

      // // Position the statue at the center of the floor
      gallery.position.set(0, -3.2, 20);
gallery.rotation.y = Math.PI;
      // // Scale if necessary

      const scale = 3;
      gallery.scale.set(scale+0.5, scale, scale);

      // // Iterate through all the meshes in the statue and update their materials
      // gallery.traverse((child) => {
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

      gallery.traverse((node) => {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            node.BoundingBox = new THREE.Box3().setFromObject(node);
        }
    });

      // Add the statue to the scene
      scene.add(gallery);
       if (callback) callback(room); 
    },
function (xhr) {
  console.log((xhr.loaded/xhr.total * 100) + '% loaded')
}, function (error){
  console.log('Error loading gallery model', error);
}
  );

};

//     undefined,
//     (error) => {
//       console.error("An error occurred while loading the model.", error);
//     }
//   );
// };
