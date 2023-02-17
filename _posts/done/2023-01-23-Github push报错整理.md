---
layout: post
title: 2023-01-23-Github push报错整理
subtitle :
author: jiaqi
date: 2023-01-28 17:59
updated: 2023-02-03 10:03
categories: 
tags:
---
```toc
```


# `Failed to connect to github.com port 443: Timed out`

连一下外网即可

# `fatal: remote origin already exists.`

## 参考
腾讯云文章

[fatal: remote origin already exists. (远程来源已经存在 解决办法) - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1880265)

# `github Repository not found`

首先检查，多半是仓库名输错了。检查的方式：


```
git remote -v
```


如果没错，执行


```
git credential-manager uninstall
git credential-manager install
```

## 参考
[1]博客园

[github Repository not found 解决办法 - 念宇儿 - 博客园](https://www.cnblogs.com/zqyw/p/10988018.html)

[2]CSDN博客

[git命令报错fatal: repository 'xxx.git/' not found_Jack.dev的博客-CSDN博客_fatal: repository](https://blog.csdn.net/u010289343/article/details/88827943)