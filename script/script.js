"use strict"

// SLIDER
const buttonPrev = document.querySelector('.reviews__button-prev');
const buttonNext = document.querySelector('.reviews__button-next');




const swiper = new Swiper(".slider_pc", {
	slidesPerView: 1,
	// autoplay: {
	// 			delay: 3000,
	// 			},
	spaceBetween: 30,
	stopOnLastSlide: true,
	disableOnInteraction: false,
	speed: 900,
	breakpoints: {
		767: {
			slidesPerView: 2,
		}
	},
	navigation: {
		nextEl: '.reviews__button-next',
		prevEl: '.reviews__button-prev',
	},
});

const swipermobi = new Swiper(".slider_mobi", {
	slidesPerView: 1,
	// autoplay: {
	// 			delay: 3000,
	// 			},
	spaceBetween: 30,
	stopOnLastSlide: true,
	disableOnInteraction: false,
	speed: 900,
	breakpoints: {
		767: {
			slidesPerView: 2,
		}
	},
	navigation: {
		nextEl: '.reviews__button-next',
		prevEl: '.reviews__button-prev',
	},
});


const slider_adventages = new Swiper(".advantages__blocks-phone", {
	slidesPerView: 1.2,
	// autoplay: {
	// 			delay: 3000,
	// 			},
	spaceBetween: 30,
	stopOnLastSlide: true,
	disableOnInteraction: false,
	speed: 900,
	breakpoints: {
		767: {
			slidesPerView: 2,
		}
	},
	navigation: {
		nextEl: '.advantages__button-next',
		prevEl: '.advantages__button-prev',
	},
});
// const slider_team = new Swiper(".team__blocks-phone", {
// 	slidesPerView: 1.2,
// 	// autoplay: {
// 	// 			delay: 3000,
// 	// 			},
// 	spaceBetween: 30,
// 	stopOnLastSlide: true,
// 	disableOnInteraction: false,
// 	speed: 900,
// 	breakpoints: {
// 		767: {
// 			slidesPerView: 2,
// 		}
// 	},
// 	navigation: {
// 		nextEl: '.team__button-next',
// 		prevEl: '.team__button-prev',
// 	},
// });
const slider_services = new Swiper(".services__blocks-mobi", {
	slidesPerView: 1.2,
	// autoplay: {
	// 			delay: 3000,
	// 			},
	spaceBetween: 30,
	stopOnLastSlide: true,
	disableOnInteraction: false,
	speed: 900,
	breakpoints: {
		767: {
			slidesPerView: 2,
		}
	},
	navigation: {
		nextEl: '.services__button-next',
		prevEl: '.services__button-prev',
	},
});


const slider_team_pc = new Swiper(".team__blocks-pc", {
	slidesPerView: 1.05,
	// autoplay: {
	// 			delay: 3000,
	// 			},
	spaceBetween: 30,
	stopOnLastSlide: false,
	disableOnInteraction: false,
	speed: 900,
	breakpoints: {
		767: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		}
	},
	navigation: {
		nextEl: '.team__button-next',
		prevEl: '.team__button-prev',
	},
});

let button = document.getElementById("button-pagination-1");

slider_team_pc.on("slideChange", function() {
  console.log("slide changed - current slide is: " + this.realIndex )
  if(this.realIndex == 0){
    console.log("first slide do something")
    button.disabled = false;  
  }
  else{
    console.log("not first slide do somehing")
    button.disabled = true;  
  }
});



// buttonPrev.classList.add(`reviews__button-prev_${swiper.realIndex + 1}`); // +1 для того, чтобы не было класса типа .header_style_0. Дело вкуса.

// /*Обрабатываем событие смены слайда*/
// swiper.on('slideChange', function() {
//   buttonPrev.className = "reviews__button-prev"; //"Сбрасываем" стиль шапки на значение по умолчанию
//   buttonPrev.classList.add(`reviews__button-prev_${swiper.realIndex + 1}`); //В зависимости от того, на каком по счёту слайде сейчас находимся, устанавливаем соответствующий стиль шапке
// });


// buttonNext.classList.add(`reviews__button-next_${swiper.realIndex + 1}`); 

// swiper.on('slideChange', function() {
//   buttonNext.className = "reviews__button-next"; 
//   buttonNext.classList.add(`reviews__button-next_${swiper.realIndex + 1}`); 
// });





// buttonPrev.classList.add(`reviews__button-prev_${swipermobi.realIndex + 1}`); // +1 для того, чтобы не было класса типа .header_style_0. Дело вкуса.

// /*Обрабатываем событие смены слайда*/
// swipermobi.on('slideChange', function() {
//   buttonPrev.className = "reviews__button-prev"; //"Сбрасываем" стиль шапки на значение по умолчанию
//   buttonPrev.classList.add(`reviews__button-prev_${swipermobi.realIndex + 1}`); //В зависимости от того, на каком по счёту слайде сейчас находимся, устанавливаем соответствующий стиль шапке
// });


// buttonNext.classList.add(`reviews__button-next_${swipermobi.realIndex + 1}`); 

// swipermobi.on('slideChange', function() {
//   buttonNext.className = "reviews__button-next"; 
//   buttonNext.classList.add(`reviews__button-next_${swipermobi.realIndex + 1}`); 
// });



const cardContainer = document.querySelector(".glowing-cards");
const cards = document.querySelectorAll(".glowing-cards .advantages__block");

cardContainer.addEventListener("mousemove", e => {
	cards.forEach(card => {
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		card.style.setProperty("--x", `${x}px`);
		card.style.setProperty("--y", `${y}px`);
	});
});


