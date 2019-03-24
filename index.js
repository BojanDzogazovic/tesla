//gotopbtn
window.onscroll = function(){
  let topBtn = document.getElementById("gototop");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      topBtn.style.opacity = "1";
  } else {
      topBtn.style.opacity = "0";
  }
}; 
 
//slidescreen
let wrapper = document.getElementById("sliderwrapper");
let topLayer = wrapper.querySelector(".top");
let handle = wrapper.querySelector(".handle");
let skew = 1000;
let delta = 0; 

//for mouse
wrapper.addEventListener("mousemove", (e) => {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = e.clientX + delta + "px";

    topLayer.style.width = e.clientX + skew + delta + "px";
});

//for touch screen
wrapper.addEventListener("ontouchmove", (e) => {
  delta = (e.clientX - window.innerWidth / 2) * 0.5;
  handle.style.left = e.clientX + delta + "px";

  topLayer.style.width = e.clientX + skew + delta + "px";
});


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


//responsive nav
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