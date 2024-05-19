import * as THREE from "three";

export function createWalls(scene) {
    let wallGroup = new THREE.Group();
    scene.add(wallGroup);

    // Black material
    const blackMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000, // Black color
        metalness: 0,
        roughness: 1,
        side: THREE.DoubleSide,
    });
 

    // Back Wall
    const backWall = new THREE.Mesh(
        new THREE.BoxGeometry(40, 40, 0.001),
        blackMaterial
    );
    backWall.position.z = 20;

    wallGroup.add( backWall);

    return wallGroup;
}
