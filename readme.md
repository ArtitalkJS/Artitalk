# Hexo-shuoshuo
基于leancloud提供的存储功能实现的Hexo动态说说界面。

## 置顶提示——V2.0版本已更新全新验证方法，理论上百分百安全！！！

![](https://img.shields.io/github/stars/Drew233/hexo-shuoshuo)
![](https://img.shields.io/github/downloads/Drew233/hexo-shuoshuo/total)
![](https://img.shields.io/badge/version-v2.1-yellowgreen)
![](https://img.shields.io/badge/support-leancloud-yellowblue)

详细教程参考：[为你的hexo博客添加动态的（可直接发布说说的）说说页面](https://cndrew.cn/2020/04/10/hexo-shuoshuo/)

视频教程：[Hexo-shuoshuo bilibili](https://www.bilibili.com/video/BV16A411b7UF)

Demo: [Hexo-shuoshuo](http://world.codeforces.site/hexo-shuoshuo/)
密码：123456


## 😎功能
* 在Hexo中显示一个说说页面，并且支持站长实时发布，可移步leancloud后台进行修改。
* 可直接使用html语法插入歌曲或者图片视频等。
* 通过leancloud的用户直接调用保证仅站长可以发布说说，且被破解的概率理论上为0.

## 🐷使用方式
1. 注册leancloud（这里我们要求使用国际版的leancloud，因为不需要绑定备案域名）。
>  * 注册完登录之后，在leancloud创建应用，并在`结构化数据`中创建`class`名为`shuoshuo`
>  * 在你新建的应用中找到`结构化数据`下的`用户`。
>  * 点击`添加用户`，输入想用的用户名及密码。  
>  * 回到`结构化数据`中，点击`class`下的`shuoshuo`。找到权限，在`Class 访问权限`中将`add_fields`以及`create`权限设置为指定用户，输入你刚才输入的用户名会自动匹配。为了安全起见，将`delete`和`update`也设置为跟它们一样的权限。
>  * 在最左边的菜单栏中找到设置->应用keys，记下来`AppID`和`AppKey`，一会会用。
>  * 最后将`_User`中的权限全部调为指定用户，或者数据创建者，为了保证不被篡改用户数据已达到强制发布说说。
2. 调用jquery和av-min.js
```
<script src="https://cdn.jsdelivr.net/npm/leancloud-storage@4.5.3/dist/av-min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/drew233/cdn/js/jquery-3.3.1.min.js"></script>
```
jquery可以用自己的cdn，只要调用了就好
如果已经调用过，不需要重复调用

3. 首先下载或clone本仓库到本地
4. 在hexo文件夹的source文件下新建一个shuoshuo的文件夹，并在其中创建一个index.md
5. 编辑index.md的内容为
```
<script>
var img="";
var appID="";
var appKEY="";
var per="";
var username="";
</script>
<script src="https://cdn.jsdelivr.net/npm/leancloud-storage@4.5.3/dist/av-min.js"></script>
<script type="text/javascript" src="/js/shuoshuov2.0.js"></script>
<body>
<div id="lazy">
    <div class="preloader" style="opacity: 1; ">
  <svg version="1.1" id="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve" style="opacity: 1; margin-left: 0px; margin-top: 0px;">
    <g>
      <path fill="none" d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"></path>
      <path fill="none" d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"></path>
      <path fill="none" d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"></path>
      <path fill="none" d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"></path>
		  <path fill="none" d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"></path>
		  <path fill="none" d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"></path>
		  <path fill="none" d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"></path>
		  <path fill="none" d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"></path>
		  <path fill="none" d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"></path>
		  <path fill="none" d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"></path>
		  <path fill="none" d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"></path>
		  <path fill="none" d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"></path>
		  <path fill="none" d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"></path>
	  </g>
  </svg>

  <svg version="1.1" id="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve">
    <path fill="none" d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"></path>
  </svg>

  <div class="rain">
    <span class="drop"></span>
    <span class="drop"></span>
    <span class="drop"></span>
    <span class="drop"></span>
    <span class="drop"></span>
    <span class="drop"></span>
    <span class="drop"></span>
    <span class="drop"></span>
    <span class="drop"></span>
    <span class="drop"></span>
  </div>
  <div class="text">
    LOOKING OUTSIDE FOR YOU... ONE SEC
  </div>
</div>
  </div>
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
* `img`: 头像url链接
* `appID`: leancloud的应用appId
* `appKEY`: leancloud的应用appKey
* `per`: 每一部分想展示的说说数以及每次点击查看更多的时候显示的说说数
* `username`: 你在leancloud中添加的作为可发布说说的用户的用户名

每个参数均必须填写(若未自己修改js)

6. 在博客对应的head模板文件中添加css
```html
  <link rel="stylesheet" href="/css/shuoshuov1.0.css" media="all">
```
7. 以上js和css的位置请把控好，保证可以加载到，此时就可以了，你可以根据自己的需要调整css
8. 在密码框中输入你在第一步设定的密码即可成功发布说说。但是现在有一个莫名其妙的bug，第一次提交会失败，重新发布一次即可。

## 🙃与valine可能会产生冲突
因为冲突可能导致不能在一个页面使用说说和valine，如果想同时使用，可以使用同一个leancloud的账户的同一个应用。设置不同的class即可。并且调用shuoshuojs的时候将av.init那一个语句删去（未实践，理论上可行。

## 😊一些不完美的地方
* 因为说说模板中主要用的是html中的`li`和`ui`标签，所以说说内容暂时不支持这两种标签。
* 因为同时调用了`av-min.js`，我也不会解决他们的冲突，所以使用本js的页面暂不支持与valine一起使用
* 最新的安全策略因为是调用了leancloud的用户规则，所以如果有人恶意尝试输入密码导致错误次数过多，会暂时封禁账号？（具体规则我也不是很清楚）解决方法：去leancloud后台修改密码即可。

## 🚀更新
* `2020.4.11 9:01` 更新优化时间显示
* `2020.4.11 9:10` 修改密码输入框的type为password，可自选浏览器记住密码。方便以后使用。
* `2020.4.11 9:58`  添加简略的预览，晚些进行样式的美化。
* `2020.4.11 15:56`  添加点击显示更多功能，防止说说太多之后页面过长。
* `2020.4.13 10:09`  ~js中引入关闭右键及F12事件以简单防止某些无聊的人通过控制台恶意发表说说~
* `2020.4.13 11:05`  ~通过[devtools-detect](https://github.com/sindresorhus/devtools-detect)的支持监听控制台打开事件，打开即跳转。F12事件关闭取消，右键禁止保留。~
* `2020.4.17 23:18`  版本V2.0更新，通过leancloud实现验证，保证仅有站长可以发布说说。右键事件重新打开，控制台事件监控取消。
* `2020.4.22 16:37`  版本v2.1更新，添加发布说说的位置和设备显示。为说说页面添加一个有点粗糙的加载动画。

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

