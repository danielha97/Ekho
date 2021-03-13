
let slides = document.querySelectorAll(".slide");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

console.log(prevBtn);

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });
  let counter = 0;
  nextBtn.addEventListener("click",()=> {
    counter++;
    carousel();
  });
  
  prevBtn.addEventListener("click", ()=> {
    counter--;
    carousel();
  });
  
  function carousel() {
  
    if (counter === slides.length){
        counter = 0;
    }
    if(counter < 0){
        counter = slides.length -1;
    }

    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`;
    });
}

const scrollLinks = document.querySelectorAll(".scroll");

scrollLinks.forEach((link)=>{
  link.addEventListener("click",(e)=>{
    let target = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(target);
    let location = element.offsetTop;
    window.scrollTo({
      left:0,
      top:location
    });
  });
})