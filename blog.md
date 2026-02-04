---
layout: page
title: 博客
permalink: /blog/
---

<!-- AI Generated: blog index -->
这里是所有文章：

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>（{{ post.date | date: "%Y-%m-%d" }}）</small>
      {% if post.excerpt %}<div>{{ post.excerpt }}</div>{% endif %}
    </li>
  {% endfor %}
</ul>

