var map2;


function initLandMap2() {

    var secheltLoc = new google.maps.LatLng(55.710366, 37.615753);
    // var secheltLoc = new google.maps.LatLng(55.706098, 37.618803);
    var secheltLoc2 = new google.maps.LatLng(55.712366, 37.615753);


    map2 = new google.maps.Map(document.getElementById('land-map'), {
        center: secheltLoc,
        scrollwheel: false,
        zoom: 12,
        styles:
            [{ stylers: [
                { saturation: -100 },
                { lightness: -10 }
            ]}
            ]
    });

    var marker = new google.maps.Marker({
        map: map2,
        icon: {
            url: 'images/marker.png',
            size: new google.maps.Size(26, 32),
        },
        position: secheltLoc
    });

    function optionsInfoBubble(map, content, position) {
        return {
            map: map,
            content: content,
            position: position,
            shadowStyle: 0,
            padding: 20,
            backgroundColor: '#fff',
            borderRadius: 0,
            borderWidth: 0,
            borderColor: '#000',
            disableAutoPan: true,
            backgroundClassName: 'infobubble',
            arrowPosition: 50,
            arrowSize: 10,
            arrowStyle: 0,
            minWidth: 350,
            minHeight: 90,
            hideCloseButton: true
        };
    }

    marker.addListener('click', function () {
        var content = '<div class="infobubble__content"><span class="infobubble__small-text">Мы находимся по адресу:</span><br><span class="infobubble__big-text">Москва, <br>улица Серпуховский Вал, 7</span><span class="infobubble__close"></span></div>';
        var option =  optionsInfoBubble(map2, content, secheltLoc2);
        var infobubble = new InfoBubble(option);
        infobubble.open();
    })

}

$(document).ready(function () {
    initLandMap2();
});