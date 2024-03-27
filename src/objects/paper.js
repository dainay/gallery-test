import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadPaperModel = (scene, callback) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/paper.glb",
    function (glb) {
      const paper = glb.scene;

      paper.userData = {
        id: 9,
        name: 'Paper',
        interactive: true,
        title: "<h2>Paper</h2>",
        titleeng: "<h2>Paper</h2>",
        text: "<p>Rosa Bonheur avait pour habitude de porter des pantalons. À l’époque, ce n’était pas habituel pour une femme. En effet, pour pouvoir en porter, elle devait obtenir une “autorisation de travestissement” auprès d’un commissariat, valable 6 mois uniquement. Ce permis lui a été accordé pour lui permettre de se rendre dans ses lieux d’études (forêt, abattoirs, jardins zoologiques) avec une tenue qui n’empêche pas ses déplacements </p>",
        texteng: `Rosa Bonheur used to wear trousers. At that time, it wasn't usual for a woman. Indeed, to be able to wear them, she had to get a "cross-dressing permit" from a police station valid for only 6 months. This permit was given to her so she could go to her places of study (forests, slaughterhouses, zoos) wearing clothes that wouldn't bother her.`,
      
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
