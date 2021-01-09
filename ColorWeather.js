let obj = JSON.parse($response.body);


obj.result.is_vip = true;
obj.result.wt.vip.enabled = true;
obj.result.wt.vip.svip_expired_at = 2610806340.7131289005;
obj.result.svip_expired_at = 2610806340.7131289005;
obj.result.vip_type = "s";

$done({body: JSON.stringify(obj)});
