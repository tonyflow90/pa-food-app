<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import * as THREE from "three";

  /** @type {number} */
  export let width = 0;

  /** @type {number} */
  export let height = 0;

  /** @type {Array<object>} */
  export let objects = [];

  /** @type {HTMLDivElement} */
  let container,
    /** @type {void} */
    camera,
    /** @type {void} */
    scene,
    /** @type {void} */
    renderer,
    /** @type {void} */
    earth;

  /** @type {number} */
  let cWidth;
  /** @type {number} */
  let cHeight;

  $: if (width) cWidth = width;
  $: if (height) cHeight = height;

  const init = () => {
    if (container.firstChild) container.removeChild(container.firstChild);

    initCamera();
    initScene();
    initEarth();

    renderer = initRenderer();

    container.appendChild(renderer.domElement);
  };

  const initScene = () => {
    // Setup scene
    scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xdddddd));
    scene.add(new THREE.DirectionalLight(0xffffff, 5));

    // add objects
    scene.add(earth);
  };

  const initCamera = () => {
    camera = new THREE.PerspectiveCamera(75, cWidth / cHeight, 0.1, 1000);
    camera.position.z = 50;
  };

  const initRenderer = () => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(cWidth, cHeight);
    renderer.setClearColor(0xffffff, 0);
    return renderer;
  };

  const initEarth = () => {
    const geometry = new THREE.SphereGeometry(30, 64, 32);
    // const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const textureimg = new THREE.TextureLoader().load(
      "https://raw.githubusercontent.com/sreekmtl/3D-Earth-ThreeJS-Tutorial-/main/textures/earthhd.jpg"
    );
    const texturebump = new THREE.TextureLoader().load(
      "https://raw.githubusercontent.com/sreekmtl/3D-Earth-ThreeJS-Tutorial-/main/textures/bump.jpg"
    );
    const texturespec = new THREE.TextureLoader().load(
      "https://raw.githubusercontent.com/sreekmtl/3D-Earth-ThreeJS-Tutorial-/main/textures/spec.jpg"
    );
    let material = new THREE.MeshPhongMaterial({
      map: textureimg,
      bumpMap: texturebump,
      specularMap: texturespec,
    }); //creating material& adding texture
    earth = new THREE.Mesh(geometry, material);
  };

  const render = () => {
    renderer.clear();
    renderer.render(scene, camera);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    earth.rotation.y -= 0.0001;
    render();
  };

  if (browser) {
    onMount(() => {
      init();
      animate();
    });
  }
</script>

<svelte:window on:resize={init} />

<div bind:this={container} />
