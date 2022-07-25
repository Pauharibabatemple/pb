$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});

function myFunction(x) {
    x.classList.toggle("change");
  }


  const images = document.querySelectorAll(".gallery__item img");
  let imgSrc;
  // get images src onclick
  images.forEach((img) => {
      img.addEventListener("click", (e) => {
          imgSrc = e.target.src;
          //run modal function
          imgModal(imgSrc);
      });
  });
  //creating the modal
  let imgModal = (src) => {
      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
      //add the modal to the main section or the parent element
      document.querySelector(".main").append(modal);
      //adding image to modal
      const newImage = document.createElement("img");
      newImage.setAttribute("src", src);
      //creating the close button
      const closeBtn = document.createElement("i");
      closeBtn.setAttribute("class", "fas fa-times closeBtn");
      //close function
      closeBtn.onclick = () => {
          modal.remove();
      };
      modal.append(newImage, closeBtn);
  }; 