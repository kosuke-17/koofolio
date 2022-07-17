import * as THREE from "three";

const BufferCanvas = (): JSX.Element => {
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
  const buffer = new THREE.Mesh(geometory, material);

  // ボックスがセフィアの中に入っている
  scene.add(buffer);
  //ライト
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

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

export default BufferCanvas;
