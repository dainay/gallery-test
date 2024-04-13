import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadOrderModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/order.glb",
    function (glb) {
      const order = glb.scene;

      console.log("order", glb);

      order.userData = {
        id: 3,
        name: 'order',
        interactive: true,
        title: "<h2>Légion d'honneur</h2>",
        titleeng: "<h2>Legion of honor</h2>",
        text: "<p>Rosa Bonheur reçoit la légion d’honneur le 10 juin 1865, de la main de l’impératrice Eugénie.  En la lui offrant, cette dernière lui dit &nbsp;: «&nbsp;Enfin, vous voilà chevalier. Je suis si heureuse d’être la marraine de la première femme artiste qui reçoit cette haute distinction. J’ai voulu que le dernier acte de ma régence fût consacré à montrer qu’à mes yeux le génie n’a pas de sexe&nbsp;: «&nbsp;.</p>",
        texteng: 'Rosa Bonheur received the Legion of Honor on June 10, 1865, from the hand of French Empress Eugénie. While giving it to her, the Empress said, "At last, you are a knight. I am so happy to be the godmother of the first female artist to receive this high distinction. I wanted the final act of my regency to demonstrate that in my eyes, genius knows no gender."',
      
        position: {
          top: 50,
          left: 50,
        },
        cam: {
          x: -6,
          y: 4,
          z: 1,
        }

      };


      // Position the order at the center of the floor
      order.position.set(-9.5, 1.4, 1);

      // Scale if necessary
      const scale = 0.6;
      order.scale.set(scale, scale, scale);
      order.rotation.z = Math.PI / 2;

      
      scene.add(order);
      if (callback && typeof callback === 'function') {
        callback(order);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading order model", error);
    }
  );
};
