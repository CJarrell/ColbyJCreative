// Custom JS for CJC Site
// Testimonials Slider
$(document).ready(function(){
  $('.my-slider').unslider();
});
// SVG Gulp for animations
$(document).ready(function(){
  $('img.services-svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data){
      var $svg = $(data).find('svg');
      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);
      console.log("hey the code ran");
    }, 'xml');
        
  });
});
// Init Isotope for Masonry Portfolio
$(document).ready(function(){
  var $grid = $('.grid').imagesLoaded( function(){
    $grid.isotope({
      // options
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      percentPosition: true,
      layoutMode: 'fitRows',
      masonry: {
        rowHeight: 400
      }
    });
  
  // reveal all items after init
  var iso = $grid.data('isotope');
  $grid.isotope( 'reveal', iso.items );
  });
  $('.svg-filters').on('click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
});
// Venobox Init
$(function(){
  $('.venobox').venobox({
    framewidth: '800px',        // default: ''
    border: '3px',             // default: '0'
    bgcolor: '#ffffff',         // default: '#fff'
    numeratio: true,            // default: false
    infinigall: true            // default: false
  });
});
// Owl carousel
$(function(){
  $('.owl-carousel').owlCarousel({
    items: '1',
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    animateIn: true,
    animateOut: false,
    loop: true
  });
});
// Disable Right Clicking
$(document).ready(function(){
  $('img').on("contextmenu", function(e){
    return false;
  });
});
// Prices Modals
$(document).ready(function(){
  $('#realEstateModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });
});
$(document).ready(function(){
  $('#photographyModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });
});
$(document).ready(function(){
  $('#designModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });
});
$(document).ready(function(){
  $('#videoProductionModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });
});

