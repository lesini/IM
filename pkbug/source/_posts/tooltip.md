title: css 提示框
date: 2013-8-8 14:15
tags:
      - css
      - before
      - after
      - css3
      - javascript
      - web
      - css
      - html
      - html5
      - css3
      - web前端开发
      - 分享
description: css 制作提示框 after和before制作提示框效果 提示框
---

<center>
![效果图](/images/psb.jpg)
</center>

```
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>after和before制作提示框（2013.08.08）</title>
</head>
<style>
    html,
    body,
    div {
        padding: 0px;
        margin: 0px;
    }

    .ts,
    .ts_right,
    .ts_bottom,
    .ts_left {
        border: 4px solid #CCC;
        position: relative;
        /*相对位置，目地是｛使after和bofore绝对位置原点位置处于ts盒子｝*/
        margin: 50px;
        background: #09f;
        line-height: 50px;
        padding: 0px 20px 0px 20px;
        font-size: 20px;
        font-weight: 900;
        display: inline-block;
        color: #FFF;
        font-family: "幼圆";
    }

    .ts:after,
    .ts:before,
    .ts_right:after,
    .ts_right:before,
    .ts_bottom:after,
    .ts_bottom:before,
    .ts_left:after,
    .ts_left:before {
        position: absolute;
        /*相对于ts盒子定位*/
        border: 10px solid transparent;
        content: " ";
    }
    /*上*/

    .ts:after,
    .ts:before {
        left: 50%;
        bottom: 100%;
    }

    .ts:after {
        border-bottom-color: #09f;
        border-width: 10px;
        margin-left: -10px;
    }

    .ts:before {
        border-bottom-color: #ccc;
        border-width: 16px;
        margin-left: -16px;
    }
    /*右*/

    .ts_right:after,
    .ts_right:before {
        left: 100%;
        top: 50%;
    }

    .ts_right:after {
        border-left-color: #09f;
        border-width: 10px;
        margin-top: -10px;
    }

    .ts_right:before {
        border-left-color: #ccc;
        border-width: 16px;
        margin-top: -16px;
    }
    /*下*/

    .ts_bottom:after,
    .ts_bottom:before {
        left: 50%;
        top: 100%;
    }

    .ts_bottom:after {
        border-top-color: #09f;
        border-width: 10px;
        margin-left: -10px;
    }

    .ts_bottom:before {
        border-top-color: #ccc;
        border-width: 16px;
        margin-left: -16px;
    }
    /*左*/

    .ts_left:after,
    .ts_left:before {
        right: 100%;
        top: 50%;
    }

    .ts_left:after {
        border-right-color: #09f;
        border-width: 10px;
        margin-top: -10px;
    }

    .ts_left:before {
        border-right-color: #ccc;
        border-width: 16px;
        margin-top: -16px;
    }
</style>

<body>
    <div class="ts">提示框</div>
    <div class="ts_right">提示框(右)还是自适应的！
        <p>来了</p>
    </div>
    <div class="ts_bottom">提示框（下）</div>
    <div class="ts_left">提示框（左）</div>
</body>

</html>
```
