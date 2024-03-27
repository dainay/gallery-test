import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const loadBookshelfModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    '../models/bookshelf.glb',
    function (glb) {
      const bookshelf = glb.scene;

      console.log('bookshelf', glb);

      bookshelf.position.set(18, -3, -10);
      // bookshelf.rotation.y = -Math.PI / 2;

      // Clone and position the second bookshelf
      // let copybs = bookshelf.clone();
      // copybs.position.set(18, -3, -18);

      const scale = 18;
      bookshelf.scale.set(scale, scale, scale);
      // copybs.scale.set(scale, scale, scale);

      // Update materials
      bookshelf.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 0;
          child.material.roughness = 1;
          child.castShadow = true;
        }
      });

      // Add outline effect to bookshelves
      // addOutlineEffect(bookshelf, scene);
      // addOutlineEffect(copybs, scene);

      // Add the bookshelves to the scene
      scene.add(bookshelf);
      // scene.add(copybs);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      console.error('Error loading bookshelf model', error);
    }
  );
};

// function addOutlineEffect(object, scene) {
//   const outlineMaterial = new THREE.MeshBasicMaterial({
//     color: 0x999900, // Outline color
//     side: THREE.BackSide, // Render the inside of the outline mesh, making it visible around the original object
//     opacity: 0.5, // Set the opacity of the outline material
//     transparent: true, // Enable transparency for the outline material
//     // emissive: 0xffff00, // Make the material glow with the same color
//     emissiveIntensity: 1,
//   });

//   const outlineMesh = object.clone();
//   outlineMesh.traverse((child) => {
//     if (child.isMesh) {
//       child.material = outlineMaterial;
//     }
//   });
//   outlineMesh.scale.multiplyScalar(1.01); // Slightly larger to create the outline effect
//   scene.add(outlineMesh);
// }
