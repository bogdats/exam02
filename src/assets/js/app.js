import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './lib/slick.min.js';

//Scroll Menu
$(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
        $('.ba-header-wrap').addClass('ba-scrolled');
    } else {
        $('.ba-header-wrap').removeClass('ba-scrolled');
    }
});


// Slider
let imageSlider = $('.ba-team__slider');
imageSlider.slick({
   dots: true,
   arrows: false
});

//Add Map
function initMap() {
    //Create map and asign to this baMap var
    let mapCenter = {
        lat: 49.568506,
        lng: 34.585482


    }
    let baMap = new google.maps.Map(document.getElementById('ba-map'), {
        center: mapCenter,
       zoom: 15,
       disableDefaultUI: true
    });

    let marker = new google.maps.Marker({
        position: {
            lat: 49.568506,
            lng: 34.585482
        },
        map: baMap,
        icon: 'assets/img/favicon.svg'
    });
}

$(document).ready(function (e) {
    initMap();
});





$(document).foundation();


