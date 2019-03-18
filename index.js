  window.onscroll = function(){
    let topBtn = document.getElementById("gototop");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topBtn.style.opacity = "1";
    } else {
        topBtn.style.opacity = "0";
    }

}; 
 
//video start/loop
let videoBg = document.getElementById("myVideo");

window.onload = function(){
  videoBg.play();
};

/* function loopVideo(){
  videoBg.currentTime = 0.1; 
  videoBg.play();
  }

videoBg.addEventListener('ended', loopVideo, false);
 */

//slick slider
$('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:true,
    centerMode: true,
    centerPadding: "50px",
    mobileFirst: true,
    cssEase: 'linear'
  });


document.getElementById("mobiledrop").addEventListener("click", function(){
    let navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
});


//smooth scrool
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });