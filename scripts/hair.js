let hair = [
    {// main
        x: 0,
        y: 0,
        size: 900,
        color: 'black'
    },
    {
        x: 150,
        y: 390,
        size: 200,
        color: 'black'
    },
    {
        x: 300,
        y: 100,
        size: 400,
        color: 'black'
    },
    {
        x: 300,
        y: 300,
        size: 200,
        color: 'black'
    },
    {
        x: 400,
        y: 0,
        size: 200,
        color: 'black'
    },
    {
        x: 0,
        y: 400,
        size: 200,
        color: 'black'
    }
]

/**
 * A function that adds the hair.
 * The hair consists of circles that are clustered together to 
 * form an afro.
 */
function generateHair() {

    function modHair(hair_elem, settings) {
        /* The coordinates are of the bottom left point.
         * The function makes these coordinates of the center of the circle.
         */

        let hair_elem_temp = hair_elem;
        hair_elem_temp.css({
            "width": settings.size+"px",
            "height": settings.size+"px",
            "left": settings.x-settings.size/2+"px",
            "bottom": settings.y-settings.size/2+"px",
            "background": settings.color
        })

        return hair_elem_temp;
    }

    let hair_temp = $($("#hair-template").clone().html());

    for (let i = 0; i < hair.length; i++) {
        let hair_ball = modHair(hair_temp.clone(), hair[i]);
        $("#hair").append(hair_ball);
    }
}