import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadChairModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/chair.glb",
    function (glb) {
      const chair = glb.scene;

      console.log("Chair", glb);

      // Position the chair at the center of the floor
      chair.position.set(-5, -2.8, -18);

      // Scale if necessary
      const scale = 2.2;

      chair.scale.set(-1*scale, scale, scale);
      // Reflect the model horizontally
      
      chair.rotation.y = Math.PI /1.4;

      

    

      // Iterate through all the meshes in the chair and update their materials
      // chair.traverse((child) => {
      //   if (child.isMesh) {
      //     child.material.metalness = 0;
      
      //   }
      // });

      // Add the chair to the scene
      scene.add(chair);
   



    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading chair model", error);
    }
  );
};
