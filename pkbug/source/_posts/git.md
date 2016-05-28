title: git 笔记
date: 2015-10-10 10:35
tags:
    - git
    - javascript
    - node
    - jquery
    - git教程
    - Git
    - 版本管理
    - 项目管理
    - subversion
categories: git
description: 常用git命令
---


###### 创建目录
```
mkdir [fileName]
```

###### 查看当前文件目录
```
pwd
```

###### 把当前目录变成git目录
```
git init
```
###### 新建分支
```
git branch [branch name]
```
###### 切换分支
```
git checkout [branch name]
```

###### 合并两个命令-创建分支并切换到新分支
```
git checkout -b [new branchName]
```
###### 查看commit（log），查看最近几条 更详细的log 分别是
```
git log
git log -p -3(-3代表查看几次记录)
```
###### 回滚版本(强制回滚)
```
git reset --hard [commit version]
```
###### 查看历史版本号 版本号可以是前边几位不能太少
```
git reflog

07ebabc HEAD@{0}: reset: moving to 07ebabc
e45330f HEAD@{1}: reset: moving to e45330f02b1d270cd3ae4753469998f583036b7c
07ebabc HEAD@{2}: commit: test3
e45330f HEAD@{3}: checkout: moving from o2o_banner01 to test
ef43c0b HEAD@{4}: checkout: moving from test to o2o_banner01
e45330f HEAD@{5}: checkout: moving from o2o_banner01 to test
ef43c0b HEAD@{6}: commit: 添加rem.js
63092e8 HEAD@{7}: commit: 首单五折优惠券页面完稿

```
###### 多人合作push之前先commit 以防有冲突。
```
git add . (添加全部文件到仓库)
git commit -m 'message'（快照）
```

待续...
