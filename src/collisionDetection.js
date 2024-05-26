import * as THREE from 'three';

export class CollisionDetector {
    constructor(camera, objects) {
        this.camera = camera;
        this.objects = objects;
        this.cameraBoundingBox = new THREE.Box3();
        this.raycaster = new THREE.Raycaster();
    }

    updateCameraBoundingBox() {
        const cameraPosition = new THREE.Vector3();
        this.camera.getWorldPosition(cameraPosition);
        this.cameraBoundingBox.setFromCenterAndSize(cameraPosition, new THREE.Vector3(1, 1, 1));
    }

    checkCollisions() {
        this.updateCameraBoundingBox();
        for (const object of this.objects) {
            if (object.BoundingBox && this.cameraBoundingBox.intersectsBox(object.BoundingBox)) {
                return true; // Обнаружено столкновение
            }
        }
        return false; // Столкновений нет
    }
}
