import * as THREE from "three";
import { browser } from "$app/environment";

/** @type {object} */
export let earth = undefined;

if (browser) {
  const geometry = new THREE.SphereGeometry(30, 64, 32);
  // const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // const textureimg = new THREE.TextureLoader().load(
  //   "https://raw.githubusercontent.com/sreekmtl/3D-Earth-ThreeJS-Tutorial-/main/textures/earthhd.jpg"
  // );

  const textureimg = new THREE.TextureLoader().load(
    "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
  );

  const texturebump = new THREE.TextureLoader().load(
    "//unpkg.com/three-globe/example/img/earth-topology.png"
  );
  const texturespec = new THREE.TextureLoader().load(
    "https://raw.githubusercontent.com/sreekmtl/3D-Earth-ThreeJS-Tutorial-/main/textures/spec.jpg"
  );
  let material = new THREE.MeshPhongMaterial({
    map: textureimg,
    bumpMap: texturebump,
    specularMap: texturespec,
  });

  earth = new THREE.Mesh(geometry, material);
}
// /** @type {object} */
// export const earth = () => {
//   const geometry = new THREE.SphereGeometry(30, 64, 32);
//   // const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//   const textureimg = new THREE.TextureLoader().load(
//     "https://raw.githubusercontent.com/sreekmtl/3D-Earth-ThreeJS-Tutorial-/main/textures/earthhd.jpg"
//   );
//   const texturebump = new THREE.TextureLoader().load(
//     "https://raw.githubusercontent.com/sreekmtl/3D-Earth-ThreeJS-Tutorial-/main/textures/bump.jpg"
//   );
//   const texturespec = new THREE.TextureLoader().load(
//     "https://raw.githubusercontent.com/sreekmtl/3D-Earth-ThreeJS-Tutorial-/main/textures/spec.jpg"
//   );
//   let material = new THREE.MeshPhongMaterial({
//     map: textureimg,
//     bumpMap: texturebump,
//     specularMap: texturespec,
//   });
//   let obj = new THREE.Mesh(geometry, material);
//   return obj;
// };
