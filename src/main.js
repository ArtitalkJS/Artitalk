var artitalkVar = {};

artitalkVar.version = "v2.4.1";
if (document.getElementById("lazy") || !document.getElementById("artitalk_main")) {
    var r = confirm("旧版本需要进行一些改动，未进行改动无法正常加载页面属于正常现象。点击确定前往查看改动");
    if (r == true) {
        window.location.href = "https://artitalk.js.org/release.html#_2020-6-27-11-50";
    }
}

artitalkVar.img_limit = 5 * 1024;
artitalkVar.audio_limit = 10 * 1024;
artitalkVar.video_limit = 25 * 1024;

artitalkVar.color1 = window.artitalkConfig.color1 || "RGBA(255, 125, 73, 0.75)";
artitalkVar.color2 = window.artitalkConfig.color2 || "#9BCD9B";
artitalkVar.color3 = window.artitalkConfig.color3 || "white";

if (!document.getElementById("add-Artitalk-Style")) {
    if (typeof (window.artitalkConfig.cssUrl) == "undefined") {
        var css = "div#artitalk_main {    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);  }  #artitalk_main .shuoshuo_row {  width: 100%;  margin-top: 10px;  display: flex;  }  #artitalk_main .artitalk_child {  width: 100%;  }  #artitalk_main #shuoshuo_content {  padding: 10px;  /* min-height: 500px; */  }  #artitalk_main body.theme-dark .cbp_tmtimeline::before {  background: RGBA(255, 255, 255, 0.06);  }  #artitalk_main ul.cbp_tmtimeline {  padding: 0;  }  #artitalk_main .cbp_tmtimeline {  margin: 30px 0 0 0;  padding: 0;  list-style: none;  display: inline;  position: relative;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime {  display: block;  /* width: 29%; */  /* padding-right: 110px; */  max-width: 70px;  position: absolute;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span {  display: block;  text-align: right;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:first-child {  font-size: 0.9em;  color: #bdd0db;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:last-child {  font-size: 1.2em;  color: #9bcd9b;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmtime span:last-child {  color: RGBA(255, 125, 73, 0.75);  }  #artitalk_main div.cbp_tmlabel>p {  margin-bottom: 0;  }  #artitalk_main div class.cdp_tmlabel>li .cbp_tmlabel {  margin-bottom: 0;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmlabel {  margin: 0 0 45px 65px;  z-index: 1;  background: " + artitalkVar.color2 + ";  color: " + artitalkVar.color3 + " ;  padding: 0.8em 1.2em 0.4em 1.2em;  /* font-size: 1.2em; */  font-weight: 300;  line-height: 1.4;  position: relative;  border-radius: 5px;  transition: all 0.3s ease 0s;  box-shadow: 0 1px 2px rgba(0,0,0,0.15);  cursor: pointer;  display: block;  }  #artitalk_main .cbp_tmlabel:hover {  /* transform: scale(1.05); */  transform: translateY(-3px);  z-index: 1;  box-shadow: 0 15px 32px rgba(0,0,0,0.15) !important;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel {    background: " + artitalkVar.color1 + ";  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmlabel:after {  right: 100%;  border: solid transparent;  z-index: -1;  content: \" \";  height: 0;  width: 0;  position: absolute;  pointer-events: none;  border-right-color: " + artitalkVar.color2 + ";  border-width: 10px;  top: 4px;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after {    border-right-color: " + artitalkVar.color1 + ";  }  #artitalk_main p.shuoshuo_time {  margin-top: 10px;  border-top: 1px dashed #fff;  padding-top: 5px;  font-size: 12px;  }  @media screen and (max-width: 65.375em) {  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:last-child {    font-size: 1.2em;  }  }  #artitalk_main .shuoshuo_author_img img {  border: 1px solid #ddd;  padding: 2px;  float: left;  border-radius: 64px;  transition: all 1s;  }  #artitalk_main .artitalk_avatar {  border-radius: 100% !important;  -moz-border-radius: 100% !important;  box-shadow: inset 0 -1px 0 3333sf;  -webkit-box-shadow: inset 0 -1px 0 3333sf;  -webkit-transition: 0.4s;  -webkit-transition: -webkit-transform 0.4s ease-out;  transition: transform 0.4s ease-out;  -moz-transition: -moz-transform 0.4s ease-out;  }  #artitalk_main .artitalk_avatar:hover {  -webkit-transform: rotateZ(360deg);  -moz-transform: rotateZ(360deg);  -o-transform: rotateZ(360deg);  -ms-transform: rotateZ(360deg);  transform: rotateZ(360deg);  }  #artitalk_main .shuoshuo_text {  width: 100%;  height: 130px;  padding: 8px 16px;  background-repeat: no-repeat;  background-position: right;  transition: all 0.35s ease-in-out 0s;  outline-style: none;  border: 1px solid #ccc;  border-radius: 6px;  resize: none;  background-color: transparent;  color: #999;  }  #artitalk_main .shuoshuo_inputs {  outline-style: none;  border: 1px solid #ccc;  padding: 8px 16px;  width: 40%;  font-size: 12px;  background-color: transparent;  color: #999;  }  #operare_artitalk .at_button,  #artitalk_main .at_button {    background-color: " + artitalkVar.color1 + ";  /* Green */  border: none;  margin-left: 5px;  color: " + artitalkVar.color3 + ";  padding: 8px 16px;  text-align: center;  text-decoration: none;  height: auto;  line-height: 20px;  display: inline-block;  font-size: 12px;  border-radius: 12px;  /* circle */  outline: none;  cursor: pointer;  }  #operare_artitalk .at_button:hover,  #artitalk_main .at_button:hover {      background-color: " + artitalkVar.color2 + ";  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.24), 0 8px 16px 0 rgba(0,0,0,0.19);  }  #artitalk_main #article-container ul p {  margin: 0 0 1rem;  }  #artitalk_main .power {  text-align: right;  color: #999;  margin-top: 10px;  font-size: 0.75em;  padding: 0.5em 0;  }  #artitalk_main .power a {  font-size: 0.75em;  position: relative;  cursor: pointer;  color: #1abc9c;  text-decoration: none;  display: inline-block;  }  #artitalk_main .shuoshuo_row .col.col-80 {  width: 80%;  float: left;  }  #artitalk_main .shuoshuo_row .col.col-20 {  width: 20%;  float: right;  text-align: right;  }  #artitalk_main #preview {  width: 100%;  float: left;  margin: 0.5rem 0 0;  padding: 7px;  box-shadow: 0 0 1px #f0f0f0;  }  #artitalk_main #lazy {  background: #fff;  bottom: 0;  left: 0;  position: fixed;  right: 0;  top: 0;  z-index: 9999;  }  #artitalk_main .preloader {  position: absolute;  margin-left: -55px;  margin-top: -100px;  height: 110px;  width: 110px;  left: 50%;  top: 50%;  }  #artitalk_main .preloader>svg>g>path {  stroke: #9ea1a4;  stroke-width: 0.25;  }  #artitalk_main .preloader>svg>path {  stroke: #9ea1a4;  stroke-width: 0.25;  }  #artitalk_main #cloud {  position: relative;  z-index: 2;  }  #artitalk_main #cloud path {  fill: #efefef;  }  #artitalk_main #sun {  margin-left: -10px;  margin-top: 6px;  opacity: 0;  width: 60px;  height: 60px;  position: absolute;  left: 45px;  top: 15px;  z-index: 1;  animation-name: rotate;  animation-duration: 16000ms;  animation-iteration-count: infinite;  animation-timing-function: linear;  }  #artitalk_main #sun path {  stroke-width: 0.18;  fill: #9ea1a4;  }  #artitalk_main .rain {  position: absolute;  width: 70px;  height: 70px;  margin-top: -32px;  margin-left: 19px;  }  #artitalk_main .drop {  opacity: 1;  background: #9ea1a4;  display: block;  float: left;  width: 3px;  height: 10px;  margin-left: 4px;  border-radius: 0px 0px 6px 6px;  animation-name: drop;  animation-duration: 350ms;  animation-iteration-count: infinite;  }  #artitalk_main .drop:nth-child(1) {  animation-delay: -130ms;  }  #artitalk_main .drop:nth-child(2) {  animation-delay: -240ms;  }  #artitalk_main .drop:nth-child(3) {  animation-delay: -390ms;  }  #artitalk_main .drop:nth-child(4) {  animation-delay: -525ms;  }  #artitalk_main .drop:nth-child(5) {  animation-delay: -640ms;  }  #artitalk_main .drop:nth-child(6) {  animation-delay: -790ms;  }  #artitalk_main .drop:nth-child(7) {  animation-delay: -900ms;  }  #artitalk_main .drop:nth-child(8) {  animation-delay: -1050ms;  }  #artitalk_main .drop:nth-child(9) {  animation-delay: -1130ms;  }  #artitalk_main .drop:nth-child(10) {  animation-delay: -1300ms;  }  #artitalk_main .artitalk_loading_text {  font-family: Helvetica, \" Helvetica Neue \", sans-serif;  letter-spacing: 1px;  text-align: center;  margin-left: -43px;  font-weight: bold;  margin-top: 20px;  font-size: 11px;  color: #a0a0a0;  width: 200px;  }  #artitalk_main .shuoshuoimg {  cursor: pointer;  transition: all 1s;  z-index: 2;  }  #artitalk_main .shuoshuoimg:hover {  transform: scale(3.5);  }  #artitalk_main .hide,  #operare_artitalk .hide {  display: none;  }  #operare_artitalk .c1 {  position: fixed;  top: 0;  bottom: 0;  left: 0;  right: 0;  background: rgba(0,0,0,0.5);  z-index: 2;  }  #operare_artitalk .c2 {  background-color: #fff;  position: fixed;  width: 400px;  height: auto;  top: 50%;  left: 50%;  z-index: 3;  margin-top: -150px;  margin-left: -200px;  box-shadow: 0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07);  opacity: 0.85;  border: 0;  border-radius: 10px;  }  #operare_artitalk .shuoshuo_input_log {  outline-style: none;  margin-top: 10px;  border: 1px solid #ccc;  border-radius: 6px;  padding: 8px 16px;  font-size: 12px;  background-color: transparent;  color: #999;  }  #artitalk_main .delete_right {  cursor: pointer;  width: 12px;  height: 12px;  position: absolute;  right: 12px;  }  #artitalk_main svg {  display: inline;  }  #artitalk_main .cbp_tmlabel>p,  #artitalk_main h1,  #artitalk_main h2,  #artitalk_main h3,  #artitalk_main h4,  #artitalk_main h5,  #artitalk_main h6,  #artitalk_main em {  word-wrap: break-word;  word-break: break-all;  }  #artitalk_main .shuoshuo_emoji {  border: 1px solid #ccc;  border-radius: 6px 6px 0 0;  height: 120px;  overflow: auto;  margin-top: 10px;  border-bottom: none;  }  #artitalk_main .atemoji {  max-height: 28px;  width: 28px;  display: inline;  vertical-align: middle;  }  #artitalk_main .shuoshuo_emoji>.atemoji {  cursor: pointer;  margin: 0 0 0 10px;  display: inline;  }  #artitalk_main i>.atemoji {  cursor: pointer;  margin: 0 0 0 10px;  }  #artitalk_main .shuoshuo_emoji>a {  display: inline;  }  #artitalk_main #preview>p>.atemoji {  display: inline;  }  #artitalk_main .shuoshuo_emoji>.atemoji:hover {  transform: scale(1.5);  }  #artitalk_main div#shuoshuo_emojiswitch {  height: 40px;  width: auto;  border-radius: 0 0 6px 6px;  border-collapse: collapse;  border: 1px solid #ccc;  border-top: none;  }  #artitalk_main .shuoshuo_emoji_part {  width: 25%;  cursor: pointer;  align-content: center;  text-align: center;  line-height: 40px;  }  #artitalk_main .shuoshuo_emoji_part:hover {  background-color: #ccc;  color: #fff;  }  #artitalk_main .zuiliangdezai {  background-color: #ccc;  color: #fff;  }  #artitalk_main .pingjun {  display: flex;  }  #artitalk_main #article-container img {  margin: 0 0 0 0;  }  #artitalk_main .preview_now {  display: none;  }  #artitalk_main div#loading_txt {  font-size: 20px;  }  #artitalk_main audio {  display: block;  width: 100%;  outline: none;  opacity: 0.8;  }  #artitalk_main video {  z-index: 0;  }  #artitalk_main textarea#neirong:focus {  background-position-y: 150px;  transition: all 0.35s ease-in-out 0s;  }  #artitalk_main img.atemoji {  max-height: 28px;  width: 28px;  display: inline;  vertical-align: middle;  }  #artitalk_main span.cbp_tmlabel>p {  overflow: unset;  }  #artitalk_main ul#maina>li {  list-style: none;  }  #artitalk_main div#artitalk_main {  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);  }  #artitalk_main .c2>center>p {  margin-top: 10px;  margin-bottom: 10px;  }  @-moz-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-webkit-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-o-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-moz-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @-webkit-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @-o-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }";
        var style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = css;
        style.id = "add-Artitalk-Style";
        document.head.appendChild(style);
    } else {
        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = window.artitalkConfig.cssUrl;
        style.id = "add-Artitalk-Style";
        document.head.appendChild(style);
    }
}
// var css = ".shuoshuo_row{width: 100%;margin-top: 10px;display: flex;}.artitalk_child{width: 100%}#shuoshuo_content {padding: 10px;/* min-height: 500px; */}/* shuo */body.theme-dark .cbp_tmtimeline::before {background: RGBA(255, 255, 255, 0.06);}ul.cbp_tmtimeline {padding: 0;}.cbp_tmtimeline {margin: 30px 0 0 0;padding: 0;list-style: none;display: inline;position: relative;}/* The line *//* The date/time */.cbp_tmtimeline>li .cbp_tmtime {display: block;/* width: 29%; *//* padding-right: 110px; */max-width: 70px;position: absolute;}.cbp_tmtimeline>li .cbp_tmtime span {display: block;text-align: right;}.cbp_tmtimeline>li .cbp_tmtime span:first-child {font-size: 0.9em;color: #bdd0db;}.cbp_tmtimeline>li .cbp_tmtime span:last-child {font-size: 1.2em;color: #9BCD9B;}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmtime span:last-child {color: RGBA(255, 125, 73, 0.75);}div.cbp_tmlabel>p {margin-bottom: 0;}/* Right content */div class.cdp_tmlabel>li .cbp_tmlabel {margin-bottom: 0;}.cbp_tmtimeline>li .cbp_tmlabel {margin: 0 0 45px 65px;z-index: 1;background: " + color2 + ";color:" + color3 + " ;padding: .8em 1.2em .4em 1.2em;/* font-size: 1.2em; */font-weight: 300;line-height: 1.4;position: relative;border-radius: 5px;transition: all 0.3s ease 0s;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);cursor: pointer;display: block;}.cbp_tmlabel:hover {/* transform:scale(1.05); */transform: translateY(-3px);z-index: 1;box-shadow: 0 15px 32px rgba(0, 0, 0, 0.15) !important}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel {background: " + color1 + ";}/* The triangle */.cbp_tmtimeline>li .cbp_tmlabel:after {right: 100%;border: solid transparent;z-index: -1;content: \" \";height: 0;width: 0;position: absolute;pointer-events: none;border-right-color: " + color2 + ";border-width: 10px;top: 4px;}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after {border-right-color:" + color1 + ";}p.shuoshuo_time {margin-top: 10px;border-top: 1px dashed #fff;padding-top: 5px;font-size: 12px;}/* Media */@media screen and (max-width: 65.375em) {.cbp_tmtimeline>li .cbp_tmtime span:last-child {font-size: 1.2em;}}.shuoshuo_author_img img {border: 1px solid #ddd;padding: 2px;float: left;border-radius: 64px;transition: all 1.0s;}/* end */.artitalk_avatar {border-radius: 100% !important;-moz-border-radius: 100% !important;box-shadow: inset 0 -1px 0 3333sf;-webkit-box-shadow: inset 0 -1px 0 3333sf;-webkit-transition: 0.4s;-webkit-transition: -webkit-transform 0.4s ease-out;transition: transform 0.4s ease-out;-moz-transition: -moz-transform 0.4s ease-out;}.artitalk_avatar:hover {-webkit-transform: rotateZ(360deg);-moz-transform: rotateZ(360deg);-o-transform: rotateZ(360deg);-ms-transform: rotateZ(360deg);transform: rotateZ(360deg);}/* content */.shuoshuo_text {width: 100%;height: 130px;padding: 8px 16px;background-repeat: no-repeat;background-position: right;transition: all .35s ease-in-out 0s;outline-style: none;border: 1px solid #ccc;border-radius: 6px;resize: none;background-color: transparent;color: #999;}/* password */.shuoshuo_inputs {outline-style: none;border: 1px solid #ccc;padding: 8px 16px;width: 40%;font-size: 12px;background-color: transparent;color: #999;}.at_button {background-color: " + color1 + ";/* Green */border: none;margin-left: 5px;color:" + color3 + ";padding: 8px 16px;text-align: center;text-decoration: none;height: auto;line-height: 20px;display: inline-block;font-size: 12px;border-radius: 12px;/* circle */outline: none;cursor: pointer;}.at_button:hover {background-color: " + color2 + ";box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 8px 16px 0 rgba(0, 0, 0, 0.19);}/* butterfly theme adapter */#article-container ul p {margin: 0 0 1rem;}/* version */.power {text-align: right;color: #999;margin-top: 10px;font-size: .75em;padding: .5em 0;}.power a {font-size: .75em;position: relative;cursor: pointer;color: #1abc9c;text-decoration: none;display: inline-block;}/* row */.shuoshuo_row .col.col-80 {width: 80%;float: left;}.shuoshuo_row .col.col-20 {width: 20%;float: right;text-align: right;}#preview {width: 100%;float: left;margin: .5rem 0 0;padding: 7px;box-shadow: 0 0 1px #f0f0f0;}/* lazyload */#lazy {background: #ffffff;bottom: 0;left: 0;position: fixed;right: 0;top: 0;z-index: 9999;}@import \"compass/css3\";.preloader {position: absolute;margin-left: -55px;margin-top: -100px;height: 110px;width: 110px;left: 50%;top: 50%;}.preloader>svg>g>path{stroke: #9ea1a4;stroke-width: 0.25;}.preloader>svg>path {stroke: #9ea1a4;stroke-width: 0.25;}#cloud {position: relative;z-index: 2;}#cloud path {fill: #efefef;}#sun {margin-left: -10px;margin-top: 6px;opacity: 0;width: 60px;height: 60px;position: absolute;left: 45px;top: 15px;z-index: 1;animation-name: rotate;animation-duration: 16000ms;animation-iteration-count: infinite;animation-timing-function: linear;}#sun path {stroke-width: 0.18;fill: #9ea1a4;}@keyframes rotate {0% {transform: rotateZ(0deg);}100% {transform: rotateZ(360deg);}}/* Rain */.rain {position: absolute;width: 70px;height: 70px;margin-top: -32px;margin-left: 19px;}.drop {opacity: 1;background: #9ea1a4;display: block;float: left;width: 3px;height: 10px;margin-left: 4px;border-radius: 0px 0px 6px 6px;animation-name: drop;animation-duration: 350ms;animation-iteration-count: infinite;}.drop:nth-child(1) {animation-delay: -130ms;}.drop:nth-child(2) {animation-delay: -240ms;}.drop:nth-child(3) {animation-delay: -390ms;}.drop:nth-child(4) {animation-delay: -525ms;}.drop:nth-child(5) {animation-delay: -640ms;}.drop:nth-child(6) {animation-delay: -790ms;}.drop:nth-child(7) {animation-delay: -900ms;}.drop:nth-child(8) {animation-delay: -1050ms;}.drop:nth-child(9) {animation-delay: -1130ms;}.drop:nth-child(10) {animation-delay: -1300ms;}@keyframes drop {50% {height: 45px;opacity: 0;}51% {opacity: 0;}100% {height: 1px;opacity: 0;}}.artitalk_loading_text {font-family: Helvetica, \"Helvetica Neue\", sans-serif;letter-spacing: 1px;text-align: center;margin-left: -43px;font-weight: bold;margin-top: 20px;font-size: 11px;color: #a0a0a0;width: 200px;} .shuoshuoimg{cursor: pointer;transition: all 1s;z-index: 2;}.shuoshuoimg:hover{transform: scale(3.5);} .hide{display: none;}.c1{position: fixed;top:0;bottom: 0;left:0;right: 0;background: rgba(0,0,0,.5);z-index: 2;}.c2{background-color: white;position: fixed;width: 400px;height: auto;top:50%;left: 50%;z-index: 3;margin-top: -150px;margin-left: -200px;box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);opacity: 0.85;border: 0;border-radius: 10px;}.shuoshuo_input_log {outline-style: none;margin-top: 10px;border: 1px solid #ccc;border-radius: 6px;padding: 8px 16px;font-size: 12px;background-color: transparent;color: #999;}.delete_right {cursor: pointer;width: 12px;height: 12px;position: absolute;right: 12px;}svg{display: inline}.cbp_tmlabel>p,h1,h2,h3,h4,h5,h6,em {word-wrap: break-word;word-break: break-all;}.shuoshuo_emoji {border: 1px solid #ccc;border-radius: 6px 6px 0 0;height: 120px;overflow: auto;margin-top: 10px;border-bottom:none}.atemoji {max-height: 28px;width: 28px;display: inline;vertical-align: middle;}.shuoshuo_emoji>.atemoji{cursor: pointer;margin: 0 0 0 10px;display: inline;}i>.atemoji{cursor: pointer;margin: 0 0 0 10px;}.shuoshuo_emoji>a{display: inline}#preview>p>.atemoji {display: inline;}.shuoshuo_emoji>.atemoji:hover {transform:scale(1.5);}div#shuoshuo_emojiswitch {height: 40px;width: auto;border-radius: 0 0 6px 6px;border-collapse: collapse;border: 1px solid #ccc;border-top: none;}.shuoshuo_emoji_part {width: 25%;cursor: pointer;align-content: center;text-align: center;line-height: 40px;}.shuoshuo_emoji_part:hover {background-color: #CCC;color: white;}.zuiliangdezai {background-color: #CCC;color: white;}.pingjun{display: flex;}#article-container img {margin: 0 0 0 0;}.preview_now{display: none}div#loading_txt {font-size: 20px;}audio{display: block;width: 100%;outline: none;opacity: 0.8;}video{z-index: 0;}textarea#neirong:focus {background-position-y: 150px;transition: all .35s ease-in-out 0s;}img.atemoji {max-height: 28px;width: 28px;display: inline;vertical-align: middle;}span.cbp_tmlabel>p {overflow: unset;}ul#maina>li {list-style: none;}div#artitalk_main {transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);}.c2>center>p {margin-top: 10px;margin-bottom: 10px;}";

artitalkVar.placeholder1 = window.artitalkConfig.placeholder1 || "";
artitalkVar.per = window.artitalkConfig.pageSite || 5;
artitalkVar.bgimg = window.artitalkConfig.bgImg || "";
artitalkVar.slang = window.artitalkConfig.lang || "zh";
artitalkVar.lazy = window.artitalkConfig.motion != "undefine" ? window.artitalkConfig.motion : 1;

window.langbase = {};

switch (artitalkVar.slang) {
    case "zh":
        window.langbase = {
            text0: "由",
            text00: "发表",
            text1: "加载更多...",
            text2: "预览",
            text3: "发布",
            text4: "已登录",
            text5: "确定",
            text6: "退出登录",
            text7: "用户",
            text8: "密码",
            text9: "登录",
            text10: "取消",
            text11: "发布说说",
            text12: "添加图片，视频，音乐",
            text14: "(上传失败，若非网络原因，请联系Artitalk开发人员)",
            text15: "请先登录",
            text16: "内容不能为空",
            text17: "登陆失败，请检查用户名及密码是否正确",
            text18: "头像url",
            text19: "确定删除本条说说吗？",
            text20: "删除成功",
            text21: "请拖拽图片到此处",
            text22: "表情",
            text23: "删除",
            text24: "如果你看到这条说说，恭喜你已经配置成功并且可以正常使用了。当你发布一个说说之后，我将会自动消失。快去探索Artitalk吧<br>欢迎加入Artitalk的QQ交流群：1104585229<br>觉得本项目不错的话可以推荐给你的好友或者去GitHub点一个star，感谢支持",
            text25: "上传中",
            text26: "图片",
            text27: "音乐",
            text28: "视频",
            text29: "添加",
            text30: "上传的图片最大支持5M，请压缩后或换一个继续上传",
            text31: "上传的音乐最大支持10M，请压缩后或换一个继续上传",
            text32: "上传的视频最大支持30M，请压缩后或换一个继续上传",
            text33: "图片格式错误，请不要上传其他类型的文件",
            text34: "音频格式错误，请不要上传其他类型的文件",
            text35: "视频格式错误，请不要上传其他类型的文件",
            textup: "上传ing",
            loadingTxT: "加载中"
        }
        break;
    case "en":
        window.langbase = {
            text0: "Published by",
            text00: "",
            text1: "load more...",
            text2: "Preview",
            text3: "Publish",
            text4: "logged",
            text5: "Ok",
            text6: "Sign out",
            text7: "Username",
            text8: "Password",
            text9: "Log in",
            text10: "Cancel",
            text11: "Post talk",
            text12: "Add pictures, videos, music",
            text14: "(Upload failed, if not for network reasons, please contact Artitalk developers)",
            text15: "Please log in first",
            text16: "Content can not be blank",
            text17: "Login failed, please check if the username and password are correct",
            text18: "Avatar url",
            text19: "Are you sure you want to delete this article?",
            text20: "Successfully deleted",
            text21: "Please drag and drop pictures here",
            text22: "emoji",
            text23: "Delete",
            text24: "If you see this, congratulations, you have successfully configured and can be used normally. When you post one shuoshuo, I will disappear automatically. Quickly explore Artitalk.<br>Welcome to Artitalk’s QQ group: 1104585229<br>If you think this project is good, you can recommend it to your friends or go to GitHub to order a star.",
            text25: "uploading",
            text26: "image",
            text27: "music",
            text28: "video",
            text29: "Add",
            text30: "The uploaded image supports a maximum of 5M, please compress or change another one to continue uploading",
            text31: "The uploaded music supports a maximum of 10M, please compress or change another one to continue uploading",
            text32: "The uploaded video supports a maximum of 30M, please compress or change another one to continue uploading",
            text33: "Picture format error, please do not upload other types of files",
            text34: "The audio format is wrong, please do not upload other types of files",
            text35: "Video format error, please do not upload other types of files",
            textup: "Uploading",
            loadingTxT: "Loading"
        }
        break;
    case "es":
        window.langbase = {
            text0: "Publicado por",
            text00: "",
            text1: "Carga más...",
            text2: "Avance",
            text3: "Lanzamiento",
            text4: "Registrado",
            text5: "Determinar",
            text6: "Desconectar",
            text7: "Usuario",
            text8: "Contraseña",
            text9: "Iniciar sesión",
            text10: "Cancelar",
            text11: "Publicar charla",
            text12: "Agrega fotos, videos, música",
            text14: "(Carga fallida, si no es por razones de red, comuníquese con los desarrolladores de Artitalk)",
            text15: "Por favor ingresa primero",
            text16: "El contenido no puede estar en blanco",
            text17: "Error de inicio de sesión, compruebe si el nombre de usuario y la contraseña son correctos",
            text18: "URL del avatar",
            text19: "¿Estás seguro de que deseas eliminar este artículo?",
            text20: "Eliminado con éxito",
            text21: "Arrastra y suelta fotos aquí",
            text22: "expresión",
            text23: "Eliminar",
            text24: "Si ve este artículo, felicidades, se ha configurado correctamente y se puede usar normalmente. Cuando publiques un comentario, desapareceré automáticamente. Explore rápidamente Artitalk. <br> Bienvenido al grupo QQ de Artitalk: 1104585229 <br> Si cree que este proyecto es bueno, puede recomendarlo a sus amigos o ir a GitHub para pedir una estrella, gracias por su apoyo.",
            text25: "cargando",
            text26: "imagen",
            text27: "música",
            text28: "vídeo",
            text29: "Añadir",
            text30: "La imagen cargada admite un máximo de 5 M, comprima o cambie otra para continuar cargando",
            text31: "La música cargada admite un máximo de 10 M, comprime o cambia otra para continuar cargando",
            text32: "El video subido admite un máximo de 30 M, comprima o cambie otro para continuar subiendo",
            text33: "Error de formato de imagen, no suba otros tipos de archivos",
            text34: "El formato de audio es incorrecto, no suba otros tipos de archivos",
            text35: "Error de formato de video, no suba otros tipos de archivos",
            textup: "Cargando",
            loadingTxT: "Cargando"
        }
        break;
}

artitalkVar.placeholder2 = window.artitalkConfig.placeholder2 || langbase.text18;

artitalkVar.artitalk_emoji = "";
artitalkVar.artitalk_emoji_bb = "";
artitalkVar.artitalk_emoji_tb = "";
artitalkVar.artitalk_emoji_qq = "";
artitalkVar.atemoji_array = window.artitalkConfig.atEmoji || {};

artitalkVar.atemoji_array_qq = {
    qq_aini: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aini.gif",
    qq_aixin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aixin.gif",
    qq_aoman: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aoman.gif",
    qq_baiyan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.gif",
    qq_bangbangtang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bangbangtang.gif",
    qq_baojin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baojin.gif",
    qq_baoquan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baoquan.gif",
    qq_bishi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.gif",
    qq_bizui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.gif",
    qq_cahan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/cahan.gif",
    qq_caidao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/caidao.gif",
    qq_chi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chi.gif",
    qq_ciya: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ciya.gif",
    qq_dabing: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dabing.gif",
    qq_daku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.gif",
    qq_dan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dan.gif",
    qq_deyi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/deyi.gif",
    qq_doge: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.gif",
    qq_fadai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.gif",
    qq_fanu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.gif",
    qq_fendou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fendou.gif",
    qq_ganga: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.gif",
    qq_gouyin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/gouyin.gif",
    qq_guzhang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.gif",
    qq_haixiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.gif",
    qq_hanxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hanxiao.gif",
    qq_haobang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haobang.gif",
    qq_haqian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haqian.gif",
    qq_hecai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hecai.gif",
    qq_hexie: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hexie.gif",
    qq_huaixiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.gif",
    qq_jie: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jie.gif",
    qq_jingkong: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingkong.gif",
    qq_jingxi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxi.gif",
    qq_jingya: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingya.gif",
    qq_juhua: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/juhua.gif",
    qq_keai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.gif",
    qq_kelian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kelian.gif",
    qq_koubi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.gif",
    qq_ku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ku.gif",
    qq_kuaikule: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kuaikule.gif",
    qq_kulou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kulou.gif",
    qq_kun: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun.gif",
    qq_lanqiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lanqiu.gif",
    qq_leiben: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/leiben.gif",
    qq_lenghan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lenghan.gif",
    qq_liuhan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.gif",
    qq_liulei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.gif",
    qq_nanguo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.gif",
    qq_OK: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/OK.gif",
    qq_penxue: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/penxue.gif",
    qq_piezui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/piezui.gif",
    qq_pijiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/pijiu.gif",
    qq_qiang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiang.gif",
    qq_qiaoda: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiaoda.gif",
    qq_qinqin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.gif",
    qq_qiudale: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiudale.gif",
    qq_quantou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/quantou.gif",
    qq_saorao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/saorao.gif",
    qq_se: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.gif",
    qq_shengli: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengli.gif",
    qq_shouqiang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shouqiang.gif",
    qq_shuai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuai.gif",
    qq_shui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shui.gif",
    qq_tiaopi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.gif",
    qq_touxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.gif",
    qq_tu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tu.gif",
    qq_tuosai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuosai.gif",
    qq_weiqu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.gif",
    qq_weixiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weixiao.gif",
    qq_woshou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/woshou.gif",
    qq_wozuimei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wozuimei.gif",
    qq_wunai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.gif",
    qq_xia: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xia.gif",
    qq_xiaojiujie: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaojiujie.gif",
    qq_xiaoku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.gif",
    qq_xiaoyanger: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoyanger.gif",
    qq_xieyanxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.gif",
    qq_xigua: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xigua.gif",
    qq_xu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xu.gif",
    qq_yangtuo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yangtuo.gif",
    qq_yinxian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yinxian.gif",
    qq_yiwen: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.gif",
    qq_youhengheng: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/youhengheng.gif",
    qq_youling: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/youling.gif",
    qq_yun: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.gif",
    qq_zaijian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.gif",
    qq_zhayanjian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhayanjian.gif",
    qq_zhemo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhemo.gif",
    qq_zhouma: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhouma.gif",
    qq_zhuakuang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.gif",
    qq_zuohengheng: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zuohengheng.gif"
}

artitalkVar.atemoji_array_tb = {
    OK: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/OK.png",
    what: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/what.png",
    不高兴: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/不高兴.png",
    乖: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/乖.png",
    你懂的: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/你懂的.png",
    便便: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/便便.png",
    勉强: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/勉强.png",
    吐: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/吐.png",
    吐舌: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/吐舌.png",
    呀咩爹: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/呀咩爹.png",
    呵呵: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/呵呵.png",
    哈哈: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/哈哈.png",
    啊: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/啊.png",
    喷: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/喷.png",
    大拇指: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/大拇指.png",
    太开心: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/太开心.png",
    太阳: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/太阳.png",
    委屈: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/委屈.png",
    小乖: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/小乖.png",
    小红脸: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/小红脸.png",
    彩虹: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/彩虹.png",
    心碎: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/心碎.png",
    怒: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/怒.png",
    惊哭: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/惊哭.png",
    惊讶: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/惊讶.png",
    懒得理: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/懒得理.png",
    手纸: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/手纸.png",
    挖鼻: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/挖鼻.png",
    捂嘴笑: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/捂嘴笑.png",
    星星月亮: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/星星月亮.png",
    汗: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/汗.png",
    沙发: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/沙发.png",
    泪: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/泪.png",
    滑稽: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/滑稽.png",
    灯泡: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/灯泡.png",
    爱心: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/爱心.png",
    犀利: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/犀利.png",
    狂汗: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/狂汗.png",
    玫瑰: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/玫瑰.png",
    疑问: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/疑问.png",
    真棒: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/真棒.png",
    睡觉: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/睡觉.png",
    礼物: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/礼物.png",
    笑尿: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/笑尿.png",
    笑眼: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/笑眼.png",
    红领巾: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/红领巾.png",
    胜利: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/胜利.png",
    花心: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/花心.png",
    茶杯: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/茶杯.png",
    药丸: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/药丸.png",
    蛋糕: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/蛋糕.png",
    蜡烛: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/蜡烛.png",
    鄙视: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/鄙视.png",
    酷: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/酷.png",
    酸爽: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/酸爽.png",
    钱币: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/钱币.png",
    阴险: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/阴险.png",
    音乐: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/音乐.png",
    香蕉: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/香蕉.png",
    黑线: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/黑线.png"
}

artitalkVar.atemoji_array_bb = {
    baiyan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png",
    bishi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png",
    bizui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png",
    chan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png",
    daku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.png",
    dalao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalao.png",
    dalian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalian.png",
    dianzan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dianzan.png",
    doge: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.png",
    facai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/facai.png",
    fadai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.png",
    fanu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.png",
    ganga: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.png",
    guilian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guilian.png",
    guzhang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.png",
    haixiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.png",
    heirenwenhao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/heirenwenhao.png",
    huaixiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.png",
    jingxia: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxia.png",
    keai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.png",
    koubi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.png",
    kun2: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun2.png",
    lengmo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lengmo.png",
    liubixue: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liubixue.png",
    liuhan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.png",
    liulei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.png",
    mudengkoudai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/mudengkoudai.png",
    nanguo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.png",
    outu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/outu.png",
    qinqin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.png",
    se: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.png",
    shengbing: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengbing.png",
    shengqi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengqi.png",
    shuizhao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuizhao.png",
    sikao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/sikao.png",
    tiaokan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaokan.png",
    tiaopi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.png",
    touxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.png",
    tuxue: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuxue.png",
    weiqu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.png",
    wunai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.png",
    xiaoku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.png",
    xieyanxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.png",
    yiwen: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.png",
    yun: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.png",
    zaijian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.png",
    zhoumei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhoumei.png",
    zhuakuang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.png"
}

for (var key in artitalkVar.atemoji_array) {
    artitalkVar.artitalk_emoji = artitalkVar.artitalk_emoji + "<img alt='[" + key + "]' title='" + key + "' onclick='insert_atemoji(\"[" + key + "]\")' class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array[key] + "'/>";
}

for (var key in artitalkVar.atemoji_array_bb) {
    artitalkVar.artitalk_emoji_bb = artitalkVar.artitalk_emoji_bb + "<img alt='[" + key + "]' title='" + key + "' onclick='insert_atemoji(\"[" + key + "]\")' class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array_bb[key] + "'/>";
}
for (var key in artitalkVar.atemoji_array_tb) {
    artitalkVar.artitalk_emoji_tb = artitalkVar.artitalk_emoji_tb + "<img alt='[" + key + "]' title='" + key + "' onclick='insert_atemoji(\"[" + key + "]\")' class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array_tb[key] + "'/>";
}
for (var key in artitalkVar.atemoji_array_qq) {
    artitalkVar.artitalk_emoji_qq = artitalkVar.artitalk_emoji_qq + "<img alt='[" + key + "]' title='" + key + "' onclick='insert_atemoji(\"[" + key + "]\")' class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array_qq[key] + "'/>";
}

function insert_atemoji(str) {
    var tc = document.getElementById("neirong");
    var tclen = tc.value.length;
    tc.focus();
    if (typeof document.selection != "undefined") {
        document.selection.createRange().text = str;
    } else {
        tc.value = tc.value.substr(0, tc.selectionStart) + str + tc.value.substring(tc.selectionStart, tclen);
    }
    preview();
}

function shuoshuo_emoji_QQ() {
    document.getElementById('switch_1').classList.remove('zuiliangdezai');
    document.getElementById('switch_2').classList.remove('zuiliangdezai');
    document.getElementById('switch_3').classList.add('zuiliangdezai');
    document.getElementById('switch_4').classList.remove('zuiliangdezai');
    if (document.getElementById('shuoshuo_emoji_QQ').className.indexOf('hide') === -1) {
        return;
    }
    if (document.getElementById('shuoshuo_emoji_BiliBili').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_BiliBili').classList.add('hide');
    }
    if (document.getElementById('shuoshuo_emoji_custom').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_custom').classList.add('hide');
    }
    if (document.getElementById('shuoshuo_emoji_Tieba').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_Tieba').classList.add('hide');
    }
    document.getElementById('shuoshuo_emoji_QQ').classList.remove('hide');
}

function shuoshuo_emoji_BiliBili() {
    document.getElementById('switch_1').classList.remove('zuiliangdezai');
    document.getElementById('switch_2').classList.add('zuiliangdezai');
    document.getElementById('switch_3').classList.remove('zuiliangdezai');
    document.getElementById('switch_4').classList.remove('zuiliangdezai');
    if (document.getElementById('shuoshuo_emoji_BiliBili').className.indexOf('hide') === -1) {
        return;
    }
    if (document.getElementById('shuoshuo_emoji_QQ').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_QQ').classList.add('hide');
    }
    if (document.getElementById('shuoshuo_emoji_custom').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_custom').classList.add('hide');
    }
    if (document.getElementById('shuoshuo_emoji_Tieba').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_Tieba').classList.add('hide');
    }
    document.getElementById('shuoshuo_emoji_BiliBili').classList.remove('hide');
}

function shuoshuo_emoji_Custom() {
    document.getElementById('switch_1').classList.remove('zuiliangdezai');
    document.getElementById('switch_2').classList.remove('zuiliangdezai');
    document.getElementById('switch_3').classList.remove('zuiliangdezai');
    document.getElementById('switch_4').classList.add('zuiliangdezai');
    if (document.getElementById('shuoshuo_emoji_custom').className.indexOf('hide') === -1) {
        return;
    }
    if (document.getElementById('shuoshuo_emoji_QQ').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_QQ').classList.add('hide');
    }
    if (document.getElementById('shuoshuo_emoji_BiliBili').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_BiliBili').classList.add('hide');
    }
    if (document.getElementById('shuoshuo_emoji_Tieba').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_Tieba').classList.add('hide');
    }
    document.getElementById('shuoshuo_emoji_custom').classList.remove('hide');
}

function shuoshuo_emoji_Tieba() {
    document.getElementById('switch_1').classList.add('zuiliangdezai');
    document.getElementById('switch_2').classList.remove('zuiliangdezai');
    document.getElementById('switch_3').classList.remove('zuiliangdezai');
    document.getElementById('switch_4').classList.remove('zuiliangdezai');
    if (document.getElementById('shuoshuo_emoji_Tieba').className.indexOf('hide') === -1) {
        return;
    }
    if (document.getElementById('shuoshuo_emoji_QQ').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_QQ').classList.add('hide');
    }
    if (document.getElementById('shuoshuo_emoji_BiliBili').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_BiliBili').classList.add('hide');
    }
    if (document.getElementById('shuoshuo_emoji_custom').className.indexOf('hide') === -1) {
        document.getElementById('shuoshuo_emoji_custom').classList.add('hide');
    }
    document.getElementById('shuoshuo_emoji_Tieba').classList.remove('hide');
}
//表情end

artitalkVar.sting = "<div id='artitalk_part1'><div id=\"main\" class=\"site-main\" role=\"main\"><div id=\"shuoshuo_content\"><div id=\"ccontent\"></div><center><button id=\"readmore\" class=\"at_button\" onclick=\"shuoshuo_readmore()\" style=\"margin-bottom: 15px;display: none\">" + langbase.text1 + "</button></center></div><div id=\"shuoshuo_input\" class=\"shuoshuo_active\" style=\"display: none;\"><div id=\"shuoshuo_edit\"><textarea class=\"shuoshuo_text\" oninput=\"preview()\" id=\"neirong\" placeholder=\"" + artitalkVar.placeholder1 + "\"style=\"background-image: url(" + artitalkVar.bgimg + ");z-index: 0\"></textarea><span id=\"drag_area\" class=\"z-index: -1;\"></span></div><div id=\"shuoshuo_parttwo\" class=\"shuoshuo_parttwo\"><div id=\"shuoshuo_emoji_Tieba\" class=\"shuoshuo_emoji hide\"></div><div id=\"shuoshuo_emoji_BiliBili\" class=\"shuoshuo_emoji hide\"></div><div id=\"shuoshuo_emoji_QQ\" class=\"shuoshuo_emoji hide\"></div><div id=\"shuoshuo_emoji_custom\" class=\"shuoshuo_emoji hide\"></div><div id=\"shuoshuo_emojiswitch\" class=\"shuoshuo_emojiswitch hide\"><div id=\"switch_1\" class=\"shuoshuo_emoji_part zuiliangdezai\" onclick=\"shuoshuo_emoji_Tieba()\">Tieba</div><div id=\"switch_2\" class=\"shuoshuo_emoji_part\" onclick=\"shuoshuo_emoji_BiliBili()\">BiliBili</div><div id=\"switch_3\" class=\"shuoshuo_emoji_part\" onclick=\"shuoshuo_emoji_QQ()\">QQ</div><div id=\"switch_4\" class=\"shuoshuo_emoji_part\" onclick=\"shuoshuo_emoji_Custom()\">Custom</div></div><div id=\"preview\" class=\"preview_now\"></div></div><div class=\"shuoshuo_submit\"><div class=\"shuoshuo_row\"><input class=\"artitalk_child shuoshuo_inputs\" id=\"touxiang\" value=\"\" placeholder=\"" + langbase.text18 + "\"><div class=\"artitalk_child\"><button class=\"at_button\" onclick=\"savecontent()\" style=\"float: right;\">" + langbase.text3 + "</button><button class=\"at_button\" onclick=\"preview_ohuo();\" style=\"float: right;\">" + langbase.text2 + "</button><button class=\"at_button\" onclick=\"upload_in()\" style=\"float: right;\">" + langbase.text29 + "</button><button class=\"at_button\" onclick=\"shuoshuo_emoji_lovefancybox()\" style=\"float: right;\">" + langbase.text22 + "</button></div></div></div></div></div><div class=\"power\"><div style=\"font-size: 25px;display: inline; cursor: pointer\" onclick=\"artitalk(); \"title=\"" + langbase.text11 + "\"><svg t=\"1591347684072\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"9731\" width=\"30\" height=\"30\"  style=\"display: inline\"><path d=\"M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z\" p-id=\"9732\" fill=\"#707070\"></path><path d=\"M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z\" p-id=\"9733\" fill=\"#707070\"></path></svg></div><div style=\"font-size: 25px;display: inline; cursor: pointer\" onclick=\"swtichuser()\" title=\"" + langbase.text9 + "\"><svg t=\"1591347848063\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"12288\" width=\"30\" height=\"30\"  style=\"display: inline\"><path d=\"M515.541449 7.082899c-280.359429 0-508.458551 228.120391-508.458551 508.458551s228.120391 508.458551 508.458551 508.458551 508.458551-228.120391 508.458551-508.458551S795.900879 7.082899 515.541449 7.082899zM515.541449 981.864196c-257.132626 0-466.301477-209.190121-466.301477-466.322747 0-257.132626 209.168851-466.322747 466.301477-466.322747s466.301477 209.190121 466.301477 466.322747S772.674075 981.864196 515.541449 981.864196zM614.574414 524.177056 614.574414 524.177056c47.751075-31.96876 79.230625-86.398604 79.230625-148.187857 0-98.437405-79.804915-178.24232-178.24232-178.24232-98.437405 0-178.24232 79.804915-178.24232 178.24232 0 61.810523 31.479551 116.219097 79.251895 148.187857-100.266622 39.519598-171.244501 137.170014-171.244501 251.453545 0 0.23397 0 0.446669 0.02127 0.659369 0 0.04254-0.02127 0.10635-0.02127 0.14889 0 15.612155 12.65563 28.246516 28.267786 28.246516 15.590885 0 21.886796-12.63436 21.886796-28.246516 0-0.340319-0.08508-0.659369-0.10635-1.020958 0.10635-118.005774 102.159649-219.995264 220.207964-219.995264 118.112124 0 220.207964 102.095839 220.207964 220.207964 0 0.14889-1.467628 29.054774 21.971875 29.054774 15.505806 0 28.076356-12.57055 28.076356-28.055086 0-0.06381-0.02127-0.12762-0.02127-0.2127 0-0.25524 0.02127-0.510479 0.02127-0.786989C785.797645 661.34707 714.798496 563.696654 614.574414 524.177056zM515.541449 510.734437c-74.402343 0-134.723968-60.321625-134.723968-134.723968 0-74.423613 60.321625-134.723968 134.723968-134.723968 74.423613 0 134.723968 60.321625 134.723968 134.723968S589.943792 510.734437 515.541449 510.734437z\" p-id=\"12289\" fill=\"#707070\"></path></svg></div><br>Powered By <a href=\"https://artitalk.js.org\" target=\"_blank\">Artitalk</a><br>" + artitalkVar.version + "</div></div>";
artitalkVar.lazys = "<div id='lazy'><div class=\"preloader\" style=\"opacity: 1; \"><svg version=\"1.1\" id=\"sun\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"y=\"0px\" width=\"10px\" height=\"10px\" viewBox=\"0 0 10 10\" enable-background=\"new 0 0 10 10\" xml:space=\"preserve\"style=\"opacity: 1; margin-left: 0px; margin-top: 0px;\"><g><path fill=\"none\"d=\"M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z\"></path><path fill=\"none\"d=\"M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z\"></path><path fill=\"none\"d=\"M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z\"></path><path fill=\"none\"d=\"M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z\"></path><path fill=\"none\"d=\"M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z\"></path><path fill=\"none\"d=\"M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z\"></path><path fill=\"none\"d=\"M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z\"></path><path fill=\"none\"d=\"M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z\"></path><path fill=\"none\"d=\"M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z\"></path><path fill=\"none\"d=\"M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z\"></path><path fill=\"none\"d=\"M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z\"></path><path fill=\"none\"d=\"M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z\"></path><path fill=\"none\"d=\"M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z\"</path></g></svg><svg version=\"1.1\" id=\"cloud\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"x=\"0px\" y=\"0px\" width=\"110px\" height=\"110px\" viewBox=\"0 0 10 10\" enable-background=\"new 0 0 10 10\"xml:space=\"preserve\"><path fill=\"none\"d=\"M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z\"></path></svg><div class=\"rain\"><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span></div><div class=\"artitalk_loading_text\" id=\"loading_txt\">" + langbase.loadingTxT + "</div></div></div>";
artitalkVar.operare_artitalk_content = "<input type=\"file\" id=\"myimg\" onchange=\"imgChange(this)\" style=\"display: none\" accept=\"image/*\"/><input type=\"file\" id=\"myaudio\" onchange=\"audioChange(this)\" style=\"display: none\" accept=\"audio/*\"><input type=\"file\" id=\"myvideo\" onchange=\"videoChange(this)\" style=\"display: none\" accept=\"video/*\"><div id=\"shade\" class=\"c1 hide\"></div><div id=\"shuoshuo-modal\" class=\"c2 hide\"><center><p>" + langbase.text7 + "：<input type=\"text\" class=\"shuoshuo_input_log\" id=\"username\"/></p><p>" + langbase.text8 + "：<input type=\"password\" class=\"shuoshuo_input_log\"  id=\"pwd\"/></p><p><input type=\"button\" value=\"" + langbase.text9 + "\" class=\"at_button\" onclick=\"Login();\">&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"button\" value=\"" + langbase.text10 + "\"  class=\"at_button\" onclick=\"Hide();\"></p></center><center><div id=\"logw\"></div></center></div><div id=\"userinfo\" class=\"c2 hide\"><center><p><div id=\"status\"></div></p><p><input type=\"button\" class=\"at_button\" value=\"" + langbase.text5 + "\" onclick=\"hideuser();\">&nbsp;&nbsp;&nbsp;&nbsp;<input id=\"tui\" type=\"button\" value=\"" + langbase.text6 + "\" class=\"at_button\" style=\"display: none;\" onclick=\"Louout();\"></p></center></div><div id=\"shanchu\" class=\"c2 hide\"><center><p>" + langbase.text20 + "</p><p><input type=\"button\" class=\"at_button\" value=\"" + langbase.text5 + "\" onclick=\"hide3();\"></p><center></div><div id=\"shanchur\" class=\"c2 hide\"><center><p>" + langbase.text19 + "</p><p><div id=\"delete1\"></div></p><center></div><div id=\"upload_parttwo\" class=\"c2 hide\"><center><p></p><div id=\"status\">" + langbase.text29 + "</div><p><input type=\"button\" class=\"at_button\" value=\"" + langbase.text26 + "\" onclick=\"myimg.click();\"><input type=\"button\" class=\"at_button\" value=\"" + langbase.text27 + "\" onclick=\"myaudio.click();\"><input type=\"button\" class=\"at_button\" value=\"" + langbase.text28 + "\" onclick=\"myvideo.click();\"><input type=\"button\" class=\"at_button\" value=\"" + langbase.text10 + "\" onclick=\"upload_out();\"></p></center></div>";
artitalkVar.operare_artitalk = document.createElement("div");
artitalkVar.operare_artitalk.id = "operare_artitalk";
document.body.append(artitalkVar.operare_artitalk);
document.getElementById("operare_artitalk").innerHTML = artitalkVar.operare_artitalk_content;
if (artitalkVar.lazy == 0) {
    artitalkVar.lazys = "";
    artitalkVar.sting = artitalkVar.lazys + artitalkVar.sting;
} else {
    artitalkVar.sting = artitalkVar.lazys + artitalkVar.sting;
}
document.getElementById("artitalk_main").innerHTML = artitalkVar.sting;

if (document.all) {
    window.attachEvent('onload', seecontent(0, 0)) //IE中
} else {
    window.addEventListener('load', seecontent(0, 0), false); //firefox
};

function preview_ohuo() {
    if (document.getElementById("preview").className.indexOf('preview_now') !== -1) {
        document.getElementById('preview').classList.remove('preview_now');
    } else {
        document.getElementById('preview').classList.add('preview_now');
    }
}

function preview() {
    var pre = document.getElementById("neirong").value;
    for (var key in artitalkVar.atemoji_array) {
        var key_at = "[" + key + "]";
        var emoji_at = "<img class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array[key] + "'/>";
        while (pre.indexOf(key_at) != -1) {
            pre = pre.replace(key_at, emoji_at);
        }
    }
    for (var key in artitalkVar.atemoji_array_bb) {
        var key_at = "[" + key + "]";
        var emoji_at = "<img class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array_bb[key] + "'/>";
        while (pre.indexOf(key_at) != -1) {
            pre = pre.replace(key_at, emoji_at);
        }
    }
    for (var key in artitalkVar.atemoji_array_qq) {
        var key_at = "[" + key + "]";
        var emoji_at = "<img class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array_qq[key] + "'/>";
        while (pre.indexOf(key_at) != -1) {
            pre = pre.replace(key_at, emoji_at);
        }
    }
    for (var key in artitalkVar.atemoji_array_tb) {
        var key_at = "[" + key + "]";
        var emoji_at = "<img class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array_tb[key] + "'/>";
        while (pre.indexOf(key_at) != -1) {
            pre = pre.replace(key_at, emoji_at);
        }
    }
    var converter = new showdown.Converter(),
        html = converter.makeHtml(pre);
    document.getElementById("preview").innerHTML = html;
}

artitalkVar.shuopage = 0;

function shuoshuo_readmore() {
    //   alert(artitalkVar.shuopage);
    el_fadeout("readmore");
    el_fadein("lazy");
    // $('#readmore').fadeOut();
    // $('#lazy').fadeIn();
    artitalkVar.shuopage = artitalkVar.shuopage + 1;
    seecontent(artitalkVar.shuopage, 0);
}

function savecontent() {
    var img3;
    var currentUser = AV.User.current();
    if (currentUser) {
        // console.log(currentUser.attributes.img);
        img3 = currentUser.attributes.img;
    } else {
        document.getElementById("logw").innerHTML = "<center><pre><code>" + langbase.text15 + "</code></pre></center>";
        artitalk();
        return;
    }

    var shuoshuo = document.getElementById("neirong").value;


    for (var key in artitalkVar.atemoji_array) {
        var key_at = "[" + key + "]";
        var emoji_at = "<img class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array[key] + "'/>";
        while (shuoshuo.indexOf(key_at) != -1) {
            shuoshuo = shuoshuo.replace(key_at, emoji_at);
        }
    }
    for (var key in artitalkVar.atemoji_array_bb) {
        var key_at = "[" + key + "]";
        var emoji_at = "<img class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array_bb[key] + "'/>";
        while (shuoshuo.indexOf(key_at) != -1) {
            shuoshuo = shuoshuo.replace(key_at, emoji_at);
        }
    }
    for (var key in artitalkVar.atemoji_array_qq) {
        var key_at = "[" + key + "]";
        var emoji_at = "<img class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array_qq[key] + "'/>";
        while (shuoshuo.indexOf(key_at) != -1) {
            shuoshuo = shuoshuo.replace(key_at, emoji_at);
        }
    }
    for (var key in artitalkVar.atemoji_array_tb) {
        var key_at = "[" + key + "]";
        var emoji_at = "<img class='atemoji gallery-group-img' src='" + artitalkVar.atemoji_array_tb[key] + "'/>";
        while (shuoshuo.indexOf(key_at) != -1) {
            shuoshuo = shuoshuo.replace(key_at, emoji_at);
        }
    }
    var img2 = document.getElementById("touxiang").value;
    if (img2 != "") {
        img3 = img2;
    }
    var converte = new showdown.Converter(),
        html = converte.makeHtml(shuoshuo);
    var currentUser = AV.User.current();

    if (shuoshuo == "") {
        document.getElementById('preview').classList.remove('preview_now');
        document.getElementById("preview").innerHTML = "<center><pre><code>" + langbase.text16 + "</code></pre></center>";
        return;
    }
    
    var oss = "";
    oss = boInfo.os;
    var TestObject = AV.Object.extend('shuoshuo');
    var testObject = new TestObject();
    testObject.set('content', html);
    testObject.set('os', oss);
    testObject.set('imgurl', img3);
    testObject.set('star_init', "1");
    // $('#lazy').fadeIn();
    el_fadein("lazy");
    testObject.save().then(function (res) {
        let star = AV.Object.extend('star');
        var at_star = new star();
        var did = res.id;
        at_star.set('perid', did);
        at_star.set('star', 0);
        at_star.save().then(function () {
            // location.reload();
            document.getElementById("ccontent").innerHTML = "";
            document.getElementById("neirong").value = "";
            preview();
            seecontent(0, 1);
        });
    })
}

artitalkVar.mid = "";

//点赞
function artitalk_star(id) {
    var query = new AV.Query('star');
    query.equalTo('perid', id);
    query.find().then(res => {
        res.forEach(function (atom) {
            var star_now = atom.attributes.star;
            var star_final = star_now + 1;
            var star_id = atom.id;
            // console.log(star_final,star_id);
            let todo = AV.Object.createWithoutData('star', star_id);
            todo.set('star', star_final);
            todo.save().then(function () {
                var id_middle = "artitalk_star_svg_" + id;
                document.getElementById(id).innerText = star_final;
                document.getElementById(id_middle).innerHTML = artitalkVar.stared_svg;
            });
        })
    })
}

artitalkVar.stared_svg = "<svg t=\"1593770313039\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2091\" width=\"16\" height=\"16\" fill=\"" + artitalkVar.color3 + "\"><path d=\"M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253\" fill=\"\" p-id=\"2092\"></path><path d=\"M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819\" fill=\"\" p-id=\"2093\"></path></svg>";

function artitalk_pjax() {
    delete window.AV;
    var s = document.createElement('script');
    s.src = "https://cdn1.lncld.net/static/js/3.0.4/av-min.js";
    (document.head || document.body).appendChild(s);
}

function seecontent(spage, flag) {
    var string = "";
    if (AV.applicationId && AV.applicationId != window.artitalkConfig.appId) {
        // console.log(AV.applicationId);
        artitalk_pjax();
    }
    if (spage == 0 && flag == 0) {
        if (typeof (window.artitalkConfig.serverURL) == "undefined") {
            AV.init({
                appId: window.artitalkConfig.appId,
                appKey: window.artitalkConfig.appKey,
            });
        } else {
            AV.init({
                appId: window.artitalkConfig.appId,
                appKey: window.artitalkConfig.appKey,
                serverURL: window.artitalkConfig.serverURL,
            });
        }
    }
    var currentUser = AV.User.current();
    if (currentUser) {
        // $('#key').fadeOut();
        // el_fadeout("key");
    }
    var query = new AV.Query('shuoshuo');
    var shuoshuo_per = 0;
    query.descending('createdAt');
    query.limit(artitalkVar.per);
    query.skip(artitalkVar.per * spage); // 
    query.find().then(function (remarks) {
        artitalkVar.mid = "";
        remarks.forEach(function (atom) {
            shuoshuo_per = shuoshuo_per + 1;
            var did = atom.id;
            var star_query = new AV.Query('star');
            //query.include('user');
            star_query.equalTo('perid', did);
            var uncle = atom.attributes.content;
            var star_init = atom.attributes.star_init;
            // console.log(star_init);
            if (typeof (star_init) == "undefined") {
                let star = AV.Object.extend('star');
                var at_star = new star();
                at_star.set('perid', did);
                at_star.set('star', 0);
                at_star.save().then(function () {
                    let todo = AV.Object.createWithoutData('shuoshuo', did);
                    todo.set('star_init', "1");
                    todo.save();
                });
            }
            star_query.find().then(function (res) {
                res.forEach(function (atom) {
                    var star_now = atom.attributes.star;
                    document.getElementById(did).innerText = star_now;
                })
            })
            // console.log(uncle);
            // uncle.replace('<p>','');
            var OS = atom.attributes.os;
            var fake = atom.createdAt;
            var touimg;
            var OS_svg = "";
            if (OS == "Windows") {
                OS_svg = "<svg t=\"1591348521231\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"16474\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M412.224 511.904c-47.712-24.512-94.08-36.96-137.888-36.96-5.952 0-11.936 0.192-17.952 0.704-55.872 4.64-106.912 19.36-139.744 30.816-8.704 3.2-17.632 6.56-26.816 10.304l-89.824 311.392c61.696-22.816 116.288-33.952 166.272-33.952 80.832 0 139.52 30.208 188 61.312 22.976-77.92 78.048-266.08 94.496-322.336-11.936-7.296-24.064-14.56-36.512-21.312zM528.352 591.072l-90.432 314.144c26.816 15.36 117.088 64.064 186.208 64.064 55.808 0 118.24-14.304 190.848-43.808l86.368-301.984c-58.624 18.912-114.88 28.512-167.456 28.512-95.936 0-163.104-31.104-205.504-60.96zM292.832 368.8c77.12 0.8 134.144 30.208 181.408 60.512l92.768-317.344c-19.552-11.2-70.816-39.104-107.872-48.608-24.384-5.696-50.016-8.608-77.216-8.608-51.808 0.96-108.384 13.952-172.896 39.808l-88.448 310.592c64.8-24.448 120.64-36.352 172.096-36.352 0.032 0 0.128 0 0.128 0zM1024 198.112c-58.816 22.816-116.192 34.464-171.04 34.464-91.68 0-159.296-31.808-203.104-62.368l-91.936 318.24c61.76 39.712 128.288 59.872 198.112 59.872 56.96 0 115.936-13.664 175.456-40.672l-0.192-2.208 3.744-0.896 88.928-306.432z\" p-id=\"16475\" fill=\"" + artitalkVar.color3 + "\"></path></svg>" + " ";
            } else if (OS == "Android") {
                OS_svg = "<svg t=\"1591349177001\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"17355\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M391.405714 276.004571a22.308571 22.308571 0 0 0 0-44.544c-11.995429 0-21.723429 10.276571-21.723428 22.272s9.728 22.272 21.723428 22.272z m241.152 0c11.995429 0 21.723429-10.276571 21.723429-22.272s-9.728-22.272-21.723429-22.272a22.308571 22.308571 0 0 0 0 44.544zM168.539429 381.147429a58.514286 58.514286 0 0 1 58.294857 58.294857v245.723428c0 32.585143-25.709714 58.843429-58.294857 58.843429S109.696 717.714286 109.696 685.165714v-245.723428c0-32 26.294857-58.294857 58.843429-58.294857z m605.732571 10.861714v380.562286c0 34.852571-28.013714 62.866286-62.281143 62.866285h-42.861714v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429s-58.843429-26.294857-58.843428-58.843429v-129.718857H472.594286v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429l-0.585143-129.718857H312.594286a62.683429 62.683429 0 0 1-62.866286-62.866285V392.009143h524.580571z m-132.571429-231.424c80.018286 41.142857 134.290286 119.990857 134.290286 210.870857H247.424c0-90.843429 54.272-169.728 134.838857-210.870857L341.705143 85.723429a8.338286 8.338286 0 0 1 2.852571-11.446858c3.986286-1.718857 9.142857-0.585143 11.446857 3.437715L397.147429 153.161143c34.852571-15.433143 73.728-23.990857 114.870857-23.990857s80.018286 8.557714 114.870857 23.990857l41.142857-75.446857c2.304-3.986286 7.424-5.156571 11.446857-3.437715a8.338286 8.338286 0 0 1 2.852572 11.446858zM914.267429 439.442286v245.723428c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429v-245.723428a58.148571 58.148571 0 0 1 58.294857-58.294857c32.585143 0 58.843429 25.709714 58.843429 58.294857z\" fill=\"" + artitalkVar.color3 + "\" p-id=\"17356\"></path></svg>" + " ";
            } else if (OS == "Linux") {
                OS_svg = "<svg t=\"1591349455279\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"17896\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M833.828 772.167c-14.708-27.427-28.724-65.173-32.06-95.097-7.064-63.345 7.001-95.581-26.311-157.655-20.001-37.27-47.167-69.818-69.762-105.374-57.008-89.708-35.862-181.666-78.106-273.828-14.677-32.021-39.272-58.288-73.372-69.27-40.023-12.889-88.039-6.905-123.821 15.09-97.955 60.213-26.601 240.65-82.234 332.558-34.997 57.817-72.677 108.993-92.906 175.374-15.962 52.376-11.905 116.451-74.135 139.232-16.782 6.143-41.737 5.268-50.966 23.624-5.79 11.518-1.802 24.689 0.951 36.449 2.356 10.066 3.024 19.861 1.87 30.14-1.651 14.71-7.417 28.869-8.274 43.641-0.878 15.142 8.565 24.551 21.704 30.534 47.398 21.585 113.582 34.279 164.669 43.764 66.028 12.258 59.608-7.377 115.821-23.029 39.692-11.052 88.466-13.955 129.206-6.827 43.073 7.536 72.966 44.046 112.09 48.73 33.22 0 210.129-91.293 212.144-131.077 1.811-35.802-33.736-33.163-46.508-56.979zM561.696 188.612c34.429 24.892-1.788 99.81-14.799 87.114 41.625-32.641-34.982-83.122-29.425-11.704-53.249-11.693-3.247-109.731 44.224-75.41z m-4.039 117.923c1.857 28.37-64.491 48.349-85.296 56.455-79.455-0.65-53.966-82.141 7.617-88.858 11.889-1.296 76.451 13.646 77.679 32.403zM407.938 198.841c42.337-29.134 70.265 43.258 33.357 66.249 16.796-88.043-79.787-11.981-12.48 11.418-26.974 29.286-46.681-59.91-20.877-77.667z m-57.874 731.028c-38.514-10.84-181.601-28.379-200.949-63.937-0.276-0.507-0.351-2.272-0.282-4.883-0.019-0.032-0.042-0.063-0.06-0.095-0.833-1.415-0.113-8.165 1.246-16.547 1.879-19.977 5.394-46.894 6.514-49.347 12.905-28.267 12.771-23.836 21.86-26.291 5.612-3.079 13.887-7.607 27.549-19.429 37.781-32.691 49.648-51.05 71.076-37.382 8.427 2.949 16.297 11.207 25.986 25.067a570.9 570.9 0 0 1 8.53 10.204c16.954 20.727 55.205 71.093 68.786 114.074 13.447 30 13.992 58.501-30.256 68.566z m290.721-232.992c-16.92 43.195-1.196 82.899-35.488 120.646-58.579 64.48-168.292 61.287-220.377 1.598 61.991-24.918-79.397-135.334-84.198-181.037-10.461-99.563 81.484-201.457 102.457-296.773 77.359 82.013 125.198-33.75 189.934 21.718 50.436 43.215 102.409 212.603 87.712 277.829-8.345 37.034-32.364 36.425-40.04 56.019z m103.371 199.109c-159.991 95.734-70.13-147.276-65.785-178.44 11.336 103.265 74.062 18.695 110.579 7.453-17.789 5.477 57.616 96.436 56.788 86.041 3.123 39.223-63.176 61.965-101.582 84.946z\" fill=\"" + artitalkVar.color3 + "\" p-id=\"17897\"></path></svg>" + " ";
            } else if (OS == "iOS") {
                OS_svg = "<svg t=\"1591349632686\"  viewBox=\"0 0 1084 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"18688\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z\" p-id=\"18689\" fill=\"" + artitalkVar.color3 + "\"></path></svg>" + " ";
            } else if (OS == "Mac") {
                OS_svg = "<svg t=\"1591349632686\"  viewBox=\"0 0 1084 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"18688\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z\" p-id=\"18689\" fill=\"" + artitalkVar.color3 + "\"></path></svg>" + " ";
            } else {
                OS_svg = "<svg t=\"1591349738696\"  viewBox=\"0 0 1168 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"20407\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M787.333831 588.946093a75.189984 75.189984 0 0 0-75.093984 75.092984 75.189984 75.189984 0 0 0 75.093984 75.093984 75.165984 75.165984 0 0 0 75.067984-75.093984 75.165984 75.165984 0 0 0-75.067984-75.092984m0 222.841953a147.919968 147.919968 0 0 1-147.749968-147.748969c0-81.455982 66.292986-147.747968 147.749968-147.747968 81.431983 0 147.747968 66.291986 147.747968 147.747968 0 81.480982-66.315986 147.748968-147.747968 147.748969m89.452981 102.106978c0.342 0.244 1.317 0.585 2.315999 0.585h0.122l71.484985-39.496992c-1.706-4.022999-9.605998-23.478995-9.605998-43.739991a113.858976 113.858976 0 0 1 107.739977-113.613975c0.853-4.729999 5.557999-31.524993 5.557998-51.639989s-4.704999-46.88399-5.559998-51.637989a113.858976 113.858976 0 0 1-107.737977-113.565976c0-20.357996 7.923998-39.813991 9.605998-43.81299l-70.313985-39.057992-0.293-0.025a5.339999 5.339999 0 0 0-2.706 0.732 196.753958 196.753958 0 0 1-26.014994 21.819995c-21.699995 15.239997-42.153991 22.967995-60.951987 22.967995-18.919996 0-39.594991-7.874998-61.390987-23.405995a194.705958 194.705958 0 0 1-26.160994-22.283995 5.777999 5.777999 0 0 0-2.729999-0.707h-0.245l-72.824985 40.032992c1.706 4.046999 9.579998 23.479995 9.579998 43.73999A113.858976 113.858976 0 0 1 528.896886 614.350088c-0.854 4.729999-5.509999 31.524993-5.509998 51.639989s4.655999 46.90799 5.533998 51.661989a113.858976 113.858976 0 0 1 107.763977 113.589975c0 20.334996-7.972998 39.863991-9.679998 43.788991l68.973985 38.545992h0.146c1.024 0 1.95-0.365 2.317-0.585a200.849957 200.849957 0 0 1 26.428994-23.161995c22.088995-16.188997 43.079991-24.429995 62.414987-24.429995 19.552996 0 40.715991 8.387998 62.949986 24.917995 14.921997 11.068998 25.259995 22.185995 26.551995 23.575995m22.673995 108.397976c-13.774997-0.025-27.135994-5.704999-35.765993-15.213996-11.775997-12.896997-49.005989-46.44599-79.530982-46.44599-30.280993 0-68.119985 33.767993-78.993984 45.54399-8.606998 9.386998-21.869995 14.969997-35.499992 14.969997-6.483999 0-12.603997-1.243-18.186996-3.706l-0.975-0.414-92.69698-51.833988-0.926-0.683a44.46999 44.46999 0 0 1-14.920996-53.735989c0.049-0.146 8.532998-19.699996 8.532998-37.594992a98.376979 98.376979 0 0 0-98.254979-98.254978h-3.900999c-15.505997 0-28.159994-13.799997-32.182993-35.108993-0.341-1.706-7.923998-42.178991-7.923999-74.044984 0-31.913993 7.557998-72.361984 7.899999-74.117984 4.119999-21.576995 16.992996-35.449992 32.816993-35.083993h3.266999a98.400979 98.400979 0 0 0 98.279979-98.303978c0-17.846996-8.484998-37.399992-8.559998-37.619992a44.34899 44.34899 0 0 1 15.068996-53.661989l0.95-0.658 97.839979-53.759988 1.025-0.415c5.485999-2.364999 11.507998-3.534999 17.895996-3.534999 13.604997 0 26.891994 5.436999 35.595992 14.629997 11.579998 12.115997 48.17699 43.640991 77.774984 43.64099 29.354994 0 65.755986-30.914993 77.287983-42.812991 8.654998-8.996998 21.844995-14.335997 35.302992-14.335997 6.509999 0 12.653997 1.22 18.285997 3.657l0.974999 0.414 94.47698 52.516988 0.95 0.658c16.895996 11.751997 23.332995 34.889993 14.945997 53.735989-0.05 0.146-8.532998 19.699996-8.532999 37.545992a98.400979 98.400979 0 0 0 98.254979 98.279978h3.29c15.775997-0.34 28.719994 13.506997 32.817993 35.107993 0.317 1.707 7.899998 42.203991 7.899998 74.069984 0 31.889993-7.582998 72.410984-7.949998 74.117984-4.045999 21.551995-16.991996 35.424992-32.766993 35.059993h-3.291a98.400979 98.400979 0 0 0-98.254979 98.278978c0 17.846996 8.483998 37.449992 8.556999 37.619992a44.42199 44.42199 0 0 1-15.017997 53.710989l-0.927 0.683-96.133979 53.100988-0.975 0.415a44.88499 44.88499 0 0 1-17.846996 3.583999z m222.061952-705.339848a48.76199 48.76199 0 1 1-97.523979 0V121.977194c0-13.457997-10.873998-24.453995-24.307995-24.453995H121.829974c-13.262997 0-24.306995 10.970998-24.306995 24.453995v584.995874c0 13.457997 10.873998 24.453995 24.307995 24.453995h219.499953a48.76199 48.76199 0 1 1 0 97.523979H48.908989A48.76199 48.76199 0 0 1 0 780.191052V48.76121C0 21.822215 21.893995 0.00022 48.907989 0.00022h1023.706781a48.76199 48.76199 0 0 1 48.907989 48.76199v268.189942zM219.427953 975.23701c0-26.940994 21.991995-48.76199 48.981989-48.761989h194.607959a48.76199 48.76199 0 1 1 0 97.523979H268.433942a48.76199 48.76199 0 0 1-49.005989-48.76199z\" p-id=\"20408\" fill=\"" + artitalkVar.color3 + "\"></path></svg>" + " ";
            }
            touimg = atom.attributes.imgurl;
            if (typeof (touimg) == "undefined") {
                touimg = "https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png";
            }
            var d = new Date(fake);
            var yincang = 'style="display: none"';
            if (currentUser) {
                yincang = "";
            }

            function shuoshuo_p(shuoshuo_T) {
                return shuoshuo_T < 10 ? '0' + shuoshuo_T : shuoshuo_T
            }
            const resDate = d.getFullYear() + '-' + shuoshuo_p((d.getMonth() + 1)) + '-' + shuoshuo_p(d.getDate())
            const resTime = shuoshuo_p(d.getHours()) + ':' + shuoshuo_p(d.getMinutes()) + ':' + shuoshuo_p(d.getSeconds())
            var shuoshuo_hours = d.getHours();
            var Time_svg;
            if (shuoshuo_hours >= 0 && shuoshuo_hours < 5) {
                Time_svg = "<svg t=\"1591350196611\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24683\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z\" fill=\"" + artitalkVar.color3 + "\" p-id=\"24684\"></path></svg>" + " ";
            } else if (shuoshuo_hours >= 5 && shuoshuo_hours < 6) {
                Time_svg = "<svg t=\"1591350273094\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24973\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z\" fill=\"" + artitalkVar.color3 + "\" p-id=\"24974\"></path></svg>" + " ";
            } else if (shuoshuo_hours >= 6 && shuoshuo_hours < 8) {
                Time_svg = "<svg t=\"1591350470149\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"25217\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z\" fill=\"" + artitalkVar.color3 + "\" p-id=\"25218\"></path></svg>" + " ";
            } else if (shuoshuo_hours >= 8 && shuoshuo_hours < 11) {
                Time_svg = "<svg t=\"1591350526184\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"26011\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z\" p-id=\"26012\" fill=\"" + artitalkVar.color3 + "\"></path></svg>" + " ";
            } else if (shuoshuo_hours >= 11 && shuoshuo_hours < 13) {
                Time_svg = "<svg t=\"1591350817881\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"29283\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0\" p-id=\"29284\" fill=\"" + artitalkVar.color3 + "\"></path></svg>" + " ";
            } else if (shuoshuo_hours >= 13 && shuoshuo_hours < 17) {
                Time_svg = "<svg t=\"1591350596667\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27504\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z\" p-id=\"27505\" fill=\"" + artitalkVar.color3 + "\"></path></svg>" + " ";
            } else if (shuoshuo_hours >= 17 && shuoshuo_hours < 18) {
                Time_svg = "<svg t=\"1591350638906\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27813\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z\" p-id=\"27814\" fill=\"" + artitalkVar.color3 + "\"></path><path d=\"M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z\" p-id=\"27815\" fill=\"" + artitalkVar.color3 + "\"></path></svg>" + " ";
            } else if (shuoshuo_hours >= 18 && shuoshuo_hours < 24) {
                Time_svg = "<svg t=\"1591350675688\"  viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"28653\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z\" p-id=\"28654\" fill=\"" + artitalkVar.color3 + "\"></path></svg>" + " ";
            }
            var star_svg = "<svg xmlns=\"http://www.w3.org/2000/svg\"  onclick='artitalk_star(\"" + did + "\")' viewBox=\"0 0 24 24\" cursor=\"pointer\" width=\"16\" height=\"16\"  fill='" + artitalkVar.color3 + "'><path d=\"M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z\"/></svg>";
            var li = document.createElement('li');
            var cc = "<li><span class=\"shuoshuo_author_img\"><img src=\"" + touimg + "\"class=\"artitalk_avatar gallery-group-img\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\" ><div " + yincang + " class=\"delete_right\" title=\"" + langbase.text23 + "\" onclick=\"shuoshuo_delete(\'" + did + "\')\"><svg t=\"1591347978744\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"14459\" width=\"20\" height=\"20\" style=\"display: inline\" ><path d=\"M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z\" p-id=\"14460\" fill=\"" + artitalkVar.color3 + "\"></path><path d=\"M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z\" p-id=\"14461\" fill=\"" + artitalkVar.color3 + "\"></path></svg></div>" + uncle + "<p class=\"shuoshuo_time\">" + "<span style=\"\"> " + " " + OS_svg + OS + "</span><span>&nbsp&nbsp" + Time_svg + resDate + " " + resTime + "" + "</span><span style='float: right'><span style='vertical-align:top;' id='artitalk_star_svg_" + did + "'>" + star_svg + "</span>&nbsp<span style='vertical-align:top;' id='" + did + "'>loading</span></span></p></span></li>"
            artitalkVar.mid += cc;
        })
        string = document.getElementById("ccontent").innerHTML;
        if (string == "") {
            string = "<ul class=\"cbp_tmtimeline\" id=\"maina\">";
        }
        string = string.replace(/(.*)<\/ul>/, '$1 ');
        string += artitalkVar.mid + '</ul>';
        if (shuoshuo_per === 0 && spage === 0) {
            string = "<ul class=\"cbp_tmtimeline\" id=\"maina\"><li><span class=\"shuoshuo_author_img\"><img src=\"https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png\" class=\"artitalk_avatar gallery-group-img\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\"><p>" + langbase.text24 + "</p><p class=\"shuoshuo_time\"><span style=\"\"> 由Artitalk发表</span><span style=\"float:right;\"><svg t=\"1591350675688\"  viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"28653\" width=\"10\" height=\"10\" style=\"display: inline\"></svg> 2020-04-10 20:35:25</span></p></span></li></ul>";
        }
        document.getElementById("ccontent").innerHTML = string;

        // $('#lazy').fadeOut();
        el_fadeout("lazy");
        if (shuoshuo_per == artitalkVar.per) {
            // $('#readmore').fadeIn();
            el_fadein("readmore");
        }
    });
}


artitalkVar.upload = langbase.textup;
artitalkVar.imgurl = "![](" + artitalkVar.upload + ")";
artitalkVar.personal_url_img;

if (typeof (token_pt) == "undefined") {
    var token_pt = "ZmFjZTE3NTljMTMwNzYzNGM1NGJhMTk0Njg1NDA1MDVjODVlNGEwYg==";
}

artitalkVar.repo_pt_img = window.artitalkConfig.repoImg || "/Artitalk/Artitalk-img2/";

function get_token() {
    var gh_token_user = AV.User.current();
    var gh_token = gh_token_user.attributes.gh_token;
    // console.log(gh_token);
    if (typeof (gh_token) == "undefined") {
        gh_token = window.atob("ZmFjZTE3NTljMTMwNzYzNGM1NGJhMTk0Njg1NDA1MDVjODVlNGEwYg==");
    }
    return gh_token;
}

function uploadimg(file) {
    var mamato = "Bearer " + get_token();
    // console.log(mamato);
    document.getElementById("neirong").value += artitalkVar.imgurl;
    if (artitalkVar.lazy != 0) {
        document.getElementById("loading_txt").innerHTML = langbase.text25;
    }
    // $('#lazy').fadeIn();
    el_fadein("lazy");
    var nameofimg = sha1(file) + ".png";
    var dir1 = nameofimg.slice(0, 2);
    var dir2 = nameofimg.slice(2, 4);
    var picurl = "https://cdn.jsdelivr.net/gh" + artitalkVar.repo_pt_img + dir1 + "/" + dir2 + "/" + nameofimg;
    var settings = {
        "url": "https://api.github.com/repos" + artitalkVar.repo_pt_img + "contents/" + dir1 + "/" + dir2 + "/" + nameofimg,
        "method": "PUT",
        "timeout": 0,
        "async": true,
        "headers": {
            "Authorization": mamato,
            "Content-Type": "text/plain"
        },
        "data": "{\r\n  \"message\": \"" + window.location.host + "\",\r\n  \"content\": \"" + file + "\"\r\n}",
        "error": function (msg) {
            if (msg.statusText == "Unprocessable Entity") {
                // $('#lazy').fadeOut();
                el_fadeout("lazy");
                document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
                var x = document.getElementById("neirong").value;
                artitalkVar.imgurl = "![](" + picurl + ")";
                document.getElementById("neirong").value = x.replace("![](" + artitalkVar.upload + ")", artitalkVar.imgurl);
                artitalkVar.imgurl = "![](" + artitalkVar.upload + ")";
                preview();
            } else {
                // $('#lazy').fadeOut();
                el_fadeout("lazy");
                document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
                var x = document.getElementById("neirong").value;
                document.getElementById("neirong").value = x.replace("![](" + artitalkVar.upload + ")", langbase.text14);
            }
        }
    };
    $.ajax(settings).done(function (response) {
        // $('#lazy').fadeOut();
        el_fadeout("lazy");
        document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
        var x = document.getElementById("neirong").value;
        artitalkVar.imgurl = "![](" + picurl + ")";
        document.getElementById("neirong").value = x.replace("![](" + artitalkVar.upload + ")", artitalkVar.imgurl);
        artitalkVar.imgurl = "![](" + artitalkVar.upload + ")";
        preview();
    });
}

function writeurl() {
    var x = document.getElementById("neirong").value;
    artitalkVar.imgurl = "![](" + artitalkVar.upload + ")";
    document.getElementById("neirong").value = x.replace("![](" + artitalkVar.upload + ")", artitalkVar.imgurl);
    artitalkVar.upload = langbase.textup;
    artitalkVar.imgurl = "![](" + artitalkVar.upload + ")";
}

function checkImgType(file) {
    if (!/\.(jpg|gif|tiff|pip|pipeg|jfif|webp|tif|bmp|png|jpeg|svgz|svg|xbm|dib|jpeg|png|GIF|JPG|PNG|ico)$/.test(file.name)) {
        return false;
    } else {
        return true;
    }
}

function imgChange(img) {
    upload_out();
    const reader = new FileReader();
    reader.onload = function (ev) {
        var imgFile = ev.target.result;
        var base64url = imgFile.replace(/(.*)?,/, '');
        // console.log(imgFile);
        var imgsize = (img.files[0].size / 1024).toFixed(0);
        if (!checkImgType(img.files[0])) {
            // $('#lazy').fadeOut();
            el_fadeout("lazy");
            document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
            document.getElementById('preview').classList.remove('preview_now');
            document.getElementById("preview").innerHTML = "<center><pre><code>" + langbase.text33 + "</code></pre></center>";
            return;
        }
        if (imgsize > artitalkVar.img_limit) {
            // $('#lazy').fadeOut();
            el_fadeout("lazy");
            document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
            document.getElementById('preview').classList.remove('preview_now');
            document.getElementById("preview").innerHTML = "<center><pre><code>" + langbase.text30 + "</code></pre></center>";
        } else {
            uploadimg(base64url);
        }
    }
    reader.readAsDataURL(img.files[0]);
}

document.addEventListener('paste', function (event) {
    var items = event.clipboardData && event.clipboardData.items;
    var file = null;
    if (items && items.length) {
        // 检索剪切板items
        for (var i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                file = items[i].getAsFile();
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    var base64url = reader.result.replace(/(.*)?,/, '');
                    uploadimg(base64url);
                };
                // uploadimg(file);
                // writeurl();
                break;
            }
        }
    }
});

function shuoshuo_emoji_lovefancybox() {
    document.getElementById('switch_1').classList.add('zuiliangdezai');
    document.getElementById('switch_2').classList.remove('zuiliangdezai');
    document.getElementById('switch_3').classList.remove('zuiliangdezai');
    document.getElementById('switch_4').classList.remove('zuiliangdezai');
    if (document.getElementById('shuoshuo_emojiswitch').className.indexOf('hide') !== -1) {
        document.getElementById('shuoshuo_emoji_Tieba').classList.remove('hide');
        document.getElementById("shuoshuo_emoji_BiliBili").innerHTML = artitalkVar.artitalk_emoji_bb;
        document.getElementById("shuoshuo_emoji_Tieba").innerHTML = artitalkVar.artitalk_emoji_tb;
        document.getElementById("shuoshuo_emoji_QQ").innerHTML = artitalkVar.artitalk_emoji_qq;
        document.getElementById("shuoshuo_emoji_custom").innerHTML = artitalkVar.artitalk_emoji;
        document.getElementById('shuoshuo_emojiswitch').classList.remove('hide');
        document.getElementById('shuoshuo_emojiswitch').classList.add('pingjun');
    } else {
        document.getElementById('shuoshuo_emoji_Tieba').classList.add('hide');
        document.getElementById('shuoshuo_emoji_BiliBili').classList.add('hide');
        document.getElementById('shuoshuo_emoji_custom').classList.add('hide');
        document.getElementById('shuoshuo_emoji_QQ').classList.add('hide');
        document.getElementById('shuoshuo_emojiswitch').classList.remove('pingjun');
        document.getElementById('shuoshuo_emojiswitch').classList.add('hide');
    }
}

function artitalk() {
    var currentUser = AV.User.current();
    if (currentUser) {
        // $(".shuoshuo_active").fadeIn();
        el_fadein("shuoshuo_input");
        pic_drag()
    } else {
        document.getElementById("logw").innerHTML = "<center><pre><code>" + langbase.text15 + "</code></pre></center>";
        Show();
    }
}

function Show() {
    document.getElementById('shade').classList.remove('hide');
    document.getElementById('shuoshuo-modal').classList.remove('hide');
}

function Hide() {
    document.getElementById('shade').classList.add('hide');
    document.getElementById('shuoshuo-modal').classList.add('hide');
}

function Login() {
    var password = document.getElementById("pwd").value;
    var username = document.getElementById("username").value;
    AV.User.logIn(username, password).then(function (loginedUser) {
        // $(".shuoshuo_active").fadeIn();
        // document.getElementById("preview").value="";
        document.getElementById("ccontent").innerHTML = "";
        document.getElementById("neirong").value = "";
        // $('#lazy').fadeIn();
        el_fadein("lazy");
        seecontent(0, 1);
        // location.reload();
        Hide();
    }, function (error) {
        document.getElementById("logw").innerHTML = "<center><pre><code>" + langbase.text17 + "</code></pre></center>";
    });
}

function hideuser() {
    document.getElementById('shade').classList.add('hide');
    document.getElementById('userinfo').classList.add('hide');
}

function Louout() {
    AV.User.logOut();
    location.reload();
}

function swtichuser() {
    document.getElementById("logw").innerHTML = "";
    document.getElementById('shade').classList.remove('hide');
    var currentUser = AV.User.current();
    if (currentUser) {
        document.getElementById('userinfo').classList.remove('hide');
        document.getElementById("status").innerHTML = langbase.text4 + ":\t" + currentUser.attributes.username;
        // $("#tui").show();
        el_fadein("tui");
    } else {
        document.getElementById('shuoshuo-modal').classList.remove('hide');
        Show();
    }
}

function hide3() {
    
    document.getElementById('shade').classList.add('hide');
    document.getElementById('shanchu').classList.add('hide');
    // $('#lazy').fadeIn();
    el_fadein("lazy");
    document.getElementById("ccontent").innerHTML = "";
    seecontent(0, 1);
}

function hide4() {
    document.getElementById('shade').classList.add('hide');
    document.getElementById('shanchur').classList.add('hide');
}

function shuoshuo_delete(id) {
    var currentUser = AV.User.current();
    if (currentUser) {
        document.getElementById('shade').classList.remove('hide');
        document.getElementById('shanchur').classList.remove('hide');
        document.getElementById('delete1').innerHTML = "<input type=\"button\" class=\"at_button\" value=\"" + langbase.text5 + "\" onclick=\"really_shanchu(\'" + id + "\')\"><input type=\"button\" class=\"at_button\" value=\"" + langbase.text10 + "\" onclick=\"hide4()\">";
    } else {
        document.getElementById("logw").innerHTML = "<center><pre><code>" + langbase.text15 + "</code></pre></center>";
        Show();
        return;
    }
}

function really_shanchu(id) {
    // alert(id);
    hide4();
    const deletes = AV.Object.createWithoutData('shuoshuo', id);
    deletes.destroy().then(function (success) {
        document.getElementById('shade').classList.remove('hide');
        document.getElementById('shanchu').classList.remove('hide');
    }, function (error) {
        alert(error.rawMessage);
    });
}

// 拖拽上传图片
function pic_drag() {

    function getDropFileCallBack(dropFile) {
        // console.log("all ok")
        if (dropFile.type.match(/image*/)) {
            console.log("YES");
            var reader = new FileReader();
            reader.readAsDataURL(dropFile);
            reader.onload = function () {
                var base64url = reader.result.replace(/(.*)?,/, '');
                uploadimg(base64url);
            };
        } else {
            console.log("此" + dropFile.name + "不是图片文件！");
        }
    }

    var dropZone = document.getElementById("shuoshuo_edit");
    var area = document.getElementById("drag_area");
    var neirong = document.getElementById("neirong");

    function edit_area_back() {
        if (area.style.visibility == "visible") area.style.visibility = "hidden";
        neirong.style.opacity = 1;
    }
    document.addEventListener("dragenter", function (e) {
        e.dataTransfer.dropEffect = 'copy'; // 兼容某些三方应用，如圈点
        e.preventDefault();
        e.stopPropagation();

        if (area.style.visibility == "hidden") area.style.visibility = "visible";
        else {
            var width = dropZone.clientWidth;
            var height = dropZone.clientHeight;
            neirong.style.position = "relative";
            area.style.border = "1px solid rgb(204, 204, 204)";
            area.style.fontSize = "24px";
            area.style.background = "rgba(255,255,255,.7)";
            area.innerText = "请拖拽图片到此处";
            dropZone.style.position = "relative";
            area.style.cssText += "text-align: center;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);";
            area.style.width = width;
            area.style.lineHeight = height + "px";
            area.style.borderRadius = "6px";
            area.style.visibility = "visible";
            neirong.style.opacity = 0.3;
        }
    }, false);

    document.addEventListener("mouseover", function (e) {
        e.preventDefault();
        e.stopPropagation();
        edit_area_back();
    }, false);

    dropZone.addEventListener("drop", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var df = e.dataTransfer;
        var dropFiles = []; // 拖拽的文件，会放到这里
        var dealFileCnt = 0; // 读取文件是个异步的过程，需要记录处理了多少个文件了
        var allFileLen = df.files.length; // 所有的文件的数量，给非Chrome浏览器使用的变量

        edit_area_back();
        // 检测是否已经把所有的文件都遍历过了
        function checkDropFinish() {
            if (dealFileCnt === allFileLen - 1) {
                for (var i = 0; i < allFileLen; i++) {
                    getDropFileCallBack(dropFiles[i]);
                }
            }
            dealFileCnt++;
        }

        if (df.items !== undefined) {
            // Chrome拖拽文件逻辑
            for (var i = 0; i < df.items.length; i++) {
                var item = df.items[i];
                if (item.kind === "file" && item.webkitGetAsEntry().isFile) {
                    var file = item.getAsFile();
                    dropFiles.push(file);
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        getDropFileCallBack(file);
                    }
                    reader.readAsDataURL(file);
                } else if (item.type.match(/plain*/))
                    item.getAsString(function (str) {
                        console.log(str);
                        neirong.value += str;
                    });
            }
        } else {
            // 非Chrome拖拽文件逻辑
            for (var i = 0; i < allFileLen; i++) {
                var dropFile = df.files[i];
                if (dropFile.type) {
                    dropFiles.push(dropFile);
                    checkDropFinish();
                } else {
                    try {
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(dropFile.slice(0, 3));

                        fileReader.addEventListener('load', function (e) {
                            console.log(e, 'load');
                            dropFiles.push(dropFile);
                            checkDropFinish();
                        }, false);

                        fileReader.addEventListener('error', function (e) {
                            console.log(e, 'error，不可以上传文件夹');
                            checkDropFinish();
                        }, false);

                    } catch (e) {
                        console.log(e, 'catch error，不可以上传文件夹');
                        checkDropFinish();
                    }
                }
            }
        }
    }, false);
}
// 拖拽end

//上传ui
function upload_in() {
    if (!window.jQuery) {
        console.log("?????");
        var s = document.createElement('script');
        s.src = "https://libs.baidu.com/jquery/2.0.0/jquery.min.js";
        (document.head || document.body).appendChild(s);
    }
    
    document.getElementById('shade').classList.remove('hide');
    document.getElementById('upload_parttwo').classList.remove('hide');
}

function upload_out() {
    document.getElementById('shade').classList.add('hide');
    document.getElementById('upload_parttwo').classList.add('hide');
}
//上传ui


//上传音乐
function checkaudioType(file) {
    if (!/\.(opus|flac|webm|weba|wav|ogg|m4a|mp3|oga|mid|amr|aiff|wma|au|aac)$/.test(file.name)) {
        return false;
    } else {
        return true;
    }
}

function audioChange(audio) {
    upload_out();
    const reader_audio = new FileReader();
    reader_audio.onload = function (ev) {

        if (!checkaudioType(audio.files[0])) {
            // $('#lazy').fadeOut();
            el_fadeout("lazy");
            document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
            document.getElementById('preview').classList.remove('preview_now');
            document.getElementById("preview").innerHTML = "<center><pre><code>" + langbase.text34 + "</code></pre></center>";
            return;
        }
        var audioFile = ev.target.result;
        var base64url_audio = audioFile.replace(/(.*)?,/, '');
        // console.log(audioFile);
        // console.log(audio.files[0].name);
        var audiosize = (audio.files[0].size / 1024).toFixed(0);
        if (audiosize > artitalkVar.audio_limit) {
            // $('#lazy').fadeOut();
            el_fadeout("lazy");
            document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
            document.getElementById('preview').classList.remove('preview_now');
            document.getElementById("preview").innerHTML = "<center><pre><code>" + langbase.text31 + "</code></pre></center>";
        } else {
            uploadaudio(base64url_audio, audio.files[0].name);
        }
    }
    reader_audio.readAsDataURL(audio.files[0]);
}

artitalkVar.repo_pt_mp3 = window.artitalkConfig.repoMp3 || "/Artitalk/Artitalk-mp3/";

function uploadaudio(file, audioname) {
    var mamato = "Bearer " + get_token();
    if (artitalkVar.lazy != 0) {
        document.getElementById("loading_txt").innerHTML = langbase.text25;
    }
    // $('#lazy').fadeIn();
    el_fadein("lazy");
    var nameofimg = sha1(file) + ".mp3";
    var dir1 = nameofimg.slice(0, 2);
    var dir2 = nameofimg.slice(2, 4);
    var audiourl = "https://cdn.jsdelivr.net/gh" + artitalkVar.repo_pt_mp3 + dir1 + "/" + dir2 + "/" + audioname;
    var settings = {
        "url": "https://api.github.com/repos" + artitalkVar.repo_pt_mp3 + "contents/" + dir1 + "/" + dir2 + "/" + audioname,
        "method": "PUT",
        "timeout": 0,
        "async": true,
        "headers": {
            "Authorization": mamato,
            "Content-Type": "text/plain"
        },
        "data": "{\r\n  \"message\": \"" + window.location.host + "\",\r\n  \"content\": \"" + file + "\"\r\n}",
        "error": function (msg) {
            if (msg.statusText == "Unprocessable Entity") {
                // $('#lazy').fadeOut();
                el_fadeout("lazy");
                document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
                var audiohtml = "<audio controls><source src='" + audiourl + "'></audio>";
                insert_atemoji(audiohtml);
            } else {
                // $('#lazy').fadeOut();
                el_fadeout("lazy");
                document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
                document.getElementById('preview').classList.remove('preview_now');
                document.getElementById("preview").innerHTML = "<center><pre><code>" + langbase.text14 + "</code></pre></center>";
            }
        }
    };
    $.ajax(settings).done(function (response) {
        // $('#lazy').fadeOut();
        el_fadeout("lazy");
        document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
        var audiohtml = "<audio controls><source src='" + audiourl + "'></audio>";
        insert_atemoji(audiohtml);
    });
}
//上传音乐

//上传视频
function checkvideoType(file) {
    if (!/\.(ogm|wmv|mpg|webm|ogv|mov|asx|mpeg|mp4|m4v|avi)$/.test(file.name)) {
        return false;
    } else {
        return true;
    }
}

function videoChange(video) {
    upload_out();
    const reader_video = new FileReader();
    reader_video.onload = function (ev) {

        if (!checkvideoType(video.files[0])) {
            // $('#lazy').fadeOut();
            el_fadeout("lazy");
            document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
            document.getElementById('preview').classList.remove('preview_now');
            document.getElementById("preview").innerHTML = "<center><pre><code>" + langbase.text35 + "</code></pre></center>";
            return;
        }
        var videoFile = ev.target.result;
        var base64url_video = videoFile.replace(/(.*)?,/, '');
        // console.log(base64url_video);
        // console.log(video.files[0].name);
        var videosize = (video.files[0].size / 1024).toFixed(0);
        if (videosize > artitalkVar.video_limit) {
            // $('#lazy').fadeOut();
            el_fadeout("lazy");
            document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
            document.getElementById('preview').classList.remove('preview_now');
            document.getElementById("preview").innerHTML = "<center><pre><code>" + langbase.text32 + "</code></pre></center>";
        } else {
            uploadvideo(base64url_video);
        }
    }
    reader_video.readAsDataURL(video.files[0]);
}

artitalkVar.repo_pt_mp4 = window.artitalkConfig.repoMp4 || "/Artitalk/Artitalk-mp4/";

function uploadvideo(file) {
    var mamato = "Bearer " + get_token();
    if (artitalkVar.lazy != 0) {
        document.getElementById("loading_txt").innerHTML = langbase.text25;
    }
    // $('#lazy').fadeIn();
    el_fadein("lazy");
    var nameofimg = sha1(file) + ".mp4";
    var dir1 = nameofimg.slice(0, 2);
    var dir2 = nameofimg.slice(2, 4);
    var videourl = "https://cdn.jsdelivr.net/gh" + artitalkVar.repo_pt_mp4 + dir1 + "/" + dir2 + "/" + nameofimg;
    var settings = {
        "url": "https://api.github.com/repos" + artitalkVar.repo_pt_mp4 + "contents/" + dir1 + "/" + dir2 + "/" + nameofimg,
        "method": "PUT",
        "timeout": 0,
        "async": true,
        "headers": {
            "Authorization": mamato,
            "Content-Type": "text/plain"
        },
        "data": "{\r\n  \"message\": \"" + window.location.host + "\",\r\n  \"content\": \"" + file + "\"\r\n}",
        "error": function (msg) {
            if (msg.statusText == "Unprocessable Entity") {
                // $('#lazy').fadeOut();
                el_fadeout("lazy");
                document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
                var videohtml = "<video controls width=\"100%\" height=\"auto\"><source src=\"" + videourl + "\"></video>";
                insert_atemoji(videohtml);
            } else {
                // $('#lazy').fadeOut();
                el_fadeout("lazy");
                document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
                document.getElementById('preview').classList.remove('preview_now');
                document.getElementById("preview").innerHTML = "<center><pre><code>" + langbase.text14 + "</code></pre></center>";
            }
        }
    };
    $.ajax(settings).done(function (response) {
        // $('#lazy').fadeOut();
        el_fadeout("lazy");
        document.getElementById("loading_txt").innerHTML = langbase.loadingTxT;
        var videohtml = "<video controls width=\"100%\" max-height=\"200px\" height=\"auto\"><source src=\"" + videourl + "\"></video>";
        insert_atemoji(videohtml);
    });
}
//上传视频