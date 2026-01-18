// set the date we're counting down to
var countDownDate = new Date("March 6, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Outout the result in an element with id="demo"

  var z = document.getElementsByClassName("offer-section");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="day">' +
      days +
      "</span>" +
      '<span id="hours">' +
      hours +
      "</span>" +
      '<span id="minutes">' +
      minutes +
      "</span>" +
      '<span id="seconds">' +
      seconds +
      "</span>";
  }

  // If the count down is Over, write some text
  if (distance < 0) {
    clearInterval(x);
    var y = document.getElementsByClassName("offer-section");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "";
    }
    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < z.innerHTML; i++) {
      g[i].classList.add("offer-expire-text");
    }
    var d = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < z.length; i++) {
      d[i].innerHTML = "The offer of this product finish!";
    }
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(2px)";
    }
  }
}, 1000);

$(".owl-carousel").owlCarousel({
  ltr: true,
  loop: true,
  margin: 0,
  nav: true,
  slideBy: 3,
  dots: false,
  items: 4,
  center: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  animateOut: "fadeOut",
  URLhashListener: true,
  startPosition: "URLHash",
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
      center: false,
    },
    600: {
      items: 2,
      nav: true,
      center: false,
    },
    1000: {
      items: 3,
      nav: true,
    },
    1200: {
      items: 4,
      nav: true,
      center: false,
    },
  },
});

$(".owl-carousel-smartphone").owlCarousel({
  ltr: true,
  loop: true,
  margin: 0,
  nav: true,
  slideBy: 3,
  dots: false,
  items: 1,
  center: true,
  autoplay: true,
  touchDrag: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  animateOut: "fadeOut",
  URLhashListener: true,
  startPosition: "URLHash",
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
    },
    1200: {
      items: 5,
      nav: true,
    },
  },
});
$(".owl-carousel-brands").owlCarousel({
  ltr: true,
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  smartSpeed: 10000,
  animateOut: "fadeOut",
  items: 3,
  center: true,
  mouseDrag: false,
  autoplayHoverPause: true,
  autoplay: true,
  lazyLoad: true,
  autoplayHoverPause: false,
  touchDrag: false,
  autoplayTimeout: 2000,
  slideTransition: "linear",
  responsive: {
    0: {
      items: 2,
      center: false,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
