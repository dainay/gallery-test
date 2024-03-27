import { keysPressed } from "./movement.js"; // import the keysPressed object
import { showMenu, hideMenu } from "./menu.js"; // import the showMenu function
import { startAudio, stopAudio } from "./audioGuide.js";
  
import * as THREE from "three";

let lockPointer = true;
let showMenuOnUnlock = false;
// let isZoomedIn = false; // Flag to track zoom state
 

// add the controls parameter which is the pointer lock controls and is passed from main.js where setupEventListeners is called
export const setupEventListeners = (controls, camera, scene) => {
  // add the event listeners to the document which is the whole page
  document.addEventListener(
    "keydown",
    (event) => onKeyDown(event, controls, camera, scene),
    false
  );
  document.addEventListener(
    "keyup",
    (event) => onKeyUp(event, controls),
    false
  );

  controls.addEventListener("unlock", () => {
    if (showMenuOnUnlock) {
      showMenu();
    }
    showMenuOnUnlock = false;
  });

  
 
};

// toggle the pointer lock
function togglePointerLock(controls) {
  if (lockPointer) {
    controls.lock();
  } else {
    showMenuOnUnlock = false;
    controls.unlock();
  }
  lockPointer = !lockPointer; // toggle the lockPointer variable
}

function onKeyDown(event, controls, camera, scene) {
  // event is the event object that has the key property
  if (event.key in keysPressed) {
    // check if the key pressed by the user is in the keysPressed object
    keysPressed[event.key] = true; // if yes, set the value of the key pressed to true
  }

  if (event.key === "Escape") {
    // if the "ESC" key is pressed
    showMenu(); // show the menu
    showMenuOnUnlock = true;
    controls.unlock(); // unlock the pointer
    lockPointer = false;
  }

  if (event.key === "p") {
    // if the "SPACE" key is pressed
    controls.unlock(); // unlock the pointer
    lockPointer = false;
  }

  // if key prssed is enter or return for mac
  if (event.key === "Enter" || event.key === "Return") {
    // if the "ENTER" key is pressed
    hideMenu(); // hide the menu
    controls.lock(); // lock the pointer
    lockPointer = true;
    
  }

  if (event.key === " ") {
    // if the "p" key is pressed
    togglePointerLock(controls); // toggle the pointer lock
    camera.fov = 60; // A smaller value zooms in
camera.updateProjectionMatrix()

document.querySelector("#object-info").style.display = "none";
if (document.querySelector("#object-info2").style.display = "block"){
  document.querySelector("#object-info2").style.display = "none"
}
  }

  if (event.key === "g") {
    // if the "a" key is pressed
    startAudio(); // start the audio guide
  }


 
        

  if (event.key === "p") {
    // if the "s" key is pressed
    stopAudio(); // stop the audio guide
  }

  if (event.key === "m") {
    // if the "h" key is pressed
    showMenu(); // show the menu
    showMenuOnUnlock = true;
    controls.unlock(); // unlock the pointer
    lockPointer = false;
  }

  if (event.key === "r") {
    // if the "r" key is pressed
    location.reload(); // reload the page
  }
}

function onKeyUp(event, controls) {
  // same but for keyup
  if (event.key in keysPressed) {
    keysPressed[event.key] = false; // set to false when the key is released
  }
}

document.getElementById("toggle-info").addEventListener("click", () => {
  document.getElementById("info-panel").classList.toggle("collapsed");
  document.getElementById("toggle-info").innerText = document
    .getElementById("info-panel")
    .classList.contains("collapsed")
    ? "Afficher"
    : "Cacher";
});

document.getElementById("about_button").addEventListener("click", function () {
  document.getElementById("about-overlay").classList.add("show");
});

document.getElementById("close-about").addEventListener("click", function () {
  document.getElementById("about-overlay").classList.remove("show");
});


export const lightingOn = (scene, camera) => {
  let light = null; // declare a variable to store the light object

  document.addEventListener("keydown", (event) => {
    if (event.key === "l") {
      // if the "l" key is pressed
      if (!light) {
        // if light is not already added
        light = new THREE.PointLight(0xffffff, 100); // create a new point light
        light.position.copy(camera.position);
        scene.add(light); // add the light to the scene
      } else {
        // if light is already added
        scene.remove(light); // remove the light from the scene
        light = null; // reset the light variable
      }
    }
  });
};
