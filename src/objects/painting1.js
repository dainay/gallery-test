import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadPainting1Model = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/painting1.glb",
    function (glb) {
      const painting1 = glb.scene;

      console.log("painting1", glb);
      painting1.position.set(-12, -3, -26);
      const scale = 2.4;
      painting1.scale.set(scale, scale, scale);
      painting1.rotation.y = Math.PI / 2;


 

      scene.add(painting1);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading painting1 model", error);
    }
  );
};
