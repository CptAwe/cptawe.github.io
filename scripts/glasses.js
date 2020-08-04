glasses = [
    {
        x: 80,
        x_size: 150,
        y_size: 50,
        rotation: 45,
        color: 'white'
    },
    {
        x: 200,
        x_size: 150,
        y_size: 50,
        rotation: 45,
        color: 'white'
    }
]


function generateGlasses() {
    function glassPosition(x) {
        return -x + 190;
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
        let width = parseInt(glass_elem.css("width").replace(/[^-\d\.]/g, '')) - size_difference;
        let height = parseInt(glass_elem.css("height").replace(/[^-\d\.]/g, '')) - size_difference;
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

    let glass_temp = $($("#glasses-template").clone().html());

    for (let i = 0; i < glasses.length; i++) {
        let glass_ = modglass(glass_temp.clone(), glasses[i]);
        let glass_opp = oppositeGlass(glass_.clone(), 3);
        $("#glasses").append([glass_, glass_opp]);
    }


}