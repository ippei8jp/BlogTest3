---
title: サンプル
date: 2019-06-22
tags: ["サンプル", "テスト"]
excerpt: ここには抜粋を書きます。
layout: default
---
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6

本文1  
改行後

本文2

ほげ(見出し1の別の書き方)
=======================

ふが(見出し2の別の書き方)
-----------------------


# 番号なしリスト
- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3

# 番号付きリスト
1. 番号付きリスト1
    1. 番号付きリスト1_1
    1. 番号付きリスト1_2
1. 番号付きリスト2
1. 番号付きリスト3

# 水平線
---

# 強調
通常 *emで強調* 通常  
通常 **strongで強調** 通常  
通常 ***em+strongで強調*** 通常  

通常 ~~取り消し線~~ 通常  

# 表
|項目1|項目2|項目3|
|:--|:--:|--:|
|align left|align center|align right|
|a|b|c|
|=|=|=|
|フッター1|フッター2|フッター3|

# ノートブロック
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

> Other
> This is other note

> Other
> This is other note
>> Other nested
>> This is other note2
>
>> [!TIP]
>> This is a TIP


# コードブロック

```python
# 言語指定あり
print("Hello world!")
```

```
# 言語指定なし
print("Hello world!")
```

```python
# 言語指定あり スクロールバーあり
print("Hello world!")
"""
12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
"""
```

# コメント
コメントの上
{::comment}
ここはコメントなので表示
されることはありません。
HTMLには出力されます。
{:/comment}
コメントの下

# 参照
[Markdown (kramdown) のリファレンス](http://mae0003.github.io/markdown/2015/06/21/kramdownRefference)

