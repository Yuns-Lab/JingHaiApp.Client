var layer = layui.layer;
var $ = layui.$;

function login_open(){
    var index_login = layer.open({
        type: 1,
        id: 'login',
        title: false,
        closeBtn: 0,
        area: ['300px', '330px'],
        content: $('#login'),
    });
    localStorage.setItem("index_login", index_login)
}

function logout(){ // 这不是登出函数 ！！！
    var index_logout = layer.open({
        type: 1,
        id: 'logout',
        title: false,
        closeBtn: 0,
        area: ['300px', '230px'],
        content: $('#logout'),
    })
    localStorage.setItem("index_logout", index_logout)
}