function page_joinexam__editElements(){
    if (localStorage.getItem("logged") == "true"){
        editWelcomeContent(document.getElementById("2-text-welcome-name"))
        if (localStorage.getItem("premission") == "1"){
            document.getElementById("2-text-joinstatus").innerHTML = ",&nbsp;&nbsp;你还不是京海工会成员, 请参加预审核";
        }
        const offsetleft = document.getElementById("2-text-welcome-name").offsetWidth + 152;
        document.getElementById("2-text-joinstatus").style.left = offsetleft + "px";
        document.getElementById("2-text-joinstatus").style.display = "block";
        if (localStorage.getItem("premission") == "4" || localStorage.getItem("premission") == "5"){
            document.getElementById("2-text-youcanedit").style.display = "block";
        }
    }
}