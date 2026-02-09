## 个人主页 + 博客（GitHub Pages / Jekyll）

本项目是一个可直接部署到 GitHub Pages 的 **个人主页 + 博客** 模板（Jekyll + minima 主题）。

> 说明：本仓库里的模板内容包含 `AI Generated` 标记，便于后续你替换成自己的内容。

### 目录结构

```text
.
├─ _config.yml              # 站点配置
├─ index.md                 # 首页
├─ blog.md                  # 博客列表页
├─ about.md                 # 关于页
├─ 404.md
├─ _posts/                  # 博文目录（文件名必须 YYYY-MM-DD-title.md）
├─ assets/img/posts/        # 图片（按 post 的 ref 分目录管理）
├─ assets/main.scss         # 样式入口（GitHub Pages 会自动编译）
└─ _sass/custom.scss        # 自定义样式
```

### 部署方式 A（推荐）：用户主页仓库

1. 在 GitHub 新建仓库：`<你的用户名>.github.io`
2. 把本目录下所有文件推到该仓库的 `main` 分支根目录
3. 打开仓库：**Settings → Pages**
4. **Build and deployment**
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/ (root)`
5. 等 1–3 分钟，访问：`https://<你的用户名>.github.io/`

### 部署方式 B：项目主页（`/<repo>/`）

如果你的仓库叫 `my-blog`，访问路径是 `https://<username>.github.io/my-blog/`，你需要：

1. 在 `_config.yml` 把：
   - `baseurl` 改成 `"/my-blog"`
   - `url` 改成 `"https://<username>.github.io"`
2. GitHub Pages 选择从 `main` 分支部署（同上）

### 写博客

在 `_posts/` 新建 Markdown 文件，文件名格式：

`YYYY-MM-DD-title.md`

示例：`2026-02-04-hello-world.md`

你可以在文章的 front matter 里添加 `order` 来控制在 `blog` 列表页的展示顺序：

```yml
order: 0 # 数字越大越靠前（优先级高于时间）
```

如果 `order` 相同（尽量避免），则按 `date` 从新到旧排序；未设置 `order` 的文章也默认按时间排序。

### 图片管理（推荐：按文章 `ref` 分目录）

为了简化管理（尤其是**文章增删**时的图片清理），约定：

- **ref 必须唯一且稳定**：每篇文章 front matter 里都有 `ref:`，建议用短英文/slug（只含小写字母、数字、`-`），例如：

```yml
ref: how-this-site-is-built
```

- **图片目录固定**：把该文章用到的图片全部放到：
  - `assets/img/posts/<ref>/`

示例：

```text
assets/img/posts/how-this-site-is-built/arch.png
assets/img/posts/how-this-site-is-built/demo-1.webp
```

- **引用方式（兼容 baseurl）**：在 Markdown 里用 `relative_url`，避免从“用户主页站点”切换到“项目站点（带 /repo/）”时图片挂掉：

```md
![图注]({{ "/assets/img/posts/" | append: page.ref | append: "/arch.png" | relative_url }})
```

- **删除文章时怎么处理**：
  - 删除 `_posts/...md` 的同时，**一起删除** `assets/img/posts/<ref>/` 这个文件夹即可（不会误删其它文章图片，也不会留下“孤儿图片”）。

### 自定义导航

导航由 `_config.yml` 的 `header_pages` 决定：

```yml
header_pages:
  - index.md
  - blog.md
  - about.md
```

### 本地预览（可选）

如果你电脑已经装好了 Ruby + Jekyll，可以在仓库根目录运行：

```bash
jekyll serve
```

没有 Ruby 环境也没关系：直接推到 GitHub Pages 也能构建与发布。

