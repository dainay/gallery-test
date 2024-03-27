import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadLampModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../public/models/lamp.glb",
    function (glb) {
      const lamp = glb.scene;



      lamp.userData = {
        id: 101,
        name: 'lamp',
        interactive: false,
      };

      console.log("lamp", glb);

      // Position the lamp at the center of the floor
      lamp.position.set(6, 6, 4);

      
      
      lamp.rotation.x = Math.PI ;
      lamp.rotation.y = Math.PI ;

      // Scale if necessary
      const scale = 5;
      
      lamp.scale.set(scale, scale, scale);

    const lamp2 = lamp.clone();
    lamp2.position.set(-6, 6, 4);
 
      scene.add(lamp);
      scene.add(lamp2);
      
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading lamp model", error);
    }
  );
};
