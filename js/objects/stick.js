import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadStickModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/stick.glb",
    function (glb) {
      const stick = glb.scene;

      console.log("stick", glb);
      stick.position.set(-8.7,1.7,18);
      const scale = 3;
  
      stick.scale.set(scale, scale, scale);
     

 

      scene.add(stick);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading stick model", error);
    }
  );
};
