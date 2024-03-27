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
        title: "<h2>Alouette</h2>",
        titleeng: "<h2>Lark call</h2>",
        text: "<p>Cet objet étonnant est un appeau à alouette. Il était couramment utilisé pour la chasse à l’alouette : en effet, les bruits qu’il fait attirent les oiseaux. Rosa Bonheur l’utilisait également pour les attirer. Mais elle ne cherchait pas à les abattre ; une fois les oiseaux près d'elle, elle pouvait les dessiner à sa guise.</p>",
        texteng: "This remarkable object is a lark call. It was commonly used for lark hunting: indeed, the sounds it makes attract the birds. Rosa Bonheur also used it to attract them. However, she wasn't seeking to shoot them; once the birds were near her, she could draw them as she pleased.",
      
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
