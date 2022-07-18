import * as THREE from "three";

const MaterialCanvas = (): JSX.Element => {
  // サイズを指定
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, aspect, 0.01, 10000);
  camera.position.set(0, 0, +1000);

  // シーンを作成
  const scene = new THREE.Scene();

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
  document.body.appendChild(renderer.domElement);

  // ジオメトリ作成
  // 球体を作成
  const geometry = new THREE.SphereGeometry(200, 30, 30);
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  // メッシュを作成
  const mesh = new THREE.Mesh(geometry, material);
  // 3D空間にメッシュを追加
  scene.add(mesh);

  // 平行光源
  // 3Dの質感をあわらすために必要

  // 背景で使用している色 : https://www.bcpos.jp/color/
  const directionalLight = new THREE.DirectionalLight(0xf5f5f5);
  directionalLight.position.set(1, 1, 1);
  // シーンに追加
  scene.add(directionalLight);

  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // メッシュを回転させる
    mesh.rotation.y += 0.01;
    // レンダリング
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  }
  return <></>;
};

export default MaterialCanvas;
