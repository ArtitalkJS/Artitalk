/*!
 * 获取浏览器和操作系统的信息
 */
(function(win) {
    var boInfo = {};

    var ua = navigator.userAgent.toLowerCase();
    var platform = navigator.platform;

    var tem;

    // ['Chrome/52','Chrome','52']
    var bsInfo = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(bsInfo[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        bsInfo[1] = 'IE';
        bsInfo[2] = tem[1] || ''; // IE浏览器版本
    }

    if (bsInfo[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) {
            // return tem.slice(1).join(' ').replace('OPR', 'Opera');
            bsInfo[1] = 'Opera';
            bsInfo[2] = tem[1] || '';
        }
    }

    bsInfo = bsInfo[2] ? [bsInfo[1], bsInfo[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        bsInfo.splice(1, 1, tem[1]);
    }

    boInfo.browser = bsInfo[0];
    boInfo.browserVersion = bsInfo[1];

    var clientStrings = [
        { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
        { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
        { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
        { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
        { s: 'Windows Vista', r: /Windows NT 6.0/ },
        { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
        { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
        { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
        { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
        { s: 'Windows 98', r: /(Windows 98|Win98)/ },
        { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
        { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
        { s: 'Windows CE', r: /Windows CE/ },
        { s: 'Windows 3.11', r: /Win16/ },
        { s: 'Android', r: /Android/ },
        { s: 'Open BSD', r: /OpenBSD/ },
        { s: 'Sun OS', r: /SunOS/ },
        { s: 'Linux', r: /(Linux|X11)/ },
        { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
        { s: 'Mac OS X', r: /Mac OS X/ },
        { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
        { s: 'QNX', r: /QNX/ },
        { s: 'UNIX', r: /UNIX/ },
        { s: 'BeOS', r: /BeOS/ },
        { s: 'OS/2', r: /OS\/2/ },
        { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
    ];

    var os;
    var osVersion;

    for (var id in clientStrings) {
        var cs = clientStrings[id];

        // 注意不要用ua，ua是小写化
        if (cs.r.test(navigator.userAgent)) {
            os = cs.s;
            break;
        }
    }

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(navigator.userAgent)[1];
            break;

        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(navigator.userAgent)[1];
            break;

        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    boInfo.os = os;
    boInfo.osVersion = osVersion;

    win.boInfo = boInfo;
})(window);
