document.write("<script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/gh/drew233/css/md5.js\"></script>"); 
var string="<ul class=\"cbp_tmtimeline\" id=\"maina\" pagesize="+per+">";

    window.onload=function(){
        seecontent();
    }
    function ok() {
        var cbp_tmtimeline = function ($children, n) {
            //显示某jquery元素下的前n个隐藏的子元素
            var $hiddenChildren = $children.filter(":hidden");
            var cnt = $hiddenChildren.length;
            for (var i = 0; i < n && i < cnt ; i++) {
                $hiddenChildren.eq(i).show();
            }
            return cnt - n;//返回还剩余的隐藏子元素的数量
        }
     
        jQuery.showMore = function (selector) {
            if (selector == undefined) { selector = ".cbp_tmtimeline" }
            //对页中现有的class=showMorehandle的元素，在之后添加显示更多条，并绑定点击行为
            $(selector).each(function () {
                var pagesize = $(this).attr("pagesize") || 10;
                var $children = $(this).children();
                if ($children.length > pagesize) {
                    for (var i = pagesize; i < $children.length; i++) {
                        $children.eq(i).hide();
                    }
                    $("<div class=\"vpage txt-center\" style=\"display: block; text-align: center;\"><button type=\"button\" class=\"button-success pure-button\">加载更多...</button></div>").insertAfter($(this)).click(function () {
                        if (cbp_tmtimeline($children, pagesize) <= 0) {
                            //如果目标元素已经没有隐藏的子元素了，就隐藏“点击更多的按钮条”
                            $(this).hide();
                            document.getElementById("sa").innerHTML="<center>已经到底啦~</center>"
                        };
                    });
                }
            });
        }
    }
    function p(s){
        return s < 10 ? '0' + s : s
    }
    function preview(){
        var pre=  document.getElementById("neirong").value;
        document.getElementById("preview").innerHTML=pre;
    }
    function savecontent(){
        var shuoshuo=  document.getElementById("neirong").value;
        var key = document.getElementById("key").value;
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
            var cc="<li><span class=\"shuoshuo_author_img\"><img src=\""+img+"\"class=\"avatar avatar-48\" width=\"48\" height=\"48\"></span><a class=\"cbp_tmlabel\" ><p></p><p>"+uncle+"</p><p></p><p class=\"shuoshuo_time\"><i class=\"fa fa-clock-o\"></i>"+" "+ resDate+" "+resTime+"</p></a></li>"
            // console.log(cc);    
            string+=cc;
            // li.innerHTML=cc;
            //     var ul=document.getElementById("maina");
            //     ul.appendChild(li);
            })
            string+='</ul>';
            document.getElementById("ccontent").innerHTML=string;
            ok();
            $.showMore(".cbp_tmtimeline");
        });
    }


 document.oncontextmenu = new Function("return false;"); 
 document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
            alert("为了防止某些无聊的人在控制台提交说说，本页面关闭F12功能及右键菜单🤝");
            e.returnValue = false;
            return (false);
    }
}
