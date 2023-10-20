function page_home__editElements(){
    editWelcomeContent(document.getElementById("1-text-welcome-name"))
    document.getElementById("1-text-welcome-to").style.display = "block";
    document.getElementById("1-text-premission").style.display = "block";
    document.getElementById("1-text-premission").innerHTML = "你的权限等级是：" + localStorage.getItem("premission");
    document.getElementById("1-text-youcando-title").style.display = "block";
    document.getElementById("1-text-youcando-content-1").style.display = "block";
    document.getElementById("1-text-youcando-content-2").style.display = "block";
    editYouCanDoContent(document.getElementById("1-text-youcando-content-1"),document.getElementById("1-text-youcando-content-2"))
}