import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
// Assuming animate is correctly managing TWEEN updates and scene rendering

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let oldCameraPosition = new THREE.Vector3(); // Defined in a broader scope
console.log(oldCameraPosition, "OLD");
let oldCameraRotation = new THREE.Euler(); // Defined in a broader scope

function clickHandling(renderer, camera, objects) {
  renderer.domElement.addEventListener(
    "click",
    (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      onClick(camera, objects, renderer); // Pass renderer if necessary
    },
    false
  );
}

function onClick(camera, objects, renderer) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {
    let object = intersects[0].object; // Use let since object's value will be reassigned

    // Traverse up to find an object with userData
    while (object && !object.userData.id) {
      object = object.parent;
    }

    if (object && object.userData) { // Make sure object exists and has userData
      console.log(object, "OBJECT WITH USER DATA");

      let newPosition; // Declare once, outside the conditionals

       
      if (object.userData.name == "door") {
        window.location.href = "https://example.com"; 
  
      } else { 
        newPosition = new THREE.Vector3(object.userData.cam.x, object.userData.cam.y, object.userData.cam.z);  
      }  


      document.querySelector("#object-info").style.display = "block";
      document.querySelector("#object-info").style.top = object.userData.position.top + "px";
      document.querySelector("#object-info").style.left = object.userData.position.left + "px";
       
      document.querySelector("#object-info").innerHTML = object.userData.title + object.userData.text;

     if (object.userData.name == "wall") {
      document.querySelector("#object-info2").style.display = "block";
      document.querySelector("#object-info2").innerHTML = "<h2>Wall</h2> <p>Alors que les lions sont utilisés comme symboles de puissance, Rosa Bonheur choisi ici de les peindre en famille, allongés calmement. <br> Rosa Bonheur voulait représenter les animaux fidèlement. Pour elle, le lion, comme n’importe quel animal, n’était pas un symbole, mais tout simplement un être vivant. Elle représente ici trois petits lionceaux aux côtés de leurs parents, dans un moment de calme. Il n’y a ni sang ni combat, ni puissance ni crainte. <br> Rosa connaissait bien les lions, bien que vivant en France près de Fontainebleau, puisqu’elle avait des lions de compagnie. Ils vivaient en effet librement chez elle. Elle pouvait donc observer leur comportement, paisible ou agité. <br> Pour Rosa, les études préparatoires étaient indispensables et constituaient une étape aussi importante que la réalisation du tableau en lui-même. Elle dira même à ses élèves « Gardez-vous de vouloir aller trop vite, avant de prendre les pinceaux, assurez d’abord votre crayon, devenez fortes dans la science du dessin. </p>"
    }


      // Make sure newPosition has been assigned before using it
      if (newPosition) {
        new TWEEN.Tween(camera.position)
        .to({ x: newPosition.x, y: newPosition.y, z: newPosition.z }, 1000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() => {
          // Dynamically update the camera's lookAt during the animation if needed
          const lookAtPosition = new THREE.Vector3(object.position.x, object.position.y, object.position.z);
          camera.lookAt(lookAtPosition);
          camera.fov = 30; // A smaller value zooms in
camera.updateProjectionMatrix();
 
      })
      .onComplete(() => {
          // Ensure the final lookAt is correct after the animation completes
          camera.lookAt(object.position);
      })
      .start();

        
      }
      
    }
     
  }

}

export { clickHandling };
