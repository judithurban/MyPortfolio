$(document).on('turbolinks:load', function(){
// Smooth Scrolling

var $root = $('html, body');

  $('.navbar-nav a').click(function onAnchorClick() {
    var href = $.attr(this, 'href');
    console.log("Scroll");

    if (href != undefined && href != '#') {

      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });

    }

    return false;
  });

// Hide Header 

  function classToggle() {
    const list = document.querySelector('.header-items-list')
    list.classList.toggle('header-items-list-hidden');
  }
  
  document.querySelector('.navbar-link-toggle')
    .addEventListener('click', classToggle);

// Portfolio Section

for (let i = 0; i < works.length; i++) {
  $("#portfolio-projects").append("\
  <a href='#portfolio' class='img-wrap' data-i='" + i + "'>\
  <img class='img-responsive' src='" + works[i].pic + "'>\
  <span class='info'><h3 class='proj-title'>" + works[i].title + "</h3></span>\
  </a>\
  ");
}

$(".img-wrap").mouseenter(function() {
  $(".info", this).show();
  console.log(this);
});

$(".img-wrap").mouseleave(function() {
  $(".info", this).hide();
});

$(".img-wrap").on("click", function (){
  var i = $(this).attr('data-i');
  console.log(i);
  console.log(works[i].URL);
  $("#portfolio-selected-project").html("\
  <div class='uk-card uk-card-custom uk-grid-collapse uk-animation-scale-up uk-animation-fast uk-transform-origin-bottom-center portfolio-card' uk-grid>\
    <div class='uk-card-media-left uk-cover-container uk-width-2-3@m'>\
      <img class='img-responsive' src='" + works[i].URL + "' alt='" + works[i].title + "' uk-cover>\
    </div>\
    <div class='uk-width-1-3@m'>\
      <div class='uk-card-body'>\
      <h4>" + works[i].title + "</h4>\
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p></div>\
    </div>\
  </div>\
");
});

// Form Functions


let charCount = $("#form-text").val().length

$("#form-text").on("keyup", function(e) {
  charCount = $("#form-text").val().length;
  console.log("keyup happened");
  charCount ++;
  console.log(charCount);
  $("#char-count").html("Fun fact: your message has " + charCount + " characters.")
  if (charCount >= 100) {
    $("#form-text").css("border-color", "red");
  }
  else {
    $("#form-text").css("border-color", "mediumturquoise");
  }
});

$("#message-button").on("click",function() {
  var comment = $("#form-text").val();
  console.log(comment);
  console.log('clicked');
  if (charCount === 0) {
    $("#Text").css("border-color", "red");
  }
  else  {
    $("#message-comment").html("<h3>Here's what you wrote:</h3><p>" + comment + "</p><p>Thank you for your message. I'll reply shortly! :)</p>");
    $("fieldset, #message-button").hide();
    $("#char-count").hide();
  }
  return false;
  }
  
);

});

//Google Map

var map;

function initMap() {
  var juHome = {lat: 48.3583737, lng: 10.8942478};
  map = new google.maps.Map(document.getElementById('map'), {
    center: juHome,
    zoom: 15,
    styles: [ { "elementType": "geometry", "stylers": [ { "color": "#1d2c4d" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#8ec3b9" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#1a3646" } ] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [ { "color": "#4b6878" } ] }, { "featureType": "administrative.land_parcel", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ { "color": "#64779e" } ] }, { "featureType": "administrative.neighborhood", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [ { "color": "#4b6878" } ] }, { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [ { "color": "#334e87" } ] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [ { "color": "#023e58" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#283d6a" } ] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#6f9ba5" } ] }, { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [ { "color": "#1d2c4d" } ] }, { "featureType": "poi.business", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#023e58" } ] }, { "featureType": "poi.park", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#3C7680" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#304a7d" } ] }, { "featureType": "road", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#98a5be" } ] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [ { "color": "#1d2c4d" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#2c6675" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#255763" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#b0d5ce" } ] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [ { "color": "#023e58" } ] }, { "featureType": "transit", "elementType": "labels.text.fill", "stylers": [ { "color": "#98a5be" } ] }, { "featureType": "transit", "elementType": "labels.text.stroke", "stylers": [ { "color": "#1d2c4d" } ] }, { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [ { "color": "#283d6a" } ] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [ { "color": "#3a4762" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#0e1626" } ] }, { "featureType": "water", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#4e6d70" } ] } ]  
  });
  var marker = new google.maps.Marker({
    position: juHome, 
    map: map,
    icon: {
      url: 'img/marker.png',

      scale: 1
    }
  });
}

