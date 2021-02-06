/**
 * 浏览器识别
 * @author houchuanjie
 */
;(function(window, document) {
	var Engine = function() {
		var name = null;
		var version = null;
	};

	var System = function() {
		var name = null;
		var version = null;
	};

	var Browser = function() {
		var name = null; //浏览器名称
		var version = null; //浏览器版本号
	};
	var Client = function() {
		this.browser = new Browser(),
		this.engine = new Engine(),
		this.system = new System(),
		this.init();
		console.log("Engine ：" + this.engine.name + " " + this.engine.version);
		console.log("Browser：" + this.browser.name + " " + this.browser.version);
		console.log("System ：" + this.system.name + " " + this.system.version);
		return {browser: this.browser, engine: this.engine, system: this.system};
	};
	Client.prototype = {
		init: function(){
			this.judgeBrowser();
			this.judgeSystem();
		},
		judgeBrowser: function() {
			var ua = navigator.userAgent.toString();
			if (/AppleWebKit\/(\S+)/.test(ua)) { //匹配Webkit内核浏览器(Chrome、Safari、新Opera、新Konqueror)
				this.engine.name = "WebKit";
				this.engine.version = RegExp["$1"];
				if (/OPR\/(\S+)/.test(ua)) { //确定是不是引用了Webkit内核的Opera
					this.browser.name = "Opera";
					this.browser.version = RegExp["$1"];
				} else if (/Edge\/(\S+)/.test(ua)) {
					this.browser.name = "Edge";
					this.browser.version = RegExp["$1"];
				} else if (/Chrome\/(\S+)/.test(ua)) { //确定是不是Chrome
					this.browser.name = "Chrome";
					this.browser.version = RegExp["$1"];
				} else if (/konqueror\/(\S+)/.test(ua)) { //
					this.browser.name = "Konqueror";
					this.browser.version = RegExp["$1"];
				} else if (/Safari\/(\S+)/.test(ua)) { //确定是不是高版本（3+）的Safari
					this.browser.name = "Safari";
					if (/Version\/(\S+)/.test(ua)) {
						this.browser.version = RegExp["$1"];
					} else { //近似地确定低版本Safafi版本号
						var SafariVersion = 1;
						var wk = parseFloat(engine.version);
						if (wk < 100) {
							SafariVersion = 1;
						} else if (wk < 312) {
							SafariVersion = 1.2;
						} else if (wk < 412) {
							SafariVersion = 1.3;
						} else {
							SafariVersion = 2;
						}
						this.browser.version = SafariVersion;
					}
				}
			} else if (window.opera) { //只匹配拥有Presto内核的老版本Opera 5+(12.15-)
				this.engine.name = "Presto";
				this.browser.name = "Opera";
				this.engine.version = this.browser.version = window.opera.version();
			} else if (/Opera[\/\s](\S+)/.test(ua)) { //匹配不支持window.opera的Opera 5-或伪装的Opera
				this.engine.name = "Presto";
				this.browser.name = "Opera";
				this.engine.version = browser.version = RegExp["$1"];
			} else if (/KHTML\/(\S+)/.test(ua)) { //KHTML内核
				this.browser.name = "Konqueror";
				this.engine.name = "KHTML";
				this.engine.version = browser.version = RegExp["$1"];
			} else if (/Konqueror\/([^;]+)/.test(ua)) { //Konqueror内核
				this.browser.name = "Konqueror";
				this.engine.name = "Konqueror";
				this.engine.version = browser.version = RegExp["$1"];
			} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) { //判断是不是基于Gecko内核
				this.engine.name = "Gecko";
				this.engine.version = RegExp["$1"];
				if (/Firefox\/(\S+)/.test(ua)) { //确定是不是Firefox
					this.browser.name = "Firefox";
					this.browser.version = RegExp["$1"];
				}
			} else if (/Trident\/([\d\.]+)/.test(ua)) { //确定是否是Trident内核的浏览器（IE8+）
				this.engine.name = "Trident";
				this.engine.version = RegExp["$1"];
				if (/rv\:([\d\.]+)/.test(ua) || /MSIE ([^;]+)/.test(ua)) { //匹配IE8-11+
					this.browser.name = "IE";
					this.browser.version = RegExp["$1"];
				}
			} else if (/MSIE ([^;]+)/.test(ua)) { //匹配IE6、IE7
				this.engine.name = "Trident";
				this.engine.version = this.browser.version - 4.0; //模拟IE6、IE7中的Trident值
				this.browser.name = "IE";
				this.browser.version = RegExp["$1"];
			}
		},
		judgeSystem: function() {
			var ua = navigator.userAgent.toString();
			var p = navigator.platform; //判断操作系统
			this.system.name = p.indexOf("Win") == 0 ? "Windows" : this.system.name;
			this.system.name = p.indexOf("Mac") == 0 ? "Mac" : this.system.name;
			this.system.name = p.indexOf("Linux") > -1 ? "Linux" : p.indexOf("SunOS") > -1 ? "Solaris" : p.indexOf("FreeBSD") > -1 ? "FreeBSD" : p
				.indexOf("X11") > -1 ? "X11" : this.system.name;
			if (this.system.name == "Windows") {
				if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
					if (RegExp["$1"] == "NT") {
						this.system.version = ({
							"5.0": "2000",
							"5.1": "XP",
							"6.0": "Vista",
							"6.1": "7",
							"6.2": "8",
							"6.3": "8.1",
							"10.0": "10"
						})[RegExp["$2"]] || "NT " + RegExp["$2"];
					} else if (RegExp["$1"] == "9x") {
						this.system.version = "ME";
					} else {
						this.system.version = RegExp["$1"];
					}
				}
			}
		}
	};
	window.Client = Client;
}(window, document))