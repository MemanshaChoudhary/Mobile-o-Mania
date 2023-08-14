

(function ($) {
	"use strict";

// Preloader
$(window).on('load', function () {
	$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
	$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);
});


// OTP Form (Focusing on next input)
$("#otp-screen .form-control").keyup(function() {  
if (this.value.length == 0) {
   $(this).blur().parent().prev().children('.form-control').focus();
}
else if (this.value.length == this.maxLength) {
   $(this).blur().parent().next().children('.form-control').focus();
}
});



var $videoSrc;
$('.video-btn').on('click', function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

$('#videoModal').on('shown.bs.modal', function (e) {

$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0" ); 
})

$('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc); 
})


$('body').on('hidden.bs.modal', function () {
if($('.modal.show').length > 0)
{
    $('body').addClass('modal-open');
}
});


$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

})(jQuery)