# Hexo-shuoshuo
基于leancloud提供的存储功能实现的Hexo动态说说界面。

## 置顶提示——V2.0版本已更新全新验证方法，理论上百分百安全！！！

![](https://img.shields.io/github/stars/Drew233/hexo-shuoshuo)
![](https://img.shields.io/github/downloads/Drew233/hexo-shuoshuo/total)
![](https://img.shields.io/badge/version-v2.0-yellowgreen)

详细教程参考：[为你的hexo博客添加动态的（可直接发布说说的）说说页面](https://cndrew.cn/2020/04/10/hexo-shuoshuo/)

Demo: [Hexo-shuoshuo](https://cndrew.cn/shuoshuo/)


## 😎功能
* 在Hexo中显示一个说说页面，并且支持站长实时发布，可移步leancloud后台进行修改。
* 可直接使用html语法插入歌曲或者图片视频等。
* 通过leancloud的用户直接调用保证仅站长可以发布说说，且被破解的概率理论上为0.

## 🐷使用方式
1. 注册leancloud（这里我们要求使用国际版的leancloud，因为不需要绑定备案域名）。
* 注册完登录之后，在leancloud创建应用，并在`结构化数据`中创建`class`名为`shuoshuo`
* 在你新建的应用中找到`结构化数据`下的`用户`。
* 点击`添加用户`，输入想用的用户名及密码。
* 回到`结构化数据`中，点击`class`下的`shuoshuo`。找到权限，在`Class 访问权限`中将`add_fields`以及`create`权限设置为指定用户，输入你刚才输入的用户名会自动匹配。为了安全起见，将`delete`和`update`也设置为跟它们一样的权限。
* 在最左边的菜单栏中找到设置->应用keys，记下来`AppID`和`AppKey`，一会会用。
2. 首先下载或clone本仓库到本地
3. 在hexo文件夹的source文件下新建一个shuoshuo的文件夹，并在其中创建一个index.md
4. 编辑index.md的内容为
```
<script>
var img="";
var appID="";
var appKEY="";
var per="";
var username="";
</script>
<script type="text/javascript" src="/js/shuoshuov1.2.1.js"></script>
<body>
  <div id="primary" class="content-area" style="">
    <main id="main" class="site-main" role="main">
        <div id="shuoshuo_content">
            <div id="ccontent">
        </div>
<div id="sa"><br></div>
<div id="saa"><br></div>
<textarea id="neirong" placeholder="本页面仅支持站长发表说说，由于特殊原因关闭本页面评论功能" style="width:100%;height:150px;background-image: url(https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp);background-size: contain;background-repeat: no-repeat;background-position: right;"></textarea>
<button onclick="savecontent()" style="float :right;">biu~</button>
<button onclick="preview()" style="float :right;">预览</button>
<input type="password" id="key" value="" class="mytxt" placeholder="是时候验证你的身份了！" autocomplete="off"/>
<br>
<div id="preview"></div>
</div>
</body>
```
### 变量含义及作用
* img: 头像url
* appID: leancloud的应用appId
* appKEY: leancloud的应用appKey
* per: 每一部分想展示的说说数以及每次点击查看更多的时候显示的说说数
* username: 你在leancloud中添加的作为可发布说说的用户的用户名

每个参数均为必须

6. 在博客对应的head模板文件中添加css
```html
  <link rel="stylesheet" href="/css/shuoshuov1.0.css" media="all">
```
7. 以上js和css的位置请把控好，保证可以加载到，此时就可以了，你可以根据自己的需要调整css
8. 在密码框中输入你在第一步设定的密码即可成功发布说说。但是现在有一个莫名其妙的bug，第一次提交会失败，重新发布一次即可。

## 🙃与valine可能会产生冲突
在head中调用av-min.js即可。若还是不行，欢迎私聊或者题出issues。

## 😊一些不完美的地方
* 因为说说模板中主要用的是html中的`li`和`ui`标签，所以说说内容暂时不支持这两种标签。

## 🚀更新
* `2020.4.11 9:01` 更新优化时间显示
* `2020.4.11 9:10` 修改密码输入框的type为password，可自选浏览器记住密码。方便以后使用。
* `2020.4.11 9:58`  添加简略的预览，晚些进行样式的美化。
* `2020.4.11 15:56`  添加点击显示更多功能，防止说说太多之后页面过长。
* `2020.4.13 10:09`  ~js中引入关闭右键及F12事件以简单防止某些无聊的人通过控制台恶意发表说说~
* `2020.4.13 11:05`  通过[devtools-detect](https://github.com/sindresorhus/devtools-detect)的支持监听控制台打开事件，打开即跳转。F12事件关闭取消，右键禁止保留。
* `2020.4.17 23:18`  版本V2.0更新，通过leancloud实现验证，保证仅有站长可以发布说说。右键事件重新打开，控制台事件监控取消。

## 🐛已发现的Bug
* [] 发表说说得时候，第一次会失败，即使你的密码正确。但并无任何提示，js判断逻辑也无问题，就是没有存储到leancloud，页面重新加载之后 恢复正常 。
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
* [x] 注意`av-min.js`全局下只能引用一次（可以改但是我不会）。最好的办法就是在`head`中引用，把其他部分引用的全删掉。实测不会影响`valine`地使用。如果出现问题无法解决，欢迎联系我。
