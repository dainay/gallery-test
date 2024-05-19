import * as THREE from "three";

export const setupFloor = (scene) => {
    const textureLoader = new THREE.TextureLoader();

   
    const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000, // Set the color to black
        side: THREE.DoubleSide, // Render both sides of the mesh
        transparent: true, // Make the material transparent
        opacity: 0.2, // Adjust the opacity value (0.0 - fully transparent, 1.0 - fully opaque)
    });
    

    const planeGeometry = new THREE.PlaneGeometry(45, 60);

    const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);

    floorPlane.rotation.x = Math.PI / 2;
    floorPlane.position.y = -Math.PI;

    scene.add(floorPlane);
};
