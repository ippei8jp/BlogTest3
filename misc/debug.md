---
title: debug
date: 2019-07-07
tags: ["debug", "jekyll"]
layout: debug
show_banner: false
---
> [!NOTE]
> This is a NOTE

> [!WARNING]
> This is a WARNING

> [!ERROR]
> This is a ERROR

> [!TIP]
> This is a TIP

> [!IMPORTANT]
> This is IMPORTANT




# site変数
```
{{ site | inspect }}
```

# site.tags変数
```
{{ site.tags | inspect }}
```

# site.tags のキー 一覧
{% assign tag_keys = "" | split: "|" %}
{% for item in site.tags %}
  {% assign tag_keys = tag_keys | push: item[0] %}
{% endfor %}

```
{{ tag_keys  | inspect }}
```

<!-- {% comment %}  HTMLのコメントだけだとLiquidの処理は止まらないので、コメント中にでっかいデータが出力されてしまう
# site.posts 配列
```
  {{ site.posts[1] | inspect }}
```
# site.tags[0]変数

```
{{ site.tags["サンプル"] | inspect }}
```

# site.tags.keys変数

```
{{ site.tags.keys | inspect }}
```

# site.tags変数

```
{{ site.tags | inspect }}
```
# site.tags["サンプル"]変数

```
{{ site.tags["サンプル"] | inspect }}
```

# site.tags["サンプル"][0]変数

```
{{ site.tags["サンプル"][0] | inspect }}
```
# page.tags | array_to_sentence_string

```
{{ page.tags | array_to_sentence_string }}
```
{% endcomment %}-->
