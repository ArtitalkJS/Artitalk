
var version="v1.1.8";
(function() {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.JS_SHA1_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  var createOutputMethod = function (outputType) {
    return function (message) {
      return new Sha1(true).update(message)[outputType]();
    };
  };

  var createMethod = function () {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Sha1();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function (method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash('sha1').update(message, 'utf8').digest('hex');
      } else if (message.constructor === ArrayBuffer) {
        message = new Uint8Array(message);
      } else if (message.length === undefined) {
        return method(message);
      }
      return crypto.createHash('sha1').update(new Buffer(message)).digest('hex');
    };
    return nodeMethod;
  };

  function Sha1(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    this.h0 = 0x67452301;
    this.h1 = 0xEFCDAB89;
    this.h2 = 0x98BADCFE;
    this.h3 = 0x10325476;
    this.h4 = 0xC3D2E1F0;

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  Sha1.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString = typeof(message) !== 'string';
    if (notString && message.constructor === root.ArrayBuffer) {
      message = new Uint8Array(message);
    }
    var code, index = 0, i, length = message.length || 0, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if(notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha1.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha1.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4;
    var f, j, t, blocks = this.blocks;

    for(j = 16; j < 80; ++j) {
      t = blocks[j - 3] ^ blocks[j - 8] ^ blocks[j - 14] ^ blocks[j - 16];
      blocks[j] =  (t << 1) | (t >>> 31);
    }

    for(j = 0; j < 20; j += 5) {
      f = (b & c) | ((~b) & d);
      t = (a << 5) | (a >>> 27);
      e = t + f + e + 1518500249 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = (a & b) | ((~a) & c);
      t = (e << 5) | (e >>> 27);
      d = t + f + d + 1518500249 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = (e & a) | ((~e) & b);
      t = (d << 5) | (d >>> 27);
      c = t + f + c + 1518500249 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = (d & e) | ((~d) & a);
      t = (c << 5) | (c >>> 27);
      b = t + f + b + 1518500249 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = (c & d) | ((~c) & e);
      t = (b << 5) | (b >>> 27);
      a = t + f + a + 1518500249 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 40; j += 5) {
      f = b ^ c ^ d;
      t = (a << 5) | (a >>> 27);
      e = t + f + e + 1859775393 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = a ^ b ^ c;
      t = (e << 5) | (e >>> 27);
      d = t + f + d + 1859775393 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = e ^ a ^ b;
      t = (d << 5) | (d >>> 27);
      c = t + f + c + 1859775393 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = d ^ e ^ a;
      t = (c << 5) | (c >>> 27);
      b = t + f + b + 1859775393 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = c ^ d ^ e;
      t = (b << 5) | (b >>> 27);
      a = t + f + a + 1859775393 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 60; j += 5) {
      f = (b & c) | (b & d) | (c & d);
      t = (a << 5) | (a >>> 27);
      e = t + f + e - 1894007588 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = (a & b) | (a & c) | (b & c);
      t = (e << 5) | (e >>> 27);
      d = t + f + d - 1894007588 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = (e & a) | (e & b) | (a & b);
      t = (d << 5) | (d >>> 27);
      c = t + f + c - 1894007588 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = (d & e) | (d & a) | (e & a);
      t = (c << 5) | (c >>> 27);
      b = t + f + b - 1894007588 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = (c & d) | (c & e) | (d & e);
      t = (b << 5) | (b >>> 27);
      a = t + f + a - 1894007588 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 80; j += 5) {
      f = b ^ c ^ d;
      t = (a << 5) | (a >>> 27);
      e = t + f + e - 899497514 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = a ^ b ^ c;
      t = (e << 5) | (e >>> 27);
      d = t + f + d - 899497514 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = e ^ a ^ b;
      t = (d << 5) | (d >>> 27);
      c = t + f + c - 899497514 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = d ^ e ^ a;
      t = (c << 5) | (c >>> 27);
      b = t + f + b - 899497514 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = c ^ d ^ e;
      t = (b << 5) | (b >>> 27);
      a = t + f + a - 899497514 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
  };

  Sha1.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;

    return HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
           HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
           HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
           HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
           HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
           HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
           HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
           HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
           HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
           HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
           HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
           HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
           HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
           HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
           HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
           HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
           HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
           HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
           HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
           HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F];
  };

  Sha1.prototype.toString = Sha1.prototype.hex;

  Sha1.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;

    return [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF
    ];
  };

  Sha1.prototype.array = Sha1.prototype.digest;

  Sha1.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(20);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    return buffer;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha1 = exports;
    if (AMD) {
      define(function () {
        return exports;
      });
    }
  }
})();
/* SHA1 end */

var css=".shuoshuo_row{width: 100%;display: flex;}.child{flex: 1;}#shuoshuo_content {padding: 10px;/* min-height: 500px; */}/* shuo */body.theme-dark .cbp_tmtimeline::before {background: RGBA(255, 255, 255, 0.06);}ul.cbp_tmtimeline {padding: 0;}.cbp_tmtimeline {margin: 30px 0 0 0;padding: 0;list-style: none;display: inline;position: relative;}/* The line */.cbp_tmtimeline:before {content: \"\";position: absolute;top: 0;bottom: 0;width: 4px;background: RGBA(0, 0, 0, 0.02);left: 80px;margin-left: 10px;}/* The date/time */.cbp_tmtimeline>li .cbp_tmtime {display: block;/* width: 29%; *//* padding-right: 110px; */max-width: 70px;position: absolute;}.cbp_tmtimeline>li .cbp_tmtime span {display: block;text-align: right;}.cbp_tmtimeline>li .cbp_tmtime span:first-child {font-size: 0.9em;color: #bdd0db;}.cbp_tmtimeline>li .cbp_tmtime span:last-child {font-size: 1.2em;color: #9BCD9B;}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmtime span:last-child {color: RGBA(255, 125, 73, 0.75);}div.cbp_tmlabel>p {margin-bottom: 0;}/* Right content */div class.cdp_tmlabel>li .cbp_tmlabel {margin-bottom: 0;}.cbp_tmtimeline>li .cbp_tmlabel {margin: 0 0 45px 65px;background: #9BCD9B;color: #fff;padding: .8em 1.2em .4em 1.2em;/* font-size: 1.2em; */font-weight: 300;line-height: 1.4;position: relative;border-radius: 5px;transition: all 0.3s ease 0s;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);cursor: pointer;display: block;}.cbp_tmlabel:hover {/* transform:scale(1.05); */transform: translateY(-3px);z-index: 1;box-shadow: 0 15px 32px rgba(0, 0, 0, 0.15) !important}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel {background: RGBA(255, 125, 73, 0.75);}/* The triangle */.cbp_tmtimeline>li .cbp_tmlabel:after {right: 100%;border: solid transparent;content: \" \";height: 0;width: 0;position: absolute;pointer-events: none;border-right-color: #9BCD9B;border-width: 10px;top: 4px;}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after {border-right-color: RGBA(255, 125, 73, 0.75);}p.shuoshuo_time {margin-top: 10px;border-top: 1px dashed #fff;padding-top: 5px;}/* Media */@media screen and (max-width: 65.375em) {.cbp_tmtimeline>li .cbp_tmtime span:last-child {font-size: 1.2em;}}.shuoshuo_author_img img {border: 1px solid #ddd;padding: 2px;float: left;border-radius: 64px;transition: all 1.0s;}/* end */.avatar {border-radius: 100% !important;-moz-border-radius: 100% !important;box-shadow: inset 0 -1px 0 3333sf;-webkit-box-shadow: inset 0 -1px 0 3333sf;-webkit-transition: 0.4s;-webkit-transition: -webkit-transform 0.4s ease-out;transition: transform 0.4s ease-out;-moz-transition: -moz-transform 0.4s ease-out;}.avatar:hover {-webkit-transform: rotateZ(360deg);-moz-transform: rotateZ(360deg);-o-transform: rotateZ(360deg);-ms-transform: rotateZ(360deg);transform: rotateZ(360deg);}/* content */.shuoshuo_text {width: 100%;height: 130px;padding: 8px 16px;background-repeat: no-repeat;background-position: right;outline-style: none;border: 1px solid #ccc;border-radius: 6px;resize: none;background-color: transparent;color: #999;}/* password */.input {outline-style: none;border: 1px solid #ccc;border-radius: 6px;padding: 8px 16px;width: 100%;font-size: 12px;background-color: transparent;color: #999;}.button {background-color: #9BCD9B;/* Green */border: none;margin-left: 5px;color: white;padding: 8px 16px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;border-radius: 12px;/* circle */outline: none;cursor: pointer;}.button:hover {background-color: #ff7242;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 8px 16px 0 rgba(0, 0, 0, 0.19);}/* butterfly theme adapter */#article-container ul p {margin: 0 0 1rem;}/* version */.power {text-align: right;float: right;color: #999;font-size: .75em;padding: .5em 0;}.power a {font-size: .75em;position: relative;cursor: pointer;color: #1abc9c;text-decoration: none;display: inline-block;}/* row */.shuoshuo_submit {margin: 0 0 1rem;}.shuoshuo_row .col.col-80 {width: 80%;float: left;}.shuoshuo_row .col.col-20 {width: 20%;float: right;text-align: right;}#preview {width: 100%;float: left;margin: .5rem 0 0;padding: 7px;box-shadow: 0 0 1px #f0f0f0;}/* lazyload */#lazy {background: #ffffff;bottom: 0;left: 0;position: fixed;right: 0;top: 0;z-index: 9999;}@import \"compass/css3\";.preloader {position: absolute;margin-left: -55px;margin-top: -100px;height: 110px;width: 110px;left: 50%;top: 50%;}svg {width: 110px;height: 110px;}path {stroke: #9ea1a4;stroke-width: 0.25;fill: #241E20;}#cloud {position: relative;z-index: 2;}#cloud path {fill: #efefef;}#sun {margin-left: -10px;margin-top: 6px;opacity: 0;width: 60px;height: 60px;position: absolute;left: 45px;top: 15px;z-index: 1;animation-name: rotate;animation-duration: 16000ms;animation-iteration-count: infinite;animation-timing-function: linear;}#sun path {stroke-width: 0.18;fill: #9ea1a4;}@keyframes rotate {0% {transform: rotateZ(0deg);}100% {transform: rotateZ(360deg);}}/* Rain */.rain {position: absolute;width: 70px;height: 70px;margin-top: -32px;margin-left: 19px;}.drop {opacity: 1;background: #9ea1a4;display: block;float: left;width: 3px;height: 10px;margin-left: 4px;border-radius: 0px 0px 6px 6px;animation-name: drop;animation-duration: 350ms;animation-iteration-count: infinite;}.drop:nth-child(1) {animation-delay: -130ms;}.drop:nth-child(2) {animation-delay: -240ms;}.drop:nth-child(3) {animation-delay: -390ms;}.drop:nth-child(4) {animation-delay: -525ms;}.drop:nth-child(5) {animation-delay: -640ms;}.drop:nth-child(6) {animation-delay: -790ms;}.drop:nth-child(7) {animation-delay: -900ms;}.drop:nth-child(8) {animation-delay: -1050ms;}.drop:nth-child(9) {animation-delay: -1130ms;}.drop:nth-child(10) {animation-delay: -1300ms;}@keyframes drop {50% {height: 45px;opacity: 0;}51% {opacity: 0;}100% {height: 1px;opacity: 0;}}.text {font-family: Helvetica, \"Helvetica Neue\", sans-serif;letter-spacing: 1px;text-align: center;margin-left: -43px;font-weight: bold;margin-top: 20px;font-size: 11px;color: #a0a0a0;width: 200px;}";
var style = document.createElement("style");
style.type = "text/css";
style.innerHTML=css;
style.id="addStyle"
document.getElementsByTagName("HEAD").item(0).appendChild(style);  
$('head').append('<script src=\"https://cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js\"></script>');
$('head').append('<script src=\"https://cdn.jsdelivr.net/npm/leancloud-storage@4.5.3/dist/av-min.js\"></script>');
$('head').append('<script src=\"https://cdn.jsdelivr.net/gh/drew233/Artitalk/source/os.min.js\"></script>');
if ( typeof(placeholder1) == "undefined" ) {
  placeholder1="";
}
if ( typeof(placeholder2) == "undefined" ) {
  placeholder2="请输入密码";
}
if ( typeof(placeholder3) == "undefined" ) {
  placeholder3="头像url";
}
if ( typeof(bgimg) == "undefined" ) {
  bgimg="";
}
var upload="上传ing";
var imgurl="![]("+upload+")";
var mimito = "ZmFjZTE3NTljMTMwNzYzNGM1NGJhMTk0Njg1NDA1MDVjODVlNGEwYg==";
var mamato = "Bearer "+window.atob(mimito);
function uploadimg(file){
  document.getElementById("neirong").value += imgurl;
  var nameofimg=sha1(base64url)+".png";
  var dir1=nameofimg.slice(0,2);
  var dir2=nameofimg.slice(2,4);
  var picurl="https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-img/"+dir1+"/"+dir2+"/"+nameofimg;
  var settings = {
      "url": "https://api.github.com/repos/Artitalk/Artitalk-img/contents/"+dir1+"/"+dir2+"/"+nameofimg,
      "method": "PUT",
      "timeout": 0,
      "async": true,
      "headers": {
        "Authorization": mamato,
        "Content-Type": "text/plain"
      },
      "data": "{\r\n  \"message\": \"" + window.location.host + "\",\r\n  \"content\": \"" + file + "\"\r\n}",
      "error": function (msg){
          if(msg.statusText == "Unprocessable Entity"){
              x=document.getElementById("neirong").value;
              imgurl="![]("+picurl+")";
              document.getElementById("neirong").value=x.replace("![](上传ing)",imgurl);
              imgurl="![]("+upload+")";
          }else{
              x=document.getElementById("neirong").value;
              document.getElementById("neirong").value=x.replace("![](上传ing)","(上传失败，若非网络原因，请联系Artitalk开发人员)");
          }
      }
    };
    $.ajax(settings).done(function (response) {
      x=document.getElementById("neirong").value;
      imgurl="![]("+picurl+")";
      document.getElementById("neirong").value=x.replace("![](上传ing)",imgurl);
      imgurl="![]("+upload+")";
    });
}
function writeurl(){
  x=document.getElementById("neirong").value;
  imgurl="![]("+upload+")";
  document.getElementById("neirong").value=x.replace("![](上传ing)",imgurl);
  upload="上传ing";imgurl="![]("+upload+")";
}


function imgChange(img) {
  const reader = new FileReader();
  reader.onload = function (ev) {
      var imgFile =ev.target.result;
      base64url=imgFile.replace(/(.*)?,/,'');
      console.log(imgFile);
      uploadimg(base64url);
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
              reader.onload = function(){
                  base64url=reader.result.replace(/(.*)?,/,'');
                  uploadimg(base64url);
              };
              // uploadimg(file);
              // writeurl();
              break;
          }
      }
  }
});
var img3;

var sting="<link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/font-awesome/5.13.0/css/all.min.css\" media=\"all\"><div id=\"main\" class=\"site-main\" role=\"main\"><div id=\"shuoshuo_content\"><div id=\"ccontent\"></div></div><div id=\"shuoshuo_input\" class=\"shuoshuo_active\" style=\"display: none;\"><div id=\"shuoshuo_edit\"><textarea class=\"shuoshuo_text\" id=\"neirong\" placeholder=\""+placeholder1+"\"style=\"background-image: url("+bgimg+");\"></textarea></div><div class=\"shuoshuo_submit\"><div class=\"shuoshuo_row\"><input class=\"child input\" type=\"password\" id=\"key\" value=\"\" placeholder=\""+placeholder2+"\" autocomplete=\"off\"><input class=\"child input\" id=\"touxiang\" value=\"\" placeholder=\""+placeholder3+"\"><div class=\"child\"><button class=\"button\" onclick=\"savecontent()\" style=\"float: right;\">发布</button><button class=\"button\" onclick=\"preview()\" style=\"float: right;\">预览</button></div></div><div class=\"shuoshuo_row\"><div id=\"preview\"></div></div></div></div><div class=\"power\"><div style=\"font-size: 30px;display: inline; cursor: pointer\" onclick=\"$(\'.shuoshuo_active').fadeIn()\">✍️</div><div style=\"font-size: 30px;display: inline; cursor: pointer\" onclick=\"myimg.click()\">🚢</div><br>Powered By <a href=\"https://artitalk.js.org\" target=\"_blank\">Artitalk</a><br>"+version+"</div></div><input type=\"file\" id=\"myimg\" onchange=\"imgChange(this)\" style=\"visibility: hidden;\" accept=\"image/png,image/gif,image/jpeg\"/>";
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
      var img2=  document.getElementById("touxiang").value;
      if(img2!=""){
          img3=img2;
      }
      var converte = new showdown.Converter(),
      html      = converte.makeHtml(shuoshuo);
      var password = document.getElementById("key").value;
      if(password==""){
          document.getElementById("preview").innerHTML="<p style=\"color: red;\">请输入密码</p>";
          return ;
      }
      AV.User.logIn(username,password).then(function (loginedUser) {
        }, function (error) {
          if(error.code===211){
              document.getElementById("preview").innerHTML="<p style=\"color: red;\">本页面只允许站长发布说说</p>";
            return ;
          }else if(error.code===210){
              document.getElementById("preview").innerHTML="<p style=\"color: red;\">本页面只允许站长发布说说</p>";
            return ;
          }
        });
        
      if(shuoshuo==""){  
          document.getElementById("preview").innerHTML="<p style=\"color: red;\">内容不能为空</p>";
          return ;
      }
      var TestObject = AV.Object.extend('shuoshuo');
      var testObject = new TestObject();
      testObject.set('content', html);
      testObject.set('postion', pos);
      testObject.set('os', oss);
      testObject.set('imgurl', img3);
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
              var touimg;
              if(typeof(atom.attributes.imgurl) != "undefined" ){ 
                  touimg=atom.attributes.imgurl;
              }else{
                  touimg=img;
              }
              var d = new Date(fake);
              const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
              const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds())
              var li=document.createElement('li');
              var cc="<li><span class=\"shuoshuo_author_img\"><img src=\""+touimg+"\"class=\"avatar avatar-48\" width=\"48\" height=\"48\"></span><span class=\"cbp_tmlabel\" ><p>"+uncle+"</p><p class=\"shuoshuo_time\">"+"<span style=\"\"><i class=\"fas fa-user-edit\"></i>由   "+OS+"发表</span><span style=\"float:right;\"><i class=\"fa fa-clock-o\"></i>"+" "+ resDate+" "+resTime+"     "+"</p></span></span></li>"
              string+=cc;
          })
          string+='</ul>';
          document.getElementById("ccontent").innerHTML=string;
          ok();
          $.showMore(".cbp_tmtimeline");
          $('#lazy').fadeOut();
      });
  }
