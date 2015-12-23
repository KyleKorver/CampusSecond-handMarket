//登录页面
function validate_form(thisform){
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

function register(){
    window.location="../html/register.html";
}