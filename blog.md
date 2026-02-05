---
layout: page
title: Blog / 博客
permalink: /blog/
---

<!-- AI Generated: bilingual blog index (filtered by front matter lang) -->

<div class="i18n i18n-zh" lang="zh-Hans">
  这里是我的文章：

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

<div class="i18n i18n-en" lang="en">
  All posts:

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

