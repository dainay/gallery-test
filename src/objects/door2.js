import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadDoor2Model = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/door2.glb",
    function (glb) {
      const door2 = glb.scene;

      console.log("Door2", glb);

      // Position the door2 at the center of the floor
      door2.position.set(15, -3, 20);

     
      door2.userData = {
        id: 12,
        name: 'door2',
        interactive: true,
      };
      door2.rotation.y = Math.PI;

      // Scale if necessary
      const scale = 6;
      door2.scale.set(scale, scale, scale);

      

 

        
      scene.add(door2);
     
      if (callback && typeof callback === 'function') {
        callback(door2);
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
