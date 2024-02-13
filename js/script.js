$(document).ready(function(){
    $('.carousel').carousel();
  });

  function toggleVideo(){
    const trailer =document.querySelector('.trailer');
    const Video =document.querySelector('video');
    
    trailer.classList.toggle('active');
  }

  function changeBg(bg,title){
    const banner=document.querySelector('.banner');
    const contents=document.querySelectorAll('.content');
    banner.style.background=`url("assets/movies/${bg}")`;
    banner.style.backgroundSize='cover';
    banner.style.backgroundPositon='center';

    contents.forEach(content=>{
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active'); 
        }
    })
  }


  var swiper = new Swiper(".kids-content", {
    slidesPerView:1,
    spaceBetween: 10,
   
    autoplay: {
      delay: 755500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      280: {
        slidesPerView:1,
        spaceBetween:10,
      },
      320: {
        slidesPerView:2,
        spaceBetween:10,
      },
      510: {
        slidesPerView:2,
        spaceBetween:10,
      },
      758: {
        slidesPerView:3,
        spaceBetween:15,
      },
      900: {
        slidesPerView:4,
        spaceBetween:20,
      },
    },
  });