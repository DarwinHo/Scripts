/*
by Primovist
Quantumult X:
[rewrite_local]
^https?:\/\/slb\-user\.ksbao\.com\/(api\/newauth\/|app\/user\/(pro\/stat\?|init\?|pro\/isUserProAndNotExpired\?|pay\/checkIntroOfferPeriod\?)) url script-response-body https://raw.githubusercontent.com/DarwinHo/Script/master/Surge/JS/yyzs.js
[MITM]
hostname = newdrugs.dxy.cn
*/

const path1 = "/api/newauth/";
const path2 = "/app/user/pro/stat?";
const path3 = "/app/user/init?";
const path4 = "/app/user/pro/isUserProAndNotExpired?";
const path5 = "/app/user/pay/checkIntroOfferPeriod?";

const url = $request.url;
let body = $response.header;

if (url.indexOf(path1) != -1){
#body = JSON.parse(body);
body.Access-Control-Allow-HttpOnly = true;
#body.items.expert = true;
#body.items.expertStatus = 1;
#body.items.professional = true;
#body = JSON.stringify(body);
}

$done({body})
