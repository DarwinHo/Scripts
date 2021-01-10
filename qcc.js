//

Qichacha 

https://appv4.qichacha.net/app/v1/admin/getUserInfo?sign=523bbdfe6737d6436307b56d68021f0a&timestamp=1610255024000



{
  "status" : 200,
  "message" : "成功",
  "result" : {
    "isSVIP" : false,
    "user_type" : 1,
    "teamId" : "",
    "vipStartDate" : "",
    "unionid" : "",
    "is_comment" : 1,
    "regist_ip" : "120.229.2.53",
    "client_type" : 3,
    "invoicePermissionCode" : "",
    "last_login_ip" : "127.0.0.1",
    "sinaid" : "",
    "balanceId" : "30699600",
    "isTeamUser" : false,
    "is_showEntrance" : false,
    "weixinid" : "",
    "nickname" : "夹谷曼珍",
    "points" : 50,
    "my_invite_code" : "lybc682fxn8n82w",
    "detail" : {
      "certificate_number" : "",
      "privacy_setting" : 0,
      "education" : "",
      "app_from" : "AppStore",
      "zipcode" : "",
      "post_address" : "",
      "tag_switch" : "",
      "livetown" : "",
      "relname" : "",
      "tel" : "",
      "weixin" : "",
      "job_position" : 0,
      "income" : 0,
      "u_detail_id" : 17933940,
      "birthday" : "1980-01-01",
      "homepage" : "",
      "certificate_type" : 0,
      "hometown" : "",
      "service_range" : "",
      "about_me" : "",
      "city" : "",
      "lng" : "0.000000",
      "sightml" : "",
      "corparation" : "",
      "hobby" : "",
      "tags" : "",
      "user_id" : "6340dd522d5a50309fc2b1ac2e7467e7",
      "job" : 0,
      "lat" : "0.000000",
      "qq" : "",
      "fax" : "",
      "admin_city" : "",
      "cart_cookie" : "[]",
      "signature" : ""
    },
    "orderCount" : 0,
    "parent_guid" : "",
    "device_token" : "",
    "vipEndDate" : "",
    "qqunionid" : "",
    "isVIP" : false,
    "sex" : 0,
    "email" : "",
    "faceimg" : "https://co-image.qichacha.com/upload/face/58.jpg",
    "info" : {
      "sns_status" : 1,
      "msg_switch" : "0",
      "is_vest" : 0,
      "company_name" : "",
      "status" : 1,
      "authStatus" : "0",
      "real_name" : "",
      "sns_is_inblacklist" : "0",
      "company_keyno" : ""
    },
    "cacheMail" : "",
    "name" : "",
    "lastVipEndDate" : "",
    "last_remind_time" : 0,
    "phone_prefix" : "+86",
    "qqopenid" : "",
    "status" : 1,
    "regist_time" : 1610255000,
    "_extendInfo" : {
      "isTeamUser" : false,
      "isTeamOwner" : false,
      "isSaasFKGJ" : false,
      "teamId" : "",
      "isVIP" : false,
      "isSVIP" : false
    },
    "is_active" : "0",
    "isSaasFKGJ" : false,
    "last_login_time" : 1610255000,
    "invite_code" : "",
    "access_group_id" : 0,
    "hwopenid" : "",
    "work_mode" : 0,
    "phone" : "13570958729",
    "guid" : "6340dd522d5a50309fc2b1ac2e7467e7",
    "groupid" : 11,
    "isTeamOwner" : false,
    "balance" : "0.00"
  }
}


let obj = JSON.parse($response.body);

obj.result.is_vip = true;
obj.result.wt.vip.enabled = true;
obj.result.wt.vip.svip_expired_at = 2610806340.7131289005;
obj.result.svip_expired_at = 2610806340.7131289005;
obj.result.vip_type = "s";

$done({body: JSON.stringify(obj)});
