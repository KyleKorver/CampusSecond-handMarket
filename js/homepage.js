//主页
function startTime()
{
	var today=new Date();
	var y=today.getFullYear();
	var mo=today.getMonth();
	var d=today.getDate();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    //output the true month
    mo=mo+1;
    // add a zero in front of numbers<10
    mo=checkTime(mo);
    d=checkTime(d);
    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById("date").innerHTML=y+"年"+mo+"月"+d+"日"+h+":"+m+":"+s;
    t=setTimeout('startTime()',500);
}

function checkTime(i)
{
	if (i<10) {
		i="0" + i;
	}
	return i
}

function home(){
    document.getElementById("main_show").src="../html/goods.html";
}

function login(){
    document.getElementById("main_show").src="../html/login.html";
}

function register(){
    document.getElementById("main_show").src="../html/register.html";
}

function issue(){
    document.getElementById("main_show").src="../html/issue.html";
}

function mypage(){
    document.getElementById("main_show").src="../html/mypage.html";
}

function search(thisform){
    with(thisform){
        document.getElementById("main_show").src="../html/goods.html";
    }
}

$(document).ready(function(){
    detailed_class_show();
    detailed_class_hide();
    ad_start_show();
    ad_stop_show();
    ad_stop_show_button();
    class_goods_show();
});

function detailed_class_show(){
    $(".class1").mouseover(function(){
        $(this).parent().next().slideDown(100);
        $(this).parent().next().find("*").slideDown(100);
    });
}

function detailed_class_hide(){
    $(".navigation").mouseleave(function(){
        $(this).children(".detailed_class").slideUp(100);
        $(this).children(".detailed_class").find("*").slideUp(100);
    })
}

function ad_start_show(){
    ad_img_show("ad1");
}

function ad_img_show(id){
    $("#"+id).show();
    buttonid=id+"b";
    $("#"+buttonid).css({"color":"white","backgroundColor":"#98BF21"});
    thisid=id;
    imgt=setTimeout("ad_img_hide(thisid)",2000);
}

function ad_img_hide(id){
    $("#"+id).hide(0,function(){
        buttonid=id+"b";
        $("#"+buttonid).css({"color":"black","backgroundColor":"#EAF2D3"});
        if(id!="ad3"){
            nextid=$(this).next().attr("id");
            ad_img_show(nextid);
        }
        else{
            ad_img_show("ad1");
        }
    })
}

function ad_stop_show(){
    $(".ad").mouseover(function(){
        clearTimeout(imgt);
    })
    $(".ad").mouseleave(function(){
        thisid=$(this).attr("id");
        ad_img_show(thisid);
    })
}

function ad_stop_show_button(){
    $(".adsb").mouseover(function(){
        clearTimeout(imgt);
        $(".ad").hide();
        $(".adsb").css({"color":"black","backgroundColor":"#EAF2D3"});
        buttonid=$(this).attr("id");
        imgid=buttonid.slice(0,3);
        $("#"+imgid).show();
        $(this).css({"color":"white","backgroundColor":"#98BF21"});
    })
    $(".adsb").mouseleave(function(){
        buttonid=$(this).attr("id");
        imgid=buttonid.slice(0,3);
        ad_img_show(imgid);
    })
}

function class_goods_show(){
    $(".class1").click(function(){
        $("#main_show").attr("src","../html/goods.html")
    })
    $(".class2").click(function(){
        $("#main_show").attr("src","../html/goods.html")
    })
}
