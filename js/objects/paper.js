import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadPaperModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/paper.glb",
    function (glb) {
      const paper = glb.scene;

      paper.userData = {
        id: 5,
        name: 'Paper',
        interactive: true,
        title: "<h2>Paper</h2>",
        text: "<p>Alors que les lions sont utilisés comme symboles de puissance, Rosa Bonheur choisi ici de les peindre en famille, allongés calmement. <br> Rosa Bonheur voulait représenter les animaux fidèlement. Pour elle, le lion, comme n’importe quel animal, n’était pas un symbole, mais tout simplement un être vivant. Elle représente ici trois petits lionceaux aux côtés de leurs parents, dans un moment de calme. Il n’y a ni sang ni combat, ni puissance ni crainte. <br> Rosa connaissait bien les lions, bien que vivant en France près de Fontainebleau, puisqu’elle avait des lions de compagnie. Ils vivaient en effet librement chez elle. Elle pouvait donc observer leur comportement, paisible ou agité. <br> Pour Rosa, les études préparatoires étaient indispensables et constituaient une étape aussi importante que la réalisation du tableau en lui-même. Elle dira même à ses élèves « Gardez-vous de vouloir aller trop vite, avant de prendre les pinceaux, assurez d’abord votre crayon, devenez fortes dans la science du dessin. </p>",
      
        position: {
          top: 30,
          left: 30,
        },
        cam: {
          x: -4,
          y: 4,
          z: -18,
        }

      };

      console.log("paper", glb);

      // Position the paper at the center of the floor
      paper.position.set(-4.4, 0.2, -18);
 
      paper.rotation.z = Math.PI  ;
      // paper.rotation.z = Math.PI/ 3 ;
      paper.rotation.x = Math.PI / 2;

      

      // Scale if necessary
      const scale = 0.4;
      paper.scale.set(scale, scale, scale);


       
     
      scene.add(paper);
      if (callback && typeof callback === 'function') {
        callback(paper);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading paper model", error);
    }
  );
};
