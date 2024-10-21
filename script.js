let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () =>{
      faqBox.parentElement.classList.toggle('active');
   }
});

var swiper = new Swiper(".home-slider", {
   loop:true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".gallery-slider", {
   loop:true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
   },
});


//XML Data


function loadxmldoc(){
  var xmlhttp=new XMLHttpRequest;

  xmlhttp.onreadystatechange=function(){
    // if(this.readyState==4 && this.readyState==400){
      myfunction(this);
    // }
  }
  xmlhttp.open("GET","index.xml",true);
  xmlhttp.send();
}
function myfunction(xml){
  var xmldoc=xml.responseXML;


 
  document.getElementById("important").innerHTML=xmldoc.getElementsByTagName("important")[0].childNodes[0].nodeValue;
  document.getElementById("challeges").innerHTML=xmldoc.getElementsByTagName("challeges")[0].childNodes[0].nodeValue;
 document.getElementById("manage").innerHTML=xmldoc.getElementsByTagName("manage")[0].childNodes[0].nodeValue;
  document.getElementById("business").innerHTML=xmldoc.getElementsByTagName("business")[0].childNodes[0].nodeValue;
  document.getElementById("Things").innerHTML=xmldoc.getElementsByTagName("Things")[0].childNodes[0].nodeValue;


}




