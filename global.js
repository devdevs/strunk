
// Update the year to current
// <span id="currentYear"></span>
var newDate = new Date();
document.getElementById('currentYear').innerHTML =  newDate.getFullYear();

// Smooth Scroll using JQuery
jQuery(function($) { 
$('a[href^="#"]').live('click',function(event){
    event.preventDefault();
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
    //change this number to create the additional off set        
    var customoffset = 45;
    $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
})
}(jQuery));
