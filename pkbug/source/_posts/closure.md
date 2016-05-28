title: js闭包
date: 2014-05-25 15:53:31
tags:
    - 闭包
    - javascript
categories: javascript 闭包
description: 闭包（closure）是Javascript语言的一个特色，下面我来絮叨絮叨。
---
##### 闭包特性
```
函数嵌套函数
函数内部可以引用外部的参数和变量
参数和变量不会被垃圾回收机制回收
```
##### 闭包的作用

具体作用是有权访问函数内部的变量，最常见的就是函数内部创建另一个函数，通过另一个函数访问这个函数的局部的变量。
缺点：就是常驻内存，会增大内存的使用量，使用不当会造成内存泄露。
一般函数执行完毕，局部活动对象就会被销毁，内存中仅仅保存全局作用域，但是闭包会长期驻扎在内存。

##### js垃圾回收

在javascript中，如果一个对象不再被引用，那么这个对象就会被GC回收；（Garbage Collection），计算机科学中一种自动释放不再被使用的内存空间的机制。
如果两个对象互相引用，而不再被第3者所引用，那么这两个互相引用的对象也会被回收。

##### 全局变量 count++ 累加
```
var count = 0;
function testCount(){
    count++;
    console.log(count);
}

testCount();//result 1
testCount();//result 2
```
##### 局部变量++ 不累加
```
function testCount(){
    var count=0;
    count++;
    console.log(count);
}
testCount();//result 1
testCount();//result 1

//到这里会问玩毛线呢 这个我们懂 I know。 我只是想通过这两个例子来说明闭包的用处和好处。
```
##### 局部变量count++累加
```
function testCount(){
    var count=0;
    return function(){
        count++;
        console.log(count);
    }
}
var plus = testCount();  //函数赋值给变量
plus();        //plus函数调用一次，结果为1，相当于testCount()();
plus();        //plus调用第二次，结果为2，实现了局部变量累加了。

//闭包会使变量始终保存在内存中，如果不当使用会增大内存消耗。
```
