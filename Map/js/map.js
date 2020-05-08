// var map;
// var zoom = 15;
//
// function CenterControl(controlDiv, map) {
//
//     // Set CSS for the control border.
//     var controlUI = document.createElement('div');
//     controlUI.style.backgroundColor = '#fff';
//     controlUI.style.border = '2px solid #fff';
//     controlUI.style.borderRadius = '3px';
//     controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
//     controlUI.style.cursor = 'pointer';
//     controlUI.style.marginBottom = '22px';
//     controlUI.style.textAlign = 'center';
//     controlUI.title = 'Click to recenter the map';
//     controlDiv.appendChild(controlUI);
//
//     // Set CSS for the control interior.
//     var controlText = document.createElement('div');
//     controlText.style.color = 'rgb(25,25,25)';
//     controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
//     controlText.style.fontSize = '16px';
//     controlText.style.lineHeight = '38px';
//     controlText.style.paddingLeft = '5px';
//     controlText.style.paddingRight = '5px';
//     controlText.innerHTML = 'Center Map';
//     controlUI.appendChild(controlText);
//
//
//
//     // Setup the click event listeners: simply set the map to Chicago.
//     controlUI.addEventListener('click', function() {
//         map.setZoom (zoom++);
//     });
//
// }
//
//
// function initMap() {
//
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 56.455, lng: 84.973},
//         zoom: 15
//     });
//
//     var pos = {lat: 56.452639, lng: 84.974935};
//
//     var marker = new google.maps.Marker({
//         position: pos,
//         map: map,
//         title: "",
//         // icon: 'https://drive.google.com/file/d/1ROuEUYJD--ZfEbgbnyiNEGC4wfmCKViM'
//     });
//
//     var info = new google.maps.InfoWindow({
//         content: '<h3>hello</h3><p>gigi</p>',
//     });
//
//     marker.addListener("click", function () {
//         info.open(map, marker);
//     });
//
//     var centerControlDiv = document.createElement('div');
//     var centerControl = new CenterControl(centerControlDiv, map);
//
//     centerControlDiv.index = 1;
//     map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
// }

$(document).ready(function () {
    ymaps.ready(init);
    function init(){
        var map = new ymaps.Map("map", {
            center: [56.455, 84.974824],
            zoom: 15,
            controls: ['zoomControl']
        });
        var placemark = new ymaps.Placemark([56.452639, 84.974824], {
                balloonContent: "<p class='address'>Ул. Ф. Лыткина, дом 8</p>" +
                    "<p class='hours'>Часы работы:</p>" +
                    "<p>пн-пт - 9:00 - 18:30</p>" +
                    "<p>сб - 11:00 - 17:00</p>" +
                    "<p>вск - выходной</p>"}
            , {
                    iconLayout: 'default#image',
                    iconImageHref: './img/Vector.png',
                    iconShape: {
                        type: 'Circle',
                        coordinates: [0, -15],
                        radius: 20
                    },
                balloonCloseButton: false,
                hideIconOnBalloonOpen: false,
            });

        // var placemark = new ymaps.Placemark([56.452639, 84.974935], null, {
        //     iconLayout: 'default#image',
        //     iconImageHref: '../img/Vector.png',
        //     iconImageSize: [40, 40],
        //     iconImageOffset: [-20, -20],
        //     // Определим интерактивную область над картинкой.
        //     iconShape: {
        //         type: 'Circle',
        //         coordinates: [0, 0],
        //         radius: 20
        //     },
        // });
        map.geoObjects.add(placemark);
    }
    // Создадим метку.

});

