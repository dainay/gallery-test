import * as THREE from "three";

export function setupTorchLamp(camera) {
    const torchLight = new THREE.PointLight(0xffffff, 4, 1000);
    camera.add(torchLight); // Attach the light to the camera
    torchLight.position.set(0, 0, -1); // Position the light slightly in front of the camera

    // Helper to visualize the light source
    const torchHelper = new THREE.PointLightHelper(torchLight);
    camera.add(torchHelper);

     
    // const spotLight1 = new THREE.SpotLight(0x00ff00, 10000);
    // spotLight1.castShadow = true;
    // spotLight1.angle = 0.3;
    // spotLight1.penumbra = 0.2;
    // spotLight1.decay = 2;
    // spotLight1.distance = 50;
    
    // spotLight1.position.set(0, 0, -1); // Position the light in front of the camera
    // camera.add(spotLight1);

    // // Helper to visualize the light source
    // const spotHelper = new THREE.SpotLightHelper(spotLight1);
    // camera.add(spotHelper);


    return torchLight;
}
