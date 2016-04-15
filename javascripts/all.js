//= require jquery
//= require bootstrap-sprockets
//= require_tree .


$(document).ready(function(){

//smooth scroll script

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

//navbar transition jQuery script

$(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $(".navbar").css({
        "background": "rgba(0, 0, 0, 0.7)",
        "box-shadow": "0 0 2px black"
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent",
        "box-shadow": "0 0 0px transparent"
      });
    }
  });

//view realtime the price of our Stylus

$(".display-link").on("click", function(){
  $.ajax({
    url="https://docs.google.com/spreadsheets/d/1P1jGMxVRFbFptDfF71fRamn7pEyMO4MUr_5HN6pHLCc/pubhtml",
    success: function(data){
      console.log();
    }
  });
});



});