
$(document).ready(function(){

    var owl = $('#carrousel-home');
    var owl2 = $('#carrousel-first-slider');
    // Document Ready
    $(function() {
      // Instancia de Owl Carrousel
      owl.owlCarousel({
        merge:true,
        autoplay:false,
        loop:true,
        nav:false,
        lazyLoad:true,
        autoWidth:false,
        autoHeight: false,
        items : 1, //10 items above 1000px browser width
        itemsDesktop : [1300,1], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,1], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
      // TRIGGERS
      $("#carrousel-home-controls .next").click(function(){
      owl.trigger('next.owl.carousel');
      })
      $("#carrousel-home-controls .prev").click(function(){
        owl.trigger('prev.owl.carousel');
      })

// JONI. EASYLOAD. NAV.ACTIVE.LI

      // Instancia de Owl Carrousel
      owl2.owlCarousel({
        items:1,
        merge:true,
        autoplay:false,
        loop:true,
        nav:false,
        lazyLoad:true,
        autoWidth:false,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        margin:0,
        responsive:{
            480:{items:2},
            600:{items:2},
            900:{items:3},
            1200:{items:4}
        }
      });
      // TRIGGERS
      $("#carrousel-first-slider-controls .next").click(function(){
      owl2.trigger('next.owl.carousel');
      })
      $("#carrousel-first-slider-controls .prev").click(function(){
        owl2.trigger('prev.owl.carousel');
      })
    });
});