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

  setTimeout(showSlidesAutmatic, 6000); // Change image every 2 seconds
}

// Take value from input field

var input_field = document.getElementById("input-field");
input_field.addEventListener("click", clearValue);
function clearValue(){
  document.getElementById("input-field").value="";
}

var submit_btn = document.getElementById("submit_btn");
submit_btn.addEventListener("click", storeValue);
function storeValue(){

}
