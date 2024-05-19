import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls"; // Import PointerLockControls from the correct path

export const scene = new THREE.Scene(); // create a scene
let camera;
let controls;
let renderer;

scene.background = new THREE.Color(0xaaaaaa);

const geometry = new THREE.DodecahedronGeometry(0.06, 6);
let cube;

let cubes = []; //to stock all the cubes to use them for the animation


let n = 0;
while (n < 200) {
    n++; 
const material = new THREE.MeshBasicMaterial( { color: 'white' } );
const cube = new THREE.Mesh( geometry, material );

cubes.push( cube ); //to add this cube at the end of the table
let random1 = Math.floor(Math.random() * 220 - 160);
let random2 =Math.floor(Math.random() * 150 - 75);
let random3 =Math.floor(Math.random() * 170 - 145);
console.log(random1,random2,random3);

    cube.rotation.set(random1,random2,random3);
    cube.position.set(random1,random2,random3);

    scene.add(cube);}



export const setupScene = () => {
  
  camera = new THREE.PerspectiveCamera(
    60, // fov = field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
  );
  scene.add(camera); // add the camera to the scene
  camera.position.set(0, 4, 15); // move the camera up 3 units in the Y axis

  renderer = new THREE.WebGLRenderer({ antialias: false }); // create a WebGLRenderer and set its antialias property to true to enable antialiasing which smooths out the edges of what is rendered
  renderer.setSize(window.innerWidth, window.innerHeight); // set the size of the renderer to the inner width and height of the window (the browser window)
  renderer.setClearColor(0xffffff, 1); // set the background color of the renderer to white
  document.body.appendChild(renderer.domElement); // append the renderer to the body of the document (the <canvas> element that the renderer uses will be added to the body)

  renderer.shadowMap.enabled = true; // enable shadow mapping
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // `renderer.shadowMap.type` is a property that defines the type of shadow map used by the renderer. THREE.PCFSoftShadowMap is one of the available shadow map types and stands for Percentage-Closer Filtering Soft Shadow Map. This type of shadow map uses an algorithm to smooth the edges of shadows and make them appear softer

  controls = new PointerLockControls(camera, renderer.domElement); // create a PointerLockControls object that takes the camera and the renderer's domElement as arguments. PointerLockControls is a class that allows the camera to be controlled by the mouse and keyboard.
  scene.add(controls.getObject()); // add the PointerLockControls object to the scene

  window.addEventListener("resize", onWindowResize, false); // add an event listener to the window that calls the onWindowResize function when the window is resized. Its work is to update the camera's aspect ratio and the renderer's size. The third parameter is set to false to indicate that the event listener should be triggered in the bubbling phase instead of the capturing phase. The bubbling phase is when the event bubbles up from the target element to the parent elements. The capturing phase is when the event trickles down from the parent elements to the target element. The default value is false, so we don't need to include it, but I included it for clarity. The capturing phase is rarely used, so you can ignore it for now. You can read more about the capturing and bubbling phases here: https://javascript.info/bubbling-and-capturing

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight; // update the camera's aspect ratio
    camera.updateProjectionMatrix(); // update the camera's projection matrix. The projection matrix is used to determine how 3D points are mapped to the 2D space of the screen. It is used to calculate the frustum of the camera which is a truncated pyramid that represents the camera's field of view. Anything outside the frustum is not rendered. The projection matrix is used to calculate the frustum every time the window is resized.
    renderer.setSize(window.innerWidth, window.innerHeight); // update the size of the renderer
  }

  return { camera, controls, renderer }; // return the camera, controls, and renderer so that they can be used in other modules
};
