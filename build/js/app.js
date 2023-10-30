// JS fragment import example
import * as functions from './modules/functions.js';
functions.isWebp();
functions.spollers();

// БАЗОВІ СКРИПТИ
import './modules/base.js';

// АНЧОР ШАПКА
import './modules/anchor.js';

// ТАБИ
import './modules/tabs.js';

// 2 ВАРІАНТ ТАБУ НА ЧИСТОМУ JS
import './modules/tabs2.js';

//  СЛАЙДЕР
import './libs/swiper-bundle.min.js';
import './modules/slider.js';

// ПОПАП
import './modules/popup.js';


// ВІДЕО
import './modules/video.js';

// ANIMATIONS	
import './modules/anim.js';


$(document).ready(function() {
	if($('.find__select')){
		$('.find__select').each(()=>{
			$(this).find('select').niceSelect()
		})
	}
	if ($('.faq__content-header')) {
		$('.faq__content-header').click(function (e) {
		  $(this).toggleClass('active');
		  $(this).next('.faq__content-info').slideToggle();
		});
	}
	if ($('.faq__header')) {
		$('.faq__header').click(function (e) {
		  $(this).toggleClass('active');
		  $(this).next('.faq__content').slideToggle();
		  $(this).next('.faq__content').css('display','flex');
		});
	  }
});

// Динамический адаптив
// Документация: https://github.com/FreelancerLifeStyle/dynamic_adapt#readme
import './libs/dynamicAdapt.js';

// NPM Swiper installation example
/*
import Swiper, { Navigation, Pagination } from 'swiper';

// init Swiper:
const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
	...
});
*/

//  IMAGES LAZY LOAD
// import Bound from './libs/bounds.js'

// const boundary = Bound({
// 	margins: {bottom: 100}
// })

// const image = document.querySelectorAll('img[data-src]')

// const whenImageEnters = (image) => {
// 	return () => {
// 		image.src = image.dataset.src
// 	}
// }

// image.forEach(img => {
// 	boundary.watch(img, whenImageEnters(img))
// })





