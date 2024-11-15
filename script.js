// Function to toggle the navigation links
document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});

  // Function to set the active link
  function setActiveLink(event) {
    // Remove 'active' class from all links
    document.querySelectorAll('.nav-links li a').forEach(link => {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    event.target.classList.add('active');
  }
  
// Function to check if input is empty
function checkInput() {
  const firstName = document.getElementById("first-name");
  const firstNameError = document.getElementById("firstNameError");
  if (firstName.value.trim() === "") {
    firstNameError.style.display = "block";
    firstName.style.borderColor = "#FF7777";

  } else {
    firstNameError.style.display = "none";
    firstName.style.borderColor = "#FFFFFF80";

  }
}

// Automatically focus on the input and show the error by default
window.onload = function () {
  const inputField = document.getElementById("first-name");
  const errorMessage = document.getElementById("firstNameError");

  inputField.focus();
  errorMessage.classList.remove("error-hidden"); // Show error message by default
  inputField.style.borderColor = "#FF7777";
};

// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// handle video
let myVideo = document.getElementById("video1");

function togglePlayPause() {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
}

function openVideoPopup() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");
  popup.style.display = "flex";
  video.play();
}

function closeVideoPopup() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");
  popup.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

// Select the form and the thank-you message element
const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");
const thankYouPopup = document.getElementById("thankYouPopup");
// Prevent form from actually submitting
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  // Validate each field
  const isValid = validateForm();

  if (isValid) {
    thankYouPopup.style.display = "flex";
    thankYouMessage.style.display = "flex";
  }
});

function validateForm() {
  let isValid = true;

  // First Name Validation
  const firstName = document.getElementById("first-name");
  const firstNameError = document.getElementById("firstNameError");
  if (firstName.value.trim() === "") {
    firstNameError.style.display = "block";
    firstName.style.borderColor = "#FF7777";
    isValid = false;
  } else {
    firstNameError.style.display = "none";
  }

  return isValid;
}
