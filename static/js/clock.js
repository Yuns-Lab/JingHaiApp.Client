function updateClock() {
    // 获取当前时间
    var now = new Date();
    // 获取小时和分钟
    var hour = now.getHours();
    var minute = now.getMinutes();
    // 修正文本
    var realcontent = {0:"00",1:"01",2:"02",3:"03",4:"04",5:"05",6:"06",7:"07",8:"08",9:"09"}
    if (parseInt(minute) < 10){ minute = realcontent[parseInt(minute)]; }
    // 在页面上显示时间
    var clock = document.getElementById('clock');
    clock.innerHTML = '<i class="layui-icon layui-icon-time"></i> ' +hour + ':' + minute;
}