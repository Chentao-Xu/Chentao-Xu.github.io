# ChentaoXu — Academic Homepage

A lightweight, responsive academic homepage hosted with GitHub Pages.

## Local preview

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 个人照片

把照片存为 `assets/portrait.jpg`，然后将 index.html 中的
`assets/portrait.svg` 改为 `assets/portrait.jpg`，
并将 alt 改为 `Chentao Xu`。建议使用竖幅照片，显示比例为 9:11。
当前 SVG 只是占位，不是真实个人照片。

## 摄影作品

图片按年份和作品文件夹存放，例如：

```text
assets/photograph/2026/shenzhen/01.jpg
assets/photograph/2026/shenzhen/02.jpg
```

编辑 photograph/albums.js，将数组填为如下结构。示例标题仅用于说明，
请替换为真实作品信息并确保图片存在：

```javascript
window.photoAlbums = [
  {
    id: "shenzhen-2026",
    year: 2026,
    title: "深圳街头",
    location: "Shenzhen",
    description: "",
    photos: [
      { src: "../assets/photograph/2026/shenzhen/01.jpg", alt: "描述第一张照片的画面", caption: "" },
      { src: "../assets/photograph/2026/shenzhen/02.jpg", alt: "描述第二张照片的画面", caption: "" }
    ]
  }
];
```

每个作品使用唯一 id；作品年份自动倒序排列，同年作品按数组顺序显示。
组图按 photos 数组顺序显示，第一张作为封面，也可设置 cover 字段。
组图完整保留原始宽高比，列表封面统一裁切。点击作品进入独立可分享的组图网址。
建议上传压缩后的 JPG/WebP（长边约 2000px），避免直接上传相机原片。

## 后续内容

研究方向、导师或实验室、项目与论文待本人提供后补充。
硕士毕业时间为预计时间。网站无需构建步骤，GitHub Pages 从 main 根目录发布。
