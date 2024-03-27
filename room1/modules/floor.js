import * as THREE from "three";
 

export const setupFloor = (scene) => {
  const textureLoader = new THREE.TextureLoader();

  const planeTexturePromise = textureLoader.load('../../public/textures/blackfloor.jpg', texture => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 2); // Adjust based on your texture and preference
  });
  
  const planeMaterial = new THREE.MeshStandardMaterial({
      map:  planeTexturePromise, // Apply the loaded texture as the color map
      side: THREE.DoubleSide, // Render both sides of the mesh
      roughness: 0.4, // Adjust the roughness of the material for better light reflection
      metalness: 1, // Adjust the metalness of the material for better light reflection
    });

  const planeGeometry = new THREE.PlaneGeometry(40, 45);
  

  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);

  floorPlane.rotation.x = Math.PI / 2;
  floorPlane.position.y = -Math.PI;
  floorPlane.position.z = -8;

  scene.add(floorPlane);
};
