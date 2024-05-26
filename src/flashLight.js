import * as THREE from "three";

export function setupFlashlight(camera, scene) {
    const flashlight = new THREE.SpotLight(0xffffff, 200);
    flashlight.castShadow = false;
    flashlight.angle = Math.PI / 8;
    flashlight.penumbra = 1;
    flashlight.decay = 1.2;
    flashlight.distance = 150;

    flashlight.position.set(0, 0, 0); // Позиционируем свет в центре камеры
    camera.add(flashlight); // Присоединяем свет к камере

    // Создаем объект-цель для фонаря и добавляем его в сцену
    const targetObject = new THREE.Object3D();
    scene.add(targetObject);
    flashlight.target = targetObject; // Устанавливаем цель фонаря

    // Добавляем хелпер для визуализации фонаря
    const lightHelper = new THREE.SpotLightHelper(flashlight);
    // scene.add(lightHelper);

    // Функция для обновления цели фонаря в зависимости от направления камеры
    function updateFlashlightTarget() {
        const vector = new THREE.Vector3(0, 0, -1);
        vector.applyQuaternion(camera.quaternion);
        targetObject.position.copy(camera.position).add(vector);
        // lightHelper.update(); // Обновляем хелпер, чтобы он соответствовал фонарю
    }

    // Функция для обновления цели фонаря в зависимости от положения курсора
    function updateFlashlightTargetWithCursor(event) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera({ x: mouseX, y: mouseY }, camera);
    
        const direction = raycaster.ray.direction.clone();
        const distance = 100; // Расстояние до цели, можете настроить по вашему усмотрению
    
        const newTargetPosition = camera.position.clone().add(direction.multiplyScalar(distance));
        targetObject.position.copy(newTargetPosition);
        lightHelper.update(); // Обновляем хелпер, чтобы он соответствовал фонарю
    }
    

    return {
        flashlight,
        updateFlashlightTarget,
        updateFlashlightTargetWithCursor
    };
}
