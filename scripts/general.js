let resolution_width = window.screen.width;
let resolution_height = window.screen.height;

/**
 * 
 */
$(document).ready(function() {
    
    generateHair(resolution_width, resolution_height);
    generateGlasses(resolution_width, resolution_height);
    generateEyes();

    function show_resolution(width, height) {
        $("#resolution-text").text(width + " x " + height);
    }
    show_resolution(resolution_width, resolution_height);

});
