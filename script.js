$(document).ready(function () {


    

    // var resetScrollBar = document.getElementById('aboutMeContainerID');
    // resetScrollBar.innerHTML = variableLongText;
    // resetScrollBar.scrollTop = 0;

    // var workExperienceBtn;
    // Grab element and set 5s delay between fadeout followed by adding d-none class after .1s delay
    $('#openingPageDivID').delay( 4000 ).fadeOut( 1000 ).delay( 100 );
    // $('#openingPageDivID').delay( 4000 ).fadeOut( 1000 ).delay( 100 ).addClass( 'd-none' );
    
    $('#socialMediaBarID').delay( 4000 );
    $('#navBarID').delay( 4000 );

    $(document).on("click","button#technicalSkillsBtnID", handleWorkExperienceBtnClick); // Append home icon
    $(document).on("click","#viewProjectsBtnID", handleViewProjectsBtnClick); // Append home icon
    $(document).on("click","#homeIconBtnID", handleHomeIconBtnClick);
    $(document).on("click","#contactMeBtnID", handleContactMeBtnClick);
    // $(document).on("click","#navbarHomeID", handleNavbarHomeBtnClick);


    // Need to prevent text animation from being triggered when navbar links clicked
    // function handleNavbarHomeBtnClick(e) {
    //     e.preventDefault();
    //     console.log('navbar home link clicked');

    //     $('#topOfPage')[0].click();
    //     $('#openingPageDivID').addClass('d-none');

    // }


    function handleContactMeBtnClick(e) {
        e.preventDefault();
        console.log('contact me button clicked');

        $('#contactMeContainerID').removeClass('d-none');
        $('#contactFormSendBtnID').removeClass('d-none');

        $('#portfolioCardsContainerID').addClass('d-none');
        $('#portfolioContainerID').addClass('d-none');
        $('#verticalPillContainerID').addClass('d-none');
        $('#technicalSkillsContainerID').addClass('d-none');
        $('#aboutMeContainerID').addClass('d-none');

    }


    function handleHomeIconBtnClick(e) {
        e.preventDefault();
        console.log('home icon button clicked');

        $('div:not(#workExperienceBtn):not(.profSumm1):not(#verticalPillContainerID))').removeClass('d-none');
    }


    function handleWorkExperienceBtnClick(e) {
        e.preventDefault();
        console.log('work experience button clicked')
        
        $('#verticalPillContainerID').removeClass('d-none');

        // $('#technicalSkillsContainerID').addClass('animate__animated animate_fadeIn');
        // $('#technicalSkillsContainerID').addClass('d-none');
        // $('#technicalSkillsContainerID').removeClass('d-none');

        $('#workExperienceBtn').addClass('d-none');
        $('.profSumm1').addClass('d-none');
        $('#topOfPageIconBtnID').addClass('d-none');
        $('#aboutMeContainerID').addClass('d-none');

        $('#homeIconBtnID').appendTo('#verticalPillContainerID');

        // Go to position on page
        // $('html, body').animate({ scrollTop: $('#v-pills-webDeveloper').offset().bottom}, 500);

    }

})

    function handleViewProjectsBtnClick(e) {
        e.preventDefault();
        console.log('view projects button clicked');

        $('#portfolioContainerID').removeClass('d-none');
        $('#portfolioCardsContainerID').removeClass('d-none');

        $('#aboutMeContainerID').addClass('d-none');
        $('#technicalSkillsContainerID').addClass('d-none');
        $('#verticalPillContainerID').addClass('d-none');
        $('#homeIconBtnID').addClass('d-none');

        $('#contactMeContainerID').addClass('d-none');
        $('#contactFormSendBtnID').addClass('d-none');

        var $homeIconDiv = $("<>", )
    }









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


