/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && $(window).width() <= 767) {
  //alert('Touch Screen');
} else {

}

(function ($) {
  'use strict';


  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div');
    scrollDiv.className = 'scrollbar-measure';
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  /* ==================================================
  # Smooth Scroll
  ===================================================*/
  function scrollToAnchor() {
    $('.js-scroll-to').on('click', function (event) {
      let $anchor = $(this);
      let headerH = '100';
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - headerH
          },
          1000
        );
      event.preventDefault();
    });
  }

  function init() {
    scrollToAnchor();
    getBarwidth();
    scrollToTop();
    changeSizeNav();
    animation();
    clickToggerMenu()
  }

  $(document).ready(function () {
    init();
  }); // end document ready function

  function changeSizeNav() {
    $(window).on('scroll', function () {
      if ($("nav").offset().top > 10) {
        $("nav").addClass("small-nav");
        $("#btn-scroll-top").removeClass('hidebtn-to-top')
      }
      else {
        $("nav").removeClass("small-nav");
        $("#btn-scroll-top").addClass('hidebtn-to-top');
      }
    });
  }

  function clickToggerMenu() {
    let n = false;
    $('.navbar-toggler').click(function(){
      if( n == false ) {
        $(".icon").removeClass("fas fa-chevron-down");
        $(".icon").addClass("fas fa-chevron-up");
        n = true
      }
      else if( n == true ) {
        $(".icon").removeClass("fas fa-chevron-up");
        $(".icon").addClass("fas fa-chevron-down");
        n = false
      }
      
    })
  }

  function scrollToTop() {
  // if ($('.x-toTop').length) {
  //   let scrollTrigger = 100, // px
  //     backToTop = function () {
  //       let scrollTop = $(window).scrollTop();
  //       if (scrollTop == scrollTrigger) {
  //         $('.x-toTop').addClass('active');
  //       } else {
  //         $('.x-toTop').removeClass('active');
  //       }
  //     };
  //   backToTop();
  //   $(window).on('scroll', function () {
  //     backToTop();
  //   });
  // }
  $("#clickToTop").click(function () {
    if ($("nav").offset().top > 10) {
      $('html, body').animate({
        scrollTop: $("#header").offset().top
      }, 1000);
    }
  });
}

function textBannerAnimation() {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
  });
}

function animation() {
  let banner = $(".banner");
  banner.animate({ height: '100%' }, "slow");
  banner.animate({ width: '100%' }, "slow", textBannerAnimation());

  let navLink = $(".js-scroll-to")
  navLink.animate({ fontSize: '15px' }, "slow");
}

}) (jQuery); // End jQuery
