//https?:\/\/appv4\.qichacha\.net\/app\/v1\/admin\/getUserInfo\?sign=523bbdfe6737d6436307b56d68021f0a&timestamp=1610255024000


let obj = JSON.parse($response.body);

obj.result.isSVIP = true;
obj.result.user_type = 2;
obj.result.is_active = 1;
obj.result.vipStartDate = "2021-01-10";
obj.result.vipEndDate = "2041-01-10";
obj.result.isVIP = true;
obj.result.is_showEntrance = true;
obj.result.isTeamUser = true;
obj._extendInfo.isVIP = true;
obj._extendInfo.isSVIP = true;

$done({body: JSON.stringify(obj)});
