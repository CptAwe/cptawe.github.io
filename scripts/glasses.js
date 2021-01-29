/**
 * A function that adds the glasses.
 * The glasses consist of two white rounded rectangles with
 * two smaller black rectangles inside of them.
 */
function generateGlasses(width, height) {

    let glasses_distance = width / 5;
    let glasses_frame_width = 4;
    let glasses_frame_color = 'white';
    let glasses = [
        {
            x: width / 12,// px from the left of the screen
            x_size: width / 9,// Looks good when: x_size = 3 * y_size
            y_size: width / 9 / 3,
            rotation: 45,
            color: glasses_frame_color// The color of the frame of the glasses
        },
        {
            x: 2.2 * width / 12,// px from the left of the screen
            x_size: width / 9,// Looks good when: x_size = 3 * y_size
            y_size: width / 9 / 3,
            rotation: 45,
            color: glasses_frame_color// The color of the frame of the glasses
        }
    ]

    function glassPosition(x) {
        return -x + glasses_distance;
    }

    function modglass(glass_elem, settings) {
        /* The coordinates are of the bottom left point.
         * The function makes these coordinates of the center of the circle.
        */

        let glass_elem_temp = glass_elem;
        let left = settings.x - settings.x_size / 2;
        let bottom = glassPosition(left);
        glass_elem_temp.css({
            "width": settings.x_size + "px",
            "height": settings.y_size + "px",
            "left": left + "px",
            "bottom": bottom - settings.y_size / 2 + "px",
            "background": settings.color,
            "transform": "rotate(" + settings.rotation + "deg)"
        })

        return glass_elem_temp;
    }

    function oppositeGlass(glass_elem, size_difference) {
        /* Creates the inside of the glass
         * 
        */

        let glass_elem_temp = glass_elem;
        let width = parseInt(glass_elem.css("width").replace(/[^-\d\.]/g, '')) - 2 * size_difference / 3;
        let height = parseInt(glass_elem.css("height").replace(/[^-\d\.]/g, '')) - 2 * size_difference / 3;
        
        let left = parseInt(glass_elem.css("left").replace(/[^-\d\.]/g, '')) + size_difference / 2;
        let bottom = parseInt(glass_elem.css("bottom").replace(/[^-\d\.]/g, '')) + size_difference / 2;

        glass_elem_temp.css({
            "width": width + "px",
            "height": height + "px",
            "left": left + "px",
            "bottom": bottom + "px",
            "background": "black"
        })

        return glass_elem_temp;
    }

    function removeGlasses() {
        $(".glass").remove();
    }

    let glass_temp = $($("#glasses-template").clone().html());

    removeGlasses();
    for (let i = 0; i < glasses.length; i++) {
        let glass_ = modglass(glass_temp.clone(), glasses[i]);
        let glass_opp = oppositeGlass(glass_.clone(), glasses_frame_width);
        $("#glasses").append([glass_, glass_opp]);
    }


}
