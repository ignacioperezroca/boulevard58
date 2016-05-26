// -------------------------
// ANIMATIONS
// -------------------------

$(document).ready(function(){

  // Wrapper TOGGLE

  $(".navbar-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("sidebar-toggle");
  });
  $("#sidebar-closebox").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("sidebar-toggle");
  });
  
  // Go to SIDEBAR

  function scrollToAnchor(aid){
     var aTag = $("#"+ aid);
     $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  $('.go-project').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('project');
    $('.sidebar-wrapper').toggleClass('toggled');
  });
  $('.go-units').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('units');
    $('.sidebar-wrapper').toggleClass('toggled');
  });
  $('.go-amenities').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('amenities');
    $('.sidebar-wrapper').toggleClass('toggled');
  });
  $('.go-financing').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('financing');
    $('.sidebar-wrapper').toggleClass('toggled');
  });
  $('.go-location').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('location');
    $('.sidebar-wrapper').toggleClass('toggled');
  });
  $('.go-contact').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('contact');
    $('.sidebar-wrapper').toggleClass('toggled');
  });

  // Go to LG

  $('.godown').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('units');
  });
  $('.gotop').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('top');
  });

  // $('.home').click(function(){
  //   $('body').stop().animate({scrollTop:0}, '500', 'swing');
  // });

  $('.project').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('project');
    event.preventDefault();
  });
  $('.units').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('units');
    event.preventDefault();
  });
  $('.amenities').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('amenities');
    event.preventDefault();
  });
  $('.financing').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('financing');
    event.preventDefault();
  });
  $('.location').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('location');
    event.preventDefault();
  });
  $('.contact').click(function(){
    // $('body').animate({scrollTo})
    scrollToAnchor('contact');
    event.preventDefault();
  });

  $('[data-toggle="tooltip"]').tooltip()


  // NAVBAR ACTIVE scroll

  $(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) { 
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll - 100) {
                $('.navbar-nav li.active').removeClass('active');
                $('.navbar-nav li').eq(i).addClass('active');
            }
        });
    } else { 
        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active'); 
    }
    // FIX LAST SECTION
    if ($('body').height() <= ($(window).height() + windscroll)) {
      $('.navbar-nav li.active').removeClass('active');
      $(".navbar-nav li").last().addClass('active'); 
    }
});


});

