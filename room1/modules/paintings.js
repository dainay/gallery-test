import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { paintingData } from './paintingData.js';

const models = new Map(); // Инициализация карты для хранения загруженных моделей

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
    painting.userData = data.info; 


    // Загрузка и инициализация 3D модели (кадра)
    loader.load(data.info.cadre.link, (gltf1) => {
      gltf1.scene.position.set(data.position.x, data.position.y, data.position.z); // Настройка позиции
      gltf1.scene.rotation.y = data.rotationY; // Настройка поворота
      gltf1.scene.scale.set(5, 5, 5); // Настройка масштаба
      models.set(data.info.cadre.key, gltf1.scene); 
      scene.add(gltf1.scene); // Добавление модели в сцену
      // Сохранение ключа модели в userData картины для последующего доступа
      gltf1.scene.visible = true;
      painting.userData.cadre.modelKey = data.info.cadre.key; 
    });

    // Загрузка и инициализация 3D модели (этюда)
    loader.load(data.info.etudes.link, (gltf) => {
      gltf.scene.position.set(data.position.x, data.position.y, data.position.z); // Настройка позиции
      gltf.scene.rotation.y = data.rotationY; // Настройка поворота
      gltf.scene.scale.set(5, 5, 5); // Настройка масштаба
      gltf.scene.visible = false
      models.set(data.info.etudes.key, gltf.scene); 
      scene.add(gltf.scene); // Добавление модели в сцену
      // Сохранение ключа модели в userData картины для последующего доступа
      painting.userData.etudes.modelKey = data.info.etudes.key; 
    });

    scene.add(painting);
    paintings.push(painting);
  });

  return paintings;
}

// console.log("models", models);
export { models };
