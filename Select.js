document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1.2, // По умолчанию 1 слайд
        spaceBetween: 3.67,
        slidesPerGroup: 1,
        centeredSlides: false, // Центрирование активного слайда
       loop:true,

        // Отступы между слайдами

        // Зацикливание слайдов
        /*autoplay: {
          delay: 5000, // Автопрокрутка каждые 5 секунд
          disableOnInteraction: false, // Автопрокрутка не останавливается при взаимодействии
        },*/


        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: 'coverflow',
       coverflowEffect: {
          slideShadows: true,
          
        modifier: 0,
         
          

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