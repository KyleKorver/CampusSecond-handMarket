function issue_form(thisform){
	with(thisform){
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

function showclass(){
	var classone=document.getElementById("class1").value;
	var classtwo=document.getElementById("class2");
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