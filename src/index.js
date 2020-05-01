//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
import './less/index.less';
import './index.less';
import './blocks/categories/categories.less';
import './blocks/specialOffer/specialOffer.less';
import './blocks/specialOffer/specialOffer';

import 'owl.carousel2/dist/assets/owl.carousel.css';
import 'owl.carousel2';

$(document).ready(function () {
  $('.owl-carousel').owlCarousel();
});
$('.categories-list').owlCarousel({
  margin: 40,
  autoWidth: true,
  items: 4,
});

$('.special').owlCarousel({
  margin: 40,
  autoWidth: true,
  items: 4,
});
$('.slider').owlCarousel({
  margin: 0,
  autoWidth: false,
  items: 1,
});
