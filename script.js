$(document).ready(function () {

    // Grab element and set 5s delay between fadeout followed by adding d-none class after .1s delay
    $('#openingPageDivID').delay( 4000 ).fadeOut( 1000 ).delay( 100 );

    $('#socialMediaBarID').delay( 4000 );
    $('#navBarID').delay( 4000 );

    $(document).on("click","button#technicalSkillsBtnID", handleWorkExperienceBtnClick); // Append home icon
    $(document).on("click","#viewProjectsBtnID", handleViewProjectsBtnClick); // Append home icon
    $(document).on("click","#homeIconBtnID", handleHomeIconBtnClick);
    $(document).on("click","#contactMeBtnID", handleContactMeBtnClick);


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

        $('#workExperienceBtn').addClass('d-none');
        $('.profSumm1').addClass('d-none');
        $('#topOfPageIconBtnID').addClass('d-none');
        $('#aboutMeContainerID').addClass('d-none');

        $('#homeIconBtnID').appendTo('#verticalPillContainerID');
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