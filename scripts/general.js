function createAfro() {
    let resolution_width = $(window).width();
    let resolution_height = $(window).height();

    console.log(resolution_width, resolution_height);

    generateHair(resolution_width, resolution_height);
    generateGlasses(resolution_width, resolution_height);
    generateEyes();
}


/**
 * Code found here:
 * https://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed
*/
var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

$(document).ready(function() {
    createAfro();
});


$(window).on('resize', function() {
    waitForFinalEvent(
        createAfro,
        100,
        "afro update"
    );
});