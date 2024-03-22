import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadPainting2Model = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/painting2.glb",
    function (glb) {
      const painting2 = glb.scene;

      console.log("painting2", glb);
      painting2.position.set(-11.7, -3, -34);
      const scale = 2.4;
      painting2.scale.set(scale, scale, scale);
      painting2.rotation.y = Math.PI / 2.1;


 

      scene.add(painting2);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading painting2 model", error);
    }
  );
};
