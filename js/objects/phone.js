import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadPhoneModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/phone.glb",
    function (glb) {
      const phone = glb.scene;

      phone.userData = {
        id: 6,
        name: 'phone',
        interactive: true,
        title: "<h2>phone</h2>",
        titleeng: "<h2>phone</h2>",
        text: "<p>Alors que les lions sont utilisés comme symboles de puissance, Rosa Bonheur choisi ici de les peindre en famille, allongés calmement. <br> Rosa Bonheur voulait représenter les animaux fidèlement. Pour elle, le lion, comme n’importe quel animal, n’était pas un symbole, mais tout simplement un être vivant. Elle représente ici trois petits lionceaux aux côtés de leurs parents, dans un moment de calme. Il n’y a ni sang ni combat, ni puissance ni crainte. <br> Rosa connaissait bien les lions, bien que vivant en France près de Fontainebleau, puisqu’elle avait des lions de compagnie. Ils vivaient en effet librement chez elle. Elle pouvait donc observer leur comportement, paisible ou agité. <br> Pour Rosa, les études préparatoires étaient indispensables et constituaient une étape aussi importante que la réalisation du tableau en lui-même. Elle dira même à ses élèves « Gardez-vous de vouloir aller trop vite, avant de prendre les pinceaux, assurez d’abord votre crayon, devenez fortes dans la science du dessin. </p>",
      
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

      console.log("phone", glb);

      // Position the phone at the center of the floor
      phone.position.set(-7, 1.8, 17);
 
      // phone.rotation.z = Math.PI  ;
      // phone.rotation.z = Math.PI/ 3 ;
      // phone.rotation.x = Math.PI / 2;

      

      // Scale if necessary
      const scale = 2.3;
      phone.scale.set(scale, scale, scale);


       
     
      scene.add(phone);
      if (callback && typeof callback === 'function') {
        callback(phone);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading phone model", error);
    }
  );
};
