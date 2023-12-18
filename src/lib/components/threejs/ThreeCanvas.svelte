<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { earth } from "./objects/earth";

  /** @type {number} */
  export let width = 0;

  /** @type {number} */
  export let height = 0;

  /** @type {Array<object>} */
  export let objects = [];

  /** @type {Array<object>} */
  export let lights = [
    new THREE.AmbientLight(0xdddddd),
    new THREE.DirectionalLight(0xffffff, 5),
  ];

  /** @type {HTMLDivElement} */
  let container,
    /** @type {void} */
    camera,
    /** @type {void} */
    scene,
    /** @type {void} */
    renderer;

  /** @type {number} */
  let cWidth;
  /** @type {number} */
  let cHeight;

  $: if (width) cWidth = width;
  $: if (height) cHeight = height;

  const init = () => {
    initCamera();
    initScene();
    initRenderer();
  };

  const initScene = () => {
    scene = new THREE.Scene();

    // add lights
    lights.forEach((l) => scene.add(l));

    // add objects
    objects.forEach((o) => scene.add(o));
    // var geometry = new THREE.BoxGeometry(1, 1, 1);

    // var material = new THREE.MeshBasicMaterial({ color: 0x000000 });

    // var mesh = new THREE.Mesh(geometry, material);

    // debugger;
    // scene.add(mesh);
  };

  const initCamera = () => {
    camera = new THREE.PerspectiveCamera(75, cWidth / cHeight, 0.1, 1000);
    camera.position.z = 50;
  };

  const initRenderer = () => {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(cWidth, cHeight);
    renderer.setClearColor(0xffffff, 0);
    container.appendChild(renderer.domElement);
  };

  const render = () => {
    renderer.clear();
    renderer.render(scene, camera);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    earth.rotation.y -= 0.0001;

    objects.forEach((o) => (o.rotation.y -= 0.0001));
    render();
  };

  if (browser) {
    onMount(() => {
      init();
      animate();
    });
  }
</script>

<!-- <svelte:window on:resize={init} /> -->

<div bind:this={container} />
