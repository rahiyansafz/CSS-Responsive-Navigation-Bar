// Import stylesheets
import './style.css';

// Write Javascript code!

$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open');
  $(this).toggleClass('open');
 
  
})