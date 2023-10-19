function page_joinexam__editElements(){
    if (localStorage.getItem("logged")){
        editWelcomeContent(document.getElementById("2-text-welcome-name"))
    }
}