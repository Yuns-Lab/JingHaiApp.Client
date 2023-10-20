window.onload = function(){
    cookie_login();
    // changeTab(0)
    changeTab(1); // FOR DEBUG
    page_joinexam__editElements() // FOR DEBUG
    // 一定要放在最后 ！！
    updateClock();
    setInterval(updateClock, 1000);
}