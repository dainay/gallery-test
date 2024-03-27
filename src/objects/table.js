import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const loadTableModel = (scene) => {
  const loader = new GLTFLoader();

  loader.load(
    "../models/table.glb",
    function (glb) {
      const table = glb.scene;

      console.log("Table", glb);
      table.position.set(-7.5, -0.1, -2);
      const scale = 4.8;
      table.scale.set(scale, scale, scale);
      table.rotation.x = -Math.PI / 2;



       const table2 = table.clone();
       table2.position.set(7.5,-0.1, -2);


       table2.rotation.z = Math.PI;
      //  table2.rotation.x = -Math.PI / 2;

      scene.add(table, table2);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("Error loading table model", error);
    }
  );
};
