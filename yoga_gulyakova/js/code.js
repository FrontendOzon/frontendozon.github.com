var modal = document.getElementById('myModal');
var div_open = document.getElementById("myBtn");
var div_close = document.getElementsByClassName("btn_close")[0];
  
div_open.onclick = function() {
    modal.style.display = "block";
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
}

div_close.onclick = function() {
    modal.style.display = "none";
    document.body.style.position = '';
    document.body.style.top = '';
}


//var cources_left = document.getElementById('cources_left');
//var cources_right = document.getElementById('cources_right');
//var slider_1 = document.getElementsByClassName('slider_1')[0];
//var slider_2 = document.getElementsByClassName('slider_2')[0];
//var slider_3 = document.getElementsByClassName('slider_3')[0];
//cources_right.onclick = () =>   {
//    if (slider_2.style.display == 'none') {
//        slider_1.style.display = 'none';
//        slider_2.style.display = 'flex';
//       alert( "Правильно!" );
//    }
//    else if (slider_1.style.display == 'none') {
//        slider_2.style.display = 'none';
//        slider_1.style.display = 'flex';
//        }
//    else {
//            alert( "Все неправильно!" );
//       }
//   }

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("course_slider");
    var dots = document.getElementsByClassName("course_page");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" selected_course_page", "");
    }

    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " selected_course_page";
}

