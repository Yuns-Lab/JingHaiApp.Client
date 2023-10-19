function editWelcomeContent(element){
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 23 || hour < 6){
        element.innerHTML = "夜已深, " + localStorage.getItem("username") + ' 记得休息哦';
    } else if (hour >= 6 && hour < 8){
        element.innerHTML = "早上好 " + localStorage.getItem("username");
    } else if (hour >= 8 && hour < 12){
        element.innerHTML = "上午好 " + localStorage.getItem("username");
    } else if (hour >= 12 && hour < 14){
        element.innerHTML = "中午好 " + localStorage.getItem("username");
    } else if (hour >= 14 && hour < 18){
        element.innerHTML = "下午好 " + localStorage.getItem("username");
    } else if (hour >= 18 && hour < 23){
        element.innerHTML = "晚上好 " + localStorage.getItem("username");
    }
}