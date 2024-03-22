import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadPaintingtopModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/paintingtop.glb",
    function (glb) {
      const paintingtop = glb.scene;

      console.log("paintingtop", glb);
      paintingtop.position.set(19, 13,-12);
      const scale = 1;
      paintingtop.scale.set(scale, scale, scale);
      // paintingtop.rotation.y = Math.PI ;  


 

      scene.add(paintingtop);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading paintingtop model", error);
    }
  );
};
