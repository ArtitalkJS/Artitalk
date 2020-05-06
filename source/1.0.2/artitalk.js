$('head').append('<script src=\"https://cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js\"></script>');
$('head').append('<script src=\"https://cdn.jsdelivr.net/npm/leancloud-storage@4.5.3/dist/av-min.js\"></script>');
$('head').append('<script src=\"https://cdn.jsdelivr.net/gh/drew233/Artitalk/source/os.min.js\"></script>');
if ( typeof(placeholder1) == "undefined" ) {
    placeholder1="";
}
if ( typeof(placeholder2) == "undefined" ) {
    placeholder2="请输入密码";
}
if ( typeof(bgimg) == "undefined" ) {
    bgimg="";
}
var version="v1.0"
var sting="<link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/font-awesome/5.13.0/css/all.min.css\" media=\"all\"><link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/drew233/artitalk/source/v1.0.2/artitalk.css\" media=\"all\"><div id=\"main\" class=\"site-main\" role=\"main\"><div id=\"shuoshuo_content\"><div id=\"ccontent\"></div></div><div id=\"shuoshuo_input\"><div id=\"shuoshuo_edit\"><textarea class=\"shuoshuo_text\" id=\"neirong\" placeholder=\""+placeholder1+"\"style=\"background-image: url("+bgimg+");\"></textarea></div><div class=\"shuoshuo_submit\"><div class=\"shuoshuo_row\"><div class=\"col col-80\"><input class=\"input\" type=\"password\" id=\"key\" value=\"\" placeholder=\""+placeholder2+"\" autocomplete=\"off\" /></div><div class=\"col col-20\"><button class=\"button\" onclick=\"preview()\">预览</button><button class=\"button\" onclick=\"savecontent()\">biu~</button></div></div><div class=\"shuoshuo_row\"><div id=\"preview\"></div></div></div></div><div class=\"power\">Powered By <a href=\"https://artitalk.js.org\" target=\"_blank\">Artitalk</a><br>"+version+"</div></div>";
document.getElementById("artitalk").innerHTML = sting;
var lazys="<div class=\"preloader\" style=\"opacity: 1; \"><svg version=\"1.1\" id=\"sun\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"y=\"0px\" width=\"10px\" height=\"10px\" viewBox=\"0 0 10 10\" enable-background=\"new 0 0 10 10\" xml:space=\"preserve\"style=\"opacity: 1; margin-left: 0px; margin-top: 0px;\"><g><path fill=\"none\"d=\"M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z\"></path><path fill=\"none\"d=\"M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z\"></path><path fill=\"none\"d=\"M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z\"></path><path fill=\"none\"d=\"M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z\"></path><path fill=\"none\"d=\"M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z\"></path><path fill=\"none\"d=\"M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z\"></path><path fill=\"none\"d=\"M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z\"></path><path fill=\"none\"d=\"M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z\"></path><path fill=\"none\"d=\"M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z\"></path><path fill=\"none\"d=\"M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z\"></path><path fill=\"none\"d=\"M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z\"></path><path fill=\"none\"d=\"M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z\"></path><path fill=\"none\"d=\"M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z\"</path></g></svg><svg version=\"1.1\" id=\"cloud\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"x=\"0px\" y=\"0px\" width=\"10px\" height=\"10px\" viewBox=\"0 0 10 10\" enable-background=\"new 0 0 10 10\"xml:space=\"preserve\"><path fill=\"none\"d=\"M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z\"></path></svg><div class=\"rain\"><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span></div><div class=\"text\">LOOKING OUTSIDE FOR YOU... ONE SEC</div></div>";
if(lazy==0){
    $("#lazy").remove();
}else{
    document.getElementById("lazy").innerHTML = lazys;
}
var string="<ul class=\"cbp_tmtimeline\" id=\"maina\" pagesize="+per+">";
    var pos="";
    var oss="";
    $.ajaxSettings.async=false;
    $(document).ready(function() {
        $.getJSON("https://api.ip.sb/geoip?callback=?",
            function(json) {
                pos+=(json.city)+" "+(json.region)+" "+(json.country);
            }
        );
    });
    var info = new Browser();
    oss=info.os;
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
                    $("<div class=\"vpage txt-center\" style=\"display: block; text-align: center;\"><button type=\"button\" class=\"button\">加载更多...</button></div><br>").insertAfter($(this)).click(function () {
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
        var converter = new showdown.Converter(),
        html      = converter.makeHtml(pre);
        document.getElementById("preview").innerHTML=html;
    }
    function savecontent(){
        var shuoshuo=  document.getElementById("neirong").value;
        var converte = new showdown.Converter(),
        html      = converte.makeHtml(shuoshuo);
        var password = document.getElementById("key").value;
        if(password==""){
            alert("请输入密码");
            return ;
        }
        AV.User.logIn(username,password).then(function (loginedUser) {
          }, function (error) {
            console.dir(error);
            if(error.code===211){
              alert('本页面只允许站长发布说说');
              return ;
            }else if(error.code===210){
              alert('本页面只允许站长发布说说');
              return ;
            }
          });
          
        if(shuoshuo==""){  
            alert("内容不能为空");
            return ;
        }
        var TestObject = AV.Object.extend('shuoshuo');
        var testObject = new TestObject();
        testObject.set('content', html);
        testObject.set('postion', pos);
        testObject.set('os', oss);
        testObject.save().then(function (testObject) {
            location.reload();
        })
    }
    function seecontent(){
        AV.init({
            appId: appID,
            appKey: appKEY,
        });
        var currentUser = AV.User.current();
        if (currentUser) {
             AV.User.logOut();
        }
        var query = new AV.Query('shuoshuo');
        query.descending('createdAt');
        query.find().then(function (remarks) {
            remarks.forEach(function(atom){
                var uncle=atom.attributes.content;
                var posti=atom.attributes.postion;
                var OS=atom.attributes.os;
                var fake=atom.createdAt;
                var d = new Date(fake);
                const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
                const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds())
                var li=document.createElement('li');
                var cc="<li><span class=\"shuoshuo_author_img\"><img src=\""+img+"\"class=\"avatar avatar-48\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\" ><p>"+uncle+"</p><p class=\"shuoshuo_time\">"+"<span style=\"\"><i class=\"fas fa-user-edit\"></i>由   "+OS+"发表</span><span style=\"float:right;\"><i class=\"fa fa-clock-o\"></i>"+" "+ resDate+" "+resTime+"     "+"</p></span></span></li>"
                string+=cc;
            })
            string+='</ul>';
            document.getElementById("ccontent").innerHTML=string;
            ok();
            $.showMore(".cbp_tmtimeline");
            $('#lazy').fadeOut();
        });
    }
