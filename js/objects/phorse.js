import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadPhorseModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/phorse.glb",
    function (glb) {
      const phorse = glb.scene;

      console.log("Phorse", glb);

      // Position the phorse at the center of the floor
      phorse.position.set(9, 3, -17);

      phorse.userData = {
        id: 4,
        name: 'phorse',
        interactive: true,
        title: "<h2>Horse paining</h2>",
        text: "<p>Alors que les lions sont utilisés comme symboles de puissance, Rosa Bonheur choisi ici de les peindre en famille, allongés calmement. <br> Rosa Bonheur voulait représenter les animaux fidèlement. Pour elle, le lion, comme n’importe quel animal, n’était pas un symbole, mais tout simplement un être vivant. Elle représente ici trois petits lionceaux aux côtés de leurs parents, dans un moment de calme. Il n’y a ni sang ni combat, ni puissance ni crainte. <br> Rosa connaissait bien les lions, bien que vivant en France près de Fontainebleau, puisqu’elle avait des lions de compagnie. Ils vivaient en effet librement chez elle. Elle pouvait donc observer leur comportement, paisible ou agité. <br> Pour Rosa, les études préparatoires étaient indispensables et constituaient une étape aussi importante que la réalisation du tableau en lui-même. Elle dira même à ses élèves « Gardez-vous de vouloir aller trop vite, avant de prendre les pinceaux, assurez d’abord votre crayon, devenez fortes dans la science du dessin. </p>",
      
        position: {
          top: 30,
          left: 10,
        },
        cam: {
          x: 0,
          y: 4,
          z: 4,
        }

      };
      phorse.rotation.y = Math.PI * -0.25;

      // Scale if necessary
      const scale = 2.4;
      phorse.scale.set(scale, scale, scale);

      // Iterate through all the meshes in the phorse and update their materials
      // phorse.traverse((child) => {
      //   if (child.isMesh) {
      //     child.material.metalness = 0.2;
      //   }
      // });

      // Add the phorse to the scene
      scene.add(phorse);
      if (callback && typeof callback === 'function') {
        callback( phorse);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading phorse model", error);
    }
  );
};
