function myissue(){
	document.getElementById("show_box").src="../html/mygoods.html";
	document.getElementById("myissue").style.color="black";
	document.getElementById("myissue").style.backgroundColor="white";
	$("a").not("#myissue").css({"background-color":"#98BF21","color":"white"});
}

function mycollect(){
	document.getElementById("show_box").src="../html/goods.html";
	document.getElementById("mycollect").style.color="black";
	document.getElementById("mycollect").style.backgroundColor="white";
	$("a").not("#mycollect").css({"background-color":"#98BF21","color":"white"});
}

function mymessage(){
	document.getElementById("show_box").src="../html/messages.html";
	document.getElementById("mymessage").style.color="black";
	document.getElementById("mymessage").style.backgroundColor="white";
	$("a").not("#mymessage").css({"background-color":"#98BF21","color":"white"});
}

function myinformation(){
	document.getElementById("show_box").src="../html/myinformation.html";
	document.getElementById("myinformation").style.color="black";
	document.getElementById("myinformation").style.backgroundColor="white";
	$("a").not("#myinformation").css({"background-color":"#98BF21","color":"white"});
}