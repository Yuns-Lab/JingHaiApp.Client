function changeTab(index) {
    // 获取所有选项卡和内容项
    var tabs = document.getElementById('centerNav').getElementsByTagName('li');
    var contentItems = document.getElementsByClassName('Main')[0].getElementsByClassName('apage');

    // 移除所有选项卡的this类名和内容项的this类名
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('this');
        contentItems[i].classList.remove('this');
        contentItems[i].classList.remove('fade-in');
    }
    
    // 添加被点击选项卡的this类名和对应的内容项的this类名
    tabs[index].classList.add('this');
    contentItems[index].classList.add('this');
    setTimeout(function(){
        contentItems[index].classList.add('fade-in')
    }, 1);
}