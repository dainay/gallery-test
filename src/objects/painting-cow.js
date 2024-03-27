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
        title: "<h2>Portrait de Dubufe</h2>",
        titleeng: "<h2>Portrait of Dubufe</h2>",
        text: "<p>Ce portrait de Rosa Bonheur a été réalisé par Édouard-Louis Dubufe en 1857, célèbre peintre de l’époque. Il peint alors Bonheur droite, un pinceau et un livre d’études dans les mains, appuyée à une commode. Toutefois, en voyant l’œuvre finale, Bonheur n’était pas satisfaite et préféra repeindre une vache au-dessus du meuble en bois dessiné par Dubufe. Cette dernière version du portrait lui ressemblait bien plus, selon elle.</p>",
        texteng: 'This portrait of Rosa Bonheur was painted by Édouard-Louis Dubufe in 1857, a famous painter of the time. He depicted Bonheur standing upright, holding a paintbrush and a study book, leaning against a chest of drawers. However, upon seeing the final work, Bonheur was not satisfied and preferred to repaint a cow above the wooden furniture drawn by Dubufe. According to her, this latter version of the portrait resembled her much more.',
      
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
