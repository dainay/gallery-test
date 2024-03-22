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
        title: "<h2>Animals</h2>",
        text: "<p>Alors que les lions sont utilisés comme symboles de puissance, Rosa Bonheur choisi ici de les peindre en famille, allongés calmement. <br> Rosa Bonheur voulait représenter les animaux fidèlement. Pour elle, le lion, comme n’importe quel animal, n’était pas un symbole, mais tout simplement un être vivant. Elle représente ici trois petits lionceaux aux côtés de leurs parents, dans un moment de calme. Il n’y a ni sang ni combat, ni puissance ni crainte. <br> Rosa connaissait bien les lions, bien que vivant en France près de Fontainebleau, puisqu’elle avait des lions de compagnie. Ils vivaient en effet librement chez elle. Elle pouvait donc observer leur comportement, paisible ou agité. <br> Pour Rosa, les études préparatoires étaient indispensables et constituaient une étape aussi importante que la réalisation du tableau en lui-même. Elle dira même à ses élèves « Gardez-vous de vouloir aller trop vite, avant de prendre les pinceaux, assurez d’abord votre crayon, devenez fortes dans la science du dessin. </p>",
      
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
