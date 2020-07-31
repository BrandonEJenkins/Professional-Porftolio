// function animate(element, animation) {
//     $(element).addClass('animated '+animation);
//     var wait = setTimeout(function() {
//         $(element).removeClass('animated '+animation)
//     }, 1000);
// }

// function hideOpeningPage() {
//     if (document.getElementById('openingPageDivID')) {
//         var openingPageDivID = $('#openingPageDivID');
//         openingPageDivID.addClass('d-none');
//     } else {
//         setTimeout(hideOpeningPage, 3000);
//     }
// }

// function hideOpeningPageDiv() {
//     setTimeout(function() {
//         $('#openingPageDivID').fadeOut('fast');
//     }, 1000);
// }

// $('#openingPageDivID').hide( 10000 );
$('#openingPageDivID').delay( 5000 ).fadeOut( 1000 ).delay( 100 ).addClass( d-none );

