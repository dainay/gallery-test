import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


export const loadPaintingcowModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/paintingcow.glb",
    function (glb) {
      const paintingcow = glb.scene;

      console.log("Painting Cow", glb);



      paintingcow.userData = {
        id: 5,
        name: 'phorse',
        interactive: true,
        title: "<h2>Horse paining</h2>",
        titleeng: "<h2>Horse paining</h2>",
        text: "<p>Alors que les lions sont utilisés comme symboles de puissance, Rosa Bonheur choisi ici de les peindre en famille, allongés calmement. <br> Rosa Bonheur voulait représenter les animaux fidèlement. Pour elle, le lion, comme n’importe quel animal, n’était pas un symbole, mais tout simplement un être vivant. Elle représente ici trois petits lionceaux aux côtés de leurs parents, dans un moment de calme. Il n’y a ni sang ni combat, ni puissance ni crainte. <br> Rosa connaissait bien les lions, bien que vivant en France près de Fontainebleau, puisqu’elle avait des lions de compagnie. Ils vivaient en effet librement chez elle. Elle pouvait donc observer leur comportement, paisible ou agité. <br> Pour Rosa, les études préparatoires étaient indispensables et constituaient une étape aussi importante que la réalisation du tableau en lui-même. Elle dira même à ses élèves « Gardez-vous de vouloir aller trop vite, avant de prendre les pinceaux, assurez d’abord votre crayon, devenez fortes dans la science du dessin. </p>",
      
        position: {
          top: 30,
          left: 10,
        },
        cam: {
          x: 0,
          y: 4,
          z: -5,
        }

      };

      // // Position the statue at the center of the floor
      paintingcow.position.set(-12, 4, -22);
      paintingcow.rotation.y = -Math.PI / 8;

      // // Scale if necessary

      const scale = 7;
      paintingcow.scale.set(scale, scale, scale);

      // // Iterate through all the meshes in the statue and update their materials
      paintingcow.traverse((child) => {
        if (child.isMesh) {
          map: child.material.map,
      //       // Modify child.material here to improve appearance
            (child.material.metalness = 0),
            // (child.material.roughness = 0.1),
            // Cast shadow
            (child.castShadow = true);

      //     // console.log("Statue Material:", child.material);
        }
      });

      // Add the statue to the scene
      scene.add(paintingcow);
      if (callback && typeof callback === 'function') {
        callback( paintingcow);
      }
    },
function (xhr) {
  console.log((xhr.loaded/xhr.total * 100) + '% loaded')
}, function (error){
  console.log('Error loading dresser model', error);
}
  );

};
