function Cicon() {
  mobilemenu = document.querySelector('.navs');
  mobilemenu.classList.toggle('show');

  changicon = document.querySelector('.bar-icon i');
  changicon.classList.toggle('fa-x');
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    20: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1110: {
      slidesPerView: 3,
      
    }
  }
});



window.addEventListener("scroll" , function Scroll() {
   if(window.scrollY > 70) {
      headerdata = document.getElementById("header");
      headerdata.style.backgroundColor="rgb(247 246 246)";
   }
})


window.addEventListener("scroll" , function Scroll() {
   if(window.scrollY < 70) {
      headerdata = document.getElementById("header");
      headerdata.style.backgroundColor="white";
   }
})

window.addEventListener("scroll" , function Iconscroll() {
    if(window.scrollY > 100){
         const icondata = document.querySelector(".scroll-icon i");
               icondata.style.opacity = "1";
               icondata.style.overflow = "visible";        
    }
})
window.addEventListener("scroll" , function Iconscroll() {
    if(window.scrollY < 100){
         const icondata = document.querySelector(".scroll-icon i");
               icondata.style.opacity = "0";
               icondata.style.overflow = "hidden";        
    }
})
