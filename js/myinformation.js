var info=new Array();
info[0]="用户名";
info[1]="111@11.com"
info[2]="12345678900";
info[3]="111111111";
info[4]="123456";

function myinformation(){
	document.getElementById("name").value=info[0];
	document.getElementById("email").value=info[1];
	document.getElementById("phone").value=info[2];
	document.getElementById("qq").value=info[3];
	document.getElementById("password").value=info[4];
	document.getElementById("repassword").value=info[4];
}

function alter_pwd(){
	document.getElementById("pwddiv").style.visibility="visible";
	document.getElementById("password").value="";
	document.getElementById("repassword").value="";
	document.getElementById("password").focus();
	document.getElementById("repwddiv").style.visibility="visible";
	document.getElementById("alter_button").style.visibility="hidden";
	document.getElementById("submit_button").style.visibility="visible";
    document.getElementById("pwd_button").style.visibility="hidden";
}

function alter_info(){
	document.getElementById("name").readOnly="";
	document.getElementById("name").focus();
	document.getElementById("email").readOnly="";
	document.getElementById("phone").readOnly="";
	document.getElementById("qq").readOnly="";
	document.getElementById("alter_button").style.visibility="hidden";
	document.getElementById("submit_button").style.visibility="visible";
    document.getElementById("pwd_button").style.visibility="hidden";
}

function register_form(thisform){
    with(thisform){
        if(validate_required(name)==false){
            name.focus();
            prompt_txt.innerHTML="*请输入用户名";
            return false
        }
        else{
            if(validate_required(email)==false){
                email.focus();
                prompt_txt.innerHTML="*请输入邮箱账号";
                return false
            }
            else{
                if(validate_required(phone)==false){
                    phone.focus();
                    prompt_txt.innerHTML="*请输入手机号码";
                    return false
                }
                else{
                    if(phone_check(phone)==false){
                        phone.focus();
                        prompt_txt.innerHTML="*请输入正确的手机号码";
                        return false
                    }
                    else{
                        if(validate_required(password)==false){
                        	password.focus();
                            prompt_txt.innerHTML="*请输入密码";
                            return false
                        }
                        else{
                            if(password_check(password)==false){
                            	password.focus();
                                prompt_txt.innerHTML="*请输入6位及以上的密码";
                                return false
                            }
                            if(validate_required(repassword)==false){
                                repassword.focus();
                                prompt_txt.innerHTML="*请确认密码";
                                return false
                            }
                            else{
                                if(password.value!=repassword.value){
                                    repassword.focus();
                                    prompt_txt.innerHTML="*两次输入密码不一样";
                                    return false
                                }
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

function password_check(field){
    with(field){
        if(value.length<6){
            return false
        }
        else{
            return true
        }
    }
}

function phone_check(field){
    var phone_number=field.value
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