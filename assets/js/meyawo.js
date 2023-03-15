/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function() {
  $(".navbar .nav-link").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function() {
        window.location.hash = hash;
      });
    }
  });
});
//preload
const text = document.querySelectorAll('#text path');
for (let i = 0; i < text.length; i++) {
  console.log(`Letter ${i} is ${text[i].getTotalLength()}`);
}

// navbar toggle
$('#nav-toggle').click(function() {
  $(this).toggleClass('is-active')
  $('ul.nav').toggleClass('show');
});
//scroll_down_arrow
$(window).scroll(function() {
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
  //250 is fade pixels
});
const loader = document.getElementById("loader");

window.addEventListener("load", function() {
  // Add the fade-out class to the preload div after a certain delay
  setTimeout(function() {
    document.getElementById("loader").classList.add("fade-out");
  }, 3300); // Change the delay as needed
});

loader.addEventListener("transitionend", function(event) {
  // Check if the event target is the preload div
  if (event.target === loader) {
    // Remove the preload div from the DOM
    loader.remove();
  }
});

// Reload the page when the unload event is fired
window.addEventListener("unload", function() {
  location.reload();
});
