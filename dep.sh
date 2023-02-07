#!/usr/bin/env sh

# 运行生成docs
jekyll build

# 提交
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:bingjiaqi123/bingjiaqi123.github.io.git main:jekblog
