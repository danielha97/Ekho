const menu = document.querySelector(".menu");

window.addEventListener("scroll", ()=>{
    const timtam = window.pageYOffset;
    if (timtam > 150){
        menu.classList.add("show-menu");
    }
    else{
        menu.classList.remove("show-menu");
    }
});


let buttons = document.querySelectorAll(".button");

buttons.forEach((butt)=>{
    butt.addEventListener("click",(e)=>{
        let answer = e.currentTarget.parentElement.parentElement
        answer.classList.toggle("show");
    });
});