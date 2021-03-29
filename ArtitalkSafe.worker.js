//此脚本由MHuiG - MiniValine写成，ChenYFan将其做少量修改制成，此脚本仅适用于Artitalk

async function handleRequest(event) {
  AppId = (function () { try { return APPID } catch (e) { return "" } })()
  AppKey = (function () { try { return APPKEY } catch (e) { return "" } })()
  if (AppId == "" || AppKey == "") { return new Response('Artitalk-Safe异常：您没有设定appid和appkey') }
  ServerDomain = (function () { try { return SERVERDOMAIN } catch (e) { return `${(AppId.substr(0, 8)).toLowerCase()}.api.lncldglobal.com` } })()
  atComment = (function () { try { return ATCOMMENT == "true" ? true : false } catch (e) { return true } })()
  CORS = (function () { try { return CORS } catch (e) { return '*' } })()
  const request = event.request
  const url = new URL(request.url)
  const urlObj = new URL(url)
  const path = urlObj.href.substr(urlObj.origin.length)
  const classac = l(rp(path).split('/'))
  if (classac == "atComment" && !atComment) { return new Response('{"code":101,"error":"Artitalk-Safe：评论功能未开启"}', { headers: { "content-type": "application/json;charset=utf-8" } }) }
  if (classac == "_File" || classac == "_Followee" || classac == "_Follower" || classac == "_Installation" || classac == "_Role") { return new Response('{"code":101,"error":"Artitalk-Safe：操作是禁止的"}', { headers: { "content-type": "application/json;charset=utf-8" } }) }

  url.hostname = ServerDomain
  reqHEDNew = new Headers(request.headers)
  if (reqHEDNew.get("X-LC-Id")) {
    reqHEDNew.set("X-LC-Id", AppId)
    reqHEDNew.set("X-LC-Key", AppKey)
  }
  if (reqHEDNew.get("x-lc-sign")) {
    reqHEDNew.delete("X-LC-Sign")
  }
  reqNew = new Request(request, { headers: reqHEDNew })
  responsefetch = await fetch(url.toString(), reqNew)
  resHEDNew = new Headers(responsefetch.headers)
  resHEDNew.set("Access-Control-Allow-Origin", CORS)
  response = new Response(responsefetch.body, { headers: resHEDNew })
  return response
}
function rp(p) {
  return p.split("?")[0]
}
function l(p) {
  return p[getJsonLength(p) - 1]
}


function getJsonLength(jsonData) {

  var jsonLength = 0;

  for (var item in jsonData) {

    jsonLength++;

  }

  return jsonLength;
}
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event))
})
