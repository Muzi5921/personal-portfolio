import './archives-intro.js';
import './styles.css';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: '个人作品集 3.0',
    type: '网页作品',
    desc: '使用科技数据流视觉展示个人档案、博客文章、项目作品和联系方式。',
    problem: '解决个人内容分散、作品展示缺少记忆点的问题。',
    contribution: '负责页面设计、前端实现、Three.js 场景、滚动动画与内容整理。',
    stack: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'GSAP'],
    github: 'https://github.com/yourname/neon-portfolio',
    preview: 'https://example.com/portfolio',
    process: '从视觉关键词出发搭建页面结构，再逐步接入 3D 核心、筛选交互和响应式布局。',
    optimize: '后续可接入真实博客 CMS、项目数据库和图片资源管理。'
  },
  {
    title: '个人博客档案页',
    type: '网页作品',
    desc: '围绕博客文章、分类筛选、搜索终端和全息阅读面板设计的沉浸式内容页面。',
    problem: '解决文章分类不清晰、阅读入口不够有吸引力的问题。',
    contribution: '负责博客页面排版、分类筛选、搜索交互、阅读展开面板和视觉统一。',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'ScrollTrigger'],
    github: 'https://github.com/yourname/blog-archive-page',
    preview: 'https://example.com/blog-archive',
    process: '先拆分技术笔记、学习记录、项目复盘等内容类型，再设计终端搜索和文章卡片动效。',
    optimize: '后续可接入 Markdown 文章详情、评论系统和真实文章数据库。'
  },
  {
    title: '关于我科技档案页',
    type: '网页作品',
    desc: '以银白金属身份芯片、左右信息卡、技能矩阵和数据流时间线构成的个人档案页面。',
    problem: '解决个人介绍页面过于普通、信息记忆点不足的问题。',
    contribution: '负责身份芯片建模、个人信息卡布局、技能进度动画和时间线展示。',
    stack: ['Three.js', 'CSS', 'JavaScript', 'GSAP', 'WebGL'],
    github: 'https://github.com/yourname/about-hud-page',
    preview: 'https://example.com/about-hud',
    process: '从个人档案信息出发，围绕 3D 身份核心组织姓名、职业、爱好、理念和技能内容。',
    optimize: '后续可加入真实头像、证书资料和更多成长经历节点。'
  },
  {
    title: 'AI 创作档案库',
    type: 'AI创作',
    desc: '整理 AI 绘画作品、提示词、灵感来源和分类标签的数字档案页面。',
    problem: 'AI 创作素材增长快，需要建立可检索、可复盘的作品系统。',
    contribution: '负责内容结构、视觉标签、作品归档方式和展示动效。',
    stack: ['AI Tools', 'Web Design', 'CSS', 'JavaScript'],
    github: 'https://github.com/yourname/ai-archive',
    preview: 'https://example.com/ai-archive',
    process: '先梳理作品分类和字段，再设计卡片、标签和全息阅读面板。',
    optimize: '后续可加入图片上传、标签筛选和生成记录。'
  },
  {
    title: '前端动效练习场',
    type: '前端练习',
    desc: '集中练习卡片悬浮、滚动触发、粒子背景和响应式布局的小型实验页面。',
    problem: '动效知识容易碎片化，需要通过小案例持续训练。',
    contribution: '负责动画拆解、组件实现、性能检查和移动端适配。',
    stack: ['JavaScript', 'GSAP', 'CSS', 'ScrollTrigger'],
    github: 'https://github.com/yourname/motion-lab',
    preview: 'https://example.com/motion-lab',
    process: '用一个个独立 demo 验证交互，再把成熟模式沉淀到作品集中。',
    optimize: '后续可整理为组件库和动效笔记。'
  },
  {
    title: '品牌视觉实验',
    type: '品牌设计',
    desc: '围绕个人标识、霓虹色彩、信息卡片和科技 HUD 进行视觉系统探索。',
    problem: '个人网站需要统一识别系统，避免页面风格割裂。',
    contribution: '负责配色、版式、标签语言、徽章和视觉规范整理。',
    stack: ['UI Design', 'CSS', 'Brand System', 'AI Tools'],
    github: 'https://github.com/yourname/brand-lab',
    preview: 'https://example.com/brand-lab',
    process: '从关键词和参考风格提炼视觉元素，形成可复用的界面语言。',
    optimize: '后续可扩展成完整个人品牌手册。'
  }
];

const blogPosts = [
  {
    title: 'Three.js 科技页面搭建笔记',
    category: '技术笔记',
    date: '2026-06-18',
    summary: '记录 3D 数据书本、粒子背景、发光材质和响应式 WebGL 场景的实现过程。',
    content: '从场景、相机、灯光和材质开始搭建，再用粒子和环形数据线增强空间感。重点是控制模型复杂度、处理移动端尺寸，以及让滚动动画和实时渲染保持顺滑。'
  },
  {
    title: '我的前端学习阶段总结',
    category: '学习记录',
    date: '2026-06-12',
    summary: '把 HTML、CSS、JavaScript 和动画交互拆成阶段目标，形成可持续练习路径。',
    content: '学习记录不是简单打卡，而是把知识拆成可复用模块：布局、响应式、组件思维、动效、调试和部署。每完成一个小项目，就补一份复盘。'
  },
  {
    title: '个人作品集页面复盘',
    category: '项目复盘',
    date: '2026-06-05',
    summary: '复盘科技风视觉、Three.js 魔方、关于我页面和内容结构的制作思路。',
    content: '项目目标是让网站第一眼有记忆点，同时保留真实可读的内容。制作过程重点处理了视觉主题、模块层级、交互节奏和中文信息展示。'
  },
  {
    title: '灵感来自动漫、美食与日常',
    category: '生活随笔',
    date: '2026-05-28',
    summary: '记录生活里的颜色、镜头、角色和味道，如何变成 AI 创作与网页设计素材。',
    content: '很多创作灵感来自日常观察：一张截图的配色、一家店的灯光、一段动画的节奏。把这些碎片保存下来，之后就能变成页面、插画或提示词。'
  },
  {
    title: '近期读书观影摘录',
    category: '读书/观影记录',
    date: '2026-05-16',
    summary: '整理书籍、电影、动画和纪录片中的叙事方法、视觉节奏与创作启发。',
    content: '读书和观影记录更像个人素材库。除了摘录情节，也记录镜头语言、角色动机、世界观设定和视觉风格，帮助之后做 AI 创作和网页表达。'
  },
  {
    title: 'AI 工具如何辅助网页设计',
    category: '技术笔记',
    date: '2026-05-02',
    summary: '从需求描述、视觉参考、文案生成到代码实现，记录 AI 协作开发的真实流程。',
    content: 'AI 可以辅助构思、生成方案、整理文案和检查代码，但最终仍需要人来判断审美、信息层级和体验细节。好的协作方式是让 AI 加速执行，让自己负责方向。'
  }
];

const navMenu = document.querySelector('.nav-menu');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('is-open');
  menuToggle.classList.toggle('is-open');
});

document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
  });
});

function createRenderer(canvas, alpha = true) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  return renderer;
}

function sizeRenderer(renderer, camera, container = renderer.domElement.parentElement) {
  const width = Math.max(container.clientWidth, 1);
  const height = Math.max(container.clientHeight, 1);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function initParticleBackground() {
  const canvas = document.querySelector('#particle-bg');
  const renderer = createRenderer(canvas);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 20;

  const count = 1200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 42;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 28;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 24;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0x7c5cff,
    size: 0.035,
    transparent: true,
    opacity: 0.72,
    blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  const resize = () => sizeRenderer(renderer, camera, document.body);
  window.addEventListener('resize', resize);
  resize();

  function animate() {
    points.rotation.y += 0.0009;
    points.rotation.x += 0.0004;
    const attrs = geometry.attributes.position.array;
    for (let i = 1; i < attrs.length; i += 3) {
      attrs[i] -= 0.012;
      if (attrs[i] < -14) attrs[i] = 14;
    }
    geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

function initTechCube() {
  const canvas = document.querySelector('#tech-cube');
  const renderer = createRenderer(canvas);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.5, 5.45);

  const group = new THREE.Group();
  const targetRotation = { x: 0, y: 0 };
  scene.add(group);

  const cubeGeometry = new THREE.BoxGeometry(0.62, 0.62, 0.62, 2, 2, 2);
  const edgeGeometry = new THREE.EdgesGeometry(cubeGeometry);
  const faceColors = [0x36f2ff, 0x3388ff, 0x8c5cff, 0xff4fd8, 0x67ffe1, 0xb8f3ff];
  const positions = [-0.72, 0, 0.72];

  positions.forEach((x) => {
    positions.forEach((y) => {
      positions.forEach((z) => {
        const colorIndex = Math.abs(x * 10 + y * 7 + z * 5) % faceColors.length;
        const miniCube = new THREE.Mesh(
          cubeGeometry,
          new THREE.MeshPhysicalMaterial({
            color: faceColors[Math.floor(colorIndex)],
            metalness: 0.68,
            roughness: 0.14,
            transparent: true,
            opacity: 0.82,
            emissive: faceColors[Math.floor(colorIndex)],
            emissiveIntensity: 0.16,
            clearcoat: 0.8,
            clearcoatRoughness: 0.18
          })
        );
        miniCube.position.set(x, y, z);

        const miniEdges = new THREE.LineSegments(
          edgeGeometry,
          new THREE.LineBasicMaterial({
            color: 0xdffaff,
            transparent: true,
            opacity: 0.72
          })
        );
        miniEdges.position.copy(miniCube.position);

        group.add(miniCube, miniEdges);
      });
    });
  });

  const axisMaterial = new THREE.LineBasicMaterial({
    color: 0x69e7ff,
    transparent: true,
    opacity: 0.35
  });
  [-1, 0, 1].forEach((offset) => {
    const horizontal = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1.28, offset * 0.72, 1.32),
        new THREE.Vector3(1.28, offset * 0.72, 1.32)
      ]),
      axisMaterial
    );
    const vertical = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(offset * 0.72, -1.28, 1.34),
        new THREE.Vector3(offset * 0.72, 1.28, 1.34)
      ]),
      axisMaterial
    );
    group.add(horizontal, vertical);
  });

  for (let i = 0; i < 3; i += 1) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.85 + i * 0.28, 0.01, 8, 120),
      new THREE.MeshBasicMaterial({ color: i % 2 ? 0x7c5cff : 0x36f2ff })
    );
    ring.rotation.set(Math.PI / (i + 2), Math.PI / 3, Math.PI / 7);
    group.add(ring);
  }

  const cyanLight = new THREE.PointLight(0x69e7ff, 3, 18);
  cyanLight.position.set(3, 4, 5);
  scene.add(cyanLight);
  const violetLight = new THREE.PointLight(0x8a5cff, 2.2, 18);
  violetLight.position.set(-4, -2, 4);
  scene.add(violetLight);

  const resize = () => {
    const container = renderer.domElement.parentElement;
    const width = container?.clientWidth || window.innerWidth;
    const scale = width < 520 ? 0.94 : width < 760 ? 1 : 1.04;

    group.scale.setScalar(scale);
    camera.position.z = width < 520 ? 6.05 : width < 760 ? 5.75 : 5.4;
    camera.position.y = width < 520 ? 0.52 : 0.48;
    sizeRenderer(renderer, camera);
  };
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('pointermove', (event) => {
    targetRotation.y = (event.clientX / window.innerWidth - 0.5) * 0.32;
    targetRotation.x = (event.clientY / window.innerHeight - 0.5) * 0.22;
  });

  gsap.to(group.rotation, {
    y: Math.PI * 2,
    scrollTrigger: {
      trigger: '#home',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  function animate() {
    group.rotation.x += 0.005;
    group.rotation.y += 0.007;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

function initIdentityCore() {
  const canvas = document.querySelector('#identity-core');
  const renderer = createRenderer(canvas);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.z = 5;

  const group = new THREE.Group();
  const targetRotation = { x: 0, y: 0 };
  const ico = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.05, 1),
    new THREE.MeshStandardMaterial({
      color: 0x36f2ff,
      wireframe: true,
      emissive: 0x1900ff,
      emissiveIntensity: 0.28,
      transparent: true,
      opacity: 0.38
    })
  );
  const chip = new THREE.Mesh(
    new THREE.BoxGeometry(2.15, 1.28, 0.16),
    new THREE.MeshPhysicalMaterial({
      color: 0xf2f6fb,
      metalness: 1,
      roughness: 0.09,
      emissive: 0x8ecfff,
      emissiveIntensity: 0.035,
      clearcoat: 1,
      clearcoatRoughness: 0.04
    })
  );
  const chipPlate = new THREE.Mesh(
    new THREE.BoxGeometry(1.18, 0.54, 0.04),
    new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.95,
      roughness: 0.07,
      emissive: 0x9feaff,
      emissiveIntensity: 0.045
    })
  );
  chipPlate.position.z = 0.12;
  const chipEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(chip.geometry),
    new THREE.LineBasicMaterial({ color: 0xf4fbff, transparent: true, opacity: 0.92 })
  );
  const plateEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(chipPlate.geometry),
    new THREE.LineBasicMaterial({ color: 0x69e7ff, transparent: true, opacity: 0.88 })
  );
  plateEdges.position.copy(chipPlate.position);
  const pinMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xdce8f4,
    metalness: 0.92,
    roughness: 0.18,
    emissive: 0x69e7ff,
    emissiveIntensity: 0.1
  });
  const pinGeometry = new THREE.BoxGeometry(0.08, 0.18, 0.04);
  const pins = new THREE.Group();
  for (let i = 0; i < 8; i += 1) {
    const x = -0.88 + i * 0.25;
    const topPin = new THREE.Mesh(pinGeometry, pinMaterial);
    topPin.position.set(x, 0.78, 0.02);
    const bottomPin = new THREE.Mesh(pinGeometry, pinMaterial);
    bottomPin.position.set(x, -0.78, 0.02);
    pins.add(topPin, bottomPin);
  }
  for (let i = 0; i < 4; i += 1) {
    const y = -0.36 + i * 0.24;
    const leftPin = new THREE.Mesh(pinGeometry, pinMaterial);
    leftPin.rotation.z = Math.PI / 2;
    leftPin.position.set(-1.22, y, 0.02);
    const rightPin = new THREE.Mesh(pinGeometry, pinMaterial);
    rightPin.rotation.z = Math.PI / 2;
    rightPin.position.set(1.22, y, 0.02);
    pins.add(leftPin, rightPin);
  }
  const circuitMaterial = new THREE.LineBasicMaterial({ color: 0x36f2ff, transparent: true, opacity: 0.82 });
  const circuits = new THREE.Group();
  [
    [[-0.75, 0.22, 0.11], [-0.22, 0.22, 0.11], [-0.22, 0.48, 0.11]],
    [[0.7, -0.18, 0.11], [0.18, -0.18, 0.11], [0.18, -0.45, 0.11]],
    [[-0.52, -0.38, 0.11], [-0.08, -0.08, 0.11], [0.48, -0.08, 0.11]],
    [[0.52, 0.38, 0.11], [0.12, 0.08, 0.11], [-0.48, 0.08, 0.11]]
  ].forEach((points) => {
    circuits.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points.map(([x, y, z]) => new THREE.Vector3(x, y, z))),
        circuitMaterial
      )
    );
  });
  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = 180;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i += 1) {
    const radius = 1.4 + Math.random() * 1.45;
    const angle = Math.random() * Math.PI * 2;
    particlePositions[i * 3] = Math.cos(angle) * radius;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 2.8;
    particlePositions[i * 3 + 2] = Math.sin(angle) * radius;
  }
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      color: 0x69e7ff,
      size: 0.025,
      transparent: true,
      opacity: 0.76,
      blending: THREE.AdditiveBlending
    })
  );
  group.add(chip, chipPlate, chipEdges, plateEdges, pins, circuits, ico, particles);
  scene.add(group);
  const coreLight = new THREE.PointLight(0xffffff, 3.2, 10);
  coreLight.position.set(2, 2, 4);
  scene.add(coreLight);
  const rimLight = new THREE.PointLight(0x69e7ff, 2.6, 12);
  rimLight.position.set(-3, -1.5, 3);
  scene.add(rimLight);

  const resize = () => sizeRenderer(renderer, camera);
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('pointermove', (event) => {
    targetRotation.y = (event.clientX / window.innerWidth - 0.5) * 0.4;
    targetRotation.x = (event.clientY / window.innerHeight - 0.5) * 0.28;
  });

  gsap.to(group.rotation, {
    z: Math.PI * 1.2,
    scrollTrigger: {
      trigger: '#about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  function animate() {
    group.rotation.x += 0.006 + (targetRotation.x - group.rotation.x) * 0.01;
    group.rotation.y += 0.009 + (targetRotation.y - group.rotation.y) * 0.01;
    particles.rotation.y -= 0.003;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

function initBlogCore() {
  const canvas = document.querySelector('#blog-core');
  if (!canvas) return;
  const renderer = createRenderer(canvas);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.15, 5.4);

  const group = new THREE.Group();
  scene.add(group);

  const coverMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x10244a,
    metalness: 0.42,
    roughness: 0.18,
    transparent: true,
    opacity: 0.82,
    emissive: 0x1322ff,
    emissiveIntensity: 0.22,
    clearcoat: 0.75
  });
  const pageMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xdffaff,
    metalness: 0.35,
    roughness: 0.28,
    transparent: true,
    opacity: 0.38,
    emissive: 0x69e7ff,
    emissiveIntensity: 0.07
  });

  const leftCover = new THREE.Mesh(new THREE.BoxGeometry(1.32, 1.78, 0.08), coverMaterial);
  leftCover.position.set(-0.7, 0, 0);
  leftCover.rotation.y = -0.34;
  const rightCover = new THREE.Mesh(new THREE.BoxGeometry(1.32, 1.78, 0.08), coverMaterial);
  rightCover.position.set(0.7, 0, 0);
  rightCover.rotation.y = 0.34;
  group.add(leftCover, rightCover);

  for (let i = 0; i < 6; i += 1) {
    const page = new THREE.Mesh(new THREE.BoxGeometry(1.18, 1.56, 0.018), pageMaterial);
    page.position.set(-0.08 + i * 0.035, 0, 0.08 + i * 0.035);
    page.rotation.y = -0.08 + i * 0.035;
    group.add(page);
  }

  const ringMaterial = new THREE.LineBasicMaterial({ color: 0x69e7ff, transparent: true, opacity: 0.54 });
  for (let i = 0; i < 3; i += 1) {
    const ring = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 96 }, (_, index) => {
          const angle = (index / 95) * Math.PI * 2;
          return new THREE.Vector3(Math.cos(angle) * (1.75 + i * 0.28), Math.sin(angle) * (1.05 + i * 0.16), 0);
        })
      ),
      ringMaterial
    );
    ring.rotation.set(Math.PI / (3 + i), Math.PI / 5, Math.PI / 9);
    group.add(ring);
  }

  const particleGeometry = new THREE.BufferGeometry();
  const count = 220;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 4.4;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 3.2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2.4;
  }
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      color: 0x69e7ff,
      size: 0.025,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending
    })
  );
  group.add(particles);

  const light = new THREE.PointLight(0x69e7ff, 3, 12);
  light.position.set(2, 2, 4);
  scene.add(light);
  const violetLight = new THREE.PointLight(0x8c5cff, 2, 12);
  violetLight.position.set(-3, -1, 3);
  scene.add(violetLight);

  const resize = () => sizeRenderer(renderer, camera);
  window.addEventListener('resize', resize);
  resize();

  gsap.to(group.rotation, {
    y: Math.PI * 1.4,
    scrollTrigger: {
      trigger: '#blog',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  function animate() {
    group.rotation.x += 0.003 + (targetRotation.x - group.rotation.x) * 0.008;
    group.rotation.y += 0.006 + (targetRotation.y - group.rotation.y) * 0.008;
    particles.rotation.y -= 0.004;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

function initProjectCore() {
  const canvas = document.querySelector('#project-core');
  if (!canvas) return;
  const renderer = createRenderer(canvas);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.25, 5.8);

  const group = new THREE.Group();
  const targetRotation = { x: 0, y: 0 };
  scene.add(group);

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.05, 1),
    new THREE.MeshPhysicalMaterial({
      color: 0x10244a,
      metalness: 0.72,
      roughness: 0.16,
      transparent: true,
      opacity: 0.88,
      emissive: 0x2133ff,
      emissiveIntensity: 0.22,
      clearcoat: 0.85
    })
  );
  const coreEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(core.geometry),
    new THREE.LineBasicMaterial({ color: 0x69e7ff, transparent: true, opacity: 0.82 })
  );
  group.add(core, coreEdges);

  const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x8c5cff, transparent: true, opacity: 0.58 });
  for (let i = 0; i < 4; i += 1) {
    const orbit = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 120 }, (_, index) => {
          const angle = (index / 119) * Math.PI * 2;
          return new THREE.Vector3(Math.cos(angle) * (1.55 + i * 0.24), Math.sin(angle) * (0.82 + i * 0.14), 0);
        })
      ),
      orbitMaterial
    );
    orbit.rotation.set(Math.PI / (2.8 + i), Math.PI / 4, Math.PI / (6 + i));
    group.add(orbit);
  }

  const particleGeometry = new THREE.BufferGeometry();
  const count = 260;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 5;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 3.4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2.8;
  }
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
      color: 0x69e7ff,
      size: 0.026,
      transparent: true,
      opacity: 0.76,
      blending: THREE.AdditiveBlending
    })
  );
  group.add(particles);

  const cyanLight = new THREE.PointLight(0x69e7ff, 3, 12);
  cyanLight.position.set(2, 2, 4);
  scene.add(cyanLight);
  const violetLight = new THREE.PointLight(0x8c5cff, 2.5, 12);
  violetLight.position.set(-3, -1.5, 3);
  scene.add(violetLight);

  const resize = () => sizeRenderer(renderer, camera);
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('pointermove', (event) => {
    targetRotation.y = (event.clientX / window.innerWidth - 0.5) * 0.34;
    targetRotation.x = (event.clientY / window.innerHeight - 0.5) * 0.22;
  });

  gsap.to(group.rotation, {
    z: Math.PI * 1.2,
    scrollTrigger: {
      trigger: '#projects',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  function animate() {
    group.rotation.x += 0.004 + (targetRotation.x - group.rotation.x) * 0.008;
    group.rotation.y += 0.007 + (targetRotation.y - group.rotation.y) * 0.008;
    particles.rotation.y -= 0.0035;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

function initBirdTransition() {
  const canvas = document.querySelector('#bird-transition');
  const renderer = createRenderer(canvas);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 12;

  const birds = new THREE.Group();
  for (let i = 0; i < 42; i += 1) {
    const bird = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-0.16, 0, 0),
        new THREE.Vector3(0, 0.08, 0),
        new THREE.Vector3(0.16, 0, 0)
      ]),
      new THREE.LineBasicMaterial({ color: i % 2 ? 0x36f2ff : 0x8c5cff, transparent: true, opacity: 0.65 })
    );
    bird.position.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 4);
    bird.scale.setScalar(0.7 + Math.random() * 1.7);
    birds.add(bird);
  }
  scene.add(birds);

  const resize = () => sizeRenderer(renderer, camera, canvas.parentElement);
  window.addEventListener('resize', resize);
  resize();

  gsap.fromTo(
    birds.position,
    { x: -3 },
    {
      x: 3,
      scrollTrigger: {
        trigger: '#contact',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    }
  );

  function animate() {
    birds.children.forEach((bird, index) => {
      bird.position.x += 0.01 + index * 0.0002;
      bird.position.y += Math.sin(Date.now() * 0.001 + index) * 0.0008;
      if (bird.position.x > 7) bird.position.x = -7;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

function initContactCore() {
  const canvas = document.querySelector('#contact-core');
  if (!canvas) return;
  const renderer = createRenderer(canvas);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.15, 7.2);

  const group = new THREE.Group();
  const birdGroup = new THREE.Group();
  const networkGroup = new THREE.Group();
  const targetRotation = { x: 0, y: 0 };
  scene.add(group);
  group.add(birdGroup, networkGroup);

  const birdPoints = [];
  const addWing = (side) => {
    for (let i = 0; i < 180; i += 1) {
      const t = Math.random();
      const span = Math.sin(t * Math.PI);
      const x = side * (0.25 + t * 2.25 + Math.random() * 0.12);
      const y = 0.18 + span * (1.2 + Math.random() * 0.4) - t * 0.46;
      const z = (Math.random() - 0.5) * 0.34;
      birdPoints.push(x, y, z);
    }
  };
  addWing(-1);
  addWing(1);
  for (let i = 0; i < 130; i += 1) {
    const t = Math.random();
    birdPoints.push((Math.random() - 0.5) * 0.62, 0.45 - t * 1.25, (Math.random() - 0.5) * 0.38);
  }
  for (let i = 0; i < 58; i += 1) {
    birdPoints.push(0.18 + Math.random() * 0.62, 0.55 + Math.random() * 0.24, (Math.random() - 0.5) * 0.18);
  }

  const birdGeometry = new THREE.BufferGeometry();
  birdGeometry.setAttribute('position', new THREE.Float32BufferAttribute(birdPoints, 3));
  const birdParticles = new THREE.Points(
    birdGeometry,
    new THREE.PointsMaterial({
      color: 0x69e7ff,
      size: 0.035,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending
    })
  );
  birdGroup.add(birdParticles);

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x8c5cff, transparent: true, opacity: 0.56 });
  [
    [[0, 0.38, 0], [-2.32, 1.02, 0], [-0.42, 0.08, 0]],
    [[0, 0.38, 0], [2.32, 1.02, 0], [0.42, 0.08, 0]],
    [[-0.42, 0.08, 0], [0, -0.78, 0], [0.42, 0.08, 0]],
    [[0, 0.55, 0], [0.86, 0.67, 0], [1.08, 0.58, 0]]
  ].forEach((points) => {
    birdGroup.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points.map(([x, y, z]) => new THREE.Vector3(x, y, z))),
        lineMaterial
      )
    );
  });

  const trailGeometry = new THREE.BufferGeometry();
  const trailCount = 180;
  const trailPositions = new Float32Array(trailCount * 3);
  for (let i = 0; i < trailCount; i += 1) {
    trailPositions[i * 3] = -2.6 - Math.random() * 2.4;
    trailPositions[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
    trailPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.9;
  }
  trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
  const trail = new THREE.Points(
    trailGeometry,
    new THREE.PointsMaterial({
      color: 0x8c5cff,
      size: 0.025,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    })
  );
  birdGroup.add(trail);

  const nodeMaterial = new THREE.PointsMaterial({ color: 0xf4fbff, size: 0.04, transparent: true, opacity: 0.7 });
  const networkPositions = new Float32Array(36 * 3);
  const networkVectors = [];
  for (let i = 0; i < 36; i += 1) {
    const v = new THREE.Vector3((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 3.1, (Math.random() - 0.5) * 1.2);
    networkVectors.push(v);
    networkPositions[i * 3] = v.x;
    networkPositions[i * 3 + 1] = v.y;
    networkPositions[i * 3 + 2] = v.z;
  }
  const nodeGeometry = new THREE.BufferGeometry();
  nodeGeometry.setAttribute('position', new THREE.BufferAttribute(networkPositions, 3));
  networkGroup.add(new THREE.Points(nodeGeometry, nodeMaterial));
  const networkLineMaterial = new THREE.LineBasicMaterial({ color: 0x36f2ff, transparent: true, opacity: 0.12 });
  for (let i = 0; i < networkVectors.length - 1; i += 3) {
    networkGroup.add(
      new THREE.Line(new THREE.BufferGeometry().setFromPoints([networkVectors[i], networkVectors[i + 1]]), networkLineMaterial)
    );
  }

  const light = new THREE.PointLight(0xffffff, 3.2, 12);
  light.position.set(2, 2, 4);
  scene.add(light);
  const violetLight = new THREE.PointLight(0x8c5cff, 2.4, 12);
  violetLight.position.set(-3, -1.4, 3);
  scene.add(violetLight);

  const resize = () => sizeRenderer(renderer, camera);
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('pointermove', (event) => {
    targetRotation.y = (event.clientX / window.innerWidth - 0.5) * 0.34;
    targetRotation.x = (event.clientY / window.innerHeight - 0.5) * 0.22;
  });

  gsap.to(group.rotation, {
    z: Math.PI * 0.45,
    scrollTrigger: {
      trigger: '#contact',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
  gsap.fromTo(
    birdGroup.position,
    { x: -1.2, z: -1.6 },
    {
      x: 0.7,
      z: 0.4,
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 70%',
        end: 'center 20%',
        scrub: true
      }
    }
  );

  function animate() {
    const time = Date.now() * 0.001;
    birdGroup.scale.setScalar(1 + Math.sin(time * 2.4) * 0.04);
    birdGroup.rotation.z = Math.sin(time * 1.6) * 0.07;
    const wingPositions = birdGeometry.attributes.position.array;
    for (let i = 1; i < 360 * 3; i += 3) {
      wingPositions[i] += Math.sin(time * 5 + i) * 0.0009;
    }
    birdGeometry.attributes.position.needsUpdate = true;
    group.rotation.x += 0.004 + (targetRotation.x - group.rotation.x) * 0.008;
    group.rotation.y += 0.007 + (targetRotation.y - group.rotation.y) * 0.008;
    networkGroup.rotation.y -= 0.0015;
    trail.rotation.z = Math.sin(time) * 0.05;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

function initScrollAnimations() {
  gsap.utils
    .toArray(
      '.section-heading, .glass-panel:not(.blog-card):not(.blog-category-card):not(.blog-terminal):not(.blog-core):not(.blog-timeline):not(.blog-knowledge-core):not(.data-card):not(.identity-core):not(.skill-card):not(.vertical-timeline):not(.identity-badge)'
    )
    .forEach((item) => {
    gsap.from(item, {
      y: 42,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 82%'
      }
    });
  });

  gsap.from('.scan-title', {
    opacity: 0,
    y: 28,
    filter: 'blur(12px)',
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#about',
      start: 'top 72%'
    }
  });

  gsap.fromTo(
    '.data-card',
    { autoAlpha: 1, y: 0 },
    {
      y: -8,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: '.about-archive',
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    }
  );

  gsap.utils.toArray('.skill-card').forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 70,
      rotateX: 12,
      duration: 0.8,
      delay: index * 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 84%'
      }
    });
  });

  gsap.utils.toArray('.skill-card i').forEach((bar) => {
    gsap.to(bar, {
      '--progress': 1,
      scrollTrigger: {
        trigger: bar,
        start: 'top 86%',
        onEnter: () => bar.classList.add('is-filled')
      }
    });
  });

  gsap.utils.toArray('.vertical-timeline .timeline-item').forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      x: 44,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 78%',
        onEnter: () => item.classList.add('is-lit')
      }
    });
  });

  gsap.from('.belief-zone p', {
    scale: 0.86,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.belief-zone',
      start: 'top 72%'
    }
  });

  gsap.from('.chip-cloud span', {
    opacity: 0,
    y: 34,
    rotate: -6,
    stagger: 0.08,
    duration: 0.72,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.chip-cloud',
      start: 'top 82%'
    }
  });

  gsap.from('.identity-badge', {
    opacity: 0,
    scale: 0.78,
    duration: 0.9,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.identity-badge',
      start: 'top 86%'
    }
  });

  gsap.to('.site-header', {
    backgroundColor: 'rgba(5, 8, 23, 0.78)',
    borderColor: 'rgba(105, 231, 255, 0.28)',
    scrollTrigger: {
      trigger: '#home',
      start: '120px top',
      end: 'bottom top',
      scrub: true
    }
  });
}

function renderProjects() {
  const grid = document.querySelector('#project-grid');
  if (!grid) return;
  grid.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card glass-panel" data-project="${index}" data-category="${project.type}">
          <div class="project-orb"><span>${String(index + 1).padStart(2, '0')}</span></div>
          <span>${project.type}</span>
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
          <dl class="project-card-meta">
            <div><dt>解决</dt><dd>${project.problem}</dd></div>
            <div><dt>贡献</dt><dd>${project.contribution}</dd></div>
          </dl>
          <div class="tag-row">${project.stack.map((tag) => `<b>${tag}</b>`).join('')}</div>
          <div class="project-card-actions">
            <a class="btn ghost pulse-link" href="${project.github}" target="_blank" rel="noreferrer">源码</a>
            <a class="btn primary pulse-link" href="${project.preview}" target="_blank" rel="noreferrer">预览</a>
            <button class="btn ghost" type="button">全息详情</button>
          </div>
        </article>
      `
    )
    .join('');

  const modal = document.querySelector('#project-modal');
  const title = document.querySelector('#modal-title');
  const type = document.querySelector('#modal-type');
  const desc = document.querySelector('#modal-desc');
  const tags = document.querySelector('#modal-tags');
  const link = document.querySelector('#modal-link');
  const preview = document.querySelector('#modal-preview');
  const details = document.querySelector('#modal-details');

  grid.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      const project = projects[Number(card.dataset.project)];
      title.textContent = project.title;
      type.textContent = project.type;
      desc.textContent = project.desc;
      tags.innerHTML = project.stack.map((tag) => `<span>${tag}</span>`).join('');
      link.href = project.github;
      preview.href = project.preview;
      details.innerHTML = `
        <div><strong>项目背景</strong><p>${project.desc}</p></div>
        <div><strong>核心功能</strong><p>项目展示、内容归档、筛选交互、视觉动效和响应式访问。</p></div>
        <div><strong>解决的问题</strong><p>${project.problem}</p></div>
        <div><strong>我的贡献</strong><p>${project.contribution}</p></div>
        <div><strong>开发过程</strong><p>${project.process}</p></div>
        <div><strong>优化方向</strong><p>${project.optimize}</p></div>
      `;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  modal.querySelectorAll('[data-close-modal]').forEach((item) => {
    item.addEventListener('click', () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    });
  });
}

function initProjectFilters() {
  const filters = document.querySelectorAll('.project-filter');
  if (!filters.length) return;
  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      filters.forEach((item) => item.classList.remove('is-active'));
      filter.classList.add('is-active');
      const category = filter.dataset.category;
      document.querySelectorAll('#project-grid .project-card').forEach((card) => {
        const shouldShow = category === '全部项目' || card.dataset.category === category;
        card.classList.toggle('is-hidden', !shouldShow);
        if (shouldShow) {
          gsap.fromTo(card, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.36, ease: 'power2.out' });
        }
      });
      document.querySelector('#project-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function renderBlogPosts(posts = blogPosts) {
  const list = document.querySelector('#blog-list');
  if (!list) return;
  list.innerHTML = posts
    .map(
      (post, index) => `
        <article class="blog-card glass-panel" data-post="${index}" data-category="${post.category}" data-keywords="${post.title} ${post.category} ${post.summary}">
          <span>${post.category}</span>
          <h3>${post.title}</h3>
          <time datetime="${post.date}">${post.date}</time>
          <p>${post.summary}</p>
          <button type="button">打开全息档案</button>
        </article>
      `
    )
    .join('');

  list.querySelectorAll('.blog-card button').forEach((button) => {
    button.addEventListener('click', (event) => {
      const card = event.currentTarget.closest('.blog-card');
      const post = posts[Number(card.dataset.post)];
      const panel = card.querySelector('.blog-reading-panel');
      const shouldOpen = !card.classList.contains('is-reading');

      card.classList.toggle('is-reading', shouldOpen);
      event.currentTarget.textContent = shouldOpen ? '收起档案' : '打开全息档案';

      if (!shouldOpen) {
        panel?.remove();
        return;
      }

      if (!panel) {
        const panel = document.createElement('div');
        panel.className = 'blog-reading-panel';
        panel.innerHTML = `
          <strong>阅读档案已展开</strong>
          <p>${post.content}</p>
        `;
        card.appendChild(panel);
      }
    });
  });
}

function initBlogFilters() {
  const filters = document.querySelectorAll('.blog-filter');
  const search = document.querySelector('#blog-search');
  const status = document.querySelector('#blog-core-status');
  const coreTitle = document.querySelector('.blog-core-caption strong');
  if (!filters.length || !search) return;
  let activeCategory = '全部';

  const applyFilters = () => {
    const keyword = search.value.trim().toLowerCase();
    const matchedTitles = [];
    document.querySelectorAll('#blog-list .blog-card').forEach((card) => {
      const matchesCategory = activeCategory === '全部' || card.dataset.category === activeCategory;
      const matchesKeyword = card.dataset.keywords.toLowerCase().includes(keyword);
      const shouldShow = matchesCategory && matchesKeyword;
      card.classList.toggle('is-hidden', !shouldShow);
      if (!shouldShow) {
        card.classList.remove('is-reading');
        card.querySelector('.blog-reading-panel')?.remove();
        const button = card.querySelector('button');
        if (button) button.textContent = '打开全息档案';
      }
      if (shouldShow) {
        matchedTitles.push(card.querySelector('h3')?.textContent || '未命名文章');
        gsap.fromTo(card, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' });
      }
    });

    if (coreTitle && status) {
      if (keyword || activeCategory !== '全部') {
        coreTitle.textContent = `已匹配 ${matchedTitles.length} 篇文章`;
        status.textContent = matchedTitles.length ? matchedTitles.slice(0, 2).join(' / ') : '没有找到匹配文章';
      } else {
        coreTitle.textContent = '知识持续积累';
        status.textContent = '等待检索指令';
      }
    }
  };

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      filters.forEach((item) => item.classList.remove('is-active'));
      filter.classList.add('is-active');
      activeCategory = filter.dataset.category;
      document.querySelector('#blog-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      applyFilters();
    });
  });

  search.addEventListener('input', applyFilters);
}

function initBlogAnimations() {
  gsap.from('.blog-scan-title', {
    opacity: 0,
    y: 28,
    filter: 'blur(12px)',
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#blog',
      start: 'top 72%'
    }
  });

  gsap.from('.blog-filter', {
    opacity: 0,
    y: 22,
    stagger: 0.06,
    duration: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.blog-filter-bar',
      start: 'top 84%'
    }
  });

  gsap.utils.toArray('.blog-card, .blog-category-card').forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 64,
      rotateX: 8,
      duration: 0.75,
      delay: (index % 3) * 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 84%'
      }
    });
  });

  gsap.utils.toArray('.blog-timeline-item').forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      x: 42,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        onEnter: () => item.classList.add('is-lit')
      }
    });
  });

  gsap.from('.blog-knowledge-core', {
    opacity: 0,
    scale: 0.8,
    duration: 0.9,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.blog-knowledge-core',
      start: 'top 86%'
    }
  });
}

function initAIFaceFlicker() {
  const face = document.querySelector('.ai-face-core');
  if (!face) return;

  const flicker = () => {
    face.classList.add('is-flickering');
    window.setTimeout(() => {
      face.classList.remove('is-flickering');
      window.setTimeout(flicker, 450 + Math.random() * 1300);
    }, 90 + Math.random() * 180);
  };

  window.setTimeout(flicker, 500);
}

function initProjectAnimations() {
  gsap.from('.project-scan-title', {
    opacity: 0,
    y: 28,
    filter: 'blur(12px)',
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 72%'
    }
  });

  gsap.from('.project-filter', {
    opacity: 0,
    y: 22,
    stagger: 0.06,
    duration: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.project-filter-bar',
      start: 'top 84%'
    }
  });

  gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 64,
      rotateX: 8,
      duration: 0.78,
      delay: (index % 3) * 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 84%'
      }
    });
  });

  gsap.from('.project-library-core', {
    opacity: 0,
    scale: 0.78,
    duration: 0.9,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.project-library-core',
      start: 'top 86%'
    }
  });

  document.querySelectorAll('.pulse-link').forEach((link) => {
    link.addEventListener('click', () => {
      link.classList.remove('is-pulsing');
      void link.offsetWidth;
      link.classList.add('is-pulsing');
    });
  });
}

function initContactInteractions() {
  const copyButton = document.querySelector('#copy-email');
  const email = document.querySelector('#email-address')?.textContent || '';
  const toast = document.querySelector('#copy-toast');

  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement('input');
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    toast?.classList.add('is-visible');
    copyButton.classList.add('is-pulsing');
    window.setTimeout(() => {
      toast?.classList.remove('is-visible');
      copyButton.classList.remove('is-pulsing');
    }, 1400);
  });
}

function initContactAnimations() {
  gsap.from('.contact-scan-title', {
    opacity: 0,
    y: 28,
    filter: 'blur(12px)',
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 72%'
    }
  });

  gsap.from('.contact-core-stage', {
    opacity: 0,
    scale: 0.88,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact-core-stage',
      start: 'top 84%'
    }
  });

  gsap.from('.social-card', {
    opacity: 0,
    y: 64,
    rotateX: 8,
    stagger: 0.08,
    duration: 0.76,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.social-card-grid',
      start: 'top 84%'
    }
  });

  gsap.from('.contact-terminal', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact-terminal',
      start: 'top 84%'
    }
  });

  gsap.from('.contact-finale', {
    opacity: 0,
    scale: 0.82,
    duration: 0.9,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.contact-finale',
      start: 'top 86%'
    }
  });
}

renderBlogPosts();
renderProjects();
initBlogFilters();
initProjectFilters();
initParticleBackground();
initTechCube();
initIdentityCore();
initBlogCore();
initProjectCore();
initContactCore();
initBirdTransition();
initScrollAnimations();
initBlogAnimations();
initAIFaceFlicker();
initProjectAnimations();
initContactInteractions();
initContactAnimations();
