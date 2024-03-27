import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadDoor3Model = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/door2.glb",
    function (glb) {
      const door3 = glb.scene;

      console.log("Door3", glb);

      
      door3.userData = {
        id: 13,
        name: 'door3',
        interactive: true,
      };

      // Position the door2 at the center of the floor
      door3.position.set(-16.8, -3, 20);

     
      door3.rotation.y = Math.PI;

      // Scale if necessary
      const scale = 6;
      door3.scale.set(scale, scale, scale);

      
 
        
      
      scene.add(door3);
      if (callback && typeof callback === 'function') {
        callback(door3);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading door2 model", error);
    }
  );
};
