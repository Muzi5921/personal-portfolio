# Neon Data Portfolio

个人作品集 3.0，基于 Vite、Three.js 和 GSAP 构建。

## 本地运行

```powershell
npm.cmd install
npm.cmd run dev
```

打开：

```text
http://localhost:5173
```

## 构建发布文件

```powershell
npm.cmd run build
```

构建产物会输出到 `dist/`。

## 本地预览发布版

```powershell
npm.cmd run preview
```

打开：

```text
http://localhost:4173
```

## 重新部署建议

可以把本项目推到 GitHub，然后用 Vercel、Netlify、Cloudflare Pages 或 GitHub Pages 部署。

常见配置：

- Build command: `npm.cmd run build` 或 `npm run build`
- Output directory: `dist`
- Install command: `npm.cmd install` 或 `npm install`
