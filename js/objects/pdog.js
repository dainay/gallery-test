import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


export const loadPdogModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/pdog.glb",
    function (glb) {
      const pdog = glb.scene;

      console.log("Pdog", glb);

      // Position the pdog at the center of the floor
      pdog.position.set(16, 13, -24.5);
       
      // Rotate the pdog by 120 degrees
      pdog.rotation.y = Math.PI * 1.3;
   
     

      // Scale if necessary
      const scale = 1;
      pdog.scale.set(scale, scale, scale);

      // Iterate through all the meshes in the pdog and update their materials
      // pdog.traverse((child) => {
      //   if (child.isMesh) {
      //     child.material.metalness = 0.2;
         
      //   }
      // });

      // Add the pdog to the scene
      scene.add(pdog);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading pdog model", error);
    }
  );
};
