---
layout: page
title: Blog
title_zh: 博客
title_en: Blog
permalink: /blog/
---

<!-- AI Generated: bilingual blog index (filtered by front matter lang) -->

{% assign posts_count = site.posts | size %}

<div class="content-zh" lang="zh-Hans">
  这里是我的文章（共 {{ posts_count }} 篇）：

  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>（{{ post.date | date: "%Y-%m-%d" }}）</small>
        {% if post.excerpt %}<div>{{ post.excerpt }}</div>{% endif %}
      </li>
    {% endfor %}
  </ul>
</div>

<div class="content-en" lang="en">
  All posts (total {{ posts_count }}):

  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>({{ post.date | date: "%Y-%m-%d" }})</small>
        {% if post.excerpt %}<div>{{ post.excerpt }}</div>{% endif %}
      </li>
    {% endfor %}
  </ul>
</div>

