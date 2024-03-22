import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


export const loadPianoModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/piano.glb",
    function (glb) {
      const piano = glb.scene;

      console.log("PIANO", glb);

      // Position the piano at the desired location
      piano.position.set(37, -3.3, -4);
      piano.rotation.y = -Math.PI * 0.8;

      // Scale the piano if necessary
      const scale = 0.055;
      piano.scale.set(scale, scale, scale);

      // Add the piano to the scene
      scene.add(piano);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading piano model", error);
    }
  );
};
