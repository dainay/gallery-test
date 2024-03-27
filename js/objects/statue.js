import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadStatueModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/statue.glb",
    function (glb) {
      const statue = glb.scene;

      statue.userData = {
        id: 7,
        name: 'statue',
        interactive: true,
        title: "<h2>Statue d'une vache </h2>",
        titleeng: "<h2>Statue of a bull</h2>",
        text: "<p>Rosa Bonheur est née dans une famille d’artistes. Son père, étant professeur de peinture, lui a enseigné les bases de cet art. Ses frères et sœurs sont tous des artistes, mais c’est elle qui a eu le plus de succès. Son activité principale était la peinture et le crayonner, mais elle avait également de grandes compétences en sculpture. Elle utilisait ce talent surtout pour étudier l’anatomie des animaux en trois dimensions. </p>",
        texteng: '<p>Rosa Bonheur was born into a family of artists. Her father, who was a painting teacher, taught her how to do art. All her brothers and sisters were artists too, but she was the most successful. She mostly painted and drew, but she was also really good at sculpting. She used this skill mainly to study how animals looked in 3D.</p>',
      
        position: {
          top: 30,
          left: 30,
        },
        cam: {
          x: -8,
          y: 4,
          z: 10,
        }

      };

      console.log("statue", glb);

      // Position the statue at the center of the floor
      statue.position.set(-11, 1.5, 17);
 
      // statue.rotation.z = Math.PI  ;
      // statue.rotation.z = Math.PI/ 3 ;
      // statue.rotation.x = Math.PI / 2;

      

      // Scale if necessary
      const scale = 0.9;
      statue.scale.set(scale, scale, scale);


       
     
      scene.add(statue);
      if (callback && typeof callback === 'function') {
        callback(statue);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading statue model", error);
    }
  );
};
