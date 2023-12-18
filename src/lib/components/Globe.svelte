<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import * as THREE from "three";

  /** @type {number} */
  export let width = 0;

  /** @type {number} */
  export let height = 0;

  /** @type {object} */
  let container;

  let cWidth, cHeight;

  $: if(width) cWidth = width;
  $: if(height) cHeight = height;

  if (browser) {
    let camera;
    let scene;
    let renderer;
    let earth;

    const init = () => {
      scene = initScene();

      camera = initCamera();

      renderer = initRenderer();

      container.appendChild(renderer.domElement);

      earth = initEarth();
      scene.add(earth);
    };

    const initScene = () => {
      // Setup scene
      const scene = new THREE.Scene();
      scene.add(new THREE.AmbientLight(0xdddddd));
      scene.add(new THREE.DirectionalLight(0xffffff, 5));
      return scene;
    };

    const initCamera = () => {
      const camera = new THREE.PerspectiveCamera(
        75,
        cWidth / cHeight,
        0.1,
        1000
      );
      camera.position.z = 50;
      return camera;
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
      return earth;
    };

    const render = () => {
      renderer.clear();
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y -= 0.0001;

      //   cube.rotation.x += 0.005;
      //   cube.rotation.y += 0.005;

      render();
    };

    onMount(() => {
      init();
      animate();
    });
  }
</script>

<div bind:this={container} />
