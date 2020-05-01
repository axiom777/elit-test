//IE forEach polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

import 'owl.carousel2';
import './less/owl.less';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
import './less/index.less';
import './index.less';
import './blocks/categories/categories.less';
import './blocks/specialOffer/specialOffer.less';
import './blocks/specialOffer/specialOffer';
import $ from 'jquery';

import 'owl.carousel2/dist/assets/owl.carousel.css';

$(document).ready(function () {
  $('.owl-carousel').owlCarousel();
});
$('.categories-list').owlCarousel({
  margin: 40,
  autoWidth: false,
  items: 4,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1280: {
      items: 4,
    },
  },
});

$('.special').owlCarousel({
  margin: 40,
  autoWidth: false,
  items: 4,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1280: {
      items: 4,
    },
  },
});
$('.slider').owlCarousel({
  nav: true,
  navText: [
    '<svg class="pos_absc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.52 443.52"><path d="M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z"/></svg>',
    '<svg class="pos_absc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.52 443.52"><path d="M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z"/></svg>',
  ],
  items: 1,
  margin: 30,
  dots: false,
});
