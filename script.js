var slideIndex = 0;
showSlides(slideIndex);
showSlidesAutmatic();

// Dot controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Manually change slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// Automatically change slides
function showSlidesAutmatic() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } 

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  setTimeout(showSlidesAutmatic, 10000); // Change image every 2 seconds
}

// Clear value field when clicked
var input_field = document.getElementById("input-field");
input_field.addEventListener("click", clearValue);
function clearValue(){
  document.getElementById("input-field").value="";
}

// Take input from field to Google Sheets
var $input = $('input#input-field'),
    url = 'https://script.google.com/macros/s/AKfycbyH6HKeDNw_J7R-uGTcdQLUzeYiptWg23wwFB-5In7g3oX1UtA/exec'

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

// $('#submit-btn').on('click', function(e) {
//   e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $input.serializeObject(),
//     success: function(e){console.log(e);}
//   });
// });

// Validate if input is an email
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  // var $result = $("#result");
  var email = $("#input-field").val();
  if (validateEmail(email)) {
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $input.serializeObject(),
      success: function(e){console.log(e);}
    });
    alert("Thank you! Your email has been submitted.");

  } else {
    alert("Please enter an email.");
  }
  return false;
}

$("#submit-btn").on('click', validate);

