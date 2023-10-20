function page_joinexam__editElements(){
    if (localStorage.getItem("logged") == "true"){
        document.getElementById("2-text-welcome-name").innerHTML = "你好 " + localStorage.getItem("username");
        if (localStorage.getItem("premission") == "1"){
            document.getElementById("2-text-joinstatus").innerHTML = ",&nbsp;&nbsp;你还不是京海工会成员, 请参加预审核";
        }
        const offsetleft = document.getElementById("2-text-welcome-name").offsetWidth + 152;
        document.getElementById("2-text-joinstatus").style.left = offsetleft + "px";
        document.getElementById("2-text-joinstatus").style.display = "block";
        if (localStorage.getItem("premission") == "1"){
            document.getElementById("2-text-info").innerHTML = "请选择预审核方向"
            document.getElementById("2-text-info").style.left = "270px";
            document.getElementById("2-text-info").style.display = "block";
            document.getElementById("p1-container").style.display = "flex";
			document.getElementById("2-text-nb-1").style.display = "flex";
			document.getElementById("2-text-nb-2").style.display = "flex";
        }
        if (localStorage.getItem("premission") == "4" || localStorage.getItem("premission") == "5"){
            document.getElementById("2-text-info").innerHTML = `你有权限查看/批准/拒绝入会预审列表&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#3a3a3a">表格将呈现在下方`
            document.getElementById("2-text-info").style.display = "block";
        }
    }
}