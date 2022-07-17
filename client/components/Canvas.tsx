import * as THREE from "three";

const Canvas = (): JSX.Element => {
  const fov = 100;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.01;
  const far = 1000;

  //カメラ
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(1, 1, 3);

  //シーン
  const scene = new THREE.Scene();
  //レンダラー
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
  document.body.appendChild(renderer.domElement);

  /**
   * ジオメトリ作成
   **/
  const boxGeometory = new THREE.BoxGeometry(1, 1, 1);
  const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 32);
  const torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100, Math.PI * 2);
  const planeGeometry = new THREE.PlaneGeometry(10, 10);

  // バッファジオメトリ作成
  const geometory = new THREE.BufferGeometry();
  // フロート型にすることで、無駄なデータを省く
  // 位置情報
  const positionArray = new Float32Array(9);
  positionArray[0] = 0;
  positionArray[1] = 0;
  positionArray[2] = 0;
  positionArray[3] = 0;
  positionArray[4] = 1;
  positionArray[5] = 0;
  positionArray[6] = 1;
  positionArray[7] = 1;
  positionArray[8] = 1;

  const positionAttribute = new THREE.BufferAttribute(positionArray, 3);

  geometory.setAttribute("position", positionAttribute);

  //マテリアル
  const material = new THREE.MeshBasicMaterial();
  // ワイヤーフレーム
  material.wireframe = true;

  // メッシュ化
  const box = new THREE.Mesh(boxGeometory, material);
  const sphere = new THREE.Mesh(sphereGeometry, material);
  const torus = new THREE.Mesh(torusGeometry, material);
  const plane = new THREE.Mesh(planeGeometry, material);

  const buffer = new THREE.Mesh(geometory, material);

  // 位置の移動
  sphere.position.x = 1.5;
  torus.position.x = -1.5;
  plane.position.y = -0.5;
  plane.rotation.x = -Math.PI * 0.5;
  // sphere.position.z = 1.5;

  // ボックスがセフィアの中に入っている
  // scene.add(box, sphere, torus, plane);
  scene.add(buffer);
  //ライト
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  //マウス操作
  // const controls = new THREE.Con(camera, renderer.domElement);

  window.addEventListener("resize", onWindowResize);

  function animation() {
    //レンダリング
    renderer.render(scene, camera);
  }

  //ブラウザのリサイズに対応
  function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  animation();
  return <></>;
};

export default Canvas;
