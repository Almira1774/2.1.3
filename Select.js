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
                document
                    .querySelectorAll(".swiper-slide-active .slide-content")
                    .forEach((el) => {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                    });
            },
        },
    });

    const button = document.querySelector('button');
    const icon = button.querySelector('.icon');
    const slides = document.querySelectorAll('.swiper-slide');
    let SlidesCount = 0;
    const screen = window.innerWidth;

    
    let heightToOpen, heightToClose;
    if (screen > 767 && screen < 1119) {
        SlidesCount = 5;
        heightToOpen = 406;
        heightToClose = 232;
    } else if (screen > 1119 && screen < 1281) {
        SlidesCount = 3;
        heightToOpen = 342;
        heightToClose = 266;
    }

    
    for (let i = slides.length - SlidesCount; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }
    button.classList.add('showAll');

    const toggleSlides = function (count) {
        const totalSlides = slides.length;
        const slidesToToggle = Math.min(count, totalSlides);

        for (let i = totalSlides - slidesToToggle; i < totalSlides; i++) {
            if (slides[i].classList.contains('hidden')) {
                slides[i].classList.remove('hidden');
                slides[i].classList.add('visible');
            } else {
                slides[i].classList.remove('visible');
                slides[i].classList.add('hidden');
            }
        }
    };

    const iconChange = function () {
        const buttonToOpen = button.classList.contains('showAll');
        const navHeight = document.querySelector('.swiper');

        if (buttonToOpen) {
            button.classList.remove('showAll');
            button.classList.add('closeAll');
            button.textContent = 'Скрыть';
            icon.classList.remove('icon--Show');
            icon.classList.add('icon--Hide');
            navHeight.style.height = heightToOpen + 'px';
            toggleSlides(SlidesCount);
        } else {
            button.classList.remove('closeAll');
            button.classList.add('showAll');
            icon.classList.remove('icon--Hide');
            icon.classList.add('icon--Show');
            button.textContent = 'Показать все';
            navHeight.style.height = heightToClose + 'px';
            toggleSlides(SlidesCount);
        }
    };

    button.addEventListener('click', iconChange);
});




