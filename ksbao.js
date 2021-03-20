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

if (url.indexOf(path2) != -1){
body = JSON.parse(body);
body.data.userProDiscountType = 0;
body.data.svipUserProInfo.activeType = 1;
body.data.svipUserProInfo.placeholderVip = true;
body.data.userProInfoVO.activeType = 1;
body.data.userProInfoVO.placeholderVip = true;
body.data.isActive = true;
body.data.remainExpiredDay = 2048;
body = JSON.stringify(body);
}

if (url.indexOf(path3) != -1){
body = JSON.parse(body);
body.data.isProActive = true;
body.data.expireDate = 2048;
body.data.userProInfoVO = true;
body.data.identify = true;
body.data.userProDiscountType = 0;
body.data.memberDiscount = true;
body.data.iapPurchaseVO.purchase = true;
body.data.iapPurchaseVO.status = true;
body.data.iapPurchaseVO.codeType = 1;
body.data.iapPurchaseVO.expireDate = 2048;
body.data.iapPurchaseVO.message = null;
body.data.iapPurchaseVO.error = null;
body = JSON.stringify(body);
}

if (url.indexOf(path4) != -1){
body = JSON.parse(body);
body.data = true;
body = JSON.stringify(body);
}

if (url.indexOf(path5) != -1){
body = JSON.parse(body);
body.data.hasSubscribeProduct = true;
body.data.hasSvipSubscribeProduct = true;
body = JSON.stringify(body);
}

$done({body})
