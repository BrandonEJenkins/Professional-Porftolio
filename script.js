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

// Grab element and set 5s delay between fadeout followed by adding d-none class after .1s delay
$('#openingPageDivID').delay( 4000 ).fadeOut( 1000 ).delay( 100 ).addClass( d-none );

$('#socialMediaBarID').delay( 4000 );
$('#navBarID').delay( 4000 );



// function professionalSummary(evt, roleName) {
//     var i, tabContent, tabLinks;
//     tabContent = document.getElementsByClassName("tabContent");
//         for (i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = "none";
//     }
//     tabLinks = document.getElementsByClassName("tabLinks");
//         for (i = 0; i < tabLinks.length; i++) {
//             tabLinks[i].className = tabLinks[i].className.replace(" active", "");
//         }
//         document.getElementById(roleName).style.display = "block";
//         evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();


// function revealSocialMedia() {
//     if(document.getElementById('socialMediaBar')){
//         var socialMediaBar = $('#socialMediaBar');
//         socialMediaBar.removeClass('d-none');
//     } 
// };

// function hello() {
//     alert('Hello world! in func hello');
// }

// $(function() {
//     $('div[onload]').trigger('onload');
// });

// $(function() {
//     $('div[onload]').trigger('onload');
// });

// function revealSocialMedia() {
//     console.log('Reveal social links')
//     if($('#socialMediaBar')){
//         var socialMediaBar = $('#socialMediaBar');
//         socialMediaBar.removeClass('d-none');
//         socialMediaBar.addClass('icon-bar');

//     } 
// };
// $('#socialMediaBar').delay ( 2000 ).removeClass( d-none );
// $('#socialMediaBar').delay( 1000 ).addClass( icon-bar );


