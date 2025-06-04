$(document).ready(function () {
    // Change styles on hover
    $("#alertBtn").hover(function () {
      $(this).toggleClass("btn-danger");
    });
  
    // Animation: fadeIn pet list
    $("#petForm").on("submit", function () {
      $("#petList li").hide().fadeIn(500);
    });
  
    // Toggle display with slide
    $("#generateCodeBtn").on("click", function () {
      $("#codeDisplay").slideToggle().slideToggle(); // simulate effect
    });
  
    // Dynamically add a notice
    $("<p class='text-muted mt-3'>Keep your pet list updated regularly.</p>").insertAfter("#petList");
  });
  