var number=30;
var goods=new Array();
for(var i=0;i<number;i++){
	goods[i]=new Array();
	goods[i][0]="ID:000000";
	goods[i][1]="商品名称";
	goods[i][2]="../image/goods/shoe.jpg";
	goods[i][3]="价格";
}

function show_goods(){
	for(var i=0;i<number;i++){
		var goods_div=document.createElement("div");
		goods_div.setAttribute("class","goodsdiv");

		var goods_id=document.createElement("p");
	    goods_id.setAttribute("class","goodsid");
	    var goods_id_txt=document.createTextNode(goods[i][0]);
	    goods_id.appendChild(goods_id_txt);
	    goods_div.appendChild(goods_id);

		var goods_name=document.createElement("p");
	    goods_name.setAttribute("class","goodsname");
	    var goods_name_txt=document.createTextNode(goods[i][1]);
	    goods_name.appendChild(goods_name_txt);
	    goods_div.appendChild(goods_name);

	    var goods_pic=document.createElement("img");
	    goods_pic.setAttribute("class","goodspic");
	    var goods_pic_src=goods[i][2];
	    goods_pic.src=goods_pic_src;
	    goods_div.appendChild(goods_pic);
	    
	    var goods_price=document.createElement("p");
	    goods_price.setAttribute("class","goodsprice");
	    var goods_price_txt=document.createTextNode(goods[i][3]);
	    goods_price.appendChild(goods_price_txt);
	    goods_div.appendChild(goods_price);

	    document.body.appendChild(goods_div);
		goods_div.onclick=function(){show_goods_info()};
	}
}

function show_goods_info(){
	window.location="../html/goodsinfo.html";
}