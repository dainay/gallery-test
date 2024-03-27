import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadWalllightModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/walllight.glb",
    function (glb) {
      const walllight = glb.scene;

      console.log("walllight", glb);
      walllight.position.set(-20,10,13);
      const scale = 0.09;
      walllight.rotation.y = Math.PI ;
      walllight.scale.set(scale, scale, scale);
     

 

      scene.add(walllight);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading walllight model", error);
    }
  );
};
