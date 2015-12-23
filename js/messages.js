var number=30;
var messages=new Array();
for(var i=0;i<number;i++){
    messages[i]=new Array();
    messages[i][0]="ID:000000";
    messages[i][1]="私信者:";
    messages[i][2]="私信内容";
}

function show_messages(){
    for(var i=0;i<number;i++){
		var messages_div=document.createElement("div");
		messages_div.setAttribute("class","messagesdiv");

		var messages_id=document.createElement("p");
	    messages_id.setAttribute("class","messagesid");
	    var messages_id_txt=document.createTextNode(messages[i][0]);
	    messages_id.appendChild(messages_id_txt);
	    messages_div.appendChild(messages_id);

		var messages_name=document.createElement("p");
	    messages_name.setAttribute("class","messagesname");
	    var messages_name_txt=document.createTextNode(messages[i][1]);
	    messages_name.appendChild(messages_name_txt);
	    messages_div.appendChild(messages_name);

        var messages_con_div=document.createElement("div");
        messages_con_div.setAttribute("class","messagescondiv");
	    var messages_con=document.createElement("p");
	    messages_con.setAttribute("class","messagescon");
	    var messages_con_txt=document.createTextNode(messages[i][2]);
	    messages_con.appendChild(messages_con_txt);
	    messages_con_div.appendChild(messages_con);
	    messages_div.appendChild(messages_con_div);

	    var messages_re=document.createElement("input");
	    messages_re.setAttribute("type","button");
	    messages_re.setAttribute("value","回复");
	    messages_re.setAttribute("class","rebutton");
	    messages_div.appendChild(messages_re);
	    messages_re.onclick=function(){contact()};

	    document.body.appendChild(messages_div);
	    var line=document.createElement("hr");
	    document.body.appendChild(line);
	}
}

function contact(){
	$("#contact_box").show();
}