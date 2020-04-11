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
var img=""; #这里填写头像url
var appID=""; #这里填写leancloud的appId
var appKEY=""; #这里填写leancloud的appKey
var passw=""; #这里填写密码（为了不轻易爆露密码，我们这里使用的是md5加密，加密101次，当然如果有些人非要闲的暴力去破解密码也没办法，不过应该不会有这么无聊的人）
</script>
<script type="text/javascript" src="/js/shuo.js"></script>
<body>
  <div id="primary" class="content-area" style="">
    <main id="main" class="site-main" role="main">
        <div id="shuoshuo_content">
            <ul class="cbp_tmtimeline" id="maina">
            </ul>
        </div>
<textarea id="neirong" placeholder="本页面仅支持站长发表说说，由于特殊原因关闭本页面评论功能" style="width:100%;height:150px;background-image: url(https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp);background-size: contain;background-repeat: no-repeat;background-position: right;"></textarea>
<button onclick="savecontent()" style="float :right;">biu~</button>
<input type="text" id="key" value="" class="mytxt" placeholder="是时候验证你的身份了！" />
</div>
</body>
```
5. 如果不知道如何得到加密的密码
去这里获取：http://world.codeforces.site/hexo-shuoshuo/
输入你想用的密码，点击查看即可。
或者自己就跑一遍这个js
```
document.write("<script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/gh/drew233/css/md5.js\"></script>");
var key="";#(你的原密码)
hash = hex_md5(key);
for(var i=0;i<100;i++){
    hash=hex_md5(hash);
}
console.log(hash)
```
6. 此时就可以了，你可以根据自己的需要调整css


## 🙃与valine可能会产生冲突
在head中调用av-min.js即可。若还是不行，欢迎私聊或者题出issues。

## 😊一些不完美的地方
毕竟是静态的页面，在判断是否为站长的时候还是不可能做到绝对安全的。

## 🚀更新
* 2020.4.11 9:01 更新时间显示
