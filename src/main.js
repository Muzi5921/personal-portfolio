import './archives-intro.js';
import './styles.css';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: '动漫追番档案',
    type: '动漫番剧',
    desc: '整理追过的番剧清单、角色印象、动画风格分析和个人评分的收藏档案。',
    problem: '追了很多番但没有系统记录，想法和感受容易遗忘。',
    contribution: '按类型、年份和评分归档，记录每部作品最打动我的瞬间和角色。',
    stack: ['热血', '治愈', '悬疑', '奇幻', '日常'],
    github: '',
    preview: '',
    process: '从印象最深的作品开始，逐步梳理观看记录，整理成可回溯的个人番剧档案。',
    optimize: '后续打算加入「推荐理由」和「适合什么心情看」两个维度。'
  },
  {
    title: '美食探索地图',
    type: '美食探索',
    desc: '记录探访过的餐厅、街边小吃、家常料理和每一次好吃体验的私藏清单。',
    problem: '好吃的地方吃完就忘，想建立一个随时能翻的美食记忆库。',
    contribution: '按菜系、价位和心情归类，附上每次探店的感受和必点菜推荐。',
    stack: ['川菜', '日料', '街头小吃', '甜品', '家常'],
    github: '',
    preview: '',
    process: '从常去的几家店开始记录，慢慢扩展到新探索的地方，把每次好吃的体验写下来。',
    optimize: '后续想加地图标注，做成真正能导航的私藏美食地图。'
  },
  {
    title: 'AI 绘画创作库',
    type: 'AI创作',
    desc: '整理 AI 绘画作品、提示词思路、风格参考和创作过程的个人创作档案。',
    problem: 'AI 创作素材越来越多，需要一个可回溯、可学习的整理系统。',
    contribution: '按风格和主题归档，记录每张作品背后的提示词逻辑和灵感来源。',
    stack: ['二次元', '写实', '赛博朋克', '水彩', '概念艺术'],
    github: '',
    preview: '',
    process: '从喜欢的动漫场景出发构思提示词，反复调整风格词和细节描述，直到画面符合直觉。',
    optimize: '后续想建立提示词模板库，方便复用喜欢的风格。'
  },
  {
    title: '插画收藏册',
    type: 'AI创作',
    desc: '收藏让我印象深刻的插画作品、参考图和个人画风探索记录。',
    problem: '喜欢的插画风格散落各处，想系统整理成个人审美参考库。',
    contribution: '按画风、配色和构图整理，记录每张图打动我的具体细节。',
    stack: ['动漫风', '概念插画', '场景设计', '角色设计', '色彩研究'],
    github: '',
    preview: '',
    process: '从截图和收藏图开始，整理成带标注的参考库，逐步形成自己的审美坐标系。',
    optimize: '后续想加入自己临摹和再创作的作品对比。'
  },
  {
    title: '日常好物清单',
    type: '日常好物',
    desc: '记录生活中发现的好用物品、有趣 App、文具和值得推荐的小东西。',
    problem: '用过好东西经常忘了记录，想建立一个自用推荐清单。',
    contribution: '按类别整理，附上使用感受和适合推荐给什么人。',
    stack: ['文具', 'App', '生活用品', '零食', '书影音'],
    github: '',
    preview: '',
    process: '从手边正在用的好东西开始记录，慢慢积累成真正有参考价值的个人清单。',
    optimize: '后续想加入「性价比」和「替代品」两个维度，让推荐更实用。'
  },
  {
    title: '音乐歌单档案',
    type: '日常好物',
    desc: '按心情、场景和风格整理的个人歌单收藏，记录每首歌背后的感受和故事。',
    problem: '歌单越来越多但没有情感标注，想建立有温度的音乐档案。',
    contribution: '按心情和场景分类，记录每首歌第一次听到时的感受。',
    stack: ['日系', 'Lo-fi', '国风', '电子', 'OST'],
    github: '',
    preview: '',
    process: '从反复单曲循环的歌开始记录，整理成「清晨」「深夜」「通勤」等场景歌单。',
    optimize: '后续想加入动漫原声 OST 专题和「让我想起某部番」的联动标注。'
  }
];

const blogPosts = [
  {
    title: '最近在追的番：《葬送的芙莉莲》',
    category: '番剧观后感',
    date: '2026-06-18',
    summary: '一部用「慢节奏」讲时间流逝的动画，每一帧都像是在问你：什么东西值得被记住？',
    content: '芙莉莲的厉害之处在于它从不急。没有紧张的战斗节奏，却让人看完每一集都有点难受——不是悲伤，是那种"时间过得太快"的钝感。配色非常舒服，远景的处理和角色的停顿方式都有设计感。推荐给喜欢安静但有深度的故事的人。'
  },
  {
    title: '这家拉面让我记了好几年',
    category: '美食日记',
    date: '2026-06-12',
    summary: '不是最贵的，不是最出名的，但就是那碗汤底让我隔几个月就想去吃一次。',
    content: '汤是清鸡白汤，不厚重，喝完不腻。面条偏细，有嚼劲。最重要的是温度——上来的时候刚好，不会烫嘴，也不会凉掉。这种细节说明店家是认真的。叉烧偏瘦，但每片都均匀有厚度。性价比很高，下次还会去。'
  },
  {
    title: '用提示词「还原」了一个动漫场景',
    category: 'AI创作记录',
    date: '2026-06-05',
    summary: '试着把脑子里某个动漫片段用 AI 画出来，过程比预期难，但结果很有意思。',
    content: '参考的是某部动漫里黄昏时分、主角坐在屋顶看夕阳的场景。提示词前几次生成的都太写实或者太卡通，后来加了"cel shading, anime key visual, warm backlighting"之后味道对了很多。光影的方向和角色和背景的层次感是最难把控的，最终大概试了十几次才找到满意的版本。'
  },
  {
    title: '今天的碎片：电梯里的那首歌',
    category: '日常碎片',
    date: '2026-05-28',
    summary: '在公司电梯里听到一首很久没听过的老歌，停了几秒，想起了好多东西。',
    content: '说不清是什么歌，但就那几秒旋律让人停在原地。音乐的记忆是一种很奇怪的东西，它不按时间线触发，而是按气味和情绪。今天天气很好，午饭不错，下班路上还看见一只白猫在晒太阳。这些加在一起，是一个挺好的普通的天。'
  },
  {
    title: '看完《路人女主的养成方法》的碎碎念',
    category: '读书/观影',
    date: '2026-05-16',
    summary: '一部关于「普通人想被看见」的动画，比想象中戳到我。',
    content: '加藤惠这个角色设计很聪明——她的「普通」是刻意的，不是真的无聊。整部作品最有意思的地方不是恋爱线，而是「创作一部恋爱游戏」这个过程里每个人的自我认知在变。英梨梨和诗羽的争论其实是两种创作哲学在对话。结局没有大团圆，但很诚实。'
  },
  {
    title: 'AI 画角色的时候我在想什么',
    category: 'AI创作记录',
    date: '2026-05-02',
    summary: '不是在「生成图片」，更像是在用提示词做一次角色设计的草稿推演。',
    content: '最近在用 AI 画一个自己想象中的角色——银发、冷淡气质、带点赛博感的服装。难点在于"冷淡"这个气质很难直接描述，试过 cold expression、emotionless、stoic，效果都不一样。最后发现加"sharp eyes, slight frown, distant gaze"比直接描述性格词更准确。提示词更像是在做视觉翻译，而不是写需求单。'
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
  camera.position.z = 5.4;

  const group = new THREE.Group();
  const targetRotation = { x: 0, y: 0 };

  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(1.18, 64, 64),
    new THREE.MeshPhysicalMaterial({
      color: 0x9beaff,
      metalness: 0.05,
      roughness: 0.08,
      transmission: 0.92,
      transparent: true,
      opacity: 0.3,
      thickness: 0.7,
      clearcoat: 1,
      iridescence: 0.75,
      iridescenceIOR: 1.6
    })
  );
  const shellWire = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.2, 2)),
    new THREE.LineBasicMaterial({ color: 0x69e7ff, transparent: true, opacity: 0.14 })
  );
  const innerCore = new THREE.Mesh(
    new THREE.SphereGeometry(0.42, 40, 40),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.72, blending: THREE.AdditiveBlending })
  );

  const orbitGroup = new THREE.Group();
  const orbitColors = [0x36f2ff, 0xff3cac, 0xffb347, 0x62f7a5];
  orbitColors.forEach((color, index) => {
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(1.48 + index * 0.18, 0.012 + index * 0.002, 8, 180),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.72, blending: THREE.AdditiveBlending })
    );
    orbit.rotation.set(0.38 + index * 0.46, 0.2 + index * 0.62, index * 0.34);
    orbit.userData.speed = index % 2 ? -0.0025 - index * 0.0003 : 0.002 + index * 0.0003;
    orbitGroup.add(orbit);

    const node = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 16, 16),
      new THREE.MeshBasicMaterial({ color, blending: THREE.AdditiveBlending })
    );
    node.position.set(1.48 + index * 0.18, 0, 0);
    orbit.add(node);
  });

  const particleClouds = new THREE.Group();
  orbitColors.forEach((color, band) => {
    const count = 110;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const progress = i / count;
      const angle = progress * Math.PI * 8 + band * 1.6 + Math.random() * 0.35;
      const radius = 0.52 + progress * 1.28 + band * 0.025;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (progress - 0.5) * 1.75 + Math.sin(angle * 0.5) * 0.18;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const cloud = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color, size: 0.035, transparent: true, opacity: 0.82, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    cloud.rotation.z = band * 0.48;
    particleClouds.add(cloud);
  });

  group.add(shell, shellWire, innerCore, orbitGroup, particleClouds);
  scene.add(group);

  const coreLight = new THREE.PointLight(0xffffff, 4.2, 10);
  coreLight.position.set(0, 0, 2);
  scene.add(coreLight);
  const cyanLight = new THREE.PointLight(0x36f2ff, 3, 12);
  cyanLight.position.set(-3, 2, 3);
  const pinkLight = new THREE.PointLight(0xff3cac, 2.8, 12);
  pinkLight.position.set(3, -2, 3);
  scene.add(cyanLight, pinkLight);

  const resize = () => sizeRenderer(renderer, camera);
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('pointermove', (event) => {
    targetRotation.y = (event.clientX / window.innerWidth - 0.5) * 0.4;
    targetRotation.x = (event.clientY / window.innerHeight - 0.5) * 0.28;
  });

  gsap.to(group.rotation, {
    z: Math.PI * 0.45,
    scrollTrigger: {
      trigger: '#about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  function animate() {
    group.rotation.x += (targetRotation.x - group.rotation.x) * 0.025;
    group.rotation.y += 0.003 + (targetRotation.y - group.rotation.y) * 0.018;
    shellWire.rotation.y -= 0.0018;
    orbitGroup.children.forEach((orbit) => { orbit.rotation.z += orbit.userData.speed; });
    particleClouds.rotation.y -= 0.0025;
    particleClouds.rotation.z += 0.0008;
    const pulse = 1 + Math.sin(performance.now() * 0.0022) * 0.045;
    innerCore.scale.setScalar(pulse);
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
            <div><dt>缘起</dt><dd>${project.problem}</dd></div>
            <div><dt>整理</dt><dd>${project.contribution}</dd></div>
          </dl>
          <div class="tag-row">${project.stack.map((tag) => `<b>${tag}</b>`).join('')}</div>
          <div class="project-card-actions">
            <button class="btn ghost" type="button">收藏详情</button>
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
  const details = document.querySelector('#modal-details');

  grid.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      const project = projects[Number(card.dataset.project)];
      title.textContent = project.title;
      type.textContent = project.type;
      desc.textContent = project.desc;
      tags.innerHTML = project.stack.map((tag) => `<span>${tag}</span>`).join('');
      details.innerHTML = `
        <div><strong>收藏背景</strong><p>${project.desc}</p></div>
        <div><strong>为什么收藏</strong><p>${project.problem}</p></div>
        <div><strong>整理方式</strong><p>${project.contribution}</p></div>
        <div><strong>收藏过程</strong><p>${project.process}</p></div>
        <div><strong>后续计划</strong><p>${project.optimize}</p></div>
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
        const shouldShow = category === '全部收藏' || card.dataset.category === category;
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
