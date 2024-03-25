import * as THREE from 'three';

import { paintingData } from './paintingData.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function createPaintings(scene, textureLoader) {
  const loader = new GLTFLoader(); // Инициализация загрузчика GLTF
  let paintings = [];

  paintingData.forEach((data) => {
    // Загрузка текстуры для картины
    const paintingTexture = textureLoader.load(data.imgSrc);
    const painting = new THREE.Mesh(
      new THREE.PlaneGeometry(data.width, data.height),
      new THREE.MeshLambertMaterial({ map: paintingTexture })
    );
    
    painting.position.set(data.position.x, data.position.y, data.position.z);
    painting.rotation.y = data.rotationY;
    painting.userData = data.info; // Сохраняем информацию о картине
    
    // Загрузка и инициализация 3D модели (этюда)
    loader.load(data.info.etudes.link, (gltf) => {
      const model = gltf.scene;
      model.position.set(data.position.x, data.position.y, data.position.z); // Настройка позиции
      model.visible = false; // Изначально модель невидима
      scene.add(model);  
      model.scale.set(3, 3, 3); // Настройка масштаба
      painting.userData.model = model; // Сохранение ссылки на модель в userData картины
    });

    scene.add(painting);
    paintings.push(painting);
  });

  return paintings;
}
