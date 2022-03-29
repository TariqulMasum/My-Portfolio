(function($) {
    "use strict";

    $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments);
    }

    /*Preloader Code Start */
    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut(500);
    });

    /* Loader Code Start */
    $(window).on("load", function() {
        $(".section-loader").fadeOut("slow");

        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                queue: true
            }
        });

        $('.portfolio-nav li').click(function() {
            $('.portfolio-nav .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    queue: true
                }
            });
            return false;
        });
    });
    /* Loader Code End */


    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */

    var trigger = $('.navbar-toggler'),
        overlay = $('.overlay'),
        navc = $('.navbar-collapse'),
        active = false;


    $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function() {
        $('.navbar-toggler').toggleClass('active')
            //   $('#js-navbar-menu').toggleClass('active');
            //   $('.navbar-collapse').toggleClass('show');
        overlay.toggleClass('active');
        navc.toggleClass('active');
    });


    /*
    |=================
    | Onepage Nav
    |================
    */

    $('#mh-header').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
    });

    /*
    |=================
    | fancybox
    |================
    */

    $("[data-fancybox]").fancybox({});


    /*
    |===============
    | WOW ANIMATION
    |==================
    */
    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();


    /*
    |=================
    | AOS
    |================
    */

    //AOS.init();

    /*
    | ==========================
    | NAV FIXED ON SCROLL
    | ==========================
    */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });


    /*
    |=================
    | Progress bar
    |================
    */
    $(".determinate").each(function() {
        var width = $(this).text();
        $(this).css("width", width)
            .empty()
            .append('<i class="fa fa-circle"></i>');
    });

    /*
    |=================
    | Portfolio mixin
    |================
    */
    $('#portfolio-item').mixItUp();

    /*
    |=================
    | Client review
    |================
    */
    $('#mh-client-review').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 3,
            }
        }
    });

    /*
    |=================
    | Project review slide
    |================
    */
    $('.mh-project-testimonial').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        pagination: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            }
        }
    });

    /*
    |=================
    | Single Project review
    |================
    */
    $('#single-project').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        pagination: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            }
        }
    });

    /*
    |=================
    | Project review slide
    |================
    */
    $('.mh-single-project-slide-by-side').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        pagination: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            }
        }
    });

    /*
    |=================
    | Single client review
    |================
    */
    $('#mh-single-client-review').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1170: {
                items: 1,
            }
        }
    });
    /*
    |=================
    |  back to top
    |================
    */
    
    $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop:0}, 300);
    });
    $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.back-to-top').fadeIn(500);
    }
    else {
        $('.back-to-top').fadeOut(500);
    }

    if(scrolling > 150){
        $('.navbar').addClass('bg');
    }
    else {
        $('.navbar').removeClass('bg');
         }
    });
    /*Particles code*/
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 400,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "image",
            "stroke": {
              "width": 3,
              "color": "#fff"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 20,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 5,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 300,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode":  "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 150,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 200,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.2
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });

    /*
    |=================
    | Clint review slide
    |================
    */
    $('#mh-2-client-review').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 2,
            }
        }
    });


    // Smooth Scroll
    // $(function() {
    //   $('a[href*=#]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, 600);
    //         return false;
    //       }
    //     }
    //   });
    // });



    /*
    |=================
    | CONTACT FORM
    |=================
    */

    // $("#contactForm").validator().on("submit", function(event) {
    //     if (event.isDefaultPrevented()) {
    //         // handle the invalid form...
    //         formError();
    //         submitMSG(false, "Did you fill in the form properly?");
    //     } else {
    //         // everything looks good!
    //         event.preventDefault();
    //         submitForm();
    //     }
    // });

    // function submitForm() {
    //     var fname = $("#name").val();
    //     var lname = $("#L_name").val();
    //     var email = $("#email").val();
    //     var message = $("#message").val();
    //     $.ajax({
    //         type: "POST",
    //         url: "./backend/contactForm.php",
    //         data: "fname=" + fname + "&lname=" + lname + "&email=" + email + "&message=" + message,
    //         success: function(text) {
    //             if (text == "success") {
    //                 formSuccess();
    //             } else {
    //                 formError();
    //                 submitMSG(false, text);
    //             }
    //         }
    //     });
    // }

    // function formSuccess() {
    //     $("#contactForm")[0].reset();
    //     submitMSG(true, "Message Sent!")
    // }

    // function formError() {
    //     $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    //         $(this).removeClass();
    //     });
    // }

    // function submitMSG(valid, msg) {
    //     if (valid) {
    //         var msgClasses = "h3 text-center fadeInUp animated text-success";
    //     } else {
    //         var msgClasses = "h3 text-center shake animated text-danger";
    //     }
    //     $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    // }



}(jQuery));