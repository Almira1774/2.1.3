document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,

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


const button = document.querySelector('button')
const icon = button.querySelector('.icon');

const toggleSlides = function (count) {
    const slides = document.querySelectorAll('.swiper-slide');

    const totalSlides = slides.length;
    const slidesToToggle = Math.min(count, totalSlides);


    for (let i = totalSlides - slidesToToggle; i < totalSlides; i++) {

        if (slides[i].classList.contains('hidden')) {
            slides[i].classList.remove('hidden');
            slides[i].classList.add('visible')
        }
        else {
            slides[i].classList.remove('visible')
            slides[i].classList.add('hidden');

        }
    }
}



const iconChange = function (count, heightToOpen, heightToClose) {
    const buttonToOpen = button.classList.contains('showAll');
    const buttonToClose = button.classList.contains('closeAll');
    const navHeight = document.querySelector('.swiper');

    if (buttonToOpen) {
        button.classList.remove('showAll');
        button.classList.add('closeAll');
        button.textContent = 'Скрыть';
        icon.classList.remove('icon--Show');
        icon.classList.add('icon--Hide');
        button.insertBefore(icon, button.firstChild);
        console.log(icon.classList);
        navHeight.style.height = heightToOpen + 'px'
        toggleSlides(count)


    }
    else if (buttonToClose) {
        button.classList.remove('closeAll');
        button.classList.add('showAll');
        icon.classList.remove('icon--Hide');
        icon.classList.add('icon--Show');
        button.textContent = 'Показать все';
        button.insertBefore(icon, button.firstChild);
        console.log(icon.classList);
        navHeight.style.height = heightToClose + 'px'
        toggleSlides(count)


    }
    console.log(icon.classList);

}

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.swiper-slide'); // Выбираем все слайды
    var SlidesCount = 0;
    const screen = window.innerWidth; // Получаем ширину экрана

    // Проверяем, находится ли ширина экрана в нужном диапазоне
    if (screen > 767 && screen < 1119) {
         SlidesCount = 5;
    }
     if (screen > 1119 && screen < 1281) {
         SlidesCount = 3;
    }
    // Добавляем класс .hidden к нужным слайдам
    for (let i = slides.length - SlidesCount; i < slides.length; i++) {

        slides[i].classList.add('hidden'); // Добавляем класс скрытия

    }
    button.classList.add('showAll');

    button.addEventListener('click', function () {

    if (screen > 767 && screen < 1119) {
         
        iconChange(SlidesCount, 406, 232);

    }
    if (screen > 1119 && screen < 1281) {
        
        iconChange(SlidesCount, 342, 266);

    }

   





})
});

