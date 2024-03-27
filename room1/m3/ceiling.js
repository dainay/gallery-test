import * as THREE from "three";

// create a function that takes a scene and a textureLoader as arguments that will be passed in from main.js where the createCeiling is called
export const createCeiling = (scene, textureLoader) => {
  
  textureLoader = new THREE.TextureLoader();
  const ceilingTexturePromise = textureLoader.load('./../textures/blackwalls.jpg', texture => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3); // Adjust based on your texture and preference
  });
  
  const ceilingMaterial = new THREE.MeshStandardMaterial({
      map:  ceilingTexturePromise, // Apply the loaded texture as the color map
      side: THREE.DoubleSide, // Render both sides of the mesh
    });
  
    const color = new THREE.MeshStandardMaterial({
      color: 0x292018,
      side: THREE.DoubleSide,
    });
  
 

  const ceilingGeometry = new THREE.PlaneGeometry(40, 60);
 
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, color);

  ceilingPlane.rotation.x = Math.PI / 2;

  ceilingPlane.position.y = 15;

  scene.add(ceilingPlane);
};
