import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadCarpetModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/carpet.glb",
    function (glb) {
      const carpet = glb.scene;

      console.log("Carpet", glb);

      // Position the carpet at the center of the floor
      carpet.position.set(0, -3, -4);

      // Scale if necessary
      const scale = 5;
      carpet.scale.set(scale, scale, scale);
      carpet.rotation.y = Math.PI / 2;

      // Iterate through all the meshes in the carpet and update their materials
      carpet.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 0;
        }
      });

      // Add the carpet to the scene
      scene.add(carpet);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading carpet model", error);
    }
  );
};
