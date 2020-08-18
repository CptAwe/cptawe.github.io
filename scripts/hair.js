/**
 * A function that adds the hair.
 * The hair consists of circles that are clustered together to 
 * form an afro.
*/
function generateHair(width, height) {

    /**
     * The main hair is a circle at the down left corner. The rest of the 
     * hair balls are tagent to the circuference of the main circle.
    */
    let hair = {
        main: {
            x: 0,
            y: 0,
            diameter: width/1.5,
            color: 'black'
        },
        hair_balls_placement : width/1.6,
        num_of_hair_balls : 5,
        hair_balls_diameter: width/5,
        hair_ball_colour: "black"
    }

    function modHair(hair_elem, settings) {
        /* The coordinates are of the bottom left point.
         * The function makes these coordinates of the center of the circle.
         */

        let hair_elem_temp = hair_elem;
        hair_elem_temp.css({
            "width": settings.diameter+"px",
            "height": settings.diameter+"px",
            "left": settings.x-settings.diameter/2+"px",
            "bottom": settings.y-settings.diameter/2+"px",
            "background": settings.color
        })

        return hair_elem_temp;
    }


    let hair_temp = $($("#hair-template").clone().html());

    let hair_ball = modHair(hair_temp.clone(), hair.main);
    $("#hair").append(hair_ball);

    for (let i = 0; i < hair.num_of_hair_balls; i++) {

        let individual_angle = (Math.PI/2)/(hair.num_of_hair_balls-1);

        let hair_ball_x = Math.sin(i*individual_angle)*hair.hair_balls_placement/2;
        let hair_ball_y = Math.cos(i*individual_angle)*hair.hair_balls_placement/2;

        hair_ball_settings = {
            diameter : hair.hair_balls_diameter,
            color: hair.hair_ball_colour,
            x: hair_ball_x,
            y: hair_ball_y
        }
        let hair_ball = modHair(hair_temp.clone(), hair_ball_settings);
        $("#hair").append(hair_ball);
    }
}
