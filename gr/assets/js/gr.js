
jQuery(document).ready(function(){

  
  const humbargerBtn = jQuery('.humbergarBtn');
  
  humbargerBtn.click(function(){

    jQuery('.sitenav').toggleClass('addSlide');

    jQuery(this).toggleClass('close');


  });
 $(document).on("scroll",function(){
        if($(document).scrollTop()>150){
            $("header").addClass('sticky');      
            $("header").removeClass('site-header');      
        } else{
            $("header").removeClass('sticky');
            $("header").addClass('site-header');
            
        }
    });

  $('.row-videoWrap.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:3000,
    responsiveClass:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
});
      $('.row-client.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
});


    $('.row-testimonial.owl-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
});
      $('.row-news-events.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
});



      $('.carouselRow.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
});

         $('.row-rewview.owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
        autoplaySpeed: 6000,
        slideTransition: 'linear',
        autoplayHoverPause:true,
      responsive:{
          0:{
              items:3,
              nav:true
          }
    }
});
    /*$(".sitenav a").click(function() {
        event.preventDefault();
    
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 130 }, 500);
        
        $('.sitenav a').removeClass('active');
        $(this).addClass('active');
        return true;
    });*/


     $(".bondingWrap a").click(function() {
        // This prevents the default 'jump to' behaviour if JavaScript is enabled,
        // whilst keeping the functionality there for when JavaScript isn't enabled
       // event.preventDefault();
    
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 120 }, 500);
        
        $('.bondingWrap a').removeClass('active');
        $(this).addClass('active');
        return true;
    });

       $('#ullist li').on('click',function(){

            $('#ullist li').removeClass('ui-state-active');
            $(this).addClass('ui-state-active');
            
         });

       /// Gallery image hover
        $( ".img-wrapper" ).hover(
          function() {
            $(this).find(".img-overlay").animate({opacity: 1}, 600);
          }, function() {
            $(this).find(".img-overlay").animate({opacity: 0}, 600);
          }
        );

        // Lightbox
        var $overlay = $('<div id="overlay"></div>');
        var $image = $("<img>");
        var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
        var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
        var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

        // Add overlay
        $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
        $("#gallery").append($overlay);

        // Hide overlay on default
        $overlay.hide();

        // When an image is clicked
        $(".img-overlay").click(function(event) {
          // Prevents default behavior
          event.preventDefault();
          // Adds href attribute to variable
          var imageLocation = $(this).prev().attr("href");
          // Add the image src to $image
          $image.attr("src", imageLocation);
          // Fade in the overlay
          $overlay.fadeIn("slow");
        });

        // When the overlay is clicked
        $overlay.click(function() {
          // Fade out the overlay
          $(this).fadeOut("slow");
        });

        // When next button is clicked
        $nextButton.click(function(event) {
          // Hide the current image
          $("#overlay img").hide();
          // Overlay image location
          var $currentImgSrc = $("#overlay img").attr("src");
          // Image with matching location of the overlay image
          var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
          // Finds the next image
          var $nextImg = $($currentImg.closest(".image").next().find("img"));
          // All of the images in the gallery
          var $images = $("#image-gallery img");
          // If there is a next image
          if ($nextImg.length > 0) { 
            // Fade in the next image
            $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
          } else {
            // Otherwise fade in the first image
            $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
          }
          // Prevents overlay from being hidden
          event.stopPropagation();
        });

        // When previous button is clicked
        $prevButton.click(function(event) {
          // Hide the current image
          $("#overlay img").hide();
          // Overlay image location
          var $currentImgSrc = $("#overlay img").attr("src");
          // Image with matching location of the overlay image
          var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
          // Finds the next image
          var $nextImg = $($currentImg.closest(".image").prev().find("img"));
          // Fade in the next image
          $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
          // Prevents overlay from being hidden
          event.stopPropagation();
        });

        // When the exit button is clicked
        $exitButton.click(function() {
          // Fade out the overlay
          $("#overlay").fadeOut("slow");
        });




        (function(){
          const colProduction = $('.col-production');
          colProduction.each(function(){
              $(this).click(function(){

                const thisattr =$(this).attr('id');


                const colimgprodution = $('.col-img-prodution');


                colimgprodution.each(function(){
                  let slideAttr = $(this).attr('id');

                  if(thisattr == slideAttr){
                    $(this).css('display','block')
                  }else{
                    $(this).css('display','none')
                  }
                })

              })
          });

          const imgclose = $('.imgclose');
          imgclose.click(function(){
            $('.col-img-prodution').css('display','none');
          });
        })();
        


        
    (function(){


    const cirClePointerHv = $('.circlePointer');
    cirClePointerHv.each(function(){
      $(this).click(function(){

        cirClePointerHv.removeClass('active');
        $(this).addClass('active');

        const thisAttr = $(this).attr('id');
        /*console.log(thisAttr);*/

        const disvrText = $('.progfill');

        disvrText.each(function(){
          const dsvrTestAttr = $(this).attr('id');
          console.log(dsvrTestAttr);

          if(thisAttr == dsvrTestAttr){
            $(this).addClass('active');
          }else{
            $(this).removeClass('active');
          }

        }); 


      });
    });

    const crltext =$('.crltext a');

    crltext.each(function(){
      $(this).click(function(){
        crltext.removeClass("active");
        $(this).addClass('active');
      });
    });
    })();


    var a = 0;
  $(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 4000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      a = 1;
    }

  });
  wow = new WOW({
        animateClass: 'animated',
        mobile: false,
        offset: 100
    });
    wow.init();
});
document.getElementById("year").innerHTML = new Date().getFullYear();