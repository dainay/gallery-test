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
        title: "<h2>Order</h2>",
        text: "<p>Alors que les lions sont utilisés comme symboles de puissance, Rosa Bonheur choisi ici de les peindre en famille, allongés calmement. <br> Rosa Bonheur voulait représenter les animaux fidèlement. Pour elle, le lion, comme n’importe quel animal, n’était pas un symbole, mais tout simplement un être vivant. Elle représente ici trois petits lionceaux aux côtés de leurs parents, dans un moment de calme. Il n’y a ni sang ni combat, ni puissance ni crainte. <br> Rosa connaissait bien les lions, bien que vivant en France près de Fontainebleau, puisqu’elle avait des lions de compagnie. Ils vivaient en effet librement chez elle. Elle pouvait donc observer leur comportement, paisible ou agité. <br> Pour Rosa, les études préparatoires étaient indispensables et constituaient une étape aussi importante que la réalisation du tableau en lui-même. Elle dira même à ses élèves « Gardez-vous de vouloir aller trop vite, avant de prendre les pinceaux, assurez d’abord votre crayon, devenez fortes dans la science du dessin. </p>",
      
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
