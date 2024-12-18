//banner
const banner_list = new Swiper('.banner_list', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true, //기본값은 false 슬라이드 반복
  navigation: {
    nextEl: ".swiper-button-next",//다음
    prevEl: ".swiper-button-prev",//이전
  },
});


$(".pause").click(function () {
  banner_list.autoplay.stop();
  $(this).hide();
  $(".play").show();
});

$(".play").click(function () {
  banner_list.autoplay.start();
  $(this).hide();
  $(".pause").show();
});





//best_menu

const best_list = new Swiper('.best_list', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  speed: 1000,
  loop: true, //기본값은 false 슬라이드 반복
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {

      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});




/* new_list */

$(".btn_list button").click(function () {
  //클릭한 요소에 active클래스를 추가
  $(this).addClass("active")
  //클릭한 요소의 형제요소에 active 클래스 제거
  $(this).siblings().removeClass("active")
  //클릭한 요소의 번호를 찾아서
  //number 변수에 저장(할당)하시오
  let number = $(this).index();
  //이미지 리스트 중 찾은 번호에 해당하는 
  //이미지는 fadeIn 되고
  //해당 이미지의 해당요소는 hide
  $(".btn_img li").eq(number).fadeIn().siblings().hide();
});



