eyes = {
    radius: 10,
    color: 'green'
}

function generateEyes() {

    function eyePosition(x) {
        return -x + 190;
    }

    function modEye(eye_elem, glass_settings, settings) {

        eye_elem_temp = eye_elem;
        eye_elem_temp.css({
            "width": eyes.size + "px",
            "height": eyes.size + "px",
            "left": glass_settings.x + "px",
            "bottom": bottom - settings.y_size / 2 + "px",
            "background": settings.color,
        })
    }

    let eye_temp = $($("#eye-template").clone().html());

    for (let i = 0; i < glasses.length; i++) {

    }


}