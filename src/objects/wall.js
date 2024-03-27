import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadWallModel = (scene,  callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/wall.glb",
    function (glb) {
      const wall = glb.scene;

      console.log("wall", glb);

      // Position the wall at the center of the floor
      wall.position.set(-19.7, 3.2, 12.5);

      wall.userData = {
        id: 8,
        name: 'wall',
        interactive: true,
        title: "<h2>Nathalie Micas et Anna Klumpke</h2>",
        texteng: "<p> Rosa Bonheur n'a jamais eu de mari, mais elle n'a pas non plus vécu  seule toute sa vie. Elle a passé de nombreuses années avec son amie  d'enfance, Nathalie Micas, et plus tard avec la peintre Anna Klumpke  jusqu'à la fin de sa vie.</p>",
        text: "<p>Rosa Bonheur never had a husband, but she didn't live alone all her life either. She spent many years with her childhood friend, Nathalie Micas, and later with the painter Anna Klumpke until the end of her life.</p>",
        texteng: " Nathalie Micas et Anna Klumpke",
      
        position: {
          top: 30,
          left: 10,
        },
        cam: {
          x: 0,
          y: 4,
          z: 9,
        }

      };
      // wall.rotation.y = Math.PI / 2;

      // Scale if necessary
      const scale = 1.2;
      wall.scale.set(scale, scale, scale);

      // Iterate through all the meshes in the wall and update their materials
      // wall.traverse((child) => {
      //   if (child.isMesh) {
      //     child.material.metalness = 0.2;
      //   }
      // });

      // Add the wall to the scene
      scene.add(wall);
      if (callback && typeof callback === 'function') {
        callback(wall);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading wall model", error);
    }
  );
};
