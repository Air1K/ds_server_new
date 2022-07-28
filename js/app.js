var cursor = document.querySelector(".cursor");
var krug = document.querySelector(".uet");
var box_bottom = document.querySelector(".box-content");
const body = document.querySelector("body");
var aura = document.querySelector(".aura");
var styleNode;
let poz_top = 0;
let vertical_position = 0, client_X = 0, client_Y = 0 ;

const content_top_tt_koll1_el1 = document.querySelector(".content-top-tt-koll1-el1");
const height_el = document.querySelector(".top-tt-box");
let height_ = window.getComputedStyle(height_el, null).height;
const content_top_tt_koll1_el2 = document.querySelector(".content-top-tt-koll1-el2");
const content_top_tt_koll2_el1 = document.querySelector(".content-top-tt-koll2-el1");
const content_top_tt_koll2_el2 = document.querySelector(".content-top-tt-koll2-el2");

const fon_content_tt1_1 = document.querySelector(".fon-content-tt1_1");
const fon_content_tt1_2 = document.querySelector(".fon-content-tt1_2");
const fon_content_tt2_1 = document.querySelector(".fon-content-tt2_1");
const fon_content_tt2_2 = document.querySelector(".fon-content-tt2_2");

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }

  cursor.classList.add('hiden');
  aura.classList.add('hiden');
var style = document.querySelector('body').style;
var style_strok = `url("../img-2/osu_fon/${getRandomInt(19)}.png")`;
style.setProperty('--background', style_strok);

const pageHeight = document.documentElement.scrollHeight;
const windowInnerHeight = window.innerHeight;
const fonmem = document.querySelector(".fon-mem");
document.onscroll = function (e) {
	if (pageYOffset)//usual
	  vertical_position = pageYOffset;
	else if (document.documentElement.clientHeight)//ie
	  vertical_position = document.documentElement.scrollTop;
	else if (document.body)//ie quirks
	  vertical_position = document.body.scrollTop;
	//   console.log("asda"); 
	//   console.log(vertical_position);
	const mem = new IntersectionObserver(entries => {
		// перебор записей
		entries.forEach(entry => {
		  // если элемент появился
		  if (entry.isIntersecting) {
			// добавить ему CSS-класс
			fonmem.style.cssText = "top: "+(840-((vertical_position*50)/100))+"px;";
			// console.log(vertical_position);
		  }
		});
	  });
	  mem.observe(document.querySelector('.fon-mem'));
	//   console.log(pageHeight - windowInnerHeight);

	  if ((pageHeight - windowInnerHeight)==vertical_position){
		html.style.cssText = "overflow-y: hidden;overflow-x: hidden;"
	  }
//видосы тут

let new_wert_pos = vertical_position - height_content_bottom;
//Ниже функция
	  //-----------------1
	  const animscroll_content = new IntersectionObserver(entries => {
		// перебор записей
		entries.forEach(entry => {
		  // если элемент появился
		  if (entry.isIntersecting) {
			// добавить ему CSS-класс 
			poz_top++;
			content_top_tt_koll1_el1.style.cssText = "top: "+(1600-((vertical_position*50)/100))+"px; transform: rotate("+((new_wert_pos*2)/100)+"deg) translateX("+((new_wert_pos*6)/100)+"px);";
			content_top_tt_koll1_el2.style.cssText = "top: "+(2200-((vertical_position*60)/100))+"px; transform: rotate("+((new_wert_pos*1.5)/100)+"deg) translateX("+((new_wert_pos*1)/100)+"px);";
			content_top_tt_koll2_el1.style.cssText = "top: "+(3200-((vertical_position*90)/100))+"px; transform: rotate("+(-(new_wert_pos*1)/100)+"deg) translateX("+(-(new_wert_pos*3)/100)+"px);";
			content_top_tt_koll2_el2.style.cssText = "top: "+(1000-((vertical_position*30)/100))+"px; transform: rotate("+(-(new_wert_pos*0.4)/100)+"deg) translateX("+(-(new_wert_pos*1)/100)+"px);";

			//-------------рамки

			fon_content_tt1_1.style.cssText = " transform: rotate("+((new_wert_pos*2)/100)+"deg) translateX("+((new_wert_pos*6)/100)+"px);";
			fon_content_tt1_2.style.cssText = " transform: rotate("+((new_wert_pos*1.5)/100)+"deg) translateX("+((new_wert_pos*1)/100)+"px);";
			fon_content_tt2_1.style.cssText = " transform: rotate("+(-(new_wert_pos*3)/100)+"deg) translateX("+(-(new_wert_pos*3)/100)+"px);";
			fon_content_tt2_2.style.cssText = " transform: rotate("+(-(new_wert_pos*2)/100)+"deg) translateX("+(-(new_wert_pos*1)/100)+"px);";

			// content_top_tt_koll2_el2.style.cssText = "top: "+(1300-((vertical_position*33)/100))+"px;";
		}
		});
	  });
	  animscroll_content.observe(document.querySelector('.top-tt-box'));

	  //---------------2
	//   const animscroll_content2 = new IntersectionObserver(entries => {
	// 	// перебор записей
	// 	entries.forEach(entry => {
	// 	  // если элемент появился
	// 	  if (entry.isIntersecting) {
	// 		// добавить ему CSS-класс 
	// 		poz_top++;
	// 		console.log(height_)
	// 		content_top_tt_koll1_el1.style.cssText = "top: "+(1600-((vertical_position*50)/100))+"px;";
			
	// 	  }
	// 	});
	//   });
	//   animscroll_content2.observe(document.querySelector('.top-tt-box'));
	  //---------------3

	  //---------------4
	  //style_css_();
  }

let X_aura = 0;
let Y_aura = 0; 
fonmem.style.cssText = "top: 319px;";
window.addEventListener("mousemove", function(e){
	client_X = e.clientX;
	client_Y = e.clientY;
	X_aura += Math.round((client_X-X_aura) / 3);
	Y_aura += Math.round((client_Y-Y_aura) / 3);
	style_css_();
	// for(let i =0; i<2; i++){
	// 	X_aura += Math.round((client_X-X_aura) / 3);
	// 	Y_aura += Math.round((client_Y-Y_aura) / 3);
	// 	style_css_();
	// }
	cursor.classList.remove('hiden');
	aura.classList.remove('hiden');
});
document.addEventListener('mouseout', ()=>{
	cursor.classList.add('hiden');
	aura.classList.add('hiden');
});


function style_css_(){
	cursor.style.cssText = "left: "+client_X + "px; top: "+(client_Y)+"px;";
	aura.style.cssText = "left: "+((X_aura-34)) + "px; top: "+(Y_aura-34)+"px;";
}

window.onload = function(){
	document.querySelector('body').style.overflowY = "auto";
	const logods = document.querySelector('body');

	
		const img_1 = document.querySelector('.img-logo-1');
		const img_2 = document.querySelector('.img-logo-2');

		const forbac = 10;
		const forfront = 20;

		const speed = 0.1;

		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;
		
		function setMouseParallaxStyle(){
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			img_1.style.cssText = `transform: translate(${positionX/forbac}%, ${positionY/forbac}%);`;
			img_2.style.cssText = `transform: translate(${positionX/forfront}%, ${positionY/forfront}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();
		logods.addEventListener("mousemove", function(e){
			const parallaxWidth = logods.offsetWidth;
			const parallaxHeight = 500;
			// console.log(parallaxHeight);

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;
		});
	
}

var styleNode = document.createElement("style");
var style_span = document.querySelector("span");
var conthitcircleoverlay_1 = document.querySelector(".conthitcircleoverlay-1");
var conthitcircleoverlay_3= document.querySelector(".conthitcircleoverlay-2");
var conthitcircleoverlay_2 = document.querySelector(".conthitcircleoverlay-3");
var slider = document.querySelector(".slider1");
var slider1 = document.querySelector(".slider3");
var slider2 = document.querySelector(".slider2");


const observer = new IntersectionObserver(entries => {
	// перебор записей
	entries.forEach(entry => {
	  // если элемент появился
	  if (entry.isIntersecting) {
		// добавить ему CSS-класс
		conthitcircleoverlay_1.classList.add('square-animation');
		conthitcircleoverlay_3.classList.add('square-animation3');
		conthitcircleoverlay_2.classList.add('square-animation2');
		slider.classList.add('_sliderfollowcircle');
		slider2.classList.add('_sliderfollowcircle2');
		slider1.classList.add('_sliderfollowcircle1');
		krug.classList.add('anim-items');
		krug.classList.remove('ue');
  		styleNode.innerText = "span:nth-child(1){animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);}span:nth-child(2) {animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);} span:nth-child(3) {animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0); }span:nth-child(4) {animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);} span:nth-child(5) {animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0); } span:nth-child(6) {	animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);}span:nth-child(7) {animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);}";
 		document.body.appendChild(styleNode);
	  }
	  if (!entry.isIntersecting) {
		// добавить ему CSS-класс
		conthitcircleoverlay_1.classList.remove('square-animation');
		conthitcircleoverlay_3.classList.remove('square-animation3');
		conthitcircleoverlay_2.classList.remove('square-animation2');
		slider.classList.remove('_sliderfollowcircle');
		slider2.classList.remove('_sliderfollowcircle2');
		slider1.classList.remove('_sliderfollowcircle1');
		krug.classList.remove('anim-items');
		styleNode.innerText = "";
	  }
	});
  });
observer.observe(document.querySelector('.krug-osu'));











const content_1_p = document.querySelector(".cont-1-p");
const content_2_p = document.querySelector(".cont-2-p");
const content_3_p = document.querySelector(".cont-3-p");
const content_4_p = document.querySelector(".cont-4-p");
const content_1 = document.querySelector(".content-1");
const content_2 = document.querySelector(".content-2");
const content_3 = document.querySelector(".content-3");
const content_4 = document.querySelector(".content-4");
const fon_content1 = document.querySelector(".fon-content-1");
const fon_content2 = document.querySelector(".fon-content-2");
const fon_content3 = document.querySelector(".fon-content-3");
const fon_content4 = document.querySelector(".fon-content-4");


const text1 = new IntersectionObserver(entries => {
	// перебор записей
	entries.forEach(entry => {
	  // если элемент появился
	  if (entry.isIntersecting) {
		// добавить ему CSS-класс
		content_1_p.style.cssText = `transform: scale(1);`;
		content_1.style.cssText = `opacity: 1;`;
		fon_content1.style.cssText = `transform: translate(30px, 0); opacity: 1;`;
	  }
	  if (!entry.isIntersecting) {
		// добавить ему CSS-класс
		content_1_p.style.cssText = `transform: scale(1.2);`;
		fon_content1.style.cssText = `transform: translate(-150%, 0); opacity: 0;`;
		content_1.style.cssText = `opacity: 0`;

	  }
	});
  });
  text1.observe(document.querySelector('.content-1'));


  const text2 = new IntersectionObserver(entries => {
	// перебор записей
	entries.forEach(entry => {
	  // если элемент появился
	  if (entry.isIntersecting) {
		// добавить ему CSS-класс
		content_2_p.style.cssText = `transform: scale(1);`;
		content_2.style.cssText = `opacity: 1;`;
		fon_content2.style.cssText = `transform: translate(30px, 0); opacity: 1;`;
	  }
	  if (!entry.isIntersecting) {
		// добавить ему CSS-класс
		content_2_p.style.cssText = `transform: scale(1.2);`;
		fon_content2.style.cssText = `transform: translate(-150%, 0); opacity: 0;`;
		content_2.style.cssText = `opacity: 0`;

	  }
	});
  });
  text2.observe(document.querySelector('.content-2'));


  const text3 = new IntersectionObserver(entries => {
	// перебор записей
	entries.forEach(entry => {
	  // если элемент появился
	  if (entry.isIntersecting) {
		// добавить ему CSS-класс
		content_3_p.style.cssText = `transform: scale(1);`;
		content_3.style.cssText = `opacity: 1;`;
		fon_content3.style.cssText = `transform: translate(30px, 0); opacity: 1;`;
	  }
	  if (!entry.isIntersecting) {
		// добавить ему CSS-класс
		content_3_p.style.cssText = `transform: scale(1.2);`;
		fon_content3.style.cssText = `transform: translate(-150%, 0); opacity: 0;`;
		content_3.style.cssText = `opacity: 0`;

	  }
	});
  });
  text3.observe(document.querySelector('.content-3'));


  const text4 = new IntersectionObserver(entries => {
	// перебор записей
	entries.forEach(entry => {
	  // если элемент появился
	  if (entry.isIntersecting) {
		// добавить ему CSS-класс
		content_4_p.style.cssText = `transform: scale(1);`;
		content_4.style.cssText = `opacity: 1;`;
		fon_content4.style.cssText = `transform: translate(30px, 0); opacity: 1;`;
	  }
	  if (!entry.isIntersecting) {
		// добавить ему CSS-класс
		content_4_p.style.cssText = `transform: scale(1.2);`;
		fon_content4.style.cssText = `transform: translate(-150%, 0); opacity: 0;`;
		content_4.style.cssText = `opacity: 0`;

	  }
	});
  });
  text4.observe(document.querySelector('.content-4'));



  let height_content_bottom = $('.top-tt-box').offset().top;
// content_top_tt_koll1_el1.style.cssText = "top: "+(1600-(((height_content_bottom-500)*50)/100))+"px; transform: rotate("+0+"deg) translateX("+0+"px);";



var words = ['No osu!-No Life', 'лидирующий сервер по osu', 'Наши админы будут заботиться о вас', 'Чтобы все ваше время', 'проведенное на сервере ','сопровождалось позитивом'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 40;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

function schow_mem_kach(){
	
}
let vizibl_mem_kach = true;
let kach_mem_num_img = 1;
const kach_mems = document.querySelector(".mem-kach");
const bg_image_blur = document.querySelector(".bg-image-blur");
const topblok = document.querySelector(".topblok");
const bg_image = document.querySelector(".bg-image");
var refreshId;
var refres_schow;
const kach_mem = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		vizibl_mem_kach = true;

		bg_image_blur.style.cssText = `background: url('../img-2/mem-kach/kach${kach_mem_num_img}.jpg')0% 0% / cover; position: absolute; width: 800px; height: 500px;`;
		bg_image.style.cssText = `background: url('../img-2/mem-kach/kach${kach_mem_num_img}.jpg')0% 0% / cover; position: absolute; width: 800px; height: 500px;`;
		
		topblok.classList.add('text_anim_mem');
		kach_mem_num_img++;
		clearInterval(refreshId);
		refreshId = setInterval(function() {
			
			if(vizibl_mem_kach){
				
				kach_mems.classList.add('anim_mem_kach');
				if(kach_mem_num_img > 7){ kach_mem_num_img = 1; }
				var style_mem_kach_bg_image_blur = bg_image_blur.style;
				var style_mem_kach_bg_image = bg_image.style;
				var style_strok_mem_kach = `url("../img-2/mem-kach/kach${kach_mem_num_img}.jpg")`
				console.log(style_strok_mem_kach);
				kach_mem_num_img++;

				style_mem_kach_bg_image_blur.setProperty('background', style_strok_mem_kach);
				style_mem_kach_bg_image_blur.setProperty('background-size', `cover`);

				style_mem_kach_bg_image.setProperty('background', style_strok_mem_kach);
				style_mem_kach_bg_image.setProperty('background-size', `cover`);
				// kach_mems.classList.remove('anim_mem_kach');
				
				clearInterval(refres_schow);
				refres_schow = setInterval(function() {
					if(vizibl_mem_kach){
					kach_mems.classList.remove('anim_mem_kach');}
				}, 2500)
				
			}
		}, 5000);
	  }
	  if (!entry.isIntersecting) {
		vizibl_mem_kach = false;
		kach_mems.classList.remove('anim_mem_kach');
		// topblok.classList.remove('text_anim_mem');
	  }
	});
  });
kach_mem.observe(document.querySelector('.mem-kach'));

