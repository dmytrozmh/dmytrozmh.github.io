$(document).ready(function() {
    $('#app').fullpage({
        autoScrolling:true,
        navigation: true,
        navigationTooltips: ['Home', 'About', 'Portfolio', 'Contact'],
        showActiveTooltip: true,
        verticalCentered: false,
        slidesNavPosition: top,
        css3: false,
    });
});