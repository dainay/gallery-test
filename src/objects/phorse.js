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
        title: "<h2>Chevaux</h2>",
        titleeng: "<h2>Horses</h2>",
        text: "<p>Ce tableau est la dernière œuvre de Rosa Bonheur. Puisqu'il est inachevé, il nous apporte une vision inédite de la manière dont Bonheur peignait. En effet, nous pouvons voir ici le croquis qu’elle faisait avant de peindre avec tous les détails que nous lui connaissons. Bonheur peignait donc les bases des éléments du tableau en brouillon, mais elle s’exerçait également énormément sur d’autres pages et feuilles d’études. Elle en avait ainsi une très grande collection. De son vivant, un admirateur de l’artiste proposa de lui racheter toutes ses études pour une somme d’argent faramineuse. Mais Bonheur ne voulut jamais les vendre, peu importe le prix qu’il lui offrait. Pour elle, ses études étaient plus importantes encore que les œuvres finies. </p>",
        texteng: 'This painting is the last work of Rosa Bonheur. Since it is unfinished, it provides us with a new insight into how Bonheur painted. Indeed, we can see here the sketches she made before painting with all the details that we know her for. Bonheur would thus sketch the basics of the elements of the painting, but she also practiced extensively on other pages and study sheets. She had a very large collection of them. During her lifetime, an admirer of the artist proposed to buy all her studies for a staggering amount of money. But Bonheur never wanted to sell them, no matter the price offered. For her, her studies were even more important than the finished works.',
      
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
