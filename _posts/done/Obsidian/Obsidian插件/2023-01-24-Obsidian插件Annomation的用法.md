---
layout: post
title: 2023-01-24-Obsidian插件Annomation的用法
subtitle :
author: jiaqi
date: 2023-01-27 10:37
updated: 2023-02-03 10:03
categories: 
tags:
---
```toc
```

# 功能
- 可以设置折叠的卡片框
- 可以多行块一起引用（但是不能切开）
# 用法
## 基础用法
### 配置
在插件的设置里面打开`默认折叠`，默认折叠类型为`closed`是默认折叠，`open`是默认展开，和`添加复制按钮`，点添加，第一行我填了`note`，第二行填了`use`，别的默认就行，可以自选图标和颜色。
### 使用
在围栏之间第一行输入`ad-use`，从下一行起输入要显示的内容。
#### 参考
哔哩哔哩视频 [Obsidian 完全指南 - 插件Admonition_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Nq4y1X7Ka/?vd_source=8136950c9f4c52a778bfe698bf911c94)
## 进阶用法
### 行内引用
#### 如果没有设置默认折叠
在引用的时候第二行输入`collapse: close`（中间有空格）可以在引用的时候默认折叠，反之输入`collapse: open`（中间有空格）可以默认开启。
#### 如果设置了默认折叠
在引用的时候第二行输入==`collapse: none`==，就可以展开当前的代码框。


#### 嵌套
	1. 假设一共嵌套两层，但第二层里面还有一个代码框，要按三层算，从外到内依次是A、B、C。
	2. C层代码块直接前后各加3个反引号即可。
	3. B层前面加4个反引号，反引号之后紧跟着`ad-html`。
	4. A层的前后各5个反引号，反引号之后紧跟着`ad-use`。

## 实例

因为该语法不支持html形式，所以看一下效果图即可

预览时：

[](https://cdn.jsdelivr.net/gh/bingjiaqi123/blog/202301271545082.png)
```
```

点击展开后：
![](https://cdn.jsdelivr.net/gh/bingjiaqi123/blog/202301271546249.png)


源代码：

``````
`````ad-html
# 进阶
## 纵向合并单元格
### 代码
````ad-code
collapse: none
```
<table>
	<tr>
    <th>班级</th><th>课程</th>
	</tr>
	<tr>
    <td rowspan="3">1班</td><td>语文</td>
	</tr>
	<tr>
    <td>数学</td>
	</tr>
	<tr>
    <td>英语</td>
	 </tr>
</table>
```
````
### 效果
<table>
    <tr>
        <th>班级</th><th>课程</th>
    </tr>
    <tr>
        <td rowspan="3">1班</td><td>语文</td>
    </tr>
    <tr>
        <td>数学</td>
    </tr>
    <tr>
        <td>英语</td>
    </tr>
</table>
`````
``````



##### 参考
知乎文章 [Obsidian 插件之 Admonition - 知乎](https://zhuanlan.zhihu.com/p/391252867)
# 下载来源
Github [Releases · valentine195/obsidian-admonition](https://github.com/valentine195/obsidian-admonition/releases)

