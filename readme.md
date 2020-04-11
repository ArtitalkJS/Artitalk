# Hexo-shuoshuo
基于leancloud提供的存储功能实现的Hexo动态说说界面。

详细教程参考：[为你的hexo博客添加动态的（可直接发布说说的）说说页面](https://cndrew.cn/2020/04/10/hexo-shuoshuo/)

Demo: [Hexo-shuoshuo](https://cndrew.cn/shuoshuo/)


## 😎功能
* 在Hexo中显示一个说说页面，并且支持站长实时发布，可移步leancloud后台进行修改。
* 可直接使用html语法插入歌曲或者图片视频等。

## 🐷使用方式
1. 注册leancloud（这里我们要求使用国际版的leancloud，因为不需要绑定备案域名），在leancloud创建应用并添加名为shuoshuo的class。然后找到其中的appId以及appKey，后面会用。
2. 首先下载或clone本仓库到本地
3. 在hexo文件夹的source文件下新建一个shuoshuo的文件夹，并在其中创建一个index.md
4. 编辑index.md的内容为
```
<script>
var img=""; 
var appID="";
var appKEY=""; 
var passw=""; 
var per=""; 
</script>
<script type="text/javascript" src="/js/more.js"></script>
<script type="text/javascript" src="/js/drewsh.js"></script>
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
* passw: 这里填写密码（为了不轻易爆露密码，我们这里使用的是md5加密，加密101次，当然如果有些人非要闲的暴力去破解密码也没办法，不过应该不会有这么无聊的人）去这里获取：http://world.codeforces.site/hexo-shuoshuo/ 专用的密码，在输入框输入你想用的密码，点击查看即可。

加密源码
```javascript
document.write("<script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/gh/drew233/css/md5.js\"></script>");
var key="";#(你的原密码)
hash = hex_md5(key);
for(var i=0;i<100;i++){
    hash=hex_md5(hash);
}
console.log(hash);
```
* per: 每一部分想展示的说说数以及每次点击查看更多的时候显示的说说数

6. 此时就可以了，你可以根据自己的需要调整css


## 🙃与valine可能会产生冲突
在head中调用av-min.js即可。若还是不行，欢迎私聊或者题出issues。

## 😊一些不完美的地方
毕竟是静态的页面，在判断是否为站长的时候还是不可能做到绝对安全的。

## 🚀更新
* 2020.4.11 9:01 更新优化时间显示
* 2020.4.11 9:10 修改密码输入框的type为password，可自选浏览器记住密码。方便以后使用。
* 2020.4.11 9:58  添加简略的预览，晚些进行样式的美化。
* 2020.4.11 15:56  添加点击显示更多功能，防止说说太多之后页面过长。
