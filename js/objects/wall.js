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
        id: 7,
        name: 'wall',
        interactive: true,
        title: "<h2>Wall</h2>",
        text: "<p>Alors que les lions sont utilisés comme symboles de puissance, Rosa Bonheur choisi ici de les peindre en famille, allongés calmement. <br> Rosa Bonheur voulait représenter les animaux fidèlement. Pour elle, le lion, comme n’importe quel animal, n’était pas un symbole, mais tout simplement un être vivant. Elle représente ici trois petits lionceaux aux côtés de leurs parents, dans un moment de calme. Il n’y a ni sang ni combat, ni puissance ni crainte. <br> Rosa connaissait bien les lions, bien que vivant en France près de Fontainebleau, puisqu’elle avait des lions de compagnie. Ils vivaient en effet librement chez elle. Elle pouvait donc observer leur comportement, paisible ou agité. <br> Pour Rosa, les études préparatoires étaient indispensables et constituaient une étape aussi importante que la réalisation du tableau en lui-même. Elle dira même à ses élèves « Gardez-vous de vouloir aller trop vite, avant de prendre les pinceaux, assurez d’abord votre crayon, devenez fortes dans la science du dessin. </p>",
      
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
