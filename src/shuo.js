document.write("<script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/gh/drew233/css/md5.js\"></script>"); 

    window.onload=function(){
        seecontent();
    }
    function p(s){
        return s < 10 ? '0' + s : s
    }
    function savecontent(){
        var shuoshuo=  document.getElementById("neirong").value;
        var key = document.getElementById("key").value;
        alert(shuoshuo);
        hash = hex_md5(key);
        for(var i=0;i<100;i++){
            hash=hex_md5(hash);
        }
        if(hash!=passw){
            alert("本页面仅允许站长发布说说");
            return ;
        }
        if(shuoshuo==""){  
            alert("内容不能为空");
            return ;
        }
        var TestObject = AV.Object.extend('shuoshuo');
        var testObject = new TestObject();
        testObject.set('content', shuoshuo);
        testObject.save().then(function (testObject) {
        })
        alert("上传成功");
        location.reload();
    }
    function seecontent(){
        AV.init({
            appId: appID,
            appKey: appKEY,
        });
        var query = new AV.Query('shuoshuo');
        query.descending('createdAt');
        query.find().then(function (remarks) {
            remarks.forEach(function(atom){
            var uncle=atom.attributes.content;
            var fake=atom.createdAt;
            var d = new Date(fake);
            const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
            const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds())
            var li=document.createElement('li');
            var cc="<span class=\"shuoshuo_author_img\"><img src=\""+img+"\"class=\"avatar avatar-48\" width=\"48\" height=\"48\"></span><a class=\"cbp_tmlabel\" ><p></p><p>"+uncle+"</p><p></p><p class=\"shuoshuo_time\"><i class=\"fa fa-clock-o\"></i>"+ resDate+" "+resTime+"</p></a>"
                li.innerHTML=cc;
                var ul=document.getElementById("maina");
                ul.appendChild(li);
        })
        });
    }
