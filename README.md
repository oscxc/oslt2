![](logo.png)

#  2d平移动画模块第二种设计（基于监听变量）

**实现原因**:

  &emsp;在写视频播放项目的时候遇到过需要一个监听video.currentTime的平移动画

**优点**:

  &emsp;1、易用、轻量

  &emsp;2、可以运行、停止

  &emsp;3、面向对象，支持多实例

  &emsp;4、完美设计

**缺点**:

  &emsp;不存在的，因为它是完美的

## 获取和引用 oslt2

**简单粗暴方式（必须首先提供的方式）**

  [`下载最新版本`](https://github.com/oscxc/oslt2/releases) && 使用标签引用

```
<script src="oslt2.js"></script>
```

**npm + CommonJS 方式**

```
npm install oslt2
```

```
var oslt2 = require('oslt2');
```

## Usage examples

```
var lt2 = new oslt2(element,[100,100],[400,400],video,'currentTime',1,5)

lt2.run(function(val,p){
    console.log(val,p)
});
//lt2.stop();
```

## 查看演示
[`demo`](https://oscxc.github.io/oslt2/)


## 联系我们

如有问题，欢迎加入下面QQ群

![](https://oscxc.github.io/Images/doc/contact.jpg)
