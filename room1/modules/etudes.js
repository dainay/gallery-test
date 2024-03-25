import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from "three";




export const etudes = (scene) => {


    const models = new Map();
const loader = new GLTFLoader();
const modelInfos = [
  { key: 'balto', url: './balto.glb', position: { x: 0, y: 3, z: -29.9 }, rotationY: 0 },
 
  // Добавьте информацию о других моделях
];

modelInfos.forEach(info => {
  loader.load(info.url, (gltf) => {
    models.set(info.key, gltf.scene)
    gltf.scene.position.set(info.position.x, info.position.y, info.position.z);
    gltf.scene.rotation.y = info.rotationY;
    gltf.scene.scale.set(3, 3, 3);
    gltf.scene.visible = false;
    // gltf.scene.visible = false; // Сделать модель невидимой после загрузки
    scene.add(gltf.scene); // Добавить модель в сцену
  });
});


}