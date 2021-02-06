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

/*Md5*/
!function(n){"use strict";function d(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(n,t,r,e,o,u){return d((c=d(d(t,n),d(e,u)))<<(f=o)|c>>>32-f,r);var c,f}function l(n,t,r,e,o,u,c){return f(t&r|~t&e,n,t,o,u,c)}function v(n,t,r,e,o,u,c){return f(t&e|r&~e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return f(t^r^e,n,t,o,u,c)}function m(n,t,r,e,o,u,c){return f(r^(t|~e),n,t,o,u,c)}function i(n,t){var r,e,o,u;n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var c=1732584193,f=-271733879,i=-1732584194,a=271733878,h=0;h<n.length;h+=16)c=l(r=c,e=f,o=i,u=a,n[h],7,-680876936),a=l(a,c,f,i,n[h+1],12,-389564586),i=l(i,a,c,f,n[h+2],17,606105819),f=l(f,i,a,c,n[h+3],22,-1044525330),c=l(c,f,i,a,n[h+4],7,-176418897),a=l(a,c,f,i,n[h+5],12,1200080426),i=l(i,a,c,f,n[h+6],17,-1473231341),f=l(f,i,a,c,n[h+7],22,-45705983),c=l(c,f,i,a,n[h+8],7,1770035416),a=l(a,c,f,i,n[h+9],12,-1958414417),i=l(i,a,c,f,n[h+10],17,-42063),f=l(f,i,a,c,n[h+11],22,-1990404162),c=l(c,f,i,a,n[h+12],7,1804603682),a=l(a,c,f,i,n[h+13],12,-40341101),i=l(i,a,c,f,n[h+14],17,-1502002290),c=v(c,f=l(f,i,a,c,n[h+15],22,1236535329),i,a,n[h+1],5,-165796510),a=v(a,c,f,i,n[h+6],9,-1069501632),i=v(i,a,c,f,n[h+11],14,643717713),f=v(f,i,a,c,n[h],20,-373897302),c=v(c,f,i,a,n[h+5],5,-701558691),a=v(a,c,f,i,n[h+10],9,38016083),i=v(i,a,c,f,n[h+15],14,-660478335),f=v(f,i,a,c,n[h+4],20,-405537848),c=v(c,f,i,a,n[h+9],5,568446438),a=v(a,c,f,i,n[h+14],9,-1019803690),i=v(i,a,c,f,n[h+3],14,-187363961),f=v(f,i,a,c,n[h+8],20,1163531501),c=v(c,f,i,a,n[h+13],5,-1444681467),a=v(a,c,f,i,n[h+2],9,-51403784),i=v(i,a,c,f,n[h+7],14,1735328473),c=g(c,f=v(f,i,a,c,n[h+12],20,-1926607734),i,a,n[h+5],4,-378558),a=g(a,c,f,i,n[h+8],11,-2022574463),i=g(i,a,c,f,n[h+11],16,1839030562),f=g(f,i,a,c,n[h+14],23,-35309556),c=g(c,f,i,a,n[h+1],4,-1530992060),a=g(a,c,f,i,n[h+4],11,1272893353),i=g(i,a,c,f,n[h+7],16,-155497632),f=g(f,i,a,c,n[h+10],23,-1094730640),c=g(c,f,i,a,n[h+13],4,681279174),a=g(a,c,f,i,n[h],11,-358537222),i=g(i,a,c,f,n[h+3],16,-722521979),f=g(f,i,a,c,n[h+6],23,76029189),c=g(c,f,i,a,n[h+9],4,-640364487),a=g(a,c,f,i,n[h+12],11,-421815835),i=g(i,a,c,f,n[h+15],16,530742520),c=m(c,f=g(f,i,a,c,n[h+2],23,-995338651),i,a,n[h],6,-198630844),a=m(a,c,f,i,n[h+7],10,1126891415),i=m(i,a,c,f,n[h+14],15,-1416354905),f=m(f,i,a,c,n[h+5],21,-57434055),c=m(c,f,i,a,n[h+12],6,1700485571),a=m(a,c,f,i,n[h+3],10,-1894986606),i=m(i,a,c,f,n[h+10],15,-1051523),f=m(f,i,a,c,n[h+1],21,-2054922799),c=m(c,f,i,a,n[h+8],6,1873313359),a=m(a,c,f,i,n[h+15],10,-30611744),i=m(i,a,c,f,n[h+6],15,-1560198380),f=m(f,i,a,c,n[h+13],21,1309151649),c=m(c,f,i,a,n[h+4],6,-145523070),a=m(a,c,f,i,n[h+11],10,-1120210379),i=m(i,a,c,f,n[h+2],15,718787259),f=m(f,i,a,c,n[h+9],21,-343485551),c=d(c,r),f=d(f,e),i=d(i,o),a=d(a,u);return[c,f,i,a]}function a(n){for(var t="",r=32*n.length,e=0;e<r;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function h(n){var t=[];for(t[(n.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;for(var r=8*n.length,e=0;e<r;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function e(n){for(var t,r="0123456789abcdef",e="",o=0;o<n.length;o+=1)t=n.charCodeAt(o),e+=r.charAt(t>>>4&15)+r.charAt(15&t);return e}function r(n){return unescape(encodeURIComponent(n))}function o(n){return a(i(h(t=r(n)),8*t.length));var t}function u(n,t){return function(n,t){var r,e,o=h(n),u=[],c=[];for(u[15]=c[15]=void 0,16<o.length&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(h(t)),512+8*t.length),a(i(c.concat(e),640))}(r(n),r(t))}function t(n,t,r){return t?r?u(t,n):e(u(t,n)):r?o(n):e(o(n))}"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.md5=t}(this);


/*! showdown v 1.9.1 - 02-11-2019 */
(function(){function e(e){"use strict";var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:"Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,description:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,description:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,description:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,description:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",description:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,description:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,description:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,description:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,description:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,description:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},completeHTMLDocument:{defaultValue:!1,description:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,description:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,description:"Split adjacent blockquote blocks",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t={};for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a].defaultValue);return t}function r(e,r){"use strict";var t=r?"Error in "+r+" extension->":"Error in unnamed extension",n={valid:!0,error:""};a.helper.isArray(e)||(e=[e]);for(var s=0;s<e.length;++s){var o=t+" sub-extension "+s+": ",i=e[s];if("object"!=typeof i)return n.valid=!1,n.error=o+"must be an object, but "+typeof i+" given",n;if(!a.helper.isString(i.type))return n.valid=!1,n.error=o+'property "type" must be a string, but '+typeof i.type+" given",n;var l=i.type=i.type.toLowerCase();if("language"===l&&(l=i.type="lang"),"html"===l&&(l=i.type="output"),"lang"!==l&&"output"!==l&&"listener"!==l)return n.valid=!1,n.error=o+"type "+l+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',n;if("listener"===l){if(a.helper.isUndefined(i.listeners))return n.valid=!1,n.error=o+'. Extensions of type "listener" must have a property called "listeners"',n}else if(a.helper.isUndefined(i.filter)&&a.helper.isUndefined(i.regex))return n.valid=!1,n.error=o+l+' extensions must define either a "regex" property or a "filter" method',n;if(i.listeners){if("object"!=typeof i.listeners)return n.valid=!1,n.error=o+'"listeners" property must be an object but '+typeof i.listeners+" given",n;for(var c in i.listeners)if(i.listeners.hasOwnProperty(c)&&"function"!=typeof i.listeners[c])return n.valid=!1,n.error=o+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+c+" must be a function but "+typeof i.listeners[c]+" given",n}if(i.filter){if("function"!=typeof i.filter)return n.valid=!1,n.error=o+'"filter" must be a function, but '+typeof i.filter+" given",n}else if(i.regex){if(a.helper.isString(i.regex)&&(i.regex=new RegExp(i.regex,"g")),!(i.regex instanceof RegExp))return n.valid=!1,n.error=o+'"regex" property must either be a string or a RegExp object, but '+typeof i.regex+" given",n;if(a.helper.isUndefined(i.replace))return n.valid=!1,n.error=o+'"regex" extensions must implement a replace string or function',n}}return n}function t(e,r){"use strict";return"¨E"+r.charCodeAt(0)+"E"}var a={},n={},s={},o=e(!0),i="vanilla",l={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:e(!0),allOn:function(){"use strict";var r=e(!0),t={};for(var a in r)r.hasOwnProperty(a)&&(t[a]=!0);return t}()};a.helper={},a.extensions={},a.setOption=function(e,r){"use strict";return o[e]=r,this},a.getOption=function(e){"use strict";return o[e]},a.getOptions=function(){"use strict";return o},a.resetOptions=function(){"use strict";o=e(!0)},a.setFlavor=function(e){"use strict";if(!l.hasOwnProperty(e))throw Error(e+" flavor was not found");a.resetOptions();var r=l[e];i=e;for(var t in r)r.hasOwnProperty(t)&&(o[t]=r[t])},a.getFlavor=function(){"use strict";return i},a.getFlavorOptions=function(e){"use strict";if(l.hasOwnProperty(e))return l[e]},a.getDefaultOptions=function(r){"use strict";return e(r)},a.subParser=function(e,r){"use strict";if(a.helper.isString(e)){if(void 0===r){if(n.hasOwnProperty(e))return n[e];throw Error("SubParser named "+e+" not registered!")}n[e]=r}},a.extension=function(e,t){"use strict";if(!a.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=a.helper.stdExtName(e),a.helper.isUndefined(t)){if(!s.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return s[e]}"function"==typeof t&&(t=t()),a.helper.isArray(t)||(t=[t]);var n=r(t,e);if(!n.valid)throw Error(n.error);s[e]=t},a.getAllExtensions=function(){"use strict";return s},a.removeExtension=function(e){"use strict";delete s[e]},a.resetExtensions=function(){"use strict";s={}},a.validateExtension=function(e){"use strict";var t=r(e,null);return!!t.valid||(console.warn(t.error),!1)},a.hasOwnProperty("helper")||(a.helper={}),a.helper.isString=function(e){"use strict";return"string"==typeof e||e instanceof String},a.helper.isFunction=function(e){"use strict";return e&&"[object Function]"==={}.toString.call(e)},a.helper.isArray=function(e){"use strict";return Array.isArray(e)},a.helper.isUndefined=function(e){"use strict";return void 0===e},a.helper.forEach=function(e,r){"use strict";if(a.helper.isUndefined(e))throw new Error("obj param is required");if(a.helper.isUndefined(r))throw new Error("callback param is required");if(!a.helper.isFunction(r))throw new Error("callback param must be a function/closure");if("function"==typeof e.forEach)e.forEach(r);else if(a.helper.isArray(e))for(var t=0;t<e.length;t++)r(e[t],t,e);else{if("object"!=typeof e)throw new Error("obj does not seem to be an array or an iterable object");for(var n in e)e.hasOwnProperty(n)&&r(e[n],n,e)}},a.helper.stdExtName=function(e){"use strict";return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},a.helper.escapeCharactersCallback=t,a.helper.escapeCharacters=function(e,r,a){"use strict";var n="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";a&&(n="\\\\"+n);var s=new RegExp(n,"g");return e=e.replace(s,t)},a.helper.unescapeHTMLEntities=function(e){"use strict";return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var c=function(e,r,t,a){"use strict";var n,s,o,i,l,c=a||"",u=c.indexOf("g")>-1,d=new RegExp(r+"|"+t,"g"+c.replace(/g/g,"")),p=new RegExp(r,c.replace(/g/g,"")),h=[];do{for(n=0;o=d.exec(e);)if(p.test(o[0]))n++||(i=(s=d.lastIndex)-o[0].length);else if(n&&!--n){l=o.index+o[0].length;var _={left:{start:i,end:s},match:{start:s,end:o.index},right:{start:o.index,end:l},wholeMatch:{start:i,end:l}};if(h.push(_),!u)return h}}while(n&&(d.lastIndex=s));return h};a.helper.matchRecursiveRegExp=function(e,r,t,a){"use strict";for(var n=c(e,r,t,a),s=[],o=0;o<n.length;++o)s.push([e.slice(n[o].wholeMatch.start,n[o].wholeMatch.end),e.slice(n[o].match.start,n[o].match.end),e.slice(n[o].left.start,n[o].left.end),e.slice(n[o].right.start,n[o].right.end)]);return s},a.helper.replaceRecursiveRegExp=function(e,r,t,n,s){"use strict";if(!a.helper.isFunction(r)){var o=r;r=function(){return o}}var i=c(e,t,n,s),l=e,u=i.length;if(u>0){var d=[];0!==i[0].wholeMatch.start&&d.push(e.slice(0,i[0].wholeMatch.start));for(var p=0;p<u;++p)d.push(r(e.slice(i[p].wholeMatch.start,i[p].wholeMatch.end),e.slice(i[p].match.start,i[p].match.end),e.slice(i[p].left.start,i[p].left.end),e.slice(i[p].right.start,i[p].right.end))),p<u-1&&d.push(e.slice(i[p].wholeMatch.end,i[p+1].wholeMatch.start));i[u-1].wholeMatch.end<e.length&&d.push(e.slice(i[u-1].wholeMatch.end)),l=d.join("")}return l},a.helper.regexIndexOf=function(e,r,t){"use strict";if(!a.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(r instanceof RegExp==!1)throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var n=e.substring(t||0).search(r);return n>=0?n+(t||0):n},a.helper.splitAtIndex=function(e,r){"use strict";if(!a.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,r),e.substring(r)]},a.helper.encodeEmailAddress=function(e){"use strict";var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e=e.replace(/./g,function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else{var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e})},a.helper.padEnd=function(e,r,t){"use strict";return r>>=0,t=String(t||" "),e.length>r?String(e):((r-=e.length)>t.length&&(t+=t.repeat(r/t.length)),String(e)+t.slice(0,r))},"undefined"==typeof console&&(console={warn:function(e){"use strict";alert(e)},log:function(e){"use strict";alert(e)},error:function(e){"use strict";throw e}}),a.helper.regexes={asteriskDashAndColon:/([*_:~])/g},a.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:"<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"},a.Converter=function(e){"use strict";function t(e,t){if(t=t||null,a.helper.isString(e)){if(e=a.helper.stdExtName(e),t=e,a.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void function(e,t){"function"==typeof e&&(e=e(new a.Converter));a.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var s=0;s<e.length;++s)switch(e[s].type){case"lang":u.push(e[s]);break;case"output":d.push(e[s]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}(a.extensions[e],e);if(a.helper.isUndefined(s[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=s[e]}"function"==typeof e&&(e=e()),a.helper.isArray(e)||(e=[e]);var o=r(e,t);if(!o.valid)throw Error(o.error);for(var i=0;i<e.length;++i){switch(e[i].type){case"lang":u.push(e[i]);break;case"output":d.push(e[i])}if(e[i].hasOwnProperty("listeners"))for(var l in e[i].listeners)e[i].listeners.hasOwnProperty(l)&&n(l,e[i].listeners[l])}}function n(e,r){if(!a.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof e+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof r+" given");p.hasOwnProperty(e)||(p[e]=[]),p[e].push(r)}var c={},u=[],d=[],p={},h=i,_={parsed:{},raw:"",format:""};!function(){e=e||{};for(var r in o)o.hasOwnProperty(r)&&(c[r]=o[r]);if("object"!=typeof e)throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");for(var n in e)e.hasOwnProperty(n)&&(c[n]=e[n]);c.extensions&&a.helper.forEach(c.extensions,t)}(),this._dispatch=function(e,r,t,a){if(p.hasOwnProperty(e))for(var n=0;n<p[e].length;++n){var s=p[e][n](e,r,this,t,a);s&&void 0!==s&&(r=s)}return r},this.listen=function(e,r){return n(e,r),this},this.makeHtml=function(e){if(!e)return e;var r={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:u,outputModifiers:d,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return e=e.replace(/¨/g,"¨T"),e=e.replace(/\$/g,"¨D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),e=e.replace(/\u00A0/g,"&nbsp;"),c.smartIndentationFix&&(e=function(e){var r=e.match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+r+"}","gm");return e.replace(t,"")}(e)),e="\n\n"+e+"\n\n",e=a.subParser("detab")(e,c,r),e=e.replace(/^[ \t]+$/gm,""),a.helper.forEach(u,function(t){e=a.subParser("runExtension")(t,e,c,r)}),e=a.subParser("metadata")(e,c,r),e=a.subParser("hashPreCodeTags")(e,c,r),e=a.subParser("githubCodeBlocks")(e,c,r),e=a.subParser("hashHTMLBlocks")(e,c,r),e=a.subParser("hashCodeTags")(e,c,r),e=a.subParser("stripLinkDefinitions")(e,c,r),e=a.subParser("blockGamut")(e,c,r),e=a.subParser("unhashHTMLSpans")(e,c,r),e=a.subParser("unescapeSpecialChars")(e,c,r),e=e.replace(/¨D/g,"$$"),e=e.replace(/¨T/g,"¨"),e=a.subParser("completeHTMLDocument")(e,c,r),a.helper.forEach(d,function(t){e=a.subParser("runExtension")(t,e,c,r)}),_=r.metadata,e},this.makeMarkdown=this.makeMd=function(e,r){function t(e){for(var r=0;r<e.childNodes.length;++r){var a=e.childNodes[r];3===a.nodeType?/\S/.test(a.nodeValue)?(a.nodeValue=a.nodeValue.split("\n").join(" "),a.nodeValue=a.nodeValue.replace(/(\s)+/g,"$1")):(e.removeChild(a),--r):1===a.nodeType&&t(a)}}if(e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),e=e.replace(/>[ \t]+</,">¨NBSP;<"),!r){if(!window||!window.document)throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");r=window.document}var n=r.createElement("div");n.innerHTML=e;var s={preList:function(e){for(var r=e.querySelectorAll("pre"),t=[],n=0;n<r.length;++n)if(1===r[n].childElementCount&&"code"===r[n].firstChild.tagName.toLowerCase()){var s=r[n].firstChild.innerHTML.trim(),o=r[n].firstChild.getAttribute("data-language")||"";if(""===o)for(var i=r[n].firstChild.className.split(" "),l=0;l<i.length;++l){var c=i[l].match(/^language-(.+)$/);if(null!==c){o=c[1];break}}s=a.helper.unescapeHTMLEntities(s),t.push(s),r[n].outerHTML='<precode language="'+o+'" precodenum="'+n.toString()+'"></precode>'}else t.push(r[n].innerHTML),r[n].innerHTML="",r[n].setAttribute("prenum",n.toString());return t}(n)};t(n);for(var o=n.childNodes,i="",l=0;l<o.length;l++)i+=a.subParser("makeMarkdown.node")(o[l],s);return i},this.setOption=function(e,r){c[e]=r},this.getOption=function(e){return c[e]},this.getOptions=function(){return c},this.addExtension=function(e,r){t(e,r=r||null)},this.useExtension=function(e){t(e)},this.setFlavor=function(e){if(!l.hasOwnProperty(e))throw Error(e+" flavor was not found");var r=l[e];h=e;for(var t in r)r.hasOwnProperty(t)&&(c[t]=r[t])},this.getFlavor=function(){return h},this.removeExtension=function(e){a.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],n=0;n<u.length;++n)u[n]===t&&u[n].splice(n,1);for(;0<d.length;++n)d[0]===t&&d[0].splice(n,1)}},this.getAllExtensions=function(){return{language:u,output:d}},this.getMetadata=function(e){return e?_.raw:_.parsed},this.getMetadataFormat=function(){return _.format},this._setMetadataPair=function(e,r){_.parsed[e]=r},this._setMetadataFormat=function(e){_.format=e},this._setMetadataRaw=function(e){_.raw=e}},a.subParser("anchors",function(e,r,t){"use strict";var n=function(e,n,s,o,i,l,c){if(a.helper.isUndefined(c)&&(c=""),s=s.toLowerCase(),e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)o="";else if(!o){if(s||(s=n.toLowerCase().replace(/ ?\n/g," ")),o="#"+s,a.helper.isUndefined(t.gUrls[s]))return e;o=t.gUrls[s],a.helper.isUndefined(t.gTitles[s])||(c=t.gTitles[s])}var u='<a href="'+(o=o.replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback))+'"';return""!==c&&null!==c&&(u+=' title="'+(c=(c=c.replace(/"/g,"&quot;")).replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback))+'"'),r.openLinksInNewWindow&&!/^#/.test(o)&&(u+=' rel="noopener noreferrer" target="¨E95Eblank"'),u+=">"+n+"</a>"};return e=(e=t.converter._dispatch("anchors.before",e,r,t)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,n),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,n),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,n),e=e.replace(/\[([^\[\]]+)]()()()()()/g,n),r.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,function(e,t,n,s,o){if("\\"===n)return t+s;if(!a.helper.isString(r.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var i=r.ghMentionsLink.replace(/\{u}/g,o),l="";return r.openLinksInNewWindow&&(l=' rel="noopener noreferrer" target="¨E95Eblank"'),t+'<a href="'+i+'"'+l+">"+s+"</a>"})),e=t.converter._dispatch("anchors.after",e,r,t)});var u=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,d=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,p=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,h=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,_=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,g=function(e){"use strict";return function(r,t,n,s,o,i,l){var c=n=n.replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback),u="",d="",p=t||"",h=l||"";return/^www\./i.test(n)&&(n=n.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&i&&(u=i),e.openLinksInNewWindow&&(d=' rel="noopener noreferrer" target="¨E95Eblank"'),p+'<a href="'+n+'"'+d+">"+c+"</a>"+u+h}},m=function(e,r){"use strict";return function(t,n,s){var o="mailto:";return n=n||"",s=a.subParser("unescapeSpecialChars")(s,e,r),e.encodeEmails?(o=a.helper.encodeEmailAddress(o+s),s=a.helper.encodeEmailAddress(s)):o+=s,n+'<a href="'+o+'">'+s+"</a>"}};a.subParser("autoLinks",function(e,r,t){"use strict";return e=t.converter._dispatch("autoLinks.before",e,r,t),e=e.replace(p,g(r)),e=e.replace(_,m(r,t)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),a.subParser("simplifiedAutoLinks",function(e,r,t){"use strict";return r.simplifiedAutoLink?(e=t.converter._dispatch("simplifiedAutoLinks.before",e,r,t),e=r.excludeTrailingPunctuationFromURLs?e.replace(d,g(r)):e.replace(u,g(r)),e=e.replace(h,m(r,t)),e=t.converter._dispatch("simplifiedAutoLinks.after",e,r,t)):e}),a.subParser("blockGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("blockGamut.before",e,r,t),e=a.subParser("blockQuotes")(e,r,t),e=a.subParser("headers")(e,r,t),e=a.subParser("horizontalRule")(e,r,t),e=a.subParser("lists")(e,r,t),e=a.subParser("codeBlocks")(e,r,t),e=a.subParser("tables")(e,r,t),e=a.subParser("hashHTMLBlocks")(e,r,t),e=a.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),a.subParser("blockQuotes",function(e,r,t){"use strict";e=t.converter._dispatch("blockQuotes.before",e,r,t),e+="\n\n";var n=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return r.splitAdjacentBlockquotes&&(n=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(n,function(e){return e=e.replace(/^[ \t]*>[ \t]?/gm,""),e=e.replace(/¨0/g,""),e=e.replace(/^[ \t]+$/gm,""),e=a.subParser("githubCodeBlocks")(e,r,t),e=a.subParser("blockGamut")(e,r,t),e=e.replace(/(^|\n)/g,"$1  "),e=e.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){var t=r;return t=t.replace(/^  /gm,"¨0"),t=t.replace(/¨0/g,"")}),a.subParser("hashBlock")("<blockquote>\n"+e+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),a.subParser("codeBlocks",function(e,r,t){"use strict";e=t.converter._dispatch("codeBlocks.before",e,r,t);return e=(e+="¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g,function(e,n,s){var o=n,i=s,l="\n";return o=a.subParser("outdent")(o,r,t),o=a.subParser("encodeCode")(o,r,t),o=a.subParser("detab")(o,r,t),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(l=""),o="<pre><code>"+o+l+"</code></pre>",a.subParser("hashBlock")(o,r,t)+i}),e=e.replace(/¨0/,""),e=t.converter._dispatch("codeBlocks.after",e,r,t)}),a.subParser("codeSpans",function(e,r,t){"use strict";return void 0===(e=t.converter._dispatch("codeSpans.before",e,r,t))&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,n,s,o){var i=o;return i=i.replace(/^([ \t]*)/g,""),i=i.replace(/[ \t]*$/g,""),i=a.subParser("encodeCode")(i,r,t),i=n+"<code>"+i+"</code>",i=a.subParser("hashHTMLSpans")(i,r,t)}),e=t.converter._dispatch("codeSpans.after",e,r,t)}),a.subParser("completeHTMLDocument",function(e,r,t){"use strict";if(!r.completeHTMLDocument)return e;e=t.converter._dispatch("completeHTMLDocument.before",e,r,t);var a="html",n="<!DOCTYPE HTML>\n",s="",o='<meta charset="utf-8">\n',i="",l="";void 0!==t.metadata.parsed.doctype&&(n="<!DOCTYPE "+t.metadata.parsed.doctype+">\n","html"!==(a=t.metadata.parsed.doctype.toString().toLowerCase())&&"html5"!==a||(o='<meta charset="utf-8">'));for(var c in t.metadata.parsed)if(t.metadata.parsed.hasOwnProperty(c))switch(c.toLowerCase()){case"doctype":break;case"title":s="<title>"+t.metadata.parsed.title+"</title>\n";break;case"charset":o="html"===a||"html5"===a?'<meta charset="'+t.metadata.parsed.charset+'">\n':'<meta name="charset" content="'+t.metadata.parsed.charset+'">\n';break;case"language":case"lang":i=' lang="'+t.metadata.parsed[c]+'"',l+='<meta name="'+c+'" content="'+t.metadata.parsed[c]+'">\n';break;default:l+='<meta name="'+c+'" content="'+t.metadata.parsed[c]+'">\n'}return e=n+"<html"+i+">\n<head>\n"+s+o+l+"</head>\n<body>\n"+e.trim()+"\n</body>\n</html>",e=t.converter._dispatch("completeHTMLDocument.after",e,r,t)}),a.subParser("detab",function(e,r,t){"use strict";return e=t.converter._dispatch("detab.before",e,r,t),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(e,r){for(var t=r,a=4-t.length%4,n=0;n<a;n++)t+=" ";return t}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=t.converter._dispatch("detab.after",e,r,t)}),a.subParser("ellipsis",function(e,r,t){"use strict";return e=t.converter._dispatch("ellipsis.before",e,r,t),e=e.replace(/\.\.\./g,"…"),e=t.converter._dispatch("ellipsis.after",e,r,t)}),a.subParser("emoji",function(e,r,t){"use strict";if(!r.emoji)return e;return e=(e=t.converter._dispatch("emoji.before",e,r,t)).replace(/:([\S]+?):/g,function(e,r){return a.helper.emojis.hasOwnProperty(r)?a.helper.emojis[r]:e}),e=t.converter._dispatch("emoji.after",e,r,t)}),a.subParser("encodeAmpsAndAngles",function(e,r,t){"use strict";return e=t.converter._dispatch("encodeAmpsAndAngles.before",e,r,t),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=t.converter._dispatch("encodeAmpsAndAngles.after",e,r,t)}),a.subParser("encodeBackslashEscapes",function(e,r,t){"use strict";return e=t.converter._dispatch("encodeBackslashEscapes.before",e,r,t),e=e.replace(/\\(\\)/g,a.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g,a.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeBackslashEscapes.after",e,r,t)}),a.subParser("encodeCode",function(e,r,t){"use strict";return e=t.converter._dispatch("encodeCode.before",e,r,t),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,a.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeCode.after",e,r,t)}),a.subParser("escapeSpecialCharsWithinTagAttributes",function(e,r,t){"use strict";return e=(e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,r,t)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,function(e){return e.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,a.helper.escapeCharactersCallback)}),e=e.replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi,function(e){return e.replace(/([\\`*_~=|])/g,a.helper.escapeCharactersCallback)}),e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,r,t)}),a.subParser("githubCodeBlocks",function(e,r,t){"use strict";return r.ghCodeBlocks?(e=t.converter._dispatch("githubCodeBlocks.before",e,r,t),e+="¨0",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(e,n,s,o){var i=r.omitExtraWLInCodeBlocks?"":"\n";return o=a.subParser("encodeCode")(o,r,t),o=a.subParser("detab")(o,r,t),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),o="<pre><code"+(s?' class="'+s+" language-"+s+'"':"")+">"+o+i+"</code></pre>",o=a.subParser("hashBlock")(o,r,t),"\n\n¨G"+(t.ghCodeBlocks.push({text:e,codeblock:o})-1)+"G\n\n"}),e=e.replace(/¨0/,""),t.converter._dispatch("githubCodeBlocks.after",e,r,t)):e}),a.subParser("hashBlock",function(e,r,t){"use strict";return e=t.converter._dispatch("hashBlock.before",e,r,t),e=e.replace(/(^\n+|\n+$)/g,""),e="\n\n¨K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n",e=t.converter._dispatch("hashBlock.after",e,r,t)}),a.subParser("hashCodeTags",function(e,r,t){"use strict";e=t.converter._dispatch("hashCodeTags.before",e,r,t);return e=a.helper.replaceRecursiveRegExp(e,function(e,n,s,o){var i=s+a.subParser("encodeCode")(n,r,t)+o;return"¨C"+(t.gHtmlSpans.push(i)-1)+"C"},"<code\\b[^>]*>","</code>","gim"),e=t.converter._dispatch("hashCodeTags.after",e,r,t)}),a.subParser("hashElement",function(e,r,t){"use strict";return function(e,r){var a=r;return a=a.replace(/\n\n/g,"\n"),a=a.replace(/^\n/,""),a=a.replace(/\n+$/g,""),a="\n\n¨K"+(t.gHtmlBlocks.push(a)-1)+"K\n\n"}}),a.subParser("hashHTMLBlocks",function(e,r,t){"use strict";e=t.converter._dispatch("hashHTMLBlocks.before",e,r,t);var n=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],s=function(e,r,a,n){var s=e;return-1!==a.search(/\bmarkdown\b/)&&(s=a+t.converter.makeHtml(r)+n),"\n\n¨K"+(t.gHtmlBlocks.push(s)-1)+"K\n\n"};r.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(e,r){return"&lt;"+r+"&gt;"}));for(var o=0;o<n.length;++o)for(var i,l=new RegExp("^ {0,3}(<"+n[o]+"\\b[^>]*>)","im"),c="<"+n[o]+"\\b[^>]*>",u="</"+n[o]+">";-1!==(i=a.helper.regexIndexOf(e,l));){var d=a.helper.splitAtIndex(e,i),p=a.helper.replaceRecursiveRegExp(d[1],s,c,u,"im");if(p===d[1])break;e=d[0].concat(p)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,a.subParser("hashElement")(e,r,t)),e=a.helper.replaceRecursiveRegExp(e,function(e){return"\n\n¨K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"},"^ {0,3}\x3c!--","--\x3e","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,a.subParser("hashElement")(e,r,t)),e=t.converter._dispatch("hashHTMLBlocks.after",e,r,t)}),a.subParser("hashHTMLSpans",function(e,r,t){"use strict";function a(e){return"¨C"+(t.gHtmlSpans.push(e)-1)+"C"}return e=t.converter._dispatch("hashHTMLSpans.before",e,r,t),e=e.replace(/<[^>]+?\/>/gi,function(e){return a(e)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(e){return a(e)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(e){return a(e)}),e=e.replace(/<[^>]+?>/gi,function(e){return a(e)}),e=t.converter._dispatch("hashHTMLSpans.after",e,r,t)}),a.subParser("unhashHTMLSpans",function(e,r,t){"use strict";e=t.converter._dispatch("unhashHTMLSpans.before",e,r,t);for(var a=0;a<t.gHtmlSpans.length;++a){for(var n=t.gHtmlSpans[a],s=0;/¨C(\d+)C/.test(n);){var o=RegExp.$1;if(n=n.replace("¨C"+o+"C",t.gHtmlSpans[o]),10===s){console.error("maximum nesting of 10 spans reached!!!");break}++s}e=e.replace("¨C"+a+"C",n)}return e=t.converter._dispatch("unhashHTMLSpans.after",e,r,t)}),a.subParser("hashPreCodeTags",function(e,r,t){"use strict";e=t.converter._dispatch("hashPreCodeTags.before",e,r,t);return e=a.helper.replaceRecursiveRegExp(e,function(e,n,s,o){var i=s+a.subParser("encodeCode")(n,r,t)+o;return"\n\n¨G"+(t.ghCodeBlocks.push({text:e,codeblock:i})-1)+"G\n\n"},"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=t.converter._dispatch("hashPreCodeTags.after",e,r,t)}),a.subParser("headers",function(e,r,t){"use strict";function n(e){var n,s;if(r.customizedHeaderId){var o=e.match(/\{([^{]+?)}\s*$/);o&&o[1]&&(e=o[1])}return n=e,s=a.helper.isString(r.prefixHeaderId)?r.prefixHeaderId:!0===r.prefixHeaderId?"section-":"",r.rawPrefixHeaderId||(n=s+n),n=r.ghCompatibleHeaderId?n.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():r.rawHeaderId?n.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():n.replace(/[^\w]/g,"").toLowerCase(),r.rawPrefixHeaderId&&(n=s+n),t.hashLinkCounts[n]?n=n+"-"+t.hashLinkCounts[n]++:t.hashLinkCounts[n]=1,n}e=t.converter._dispatch("headers.before",e,r,t);var s=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),o=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,i=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=(e=e.replace(o,function(e,o){var i=a.subParser("spanGamut")(o,r,t),l=r.noHeaderId?"":' id="'+n(o)+'"',c="<h"+s+l+">"+i+"</h"+s+">";return a.subParser("hashBlock")(c,r,t)})).replace(i,function(e,o){var i=a.subParser("spanGamut")(o,r,t),l=r.noHeaderId?"":' id="'+n(o)+'"',c=s+1,u="<h"+c+l+">"+i+"</h"+c+">";return a.subParser("hashBlock")(u,r,t)});var l=r.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;return e=e.replace(l,function(e,o,i){var l=i;r.customizedHeaderId&&(l=i.replace(/\s?\{([^{]+?)}\s*$/,""));var c=a.subParser("spanGamut")(l,r,t),u=r.noHeaderId?"":' id="'+n(i)+'"',d=s-1+o.length,p="<h"+d+u+">"+c+"</h"+d+">";return a.subParser("hashBlock")(p,r,t)}),e=t.converter._dispatch("headers.after",e,r,t)}),a.subParser("horizontalRule",function(e,r,t){"use strict";e=t.converter._dispatch("horizontalRule.before",e,r,t);var n=a.subParser("hashBlock")("<hr />",r,t);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,n),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,n),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,n),e=t.converter._dispatch("horizontalRule.after",e,r,t)}),a.subParser("images",function(e,r,t){"use strict";function n(e,r,n,s,o,i,l,c){var u=t.gUrls,d=t.gTitles,p=t.gDimensions;if(n=n.toLowerCase(),c||(c=""),e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)s="";else if(""===s||null===s){if(""!==n&&null!==n||(n=r.toLowerCase().replace(/ ?\n/g," ")),s="#"+n,a.helper.isUndefined(u[n]))return e;s=u[n],a.helper.isUndefined(d[n])||(c=d[n]),a.helper.isUndefined(p[n])||(o=p[n].width,i=p[n].height)}r=r.replace(/"/g,"&quot;").replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback);var h='<img src="'+(s=s.replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback))+'" alt="'+r+'"';return c&&a.helper.isString(c)&&(h+=' title="'+(c=c.replace(/"/g,"&quot;").replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback))+'"'),o&&i&&(h+=' width="'+(o="*"===o?"auto":o)+'"',h+=' height="'+(i="*"===i?"auto":i)+'"'),h+=" />"}return e=(e=t.converter._dispatch("images.before",e,r,t)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,n),e=e.replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,function(e,r,t,a,s,o,i,l){return a=a.replace(/\s/g,""),n(e,r,t,a,s,o,0,l)}),e=e.replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,n),e=e.replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,n),e=e.replace(/!\[([^\[\]]+)]()()()()()/g,n),e=t.converter._dispatch("images.after",e,r,t)}),a.subParser("italicsAndBold",function(e,r,t){"use strict";function a(e,r,t){return r+e+t}return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(e,r){return a(r,"<strong><em>","</em></strong>")})).replace(/\b__(\S[\s\S]*?)__\b/g,function(e,r){return a(r,"<strong>","</strong>")})).replace(/\b_(\S[\s\S]*?)_\b/g,function(e,r){return a(r,"<em>","</em>")}):(e=(e=e.replace(/___(\S[\s\S]*?)___/g,function(e,r){return/\S$/.test(r)?a(r,"<strong><em>","</em></strong>"):e})).replace(/__(\S[\s\S]*?)__/g,function(e,r){return/\S$/.test(r)?a(r,"<strong>","</strong>"):e})).replace(/_([^\s_][\s\S]*?)_/g,function(e,r){return/\S$/.test(r)?a(r,"<em>","</em>"):e}),e=r.literalMidWordAsterisks?(e=(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(e,r,t){return a(t,r+"<strong><em>","</em></strong>")})).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(e,r,t){return a(t,r+"<strong>","</strong>")})).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(e,r,t){return a(t,r+"<em>","</em>")}):(e=(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(e,r){return/\S$/.test(r)?a(r,"<strong><em>","</em></strong>"):e})).replace(/\*\*(\S[\s\S]*?)\*\*/g,function(e,r){return/\S$/.test(r)?a(r,"<strong>","</strong>"):e})).replace(/\*([^\s*][\s\S]*?)\*/g,function(e,r){return/\S$/.test(r)?a(r,"<em>","</em>"):e}),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),a.subParser("lists",function(e,r,t){"use strict";function n(e,n){t.gListLevel++,e=e.replace(/\n{2,}$/,"\n");var s=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,o=/\n[ \t]*\n(?!¨0)/.test(e+="¨0");return r.disableForced4SpacesIndentedSublists&&(s=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),e=e.replace(s,function(e,n,s,i,l,c,u){u=u&&""!==u.trim();var d=a.subParser("outdent")(l,r,t),p="";return c&&r.tasklists&&(p=' class="task-list-item" style="list-style-type: none;"',d=d.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return u&&(e+=" checked"),e+=">"})),d=d.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(e){return"¨A"+e}),n||d.search(/\n{2,}/)>-1?(d=a.subParser("githubCodeBlocks")(d,r,t),d=a.subParser("blockGamut")(d,r,t)):(d=(d=a.subParser("lists")(d,r,t)).replace(/\n$/,""),d=(d=a.subParser("hashHTMLBlocks")(d,r,t)).replace(/\n\n+/g,"\n\n"),d=o?a.subParser("paragraphs")(d,r,t):a.subParser("spanGamut")(d,r,t)),d=d.replace("¨A",""),d="<li"+p+">"+d+"</li>\n"}),e=e.replace(/¨0/g,""),t.gListLevel--,n&&(e=e.replace(/\s+$/,"")),e}function s(e,r){if("ol"===r){var t=e.match(/^ *(\d+)\./);if(t&&"1"!==t[1])return' start="'+t[1]+'"'}return""}function o(e,t,a){var o=r.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,i=r.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,l="ul"===t?o:i,c="";if(-1!==e.search(l))!function r(u){var d=u.search(l),p=s(e,t);-1!==d?(c+="\n\n<"+t+p+">\n"+n(u.slice(0,d),!!a)+"</"+t+">\n",l="ul"===(t="ul"===t?"ol":"ul")?o:i,r(u.slice(d))):c+="\n\n<"+t+p+">\n"+n(u,!!a)+"</"+t+">\n"}(e);else{var u=s(e,t);c="\n\n<"+t+u+">\n"+n(e,!!a)+"</"+t+">\n"}return c}return e=t.converter._dispatch("lists.before",e,r,t),e+="¨0",e=t.gListLevel?e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t){return o(r,t.search(/[*+-]/g)>-1?"ul":"ol",!0)}):e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t,a){return o(t,a.search(/[*+-]/g)>-1?"ul":"ol",!1)}),e=e.replace(/¨0/,""),e=t.converter._dispatch("lists.after",e,r,t)}),a.subParser("metadata",function(e,r,t){"use strict";function a(e){t.metadata.raw=e,(e=(e=e.replace(/&/g,"&amp;").replace(/"/g,"&quot;")).replace(/\n {4}/g," ")).replace(/^([\S ]+): +([\s\S]+?)$/gm,function(e,r,a){return t.metadata.parsed[r]=a,""})}return r.metadata?(e=t.converter._dispatch("metadata.before",e,r,t),e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(e,r,t){return a(t),"¨M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(e,r,n){return r&&(t.metadata.format=r),a(n),"¨M"}),e=e.replace(/¨M/g,""),e=t.converter._dispatch("metadata.after",e,r,t)):e}),a.subParser("outdent",function(e,r,t){"use strict";return e=t.converter._dispatch("outdent.before",e,r,t),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=t.converter._dispatch("outdent.after",e,r,t)}),a.subParser("paragraphs",function(e,r,t){"use strict";for(var n=(e=(e=(e=t.converter._dispatch("paragraphs.before",e,r,t)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),s=[],o=n.length,i=0;i<o;i++){var l=n[i];l.search(/¨(K|G)(\d+)\1/g)>=0?s.push(l):l.search(/\S/)>=0&&(l=(l=a.subParser("spanGamut")(l,r,t)).replace(/^([ \t]*)/g,"<p>"),l+="</p>",s.push(l))}for(o=s.length,i=0;i<o;i++){for(var c="",u=s[i],d=!1;/¨(K|G)(\d+)\1/.test(u);){var p=RegExp.$1,h=RegExp.$2;c=(c="K"===p?t.gHtmlBlocks[h]:d?a.subParser("encodeCode")(t.ghCodeBlocks[h].text,r,t):t.ghCodeBlocks[h].codeblock).replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,c),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(d=!0)}s[i]=u}return e=s.join("\n"),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),a.subParser("runExtension",function(e,r,t,a){"use strict";if(e.filter)r=e.filter(r,a.converter,t);else if(e.regex){var n=e.regex;n instanceof RegExp||(n=new RegExp(n,"g")),r=r.replace(n,e.replace)}return r}),a.subParser("spanGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("spanGamut.before",e,r,t),e=a.subParser("codeSpans")(e,r,t),e=a.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=a.subParser("encodeBackslashEscapes")(e,r,t),e=a.subParser("images")(e,r,t),e=a.subParser("anchors")(e,r,t),e=a.subParser("autoLinks")(e,r,t),e=a.subParser("simplifiedAutoLinks")(e,r,t),e=a.subParser("emoji")(e,r,t),e=a.subParser("underline")(e,r,t),e=a.subParser("italicsAndBold")(e,r,t),e=a.subParser("strikethrough")(e,r,t),e=a.subParser("ellipsis")(e,r,t),e=a.subParser("hashHTMLSpans")(e,r,t),e=a.subParser("encodeAmpsAndAngles")(e,r,t),r.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,"<br />\n")):e=e.replace(/  +\n/g,"<br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),a.subParser("strikethrough",function(e,r,t){"use strict";return r.strikethrough&&(e=(e=t.converter._dispatch("strikethrough.before",e,r,t)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(e,n){return function(e){return r.simplifiedAutoLink&&(e=a.subParser("simplifiedAutoLinks")(e,r,t)),"<del>"+e+"</del>"}(n)}),e=t.converter._dispatch("strikethrough.after",e,r,t)),e}),a.subParser("stripLinkDefinitions",function(e,r,t){"use strict";var n=function(e,n,s,o,i,l,c){return n=n.toLowerCase(),s.match(/^data:.+?\/.+?;base64,/)?t.gUrls[n]=s.replace(/\s/g,""):t.gUrls[n]=a.subParser("encodeAmpsAndAngles")(s,r,t),l?l+c:(c&&(t.gTitles[n]=c.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&o&&i&&(t.gDimensions[n]={width:o,height:i}),"")};return e=(e+="¨0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm,n),e=e.replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,n),e=e.replace(/¨0/,"")}),a.subParser("tables",function(e,r,t){"use strict";function n(e){return/^:[ \t]*--*$/.test(e)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(e)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(e)?' style="text-align:center;"':""}function s(e,n){var s="";return e=e.trim(),(r.tablesHeaderId||r.tableHeaderId)&&(s=' id="'+e.replace(/ /g,"_").toLowerCase()+'"'),e=a.subParser("spanGamut")(e,r,t),"<th"+s+n+">"+e+"</th>\n"}function o(e,n){return"<td"+n+">"+a.subParser("spanGamut")(e,r,t)+"</td>\n"}function i(e){var i,l=e.split("\n");for(i=0;i<l.length;++i)/^ {0,3}\|/.test(l[i])&&(l[i]=l[i].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(l[i])&&(l[i]=l[i].replace(/\|[ \t]*$/,"")),l[i]=a.subParser("codeSpans")(l[i],r,t);var c=l[0].split("|").map(function(e){return e.trim()}),u=l[1].split("|").map(function(e){return e.trim()}),d=[],p=[],h=[],_=[];for(l.shift(),l.shift(),i=0;i<l.length;++i)""!==l[i].trim()&&d.push(l[i].split("|").map(function(e){return e.trim()}));if(c.length<u.length)return e;for(i=0;i<u.length;++i)h.push(n(u[i]));for(i=0;i<c.length;++i)a.helper.isUndefined(h[i])&&(h[i]=""),p.push(s(c[i],h[i]));for(i=0;i<d.length;++i){for(var g=[],m=0;m<p.length;++m)a.helper.isUndefined(d[i][m]),g.push(o(d[i][m],h[m]));_.push(g)}return function(e,r){for(var t="<table>\n<thead>\n<tr>\n",a=e.length,n=0;n<a;++n)t+=e[n];for(t+="</tr>\n</thead>\n<tbody>\n",n=0;n<r.length;++n){t+="<tr>\n";for(var s=0;s<a;++s)t+=r[n][s];t+="</tr>\n"}return t+="</tbody>\n</table>\n"}(p,_)}if(!r.tables)return e;return e=t.converter._dispatch("tables.before",e,r,t),e=e.replace(/\\(\|)/g,a.helper.escapeCharactersCallback),e=e.replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,i),e=e.replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm,i),e=t.converter._dispatch("tables.after",e,r,t)}),a.subParser("underline",function(e,r,t){"use strict";return r.underline?(e=t.converter._dispatch("underline.before",e,r,t),e=r.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(e,r){return"<u>"+r+"</u>"})).replace(/\b__(\S[\s\S]*?)__\b/g,function(e,r){return"<u>"+r+"</u>"}):(e=e.replace(/___(\S[\s\S]*?)___/g,function(e,r){return/\S$/.test(r)?"<u>"+r+"</u>":e})).replace(/__(\S[\s\S]*?)__/g,function(e,r){return/\S$/.test(r)?"<u>"+r+"</u>":e}),e=e.replace(/(_)/g,a.helper.escapeCharactersCallback),e=t.converter._dispatch("underline.after",e,r,t)):e}),a.subParser("unescapeSpecialChars",function(e,r,t){"use strict";return e=t.converter._dispatch("unescapeSpecialChars.before",e,r,t),e=e.replace(/¨E(\d+)E/g,function(e,r){var t=parseInt(r);return String.fromCharCode(t)}),e=t.converter._dispatch("unescapeSpecialChars.after",e,r,t)}),a.subParser("makeMarkdown.blockquote",function(e,r){"use strict";var t="";if(e.hasChildNodes())for(var n=e.childNodes,s=n.length,o=0;o<s;++o){var i=a.subParser("makeMarkdown.node")(n[o],r);""!==i&&(t+=i)}return t=t.trim(),t="> "+t.split("\n").join("\n> ")}),a.subParser("makeMarkdown.codeBlock",function(e,r){"use strict";var t=e.getAttribute("language"),a=e.getAttribute("precodenum");return"```"+t+"\n"+r.preList[a]+"\n```"}),a.subParser("makeMarkdown.codeSpan",function(e){"use strict";return"`"+e.innerHTML+"`"}),a.subParser("makeMarkdown.emphasis",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="*";for(var n=e.childNodes,s=n.length,o=0;o<s;++o)t+=a.subParser("makeMarkdown.node")(n[o],r);t+="*"}return t}),a.subParser("makeMarkdown.header",function(e,r,t){"use strict";var n=new Array(t+1).join("#"),s="";if(e.hasChildNodes()){s=n+" ";for(var o=e.childNodes,i=o.length,l=0;l<i;++l)s+=a.subParser("makeMarkdown.node")(o[l],r)}return s}),a.subParser("makeMarkdown.hr",function(){"use strict";return"---"}),a.subParser("makeMarkdown.image",function(e){"use strict";var r="";return e.hasAttribute("src")&&(r+="!["+e.getAttribute("alt")+"](",r+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(r+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(r+=' "'+e.getAttribute("title")+'"'),r+=")"),r}),a.subParser("makeMarkdown.links",function(e,r){"use strict";var t="";if(e.hasChildNodes()&&e.hasAttribute("href")){var n=e.childNodes,s=n.length;t="[";for(var o=0;o<s;++o)t+=a.subParser("makeMarkdown.node")(n[o],r);t+="](",t+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(t+=' "'+e.getAttribute("title")+'"'),t+=")"}return t}),a.subParser("makeMarkdown.list",function(e,r,t){"use strict";var n="";if(!e.hasChildNodes())return"";for(var s=e.childNodes,o=s.length,i=e.getAttribute("start")||1,l=0;l<o;++l)if(void 0!==s[l].tagName&&"li"===s[l].tagName.toLowerCase()){n+=("ol"===t?i.toString()+". ":"- ")+a.subParser("makeMarkdown.listItem")(s[l],r),++i}return(n+="\n\x3c!-- --\x3e\n").trim()}),a.subParser("makeMarkdown.listItem",function(e,r){"use strict";for(var t="",n=e.childNodes,s=n.length,o=0;o<s;++o)t+=a.subParser("makeMarkdown.node")(n[o],r);return/\n$/.test(t)?t=t.split("\n").join("\n    ").replace(/^ {4}$/gm,"").replace(/\n\n+/g,"\n\n"):t+="\n",t}),a.subParser("makeMarkdown.node",function(e,r,t){"use strict";t=t||!1;var n="";if(3===e.nodeType)return a.subParser("makeMarkdown.txt")(e,r);if(8===e.nodeType)return"\x3c!--"+e.data+"--\x3e\n\n";if(1!==e.nodeType)return"";switch(e.tagName.toLowerCase()){case"h1":t||(n=a.subParser("makeMarkdown.header")(e,r,1)+"\n\n");break;case"h2":t||(n=a.subParser("makeMarkdown.header")(e,r,2)+"\n\n");break;case"h3":t||(n=a.subParser("makeMarkdown.header")(e,r,3)+"\n\n");break;case"h4":t||(n=a.subParser("makeMarkdown.header")(e,r,4)+"\n\n");break;case"h5":t||(n=a.subParser("makeMarkdown.header")(e,r,5)+"\n\n");break;case"h6":t||(n=a.subParser("makeMarkdown.header")(e,r,6)+"\n\n");break;case"p":t||(n=a.subParser("makeMarkdown.paragraph")(e,r)+"\n\n");break;case"blockquote":t||(n=a.subParser("makeMarkdown.blockquote")(e,r)+"\n\n");break;case"hr":t||(n=a.subParser("makeMarkdown.hr")(e,r)+"\n\n");break;case"ol":t||(n=a.subParser("makeMarkdown.list")(e,r,"ol")+"\n\n");break;case"ul":t||(n=a.subParser("makeMarkdown.list")(e,r,"ul")+"\n\n");break;case"precode":t||(n=a.subParser("makeMarkdown.codeBlock")(e,r)+"\n\n");break;case"pre":t||(n=a.subParser("makeMarkdown.pre")(e,r)+"\n\n");break;case"table":t||(n=a.subParser("makeMarkdown.table")(e,r)+"\n\n");break;case"code":n=a.subParser("makeMarkdown.codeSpan")(e,r);break;case"em":case"i":n=a.subParser("makeMarkdown.emphasis")(e,r);break;case"strong":case"b":n=a.subParser("makeMarkdown.strong")(e,r);break;case"del":n=a.subParser("makeMarkdown.strikethrough")(e,r);break;case"a":n=a.subParser("makeMarkdown.links")(e,r);break;case"img":n=a.subParser("makeMarkdown.image")(e,r);break;default:n=e.outerHTML+"\n\n"}return n}),a.subParser("makeMarkdown.paragraph",function(e,r){"use strict";var t="";if(e.hasChildNodes())for(var n=e.childNodes,s=n.length,o=0;o<s;++o)t+=a.subParser("makeMarkdown.node")(n[o],r);return t=t.trim()}),a.subParser("makeMarkdown.pre",function(e,r){"use strict";var t=e.getAttribute("prenum");return"<pre>"+r.preList[t]+"</pre>"}),a.subParser("makeMarkdown.strikethrough",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="~~";for(var n=e.childNodes,s=n.length,o=0;o<s;++o)t+=a.subParser("makeMarkdown.node")(n[o],r);t+="~~"}return t}),a.subParser("makeMarkdown.strong",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="**";for(var n=e.childNodes,s=n.length,o=0;o<s;++o)t+=a.subParser("makeMarkdown.node")(n[o],r);t+="**"}return t}),a.subParser("makeMarkdown.table",function(e,r){"use strict";var t,n,s="",o=[[],[]],i=e.querySelectorAll("thead>tr>th"),l=e.querySelectorAll("tbody>tr");for(t=0;t<i.length;++t){var c=a.subParser("makeMarkdown.tableCell")(i[t],r),u="---";if(i[t].hasAttribute("style")){switch(i[t].getAttribute("style").toLowerCase().replace(/\s/g,"")){case"text-align:left;":u=":---";break;case"text-align:right;":u="---:";break;case"text-align:center;":u=":---:"}}o[0][t]=c.trim(),o[1][t]=u}for(t=0;t<l.length;++t){var d=o.push([])-1,p=l[t].getElementsByTagName("td");for(n=0;n<i.length;++n){var h=" ";void 0!==p[n]&&(h=a.subParser("makeMarkdown.tableCell")(p[n],r)),o[d].push(h)}}var _=3;for(t=0;t<o.length;++t)for(n=0;n<o[t].length;++n){var g=o[t][n].length;g>_&&(_=g)}for(t=0;t<o.length;++t){for(n=0;n<o[t].length;++n)1===t?":"===o[t][n].slice(-1)?o[t][n]=a.helper.padEnd(o[t][n].slice(-1),_-1,"-")+":":o[t][n]=a.helper.padEnd(o[t][n],_,"-"):o[t][n]=a.helper.padEnd(o[t][n],_);s+="| "+o[t].join(" | ")+" |\n"}return s.trim()}),a.subParser("makeMarkdown.tableCell",function(e,r){"use strict";var t="";if(!e.hasChildNodes())return"";for(var n=e.childNodes,s=n.length,o=0;o<s;++o)t+=a.subParser("makeMarkdown.node")(n[o],r,!0);return t.trim()}),a.subParser("makeMarkdown.txt",function(e){"use strict";var r=e.nodeValue;return r=r.replace(/ +/g," "),r=r.replace(/¨NBSP;/g," "),r=a.helper.unescapeHTMLEntities(r),r=r.replace(/([*_~|`])/g,"\\$1"),r=r.replace(/^(\s*)>/g,"\\$1>"),r=r.replace(/^#/gm,"\\#"),r=r.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),r=r.replace(/^( {0,3}\d+)\./gm,"$1\\."),r=r.replace(/^( {0,3})([+-])/gm,"$1\\$2"),r=r.replace(/]([\s]*)\(/g,"\\]$1\\("),r=r.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:")});"function"==typeof define&&define.amd?define(function(){"use strict";return a}):"undefined"!=typeof module&&module.exports?module.exports=a:this.showdown=a}).call(this);
//# sourceMappingURL=showdown.min.js.map

'use strict'
const atVersion = "3.2.2";
if(typeof(appID) !== 'undefined'){
    let update = confirm("　　3.x版本更新需要修改一下配置，深感抱歉，但是为了更好的体验不得不这样。\n　　如果不想更换，可以继续使用2.4.2版本，这也是比较成熟的版本了，但是以后不会再维护。更换详情请点击确定前往文档查看");
    if(update == true){
        location.href = 'https://artitalk.js.org/release.html'
    }
}
//emoji init
const atEmojiQQ = {
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
const atEmojiTB = {
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
const atEmojiBB = {
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
var atEmojiQ = "";
var atEmojiT = "";
var atEmojiB = "";
for(let key in atEmojiQQ){
    atEmojiQ = atEmojiQ +  "<img alt='[" + key + "]' title='" + key + "' onclick='insertEmoji(\"[" + key + "]\")' class='atemoji gallery-group-img' src='" + atEmojiQQ[key] + "'/>";
}
for(let key in atEmojiTB){
    atEmojiT = atEmojiT +  "<img alt='[" + key + "]' title='" + key + "' onclick='insertEmoji(\"[" + key + "]\")' class='atemoji gallery-group-img' src='" + atEmojiTB[key] + "'/>";
}
for(let key in atEmojiBB){
    atEmojiB = atEmojiB +  "<img alt='[" + key + "]' title='" + key + "' onclick='insertEmoji(\"[" + key + "]\")' class='atemoji gallery-group-img' src='" + atEmojiBB[key] + "'/>";
}
function Logout(){
    AV.User.logOut();
    location.reload();
}
function insertEmoji(str){
    let now = document.getElementById('neirong');
    let nowlength = now.value.length;
    now.focus();
    if(typeof(document.selection) !== "undefined"){
        document.selection.createRange().text = str;
    }else{
        now.value = now.value.substr(0,now.selectionStart) + str + now.value.substring(now.selectionStart,nowlength);
    }
    preview();
}
function preview(){
    let clickPre = document.getElementById('clickForPreview');
    clickPre.click();
}
function Artitalk(options){
    return new atEvery(options);
}
function atEvery(option){
    let root=this;
    root.init(option);
    return root;
}
atEvery.prototype.init=function(option){
    let root=this;
    root['config']=option;
    console.log(window.AV);
    if(!window.AV){
        let avMin = document.createElement("script");
        avMin.setAttribute("type","text/javascript");
        avMin.src="https://cdn.jsdelivr.net/npm/leancloud-storage@4.10.0/dist/av-min.js";
        document.body.appendChild(avMin);
        if ( window.ActiveXObject || "ActiveXObject" in window){ //判断是否是ie
            if(avMin.readyState){ //判断是否支持readyState
                avMin.onreadystatechange = function() {
                    if(this.readyState == "loaded" || this.readyState == "complete"){
                        // console.log("ie10及以下加载完成");   
                        !!option && root._init();
                        return root;
                    }
                }
            }else{
                avMin.onload = function() {
                    // console.log("ie11及Edge加载完成");   
                    !!option && root._init();
                    return root;
                }
            }
        }else{    //不是ie
            avMin.onload = function() {
                // console.log('非ie浏览器加载完成');   
                !!option && root._init();
                return root;
            }
        }
    }else{
        !!option && root._init();
        return root;
    }
}
atEvery.prototype._init=function(){
    let root=this;
    let {
        appId,
        appKey,
        lang,
        pageSize,
        atEmoji,
        bgImg,
        motion,
        cssUrl,
        shuoPla,
        avatarPla,
        serverURL,
        color1,
        color2,
        color3,
    } = root.config;
    lang = typeof(lang) === "undefined" || lang === ''?'zh':lang;
    bgImg = typeof(bgImg) === "undefined" || bgImg === ''?'https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp':bgImg;
    switch(lang){
        case 'zh':
            var text0 = "由";
            var text00 = "发表";
            var text1 = "加载更多...";
            var text2 = "预览";
            var text3 = "发布";
            var text4 = "已登录";
            var text5 = "确定";
            var text6 = "退出登录";
            var text7 = "用户";
            var text8 = "密码";
            var text9 = "登录";
            var text10 = "取消";
            var text11 = "发布说说";
            var text12 = "添加图片，视频，音乐";
            var text14 = "(上传失败，若非网络原因，请联系Artitalk开发人员)";
            var text15 = "请先登录";
            var text16 = "内容不能为空";
            var text17 = "登陆失败，请检查用户名及密码是否正确";
            var text18 = "头像url";
            var text19 = "确定删除本条说说吗？";
            var text20 = "删除成功";
            var text21 = "请拖拽图片到此处";
            var text22 = "表情";
            var text23 = "删除";
            var text24 = "如果你看到这条说说，恭喜你已经配置成功并且可以正常使用了。当你发布一个说说之后，我将会自动消失。快去探索Artitalk吧<br>欢迎加入Artitalk的QQ交流群：1104585229<br>觉得本项目不错的话可以推荐给你的好友或者去GitHub点一个star，感谢支持";
            var text25 = "上传中";
            var text26 = "图片";
            var text27 = "音乐";
            var text28 = "视频";
            var text29 = "添加";
            var text30 = "上传的图片最大支持5M，请压缩后或换一个继续上传";
            var text31 = "上传的音乐最大支持10M，请压缩后或换一个继续上传";
            var text32 = "上传的视频最大支持30M，请压缩后或换一个继续上传";
            var text33 = "图片格式错误，请不要上传其他类型的文件";
            var text34 = "音频格式错误，请不要上传其他类型的文件";
            var text35 = "视频格式错误，请不要上传其他类型的文件";
            var textup = "上传ing";
            var loadingTxT = "加载中";
            var text36 = "用户名不能为空";
            var text37 = "密码不能为空";
            var text38 = "请在下方输入框进行修改然后点击保存即可";
            var text39 = "保存";
            var text40 = "评论";
            var text41 = "邮箱";
            var text42 = "昵称";
            var text43 = "用户名与密码不匹配";
            var text44 = "登陆失败，常见错误有<br><li>网络错误</li><li>域名不在leancloud的域名白名单中被限制登录</li><li>当前页面使用了其他leancloud应用导致登录到了其他应用所以失败</li>";
            var text45 = "未找到此用户";
            var text46 = "尝试错误密码次数过多，请稍后再试";
            break;
        case 'en':
            var text0 = "Published by";
            var text00 = "";
            var text1 = "load more...";
            var text2 = "Preview";
            var text3 = "Publish";
            var text4 = "logged";
            var text5 = "Ok";
            var text6 = "Sign out";
            var text7 = "Username";
            var text8 = "Password";
            var text9 = "Log in";
            var text10 = "Cancel";
            var text11 = "Post talk";
            var text12 = "Add pictures, videos, music";
            var text14 = "(Upload failed, if not for network reasons, please contact Artitalk developers)";
            var text15 = "Please log in first";
            var text16 = "Content can not be blank";
            var text17 = "Login failed, please check if the username and password are correct";
            var text18 = "Avatar url";
            var text19 = "Are you sure you want to devare this article?";
            var text20 = "Successfully devared";
            var text21 = "Please drag and drop pictures here";
            var text22 = "emoji";
            var text23 = "Devare";
            var text24 = "If you see this, congratulations, you have successfully configured and can be used normally. When you post one shuoshuo, I will disappear automatically. Quickly explore Artitalk.<br>Welcome to Artitalk’s QQ group: 1104585229<br>If you think this project is good, you can recommend it to your friends or go to GitHub to order a star.";
            var text25 = "uploading";
            var text26 = "image";
            var text27 = "music";
            var text28 = "video";
            var text29 = "Add";
            var text30 = "The uploaded image supports a maximum of 5M, please compress or change another one to continue uploading";
            var text31 = "The uploaded music supports a maximum of 10M, please compress or change another one to continue uploading";
            var text32 = "The uploaded video supports a maximum of 30M, please compress or change another one to continue uploading";
            var text33 = "Picture format error, please do not upload other types of files";
            var text34 = "The audio format is wrong, please do not upload other types of files";
            var text35 = "Video format error, please do not upload other types of files";
            var textup = "Uploading";
            var loadingTxT = "Loading";
            var text36 = "Username can not be empty";
            var text37 = "Password can not be empty";
            var text38 = "Please modify it in the input box below and click save";
            var text39 = "save";
            var text40 = "comments";
            var text41 = "Mailbox";
            var text42 = "Nickname";
            var text43 = "The username and password mismatch.";
            var text44 = "Request has been terminated Possible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.c";
            var text45 = "Could not find user.";
            var text46 = "You have entered incorrect passwords for too many times. Please try later or reset your password.";
            break;
        case 'es':
            var text0 = "Publicado por";
            var text00 = "";
            var text1 = "Carga más...";
            var text2 = "Avance";
            var text3 = "Lanzamiento";
            var text4 = "Registrado";
            var text5 = "Determinar";
            var text6 = "Desconectar";
            var text7 = "Usuario";
            var text8 = "Contraseña";
            var text9 = "Iniciar sesión";
            var text10 = "Cancelar";
            var text11 = "Publicar charla";
            var text12 = "Agrega fotos, videos, música";
            var text14 = "(Carga fallida, si no es por razones de red, comuníquese con los desarrolladores de Artitalk)";
            var text15 = "Por favor ingresa primero";
            var text16 = "El contenido no puede estar en blanco";
            var text17 = "Error de inicio de sesión, compruebe si el nombre de usuario y la contraseña son correctos";
            var text18 = "URL del avatar";
            var text19 = "¿Estás seguro de que deseas eliminar este artículo?";
            var text20 = "Eliminado con éxito";
            var text21 = "Arrastra y suelta fotos aquí";
            var text22 = "expresión";
            var text23 = "Eliminar";
            var text24 = "Si ve este artículo, felicidades, se ha configurado correctamente y se puede usar normalmente. Cuando publiques un comentario, desapareceré automáticamente. Explore rápidamente Artitalk. <br> Bienvenido al grupo QQ de Artitalk: 1104585229 <br> Si cree que este proyecto es bueno, puede recomendarlo a sus amigos o ir a GitHub para pedir una estrella, gracias por su apoyo.";
            var text25 = "cargando";
            var text26 = "imagen";
            var text27 = "música";
            var text28 = "vídeo";
            var text29 = "Añadir";
            var text30 = "La imagen cargada admite un máximo de 5 M, comprima o cambie otra para continuar cargando";
            var text31 = "La música cargada admite un máximo de 10 M, comprime o cambia otra para continuar cargando";
            var text32 = "El video subido admite un máximo de 30 M, comprima o cambie otro para continuar subiendo";
            var text33 = "Error de formato de imagen, no suba otros tipos de archivos";
            var text34 = "El formato de audio es incorrecto, no suba otros tipos de archivos";
            var text35 = "Error de formato de video, no suba otros tipos de archivos";
            var textup = "Cargando";
            var loadingTxT = "Cargando";
            var text36 = "El nombre de usuario no puede estar vacío";
            var text37 = "la contraseña no puede estar en blanco";
            var text38 = "Por favor, introduzca las modificaciones en el cuadro de abajo y haga clic en guardar";
            var text39 = "guardar";
            var text40 = "comentarios";
            var text41 = "Buzón";
            var text42 = "Apodo";
            var text43 = "El nombre de usuario y la contraseña no coinciden.";
            var text44 = "La solicitud ha sido cancelada Posibles causas: la red está fuera de línea, Access-Control-Allow-Origin no permite Origin, la página se está descargando, etc.c";
            var text45 = "No se pudo encontrar el usuario.";
            var text46 = "Ha introducido contraseñas incorrectas demasiadas veces. Inténtelo más tarde o restablezca su contraseña.";
            break;
    } 
    let atEmojiDefault = "";
    for(let key in atEmoji){
        atEmojiDefault = atEmojiDefault + "<img alt='[" + key + "]' title='" + key + "' onclick='insertEmoji(\"[" + key + "]\")' class='atemoji gallery-group-img' src='" + atEmoji[key] + "'/>";
    }
    shuoPla = typeof(shuoPla)==="undefined" ? '':shuoPla;
    avatarPla = typeof(avatarPla)==="undefined" ? '':avatarPla;
    color1 = typeof(color1)==="undefined" || color1 === '' ? "RGBA(255, 125, 73, 0.75)":color1;
    color2 = typeof(color2)==="undefined" || color2 === '' ? "#9BCD9B":color2;
    color3 = typeof(color3)==="undefined" || color3 === '' ? "white":color3;
    pageSize = typeof(pageSize)==="undefined" ? '5':pageSize;
    let apiUrl="";
    try{
        if(serverURL !== ''){
            AV.init({
                appId: appId,
                appKey: appKey,
                serverURL: serverURL,
            });
        }else{
            AV.init({
                appId: appId,
                appKey: appKey,
            });
        }
    }
    catch(error){
        let err=error.toString();
        console.error(err);
        if(err.indexOf('appId is not defined')!=-1){
            console.log("appId没找到");
        }else if(err.indexOf('appKey is not defined')!=-1){
            console.log("appKey没找到");
        }
    }
    //emoji translate
    function translate(beforTran){
        if(typeof beforTran === 'undefined')   return ;
        for(let key in atEmojiQQ){
            let keyAt = '['+key+']';
            let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmojiQQ[key] + "'/>";
            while(beforTran.indexOf(keyAt)!=-1){
                beforTran = beforTran.replace(keyAt,emojiAt);
            }
        }
        for(let key in atEmojiTB){
            let keyAt = '['+key+']';
            let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmojiTB[key] + "'/>";
            while(beforTran.indexOf(keyAt)!=-1){
                beforTran = beforTran.replace(keyAt,emojiAt);
            }
        }
        for(let key in atEmojiBB){
            let keyAt = '['+key+']';
            let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmojiBB[key] + "'/>";
            while(beforTran.indexOf(keyAt)!=-1){
                beforTran = beforTran.replace(keyAt,emojiAt);
            }
        }
        // console.log(atEmoji);
        for(let key in atEmoji){
            let keyAt = '['+key+']';
            let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmoji[key] + "'/>";
            while(beforTran.indexOf(keyAt)!=-1){
                beforTran = beforTran.replace(keyAt,emojiAt);
            }
        }
        return beforTran;
    }
    //In & Out
    function fadeIn(id){
        if(!document.getElementById(id)) return ;
        let nowEle = document.getElementById(id);
        nowEle.style.display = '';
    }   
    function fadeOut(id){
        if(!document.getElementById(id)) return ;
        let nowEle = document.getElementById(id);
        nowEle.style.display = 'none';
    }        
    function Show(){
        fadeIn('shade');
        fadeIn('shuoshuo-modal');
    }
    function Hide() {
        fadeOut('shade');
        fadeOut('shuoshuo-modal');
    }
    //Insert css
    let atCss = "";
    if(!document.getElementById('add-Artitalk_Style')){
        if(cssUrl === "" || typeof(cssUrl) === "undefined"){
            atCss = "div#artitalk_main {    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);  }  #artitalk_main .shuoshuo_row {  width: 100%;  margin-top: 10px;  display: flex;  }  #artitalk_main .artitalk_child {  width: 100%;  }  #artitalk_main #shuoshuo_content {  padding: 10px;  /* min-height: 500px; */  }  #artitalk_main body.theme-dark .cbp_tmtimeline::before {  background: RGBA(255, 255, 255, 0.06);  }  #artitalk_main ul.cbp_tmtimeline {  padding: 0;  }  #artitalk_main .cbp_tmtimeline {  margin: 30px 0 0 0;  padding: 0;  list-style: none;  display: inline;  position: relative;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime {  display: block;  /* width: 29%; */  /* padding-right: 110px; */  max-width: 70px;  position: absolute;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span {  display: block;  text-align: right;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:first-child {  font-size: 0.9em;  color: #bdd0db;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:last-child {  font-size: 1.2em;  color: #9bcd9b;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmtime span:last-child {  color: RGBA(255, 125, 73, 0.75);  }  #artitalk_main div.cbp_tmlabel>p {  margin-bottom: 0;  }  #artitalk_main div class.cdp_tmlabel>li .cbp_tmlabel {  margin-bottom: 0;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmlabel {  margin: 0 0 45px 65px;  z-index: 1;  background: " + color2 + ";  color: " + color3 + " ;  padding: 0.8em 1.2em 0.4em 1.2em;  /* font-size: 1.2em; */  font-weight: 300;  line-height: 1.4;  position: relative;  border-radius: 5px;  transition: all 0.3s ease 0s;  box-shadow: 0 1px 2px rgba(0,0,0,0.15); display: block;  }  #artitalk_main .cbp_tmlabel:hover {  /* transform: scale(1.05); */  transform: translateY(-3px);  z-index: 1;  box-shadow: 0 15px 32px rgba(0,0,0,0.15) ;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel {    background: " + color1 + ";  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmlabel:after {  right: 100%;  border: solid transparent;  z-index: -1;  content: \" \";  height: 0;  width: 0;  position: absolute;  pointer-events: none;  border-right-color: " + color2 + ";  border-width: 10px;  top: 4px;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after {    border-right-color: " + color1 + ";  }  #artitalk_main p.shuoshuo_time {  margin-top: 10px;  border-top: 1px dashed #fff;  padding-top: 5px;  font-size: 12px;  }  @media screen and (max-width: 65.375em) {  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:last-child {    font-size: 1.2em;  }  }  #artitalk_main .shuoshuo_author_img img {  border: 1px solid #ddd;  padding: 2px;  float: left;  border-radius: 64px;  transition: all 1s;  }  #artitalk_main .artitalk_avatar {  border-radius: 100% ;  -moz-border-radius: 100% ;  box-shadow: inset 0 -1px 0 3333sf;  -webkit-box-shadow: inset 0 -1px 0 3333sf;  -webkit-transition: 0.4s;  -webkit-transition: -webkit-transform 0.4s ease-out;  transition: transform 0.4s ease-out;  -moz-transition: -moz-transform 0.4s ease-out;  }  #artitalk_main .artitalk_avatar:hover {  -webkit-transform: rotateZ(360deg);  -moz-transform: rotateZ(360deg);  -o-transform: rotateZ(360deg);  -ms-transform: rotateZ(360deg);  transform: rotateZ(360deg);  }  #artitalk_main .shuoshuo_text {  width: 100%;  height: 130px;  padding: 8px 16px;  background-repeat: no-repeat;  background-position: right;  transition: all 0.35s ease-in-out 0s;  outline-style: none;  border: 1px solid #ccc;  border-radius: 6px;  resize: none;  background-color: transparent;  color: #999;  }  #artitalk_main .shuoshuo_inputs {  outline-style: none;  border: 1px solid #ccc;  padding: 8px 16px;  width: 40%;  font-size: 12px;  background-color: transparent;  color: #999;  }  #operare_artitalk .at_button,  #artitalk_main .at_button {    background-color: " + color1 + ";  /* Green */  border: none;  margin-left: 5px;  color: " + color3 + ";  padding: 8px 16px;  text-align: center;  text-decoration: none;  height: auto;  line-height: 20px;  display: inline-block;  font-size: 12px;  border-radius: 12px;  /* circle */  outline: none;  cursor: pointer;  }  #operare_artitalk .at_button:hover,  #artitalk_main .at_button:hover {      background-color: " + color2 + ";  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.24), 0 8px 16px 0 rgba(0,0,0,0.19);  }  #artitalk_main #article-container ul p {  margin: 0 0 1rem;  }  #artitalk_main .power {  text-align: right;  color: #999;  margin-top: 10px;  font-size: 0.75em;  padding: 0.5em 0;  }  #artitalk_main .power a {  font-size: 0.75em;  position: relative;  cursor: pointer;  color: #1abc9c;  text-decoration: none;  display: inline-block;  }  #artitalk_main .shuoshuo_row .col.col-80 {  width: 80%;  float: left;  }  #artitalk_main .shuoshuo_row .col.col-20 {  width: 20%;  float: right;  text-align: right;  }  #artitalk_main #preview {  width: 100%;  float: left;  margin: 0.5rem 0 0;  padding: 7px;  box-shadow: 0 0 1px #f0f0f0;  }  #artitalk_main #lazy {  background: #fff;  bottom: 0;  left: 0;  position: fixed;  right: 0;  top: 0;  z-index: 9999;  }  #artitalk_main .preloader {  position: absolute;  margin-left: -55px;  margin-top: -100px;  height: 110px;  width: 110px;  left: 50%;  top: 50%;  }  #artitalk_main .preloader>svg>g>path {  stroke: #9ea1a4;  stroke-width: 0.25;  }  #artitalk_main .preloader>svg>path {  stroke: #9ea1a4;  stroke-width: 0.25;  }  #artitalk_main #cloud {  position: relative;  z-index: 2;  }  #artitalk_main #cloud path {  fill: #efefef;  }  #artitalk_main #sun {  margin-left: -10px;  margin-top: 6px;  opacity: 0;  width: 60px;  height: 60px;  position: absolute;  left: 45px;  top: 15px;  z-index: 1;  animation-name: rotate;  animation-duration: 16000ms;  animation-iteration-count: infinite;  animation-timing-function: linear;  }  #artitalk_main #sun path {  stroke-width: 0.18;  fill: #9ea1a4;  }  #artitalk_main .rain {  position: absolute;  width: 70px;  height: 70px;  margin-top: -32px;  margin-left: 19px;  }  #artitalk_main .drop {  opacity: 1;  background: #9ea1a4;  display: block;  float: left;  width: 3px;  height: 10px;  margin-left: 4px;  border-radius: 0px 0px 6px 6px;  animation-name: drop;  animation-duration: 350ms;  animation-iteration-count: infinite;  }  #artitalk_main .drop:nth-child(1) {  animation-delay: -130ms;  }  #artitalk_main .drop:nth-child(2) {  animation-delay: -240ms;  }  #artitalk_main .drop:nth-child(3) {  animation-delay: -390ms;  }  #artitalk_main .drop:nth-child(4) {  animation-delay: -525ms;  }  #artitalk_main .drop:nth-child(5) {  animation-delay: -640ms;  }  #artitalk_main .drop:nth-child(6) {  animation-delay: -790ms;  }  #artitalk_main .drop:nth-child(7) {  animation-delay: -900ms;  }  #artitalk_main .drop:nth-child(8) {  animation-delay: -1050ms;  }  #artitalk_main .drop:nth-child(9) {  animation-delay: -1130ms;  }  #artitalk_main .drop:nth-child(10) {  animation-delay: -1300ms;  }  #artitalk_main .artitalk_loading_text {  font-family: Helvetica, \" Helvetica Neue \", sans-serif;  letter-spacing: 1px;  text-align: center;  margin-left: -43px;  font-weight: bold;  margin-top: 20px;  font-size: 11px;  color: #a0a0a0;  width: 200px;  }  #artitalk_main .shuoshuoimg {  cursor: pointer;  transition: all 1s;  z-index: 2;  }  #artitalk_main .shuoshuoimg:hover {  transform: scale(3.5);  }  #artitalk_main .hide,  #operare_artitalk .hide {  display: none;  }  #operare_artitalk .c1 {  position: fixed;  top: 0;  bottom: 0;  left: 0;right: 0;  background: rgba(0,0,0,0.5);  z-index: 2;  }  #operare_artitalk .c2 {  background-color: #fff;  position: fixed;  width: 400px;  height: auto;  top: 50%;  left: 50%;  z-index: 3; margin-top: -150px;  margin-left: -200px;  box-shadow: 0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07);  opacity: 0.85;  border: 0;  border-radius: 10px;  }  #operare_artitalk .shuoshuo_input_log {  outline-style: none;  margin-top: 10px;  border: 1px solid #ccc;  border-radius: 6px;  padding: 8px 16px;  font-size: 12px;  background-color: transparent;  color: #999;  }  #artitalk_main .delete_right {  cursor: pointer;  width: 12px;  height: 12px;  position: absolute;  right: 12px;  }  #artitalk_main svg {  display: inline;  }  #artitalk_main .cbp_tmlabel>p,  #artitalk_main h1,  #artitalk_main h2,  #artitalk_main h3,  #artitalk_main h4,  #artitalk_main h5,  #artitalk_main h6,  #artitalk_main em {  word-wrap: break-word;  word-break: break-all;  }  #artitalk_main .shuoshuo_emoji {  border: 1px solid #ccc;  border-radius: 6px 6px 0 0;  height: 120px;  overflow: auto;  margin-top: 10px;  border-bottom: none;  }  #artitalk_main .atemoji {  max-height: 28px;  width: 28px;  display: inline;  vertical-align: middle;  }  #artitalk_main .shuoshuo_emoji>.atemoji {  cursor: pointer;  margin: 0 0 0 10px;  display: inline;  }  #artitalk_main i>.atemoji {  cursor: pointer;  margin: 0 0 0 10px;  }  #artitalk_main .shuoshuo_emoji>a {  display: inline;  }  #artitalk_main #preview>p>.atemoji {  display: inline;  }  #artitalk_main .shuoshuo_emoji>.atemoji:hover {  transform: scale(1.5);  }  #artitalk_main div#shuoshuo_emojiswitch {  height: 40px;  width: auto;  border-radius: 0 0 6px 6px;  border-collapse: collapse;  border: 1px solid #ccc;  border-top: none;  }  #artitalk_main .shuoshuo_emoji_part {  width: 25%;  cursor: pointer;  align-content: center;  text-align: center;  line-height: 40px;  }  #artitalk_main .shuoshuo_emoji_part:hover {  background-color: #ccc;  color: #fff;  }  #artitalk_main .zuiliangdezai {  background-color: #ccc;  color: #fff;  }  #artitalk_main .pingjun {  display: flex;  }  #artitalk_main #article-container img {  margin: 0 0 0 0;  }  #artitalk_main .preview_now {  display: none;  }  #artitalk_main div#loading_txt {  font-size: 20px;  }  #artitalk_main audio {  display: block;  width: 100%;  outline: none;  opacity: 0.8;  }  #artitalk_main video {  z-index: 0;  }p.shuoshuo_time>span>a:hover {color: red;}p.shuoshuo_time>span>a {color: black;text-decoration: none;}  #artitalk_main textarea#neirong:focus {  background-position-y: 150px;  transition: all 0.35s ease-in-out 0s;  }  #artitalk_main img.atemoji {  max-height: 28px;  width: 28px;  display: inline;  vertical-align: middle;  }  #artitalk_main span.cbp_tmlabel>p {  overflow: unset;  }  #artitalk_main ul#maina>li {  list-style: none;  }  #artitalk_main div#artitalk_main {  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);  }  #artitalk_main .c2>center>p {  margin-top: 10px;  margin-bottom: 10px;  }  @-moz-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-webkit-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-o-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-moz-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @-webkit-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @-o-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }";
            let atStyle = document.createElement("style");
            atStyle.type = "text/css";  
            atStyle.innerHTML = atCss;
            atStyle.id = "add-Artitalk-Style";
            document.head.appendChild(atStyle);
        }else{
            let atStyle = document.createElement('link');
            atStyle.rel = 'stylesheet';
            atStyle.href = cssUrl;
            atStyle.id = "add-Artitalk-Style";
            document.head.appendChild(atStyle);
        }
    } 
    //Insert html part
    var atHtml = "<div id='artitalk_part1'><div id=\"shuoshuo_content\"><div id=\"ccontent\"></div><div id='readButton' style=''><center><button id=\"readmore\" class=\"at_button\" style=\"margin-bottom: 15px;display: none\">" + text1 + "</button></center></div></div><div id=\"shuoshuo_input\" class=\"shuoshuo_active\" style=\"display: none;\"><div id=\"shuoshuo_edit\"><textarea class=\"shuoshuo_text\" oninput=\"preview()\" id=\"neirong\" placeholder=\"" + shuoPla + "\"style=\"background-image: url(" + bgImg + ");z-index: 0\"></textarea><span id=\"drag_area\" class=\"z-index: -1;\"></span></div><div id=\"shuoshuo_parttwo\" class=\"shuoshuo_parttwo\"><div id=\"shuoshuo_emoji_Tieba\" class=\"shuoshuo_emoji\" style='display: none'></div><div id=\"shuoshuo_emoji_BiliBili\" class=\"shuoshuo_emoji\" style='display: none'></div><div id=\"shuoshuo_emoji_QQ\" class=\"shuoshuo_emoji\" style='display: none'></div><div id=\"shuoshuo_emoji_custom\" class=\"shuoshuo_emoji\" style='display: none'></div><div id=\"shuoshuo_emojiswitch\" class=\"shuoshuo_emojiswitch\" style='display: none'><div id=\"switch_1\" class=\"shuoshuo_emoji_part zuiliangdezai\">Tieba</div><div id=\"switch_2\" class=\"shuoshuo_emoji_part\">BiliBili</div><div id=\"switch_3\" class=\"shuoshuo_emoji_part\">QQ</div><div id=\"switch_4\" class=\"shuoshuo_emoji_part\">Custom</div></div><div id=\"preview\" class=\"preview_now\"></div></div><div class=\"shuoshuo_submit\"><div class=\"shuoshuo_row\"><input class=\"artitalk_child shuoshuo_inputs\" style='display: none' id=\"email\" value=\"\"  placeholder=\" "   + text18 + "\"><input class=\"artitalk_child shuoshuo_inputs\" style=\"display: none\" id=\"commentNick\" value=\"\" placeholder=\"" + text18 + "\"><div class=\"artitalk_child\"><button class=\"at_button\" id='atSave' style=\"float: right;\">" + text3 + "</button><button class=\"at_button\" id='commentSave' style=\"display:none;float: right;\">" + text3 + "</button><button class=\"at_button\" id='atPreview' style=\"float: right;\">" + text2 + "</button><button class=\"at_button\" id='loadEmoji' style=\"float: right;\">" + text22 + "</button></div></div></div></div></div><div class=\"power\"><div style=\"font-size: 25px;display: none; cursor: pointer\" id=\"pubComment\"><svg t=\"1591347684072\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"9731\" width=\"30\" height=\"30\" style=\"\"><path d=\"M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z\" p-id=\"9732\" fill=\"#707070\"></path><path d=\"M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z\" p-id=\"9733\" fill=\"#707070\"></path></svg></div><div style=\"font-size: 25px;display: inline; cursor: pointer\" id=\"pubShuo\"title=\"" + text11 + "\"><svg t=\"1591347684072\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"9731\" width=\"30\" height=\"30\"  style=\"display: inline\"><path d=\"M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z\" p-id=\"9732\" fill=\"#707070\"></path><path d=\"M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z\" p-id=\"9733\" fill=\"#707070\"></path></svg></div><div style=\"font-size: 25px;display: inline; cursor: pointer\" id=\"switchUser\" title=\"" + text9 + "\"><svg t=\"1591347848063\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"12288\" width=\"30\" height=\"30\"  style=\"display: inline\"><path d=\"M515.541449 7.082899c-280.359429 0-508.458551 228.120391-508.458551 508.458551s228.120391 508.458551 508.458551 508.458551 508.458551-228.120391 508.458551-508.458551S795.900879 7.082899 515.541449 7.082899zM515.541449 981.864196c-257.132626 0-466.301477-209.190121-466.301477-466.322747 0-257.132626 209.168851-466.322747 466.301477-466.322747s466.301477 209.190121 466.301477 466.322747S772.674075 981.864196 515.541449 981.864196zM614.574414 524.177056 614.574414 524.177056c47.751075-31.96876 79.230625-86.398604 79.230625-148.187857 0-98.437405-79.804915-178.24232-178.24232-178.24232-98.437405 0-178.24232 79.804915-178.24232 178.24232 0 61.810523 31.479551 116.219097 79.251895 148.187857-100.266622 39.519598-171.244501 137.170014-171.244501 251.453545 0 0.23397 0 0.446669 0.02127 0.659369 0 0.04254-0.02127 0.10635-0.02127 0.14889 0 15.612155 12.65563 28.246516 28.267786 28.246516 15.590885 0 21.886796-12.63436 21.886796-28.246516 0-0.340319-0.08508-0.659369-0.10635-1.020958 0.10635-118.005774 102.159649-219.995264 220.207964-219.995264 118.112124 0 220.207964 102.095839 220.207964 220.207964 0 0.14889-1.467628 29.054774 21.971875 29.054774 15.505806 0 28.076356-12.57055 28.076356-28.055086 0-0.06381-0.02127-0.12762-0.02127-0.2127 0-0.25524 0.02127-0.510479 0.02127-0.786989C785.797645 661.34707 714.798496 563.696654 614.574414 524.177056zM515.541449 510.734437c-74.402343 0-134.723968-60.321625-134.723968-134.723968 0-74.423613 60.321625-134.723968 134.723968-134.723968 74.423613 0 134.723968 60.321625 134.723968 134.723968S589.943792 510.734437 515.541449 510.734437z\" p-id=\"12289\" fill=\"#707070\"></path></svg></div><div style=\"font-size: 25px;display: inline; cursor: pointer\" id=\"uploadSource\" title=\"\" + text29 + \"\"><svg t=\"1606385459524\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2943\" width=\"30\" height=\"30\" style=\"display: inline\"><path d=\"M275.815618 476.43815a20.004001 20.004001 0 0 1-14.139971-34.143972l251.284545-251.295976 249.387023 249.387023a20.004001 20.004001 0 0 1-28.291373 28.291373L512.960192 247.580948 289.955589 470.585551a19.946847 19.946847 0 0 1-14.139971 5.852599z\" p-id=\"2944\" fill=\"#707070\"></path><path d=\"M512.011431 854.730956a20.004001 20.004001 0 0 1-20.004001-20.004001V225.279344a20.004001 20.004001 0 1 1 40.008002 0v609.390456a20.004001 20.004001 0 0 1-20.004001 20.061156z\" p-id=\"2945\" fill=\"#707070\"></path><path d=\"M512.011431 1023.999097a510.467814 510.467814 0 1 1 199.297004-40.24805 508.810339 508.810339 0 0 1-199.297004 40.24805z m0-983.991095a470.459811 470.459811 0 1 0 183.659591 37.081703A469.030954 469.030954 0 0 0 512.011431 40.008002z\" p-id=\"2946\" fill=\"#707070\"></path></svg></div><br>Powered By <a href=\"https://artitalk.js.org\" target=\"_blank\">Artitalk</a><br>" + atVersion + "</div><input type='file' id='realUpload' onchange='atEvery.prototype.beginUpload(this.files[0])' style=\"width: 0;height: 0;display: none\"></input></div>";
    var motionHtml = "<div id='lazy'><div class=\"preloader\" style=\"opacity: 1; \"><svg version=\"1.1\" id=\"sun\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"y=\"0px\" width=\"10px\" height=\"10px\" viewBox=\"0 0 10 10\" enable-background=\"new 0 0 10 10\" xml:space=\"preserve\"style=\"opacity: 1; margin-left: 0px; margin-top: 0px;\"><g><path fill=\"none\"d=\"M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z\"></path><path fill=\"none\"d=\"M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z\"></path><path fill=\"none\"d=\"M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z\"></path><path fill=\"none\"d=\"M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z\"></path><path fill=\"none\"d=\"M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z\"></path><path fill=\"none\"d=\"M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z\"></path><path fill=\"none\"d=\"M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z\"></path><path fill=\"none\"d=\"M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z\"></path><path fill=\"none\"d=\"M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z\"></path><path fill=\"none\"d=\"M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z\"></path><path fill=\"none\"d=\"M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z\"></path><path fill=\"none\"d=\"M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z\"></path><path fill=\"none\"d=\"M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z\"</path></g></svg><svg version=\"1.1\" id=\"cloud\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"x=\"0px\" y=\"0px\" width=\"110px\" height=\"110px\" viewBox=\"0 0 10 10\" enable-background=\"new 0 0 10 10\"xml:space=\"preserve\"><path fill=\"none\"d=\"M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z\"></path></svg><div class=\"rain\"><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span><span class=\"drop\"></span></div><div class=\"artitalk_loading_text\" id=\"loading_txt\">" + loadingTxT + "</div></div></div>";
    var atOpHtml = "<div id=\"shade\" class=\"c1\" style='display: none'></div><div id=\"shuoshuo-modal\" class=\"c2\" style='display: none' ><center><p>" + text7 + "：<input type=\"text\" class=\"shuoshuo_input_log\" id=\"username\"/></p><p>" + text8 + "：<input type=\"password\" class=\"shuoshuo_input_log\"  id=\"pwd\"/></p><p><input type=\"button\" value=\"" + text9 + "\" class=\"at_button\" id='login'>&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"button\" value=\"" + text10 + "\"  class=\"at_button\" id = 'celLogin'></p></center><center><div id=\"logw\" style='color: red'></div></center></div><div id=\"userinfo\" class=\"c2\" style='display: none'><center><p><div id=\"status\"></div></p><p><input type=\"button\" class=\"at_button\" value=\"" + text5 + "\" id=\"hideuser\">&nbsp;&nbsp;&nbsp;&nbsp;<input id=\"tui\" type=\"button\" value=\"" + text6 + "\" class=\"at_button\" style=\"display: none;\" onclick=\"Logout();\"></p></center></div><div id=\"shanchu\" class=\"c2\" style='display: none'><center><p>" + text20 + "</p><p><input type=\"button\" class=\"at_button\" value=\"" + text5 + "\" id=\"deleteSus\"></p><center></div><div id=\"shanchur\" class=\"c2\" style='display: none'><center><p>" + text19 + "</p><p><div id=\"delete1\"></div></p><center></div><div id='clickForPreview'></div>";
    var atOp = document.createElement('div');
    atOp.id='operare_artitalk';
    document.body.append(atOp);
    document.getElementById('operare_artitalk').innerHTML=atOpHtml;
    motionHtml = motion === 0?"":motionHtml;
    atHtml = motionHtml + atHtml;
    document.getElementById('artitalk_main').innerHTML = atHtml;
    // 开始加载说说
    root.seeContent(0,root.config);
    let rmButton = document.getElementById('readmore');//readmore
    let pubButton = document.getElementById('pubShuo');//publish shuo
    let switchLogin = document.getElementById('switchUser');//login or exit
    let cancelLogin = document.getElementById('celLogin');//cancel Login
    let login = document.getElementById('login');//Login
    let hideUser = document.getElementById('hideuser');
    let loadEmoji = document.getElementById('loadEmoji');//Loading emoji
    let switchTb = document.getElementById('switch_1');//Tieba emoji
    let switchBB = document.getElementById('switch_2');//BiliBili emoji
    let switchQQ = document.getElementById('switch_3');//QQ emoji
    let switchCustom = document.getElementById('switch_4');//custom emoji
    let beginPreview = document.getElementById('atPreview');//preview
    let clickPre = document.getElementById('clickForPreview');//preview
    let saveContent = document.getElementById('atSave');//savecontent
    let deleteSus = document.getElementById('deleteSus');//Delete successful
    let uploadSource = document.getElementById('uploadSource');//Upload image or video
    let pNum = 0;
    rmButton.onclick=function(){
        pNum = pNum + 1;
        root.seeContent(pNum,root.config);
    }
    pubButton.onclick=function(){
        let currentUser = AV.User.current();
        if(currentUser){
            if(document.getElementById('shuoshuo_input').style.display===""){
                fadeOut('shuoshuo_input');
            }else{
                fadeIn('shuoshuo_input');
            }
        }else{
            document.getElementById('logw').innerHTML= "<center><pre><code>" + text15 + "</code></pre></center>";
            Show();
        }
    }
    switchLogin.onclick=function(){
        document.getElementById("logw").innerHTML = "";
        let currentUser = AV.User.current();
        fadeIn('shade');
        if(currentUser){
            fadeIn('userinfo');
            document.getElementById("status").innerHTML = text4 + ":\t" + currentUser.attributes.username;
            fadeIn('tui');
        }else{
            fadeIn('tui');
            fadeIn('shuoshuo-modal');
            Show();
        }
    }
    cancelLogin.onclick=function(){
        Hide();
    }
    login.onclick=function(){
        let passWord = document.getElementById('pwd').value;
        document.getElementById('logw').style.color='black';
        document.getElementById('logw').innerHTML = 'loading...';
        if(passWord === ""){
            document.getElementById('logw').style.color='red';
            document.getElementById('logw').innerHTML = text37;
            return ;
        }
        let userName = document.getElementById('username').value;
        if(userName === ""){
            document.getElementById('logw').style.color='red';
            document.getElementById('logw').innerHTML = text36;
            return ;
        }
        AV.User.logIn(userName,passWord).then((user) => {
            document.getElementById("ccontent").innerHTML="";
            document.getElementById("neirong").value="";
            fadeIn('lazy');
            root.seeContent(0,root.config);
            Hide();
        }, (error) => {
            let errLogin = error.message;
            document.getElementById('logw').style.color='red';
            // console.log(errLogin);
            if(errLogin.indexOf('mismatch')!=-1){
                errLogin=text43;
            }else if(errLogin.indexOf('terminated')!=-1){
                errLogin=text44;
            }else if(errLogin.indexOf('Could not find user.')!=-1){
                errLogin=text45;
            }else if(errLogin.indexOf('Please try later or reset your password.')!=-1){
                errLogin=text46;
            }
            document.getElementById('logw').innerHTML = errLogin;
        });
    }
    hideUser.onclick=function() {
        fadeOut('shade');
        fadeOut('userinfo');
    }
    loadEmoji.onclick = function(){
        document.getElementById('switch_1').classList.add('zuiliangdezai');
        document.getElementById('switch_2').classList.remove('zuiliangdezai');
        document.getElementById('switch_3').classList.remove('zuiliangdezai');
        document.getElementById('switch_4').classList.remove('zuiliangdezai');
        if (document.getElementById('shuoshuo_emojiswitch').style.display === 'none') {
            fadeIn('shuoshuo_emoji_Tieba');
            fadeIn('shuoshuo_emojiswitch');
            document.getElementById("shuoshuo_emoji_BiliBili").innerHTML = atEmojiB;
            document.getElementById("shuoshuo_emoji_Tieba").innerHTML = atEmojiT;
            document.getElementById("shuoshuo_emoji_QQ").innerHTML = atEmojiQ;
            document.getElementById("shuoshuo_emoji_custom").innerHTML = atEmojiDefault;
            document.getElementById('shuoshuo_emojiswitch').classList.add('pingjun');
        } else {
            fadeOut('shuoshuo_emoji_Tieba');
            fadeOut('shuoshuo_emoji_BiliBili');
            fadeOut('shuoshuo_emoji_custom');
            fadeOut('shuoshuo_emoji_QQ');
            fadeOut('shuoshuo_emojiswitch');
            document.getElementById('shuoshuo_emojiswitch').classList.remove('pingjun');
        }            
    }
    switchTb.onclick = function(){
        switchTb.classList.add('zuiliangdezai');
        switchQQ.classList.remove('zuiliangdezai');switchBB.classList.remove('zuiliangdezai');switchCustom.classList.remove('zuiliangdezai');
        fadeIn('shuoshuo_emoji_Tieba');
        fadeOut('shuoshuo_emoji_QQ');fadeOut('shuoshuo_emoji_BiliBili');fadeOut('shuoshuo_emoji_custom');
    }
    switchQQ.onclick = function(){
        switchQQ.classList.add('zuiliangdezai');
        switchTb.classList.remove('zuiliangdezai');switchBB.classList.remove('zuiliangdezai');switchCustom.classList.remove('zuiliangdezai');
        fadeIn('shuoshuo_emoji_QQ');
        fadeOut('shuoshuo_emoji_Tieba');fadeOut('shuoshuo_emoji_BiliBili');fadeOut('shuoshuo_emoji_custom');
    }
    switchBB.onclick = function(){
        switchBB.classList.add('zuiliangdezai');
        switchQQ.classList.remove('zuiliangdezai');switchTb.classList.remove('zuiliangdezai');switchCustom.classList.remove('zuiliangdezai');
        fadeIn('shuoshuo_emoji_BiliBili');
        fadeOut('shuoshuo_emoji_QQ');fadeOut('shuoshuo_emoji_Tieba');fadeOut('shuoshuo_emoji_custom');
    }
    switchCustom.onclick = function(){
        switchCustom.classList.add('zuiliangdezai');
        switchQQ.classList.remove('zuiliangdezai');switchBB.classList.remove('zuiliangdezai');switchTb.classList.remove('zuiliangdezai');
        fadeIn('shuoshuo_emoji_custom');
        fadeOut('shuoshuo_emoji_QQ');fadeOut('shuoshuo_emoji_BiliBili');fadeOut('shuoshuo_emoji_Tieba');
    }
    beginPreview.onclick = function(){
        let preCon = document.getElementById('preview');
        if(preCon.className.indexOf('preview_now')!==-1){
            preCon.classList.remove('preview_now');
        }else{
            preCon.classList.add('preview_now');
        }
    }
    saveContent.onclick = function save(){
        let currentUser = AV.User.current();
        if(!currentUser){
            pubButton.click();
        }
        let shuoshuoContent = document.getElementById('neirong').value;
        if(shuoshuoContent === '') throw '说说内容不能为空'
        let artitalkObject = AV.Object.extend('shuoshuo');
        let atObject = new artitalkObject();
        let shuoshuoContentMd = shuoshuoContent;
        atObject.set('atContentMd',shuoshuoContentMd);
        shuoshuoContent = translate(shuoshuoContent);
        let converte = new showdown.Converter();
        converte.setOption('strikethrough', 1);
        let shuoshuoContentHtml = converte.makeHtml(shuoshuoContent);
        let atAvatar = typeof(currentUser.attributes.img) === "undefined" ? "https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png":currentUser.attributes.img;
        // alert(deFaultavatar);
        let userClient = new Client();
        // console.log("Engine ：" + client.engine.name + " " + client.engine.version);
        // console.log("Browser：" + client.browser.name + " " + client.browser.version);
        // console.log("System ：" + client.system.name + " " + client.system.version);
        let userOs = userClient.system.name;
        atObject.set('atContentHtml',shuoshuoContentHtml);
        atObject.set('userOs',userOs);
        atObject.set('avatar',atAvatar);
        fadeIn('lazy');
        atObject.save().then(function (res) {
            document.getElementById("ccontent").innerHTML="";
            document.getElementById("neirong").value="";
            fadeOut('preview');
            root.seeContent(0,root.config);
            fadeOut('shuoshuo_input');
        })            
    }
    clickPre.onclick = function(){
        let unPre = document.getElementById('neirong').value;
        unPre = translate(unPre);    
        let converter = new showdown.Converter();
        converter.setOption('strikethrough', 1);
        let finishPre = converter.makeHtml(unPre);
        document.getElementById('preview').innerHTML = finishPre;  
    }
    deleteSus.onclick = function(){
        fadeOut('shanchu');fadeOut('shade');fadeIn('lazy');
        document.getElementById('ccontent').innerHTML = "";
        root.seeContent(0,root.config);
    }
    uploadSource.onclick = function(){
        function Show(){
            fadeIn('shade');
            fadeIn('shuoshuo-modal');
        }
        let currentUser = AV.User.current();
        if(currentUser){
            // console.log(currentUser);
        }else{
            document.getElementById('logw').innerHTML= "<center><pre><code>" + text15 + "</code></pre></center>";
            Show();
            return ;
        }
        document.getElementById('realUpload').click();
    }
    // function beginUpload(file){
    //     console.log(file.files);
    // }
    atEvery.prototype.delete = function(id){
        function fadeOut(id){
            if(!document.getElementById(id)) return ;
            let nowEle = document.getElementById(id);
            nowEle.style.display = 'none';
        }      
        function fadeIn(id){
            if(!document.getElementById(id)) return ;
            let nowEle = document.getElementById(id);
            nowEle.style.display = '';
        }   
        let currentUser = AV.User.current();
        if(currentUser){
            fadeIn('shade');fadeIn('shanchur');
            document.getElementById('delete1').innerHTML = "<input type=\"button\" class=\"at_button\" value=\"" + text5 + "\" id=\"Delete\"><input type=\"button\" class=\"at_button\" value=\"" + text10 + "\" id=\"cancelDelete\">";
        }else{
            let pubButton = document.getElementById('pubShuo');
            pubButton.click();
            return ;
        }
        let cancelDelete = document.getElementById('cancelDelete');
        let rlyDelete = document.getElementById('Delete');
        cancelDelete.onclick=function(){
            fadeOut('shade');fadeOut('shanchur');
        }
        rlyDelete.onclick=function(){
            // console.log(id);
            cancelDelete.click();
            fadeIn('lazy');
            const deletes = AV.Object.createWithoutData('shuoshuo',id);
            deletes.destroy().then(function(success){
                fadeIn('shade');
                fadeIn('shanchu');
            },function (error){
                console.log(error.rawMessage);
            })
        }
    }
}

atEvery.prototype.beginUpload=function(file){
    function Show(){
        fadeIn('shade');
        fadeIn('shuoshuo-modal');
    }
    let currentUser = AV.User.current();
    if(currentUser){
        // console.log(currentUser);
    }else{
        // document.getElementById('logw').innerHTML= "<center><pre><code>" + text15 + "</code></pre></center>";
        Show();
        return ;
    }
    if (!/\.(jpg|gif|jpeg|ico|png|svg|mp4|mov)$/.test(file.name)) {
        alert('不支持的文件类型，支持的文件格式有jpg|gif|jpeg|ico|png|svg|mp4|mov');
        return ;
    }
    let fileType = "";
    let sourceSize = (file.size / 1024).toFixed(0);
    let sourceSizeLimit = 1024*50;
    if(sourceSize > sourceSizeLimit){
        alert('资源上传最大限制为50M');
        return ;
    }
    if(/\.(jpg|gif|jpeg|ico|png|svg)$/.test(file.name)) {
        fileType = "image";
    }else if(/\.(mp4|mov)$/.test(file.name)) {
        fileType = "video";
    }
    function fadeIn(id){
        if(!document.getElementById(id)) return ;
        let nowEle = document.getElementById(id);
        nowEle.style.display = '';
    }
    function fadeOut(id){
        if(!document.getElementById(id)) return ;
        let nowEle = document.getElementById(id);
        nowEle.style.display = 'none';
    } 
    fadeIn('lazy');
    let data = new FormData();
    data.append("image",file);
    let xhr = new XMLHttpRequest();
    xhr.withCredentials=false;
    xhr.addEventListener("readystatechange",function(){
        if(this.readyState === 4 && this.status === 200){
            let sourceUrl = eval('(' + this.responseText + ')');
            // let Md = "![]("+imgUrl.data.url+")";
            let sourceMd = "";
            // insertEmoji(imgMd);
            if(fileType === "video"){
                sourceMd = "<video controls width=\"100%\" height=\"auto\"><source src=\"" + sourceUrl.data.url + "\"></video>";
            }else if(fileType === "image"){
                sourceMd = "![]("+sourceUrl.data.url+")";
            }
            insertEmoji(sourceMd);
            document.getElementById('pubShuo').click();
            fadeOut('lazy');
        }else if(this.readyState === 4 && this.status === 500){
            fadeOut('lazy');
        }
    });
    xhr.open("POST", "https://7bu.top/api/upload");
    xhr.setRequestHeader("Authorization", "Basic VGVzdDoxMjM0NTY=");
    xhr.setRequestHeader("token","79013f458a4420de64ade90c72347429");
    xhr.send(data);
}


atEvery.prototype.seeContent=function(pageNum,option){
    let root=this;
    let mid="";

    let {
        lang,
        pageSize,
        motion,
        atEmoji,
        color1,
        color2,
        color3,
        atComment,
    } = root.config;
    lang = typeof(lang) === "undefined" || lang === ''?'zh':lang;
    switch(lang){
        case 'zh':
            var text0 = "由";
            var text00 = "发表";
            var text1 = "加载更多...";
            var text2 = "预览";
            var text3 = "发布";
            var text4 = "已登录";
            var text5 = "确定";
            var text6 = "退出登录";
            var text7 = "用户";
            var text8 = "密码";
            var text9 = "登录";
            var text10 = "取消";
            var text11 = "发布说说";
            var text12 = "添加图片，视频，音乐";
            var text14 = "(上传失败，若非网络原因，请联系Artitalk开发人员)";
            var text15 = "请先登录";
            var text16 = "内容不能为空";
            var text17 = "登陆失败，请检查用户名及密码是否正确";
            var text18 = "头像url";
            var text19 = "确定删除本条说说吗？";
            var text20 = "删除成功";
            var text21 = "请拖拽图片到此处";
            var text22 = "表情";
            var text23 = "删除";
            var text24 = "如果你看到这条说说，恭喜你已经配置成功并且可以正常使用了。当你发布一个说说之后，我将会自动消失。快去探索Artitalk吧<br>欢迎加入Artitalk的QQ交流群：1104585229<br>觉得本项目不错的话可以推荐给你的好友或者去GitHub点一个star，感谢支持";
            var text25 = "上传中";
            var text26 = "图片";
            var text27 = "音乐";
            var text28 = "视频";
            var text29 = "添加";
            var text30 = "上传的图片最大支持5M，请压缩后或换一个继续上传";
            var text31 = "上传的音乐最大支持10M，请压缩后或换一个继续上传";
            var text32 = "上传的视频最大支持30M，请压缩后或换一个继续上传";
            var text33 = "图片格式错误，请不要上传其他类型的文件";
            var text34 = "音频格式错误，请不要上传其他类型的文件";
            var text35 = "视频格式错误，请不要上传其他类型的文件";
            var textup = "上传ing";
            var loadingTxT = "加载中";
            var text36 = "用户名不能为空";
            var text37 = "密码不能为空";
            var text38 = "请在下方输入框进行修改然后点击保存即可";
            var text39 = "保存";
            var text40 = "评论";
            var text41 = "邮箱";
            var text42 = "昵称";        
            var text43 = "用户名与密码不匹配";
            var text44 = "登陆失败，常见错误有<br><li style='text-align:left;'>网络错误</li><li style='text-align:left;'>域名不在leancloud的域名白名单中被限制登录</li><li style='text-align:left;'>当前页面使用了其他leancloud应用导致登录到了其他应用所以失败</li>";
            var text45 = "未找到此用户";
            var text46 = "尝试错误密码次数过多，请稍后再试";
            break;
        case 'en':
            var text0 = "Published by";
            var text00 = "";
            var text1 = "load more...";
            var text2 = "Preview";
            var text3 = "Publish";
            var text4 = "logged";
            var text5 = "Ok";
            var text6 = "Sign out";
            var text7 = "Username";
            var text8 = "Password";
            var text9 = "Log in";
            var text10 = "Cancel";
            var text11 = "Post talk";
            var text12 = "Add pictures, videos, music";
            var text14 = "(Upload failed, if not for network reasons, please contact Artitalk developers)";
            var text15 = "Please log in first";
            var text16 = "Content can not be blank";
            var text17 = "Login failed, please check if the username and password are correct";
            var text18 = "Avatar url";
            var text19 = "Are you sure you want to devare this article?";
            var text20 = "Successfully devared";
            var text21 = "Please drag and drop pictures here";
            var text22 = "emoji";
            var text23 = "Devare";
            var text24 = "If you see this, congratulations, you have successfully configured and can be used normally. When you post one shuoshuo, I will disappear automatically. Quickly explore Artitalk.<br>Welcome to Artitalk’s QQ group: 1104585229<br>If you think this project is good, you can recommend it to your friends or go to GitHub to order a star.";
            var text25 = "uploading";
            var text26 = "image";
            var text27 = "music";
            var text28 = "video";
            var text29 = "Add";
            var text30 = "The uploaded image supports a maximum of 5M, please compress or change another one to continue uploading";
            var text31 = "The uploaded music supports a maximum of 10M, please compress or change another one to continue uploading";
            var text32 = "The uploaded video supports a maximum of 30M, please compress or change another one to continue uploading";
            var text33 = "Picture format error, please do not upload other types of files";
            var text34 = "The audio format is wrong, please do not upload other types of files";
            var text35 = "Video format error, please do not upload other types of files";
            var textup = "Uploading";
            var loadingTxT = "Loading";
            var text36 = "Username can not be empty";
            var text37 = "Password can not be empty";
            var text38 = "Please modify it in the input box below and click save";
            var text39 = "save";
            var text40 = "comments";
            var text41 = "Mailbox";
            var text42 = "Nickname";
            var text43 = "The username and password mismatch.";
            var text44 = "Request has been terminated Possible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.c";
            var text45 = "Could not find user.";
            var text46 = "You have entered incorrect passwords for too many times. Please try later or reset your password.";
            break;
        case 'es':
            var text0 = "Publicado por";
            var text00 = "";
            var text1 = "Carga más...";
            var text2 = "Avance";
            var text3 = "Lanzamiento";
            var text4 = "Registrado";
            var text5 = "Determinar";
            var text6 = "Desconectar";
            var text7 = "Usuario";
            var text8 = "Contraseña";
            var text9 = "Iniciar sesión";
            var text10 = "Cancelar";
            var text11 = "Publicar charla";
            var text12 = "Agrega fotos, videos, música";
            var text14 = "(Carga fallida, si no es por razones de red, comuníquese con los desarrolladores de Artitalk)";
            var text15 = "Por favor ingresa primero";
            var text16 = "El contenido no puede estar en blanco";
            var text17 = "Error de inicio de sesión, compruebe si el nombre de usuario y la contraseña son correctos";
            var text18 = "URL del avatar";
            var text19 = "¿Estás seguro de que deseas eliminar este artículo?";
            var text20 = "Eliminado con éxito";
            var text21 = "Arrastra y suelta fotos aquí";
            var text22 = "expresión";
            var text23 = "Eliminar";
            var text24 = "Si ve este artículo, felicidades, se ha configurado correctamente y se puede usar normalmente. Cuando publiques un comentario, desapareceré automáticamente. Explore rápidamente Artitalk. <br> Bienvenido al grupo QQ de Artitalk: 1104585229 <br> Si cree que este proyecto es bueno, puede recomendarlo a sus amigos o ir a GitHub para pedir una estrella, gracias por su apoyo.";
            var text25 = "cargando";
            var text26 = "imagen";
            var text27 = "música";
            var text28 = "vídeo";
            var text29 = "Añadir";
            var text30 = "La imagen cargada admite un máximo de 5 M, comprima o cambie otra para continuar cargando";
            var text31 = "La música cargada admite un máximo de 10 M, comprime o cambia otra para continuar cargando";
            var text32 = "El video subido admite un máximo de 30 M, comprima o cambie otro para continuar subiendo";
            var text33 = "Error de formato de imagen, no suba otros tipos de archivos";
            var text34 = "El formato de audio es incorrecto, no suba otros tipos de archivos";
            var text35 = "Error de formato de video, no suba otros tipos de archivos";
            var textup = "Cargando";
            var loadingTxT = "Cargando";
            var text36 = "El nombre de usuario no puede estar vacío";
            var text37 = "la contraseña no puede estar en blanco";
            var text38 = "Por favor, introduzca las modificaciones en el cuadro de abajo y haga clic en guardar";
            var text39 = "guardar";
            var text40 = "comentarios";
            var text41 = "Buzón";
            var text42 = "Apodo";
            var text43 = "El nombre de usuario y la contraseña no coinciden.";
            var text44 = "La solicitud ha sido cancelada Posibles causas: la red está fuera de línea, Access-Control-Allow-Origin no permite Origin, la página se está descargando, etc.c";
            var text45 = "No se pudo encontrar el usuario.";
            var text46 = "Ha introducido contraseñas incorrectas demasiadas veces. Inténtelo más tarde o restablezca su contraseña.";
            break;
    } 
    color1 = typeof(color1)==="undefined" || color1 === '' ? "RGBA(255, 125, 73, 0.75)":color1;
    color2 = typeof(color2)==="undefined" || color2 === '' ? "#9BCD9B":color2;
    color3 = typeof(color3)==="undefined" || color3 === '' ? "white":color3;
    pageSize = typeof(pageSize)==="undefined" ? '5':pageSize;
    function fadeIn(id){
        if(!document.getElementById(id)) return ;
        let nowEle = document.getElementById(id);
        nowEle.style.display = '';
    }   
    function fadeOut(id){
        if(!document.getElementById(id)) return ;
        let nowEle = document.getElementById(id);
        nowEle.style.display = 'none';
    }        
    // console.log(option);
    fadeIn('lazy');
    let query = new AV.Query('shuoshuo');
    let shuoNum = 0;
    query.descending('createdAt');
    query.limit(pageSize);
    query.skip(pageSize*pageNum);
    query.find().then(function (shuoContent){
        mid = "";
        shuoContent.forEach(function(atContent){
            shuoNum = shuoNum + 1;
            //OS icon judge
            let atOs = atContent.attributes.userOs;
            let osSvg="";
            switch(atOs){
                case "windows":
                    osSvg = "<svg t=\"1591348521231\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"16474\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M412.224 511.904c-47.712-24.512-94.08-36.96-137.888-36.96-5.952 0-11.936 0.192-17.952 0.704-55.872 4.64-106.912 19.36-139.744 30.816-8.704 3.2-17.632 6.56-26.816 10.304l-89.824 311.392c61.696-22.816 116.288-33.952 166.272-33.952 80.832 0 139.52 30.208 188 61.312 22.976-77.92 78.048-266.08 94.496-322.336-11.936-7.296-24.064-14.56-36.512-21.312zM528.352 591.072l-90.432 314.144c26.816 15.36 117.088 64.064 186.208 64.064 55.808 0 118.24-14.304 190.848-43.808l86.368-301.984c-58.624 18.912-114.88 28.512-167.456 28.512-95.936 0-163.104-31.104-205.504-60.96zM292.832 368.8c77.12 0.8 134.144 30.208 181.408 60.512l92.768-317.344c-19.552-11.2-70.816-39.104-107.872-48.608-24.384-5.696-50.016-8.608-77.216-8.608-51.808 0.96-108.384 13.952-172.896 39.808l-88.448 310.592c64.8-24.448 120.64-36.352 172.096-36.352 0.032 0 0.128 0 0.128 0zM1024 198.112c-58.816 22.816-116.192 34.464-171.04 34.464-91.68 0-159.296-31.808-203.104-62.368l-91.936 318.24c61.76 39.712 128.288 59.872 198.112 59.872 56.96 0 115.936-13.664 175.456-40.672l-0.192-2.208 3.744-0.896 88.928-306.432z\" p-id=\"16475\" fill=\"" + color3 + "\"></path></svg>" + " ";
                case "Android":
                    osSvg = "<svg t=\"1591349177001\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"17355\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M391.405714 276.004571a22.308571 22.308571 0 0 0 0-44.544c-11.995429 0-21.723429 10.276571-21.723428 22.272s9.728 22.272 21.723428 22.272z m241.152 0c11.995429 0 21.723429-10.276571 21.723429-22.272s-9.728-22.272-21.723429-22.272a22.308571 22.308571 0 0 0 0 44.544zM168.539429 381.147429a58.514286 58.514286 0 0 1 58.294857 58.294857v245.723428c0 32.585143-25.709714 58.843429-58.294857 58.843429S109.696 717.714286 109.696 685.165714v-245.723428c0-32 26.294857-58.294857 58.843429-58.294857z m605.732571 10.861714v380.562286c0 34.852571-28.013714 62.866286-62.281143 62.866285h-42.861714v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429s-58.843429-26.294857-58.843428-58.843429v-129.718857H472.594286v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429l-0.585143-129.718857H312.594286a62.683429 62.683429 0 0 1-62.866286-62.866285V392.009143h524.580571z m-132.571429-231.424c80.018286 41.142857 134.290286 119.990857 134.290286 210.870857H247.424c0-90.843429 54.272-169.728 134.838857-210.870857L341.705143 85.723429a8.338286 8.338286 0 0 1 2.852571-11.446858c3.986286-1.718857 9.142857-0.585143 11.446857 3.437715L397.147429 153.161143c34.852571-15.433143 73.728-23.990857 114.870857-23.990857s80.018286 8.557714 114.870857 23.990857l41.142857-75.446857c2.304-3.986286 7.424-5.156571 11.446857-3.437715a8.338286 8.338286 0 0 1 2.852572 11.446858zM914.267429 439.442286v245.723428c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429v-245.723428a58.148571 58.148571 0 0 1 58.294857-58.294857c32.585143 0 58.843429 25.709714 58.843429 58.294857z\" fill=\"" + color3 + "\" p-id=\"17356\"></path></svg>" + " ";
                case "Linux":
                    osSvg = "<svg t=\"1591349455279\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"17896\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M833.828 772.167c-14.708-27.427-28.724-65.173-32.06-95.097-7.064-63.345 7.001-95.581-26.311-157.655-20.001-37.27-47.167-69.818-69.762-105.374-57.008-89.708-35.862-181.666-78.106-273.828-14.677-32.021-39.272-58.288-73.372-69.27-40.023-12.889-88.039-6.905-123.821 15.09-97.955 60.213-26.601 240.65-82.234 332.558-34.997 57.817-72.677 108.993-92.906 175.374-15.962 52.376-11.905 116.451-74.135 139.232-16.782 6.143-41.737 5.268-50.966 23.624-5.79 11.518-1.802 24.689 0.951 36.449 2.356 10.066 3.024 19.861 1.87 30.14-1.651 14.71-7.417 28.869-8.274 43.641-0.878 15.142 8.565 24.551 21.704 30.534 47.398 21.585 113.582 34.279 164.669 43.764 66.028 12.258 59.608-7.377 115.821-23.029 39.692-11.052 88.466-13.955 129.206-6.827 43.073 7.536 72.966 44.046 112.09 48.73 33.22 0 210.129-91.293 212.144-131.077 1.811-35.802-33.736-33.163-46.508-56.979zM561.696 188.612c34.429 24.892-1.788 99.81-14.799 87.114 41.625-32.641-34.982-83.122-29.425-11.704-53.249-11.693-3.247-109.731 44.224-75.41z m-4.039 117.923c1.857 28.37-64.491 48.349-85.296 56.455-79.455-0.65-53.966-82.141 7.617-88.858 11.889-1.296 76.451 13.646 77.679 32.403zM407.938 198.841c42.337-29.134 70.265 43.258 33.357 66.249 16.796-88.043-79.787-11.981-12.48 11.418-26.974 29.286-46.681-59.91-20.877-77.667z m-57.874 731.028c-38.514-10.84-181.601-28.379-200.949-63.937-0.276-0.507-0.351-2.272-0.282-4.883-0.019-0.032-0.042-0.063-0.06-0.095-0.833-1.415-0.113-8.165 1.246-16.547 1.879-19.977 5.394-46.894 6.514-49.347 12.905-28.267 12.771-23.836 21.86-26.291 5.612-3.079 13.887-7.607 27.549-19.429 37.781-32.691 49.648-51.05 71.076-37.382 8.427 2.949 16.297 11.207 25.986 25.067a570.9 570.9 0 0 1 8.53 10.204c16.954 20.727 55.205 71.093 68.786 114.074 13.447 30 13.992 58.501-30.256 68.566z m290.721-232.992c-16.92 43.195-1.196 82.899-35.488 120.646-58.579 64.48-168.292 61.287-220.377 1.598 61.991-24.918-79.397-135.334-84.198-181.037-10.461-99.563 81.484-201.457 102.457-296.773 77.359 82.013 125.198-33.75 189.934 21.718 50.436 43.215 102.409 212.603 87.712 277.829-8.345 37.034-32.364 36.425-40.04 56.019z m103.371 199.109c-159.991 95.734-70.13-147.276-65.785-178.44 11.336 103.265 74.062 18.695 110.579 7.453-17.789 5.477 57.616 96.436 56.788 86.041 3.123 39.223-63.176 61.965-101.582 84.946z\" fill=\"" + color3 + "\" p-id=\"17897\"></path></svg>" + " ";
                case "iOS":
                    osSvg = "<svg t=\"1591349632686\"  viewBox=\"0 0 1084 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"18688\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z\" p-id=\"18689\" fill=\"" + color3 + "\"></path></svg>" + " ";
                case "Max":
                    osSvg = "<svg t=\"1591349632686\"  viewBox=\"0 0 1084 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"18688\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z\" p-id=\"18689\" fill=\"" + color3 + "\"></path></svg>" + " ";
                default:
                    osSvg = "<svg t=\"1591349738696\"  viewBox=\"0 0 1168 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"20407\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M787.333831 588.946093a75.189984 75.189984 0 0 0-75.093984 75.092984 75.189984 75.189984 0 0 0 75.093984 75.093984 75.165984 75.165984 0 0 0 75.067984-75.093984 75.165984 75.165984 0 0 0-75.067984-75.092984m0 222.841953a147.919968 147.919968 0 0 1-147.749968-147.748969c0-81.455982 66.292986-147.747968 147.749968-147.747968 81.431983 0 147.747968 66.291986 147.747968 147.747968 0 81.480982-66.315986 147.748968-147.747968 147.748969m89.452981 102.106978c0.342 0.244 1.317 0.585 2.315999 0.585h0.122l71.484985-39.496992c-1.706-4.022999-9.605998-23.478995-9.605998-43.739991a113.858976 113.858976 0 0 1 107.739977-113.613975c0.853-4.729999 5.557999-31.524993 5.557998-51.639989s-4.704999-46.88399-5.559998-51.637989a113.858976 113.858976 0 0 1-107.737977-113.565976c0-20.357996 7.923998-39.813991 9.605998-43.81299l-70.313985-39.057992-0.293-0.025a5.339999 5.339999 0 0 0-2.706 0.732 196.753958 196.753958 0 0 1-26.014994 21.819995c-21.699995 15.239997-42.153991 22.967995-60.951987 22.967995-18.919996 0-39.594991-7.874998-61.390987-23.405995a194.705958 194.705958 0 0 1-26.160994-22.283995 5.777999 5.777999 0 0 0-2.729999-0.707h-0.245l-72.824985 40.032992c1.706 4.046999 9.579998 23.479995 9.579998 43.73999A113.858976 113.858976 0 0 1 528.896886 614.350088c-0.854 4.729999-5.509999 31.524993-5.509998 51.639989s4.655999 46.90799 5.533998 51.661989a113.858976 113.858976 0 0 1 107.763977 113.589975c0 20.334996-7.972998 39.863991-9.679998 43.788991l68.973985 38.545992h0.146c1.024 0 1.95-0.365 2.317-0.585a200.849957 200.849957 0 0 1 26.428994-23.161995c22.088995-16.188997 43.079991-24.429995 62.414987-24.429995 19.552996 0 40.715991 8.387998 62.949986 24.917995 14.921997 11.068998 25.259995 22.185995 26.551995 23.575995m22.673995 108.397976c-13.774997-0.025-27.135994-5.704999-35.765993-15.213996-11.775997-12.896997-49.005989-46.44599-79.530982-46.44599-30.280993 0-68.119985 33.767993-78.993984 45.54399-8.606998 9.386998-21.869995 14.969997-35.499992 14.969997-6.483999 0-12.603997-1.243-18.186996-3.706l-0.975-0.414-92.69698-51.833988-0.926-0.683a44.46999 44.46999 0 0 1-14.920996-53.735989c0.049-0.146 8.532998-19.699996 8.532998-37.594992a98.376979 98.376979 0 0 0-98.254979-98.254978h-3.900999c-15.505997 0-28.159994-13.799997-32.182993-35.108993-0.341-1.706-7.923998-42.178991-7.923999-74.044984 0-31.913993 7.557998-72.361984 7.899999-74.117984 4.119999-21.576995 16.992996-35.449992 32.816993-35.083993h3.266999a98.400979 98.400979 0 0 0 98.279979-98.303978c0-17.846996-8.484998-37.399992-8.559998-37.619992a44.34899 44.34899 0 0 1 15.068996-53.661989l0.95-0.658 97.839979-53.759988 1.025-0.415c5.485999-2.364999 11.507998-3.534999 17.895996-3.534999 13.604997 0 26.891994 5.436999 35.595992 14.629997 11.579998 12.115997 48.17699 43.640991 77.774984 43.64099 29.354994 0 65.755986-30.914993 77.287983-42.812991 8.654998-8.996998 21.844995-14.335997 35.302992-14.335997 6.509999 0 12.653997 1.22 18.285997 3.657l0.974999 0.414 94.47698 52.516988 0.95 0.658c16.895996 11.751997 23.332995 34.889993 14.945997 53.735989-0.05 0.146-8.532998 19.699996-8.532999 37.545992a98.400979 98.400979 0 0 0 98.254979 98.279978h3.29c15.775997-0.34 28.719994 13.506997 32.817993 35.107993 0.317 1.707 7.899998 42.203991 7.899998 74.069984 0 31.889993-7.582998 72.410984-7.949998 74.117984-4.045999 21.551995-16.991996 35.424992-32.766993 35.059993h-3.291a98.400979 98.400979 0 0 0-98.254979 98.278978c0 17.846996 8.483998 37.449992 8.556999 37.619992a44.42199 44.42199 0 0 1-15.017997 53.710989l-0.927 0.683-96.133979 53.100988-0.975 0.415a44.88499 44.88499 0 0 1-17.846996 3.583999z m222.061952-705.339848a48.76199 48.76199 0 1 1-97.523979 0V121.977194c0-13.457997-10.873998-24.453995-24.307995-24.453995H121.829974c-13.262997 0-24.306995 10.970998-24.306995 24.453995v584.995874c0 13.457997 10.873998 24.453995 24.307995 24.453995h219.499953a48.76199 48.76199 0 1 1 0 97.523979H48.908989A48.76199 48.76199 0 0 1 0 780.191052V48.76121C0 21.822215 21.893995 0.00022 48.907989 0.00022h1023.706781a48.76199 48.76199 0 0 1 48.907989 48.76199v268.189942zM219.427953 975.23701c0-26.940994 21.991995-48.76199 48.981989-48.761989h194.607959a48.76199 48.76199 0 1 1 0 97.523979H268.433942a48.76199 48.76199 0 0 1-49.005989-48.76199z\" p-id=\"20408\" fill=\"" + color3 + "\"></path></svg>" + " ";
            }
            // Avatar init
            let shuoAvatar = atContent.attributes.avatar;
            shuoAvatar = typeof(shuoAvatar)==="undefined"?"https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png":shuoAvatar;
            let currentUser = AV.User.current();
            let hideIcon = currentUser?'':'style="display: none"';
            //Time process
            let timeForm = atContent.createdAt;
            let nowDate = new Date(timeForm);
            function timeFormat(time){
                return time < 10 ? '0'+time : time;
            }
            let resDate = nowDate.getFullYear() + '-' + timeFormat(nowDate.getMonth()+1) + '-' + timeFormat(nowDate.getDate());
            let resTime = timeFormat(nowDate.getHours()) + ':' + timeFormat(nowDate.getMinutes()) + ':' + timeFormat(nowDate.getSeconds());
            let atHour = nowDate.getHours();
            let timeSvg = "";
            switch(timeSvg){
                case atHour >= 0 && atHour < 5:
                    timeSvg = "<svg t=\"1591350196611\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24683\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z\" fill=\"" + color3 + "\" p-id=\"24684\"></path></svg>" + " ";
                case atHour >=5 && atHour < 6:
                    timeSvg = "<svg t=\"1591350273094\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24973\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z\" fill=\"" + color3 + "\" p-id=\"24974\"></path></svg>" + " ";
                case atHour >=6 && atHour < 8:
                    timeSvg = "<svg t=\"1591350470149\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"25217\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z\" fill=\"" + color3 + "\" p-id=\"25218\"></path></svg>" + " ";
                case atHour >= 8 && atHour < 11:
                    timeSvg = "<svg t=\"1591350526184\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"26011\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z\" p-id=\"26012\" fill=\"" + color3 + "\"></path></svg>" + " ";
                case atHour >= 11 && atHour < 13:
                    timeSvg = "<svg t=\"1591350817881\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"29283\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0\" p-id=\"29284\" fill=\"" + color3 + "\"></path></svg>" + " ";
                case atHour >= 13 && atHour < 17:
                    timeSvg = "<svg t=\"1591350596667\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27504\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z\" p-id=\"27505\" fill=\"" + color3 + "\"></path></svg>" + " ";
                case atHour >= 17 && atHour < 18:
                    timeSvg = "<svg t=\"1591350638906\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27813\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z\" p-id=\"27814\" fill=\"" + color3 + "\"></path><path d=\"M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z\" p-id=\"27815\" fill=\"" + color3 + "\"></path></svg>" + " ";
                case atHour >= 18 && atHour < 21:
                    timeSvg = "<svg t=\"1591350675688\"  viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"28653\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z\" p-id=\"28654\" fill=\"" + color3 + "\"></path></svg>" + " ";
            }
            //Content process
            let atCommentTrue = "";
            if(atComment === 0){
                atCommentTrue = "display: none";
            }
            let id = atContent.id;
            let shuoshuoPerContent = atContent.attributes.atContentHtml;
            let commentSvg = "<svg t=\"1599605913184\" class=\"icon\" viewBox=\"0 0 1024 1024\" cursor=\"pointer\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3173\" width=\"16\" height=\"16\" fill=\""+color3+"\"><path d=\"M512 0C226.742857 0 0 197.485714 0 446.171429c0 138.971429 73.142857 270.628571 190.171429 351.085714L190.171429 1024l226.742857-138.971429c29.257143 7.314286 65.828571 7.314286 95.085714 7.314286 285.257143 0 512-197.485714 512-446.171429C1024 197.485714 797.257143 0 512 0zM256 512C219.428571 512 190.171429 482.742857 190.171429 446.171429S219.428571 380.342857 256 380.342857c36.571429 0 65.828571 29.257143 65.828571 65.828571S292.571429 512 256 512zM512 512C475.428571 512 446.171429 482.742857 446.171429 446.171429S475.428571 380.342857 512 380.342857c36.571429 0 65.828571 29.257143 65.828571 65.828571S548.571429 512 512 512zM768 512C731.428571 512 702.171429 482.742857 702.171429 446.171429s29.257143-65.828571 65.828571-65.828571c36.571429 0 65.828571 29.257143 65.828571 65.828571S804.571429 512 768 512z\" p-id=\"3174\" fill=\""+color3+"\"></path></svg>";
            let contengMid = "<li><span class=\"shuoshuo_author_img\" onclick='atEvery.prototype.atEdit(\""+id+"\")'><img  id='atAvatar"+id+"'  src=\"" + shuoAvatar + "\"class=\"artitalk_avatar gallery-group-img\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\" id='atId"+id+"' ><div " + hideIcon + "id='operate"+id+"'  class=\"delete_right\"><svg t=\"1591347978744\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"14459\" width=\"20\" height=\"20\" style=\"display: inline\"  onclick=\"atEvery.prototype.delete('"+id+"')\"  ><path d=\"M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z\" p-id=\"14460\" fill=\"" + color3 + "\"></path><path d=\"M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z\" p-id=\"14461\" fill=\"" + color3 + "\"></path></svg></div><div id='forEdit"+id+"'>" + shuoshuoPerContent + "</div><p class=\"shuoshuo_time\">" + "<span style=\"\"> " + " " + osSvg + atOs + "</span><span>&nbsp&nbsp" + timeSvg + resDate + " " + resTime + "" + "</span><span style='float: right'><span style='"+atCommentTrue+";vertical-align:top;' onclick='atEvery.prototype.commentInit(\""+id+"\")'  id='atCoInit"+id+"'>"+commentSvg+"<span style='padding: 0 0 0 8px;color:"+color3+"'; id= 'coValue"+id+"'>loading</span></span>&nbsp<span style='vertical-align:top;' id='"+id+"'></span></p></span></li>";
            mid += contengMid;
        })  
        let originString = document.getElementById('ccontent').innerHTML;
        originString = originString === ''?"<ul class=\"cbp_tmtimeline\" id=\"maina\">":originString;
        originString = originString.replace(/(.*)<\/ul>/,'$1 ');
        originString += mid + '</ul>';
        // console.log(originString);
        if (shuoNum === 0 && pageNum === 0) {
            originString = "<ul class=\"cbp_tmtimeline\" id=\"maina\"><li><span class=\"shuoshuo_author_img\"><img src=\"https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png\" class=\"artitalk_avatar gallery-group-img\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\"><p>" + text24 + "</p><p class=\"shuoshuo_time\"><span style=\"\"> 由Artitalk发表</span><span style=\"float:right;\"><svg t=\"1591350675688\"  viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"28653\" width=\"10\" height=\"10\" style=\"display: inline\"></svg> 2020-04-10 20:35:25</span></p></span></li></ul>";
        }
        document.getElementById('ccontent').innerHTML = originString;
        if(atComment !== 0){
            shuoContent.forEach(function(count){
                let countQuery = new AV.Query('atComment');
                let id = count.id;
                countQuery.equalTo('atId',id);
                countQuery.descending('createdAt');
                countQuery.find().then(res => {
                    let countId = 'coValue'+id;
                    document.getElementById(countId).innerHTML = res.length;
                })            
            })
        }
        fadeOut('lazy');
        if(shuoNum !== 0){
            fadeIn('readmore');
        }else if(pageNum !== 0){
            document.getElementById('readButton').innerHTML = '<center>已经到底了哦~</center>';
            document.getElementById('readButton').style.opacity = '0.5';
        }
    })

    atEvery.prototype.atEdit=function(id){
        function fadeIn(id){
            if(!document.getElementById(id)) return ;
            let nowEle = document.getElementById(id);
            nowEle.style.display = '';
        }   
        function fadeOut(id){
            if(!document.getElementById(id)) return ;
            let nowEle = document.getElementById(id);
            nowEle.style.display = 'none';
        }        
        let currentuser = AV.User.current();
        if(!currentuser)    return ;
        fadeIn('lazy');
        let queryEdit = new AV.Query('shuoshuo');
        queryEdit.equalTo('objectId',id);
        queryEdit.find().then(res =>{
            res.forEach(function(atom){
                let originString = "<ul class=\"cbp_tmtimeline\" id=\"maina\"><li><span class=\"shuoshuo_author_img\"><img src=\"https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png\" class=\"artitalk_avatar gallery-group-img\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\"><p>" + text38 + "</p><p class=\"shuoshuo_time\"><span style=\"\"> 由Artitalk发表</span><span style=\"float:right;\"><svg t=\"1591350675688\"  viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"28653\" width=\"10\" height=\"10\" style=\"display: inline\"></svg> 2020-04-10 20:35:25</span></p></span></li></ul>";
                document.getElementById('ccontent').innerHTML = originString;
                let changeId = document.getElementById('atSave');
                changeId.id='atEditsaveButton';
                document.getElementById('atEditsaveButton').innerHTML = text39;
                fadeOut('readmore');
                changeId.setAttribute('onclick',"atEvery.prototype.atEditsave(\""+id+"\")");
                pubShuo.click();
                document.getElementById('neirong').value = atom.attributes.atContentMd;
                fadeOut('lazy');
            })
        })
    }

    atEvery.prototype.atEditsave=function(id){
        fadeIn('lazy');
        let beginPreview = document.getElementById('preview');
        beginPreview.onclick = function(){
            let preCon = document.getElementById('preview');
            if(preCon.className.indexOf('preview_now')!==-1){
                preCon.classList.remove('preview_now');
            }else{
                preCon.classList.add('preview_now');
            }
        }
        function translate(beforTran){
            if(typeof beforTran === 'undefined')   return ;
            for(let key in atEmojiQQ){
                let keyAt = '['+key+']';
                let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmojiQQ[key] + "'/>";
                while(beforTran.indexOf(keyAt)!=-1){
                    beforTran = beforTran.replace(keyAt,emojiAt);
                }
            }
            for(let key in atEmojiTB){
                let keyAt = '['+key+']';
                let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmojiTB[key] + "'/>";
                while(beforTran.indexOf(keyAt)!=-1){
                    beforTran = beforTran.replace(keyAt,emojiAt);
                }
            }
            for(let key in atEmojiBB){
                let keyAt = '['+key+']';
                let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmojiBB[key] + "'/>";
                while(beforTran.indexOf(keyAt)!=-1){
                    beforTran = beforTran.replace(keyAt,emojiAt);
                }
            }
            for(let key in atEmoji){
                let keyAt = '['+key+']';
                let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmoji[key] + "'/>";
                while(beforTran.indexOf(keyAt)!=-1){
                    beforTran = beforTran.replace(keyAt,emojiAt);
                }
            }
            return beforTran;
        }
        let shuoshuoContent = document.getElementById('neirong').value;
        let shuoshuoContentMd = shuoshuoContent;
        let atEditOver = AV.Object.createWithoutData('shuoshuo',id);
        atEditOver.set('atContentMd',shuoshuoContentMd);
        shuoshuoContent = translate(shuoshuoContent);
        if(shuoshuoContent === ''){
            location.reload();
            return ;
        }
        let converte = new showdown.Converter();
        converte.setOption('strikethrough', 1);
        let shuoshuoContentHtml = converte.makeHtml(shuoshuoContent);
        atEditOver.set('atContentHtml',shuoshuoContentHtml);
        atEditOver.save().then(function(){
            location.reload();  
        });
    }
    
    atEvery.prototype.saveComment=function(id,option){
        document.getElementById('shuoshuo_input').style.display = 'none'
        function fadeIn(id){
            if(!document.getElementById(id)) return ;
            let nowEle = document.getElementById(id);
            nowEle.style.display = '';
        }   
        function fadeOut(id){
            if(!document.getElementById(id)) return ;
            let nowEle = document.getElementById(id);
            nowEle.style.display = 'none';
        } 
        function translate(beforTran){
            if(typeof beforTran === 'undefined')   return ;
            for(let key in atEmojiQQ){
                let keyAt = '['+key+']';
                let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmojiQQ[key] + "'/>";
                while(beforTran.indexOf(keyAt)!=-1){
                    beforTran = beforTran.replace(keyAt,emojiAt);
                }
            }
            for(let key in atEmojiTB){
                let keyAt = '['+key+']';
                let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmojiTB[key] + "'/>";
                while(beforTran.indexOf(keyAt)!=-1){
                    beforTran = beforTran.replace(keyAt,emojiAt);
                }
            }
            for(let key in atEmojiBB){
                let keyAt = '['+key+']';
                let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmojiBB[key] + "'/>";
                while(beforTran.indexOf(keyAt)!=-1){
                    beforTran = beforTran.replace(keyAt,emojiAt);
                }
            }
            // console.log(atEmoji);
            for(let key in atEmoji){
                let keyAt = '['+key+']';
                let emojiAt = "<img class='atemoji gallery-group-img' src='" + atEmoji[key] + "'/>";
                while(beforTran.indexOf(keyAt)!=-1){
                    beforTran = beforTran.replace(keyAt,emojiAt);
                }
            }
            return beforTran;
        }
        fadeIn('lazy');
        let comContent = document.getElementById('neirong').value;
        let comment = AV.Object.extend('atComment');
        let atComment = new comment();
        comContent = translate(comContent);
        let converte = new showdown.Converter();
        converte.setOption('strikethrough', 1);
        let atCommentHtml = converte.makeHtml(comContent);
        let currentUser = AV.User.current();
        let comEmail = document.getElementById('email').value;
        let comNick = document.getElementById('commentNick').value;
        let comEmailMd5 = md5(comEmail);
        if(!currentUser){
            if(comNick ==="" || comEmail === ""){
                document.getElementById('neirong').value = "昵称，邮箱均为必填项\n" + document.getElementById('neirong').value
                fadeOut('lazy');
                return ;
            }
        }
        let atGravatar = "https://cdn.staticdn.net/avatar/"+comEmailMd5+"?d=mp&s=80";
        let nowDate = new Date();
        function timeFormat(time){
            return time < 10 ? '0'+time : time;
        }
        let resDate = nowDate.getFullYear() + '-' + timeFormat(nowDate.getMonth()+1) + '-' + timeFormat(nowDate.getDate());
        let resTime = timeFormat(nowDate.getHours()) + ':' + timeFormat(nowDate.getMinutes()) + ':' + timeFormat(nowDate.getSeconds());
        let atHour = nowDate.getHours();
        let timeSvg = "";
        switch(timeSvg){
            case atHour >= 0 && atHour < 5:
                timeSvg = "<svg t=\"1591350196611\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24683\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z\" fill=\"" + color3 + "\" p-id=\"24684\"></path></svg>" + " ";
            case atHour >=5 && atHour < 6:
                timeSvg = "<svg t=\"1591350273094\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24973\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z\" fill=\"" + color3 + "\" p-id=\"24974\"></path></svg>" + " ";
            case atHour >=6 && atHour < 8:
                timeSvg = "<svg t=\"1591350470149\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"25217\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z\" fill=\"" + color3 + "\" p-id=\"25218\"></path></svg>" + " ";
            case atHour >= 8 && atHour < 11:
                timeSvg = "<svg t=\"1591350526184\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"26011\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z\" p-id=\"26012\" fill=\"" + color3 + "\"></path></svg>" + " ";
            case atHour >= 11 && atHour < 13:
                timeSvg = "<svg t=\"1591350817881\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"29283\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0\" p-id=\"29284\" fill=\"" + color3 + "\"></path></svg>" + " ";
            case atHour >= 13 && atHour < 17:
                timeSvg = "<svg t=\"1591350596667\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27504\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z\" p-id=\"27505\" fill=\"" + color3 + "\"></path></svg>" + " ";
            case atHour >= 17 && atHour < 18:
                timeSvg = "<svg t=\"1591350638906\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27813\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z\" p-id=\"27814\" fill=\"" + color3 + "\"></path><path d=\"M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z\" p-id=\"27815\" fill=\"" + color3 + "\"></path></svg>" + " ";
            case atHour >= 18 && atHour < 21:
                timeSvg = "<svg t=\"1591350675688\"  viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"28653\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z\" p-id=\"28654\" fill=\"" + color3 + "\"></path></svg>" + " ";
        }
        if(currentUser){
            let adminAvatar = typeof(currentUser.attributes.img) === "undefined" ? "https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png":currentUser.attributes.img;
            atComment.set('adminAvatar',adminAvatar);
            atGravatar = adminAvatar;
            comNick = currentUser.attributes.username;
        }
        atComment.set('atId',id);
        atComment.set('commentContent',atCommentHtml);
        if(!currentUser){
            atComment.set('email',comEmailMd5);
        }
        atComment.set('nick',comNick);
        atComment.save().then(function (res) {
            let replySvg = "<span style=\"float: right\"><svg t=\"1599635243920\" cursor=\"pointer\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2431\" width=\"16\" height=\"16\" fill=\""+color3+"\"><path d=\"M853.3 893.6c-17.5 0-34.6-6.8-47.5-19.8l-44.4-44.4c-77.9-78.3-133-133.6-221.7-147.3v119.6c0 27.3-16.3 51.6-41.5 62.1s-53.9 4.7-73.2-14.6l-302-302c-26.2-26.2-26.2-68.8 0-95l302.1-302.1c19.3-19.3 48-25 73.2-14.6 25.2 10.4 41.5 34.8 41.5 62.1v145.5c140.6 4.1 249.5 73.7 315.4 202.1 48.2 93.9 65.4 206.8 65.4 281.2 0 27.3-16.3 51.7-41.5 62.1-8.3 3.4-17.1 5.1-25.8 5.1zM450.2 589.3H495c153.9 0 235.5 82 330 177l2.5 2.5c-5.4-48.3-18.7-118-52-182.6-52.3-101.9-136.1-153.6-248.8-153.6h-76.5V251.7l-248 248 248 248V589.3z\" p-id=\"2432\" fill=\""+color3+"\"></path></svg></span>";
            let originComment = document.getElementById('ccontent').innerHTML;
            let comList = "<li style=\"margin: 0 0 0 48px\"><span class=\"shuoshuo_author_img\"><img src=\"" + atGravatar + "\"class=\"artitalk_avatar gallery-group-img\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\"  >  <div>" + atCommentHtml + "</div><p class=\"shuoshuo_time\">" + "<span>" + comNick + "</span><span>&nbsp&nbsp" + timeSvg + resDate + " " + resTime + replySvg + "</span></p></span></li>";
            let positon = originComment.indexOf('</li>') + 5;
            let nowComment = originComment.slice(0,positon) + comList + originComment.slice(positon);
            document.getElementById('ccontent').innerHTML = "";
            document.getElementById('neirong').value = "";
            document.getElementById('email').value = "";
            document.getElementById('commentNick').value = "";
            document.getElementById('ccontent').innerHTML = nowComment;
            fadeOut('preview');
            fadeOut('lazy');
        })            
    }
    atEvery.prototype.atReplay=function(){
        document.getElementById('pubComment').click();
    }
    atEvery.prototype.commentInit = function(id,option){
        function fadeIn(id){
            if(!document.getElementById(id)) return ;
            let nowEle = document.getElementById(id);
            nowEle.style.display = '';
        }   
        function fadeOut(id){
            if(!document.getElementById(id)) return ;
            let nowEle = document.getElementById(id);
            nowEle.style.display = 'none';
        } 
        document.getElementById('neirong').placeholder = "";
        let initButton = 'atCoInit'+id;
        let countId = "coValue"+id;
        fadeOut(countId);
        document.getElementById(initButton).setAttribute('onclick','location.reload()');
        fadeIn('commentNick');fadeOut('atSave');fadeIn('commentSave');fadeIn('lazy');fadeIn('pubComment');fadeOut('readmore');fadeOut('pubShuo');fadeOut('switchUser');
        document.getElementById('pubComment').title = text40;
        document.getElementById('pubComment').style.display = 'inline';
        let nowButton = document.getElementById('pubComment');
        nowButton.onclick = function(){
            if(document.getElementById('shuoshuo_input').style.display===""){
                fadeOut('shuoshuo_input');
            }else{
                fadeIn('shuoshuo_input');
            }
        }
        document.getElementById('email').placeholder = text41;
        document.getElementById('commentNick').placeholder = text42;
        let originShuo = document.getElementById("atId"+id).innerHTML;
        let originAvatar = document.getElementById('atAvatar'+id).src;
        let originString = "<ul class=\"cbp_tmtimeline\" id=\"maina\"><li><span class=\"shuoshuo_author_img\"><img src=\""+originAvatar+"\" class=\"artitalk_avatar gallery-group-img\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\">"+originShuo+"</p></span></li></ul>";
        document.getElementById('ccontent').innerHTML = originString;    
        let mid="";        
        let currentUser = AV.User.current();
        let commentQuery = new AV.Query('atComment');
        commentQuery.equalTo('atId',id);
        commentQuery.descending('createdAt');
        commentQuery.find().then(res => {
            res.forEach(function(comment){
                let timeForm = comment.createdAt;
                function timeFormat(time){
                    return time < 10 ? '0'+time : time;
                }
                let nowDate = new Date(timeForm);
                let resDate = nowDate.getFullYear() + '-' + timeFormat(nowDate.getMonth()+1) + '-' + timeFormat(nowDate.getDate());
                let resTime = timeFormat(nowDate.getHours()) + ':' + timeFormat(nowDate.getMinutes()) + ':' + timeFormat(nowDate.getSeconds());
                let atHour = nowDate.getHours();
                let timeSvg = "";
                switch(timeSvg){
                    case atHour >= 0 && atHour < 5:
                        timeSvg = "<svg t=\"1591350196611\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24683\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z\" fill=\"" + color3 + "\" p-id=\"24684\"></path></svg>" + " ";
                    case atHour >=5 && atHour < 6:
                        timeSvg = "<svg t=\"1591350273094\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"24973\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z\" fill=\"" + color3 + "\" p-id=\"24974\"></path></svg>" + " ";
                    case atHour >=6 && atHour < 8:
                        timeSvg = "<svg t=\"1591350470149\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"25217\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z\" fill=\"" + color3 + "\" p-id=\"25218\"></path></svg>" + " ";
                    case atHour >= 8 && atHour < 11:
                        timeSvg = "<svg t=\"1591350526184\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"26011\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z\" p-id=\"26012\" fill=\"" + color3 + "\"></path></svg>" + " ";
                    case atHour >= 11 && atHour < 13:
                        timeSvg = "<svg t=\"1591350817881\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"29283\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0\" p-id=\"29284\" fill=\"" + color3 + "\"></path></svg>" + " ";
                    case atHour >= 13 && atHour < 17:
                        timeSvg = "<svg t=\"1591350596667\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27504\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z\" p-id=\"27505\" fill=\"" + color3 + "\"></path></svg>" + " ";
                    case atHour >= 17 && atHour < 18:
                        timeSvg = "<svg t=\"1591350638906\"  viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27813\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z\" p-id=\"27814\" fill=\"" + color3 + "\"></path><path d=\"M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z\" p-id=\"27815\" fill=\"" + color3 + "\"></path></svg>" + " ";
                    case atHour >= 18 && atHour < 21:
                        timeSvg = "<svg t=\"1591350675688\"  viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"28653\" width=\"10\" height=\"10\"  style=\"display: inline\"><path d=\"M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z\" p-id=\"28654\" fill=\"" + color3 + "\"></path></svg>" + " ";
                }
                let comContent = comment.attributes.commentContent;
                let commentNick = comment.attributes.nick;
                let comEmail = comment.attributes.email;
                let adminAvatar = comment.attributes.adminAvatar;
                let atGravatar = "https://cdn.staticdn.net/avatar/"+comEmail+"?d=mp&s=80";
                if(typeof(adminAvatar) !== "undefined"){
                    atGravatar = adminAvatar;
                }
                let comAvatar = atGravatar;
                let replySvg = "<span style=\"float: right\"><svg t=\"1599635243920\" onclick='atEvery.prototype.atReplay()' cursor=\"pointer\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2431\" width=\"16\" height=\"16\" fill=\""+color3+"\"><path d=\"M853.3 893.6c-17.5 0-34.6-6.8-47.5-19.8l-44.4-44.4c-77.9-78.3-133-133.6-221.7-147.3v119.6c0 27.3-16.3 51.6-41.5 62.1s-53.9 4.7-73.2-14.6l-302-302c-26.2-26.2-26.2-68.8 0-95l302.1-302.1c19.3-19.3 48-25 73.2-14.6 25.2 10.4 41.5 34.8 41.5 62.1v145.5c140.6 4.1 249.5 73.7 315.4 202.1 48.2 93.9 65.4 206.8 65.4 281.2 0 27.3-16.3 51.7-41.5 62.1-8.3 3.4-17.1 5.1-25.8 5.1zM450.2 589.3H495c153.9 0 235.5 82 330 177l2.5 2.5c-5.4-48.3-18.7-118-52-182.6-52.3-101.9-136.1-153.6-248.8-153.6h-76.5V251.7l-248 248 248 248V589.3z\" p-id=\"2432\" fill=\""+color3+"\"></path></svg></span>";
                let comList = "<li style=\"margin: 0 0 0 48px\"><span class=\"shuoshuo_author_img\"><img src=\"" + comAvatar + "\"class=\"artitalk_avatar gallery-group-img\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\"  >  <div>" + comContent + "</div><p class=\"shuoshuo_time\">" + "<span>" + commentNick + "</span><span>&nbsp&nbsp" + timeSvg + resDate + " " + resTime + replySvg + "</span></p></span></li>";
                mid += comList;
            })
            let originString = document.getElementById('ccontent').innerHTML;
            originString = originString.replace(/(.*)<\/ul>/,'$1 ');
            originString += mid + '</ul>';
            document.getElementById('ccontent').innerHTML = originString;
        }).then(function(){
            fadeIn('email');
            if(currentUser){
                fadeOut('commentNick');
                fadeOut('email');
            } 
            fadeIn('email');
            fadeOut('lazy');
        })
        let saveComment = document.getElementById('commentSave');
        saveComment.onclick=function(){
            atEvery.prototype.saveComment(id,option);
        }
    }

}

