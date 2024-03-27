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

    if (object.userData.id != 11) {
      counter.add(object.userData.id);
    }


    if (object && object.userData) {
      // Make sure object exists and has userData
      console.log(object, "OBJECT WITH USER DATA");

      let newPosition; // Declare once, outside the conditionals

      if (object.userData.name == "door") {
        window.location.href = "./room1.html";
        return;
      } else if (object.userData.name == "fireplace") {
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
            window.location.href = "https://example.com";
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
          "<h2> la famille Bonheur</h2> <p>Rosa Bonheur, bien que née à Bordeaux, vécut à Paris dès l’âge de ses 7ans. Elle y apprendra le dessin et la peinture grâce à son père, professeur d’art. Ce dernier quitta le foyer familial pour rejoindre l’ordre des Saint-Simoniens, laissant femme et enfants dernière lui. La mère de Rosa Bonheur dû travailler pour subvenir aux besoins de ses enfants et de son mari, à qui elle versait une pension. Elle mourut d’épuisement. <br>    Cet événement bouleversa grandement Bonheur, qui désira dès lors être indépendante. À 13 ans, elle copiait les peintures exposées au Louvre ; à 19ans elle y réalisait sa première exposition. </p>          <h2>Family Bonheur</h2> <p>Rosa Bonheur was born in Bordeaux, but she lived in Paris from the age of 7. She learned drawing and painting there, thanks to her father, who was an art teacher. He left the family to join the Saint-Simonians, leaving his wife and children behind. Rosa Bonheur's mother had to work to support her children and her husband, to whom she paid alimony. She died of exhaustion.     This made Bonheur very sad, and she wanted to become independent. She copied paintings exhibited at the Louvre at the age of 13. And she held her first exhibition there at 19.</p>,";
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
