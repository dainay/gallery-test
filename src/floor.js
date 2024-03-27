import * as THREE from "three";
 

export const setupFloor = (scene) => {
  const textureLoader = new THREE.TextureLoader();

  const planeTexturePromise = textureLoader.load('/textures/floor.jpg', texture => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10); // Adjust based on your texture and preference
  });
  
  const planeMaterial = new THREE.MeshStandardMaterial({
      map:  planeTexturePromise, // Apply the loaded texture as the color map
      side: THREE.DoubleSide, // Render both sides of the mesh
    });

  const planeGeometry = new THREE.PlaneGeometry(45, 60);
  

  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);

  floorPlane.rotation.x = Math.PI / 2;
  floorPlane.position.y = -Math.PI;

  scene.add(floorPlane);
};
