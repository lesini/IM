title: opacity兼容
date: 2014-11-10 10:35
tags:
    - css
    - 文字透明
    - 透明全兼容
    - 文字不透明
    - opacity
    - 有名方法
categories: opacity
keywords: css,透明,全兼容透明
description: css全兼容透明方法，背景透明文字不透明
---
```

.box{
   width:740px;
   height:560px;
   background: rgba(0, 0, 0, 0.95);
   //#4c000000   f2 就是下边console的结果
   filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#f2000000', EndColorStr='#f2000000');
}

:root .box {
   filter: none;
}

//0.95 就是透明度
console.log(Math.floor(0.95 * 255).toString(16));
```
