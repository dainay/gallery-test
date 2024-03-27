import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadExitModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "/models/exit.glb",
    function (glb) {
      const exit = glb.scene;



      exit.userData = {
        id: 100,
        name: 'exit',
        interactive: false,
      };

      console.log("exit", glb);

      // Position the exit at the center of the floor
      exit.position.set(0, 12, 5.1);

      
      
      exit.rotation.y = Math.PI / 2;

      // Scale if necessary
      const scale = 5;
      
      exit.scale.set(scale, scale, scale);

      // Iterate through all the meshes in the exit and update their materials
      // exit.traverse((child) => {
      //   if (child.isMesh) {
      //     child.material.metalness = 0.2;
      //   }
      // });

      // Add the exit to the scene
      scene.add(exit);
      if (callback && typeof callback === 'function') {
        callback(exit);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading exit model", error);
    }
  );
};
