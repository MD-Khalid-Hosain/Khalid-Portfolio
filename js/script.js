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

  /*==============
    Responsive tabs
  ==============*/
  $(function(){

    $('#services-tabs').responsiveTabs({
      animation: 'slide', // The panels will slide up and down
    });
  });
/*==============
    portfolio
  ==============*/
$(window).on('load', function(){
//    initialize isotop
    $("#isotope-container").isotope({

    });
    // filter items on button click
    $("#isotope-filter").on('click', 'button', function(){
      // get filter value
        var filterValue = $(this).attr('data-filter');
        //filter portfolio items
        $("#isotope-container").isotope({
            filter:filterValue
        });
            // active button
         $("#isotope-filter").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*==============
    magnific popup
  ==============*/
  $(function(){
    $("#portfolio-wrapper").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });
