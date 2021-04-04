const Users = {
    "test": {
        "password" : "123456",
        // "img" : "https://cdn.jsdelivr.net/gh/drew233/cdn/dreww.webp"
    },
    "testt":{
        "password" : "12345",
        "img" : ""
    }
}

async function handleRequest(request) {


const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Your-IP": request.headers.get("cf-connecting-ip"),
    "Your-Country": request.headers.get("CF-IPCountry"),
    "Host": request.headers.get("host"),
}

if (request.method == "OPTIONS") {
    return new Response(null, {
        status: 200,
        headers
    })

} else if (request.method == "POST") {
    let path = new URL(request.url).pathname;
    /* Login */
    if(path == '/login'){
        let data = await request.json();
        console.log(data);
        for(i in Users){
            // console.log(i);
            // console.log(Users[i]);
            if(i == data.username){
                if(Users[i].password == data.password){
                    let LOGIN = {
                        "login": 0,
                        "username": null,
                        "avatar": null
                    };
                    LOGIN["login"] = 1;
                    LOGIN["username"] = i;
                    LOGIN["avatar"] = Users[i].img;
                    let keyid = 'userStatus';
                    await Artitalk.put(keyid, JSON.stringify(LOGIN))
                    return new Response(JSON.stringify({
                        status: "Success",
                        msg: LOGIN
                    }), {
                        status: 200,
                        headers
                    })
                }else{
                    return new Response(JSON.stringify({
                        status: "Log failed",
                        msg: "Username and password doesn't match"
                    }), {
                        status: 401,
                        headers
                    })
                }
            }
        }
        return new Response(JSON.stringify({
            status: "Log failed",
            msg: "This username was not found"
        }), {
            status: 401,
            headers
        })
    }
    else if(path === '/logout'){
        await Artitalk.delete('userStatus');
        return new Response(JSON.stringify({
            status: "Logout success"
        }), {
            status: 200,
            headers
        })        
    }else {
        if(await Artitalk.get('userStatus') === null){
            return new Response(JSON.stringify({
                status: false,
                msg: "Unauthorized"
            }), {
                status: 401,
                headers
            })
        }
        let sizeNow = await Artitalk.get('sizeNow');
        console.log(sizeNow);
        sizeNow = sizeNow === null? 0 : sizeNow;
        console.log(sizeNow);
        sizeInt = parseInt(sizeNow) + 1;
        console.log(sizeInt);
        await Artitalk.put('sizeNow',String(sizeInt));
        let setpayload = await request.json();
        let keyid="at" + sizeNow;
        await Artitalk.put(keyid, JSON.stringify(setpayload))
        return new Response(JSON.stringify({
            status: true,
            _id: keyid,
            query: `https://${request.headers.get("host")}/${keyid}`,
            data: setpayload
        }), {
            status: 200,
            headers
        })
    }
} else if (request.method == "GET") {
    let path = new URL(request.url).pathname
    if (path == "/") {
        return new Response(JSON.stringify({
            status: "Running"
        }), {
            status: 200,
            headers
        })
    } else if(path == '/judge'){
        let userStatus = await Artitalk.get('userStatus');
        console.log(userStatus);
        if(userStatus === null){
                return new Response(JSON.stringify({
                msg: "No artitalk user logged"
            }), {
                status: 200,
                headers
            })
        }
        return new Response(JSON.stringify({
            msg: userStatus
        }), {
            status: 200,
            headers
        })
    }
    else {
        let keyid = path.replace('/', '').split('-');
        let pageNum = parseInt(keyid[0]);
        let pageSize = parseInt(keyid[1]);
        let sizeNow = await Artitalk.get('sizeNow')
        if (sizeNow == null) {
            return new Response(JSON.stringify({
                status: false,
                message: "No avalible data"
            }), {
                status: 202,
                headers
            })
        } else {
            let shuoAll = [];
            let all = "";
            // for(i = (pageNum-1) * pageSize + 1 ;i <= Math.min(pageNum * (pageSize +　1) ,sizeNow);i=i+1){
            //     let shuoMid = await Artitalk.get('at' + String(i-1));
            //     shuoAll.push((shuoMid));
            // }
            for(i = sizeNow - (pageNum - 1) * pageSize,flag = 0;flag < pageSize && i > 0;flag = flag + 1,i = i - 1){
                let shuoMid = await Artitalk.get('at' + String(i-1));
                shuoAll.push((shuoMid));
            }
            console.log(shuoAll);
            return new Response(JSON.stringify(shuoAll), {
                status: 200,
                headers
            })
        }
    }
} else if (request.method == "DELETE") {
    let path = new URL(request.url).pathname;
    if (path == '/') {
        return new Response(JSON.stringify({
            status: false,
            message: "Can't Delete /"
        }), {
            status: 500,
            headers
        })
    } else {
        await Artitalk.delete(path.replace('/', ''))
        return new Response(JSON.stringify({
            status: true,
            msg: "Deleted Successfully"
        }), {
            status: 200,
            headers
        })
    }
} else {
    return new Response(JSON.stringify({
        status: false,
        message: "Only supports GET, POST, DELETE, OPTIONS"
    }), {
        status: 500,
        headers
    })
}
}

addEventListener('fetch', event => {
event.respondWith(handleRequest(event.request))
})
