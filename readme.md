<center>  ![](https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-img/d7/96/d796cb71ec89bcd8b010c45c35034d3fe4772e21.png) </center>

## 👀 前言
文档：[Artitalk.js](https://artitalk.js.org/)

Github：[Artitalk.js](https://github.com/Drew233/Artitalk)

详细教程参考：[为你的hexo博客添加动态的（可直接发布说说的）说说页面](https://cndrew.cn/2020/04/10/hexo-shuoshuo/)

视频教程：[Hexo-shuoshuo bilibili](https://www.bilibili.com/video/BV16A411b7UF)

![](https://img.shields.io/github/stars/Drew233/Artitalk)
![](https://img.shields.io/npm/dm/artitalk.svg)
![](https://img.shields.io/npm/v/artitalk.svg)
![](https://img.shields.io/badge/language-JavaScript-red)

因为项目初期版本更新较为频繁，所以教程仅作参考，请仔细阅读使用文档，以此为准。

### 特性
* 实时发布
* 支持markdown语法
* 支持剪切板图片直接上传
* 方便引用


如果你对本项目感兴趣并且有心一起完善功能的，欢迎~


### 👭 可爱的小伙伴写出可爱的介绍教程
#### 🐷 显然比我写的清晰的多

<strong>cungudafa：[https://cungudafa.top/post/96c.html](https://cungudafa.top/post/96c.html)</strong>

## 🚀 开始使用

### 🌈 leancloud的相关准备

:::  tip 🌍 使用国际版的leancloud
因为leancloud的国内节点需要接入备案域名作为安全域名。明显违背了适用性强的理念。所以本文档只针对国际版的leancloud进行说明。如果你有其他需要，可以根据自己的需要修改js。
:::

1. 前往[leancloud国际版](https://leancloud.app/)，注册账号。
2. 注册完成之后根据leancloud的提示绑定手机号和邮箱。
3. 绑定完成之后点击`创建应用`，应用名称随意，接着在`结构化数据`中创建`class`，命名为`shuoshuo`。
4. 在你新建的应用中找到`结构化数据`下的`用户`。点击`添加用户`，输入想用的用户名及密码。
5. 回到`结构化数据`中，点击`class`下的`shuoshuo`。找到权限，在`Class 访问权限`中将`add_fields`以及`create`权限设置为指定用户，输入你刚才输入的用户名会自动匹配。为了安全起见，将`delete`和`update`也设置为跟它们一样的权限。
6. 在最菜单栏中找到设置->应用keys，记下来`AppID`和`AppKey`，一会会用。
7. 最后将`_User`中的权限全部调为指定用户，或者数据创建者，为了保证不被篡改用户数据已达到强制发布说说。
::: danger ❗ 关于设置权限的这几步
这几步一定要设置好，才可以保证不被“闲人”破解发布说说的验证
:::

### 🌼 HTML片段

::: warning 🐷 一个不足
由于leancloud的限制，本功能暂时无法跟valine在同一个页面使用。若想使用本功能，请在页面中关闭valine。
关于评论的功能，以后慢慢实现解决办法
:::

```html
<head>
  ...
  <script src="https://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
  ...
</head>
<body>
    <script>
    var img="";
    var appID="";
    var appKEY="";
    var per="";
    var username="";
    </script>
    <div id="lazy"></div>
    <div id="artitalk"></div>
    <script type="text/javascript" src="https://unpkg.com/artitalk"></script>
</body>
```

### 🎅 配置项的说明

必要性为False的配置项可以不添加

<center>

| 变量名       | 作用          | 必要性  | 默认值 | 
| ------------- |:-------------:| -----:| -----:| 
| img      | 说说旁边显示的头像 | True | 无 | 
| appID      | Leancloud中的应用ID     | True | 无 | 
| appKEY | Leancloud中的应用KEY    | True | 无 | 
| per | 每页显示说说的数量      | True | 无 | 
| username | Leancloud中设置的用户名     | True | 无 | 
| placeholder1 | 在编辑说说的输入框中的占位符     | False | ""（空） | 
| placeholder2 | 输入密码的输入框的占位符     | False | "请输入密码" | 
| placeholder3 | 输入头像url的输入框的占位符     | False | ""（默认头像） | 
| lazy | 是否开启加载动画（1：开启  0：关闭）     | False | 1（默认开启） | 
| bgimg | 说说输入框背景图片（需为图片格式）     | False | ""（空） | 

在头像url中输入图片链接会在本次发布的说说中覆盖默认头像

</center>

### 🔨 测试
如果上面的配置没有问题，打开你的页面，在身份验证的输入框中填入Leancloud设置的用户密码。点两次`biu`,即可成功发布说说。（这里有一个bug，有的小伙伴点击一次就行了。根据自己情况灵活应对一下吧

### 🔨 说说内容的修改与删除
在leancloud中找到自己添加的名为`shuoshuo`的class，在里面的`content`中编辑即可。

## 🔨 已发现的Bug
* [x] 发表说说得时候，第一次会失败，即使你的密码正确。但并无任何提示，js判断逻辑也无问题，就是没有存储到leancloud，页面重新加载之后 恢复正常 。算是~解决~了吧。提交成功后会刷新界面。
* [x] 不支持`<a>`标签，于`1.2.1`版本已修复。
* [x] Hexo可能会通过自带的渲染插件将`"`渲染成`“`导致js所需的参数出错。解决办法是在hexo根目录下的`_config.yml`文件中添加以下语句
```
kramed:
  smartypants: false
```
* [x] 某些Hexo主题可能会对图片的链接进行处理。比如说将图片链接渲染出来的时候添加上`a`标签，导致所需参数赋值异常。目前想到的办法由两种
一：hexo中自带的标签，标定不渲染的部分，将`md`文件中的js部分标中选择不渲染
二: 下载js后直接把赋值放在js中
注意，这两种办法都是可以直接解决上面两种bug的（引号和图片链接的渲染）
* [x] 获取发布说说的设备的api似乎不是很给力。换一个应该就可以了。引用os.js判断发布系统。对于移动端不用的浏览器返回的返回的设备和位置仍然不准确。版本`2.1.2`中取消位置显示。
* [x] 因为我的不严谨，在源码中少了一个`</div>`导致部分博客框架出现div错位的情况，已解决。

### 🔨 遇到问题自己排错的方法
1. 查看js和css是否成功引用。
2. 检查是否使用的是leancloud的国际版

如果以上两项都正确，还是不行，请[联系](/contact)我。

## 🚩 未来想要实现的功能
- [] 添加表情。
- [] 说说的评论及点赞功能。

## 使用cdn

### 推荐使用 unpkg
```
//默认获取最新
<script type="text/javascript" src="https://unpkg.com/artitalk"></script>
```
### jsdelivr
```
//推荐指定版本号为最新版本，目前最新为1.1.6 推荐使用最新以防止出现已知bug
https://cdn.jsdelivr.net/gh/drew233/artitalk/source/版本号/artitalk.js
```



## 🎆 开发者
* [Uncle_drew](https://cndrew.cn/)
* [cungudafa](https://cungudafa.top/)
* [todest](https://todest.cn/)

## 👍 特别鸣谢
* 张渔：logo制作
* leancloud：提供存储服务
* VuePress：文档框架
* Github: 代码存储
