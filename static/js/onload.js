window.onload = function(){
    cookie_login();
    changeTab(0)
    // 一定要放在最后 ！！
    updateClock();
    setInterval(updateClock, 1000);
}