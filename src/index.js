//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
import './less/index.less';
import './index.less';
import './blocks/categories/categories.less';
import './blocks/specialOffer/specialOffer.less';
import './blocks/specialOffer/specialOffer';

import 'owl.carousel2/dist/assets/owl.carousel.css';
import 'owl.carousel2';

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    margin:10,
    autoWidth:true,
    items:4,
    nav: true,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']
})
