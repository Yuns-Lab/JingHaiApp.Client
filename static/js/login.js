function login_ok(avatar){
    document.getElementById("user-login").setAttribute("style", "display:none");
    const user_info = document.createElement("span");
    user_info.setAttribute("style", "display:block");
    user_info.setAttribute("id", "user-info")
    if (avatar != null){
        document.getElementById("user").setAttribute("style", "display:block;background-image:url("+avatar+");background-size:cover")
    } else {
        user_info.innerHTML = localStorage.getItem("username")[0];
    }
    document.getElementById("user").setAttribute("onclick","logout()")
    document.getElementById("user").appendChild(user_info);
    setTimeout(function(){ page_home__editElements(); }, 100);
    localStorage.setItem("logged", true);
}

function getCookie(name) {
    var cookies = document.cookie.split(";"); //将所有cookie分割成数组
    for (var i = 0; i < cookies.length; i++) { //循环查找需要的cookie
        var cookie = cookies[i].trim(); //去掉开头和结尾的空格
        if (cookie.startsWith(name + "=")) { //匹配cookie名称
            return cookie.substring(name.length + 1); //返回cookie值
        }
    }
    return null; //找不到对应的cookie，返回null
}

function cookie_login(){
    if (getCookie("cookie") != null){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200){
                // UNIT 处理返回值
                var response = JSON.parse(xhr.responseText);
                // UNIT 处理用户名
                var username = response[0]
                localStorage.setItem("username", username);
                // UNIT 处理 Avatar
                if (response[1] != ""){
                    login_ok(response[1]);
                } else {
                    login_ok("");
                }
                // UNIT 处理 Premission
                var premission = response[2]
                localStorage.setItem("premission", premission);
            }
        }
        xhr.open("GET", server_url + "/user/login?password=" + getCookie("cookie"), true);
        xhr.send();
    }
}