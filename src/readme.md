# 目录树

```
src
├─ css
│    └─ main.css                # artitalk的css
├─ html
│    ├─ lazy.html               # 加载动画的html片段
│    └─ main.html               # artitalk的主要html片段
├─ artitalk.js                  
├─ main.js                      # artitalk的主要js部分
├─ plugins                      # 第三方js
│    ├─ av-min.js               # leancloud提供的SDK
│    ├─ browser.js              # 返回用户操作系统
│    ├─ sha1.js                 # sha1编码，用来资源上传时的重命名
│    └─ showdown.min.js         # markdown转换
└─ readme.md
```


# 资源说明
av-min.js: 由leancloud提供：https://cdn.jsdelivr.net/npm/leancloud-storage@4.5.3/dist/av-min.js
lazy.html: 加载动画源自codepen：https://codepen.io/tholman/pen/yenku
showdown.min.js：https://github.com/showdownjs/showdown
sha1.js：https://github.com/emn178/js-sha1/blob/master/src/sha1.js
browser.js：https://github.com/natee/js-detect-browser-os/blob/master/src/browser.js