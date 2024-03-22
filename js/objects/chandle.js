import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadChandleModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/chandle.glb",
    function (glb) {
      const chandle = glb.scene;

      console.log("Chandle", glb);

      // Position the statue at the center of the floor
      chandle.position.set(0, 12, -10);
       

      // Scale if necessary
      const scale = 0.0046;
      chandle.scale.set(scale, scale, scale);

      // Iterate through all the meshes in the statue and update their materials
      chandle.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 0;
        }
      });

      // Add the statue to the scene
      scene.add(chandle);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading dresser model", error);
    }
  );
};
