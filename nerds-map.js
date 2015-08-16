  var myMap;
            ymaps.ready(init);
            function init(){
                myMap = new ymaps.Map('map', {
                    center:[45.04369, 38.94274], 
                    zoom:18,
                    behaviors: ['default'],
                    controls: []
                });
                myPlacemark = new ymaps.Placemark([45.043323, 38.94424], {}, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/marker.png',
                    iconImageSize: [231, 190],
                    iconImageOffset: [-40, -200]
                });
                myMap.geoObjects.add(myPlacemark);
            }