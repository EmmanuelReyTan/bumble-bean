/* Navbar change color on scroll */

$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 150){
      $(".navbar").css("background","rgba(0,0,0,0.7)");
      $(".navbar-toggler-icon").css("filter","invert(100%)");
      $(".navbar-toggler-icon").css("-webkit-filter","invert(100%)");
      $(".nav-link").css("color","rgba(255,255,255,1)")
    }
    else{
      $(".navbar").css("background","rgba(0,0,0,0");
      $(".nav-link").css("color","rgba(0,0,0,.7)")
      $(".navbar-toggler-icon").css("filter","invert(0%)");
      $(".navbar-toggler-icon").css("-webkit-filter","invert(0%)");
    }
  });
});


/* Navbar haburger icon change color on scroll */

$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 150){
      $(".navbar-toggler").css("border-color","rgba(255,255,255,1)");
      $(".navbar-toggler-icon").css("background-image",'');
    }
    else{
      $(".navbar-toggler").css("border-color","rgba(0,0,0,.15)");
    }
  });
});



$('a[href^="#"]').click(function () {
  $('html, body').animate({
    scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
  }, 800);

  return false;
});



$('a[href^="#"]').click(function () {
  $('html, body').animate({
    scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
  }, 800);

  return false;
});







/* Go to top Button fade in on scroll */

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}



/* Fade in on page load */

$(document).ready(function () {
  $('#main-content').fadeIn();
});


$(document).ready(function () {
  $(".hide").hide(0).delay(100).fadeIn(300)
  $(".hide2").animate({ opacity: '1', right: '300px'})
  $(".hide3").delay(200).animate({ opacity: '1', right: '300px'})
});





/* on Scroll Fade In */


$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hideme').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var top_of_window = $(window).scrollTop() + 100

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity': '1' }, 1500);
      }

    });

  });

});


/* from left to right animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeleft-right1').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 2000) &&(bottom_of_window < 2600)) {
        $(this).stop().animate({ 'opacity': '1', left: '500px' }, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', left: '-500px' }, 1000);
      }

    });

  });

});

/* from right to left animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeright-left1').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 2000) &&(bottom_of_window < 2600)) {
        $(this).stop().animate({ 'opacity': '1', left: '-500px' }, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', left: '500px' }, 1000);
      }

    });

  });

});




/* from right to left animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeright-left2').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 2600) &&(bottom_of_window < 3200)) {
        $(this).stop().animate({ 'opacity': '1', left: '-500px' }, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', left: '500px' }, 1000);
      }

    });

  });

});



/* from right to left animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeleft-right2').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 2600) &&(bottom_of_window < 3200)) {
        $(this).stop().animate({ 'opacity': '1', left: '500px' }, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', left: '-500px' }, 1000);
      }

    });

  });

});


/* from right to left animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeright-left3').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 3200) &&(bottom_of_window < 3800)) {
        $(this).stop().animate({ 'opacity': '1', left: '-500px' }, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', left: '500px' }, 1000);
      }

    });

  });

});



/* from right to left animation */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hidemeleft-right3').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 3200) &&(bottom_of_window < 3800)) {
        $(this).stop().animate({ 'opacity': '1', left: '500px' }, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', left: '-500px' }, 1000);
      }

    });

  });

});



$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fademe-in2').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 3400) &&(bottom_of_window < 4000)) {
        $(this).stop().animate({ 'opacity': '1', left: '500px' }, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', left: '-500px' }, 1000);
      }

    });

  });

});



$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fademein-1').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 1200) &&(bottom_of_window < 2000)) {
        $(this).stop().animate({ 'opacity': '1', top: '50px' }, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', top: '-50px' }, 1000);
      }

    });

  });

});


$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fademein-3').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 1500) &&(bottom_of_window < 2300)) {
        $(this).stop().animate({ 'opacity': '1'}, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0'}, 1000);
      }

    });

  });

});


$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fademein-4').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 3500) &&(bottom_of_window < 4200)) {
        $(this).stop().animate({ 'opacity': '1'}, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0'}, 1000);
      }

    });

  });

});



$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.right-left1').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 4300) &&(bottom_of_window < 5200)) {
        $(this).stop().animate({ 'opacity': '1', right: '500px'}, 1000);
        $('#productimg1').stop().animate({ 'opacity': '1', right: '890px'}, 1000);
        $('#productimg2').stop().animate({ 'opacity': '1', right: '400px'}, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', right: '-500px'}, 1000);
        $('#productimg1').stop().animate({ 'opacity': '0', right: '700'}, 1000);
        $('#productimg2').stop().animate({ 'opacity': '0', right: '0'}, 1000);
      }

    });

  });

});


$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.right-left2').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 5200) &&(bottom_of_window < 6000)) {
        $(this).stop().animate({ 'opacity': '1', left: '900px'}, 1000);
        $('#productimg3').stop().animate({ 'opacity': '1', right: '-450px'}, 1000);
        $('#productimg4').stop().animate({ 'opacity': '1', right: '480px'}, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', left: ''}, 1000);
        $('#productimg3').stop().animate({ 'opacity': '0', right: ''}, 1000);
        $('#productimg4').stop().animate({ 'opacity': '0', right: '705px'}, 1000);
      }

    });

  });

});









$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.right-left3').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 6000) &&(bottom_of_window < 6800)) {
        $(this).stop().animate({ 'opacity': '1', right: '500px'}, 1000);
        $('#productimg5').stop().animate({ 'opacity': '1', right: '620px'}, 1000);
        $('#productimg6').stop().animate({ 'opacity': '1', right: '-150px'}, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', right: '-500px'}, 1000);
        $('#productimg5').stop().animate({ 'opacity': '0', right: '415px'}, 1000);
        $('#productimg6').stop().animate({ 'opacity': '0', right: '-555px'}, 1000);
      }

    });

  });

});


$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.right-left4').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if ((bottom_of_window > 6800) &&(bottom_of_window < 7500)) {
        $(this).stop().animate({ 'opacity': '1', left: '900px'}, 1000);
        $('#productimg7').stop().animate({ 'opacity': '1', right: '480px'}, 1000);
        $('#productimg8').stop().animate({ 'opacity': '1', left: '450px'}, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0', left: ''}, 1000);
        $('#productimg7').stop().animate({ 'opacity': '0', right: '705px'}, 1000);
        $('#productimg8').stop().animate({ 'opacity': '0', left: '0'}, 1000);
      }

    });

  });

});



$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hideme-retailer').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).stop().animate({ 'opacity': '1'}, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0'}, 1000);
      }

    });

  });

});


$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('#retailerBG').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $('#retailerlogo1').stop().animate({ 'opacity': '1', top: ''}, 1000);
        $('#retailerlogo2').stop().animate({ 'opacity': '1', top: ''}, 1000);
        $('#retailerlogo3').stop().animate({ 'opacity': '1', top: ''}, 1000);
        $('#retailerlogo4').stop().animate({ 'opacity': '1', top: ''}, 1000);
        $('#retailerlogo5').stop().animate({ 'opacity': '1', top: ''}, 1000);
        $('#retailerlogo6').stop().animate({ 'opacity': '1', top: ''}, 1000);
      } else {
        $('#retailerlogo1').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
        $('#retailerlogo2').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
        $('#retailerlogo3').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
        $('#retailerlogo4').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
        $('#retailerlogo5').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
        $('#retailerlogo6').stop().animate({ 'opacity': '0', top: '-200px'}, 1000);
      }

    });

  });

});




$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.ourproduct-768').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).height();
      var bottom_of_window = $(window).scrollTop() + $(window).height();


      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).stop().animate({ 'opacity': '1'}, 1000);
      } else {
        $(this).stop().animate({ 'opacity': '0'}, 1000);
      }

    });

  });

});


























$(document).ready(function(){
  $("button").click(function(){
      $(".hideme1").animate({left: '250px'});
  });
});




/*
$(function () {
  $(document).scroll(function () {
    var $nav = $(“.sticky-top”);
    $nav.toggleClass(‘scrolled’, $(this).scrollTop() > $nav.height());
  });
});*/