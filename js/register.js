//注册页面
function createCode(){
    var code="";
    var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');

    for(var i=0;i<4;i++){
        var charIndex=Math.floor(Math.random()*36);
        code+=selectChar[charIndex];
    }

    document.getElementById("vali_picture").value=code;
}

function register_form(thisform){
    with(thisform){
        if(validate_required(name)==false){
            name.focus();
            prompt_txt.innerHTML="*请输入用户名";
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
                                if(validate_required(validate)==false){
                                    validate.focus();
                                    prompt_txt.innerHTML="*请输入验证码";
                                    return false
                                }
                                else{
                                    if(validate.value!=vali_picture.value){
                                        validate.focus();
                                        createCode();
                                        prompt_txt.innerHTML="*验证码输入错误";
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