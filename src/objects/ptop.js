import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadPtopModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/ptop.glb",
    function (glb) {
      const ptop = glb.scene;

      console.log("ptop", glb);
      ptop.position.set(19.6, 14, -13);
      const scale = 3;
      ptop.rotation.y = Math.PI / 2;
      ptop.scale.set(scale, scale, 9);
      // ptop.rotation.y = Math.PI ;  
      // ptop.traverse((child) => {
      //   if (child.isMesh) {
      //     child.material.metalness = 1;
         
      //   }
      // });

 

      scene.add(ptop);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading ptop model", error);
    }
  );
};
