window.onload = function(){
    $(document).on('click','#password_check_button',function(){
         //密码
       if(document.getElementById("exampleInputPassword1").value == "3333"){
            window.location.href="homepage.html"  
       }
       else{
            document.getElementById("password_check_button").style.backgroundColor = "lightcoral";
            document.getElementById("password_notice").innerHTML = "Password is incorrect"
       }
    });
}