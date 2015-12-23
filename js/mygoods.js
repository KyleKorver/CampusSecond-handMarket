var number=20;
var goods=new Array();
for(var i=0;i<number;i++){
	goods[i]=new Array();
	goods[i][0]="ID:000000";
	goods[i][1]="商品名称";
	goods[i][2]="../image/goods/shoe.jpg";
	goods[i][3]="描述";
	goods[i][4]="价格";
	goods[i][5]="联系方式";
	goods[i][6]="分类";
}

var classes=new Array("数码电器","电脑办公","日用家居","男装女装","个护化妆","鞋包配饰","运动保健","玩具乐器","食品饮料","图书音像","其他");

function show_goods(){
	for(var i=0;i<number;i++){
		var goods_form=document.createElement("form");
		goods_form.setAttribute("class","goodsform");
		goods_form.setAttribute("onsubmit","return issue_form(this)");

		var goods_id=document.createElement("p");
	    goods_id.setAttribute("class","goodsid");
	    var goods_id_txt=document.createTextNode(goods[i][0]);
	    goods_id.appendChild(goods_id_txt);
	    goods_form.appendChild(goods_id);

		var goods_name=document.createElement("input");
	    goods_name.setAttribute("type","text");
	    goods_name.setAttribute("readonly","readonly");
	    goods_name.setAttribute("class","goodsname");
	    goods_name.setAttribute("value",goods[i][1]);
	    goods_form.appendChild(goods_name);

	    var goods_class=document.createElement("p");
	    goods_class.setAttribute("class","goodsclass");
	    var goods_class_txt=document.createTextNode(goods[i][6]);
	    goods_class.appendChild(goods_class_txt);
	    goods_form.appendChild(goods_class);

	    var goods_class1=document.createElement("select");
	    goods_class1.setAttribute("class","goodsclass1");
	    goods_class1.setAttribute("id","class1"+i);
	    for(var j=0;j<11;j++){
			var x=document.createElement('option');
			x.text=classes[j]
			try{
				goods_class1.add(x,null) // standards compliant
			}
			catch(ex){
				goods_class1.add(x) // IE only
			}
		}
		goods_form.appendChild(goods_class1);
		$(document).ready(function(){
			$(".goodsclass1").change(function(){
				var classid=$(this).attr("id");
		        var n=classid.slice(6);
		        showclass(n);
			});
		});

		var goods_class2=document.createElement("select");
		goods_class2.setAttribute("class","goodsclass2");
		goods_class2.setAttribute("id","class2"+i);
		goods_form.appendChild(goods_class2);

	    var goods_pic=document.createElement("img");
	    goods_pic.setAttribute("class","goodspic");
	    var goods_pic_src=goods[i][2];
	    goods_pic.src=goods_pic_src;
	    goods_form.appendChild(goods_pic);

	    var goods_pic_file=document.createElement("input");
	    goods_pic_file.setAttribute("type","file");
	    goods_pic_file.setAttribute("class","goodspicfile");
	    goods_pic_file.setAttribute("accept","jpg");
	    goods_form.appendChild(goods_pic_file);

	    var goods_price=document.createElement("input");
	    goods_price.setAttribute("type","text");
	    goods_price.setAttribute("class","goodsprice");
	    goods_price.setAttribute("readonly","readonly");
	    goods_price.setAttribute("value",goods[i][4]);
	    goods_form.appendChild(goods_price);

	    var goods_des=document.createElement("textarea");
	    goods_des.setAttribute("class","goodsdes");
	    goods_des.setAttribute("rows","7");
	    goods_des.setAttribute("cols","38");
	    goods_des.setAttribute("readonly","readonly");
	    goods_des.value=goods[i][3];
	    goods_form.appendChild(goods_des);

	    var goods_phone=document.createElement("input");
	    goods_phone.setAttribute("type","text");
	    goods_phone.setAttribute("class","goodsphone");
	    goods_phone.setAttribute("readonly","readonly");
	    goods_phone.setAttribute("value",goods[i][5]);
	    goods_form.appendChild(goods_phone);

	    var goods_prompt=document.createElement("p");
	    goods_prompt.setAttribute("class","prompt");
	    goods_form.appendChild(goods_prompt);

	    var alter=document.createElement("input");
	    alter.setAttribute("type","button");
	    alter.setAttribute("class","alterbutton");
	    alter.setAttribute("value","修改");
	    goods_form.appendChild(alter);

	    var fin=document.createElement("input");
	    fin.setAttribute("type","submit");
	    fin.setAttribute("class","finbutton");
	    fin.setAttribute("value","完成");
	    goods_form.appendChild(fin);

	    var del=document.createElement("input");
	    del.setAttribute("type","button");
	    del.setAttribute("class","delbutton");
	    del.setAttribute("value","删除");
	    goods_form.appendChild(del);

	    document.body.appendChild(goods_form);
	    alter.onclick=function(){alter_form(this.parentNode)};
	    del.onclick=function(){del_form(this.parentNode)};
	}
}

function showallclass(){
	for(var i=0;i<number;i++){
		showclass(i);
	}
}

function showclass(i){
	var classone=document.getElementById("class1"+i).value;
	var classtwo=document.getElementById("class2"+i);
	var theseclass;

	if(classone=="数码电器"){
		theseclass=new Array("手机通讯","手机配件","摄像摄影","数码配件","音影娱乐","电子设备","其他");
	}

	if(classone=="电脑办公"){
		theseclass=new Array("电脑整机","电脑配件","外设产品","办公设备","网络产品","文具耗材","其他");
	}

	if(classone=="日用家居"){
		theseclass=new Array("收纳用品","雨伞雨具","浴室用品","清洁工具","餐饮用具","床上用品","其他");
	}

	if(classone=="男装女装"){
		theseclass=new Array("男士上装","女士上装","男士下装","女士下装","男士帽袜","女士帽袜","其他");
	}

	if(classone=="个护化妆"){
		theseclass=new Array("面部护肤","洗发护发","身体护肤","女性护理","香水彩妆","清洁用品","其他");
	}

	if(classone=="鞋包配饰"){
		theseclass=new Array("男士鞋靴","女士鞋靴","男士箱包","女士箱包","男士配饰","女士配饰","其他");
	}

	if(classone=="运动保健"){
		theseclass=new Array("体育用品","户外装备","垂钓用品","游泳用品","保健器械","护理护具","其他");
	}

	if(classone=="玩具乐器"){
		theseclass=new Array("遥控电动","益智玩具","桌游玩具","模型玩具","创意减压","乐器相关","其他");
	}

	if(classone=="食品饮料"){
		theseclass=new Array("进口食品","休闲食品","茶水饮料","饼干蛋糕","牛奶乳品","食品礼券","其他");
	}

	if(classone=="图书音像"){
		theseclass=new Array("教育书籍","人文社科","杂志书刊","音乐影视","小说动漫","复习资料","其他");
	}
    if(classone=="其他"){
    	theseclass=new Array("其他");
    }

	classtwo.options.length=0;
	if(theseclass.length!=1){
		for(var i=0;i<7;i++){
			var x=document.createElement('option');
			x.text=theseclass[i]
			try{
				classtwo.add(x,null) // standards compliant
			}
			catch(ex){
				classtwo.add(x) // IE only
			}
		}
    }
    else{
    	var x=document.createElement('option');
	    x.text="其他";
		try{
			classtwo.add(x,null) // standards compliant
		}
		catch(ex){
			classtwo.add(x) // IE only
		}
    }
}

function alter_form(node){
	node.getElementsByTagName("img")[0].style.visibility="hidden";
	node.getElementsByTagName("p")[1].style.visibility="hidden";
	node.getElementsByTagName("input")[1].style.visibility="visible";
	node.getElementsByTagName("select")[0].style.visibility="visible";
	node.getElementsByTagName("select")[1].style.visibility="visible";
	node.getElementsByTagName("input")[4].style.visibility="hidden";
	node.getElementsByTagName("input")[5].style.visibility="visible";
	node.getElementsByTagName("input")[0].readOnly="";
	node.getElementsByTagName("input")[0].focus();
	node.getElementsByTagName("input")[2].readOnly="";
	node.getElementsByTagName("input")[3].readOnly="";
	node.getElementsByTagName("textarea")[0].readOnly="";
}

function del_form(node){
	var r=confirm("确认删除该商品？");
	if (r==true){
		alert("删除成功");
    }
    else{
        alert("取消删除");
    }
}

function issue_form(thisform){
	var name=thisform.getElementsByTagName("input")[0];
	var pic=thisform.getElementsByTagName("input")[1];
	var describe=thisform.getElementsByTagName("textarea")[0];
	var price=thisform.getElementsByTagName("input")[2];
	var phone=thisform.getElementsByTagName("input")[3];
	var prompt_txt=thisform.getElementsByTagName("p")[2];
	if(validate_required(name)==false){
        name.focus();
        prompt_txt.innerHTML="*请输入商品名称";
        return false
    }
    else{
        if(validate_required(pic)==false){
            prompt_txt.innerHTML="*请选择商品图片";
            return false
        }
        else{
            if(validate_required(describe)==false){
                describe.focus();
            	prompt_txt.innerHTML="*请描述商品";
            	return false
            }
            else{
            	if(validate_required(price)==false){
            		price.focus();
                    prompt_txt.innerHTML="*请输入商品价格";
                    return false
                }
                else{
                    if(validate_required(phone)==false){
            			phone.focus();
                        prompt_txt.innerHTML="*请输入联系方式";
                        return false
                    }
                    else{
                        if(phone_check(phone)==false){
                                phone.focus();
                                prompt_txt.innerHTML="*请输入正确的手机号码";
                                return false
                        }
                    }
                }
            }
        }
    }
}

function validate_required(field){
    with(field){
        if(value==null||value==""){
            return false
        }
        else{
            return true
        }
    }
}

function phone_check(field){
    var phone_number=field.value;
    with(field){
        if(value.length!=11){
            return false
        }
        else{
            if(phone_number.indexOf("1")!=0){
                return false
            }
            else{
                return true
            }
        }
    }
}