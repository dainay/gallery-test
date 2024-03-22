import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadChair2Model = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/chair2.glb",
    function (glb) {
      const chair2 = glb.scene;

      console.log("chair2", glb);

      // Position the chair2 at the center of the floor
      chair2.position.set(-15, -3, -2);

      // Scale if necessary
      const scale = 5;

      chair2.scale.set(scale, scale, scale);
      // Reflect the model horizontally
      
      chair2.rotation.y = Math.PI / 4;

      const chair3 = chair2.clone();
      chair3.position.set(8, -3, 18);
      chair3.rotation.y = -Math.PI * 0.95 ;
    

      // Iterate through all the meshes in the chair2 and update their materials
      chair2.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 0;
      
        }
      });

      // Add the chair2 to the scene
      scene.add(chair2);
      scene.add(chair3);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading chair2 model", error);
    }
  );
};
