// =============================================
// BAMANDIGHI ECO PARK - AR.JS VIEWER
// =============================================

let scene, camera, renderer, arToolkitSource, arToolkitContext;
let markerRoot, parkModel;
let infoVisible = false;
let instructionsVisible = true;

// Park information data
const parkData = {
  pond: {
    title: 'ঐতিহাসিক বামনদিঘি',
    description: 'পার্কের কেন্দ্রবিন্দু এই বিশাল দিঘি। টাইলস বাঁধানো হাঁটার পথ দিঘির চারপাশ ঘিরে রয়েছে। স্বচ্ছ জলে আকাশের প্রতিফলন অপূর্ব দৃশ্য তৈরি করে।'
  },
  sculpture: {
    title: 'I Love Rangpur ভাস্কর্য',
    description: 'পার্কের সবচেয়ে আইকনিক স্থাপনা। এই রঙিন ভাস্কর্যের সামনে ছবি তোলা দর্শনার্থীদের কাছে অত্যন্ত জনপ্রিয়।'
  },
  playground: {
    title: 'শিশু বিনোদন এলাকা',
    description: 'শিশুদের জন্য স্লাইড, দোলনা ও ব্যালেন্সার সহ আনন্দময় খেলার মাঠ। পরিবারের সাথে সময় কাটানোর আদর্শ জায়গা।'
  },
  gazebo: {
    title: 'সবুজ গেজেবো',
    description: 'উত্তর পাড়ে লাল-সবুজ রঙের দৃষ্টিনন্দন গেজেবো (বিশ্রামাগার)। এখানে বসে দিঘির সৌন্দর্য উপভোগ করা যায়।'
  }
};

// Initialize AR Scene
function initAR() {
  // Create scene
  scene = new THREE.Scene();

  // Create camera
  camera = new THREE.Camera();
  scene.add(camera);

  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(new THREE.Color('lightgrey'), 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0px';
  renderer.domElement.style.left = '0px';
  document.getElementById('ar-container').appendChild(renderer.domElement);

  // Initialize AR.js
  arToolkitSource = new THREEx.ArToolkitSource({
    sourceType: 'webcam',
  });

  function onResize() {
    arToolkitSource.onResize();
    arToolkitSource.copySizeTo(renderer.domElement);
    if (arToolkitContext.arController !== null) {
      arToolkitSource.copySizeTo(arToolkitContext.arController.canvas);
    }
  }

  arToolkitSource.addEventListener('sourceReady', onResize);
  window.addEventListener('resize', onResize);

  // Initialize AR context
  arToolkitContext = new THREEx.ArToolkitContext({
    cameraParametersUrl: 'https://cdn.jsdelivr.net/npm/ar.js@3/three.js/data/camera_para.dat',
    detectionMode: 'color_and_matrix',
  });

  arToolkitContext.init(function onCompleted() {
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
  });

  // Create marker
  let markerControls = new THREEx.ArMarkerControls(arToolkitContext, camera, {
    type: 'pattern',
    patternUrl: 'data/marker.patt',
  });

  // Marker root
  markerRoot = new THREE.Group();
  camera.add(markerRoot);

  // Create park model
  createParkModel();

  // Remove loader when AR is ready
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 1000);

  // Start animation loop
  animate();
}

// Create 3D Park Model
function createParkModel() {
  const group = new THREE.Group();

  // Main pond (blue cylinder)
  const ponds = new THREE.Mesh(
    new THREE.CylinderGeometry(2, 2, 0.3, 32),
    new THREE.MeshPhongMaterial({ color: 0x1a4d7a, emissive: 0x0a2d4a })
  );
  ponds.position.set(0, 0, 0);
  group.add(ponds);

  // Pond label
  const pondLabel = createLabel('পুকুর', 0, 0.5, 0);
  group.add(pondLabel);

  // Sculpture (red/golden)
  const sculptureBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 1.5, 0.3),
    new THREE.MeshPhongMaterial({ color: 0xff4444 })
  );
  sculptureBase.position.set(2, 0.75, 0);
  sculptureBase.castShadow = true;
  group.add(sculptureBase);

  // Sculpture text
  const sculptureLabel = createLabel('❤️', 2, 2, 0);
  group.add(sculptureLabel);

  // Gazebo
  const gazeboBase = new THREE.Mesh(
    new THREE.CylinderGeometry(0.8, 0.8, 0.1, 8),
    new THREE.MeshPhongMaterial({ color: 0x22aa22 })
  );
  gazeboBase.position.set(-2, 0.05, 0);
  group.add(gazeboBase);

  const gazeboRoof = new THREE.Mesh(
    new THREE.ConeGeometry(1.2, 0.8, 8),
    new THREE.MeshPhongMaterial({ color: 0x1a6b2f })
  );
  gazeboRoof.position.set(-2, 0.7, 0);
  group.add(gazeboRoof);

  // Gazebo label
  const gazeboLabel = createLabel('🏡', -2, 1.8, 0);
  group.add(gazeboLabel);

  // Playground
  const playground = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 0.1, 1.5),
    new THREE.MeshPhongMaterial({ color: 0xffaa44 })
  );
  playground.position.set(0, -0.05, -2);
  group.add(playground);

  // Playground label
  const playLabel = createLabel('🎠', 0, 0.5, -2);
  group.add(playLabel);

  // Walking path (circle around pond)
  const pathGeometry = new THREE.BufferGeometry();
  const pathPoints = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    pathPoints.push(
      Math.cos(angle) * 2.5,
      0.02,
      Math.sin(angle) * 2.5
    );
  }
  pathGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pathPoints), 3));
  const pathMaterial = new THREE.LineBasicMaterial({ color: 0xcccccc, linewidth: 2 });
  const walkingPath = new THREE.Line(pathGeometry, pathMaterial);
  group.add(walkingPath);

  // Lighting
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  group.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 5, 5);
  group.add(directionalLight);

  markerRoot.add(group);
  parkModel = group;
}

// Create text label
function createLabel(text, x, y, z) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 512;
  canvas.height = 256;

  context.fillStyle = 'rgba(255, 255, 255, 0.9)';
  context.font = 'Bold 120px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, 256, 128);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 0.5),
    material
  );
  mesh.position.set(x, y, z);
  return mesh;
}

// Toggle info panel
function toggleInfo() {
  const infoPanel = document.getElementById('ar-info');
  infoPanel.style.display = infoPanel.style.display === 'none' ? 'block' : 'none';

  if (infoPanel.style.display === 'block') {
    const info = parkData.pond;
    document.getElementById('info-title').textContent = info.title;
    document.getElementById('info-description').textContent = info.description;
  }
}

// Toggle instructions
function toggleInstructions() {
  const instructions = document.getElementById('instructions');
  instructions.style.display = instructions.style.display === 'none' ? 'block' : 'none';
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update AR
  if (arToolkitSource.ready === false) {
    return;
  }

  arToolkitContext.update(arToolkitSource.domElement);

  // Rotate model
  if (parkModel) {
    parkModel.rotation.y += 0.005;
  }

  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
  if (arToolkitSource) {
    arToolkitSource.onResize();
    arToolkitSource.copySizeTo(renderer.domElement);
  }
});

// Start AR when page loads
window.addEventListener('DOMContentLoaded', () => {
  // Request camera permissions
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        initAR();
      })
      .catch((err) => {
        alert('ক্যামেরা অ্যাক্সেস প্রয়োজন। অনুগ্রহ করে অনুমতি দিন।');
        console.error('Camera error:', err);
      });
  } else {
    alert('আপনার ব্রাউজার AR সাপোর্ট করে না।');
  }
});
