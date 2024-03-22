import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


export const loadFireplaceModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/fireplace.glb",
    function (glb) {
      const fireplace = glb.scene;

      console.log("Fireplace", glb);

      // Position the fireplace at the center of the floor
      fireplace.position.set(0, 6, -27);

      // Scale if necessary
      const scale = 1.8;
      fireplace.scale.set(scale, scale, scale);

      // Iterate through all the meshes in the fireplace and update their materials
      // fireplace.traverse((child) => {
      //   if (child.isMesh) {
      //     child.material.metalness = 0;
      //     child.castShadow = true;
      //   }
      // });

      // Add the fireplace to the scene
      scene.add(fireplace);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading fireplace model", error);
    }
  );
};
