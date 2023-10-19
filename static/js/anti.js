// 拒绝右键
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// 拒绝 开发人员工具 ( F12 / Ctrl+Shift+I )
document.addEventListener('keydown', function(event) {
    if ((event.key == 'F12' || event.ctrlKey && event.shiftKey && event.key == 'I')) {
        event.preventDefault();
    }
});

// 拒绝调试 ( 无限 debug )
setInterval(function(){
    debugger;
}, 1e3)

function _dev_clearCookie(){
    try{
        var cookies = document.cookie.split(";"); //获取所有cookie
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"; //将过期时间设置为过去的时间，使此cookie被删除
        }
        console.log('Cookie 已清除');
    }
    catch(e){
        console.log('尝试清理 Cookie 时发生错误：\n' + e);
    }
}