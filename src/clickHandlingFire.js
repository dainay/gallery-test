import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

export let counter = new Set(); // Declare a Set to store the objects that have been clicked

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let oldCameraPosition = new THREE.Vector3(); // Defined in a broader scope
console.log(oldCameraPosition, "OLD");
let oldCameraRotation = new THREE.Euler(); // Defined in a broader scope

function clickHandling(renderer, camera, objects, scene) {
  renderer.domElement.addEventListener(
    "click",
    (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      onClick(camera, objects, renderer, scene); // Pass renderer if necessary
    },
    false
  );
}

function onClick(camera, objects, renderer, scene) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {
    let object = intersects[0].object; // Use let since object's value will be reassigned

    // Traverse up to find an object with userData
    while (object && !object.userData.id) {
      object = object.parent;
    }

    if (object.userData.id != 11 && object.userData.id != 12 && object.userData.id != 13) {
      counter.add(object.userData.id);
    }


    if (object && object.userData) {
      // Make sure object exists and has userData
      // console.log(object, "OBJECT WITH USER DwATA");

      let newPosition; // Declare once, outside the conditionals

      if (object.userData.name == "door") {
        window.location.href = "./room1/room1.html";
        return;
      } 
      else if (object.userData.name == "door2") {
        window.location.href = "./room1/room2.html";
        return;
      }
      else if (object.userData.name == "door3") {
        window.location.href = "./room1/room3.html";
        return;
      }
      
      else if (object.userData.name == "fireplace") {
        console.log("fireplace enter");
        if (counter.size == 9) {
          new TWEEN.Tween(camera.position)

            .to({ x: 0, y: 0, z: -18 }, 5000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(() => {
              // Dynamically update the camera's lookAt during the animation if needed
              const lookAtPosition = new THREE.Vector3(
                object.position.x,
                object.position.y,
                object.position.z
              );
              camera.lookAt(lookAtPosition);
              camera.fov = 30; // A smaller value zooms in
              camera.updateProjectionMatrix();
            })
            .onComplete(() => {
              // Ensure the final lookAt is correct after the animation completes
              camera.lookAt(object.position);
            })
            .start();

          setTimeout(() => {
            window.location.href = "firegame.html";
          }, 5000);
          return;
        }
        return;
      } else {
        newPosition = new THREE.Vector3(
          object.userData.cam.x,
          object.userData.cam.y,
          object.userData.cam.z
        );
      }

      

      document.querySelector("#addNumber").innerHTML = JSON.stringify(
        counter.size
      );

      document.querySelector("#object-info").style.display = "block";
      document.querySelector("#object-info").style.top =
        object.userData.position.top + "px";
      document.querySelector("#object-info").style.left =
        object.userData.position.left + "px";

      document.querySelector("#object-info").innerHTML =
        object.userData.title + object.userData.text + object.userData.titleeng + object.userData.texteng;

   

      if (object.userData.name == "wall") {
        document.querySelector("#object-info2").style.display = "block";
        document.querySelector("#object-info2").innerHTML =
          "<h2> La famille Bonheur</h2> <p style='font-size:1.2rem;'>Rosa Bonheur apprendra le dessin et la peinture grâce à son père, professeur d’art. À 13 ans, elle copiait les peintures exposées au Louvre ; à 19ans elle y réalisait sa première exposition.        Rosa Bonheur n’était pas la seule artiste de la famille : tous ses frères et sœurs ont en effet suivi les traces du père. Son frère Auguste et sa sœur Juliette se sont consacrés à la peinture, tandis que son autre frère Isidore est devenu sculpteur. Ils ont chacun connu leur succès, mais Rosa Bonheur a été la seule à marquer drastiquement son époque. Ici vous pouvez voir leurs peintures. </p>  <h2>Family Bonheur</h2>                   <p style='font-size:1.2rem;'>Rosa Bonheur learned drawing and painting, thanks to her father, who was an art teacher. She copied paintings exhibited at the Louvre at the age of 13. And she held her first exhibition there at 19. Rosa Bonheur wasn't the only artist in the family: all her brothers and sisters indeed followed in their father's footsteps. Her brother Auguste and her sister Juliette dedicated themselves to painting, while her other brother Isidore became a sculptor. They each found success, but Rosa Bonheur was the only one to significantly impact her era. You can see their paintings here. </p>";
      }

      // Make sure newPosition has been assigned before using it
      if (newPosition) {
        new TWEEN.Tween(camera.position)
          .to({ x: newPosition.x, y: newPosition.y, z: newPosition.z }, 1000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => {
            // Dynamically update the camera's lookAt during the animation if needed
            const lookAtPosition = new THREE.Vector3(
              object.position.x,
              object.position.y,
              object.position.z
            );
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
