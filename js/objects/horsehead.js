import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadHorseheadModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/horse.glb",
    function (glb) {
      const horsehead = glb.scene;

      horsehead.userData = {
        id: 2,
        name: 'horse',
        interactive: true,
        title: "<h2>Les têtes des animaux</h2>",
        titleeng: "<h2>Animals' heads</h2>",
        text: "<p>  Rosa Bonheur had a great number of pets at home : dogs, horses, sheep, deer, and even lions. After their death, she had them taxidermied. This practice may seem very strange today, but in her time, it was more common : through this, Bonheur could keep the animals she loved so much close to her. </p>",
        texteng: "  Rosa Bonheur had a great number of pets at home : dogs, horses, sheep, deer, and even lions. After their death, she had them taxidermied. This practice may seem very strange today, but in her time, it was more common : through this, Bonheur could keep the animals she loved so much close to her. </p>",
      
        position: {
          top: 30,
          left: 30,
        },
        cam: {
          x: 5,
          y: 4,
          z: 0,
        }

      };

      console.log("horsehead", glb);

      // Position the horsehead at the center of the floor
      horsehead.position.set(19, 12, 6);
 
      // horsehead.rotation.y = -Math.PI / 2.5 ;
      horsehead.rotation.z = Math.PI/ 3 ;
      horsehead.rotation.x = Math.PI / 4;

      

      // Scale if necessary
      const scale = 2.2;
      horsehead.scale.set(scale, scale, scale);


      const horsehead2 = horsehead.clone();
      horsehead2.scale.set(scale, scale, -scale);
      horsehead2.position.set(19, 12, -3);
      horsehead2.rotation.x = -Math.PI /4 ;
      horsehead2.rotation.z = Math.PI /3 ;
     
      scene.add(horsehead, horsehead2);
      if (callback && typeof callback === 'function') {
        callback(horsehead);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading horsehead model", error);
    }
  );
};
