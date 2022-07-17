import * as THREE from "three";

const BasicCanvas = (): JSX.Element => {
  const fov = 100;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.01;
  const far = 10;
  // Angle of view adjustment
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 1;

  const scene = new THREE.Scene();

  // To Create a cube
  const boxMaterial = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  // add Box css
  // const material = new THREE.MeshNormalMaterial();
  const material = new THREE.MeshBasicMaterial({ color: "gray" });

  // create Box
  const cube = new THREE.Mesh(boxMaterial, material);
  scene.add(cube);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);

  // animation

  function animation(time: number) {
    cube.rotation.x = time / 2000;
    cube.rotation.y = time / 1000;

    renderer.render(scene, camera);
  }
  return <></>;
};

export default BasicCanvas;
