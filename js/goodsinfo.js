var thegoods=new Array();
thegoods[0]="ID:000000";
thegoods[1]="商品名称";
thegoods[2]="../image/goods/shoe.jpg";
thegoods[3]="描述:几成新，大小……";
thegoods[4]="价格：";
thegoods[5]="卖家";
thegoods[6]="联系方式：";

function set(){
	document.getElementById("name").innerHTML=thegoods[1];
    document.getElementById("pic").src=thegoods[2];
    document.getElementById("describe").innerHTML=thegoods[3];
    document.getElementById("price").innerHTML=thegoods[4];
    document.getElementById("seller").innerHTML=thegoods[5]+"发布";
    document.getElementById("phone").innerHTML=thegoods[6];
}

document.getElementById("textarea").value="在此输入"

function collect(){
	var button=document.getElementById("collect").value;
	if(button=="收藏"){
		alert("收藏成功");
		document.getElementById("collect").value="已收藏";
	}
	else{
		alert("取消收藏");
		document.getElementById("collect").value="收藏";
	}
}

function contact(){
	document.getElementById("contact_box").style.visibility ="visible";
}