import * as THREE from 'three';

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

function clickHandling(renderer, camera, paintings) {
  renderer.domElement.addEventListener(
    'click',
    (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      onClick(camera, paintings);
    },
    false
  );
}

function onClick(camera, paintings) {
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(paintings);

  if (intersects.length > 0) {
    let object = intersects[0].object;

   
    while (object && !object.userData.id) {
      object = object.parent;
    }

       if (object && object.userData) {
      // Make sure object exists and has userData
      console.log(object, "OBJECT WITH USER DATA");

     

      if (object.userData.name == "door") {
        window.location.href = "./../index.html";
        return;
      }







  }
}}

export { clickHandling };
