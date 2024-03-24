import * as THREE from "three";

export function createWalls(scene, textureLoader) {
  let wallGroup = new THREE.Group();
  scene.add(wallGroup);


   textureLoader = new THREE.TextureLoader();

  // Load textures
  const wallTexturePromise = textureLoader.load('../textures/walls2.jpg', texture => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(7, 3); // Adjust based on your texture and preference
  });

  const wallwhite = textureLoader.load('../textures/ceiling.jpg', texture2 => {
    texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
    texture2.repeat.set(1, 3);  
  });
  
  const wallMaterial = new THREE.MeshStandardMaterial({
      map:  wallTexturePromise, // Apply the loaded texture as the color map
    
      // Set the material to be completely non-metallic
      metalness: 0,
      // Increase roughness to reduce the shininess and create a matte finish
      roughness: 1,
      // Optionally, you can adjust the color to slightly influence the texture
      
      
      side: THREE.DoubleSide, // Render both sides of the mesh
      // roughness: 0.01,
    });

    const wallwhiteMAterial = new THREE.MeshStandardMaterial({
      map:  wallwhite, // Apply the loaded texture as the color map
    
      // Set the material to be completely non-metallic
      metalness: 0,
      // Increase roughness to reduce the shininess and create a matte finish
      roughness: 1,
      // Optionally, you can adjust the color to slightly influence the texture
      
      
      side: THREE.DoubleSide, // Render both sides of the mesh
      // roughness: 0.01,
    });
  



 

  // Front Wall
  const frontWall = new THREE.Mesh( 
    new THREE.BoxGeometry(25, 40, 0.001), 
    wallMaterial 
  );

  frontWall.position.z = -30; 
  frontWall.name = 'frontWall';
   


    //cutter left corner

    const cutterLeft = new THREE.Mesh(
      new THREE.BoxGeometry(20, 23, 0.001),
      wallMaterial
    );
    cutterLeft.position.z = -26;
    cutterLeft.position.x = -15;
    cutterLeft.rotation.y =  Math.PI/4;
   
  



    




     //cutter right corner

     const cutterRight = new THREE.Mesh(
      new THREE.BoxGeometry(20, 40, 0.001),
      wallMaterial
    );
    cutterRight.position.z = -26;
    cutterRight.position.x = 15;
    cutterRight.rotation.y =  -Math.PI/4;
    


  // Left Wall
  const leftWallTop = new THREE.Mesh(
    new THREE.BoxGeometry(0.001, 40, 20), // Adjust size for top part
    wallMaterial
  );
  leftWallTop.position.set(-20, 12.5, 14); // Adjust position accordingly
  wallGroup.add(leftWallTop);



  const leftWallBottom = new THREE.Mesh(
    new THREE.BoxGeometry(0.001, 5, 20), // Adjust size for bottom part
    wallMaterial
  );
  leftWallBottom.position.set(-20, -2.5, -4); // Adjust position accordingly
  wallGroup.add(leftWallBottom);


  const leftWallRight = new THREE.Mesh(
    new THREE.BoxGeometry(0.001, 40, 8), // Adjust size for bottom part
    wallMaterial
  );
  leftWallRight .position.set(-20, 0, -16.5); // Adjust position accordingly
  wallGroup.add(leftWallRight);



//left wall transparent 

 
  //left wall transparent 
  const leftWall = new THREE.Mesh( 
    new THREE.BoxGeometry(100, 40, 0.001), 
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.1 })
  );
  leftWall.position.x = -20.3;
  leftWall.rotation.y = -Math.PI / 2; 
  wallGroup.add(leftWall);


const rwt = new THREE.Mesh( 
  new THREE.BoxGeometry(100, 40, 0.001), 
  new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.1 })
);
rwt.position.x = 20.3;
rwt.rotation.y = -Math.PI / 2; 
wallGroup.add(rwt);

// Right Wall
const rightWall = new THREE.Mesh( 
  new THREE.BoxGeometry(17, 40, 0.01), 
  wallwhiteMAterial // Replace 'wallwhite' with a valid material
);

rightWall.position.x = 20;
rightWall.position.z = -13;
  rightWall.rotation.y = Math.PI / 2; 



  const rightWall2 = new THREE.Mesh( 
    new THREE.BoxGeometry(15, 40, 0.001), 
    wallMaterial
  );

  rightWall2.position.x = 20;
  rightWall2.position.z = 14;
  rightWall2.rotation.y = Math.PI / 2; 



  const rightWall3 = new THREE.Mesh( 
    new THREE.BoxGeometry(15, 20, 0.001), 
    wallMaterial
  );

  rightWall3.position.x = 20;
  rightWall3.position.z = 0;
  rightWall3.position.y = 19;
  rightWall3.rotation.y = Math.PI / 2; 


  

  const rightWall4 = new THREE.Mesh( 
    new THREE.BoxGeometry(15, 5, 0.001), 
    wallMaterial
  );

  rightWall4.position.x = 20;
  rightWall4.position.z = 0;
  rightWall4.position.y = -1;
  rightWall4.rotation.y = Math.PI / 2; 






  // Back Wall
  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(40, 40, 0.001),
    wallMaterial 
  );
  backWall.position.z = 20;



  const paysageTexture = textureLoader.load('../textures/paysage.jpg');



  const paysageMaterial = new THREE.MeshStandardMaterial({
    map: paysageTexture,
  });

  paysageTexture.wrapS = paysageTexture.wrapT = THREE.RepeatWrapping;
  paysageTexture.repeat.set(3, 1);




  const paysage = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 150),
    paysageMaterial
  );
  paysage.position.set(-34, 5, 0);
  paysage.rotation.y = Math.PI / 2;



  const paysageRight = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 150),
    paysageMaterial
  );

  paysageRight.position.set(34, 5, 0);
  paysageRight.rotation.y = -Math.PI / 2;

  


  const paysageCut = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 150),
    paysageMaterial
  );
  paysageCut.position.set(-20, 5, -90);
  paysageCut.rotation.y = Math.PI / 4;
  paysage.name = 'paysage';
  
  
  
  wallGroup.add(paysage, paysageRight, paysageCut);

    
  // wallGroup.position.y=88;





  wallGroup.add(frontWall, backWall, rightWall, cutterLeft, cutterRight, rightWall2,  rightWall3,  rightWall4);

  return wallGroup;
}
