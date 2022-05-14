
//Preloader
    $(window).preloader({
      delay: 1500,
    });
//Preloader

// Sticky Header
    $(window).scroll(function() {

      if ($(window).scrollTop() > 100) {
          $('.navbar').addClass('menu');
      } 
      else {
          $('.navbar').removeClass('menu');
      }
    });
// Sticky Header

// Banner-Part-Slide-Start
      $('.banner_slick_slide').slick({
        autoplay:false,
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 1000,
        fade: true,
        arrows:false,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:false,
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:true,
              autoplaySpeed:1000,
            }
          }
        ]

      });
// Banner-Part-Slide-End

// Event-Part-Slide-Start
    $('.event_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        speed:1500,
        prevArrow:'<i class="fa fa-angle-right prev"></i>',
        nextArrow:'<i class="fa fa-angle-left next"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:false,
              infinite:false,
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:false,
              infinite:false,
            }
          }
        ]
});
// Event-Part-Slide-End
// Teachers-Slick
$('.t_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  dots: false,
  infinite: true,
  autoplaySpeed: 1000,
  speed: 1500,
  fade: false,
  arrows:false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000,
      }
    }
  ]

});

//==== Back-to-top button

  $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 100){
        $('.back_to_top').fadeIn(200)
    } else{
        $('.back_to_top').fadeOut(200)
    }
  });
  //==== Animate the scroll to top
  $('.back_to_top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
  });
//==== Back-to-top button
// Gallery-Images-&-Videos
    var containerEl = document.querySelector('.mymix');
    var mixer = mixitup(containerEl);
// Gallery-Images-&-Videos

// Counter-part
    $('.count').counterUp({
      delay: 10,
      time: 3000,
    });
// Counter-part

// Venobox
  new VenoBox({
    selector: ".collage_video"
  });
// Venobox 





