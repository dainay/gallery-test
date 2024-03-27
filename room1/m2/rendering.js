import * as THREE from "three";
import { displayPaintingInfo, hidePaintingInfo } from "./paintingInfo.js";
import { updateMovement } from "./../modules/movement.js";

export const setupRendering = (
  scene,
  camera,
  renderer,
  paintings,
  controls,
  walls
) => {
  // console.log("Setup painting in rendering", paintings);
  const clock = new THREE.Clock();

  let render = function () {
    const delta = clock.getDelta();

    updateMovement(delta, controls, camera, walls);

    const distanceThreshold = 11;

    // console.log(paintings);
    let paintingToShow;
    paintings.forEach((painting) => {
      const distanceToPainting = camera.position.distanceTo(painting.position);
      if (distanceToPainting < distanceThreshold) {
        paintingToShow = painting;
      }
    });

    if (paintingToShow) {
      // console.log("paintingToShow", paintingToShow);
      displayPaintingInfo(paintingToShow, camera);

      if ( camera.position.distanceTo(paintingToShow.position) < 6) {
document.getElementById('painting-info').style.display = 'none';
      }
      if ( camera.position.distanceTo(paintingToShow.position) > 6) {
        document.getElementById('painting-info').style.display = 'block';
              }

    } else {
      hidePaintingInfo(camera);
    }

    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  render();
};
