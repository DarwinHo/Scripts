/*
by Primovist

{
  "msg" : "ok",
  "data" : {
    "resultJson" : {
      "isoldplans" : 0,
      "isnewplans" : 0,
      "allfinished" : 0,
      "nofinished" : 0,
      "haveceping" : 0,
      "tasksisfinished" : 0,
      "isnewhaveplans" : 1,
      "alldone" : 0
      
Quantumult X:
[rewrite_local]
https://slb-exam.ksbao.com/api/newplan/doing
^https?:\/\/slb\-exam\.ksbao\.com\/(api\/newplan\/doing|app\/user\/(pro\/stat\?|init\?|pro\/isUserProAndNotExpired\?|pay\/checkIntroOfferPeriod\?)) url script-response-body https://raw.githubusercontent.com/DarwinHo/Script/master/Surge/JS/yyzs.js
[MITM]
hostname = newdrugs.dxy.cn
*/

const path1 = "/api/newplan/";
const path2 = "/app/user/pro/stat?";
const path3 = "/app/user/init?";
const path4 = "/app/user/pro/isUserProAndNotExpired?";
const path5 = "/app/user/pay/checkIntroOfferPeriod?";

const url = $request.url;
let body = $response.body;

if (url.indexOf(path1) != -1){
body = JSON.parse(body);
body.data.resultJson.isnewplans = 1;
#body.items.expert = true;
#body.items.expertStatus = 1;
#body.items.professional = true;
#body = JSON.stringify(body);
}

$done({body})
