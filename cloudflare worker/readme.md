## Artitalk-Cfworker

通过 `Cloudflare` 提供的KV作为存储，`worker` 作为后端实现 `Artitalk`

### 日志

已实现
1. 查看说说
2. 登录可发布说说
3. 登录可上传图片

计划实现
1. 编辑
2. 删除将不再添加

### 使用说明

1. 在 `cloudflare` 中新建 `worker` 并将 `worker.js` 中的代码复制粘贴进去，填写 `Artitalk` 用户信息（用户名，密码，可选的头像和图床`token`）,支持多用户。至少需要用户名和密码，头像和token如果不需要配置请不要添加此项，即禁止`"img" : ""` 或`"imgToken" : ""`.

填写示例
```
const Users = {
    "Username": {
        "password" : "123456",
        "img" : "https://cdn.jsdelivr.net/gh/drew233/cdn/dreww.webp",
        "imgToken" : "ababa"
    },
    "testt":{
        "password" : "12345",
    }
}
```

2. 新建 `KV` 空间，并在 `worker` 的设置中绑定 `KV命名空间` 。变量名称填写 `Artitalk` 。
3. 在 `Html` 页面中添加如下代码
```
<html>
    <script src='browser.js'></script>
    <script src='md5.js'></script>
    <script src='showdown.min.js'></script>
    <script src='main.js'></script>
    <div id="artitalk_main"></div>
    <script>
    new Artitalk({
        wokerDomain : "";  /*此项为必填项，value为cf worker分到的域名，若无自定义，默认格式为xxx.xxx.workers.dev*/
        /*支持主版本的配置项*/
    })
    </script>
</html>
```


### 目前为beta版本，bug很多，功能正在完善
