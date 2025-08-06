document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1.3, // По умолчанию 1 слайд
      spaceBetween: 2,
      slidesPerGroup: 1,
     
     
       // Отступы между слайдами
      loop: true,
       // Зацикливание слайдов
      /*autoplay: {
        delay: 5000, // Автопрокрутка каждые 5 секунд
        disableOnInteraction: false, // Автопрокрутка не останавливается при взаимодействии
      },*/
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "fade", // Плавное появление нового слайда
      fadeEffect: {
        crossFade: true,
      },
      on: {
        init: function () {
          // Показываем контент на первом активном слайде
          document
            .querySelectorAll(".swiper-slide-active .slide-content")
            .forEach((el) => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            });
        },
      },
    });
  });