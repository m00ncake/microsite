window.addEventListener('load', () => {
  "use strict";
  const $ = window.jQuery;
  $(window).scrollspy({target: ".menu-brand", offset: 375});
  $(window).on('activate.bs.scrollspy', function() { 
      $('.menu-brand li').removeClass('active');
      console.log("Active Class removed from li")
      $('.menu-brand li a.active').closest('li').addClass('active');
      console.log("Active Class added to Parent li")
   });
  $(".menu-brand a").on('click', function (event) {
    if($(window).outerWidth() > 991) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 208
        }, 800, function () {
        });
      }
   } else {
    event.preventDefault();
    $('#feature-menu-mobile').collapse('toggle');
    }
  });

  $('#feature-menu-mobile a').on('click', function (event) {
    $('#feature-menu-mobile').collapse('hide');
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 208
      }, 800, function () {
      });
    }
  })
  $(window).resize(function() {
    if($(window).outerWidth() > 991) { 
      $('#feature-menu-mobile').collapse('hide');
    }  
  })

}, false);

