---
layout: post
title: 2023-01-24-hugo建站并部署到Github Pages
subtitle :
author: jiaqi
date: 2023-01-27 10:37
updated: 2023-02-03 10:03
categories: 
tags:
---
```toc
```

### 最终呈现的效果
- 可以按标题搜索，不能全文搜索，网页端和手机端都可以，但是经常需要重点“搜”字，而且现在不会调搜索框位置等设置。
- 最大的优点是加载页面超快，电脑和手机端都几乎零延迟。
- 另一个优点是可以只上传public文件夹，不用上传整个网站的源码。

## 参考
腾讯云文章

[Hugo搭建博客（一）— 基本设置 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1722255#:~:text=1.1%20windows%E4%B8%8B%E5%AE%89%E8%A3%85%201%20%E4%B8%8B%E8%BD%BD%20Hugo%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6%20%2C%E4%B8%8B%E8%BD%BD%E4%B8%8B%E6%9D%A5%E5%90%8E%EF%BC%8C%E8%A7%A3%E5%8E%8B%EF%BC%8C%E5%B0%86%E8%A7%A3%E5%8E%8B%E5%90%8E%E7%9A%84%E6%96%87%E4%BB%B6%E5%A4%B9%E5%90%8D%E7%A7%B0%E5%92%8C%E6%96%87%E4%BB%B6%E5%A4%B9%E9%87%8C%E9%9D%A2%E7%9A%84.exe%E6%96%87%E4%BB%B6%E9%83%BD%E6%94%B9%E4%B8%BA%E5%90%8C%E4%B8%80%E4%B8%AA%E5%90%8D%E7%A7%B0%EF%BC%8C%E5%90%A6%E5%88%99hugo%E6%97%A0%E6%B3%95%E8%BF%90%E8%A1%8C%E3%80%82,2%20%E9%85%8D%E7%BD%AE%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%EF%BC%8C%E5%8F%B3%E5%87%BB%E8%AE%A1%E7%AE%97%E6%9C%BA-%E5%B1%9E%E6%80%A7-%E9%AB%98%E7%BA%A7%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE-%E9%AB%98%E7%BA%A7-%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F-%E7%B3%BB%E7%BB%9F%E5%8F%98%E9%87%8F%EF%BC%8C%E6%89%BE%E5%88%B0path%EF%BC%8C%E6%B7%BB%E5%8A%A0hugo%E8%B7%AF%E5%BE%84%E3%80%82%203%20%E5%9C%A8%E7%BB%88%E7%AB%AF%E8%BF%9B%E8%A1%8C%20hugo%20version%20%E8%BF%9B%E8%A1%8C%E9%AA%8C%E8%AF%81%E6%98%AF%E5%90%A6%E5%AE%89%E8%A3%85%E6%AD%A3%E7%A1%AE%E3%80%82)