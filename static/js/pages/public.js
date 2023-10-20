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

function editYouCanDoContent(element1,element2){
    permission = localStorage.getItem("premission");
    if (permission == "1"){ // 新人
        element1.innerHTML = `
            填写入会预审表单
        `
        element2.innerHTML = `
            <span style="font-size:15px">你只能干这件事 ...</span>
        `
    } else if (permission == "2"){ // 成员
        element1.innerHTML = `
            查看入会预审列表
            <span style="background: linear-gradient(to right, #45484005, #32354150, #9B9EA505); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                查看成员列表
                &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
        `
        element2.innerHTML = `
            查看工单
            <span style="background: linear-gradient(to right, #8B929E05, #32354150, #99A1AD05); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                提交工单
                &nbsp;&nbsp; <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 颜色占位 -->
            </span>
        `
    } else if (permission == "3"){ // 精英
        element1.innerHTML = `
            查看入会预审列表
            <span style="background: linear-gradient(to right, #45484005, #32354150, #9B9EA505); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                查看成员列表
                &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
        `
        element2.innerHTML = `
            查看工单
            <span style="background: linear-gradient(to right, #8B929E05, #32354150, #99A1AD05); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                提交工单
                &nbsp;&nbsp; <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 颜色占位 -->
            </span>
        `
    } else if (permission == "4"){ // UNIT 副会长
        element1.innerHTML = `
            查看入会预审列表
            <span style="background: linear-gradient(to right, #45484005, #32354150, #83898F05); padding:5px 0;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                批准/拒绝入会预审
                &nbsp;&nbsp;&nbsp;&nbsp;
                查看成员列表
                &nbsp;&nbsp;&nbsp;&nbsp;
                
            </span>
        `
        element2.innerHTML = `
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
        element1.innerHTML = `
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
        element2.innerHTML = `
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