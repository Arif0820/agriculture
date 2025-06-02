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

function Scroll() {
   if(window.scrollY > 10) {
      headerdata = document.getElementById("header");
      headerdata.style.backgroundColor="red";
      headerdata.style.position= "sticky";
   }
}

Scroll()
