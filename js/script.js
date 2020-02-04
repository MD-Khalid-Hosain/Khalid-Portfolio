/*==============
    Preloader jQuery
==============*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/*==============
    team owl-carousel jQuery
==============*/
$(function(){
  $("#team-members").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 600,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false
  });
});
/*==============
  Progress bars
==============*/
$(function(){
    $("#progress_elements").waypoint(function(){
      $(".progress-bar").each(function(){
      $(this).animate({
          width:$(this).attr("aria-valuenow") + "%"
      }, 1000);
  });
      this.destroy();
  }, {offset: 'bottom-in-view'

     });
  });
