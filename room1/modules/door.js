import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadDoorModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/door.glb",
    function (glb) {
      const door = glb.scene;



      door.userData = {
        id: 1,
        name: 'door',
        interactive: true,
      };

      console.log("Door", glb);

      // Position the door at the center of the floor
      door.position.set(0, -2.5, 4);

      
      
      door.rotation.y = -Math.PI / 2;

      // Scale if necessary
      const scale = 4;
      
      door.scale.set(scale, scale, scale);

      // Iterate through all the meshes in the door and update their materials
      // door.traverse((child) => {
      //   if (child.isMesh) {
      //     child.material.metalness = 0.2;
      //   }
      // });

      // Add the door to the scene
      scene.add(door);
      if (callback && typeof callback === 'function') {
        callback(door);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading door model", error);
    }
  );
};
