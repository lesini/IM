title: Textarea 计数
date: 2014-11-19 13:49
categories: javascript
tags:
      - javascript
      - 文本框计数
      - textarea字数控制
      - textarea字符计数
      - input计数
description: 全兼容版javascript字符计数textarea， javascript字符计数textarea，废话不多说直接上代码，亲测好使，兼容所有浏览器。

---

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>实时计算input字符数量</title>
</head>

<body>
    <input type="text" id="text" name="name" value="">
    <div  id="box">

    </div>
    <script type="text/javascript">
        window.onload = function() {
            var oT = document.getElementById('text');
            var textBox = document.getElementById('box');
            //参数 DOM 回调
             getLength(oT, function(len){
                 textBox.innerHTML = len;
             });

            function getLength(obj,fn){
                if (navigator.userAgent.indexOf("MSIE") != -1) {
                    if (navigator.userAgent.indexOf("MSIE 9.0") != -1) {
                        obj.onpropertychange = function() {
                            fn(currentLen(obj.value));
                        };
                    } else {
                        obj.onfocus = function() {
                            timer = setInterval(function() {
                                fn(currentLen(obj.value));
                            }, 30);
                        };
                        obj.onblur = function() {
                            clearInterval(timer);
                        };
                    }
                } else {
                    obj.oninput = function() {
                        fn(currentLen(obj.value));
                    };
                }
            }

            function currentLen(value) {
                return value.replace(/[\u4E00-\u9FA50]/g, '..').length;
            }
        };
    </script>
</body>

</html>

```
