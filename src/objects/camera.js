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
        id: 1,
        name: 'camera',
        interactive: true,
        title: "<h2>Appareil photo</h2>",
        titleeng: "<h2>Photo Camera</h2>",
        text: "<p>De son vivant, Rosa Bonheur était une véritable célébrité. Elle donn  ait interviews et photographies pour se faire connaitre, et ses toiles étaient reproduites pour être accessibles à la portée d’un plus grand nombre. Des visiteurs curieux venaient parfois  l’observer peindre dans son atelier, à Paris. Toute cette agitation autour d’elle la pousse en 1860 à venir vivre au château de By, qu’elle achète avec l’argent des ventes de ses œuvres.</p>",
        texteng: 'During her lifetime, Rosa Bonheur was a true celebrity. She gave interviews and posed for photographs to become known, and her paintings were reproduced to make them accessible to a larger audience. Curious visitors would sometimes come to watch her paint in her studio in Paris. All this attention around her encouraged her in 1860 to move to the By Castle, which she bought with the money from sales of her works.',
      
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
