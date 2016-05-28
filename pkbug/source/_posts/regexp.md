title: 正则表达式-regexp
date: 2014-12-22 15:13:19
tags:
    - 正则
    - javascript
    - 文本匹配
    - replace
    - test
    - match
    - exec
    - 正则表达式
    - js正则表达式
categories: RegExp
description: 在JavaScript中，正则表达式也是对象。这种模式可以被用于 RegExp 的 exec 和 test 方法以及 String 的 match、replace、search 和 split 方法。
---
##### 创建正则表达式

###### 第一种使用正则表达式字面量。
```
//example
var re = /a/igm; //i 不区分大小写 g全局匹配 m多行
```
###### 第二种调用RegExp构造函数。
调用RegExp对象的方法，参数只支持字符串。在ES6版本开始支持字面量和变量当参数。
```
//example
var re  = new RegExp('a','igm');
```

##### 正则表达式的元字符

常见的元字符
```
^	//匹配字符串的开始
$	//匹配字符串的结束
.	//匹配除换行符以外的任意字符
\w	//匹配字母或数字或下划线或汉字
\s	//匹配任意的空白符
\d	//匹配数字
\b	//匹配单词的开始或结束
```

###### '^' 匹配开始位置。
匹配字符开始位置
```
//匹配字符串的开始
/^a/.test('ba');
false
/^a/.test('ab');
true
//例如相匹配以数字开始数字字母或下划线结尾的字符串。
/^\d+\w+/.test('98273918jdsdhkajsd')
true
/\d+\w+/.test('98273918jdsdhkajsd')
true
//如果没有加^，就会匹配不准确。
/\d+\w+/.test('ldksjaksjd98273918jdsdhkajsd')
true
```
如果多行标示被设置为true,同时匹配换行后紧跟的字符。
```
//example
var str = "first second\nthird fourth\nfifth sixth";
var patt = /^(\w+)/gm;
console.log(str.match(patt));
["first", "third", "fifth"]
```
字符出现在一个字符集合模式的第一个字符的时候. 表示匹配非字符集合里边的字符。
```
//example
/[^abc]/.test('abc');
false
/[^abc]/.test('c');
false
/[^abc]/.test('kjhkjh');
true
```
###### '$' 匹配字符串结尾位置
```
//example
/a$/.test('abc');
false
/a$/.test('abca');
true
//同匹配开始字符一样 添加一个限制。
```

###### '/^xxx$/' 准确匹配 例如校验手机号 邮箱 身份证号 密码格式 ...
```
//example
//只匹配字符串'a'
/^a$/.test('a');
true
/^a$/.test('aa');
false
//只匹配字符串'5-11位的数字 例如QQ'
/^\d{5,11}$/.test('123');
false
/^\d{5,11}$/.test('1237657');
//如果不加会出现以下匹配不准确，正则只要匹配到符合规则的就会返回true
/\d{5,11}/.test('aaaa1237657');
true
/\d{5,11}/.test('aaaa1237657lll');
true
```

###### '\w' 匹配字母或数字或下划线或汉字
```
//example
/\w+/.test('987987hbdkjahsiuyo979')
true
/\w+/.test('987987')
true
/\w+/.test('kjhkhkhj')
true
/\w+/.test('kj1312_')
true
/\w+/.test('kj1312_你好')
true

//需要注意的是 匹配密码或者邮箱... 的时候不要直接用\w 因为出现中文也会匹配成功。 最好写[a-zA-Z]\d_。
```

##### '\' 转义符
/b/匹配字符串b，/\b/ 反斜杠通常在正则里边是转义，把字符转移成特殊意义的字符。意思是匹配一个字符边界。 比如：/\bs/ 其实就是匹配字符串是以空格s' s'开始的字符串。
```
//example
var re = /\ba/;
undefined
re.test('ba');
false
re.test('ab');
true
```
###### '*' 特殊字符转义为普通字符
相反\ 也会把特殊字符转移成普通字符串 例如：* 代表着前一项匹配0次或者多次的特殊字符，/a*/ 匹配最少一个a或者多个连续'aaa'，而a/\*就只能匹配字符串a*
```
//example
var re = /a*/;
re.test('a');
true
re.test('aa');
true
re.test('aaaaaaaaa');
true
var re = /a\*/;
re.test('a');
false
re.test('a*');
true
```
###### '\' 本身用在字符串里边是也需要转义
例如：你相匹配字符串'a\b'
```
//example
/a\\/.test('a\\');
true
/a\\/.test('ab\\');
false
**'ab\\' // 字符串本身的反斜杠也是需要转义的。**
```
##### 重复

###### *	重复零次或更多次
```
//example
/a*/.test('aaaa')
true
/a*/.test('')
true
/a*/.test('a')
true
```
###### +	重复一次或更多次
```
//example
/a*/.test('aaaa')
true
/a*/.test('')
false
/a*/.test('a')
true
```
###### ?	重复零次或一次
```
//example
/a*/.test('aaaa')
false
/a*/.test('')
true
/a*/.test('a')
true
```
###### {n}	重复n次
```
//example
/a{1}/.test('a')
true
/a{2}/.test('a')
false
/a{5}/.test('aaaaa')
true
```
###### {n,}	重复n次或更多次
```
//example
/^a{1,}$/.test('aaaaaa')
true
/^a{1,}$/.test('a')
true
/^a{2,}$/.test('a')
false
```
###### {n,m}	重复n到m次
```
//example
/^a{1,5}$/.test('aaaaaaa')
false
/^a{1,5}$/.test('')
false
/^a{1,5}$/.test('aa')
true
/^a{1,5}$/.test('aaaaa')
true
/^a{1,5}$/.test('aaaaaa')
false
```
##### 反义
###### \W	匹配任意不是字母，数字，下划线，汉字的字符
```
//example
/\W/.test('@')
true
/\W/.test('1')
false
/\W/.test('a')
false
/\W/.test('！')
true
/\W/.test('hjdgsjahg!!!')
true
/^\W$/.test('hjdgsjahg!!!')
false
```

###### \S	匹配任意不是空白符的字符
```
//example
/\S/.test('')
false
/\S/.test('1')
true
/\S/.test('jsdhaj12121!@#')
true
```
###### \D	匹配任意非数字的字符
```
//example
/^\D$/.test('q')
true
/^\D$/.test('qkjshdj')
false
/^\D+$/.test('qkjshdj')
true
/^\D+$/.test('1')
false
/^\D+$/.test('13423')
false
/^\D$/.test('13423')
false
```
###### \B	匹配不是单词开头或结束的位置
```
//example
/\B/.test('1jkdsh')
true
/\B$/.test('1jkdsh')
false
/^\B/.test('1jkdsh')
false
/^\B/.test(' 1jkdsh')
true
```
###### [^x]	匹配除了x以外的任意字符
```
//example
/[^a]/.test('a')
false
/[^a]/.test('b')
true
/[^a]/.test('bs')
true
/[^a]/.test('bsdsjkhd')
true
```
//example
###### [^aeiou]	匹配除了aeiou这几个字母以外的任意字符
```
/[^aeiou]/.test('bsdsjkhd')
true
/[^aeiou]/.test('bsdsjkhdi')
true
/[^aeiou]/.test('a')
false
/[^aeiou]/.test('aeiou')
false
/[^aeiou]/.test('akjdhk')
true
/[^aeiou]/.test('u')
false
/[^aeiou]/.test('us')
true
```
#####  替换 和 '|'
不知道为什么叫替换 我感觉就是用'或'来匹配的

例如匹配 电话号码（座机）'规则前边3位区号后边八位数字|前边四位数字区号后边7位数字  *前边区号首数字为0* *后边数字第一位不为零*',正则表达式里的替换指的是有几种规则，如果满足其中任意一种规则都应该当成匹配，具体方法是用|把不同的规则分隔开。

```
//example
例如规则：(010)87654321 010-87654321 0311-8765432 (0311)8765432
//匹配前三位区号后8位区号
/0\d{2}-[1-9]{1}\d{7}/.test('010-85697103')
true
//匹配区号三位或者四位的电话
/0\d{2}-[1-9]{1}\d{7}|0\d{3}-[1-9]{1}\d{6}/.test('010-85697103')
true
//匹配区号三位或者四位或者被小括号括起来的的，后边是7位或者8位的电话号码
/\(0\d{2}\)[1-9]{1}\d{7}|\(0\d{3}\)[1-9]{1}\d{6}|0\d{2}-[1-9]{1}\d{7}|0\d{3}-[1-9]{1}\d{6}/.test('0311-8569710')
true
/\(0\d{2}\)[1-9]{1}\d{7}|\(0\d{3}\)[1-9]{1}\d{6}|0\d{2}-[1-9]{1}\d{7}|0\d{3}-[1-9]{1}\d{6}/.test('(0311)8765432')
true
/\(0\d{2}\)[1-9]{1}\d{7}|\(0\d{3}\)[1-9]{1}\d{6}|0\d{2}-[1-9]{1}\d{7}|0\d{3}-[1-9]{1}\d{6}/.test('0311-8765432')
true
/\(0\d{2}\)[1-9]{1}\d{7}|\(0\d{3}\)[1-9]{1}\d{6}|0\d{2}-[1-9]{1}\d{7}|0\d{3}-[1-9]{1}\d{6}/.test('031-87654321')
true
//注：以下是为什么呢？？ 因为没有开始结尾符。正则表达式匹配的时候 匹配到合适的就会返回true 所以在校验时最好加上开始结尾符。
/\(0\d{2}\)[1-9]{1}\d{7}|\(0\d{3}\)[1-9]{1}\d{6}|0\d{2}-[1-9]{1}\d{7}|0\d{3}-[1-9]{1}\d{6}/.test('031-87654321比较好开奖号')
true
//正确的写法
/^\(0\d{2}\)[1-9]{1}\d{7}$|^\(0\d{3}\)[1-9]{1}\d{6}$|^0\d{2}-[1-9]{1}\d{7}$|^0\d{3}-[1-9]{1}\d{6}$/.test('031-87654321比较好开奖号')
false
/^\(0\d{2}\)[1-9]{1}\d{7}$|^\(0\d{3}\)[1-9]{1}\d{6}$|^0\d{2}-[1-9]{1}\d{7}$|^0\d{3}-[1-9]{1}\d{6}$/.test('031-87654321')
true
/^\(0\d{2}\)[1-9]{1}\d{7}$|^\(0\d{3}\)[1-9]{1}\d{6}$|^0\d{2}-[1-9]{1}\d{7}$|^0\d{3}-[1-9]{1}\d{6}$/.test('0311-8765431')
true
```

##### 分组
上边介绍了单个字符重复匹配 a* 类似这个。重复一个字符串又该怎么办？当！当！当！看这里！ 你可以用小括号来指定子表达式(也叫做分组)，然后你就可以指定这个子表达式的重复次数了，你也可以对子表达式进行其它一些操作

//ip地址匹配 *规则四组数字每组1-3个数字 每一组数字用.隔开 每组数字不能大于255*
```
//example
/^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test('1.3.4.5')
true
/^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test('134.345.4.5')
false
/^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test('134.245.254.125')
true
/^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test('234.456.678.789')
false
```
(2[0-4]\d|25[0-5]|[01]?\d\d?) 重要的是看明白这个正则， 2[0-4]\d 第一位2开始第二位0-4第三位\d 25[0-5] 如果前两位是25第三位0-5 才能保证不会大于255 [01]?\d\d? 如果第一位0或者1可有可无 第二位\d 第三位\d可有可无
再没看明白给我十块钱我再给你唠一遍  重申一遍别忘了写^$

##### 反向引用
反向引用的作用通常是用来查找或限定重复、查找或限定指定标识配对出现等等。 *反向引用必须要和捕获组一同使用*

###### 反向引用“\1”的限制，要求必须是两个相同的字符

example：
```
//example
var str = 'aabb';
str.match(/([ab])\1/)
["aa", "a"]
var str = 'bbaa';
str.match(/([ab])\1/)
["bb", "b"]
```
###### \1{x} *{x}* 匹配的个数是x+1;
```
var str = 'bbaa';
str.match(/([ab])\1{2}/)
null
var str = 'bbaaa';
str.match(/([ab])\1{2}/)
["aaa", "a"]
var str = 'bbbaaa';
str.match(/([ab])\1{2}/)
["bbb", "b"]
```

###### 复杂一点的

```
'aa'.match(/(\w)((?=\1\1\1)(\1))+/)
null
'aaaa'.match(/(\w)((?=\1\1\1)(\1))+/)
["aa", "a", "a", "a"]
'aaa'.match(/(\w)((?=\1\1\1)(\1))+/)
null
'aaa'.match(/(\w)((?=\1\1)(\1))+/)
["aa", "a", "a", "a"]
'aaa'.match(/(\w)((?=\1)(\1))+/)
["aaa", "a", "a", "a"]
'aaa'.match(/(\w)((?=\1)(\1))/)
["aa", "a", "a", "a"]
```

###### 千分符
```
'100000000'.replace(/\B(?=(\d{3})+$)/g,',');
"100,000,000"
```
\B 匹配不是开始或者结尾的位置
?=exp 匹配 exp前面的位置

```
//再来一个例子
'http://www.pkbug.com/jpg/kjdskddlk/img.jpg'.replace(/(jpg(?=(\/|\b)))+/g,'png');
"http://www.pkbug.com/png/kjdskddlk/img.png"

'http://www.pkbug.com/jpg/kjdskddlk/img.jpg'.replace(/(\w{1}(?=(\/|\b)))+/g,'png');
"httpng://wwpng.pkbupng.copng/jppng/kjdskddlpng/impng.jppng"
//就是前边写要匹配的规则 类似jpg  \w 后边（？= exp  exp就是jpg或者\w后边有什么 例如有/  通过/ 来找jpg）
```
###### （?:exp） 分组不捕获

```
/industr(?:y|ies)/.test('industries')
true
'aaa'.match(/(?:\w)\1/)
null
```

###### 其他 ？...

```
俩字'前端不支持'
(?<=exp)	匹配exp后面的位置
(?<!exp)	匹配前面不是exp的位置
注释	(?#comment)
```


##### 贪婪与懒惰
最后聊一下正则的贪婪和懒惰。

```
###### 贪婪

*	重复零次或更多次
+	重复一次或更多次

//当正则表达式包含重复的限定符时，会尽可能多的去匹配。
'aakjhjkakjhaaahkjahkajha'.match(/a.*a/);
["aakjhjkakjhaaahkjahkajha"]  //匹配结果 是尽可能的多匹配 这种通常我们说是贪婪匹配
```
###### 懒惰

有时候我们需要匹配尽量少的字符 我们就聊一下懒惰 贼简单。
```
'aakjhjkakjhaaahkjahkajha'.match(/a.*?a/);
["aa"]
'aakjhjkakjhaaahkjahkajha'.match(/a.*?/);
["a"]

//很明显在重复限定符后边加一个？ 匹配零次或者一次 这样就会变成尽量少的匹配。
```
聊到现在正则也聊差不多了。当然这只是我了解的一丢丢东西 如有其它正则需求请留言。一块学习学习。我有什么新学到的东西也会及时更新上来 谢谢关注！
