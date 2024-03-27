import * as THREE from 'three';

import { paintingData } from './paintingData.js';

export const  createPaintings = (scene, textureLoader) => {
 
  let paintings = [];

  paintingData.forEach((data) => {
   
    const painting = new THREE.Mesh( 
      new THREE.PlaneGeometry(0.01, 0.001),
      new THREE.MeshLambertMaterial({ map: textureLoader.load( ) })
    );

    painting.position.set(data.position.x, data.position.y, data.position.z); 
    painting.rotation.y = data.rotationY; 

    
    painting.userData = {
      type: 'painting', 
      info: data.info, 
      url: data.info.link
    };

    painting.castShadow = true; 
    painting.receiveShadow = true; 

    paintings.push(painting); 
  });

  return paintings; 
}
