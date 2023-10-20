var server_url = "http://127.0.0.1:3869"
var layer = layui.layer;

function login(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                // UNIT 处理返回值
                const response = JSON.parse(xhr.responseText);
                // UNIT 处理 Cookie
                const now = new Date();
                const expires = new Date(now.getTime() + 24 * 60 * 60 * 1000);
                const cookie = `cookie=${response[0]}; expires=${expires.toUTCString()}`;
                document.cookie = cookie;
                // UNIT 处理 Avatar
                if (response[1] != ""){
                    login_ok(response[1]);
                } else {
                    login_ok("");
                }
                // UNIT 处理 Premission
                var premission = response[2]
                localStorage.setItem("premission", premission);
                layer.close(localStorage.getItem("index_login"))
            } else if (xhr.status == 404){
                layer.msg("登录失败：用户不存在", {icon: 2});
            } else if (xhr.status == 500){
                layer.msg("登录失败：服务器错误", {icon: 2});
            }
        }
    }
    xhr.onerror = function(){
        layer.msg("登录失败：无法连接至服务器", {icon: 2});
    }
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    const password = document.getElementById("password").value;
    if (username == "" || password == ""){
        layer.msg("登录失败：用户名或密码不能为空",{icon: 2});
    } else {
        xhr.open("GET", server_url + "/user/login?username=" + username + "&password=" + password + "&via=form");
        xhr.send();
    }
}

function register(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status == 201){
                layer.msg("注册成功，请直接登录", {icon: 1})
            } else if (xhr.status == 409){
                layer.msg("注册失败：用户已存在", {icon: 2});
            } else if (xhr.status == 500){
                layer.msg("注册失败：服务器错误", {icon: 2});
            }
        }
    }
    xhr.onerror = function(){
        layer.msg("登录失败：无法连接至服务器", {icon: 2});
    }
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    xhr.open("GET", server_url + "/user/register?username=" + username + "&password=" + password);
    xhr.send();
}

function logout_true(){
    // UNIT 清理 Cookie
    var cookies = document.cookie.split(";"); //获取所有cookie
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"; //将过期时间设置为过去的时间，使此cookie被删除
    }
    // UNIT 清理 localStorage
    localStorage.removeItem("username")
    localStorage.removeItem("premission")
    localStorage.setItem("logged", false)
    // UNIT 刷新整个页面
    location.reload();
}