function page_home__editElements(){
    editWelcomeContent(document.getElementById("1-text-welcome-name"))
    document.getElementById("1-text-welcome-to").style.display = "block";
    document.getElementById("1-text-premission").style.display = "block";
    document.getElementById("1-text-premission").innerHTML = "你的权限等级是：" + localStorage.getItem("premission");
    document.getElementById("1-text-youcando-title").style.display = "block";
    document.getElementById("1-text-youcando-content-1").style.display = "block";
    document.getElementById("1-text-youcando-content-2").style.display = "block";
    editYouCanDoContent()
}

function editYouCanDoContent(){
    permission = localStorage.getItem("premission");
    if (permission == "1"){ // 新人
        document.getElementById("1-text-youcando-content-1").innerHTML = `
            填写入会预审表单
        `
        document.getElementById("1-text-youcando-content-2").innerHTML = `
            <span style="font-size:15px">你只能干这件事 ...</span>
        `
    } else if (permission == "2"){ // 成员
        document.getElementById("1-text-youcando-content-1").innerHTML = `
            查看入会预审列表
            <span style="background: linear-gradient(to right, #45484005, #32354150, #9B9EA505); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                查看成员列表
                &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
        `
        document.getElementById("1-text-youcando-content-2").innerHTML = `
            查看工单
            <span style="background: linear-gradient(to right, #8B929E05, #32354150, #99A1AD05); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                提交工单
                &nbsp;&nbsp; <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 颜色占位 -->
            </span>
        `
    } else if (permission == "3"){ // 精英
        document.getElementById("1-text-youcando-content-1").innerHTML = `
            查看入会预审列表
            <span style="background: linear-gradient(to right, #45484005, #32354150, #9B9EA505); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                查看成员列表
                &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
        `
        document.getElementById("1-text-youcando-content-2").innerHTML = `
            查看工单
            <span style="background: linear-gradient(to right, #8B929E05, #32354150, #99A1AD05); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                提交工单
                &nbsp;&nbsp; <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 颜色占位 -->
            </span>
        `
    } else if (permission == "4"){ // UNIT 副会长
        document.getElementById("1-text-youcando-content-1").innerHTML = `
            查看入会预审列表
            <span style="background: linear-gradient(to right, #45484005, #32354150, #83898F05); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                批准/拒绝入会预审
                &nbsp;&nbsp;&nbsp;&nbsp;
                查看成员列表
                &nbsp;&nbsp;&nbsp;&nbsp;
                
            </span>
        `
        document.getElementById("1-text-youcando-content-2").innerHTML = `
            修改成员权限等级
            <span style="background: linear-gradient(to right, #939AA605, #32354150, #B1B8BE05); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                查看工单
                &nbsp;&nbsp;&nbsp;&nbsp;
                提交工单
                &nbsp;&nbsp;&nbsp;&nbsp;
                批准/拒绝工单
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!-- 颜色占位 -->
            </span>
        `
    } else if (permission == "5"){ // UNIT会长
        document.getElementById("1-text-youcando-content-1").innerHTML = `
            查看入会预审列表
            <span style="background: linear-gradient(to right, #45484005, #32354150, #83898F05); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                批准/拒绝入会预审
                &nbsp;&nbsp;&nbsp;&nbsp;
                查看成员列表
                &nbsp;&nbsp;&nbsp;&nbsp;
                修改成员权限等级
                &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
        `
        document.getElementById("1-text-youcando-content-2").innerHTML = `
            查看工单
            <span style="background: linear-gradient(to right, #939AA605, #32354150, #B1B8BE05); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                提交工单
                &nbsp;&nbsp;&nbsp;&nbsp;
                批准/拒绝工单
                &nbsp;&nbsp;&nbsp;&nbsp;
                以及其他没想到的全部可用项目
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!-- 颜色占位 -->
            </span>
        `
    }
}