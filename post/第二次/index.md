
>
# 必要的条件


安装并配置git

安装并配置hugo

一个与Github账号同名的空仓库

一个用hugo建立的网站文件夹


# 托管的步骤

## 第一步 把hugo文件夹提交到Github

1.在主文件夹右键【用Git Bash打开】

2.输入`hugo server`，回车。

3.Ctrl+C，输入`cd public`。

或者在生成的public文件夹里重复1。

4.依次输入并回车

~~~
    {git init
    git remote add origin https://github.com/bingjiaqi123/bingjiaqi123.github.io.git
    git add -A
    git commit -m "1"
    git push -u origin master
    }
~~~

## 第二步  用Github生成网站链接

1.打开Github的同名仓库，可以点击链接https://github.com/bingjiaqi123/bingjiaqi123.github.io，
点击“添加自述文件”（RAEDME.md）

<font color=silver>经过尝试，没有这个文件开不了网站


2.打开Github的同名仓库的网页设置

两种方法

（1）点击链接https://github.com/bingjiaqi123/bingjiaqi123.github.io/settings/pages

（2）点击Settings（设置），点击左栏的Pages(页面)

2.点击Build and deployment（构建和部署），在Source（源）里选择Deploy from a branch（从分支部署），在Branch（分支）里选择main，/root，点击Save

3.

# 注意事项

仓库命名的时候用小写英文