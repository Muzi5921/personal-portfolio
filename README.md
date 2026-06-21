# Neon Data Portfolio

个人作品集 3.0，基于 Vite、Three.js 和 GSAP 构建。

## 项目结构

```text
├─ public/
│  ├─ documents/     PDF 文档
│  ├─ images/        图片资源
│  └─ media/         视频等媒体资源
├─ src/
│  ├─ archives-intro.js
│  ├─ main.js
│  └─ styles.css
├─ index.html        页面入口
├─ package.json      项目依赖与命令
└─ vite.config.js    Vite 配置
```

`dist/` 是构建输出，`node_modules/` 是本地依赖，两者均无需手动编辑。

## 本地运行

```powershell
npm install
npm run dev
```

打开 `http://localhost:5173`。

## 构建与预览

```powershell
npm run build
npm run preview
```

构建产物输出到 `dist/`，预览地址为 `http://localhost:4173`。

## 部署

可部署到 Vercel、Netlify、Cloudflare Pages 或 GitHub Pages：

- 构建命令：`npm run build`
- 输出目录：`dist`
- 安装命令：`npm install`
