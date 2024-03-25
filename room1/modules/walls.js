import * as THREE from "three";

export function createWalls(scene, textureLoader) {
 
  let wallGroup = new THREE.Group();
  scene.add(wallGroup);


   textureLoader = new THREE.TextureLoader();

  // Load textures
  const wallTexturePromise = textureLoader.load('./../textures/blackwalls.jpg', texture => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(7, 3); // Adjust based on your texture and preference
  });

   
  

  const wallMaterial = new THREE.MeshStandardMaterial({
    map:  wallTexturePromise, 
    metalness: 0,
 
    roughness: 0.3,
   
    
    side: THREE.DoubleSide, 
  });



  // Front Wall
  const frontWall = new THREE.Mesh( 
    new THREE.BoxGeometry(40, 30, 0.001), 
    wallMaterial 
  );
frontWall.position.z = -30;
 


  // Left Wall
  const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(40, 30, 0.001), 
    wallMaterial
  );

  leftWall.rotation.y = Math.PI / 2; 
  leftWall.position.x = -15; 
  leftWall.position.z = -13;



  // Right Wall
  const rightWall = new THREE.Mesh( 
    new THREE.BoxGeometry(40, 30, 0.001), 
    wallMaterial
  );

  rightWall.position.x = 15;
  rightWall.rotation.y = Math.PI / 2; 
 rightWall.position.z = -13



  // Back Wall
  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(40, 30, 0.001),
    wallMaterial 
  );
  backWall.position.z = 5;
 

  wallGroup.add(frontWall, backWall, leftWall, rightWall);
  // wallGroup.position.y = -30;

  return wallGroup;
}
