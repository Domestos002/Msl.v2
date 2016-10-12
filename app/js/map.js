var map;
var map2;
var featureInfoBubble;

function initLandMap() {
    var secheltLoc = new google.maps.LatLng(55.750701, 37.617047);


    map = new google.maps.Map(document.getElementById('land-map'), {
        center: secheltLoc,
        scrollwheel: false,
        zoom: 9,
        styles:
            [{ stylers: [
                { saturation: -100 },
                { lightness: -10 }
            ]}
            ]
    });

    map.data.loadGeoJson('/pr79/wp-content/themes/Doors/js/map/geodata/moscow.json');


    map.data.setStyle(function (feature) {
        return {
            fillColor: '#fff',
            fillOpacity: 0,
            strokeColor: '#fff',
            strokeWeight: 2,
            visible: true
        };
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


    $(document).on('click', '#land-map img', function(e){
        // alert("hi");
        map.data.setStyle(function (feature) {
            return {
                fillColor: '#fff',
                fillOpacity: 0,
                strokeColor: '#fff',
                strokeWeight: 2,
                visible: true
            };
        });
    });

    map.addListener('click', function(event) {
        var this_name = event.feature.getProperty('NAME'),
            this_center = event.feature.getProperty('center'),
            center_value = this_center.split(',');

        map.data.setStyle(function(feature) {
            var visible = feature.getProperty("NAME") == this_name ? true : false;
            return {
                fillColor: '#000',
                fillOpacity: 0.5,
                strokeColor: '#fff',
                strokeWeight: 2,
                visible: visible
            };
        });

        var content = "<div class='b-map-infobox'><span class='close'></span><p class='b-map-infobox__title'>Infobubble</p><p class='b-map-infobox__descr'>"+this_name+"</p></div>",
            opiton = optionsInfoBubble(map, content, new google.maps.LatLng((center_value[0]), (center_value[1])));


        if ($(".b-infobubble-wrapper").length > 0) {

        } else {
            featureInfoBubble = new InfoBubble(opiton);
            featureInfoBubble.open();
        }



        $(featureInfoBubble.bubble_).addClass('b-infobubble-wrapper')

        $(featureInfoBubble.bubble_).on('click', '.close', function(){
            $(featureInfoBubble.bubble_).remove();
            map.data.setStyle(function (feature) {
                return {
                    fillColor: '#fff',
                    fillOpacity: 0,
                    strokeColor: '#fff',
                    strokeWeight: 2,
                    visible: true
                };
            });
        })
    });

}

function initLandMap2() {
    var secheltLoc = new google.maps.LatLng(55.706098, 37.618803);
    var secheltLoc2 = new google.maps.LatLng(55.708000, 37.618803);


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
            url: 'images/icons/marker.png',
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