"use strict";

$(document).on("scroll", window, function () {
    if ($(window).scrollTop() > 200) {
        $(".header-nav").css({ "background": "#55b8ffc2", "z-index": "222" });

    } else {
        $(".header-nav").css({ "background": "unset" });
    }
});

/////////////////////////////////

var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a");

menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

////////////////////////////////////////

$(function () {
    $(".header-slider").slick({
        slidesToShow: 1,
        speed: 3000,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                },
            },
        ],
    });
});

if ($(window).width() < 567) {
    $(function () {
        $(".news-slider").slick({
            slidesToShow: 1,
            speed: 3000,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 1000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    },
                },
            ],
        });
    });
}
else {
    $(function () {
        $(".news-slider").slick({
            slidesToShow: 3,
            speed: 3000,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 1000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        dots: false,
                    },
                },
            ],
        });
    });
}

// function scroll_active() {
//     /* вычисляем значения прокрутки страницы по вертикали */
//     var window_top = $(window).scrollTop();
//     /* вычисляем положение якорей на странице от начала страницы  по вертикали*/
//     var menu_top = $('a[name="menu"]').offset().top - 10;
//     var gallery_top = $('a[name="gallery"]').offset().top - 10;
//     /* раздел «Контакты»  у меня на странице расположен самым последним разделом, и небольшой, поэтому если контаты уже отобразались на странице, тогда  активирую пункт меню «Контакты»  */
//     var contacts_top = $('a[name="contacts"]').offset().top - $(window).height() + 180;
//     /* Переключатель активного пункта меню в зависимости от положения на странице, условии написаны от последнего якоря на странице, до первого */
//     /* если на экране отображаются раздел «Контакты»*/
//     if (window_top > contacts_top) {
//         $(".header-nav-burger-menu li").removeClass("active");
//         $('a[href="#contacts"]').parent().addClass("active");
//     }
//     /* если не отображается раздел «Контакты», но страницу прокрутили  ниже якоря третьего раздела*/
//     else if (window_top > gallery_top) {
//         $(".header-nav-burger-menu li").removeClass("active");
//         $('a[href="#gallery"]').parent().addClass("active");
//     }
//     /* если выше третьего, но ниже якоря второго раздела*/
//     else if (window_top > menu_top) {
//         $(".header-nav-burger-menu li").removeClass("active");
//         $('a[href="#menu"]').parent().addClass("active");
//     }
//     /* если не подходят условия предыдущие активируем первый пункт меню*/
//     else {
//         $(".header-nav-burger-menu li").removeClass("active");
//         $('a[href="#page_top"]').parent().addClass("active");
//     }
// }
// jQuery(function () {
//     jQuery(window).scroll(scroll_active);
// });

// var lastId,
//     topMenu = $("#top-menu"),
//     topMenuHeight = topMenu.outerHeight() + 15,
//     menuItems = topMenu.find("a"),
//     scrollItems = menuItems.map(function () {
//         var item = $($(this).attr("href"));
//         if (item.length) { return item; }
//     });

// menuItems.click(function (e) {
//     var href = $(this).attr("href"),
//         offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
//     $('html, body').stop().animate({
//         scrollTop: offsetTop
//     }, 300);
//     e.preventDefault();
// });

// $(window).scroll(function () {
//     var fromTop = $(this).scrollTop() + topMenuHeight;
//     var cur = scrollItems.map(function () {
//         if ($(this).offset().top < fromTop)
//             return this;
//     });
//     cur = cur[cur.length - 1];
//     var id = cur && cur.length ? cur[0].id : "";

//     if (lastId !== id) {
//         lastId = id;
//         menuItems
//             .parent().removeClass("active")
//             .end().filter("[href=#" + id + "]").parent().addClass("active");
//     }
// });

function initMap() {
    let myMap = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 40.661845,
            lng: -73.928147
        },
        zoom: 13,
        styles:
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
    });

    let myIcon = 'img/point.png';
    let marker = new google.maps.Marker({
        position: {
            lat: 40.661845,
            lng: -73.928147
        },
        map: myMap,
        title: 'Monticello',
        icon: myIcon
    });
}



