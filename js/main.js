function externalLinks() {
    links = document.getElementsByTagName("a");
    for (i=0; i<links.length; i++) {
      link = links[i];
      if (link.getAttribute("href") && link.getAttribute("rel") == "external")
      link.target = "_blank";
    }
   }
   
   window.onload = externalLinks;

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNavDesk", "myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNavDesk", "myNav").style.width = "0%";
}

//slick slider

$(document).ready(function(){
  $('.your-class').slick({
    prevArrow: $('.prev-modal'),
    nextArrow: $('.next-modal'),
  });
});

$('.modal').on('shown.bs.modal', function (e) {
  $('.your-class').slick('setPosition');
  $('.wrap-modal-slider').addClass('open');
})

// Slick Slider
$('.slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1402,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        mobileFirst: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        mobileFirst: true
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        mobileFirst: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Masters slick slider

$('.master-slide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  centerMode: true,
  responsive: [
    {
      breakpoint: 1402,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        mobileFirst: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        mobileFirst: true
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        mobileFirst: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var element = document.getElementById('phone');
var maskOptions = {
  mask: '+375 (00) 00-00-000'
};
var mask = new IMask(element, maskOptions);

(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
})();

