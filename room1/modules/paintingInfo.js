import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from "three";
import { scene } from './scene.js';

const models = new Map(); // Хранит загруженные модели

export const displayPaintingInfo = (painting) => {
  const info = painting.userData.info; // Предполагаем, что информация хранится здесь
  const infoElement = document.getElementById('painting-info');

  infoElement.innerHTML = `
    <h3>${info.title}</h3>
    <p>Artist: ${info.artist}</p>
    <p>Description: ${info.description}</p>
    <p>Year: ${info.year}</p>
  `;
  infoElement.classList.add('show');

  // Управление видимостью модели
  if (painting.userData.model) {
    models.get(painting.userData.model.key).visible = true; // Показываем модель
  }
};







export const hidePaintingInfo = () => {
  models.forEach((model) => {
    model.visible = false; // Скрываем модели вместо удаления
  });

  const infoElement = document.getElementById('painting-info');
  infoElement.classList.remove('show');
};
