import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadCameraModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/camera.glb",
    function (glb) {
      const cameraobj = glb.scene;

      console.log("camera", glb);

      cameraobj.userData = {
        id: 3,
        name: 'camera',
        interactive: true,
        title: "<h2>Camera</h2>",
        text: "<p>Alors que les lions sont utilisés comme symboles de puissance, Rosa Bonheur choisi ici de les peindre en famille, allongés calmement. <br> Rosa Bonheur voulait représenter les animaux fidèlement. Pour elle, le lion, comme n’importe quel animal, n’était pas un symbole, mais tout simplement un être vivant. Elle représente ici trois petits lionceaux aux côtés de leurs parents, dans un moment de calme. Il n’y a ni sang ni combat, ni puissance ni crainte. <br> Rosa connaissait bien les lions, bien que vivant en France près de Fontainebleau, puisqu’elle avait des lions de compagnie. Ils vivaient en effet librement chez elle. Elle pouvait donc observer leur comportement, paisible ou agité. <br> Pour Rosa, les études préparatoires étaient indispensables et constituaient une étape aussi importante que la réalisation du tableau en lui-même. Elle dira même à ses élèves « Gardez-vous de vouloir aller trop vite, avant de prendre les pinceaux, assurez d’abord votre crayon, devenez fortes dans la science du dessin. </p>",
      
        position: {
          top: 30,
          left: 30,
        },
        cam: {
          x: 6,
          y: 4,
          z: -8,
        }

      };
 
      cameraobj.position.set(10, 1.2, -4.6);
      cameraobj.rotation.y = Math.PI / 0.8;
 
      const scale = 0.7;
      cameraobj.scale.set(scale, scale, scale);

      
      scene.add( cameraobj);
      if (callback && typeof callback === 'function') {
        callback( cameraobj);
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading camera model", error);
    }
  );
};
